import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, insertCareerApplicationSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { mailService } from "./mail";
import { ZodError } from "zod";
import { getActiveJobListings, getJobListingById } from "./data/job-listings";
import multer from "multer";
import path from "path";
import fs from "fs";

// Set up multer for file uploads
const uploadDir = path.join(process.cwd(), "uploads");
// Create uploads directory if it doesn't exist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage_config = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadDir);
  },
  filename: (_req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extension);
  }
});

const upload = multer({ 
  storage: storage_config,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB max file size
  },
  fileFilter: (_req, file, cb) => {
    // Accept only common document/resume file formats
    const allowedFileTypes = [
      '.pdf', '.doc', '.docx', '.rtf', '.txt'
    ];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedFileTypes.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, DOC, DOCX, RTF, and TXT files are allowed.'));
    }
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const savedMessage = await storage.createContactMessage(validatedData);
      
      // Send email notification
      try {
        await mailService.sendContactNotification({
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company || undefined,
          subject: validatedData.subject,
          message: validatedData.message
        });
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Continue execution even if email fails
      }
      
      res.status(201).json({ 
        success: true, 
        message: "Thank you for your message! We will get back to you soon.",
        data: savedMessage 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: validationError.message || "Invalid form data"
        });
      } else {
        console.error('Error processing contact form:', error);
        res.status(500).json({ 
          success: false, 
          message: "An unexpected error occurred"
        });
      }
    }
  });

  // Get all contact messages (typically would be protected, but included for demo)
  app.get("/api/contact", async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve messages"
      });
    }
  });

  // Get all active job listings
  app.get("/api/careers/jobs", (_req: Request, res: Response) => {
    try {
      const jobs = getActiveJobListings();
      res.status(200).json(jobs);
    } catch (error) {
      console.error('Error fetching job listings:', error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve job listings"
      });
    }
  });

  // Get a specific job listing by ID
  app.get("/api/careers/jobs/:id", (req: Request, res: Response) => {
    try {
      const jobId = req.params.id;
      const job = getJobListingById(jobId);
      
      if (!job) {
        return res.status(404).json({ 
          success: false, 
          message: "Job listing not found"
        });
      }
      
      res.status(200).json(job);
    } catch (error) {
      console.error('Error fetching job listing:', error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve job listing"
      });
    }
  });

  // Submit career application with resume upload
  app.post("/api/careers/apply", upload.single('resume'), async (req: Request, res: Response) => {
    try {
      // Get file details
      const resumeFile = req.file;
      const formData = req.body;

      // Validate form data
      const validatedData = insertCareerApplicationSchema.parse({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        message: formData.message,
        resumeFilename: resumeFile ? resumeFile.originalname : undefined,
        resumePath: resumeFile ? resumeFile.path : undefined
      });

      // Save application to database
      const savedApplication = await storage.createCareerApplication(validatedData);

      // Send email notification
      try {
        await mailService.sendCareerApplicationNotification({
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          position: validatedData.position,
          message: validatedData.message,
          resumeFilename: resumeFile?.originalname
        });
      } catch (emailError) {
        console.error('Failed to send career application email notification:', emailError);
        // Continue execution even if email fails
      }

      res.status(201).json({
        success: true,
        message: "Thank you for your application! We will review it and contact you soon.",
        data: savedApplication
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: validationError.message || "Invalid application data"
        });
      } else if (error instanceof Error) {
        console.error('Error processing career application:', error);
        res.status(500).json({
          success: false,
          message: error.message || "An unexpected error occurred"
        });
      } else {
        res.status(500).json({
          success: false,
          message: "An unexpected error occurred"
        });
      }
    }
  });

  // Get all career applications (typically would be protected, but included for demo)
  app.get("/api/careers/applications", async (_req: Request, res: Response) => {
    try {
      const applications = await storage.getCareerApplications();
      res.status(200).json(applications);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve applications"
      });
    }
  });

  const httpServer = createServer(app);
  
  return httpServer;
}
