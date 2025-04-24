import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const savedMessage = await storage.createContactMessage(validatedData);
      
      res.status(201).json({ 
        success: true, 
        message: "Thank you for your message! We will get back to you soon.",
        data: savedMessage 
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: validationError.message || "Invalid form data"
        });
      } else {
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

  const httpServer = createServer(app);
  
  return httpServer;
}
