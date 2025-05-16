import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { FaArrowRight, FaCheck, FaChartLine, FaClipboardCheck, FaFileAlt, FaRocket, FaUserClock, FaBrain, FaRobot, FaBolt, FaDownload } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useToast } from "@/hooks/use-toast";

// Import partner logos
import bluePrismLogo from "../assets/partners/Blue_Prism_Logo-700x126.png";
import glyphXLogo from "../assets/partners/GLYPHX.png";
import microsoftLogo from "../assets/partners/Microsoft_logo.png";
import uiPathLogo from "../assets/partners/UiPath_2019_Corporate_Logo.png";
import automationAnywhereLogo from "@assets/AutomationAnywhereLogo.png";
import mquotientLogo from "../assets/mquotient-logo-new.png";
import mquotientLogoPNG from "/attached_assets/mquotient LOGO=removebackground.png";

// Import updated Power Platform logos
import powerPlatformLogo from "/attached_assets/PowerPlatform_scalable.png";
import powerAppsLogo from "/attached_assets/PowerApps_scalable.png";
import powerAutomateLogo from "/attached_assets/PowerAutomate_scalable.png";
import powerBILogo from "/attached_assets/PowerBI_scalable.png";
import powerPagesLogo from "/attached_assets/PowerPages_scalable.png";
import powerFxLogo from "/attached_assets/PowerFx_scalable_1747370012300.png";
import aiBuilderLogo from "/attached_assets/AIBuilder_scalable.png";
import dataverseLogo from "/attached_assets/Dataverse_scalable.png";
import copilotStudioLogo from "/attached_assets/CopilotStudio_scalable.png";

// Define types
interface CaseStudyResult {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  process: string[];
  results: CaseStudyResult[];
  tags: string[];
}

interface PartnerLogo {
  name: string;
  logo: string;
  width: number;
}

interface ServiceData {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  studies: CaseStudy[];
  partners: PartnerLogo[];
}

// Download form validation schema
const downloadFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required"),
  isHuman: z.boolean().refine(val => val === true, {
    message: "Please confirm you are human",
  }),
});

type DownloadFormValues = z.infer<typeof downloadFormSchema>;

// CaseStudies component
const CaseStudies = () => {
  const { toast } = useToast();
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);
  const [showDownloadDialog, setShowDownloadDialog] = useState(false);
  const [selectedServiceTab, setSelectedServiceTab] = useState("ai-data-entry");
  
  // Update page title for SEO
  useEffect(() => {
    document.title = "mquotient Case Studies | AI Document Processing, RPA & Automation Success Stories";
  }, []);

  // Set up form for download dialog
  const form = useForm<DownloadFormValues>({
    resolver: zodResolver(downloadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      isHuman: false,
    },
  });
  
  // Function to handle showing the download dialog
  const handleStudyClick = (study: CaseStudy) => {
    setActiveStudy(study);
    setShowDownloadDialog(true);
  };
  
  // Function to handle direct download without requiring user details
  const handleDownloadClick = (study: CaseStudy) => {
    // Create a simple PDF directly without complex HTML conversion
    generatePDF(study);
    
    // Show success message
    toast({
      title: "Download Started",
      description: "Your case study is being downloaded.",
    });
  };
  
  // Function to generate PDF from a case study
  const generatePDF = async (study: CaseStudy) => {
    try {
      // Show loading toast
      toast({
        title: "Preparing Download",
        description: "Creating your PDF, please wait..."
      });
      
      // Create a new PDF document
      const pdf = new jsPDF();
      
      // Add mquotient branding at the top - since we're having issues with the image,
      // we'll use text that matches the branding
      pdf.setFontSize(22);
      pdf.setTextColor(236, 0, 140); // Pink color from mquotient logo
      pdf.text("mquotient", 20, 20);
      
      // Add "Case Study" label
      pdf.setFontSize(12);
      pdf.setTextColor(100, 100, 100);
      pdf.text("Case Study", 20, 30);
      
      // Add divider line
      pdf.setDrawColor(1, 37, 125); // Deep blue
      pdf.setLineWidth(0.5);
      pdf.line(20, 34, 190, 34);
      
      // Add the title
      pdf.setFontSize(16);
      pdf.setTextColor(1, 37, 125); // #01257D
      const titleLines = pdf.splitTextToSize(study.title, 170);
      pdf.text(titleLines, 20, 45);
      
      // Calculate vertical position after title
      let yPos = 45 + (titleLines.length * 7);
      
      // Add the subtitle
      pdf.setFontSize(12);
      pdf.setTextColor(100, 100, 100);
      const subtitleLines = pdf.splitTextToSize(study.subtitle, 170);
      pdf.text(subtitleLines, 20, yPos);
      
      // Move down for Challenge section
      yPos += (subtitleLines.length * 7) + 10;
      
      // Add Challenge section
      pdf.setFontSize(14);
      pdf.setTextColor(1, 37, 125);
      pdf.text("The Challenge", 20, yPos);
      
      yPos += 8;
      
      // Add challenge text
      pdf.setFontSize(11);
      pdf.setTextColor(60, 60, 60);
      const challengeLines = pdf.splitTextToSize(study.challenge, 170);
      pdf.text(challengeLines, 20, yPos);
      
      // Move down for Solution section
      yPos += (challengeLines.length * 6) + 15;
      
      // Add a new page if needed
      if (yPos > 250) {
        pdf.addPage();
        yPos = 20;
      }
      
      // Add Solution section
      pdf.setFontSize(14);
      pdf.setTextColor(1, 37, 125);
      pdf.text("Our Solution", 20, yPos);
      
      yPos += 8;
      
      // Add solution text
      pdf.setFontSize(11);
      pdf.setTextColor(60, 60, 60);
      const solutionLines = pdf.splitTextToSize(study.solution, 170);
      pdf.text(solutionLines, 20, yPos);
      
      // Move down for Process section
      yPos += (solutionLines.length * 6) + 15;
      
      // Add a new page if needed
      if (yPos > 250) {
        pdf.addPage();
        yPos = 20;
      }
      
      // Add Process section
      pdf.setFontSize(14);
      pdf.setTextColor(1, 37, 125);
      pdf.text("Implementation Process", 20, yPos);
      
      yPos += 10;
      
      // Add process steps
      pdf.setFontSize(11);
      study.process.forEach((step, index) => {
        pdf.setTextColor(1, 37, 125);
        pdf.text(`${index + 1}.`, 20, yPos);
        pdf.setTextColor(60, 60, 60);
        
        const stepLines = pdf.splitTextToSize(step, 160);
        pdf.text(stepLines, 30, yPos);
        
        yPos += (stepLines.length * 6) + 5;
        
        // Add a new page if needed
        if (yPos > 270 && index < study.process.length - 1) {
          pdf.addPage();
          yPos = 20;
        }
      });
      
      // Add the footer
      pdf.setFontSize(10);
      pdf.setTextColor(150, 150, 150);
      pdf.text(`mquotient Case Study`, 20, 285);
      
      // Save the PDF
      const filename = `mquotient-${study.id}-case-study.pdf`;
      pdf.save(filename);
      
      // Show success toast
      toast({
        title: "Download Ready",
        description: "Your case study is being downloaded.",
      });
      
    } catch (error) {
      console.error("PDF generation error:", error);
      toast({
        title: "Error",
        description: "Could not generate the PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Handle form submission for download
  const onSubmit = (values: DownloadFormValues) => {
    if (activeStudy) {
      // In a real app, you would save the lead information
      console.log("Download form submitted:", values);
      
      // Generate and download the PDF
      handleDownloadClick(activeStudy);
      
      // Close the dialog
      setShowDownloadDialog(false);
      
      // Reset the form
      form.reset();
    }
  };

  // RPA case studies
  const rpaCaseStudies = [
    {
      id: "insurance-claims",
      title: "Insurance Claims Processing Automation",
      subtitle: "How a leading insurance provider reduced claims processing time by 75% using RPA and intelligent document processing",
      challenge: "A major insurance provider was struggling with manual processing of claims, which was time-consuming, error-prone, and caused significant backlogs. With over 2,000 claims received daily, 15 full-time employees were dedicated to data entry, yet processing times often exceeded 3 days per claim.",
      solution: "We implemented a comprehensive RPA solution with intelligent document processing capabilities that could automatically extract data from claim forms, validate policy information against their database, and route claims for appropriate review or automatic approval based on business rules.",
      process: [
        "Analyzed the existing claims workflow and identified bottlenecks and automation opportunities",
        "Developed and implemented OCR technology integrated with UiPath RPA to capture and extract data from diverse claim form formats",
        "Built intelligent validation rules to verify claim data against policy information",
        "Created an automated triage system that routed claims based on complexity, required coverage, and policy terms",
        "Integrated the solution with the client's existing claims management system and policy database"
      ],
      results: [
        {
          title: "75% Faster Processing",
          description: "Claims processing time reduced from 3 days to less than 18 hours on average",
          icon: <FaUserClock />
        },
        {
          title: "92% Accuracy",
          description: "Data extraction accuracy improved significantly compared to manual processing",
          icon: <FaClipboardCheck />
        },
        {
          title: "$1.2M Annual Savings",
          description: "Staffing requirements reduced by 60%, allowing reallocation to higher-value tasks",
          icon: <FaChartLine />
        }
      ],
      tags: ["Insurance", "RPA", "UiPath", "Document Processing", "Claims Management"]
    },
    {
      id: "finance-reconciliation",
      title: "Automated Finance Reconciliation for a Global Retailer",
      subtitle: "Reducing manual finance operations and increasing accuracy through RPA-enabled reconciliation processes",
      challenge: "A global retail company with operations in 12 countries was experiencing significant challenges with their financial reconciliation processes. Their team spent over 200 hours monthly manually matching transactions across multiple systems, resulting in delayed financial reporting, human errors, and compliance risks.",
      solution: "We deployed a comprehensive RPA solution using Blue Prism to automate the reconciliation process across all their financial systems including Oracle Financials, SAP, and their in-house transaction processing system.",
      process: [
        "Mapped the entire reconciliation process across all systems and identified automation touchpoints",
        "Developed Blue Prism digital workers that could access all relevant systems securely",
        "Implemented intelligent exception handling to flag discrepancies requiring human review",
        "Created real-time dashboards for finance teams to monitor reconciliation status",
        "Established audit trails that documented all automated reconciliations for compliance purposes"
      ],
      results: [
        {
          title: "95% Reduction in Processing Time",
          description: "Reconciliation process reduced from 200+ hours to just 10 hours monthly",
          icon: <FaUserClock />
        },
        {
          title: "99.8% Accuracy Rate",
          description: "Virtually eliminated human error from the reconciliation process",
          icon: <FaClipboardCheck />
        },
        {
          title: "$580,000 Annual Savings",
          description: "Combination of labor reallocation and error reduction delivered significant ROI",
          icon: <FaChartLine />
        }
      ],
      tags: ["Finance", "RPA", "Blue Prism", "Reconciliation", "Retail"]
    }
  ];

  // AI Data Entry Case Studies
  const aiDataEntryCaseStudies = [
    {
      id: "invoice-processing",
      title: "Intelligent Invoice Processing Transformation",
      subtitle: "Revolutionizing accounts payable workflows with AI-based document extraction",
      challenge: "A multinational manufacturing company was struggling with processing over 15,000 supplier invoices monthly across 7 different countries and languages. Their 23-person accounts payable team manually entered data from diverse invoice formats into their ERP system, resulting in a 12-day average processing cycle, frequent errors, and approximately $2.1M in missed early payment discounts annually.",
      solution: "We implemented our Intelligent Document Processing solution to automatically capture, classify, and extract key data from invoices regardless of format, language, or delivery method. The system integrates directly with the client's ERP system and applies business validation rules to automate approval workflows.",
      process: [
        "Assessed the existing invoice processing workflow and documented requirements across all regions",
        "Trained our proprietary machine learning models on client's invoice samples for high-accuracy extraction",
        "Implemented advanced OCR with Natural Language Processing to understand context and extract structured data",
        "Developed custom validation rules aligned with company policies and regional requirements",
        "Created an exception handling interface for managing unusual cases requiring human intervention",
        "Deployed a phased rollout approach, starting with English invoices and expanding to other languages"
      ],
      results: [
        {
          title: "93% Automation Rate",
          description: "Vast majority of invoices now processed with zero human intervention",
          icon: <FaRobot />
        },
        {
          title: "10x Faster Processing",
          description: "Average processing time reduced from 12 days to just 1.2 days",
          icon: <FaUserClock />
        },
        {
          title: "$3.2M Annual Savings",
          description: "Combined benefits from staff reallocation, early payment discounts, and error reduction",
          icon: <FaChartLine />
        }
      ],
      tags: ["Invoice Processing", "OCR", "Machine Learning", "Accounts Payable", "Manufacturing"]
    },
    {
      id: "medical-records",
      title: "Healthcare Provider Medical Records Digitization",
      subtitle: "Transforming paper-based medical documentation into structured electronic health records",
      challenge: "A large healthcare network with 8 hospitals and 42 clinics was drowning in paper medical records. They needed to digitize millions of historical patient documents while also creating a sustainable system for processing 12,000+ new documents generated daily. The manual processing created significant delays in patient care, billing issues, and compliance risks.",
      solution: "We developed a comprehensive medical document processing solution that combined high-speed scanning operations with our AI-driven document classification and data extraction technology specifically trained for medical documentation. The system extracts and organizes patient information, diagnoses, procedures, medications, and other critical data for integration with their electronic health records (EHR) system.",
      process: [
        "Established a secure document scanning operation for historical records with strict chain-of-custody protocols",
        "Created specialized machine learning models for different medical document types (intake forms, lab results, doctors' notes, etc.)",
        "Implemented advanced handwriting recognition for physicians' notes and prescriptions",
        "Developed complex validation rules to ensure extracted data met medical and compliance standards",
        "Built a secure integration with their Epic EHR system for seamless data transfer",
        "Created a workflow for ongoing digital document processing for new patient records"
      ],
      results: [
        {
          title: "9.6M+ Records Digitized",
          description: "Successfully converted historical paper records into searchable digital format",
          icon: <FaFileAlt />
        },
        {
          title: "87% Automation Rate",
          description: "High percentage of documents now processed without manual intervention",
          icon: <FaRobot />
        },
        {
          title: "5.4 Hour Reduction",
          description: "Average time to access complete patient records dramatically decreased",
          icon: <FaRocket />
        }
      ],
      tags: ["Healthcare", "Document Processing", "OCR", "Machine Learning", "EHR Integration"]
    }
  ];

  // Microsoft Power Platform Case Studies
  const powerPlatformCaseStudies = [
    {
      id: "field-service-app",
      title: "Custom Field Service Management Application",
      subtitle: "Modernizing field operations for a utility company with Microsoft Power Platform",
      challenge: "A regional utility company with 200+ field technicians was struggling with an outdated paper-based system for work orders and inspections. Technicians had limited access to asset history, frequently revisited sites for missing information, and spent hours on manual paperwork. Customer satisfaction was declining due to delays and communication gaps.",
      solution: "We designed and implemented a comprehensive field service solution built on Microsoft Power Platform. The solution includes a Power Apps mobile application for technicians, automated workflows with Power Automate, and real-time analytics dashboards built with Power BI. The solution integrates with their existing CRM and asset management systems.",
      process: [
        "Conducted extensive field research with technicians to understand workflow and pain points",
        "Designed an intuitive Power Apps canvas app optimized for mobile and offline use",
        "Implemented Power Automate flows for work order assignment, notifications, and approvals",
        "Created a Dataverse data model to store work orders, asset information, and service history",
        "Developed Power BI dashboards for performance tracking and resource optimization",
        "Deployed a phased rollout with comprehensive training and feedback cycles"
      ],
      results: [
        {
          title: "67% Paperwork Reduction",
          description: "Dramatically reduced administrative burden on field technicians",
          icon: <FaFileAlt />
        },
        {
          title: "2 Hour Daily Time Savings",
          description: "Each technician gained productive time through more efficient processes",
          icon: <FaUserClock />
        },
        {
          title: "23% More Service Calls",
          description: "Increased field service capacity without adding staff",
          icon: <FaRocket />
        }
      ],
      tags: ["Utilities", "Microsoft Power Platform", "Field Service", "Mobile Apps", "Process Automation"]
    },
    {
      id: "compliance-tracking",
      title: "Regulatory Compliance Management Solution",
      subtitle: "Creating a unified compliance tracking system for a financial services organization",
      challenge: "A mid-size financial services company was struggling to manage regulatory compliance across multiple jurisdictions. They were using a combination of spreadsheets, shared documents, and email notifications, resulting in missed deadlines, incomplete documentation, and increasing risk of non-compliance penalties. The manual process required 3 full-time compliance specialists just to track requirements.",
      solution: "We developed an integrated compliance management system using Microsoft Power Platform that centralizes all regulatory requirements, automates notification workflows, maintains comprehensive audit trails, and provides real-time compliance status dashboards for executives and auditors.",
      process: [
        "Mapped the full compliance landscape and documentation requirements across all jurisdictions",
        "Created a structured Dataverse database to track regulations, requirements, and compliance status",
        "Built a Power Apps portal for compliance documentation and attestation submission",
        "Implemented Power Automate flows for deadline notifications, escalations, and approval processes",
        "Developed Power BI dashboards for compliance status monitoring and risk assessment",
        "Created a secure audit trail system for regulatory examinations"
      ],
      results: [
        {
          title: "100% Deadline Adherence",
          description: "Eliminated missed compliance deadlines and associated penalties",
          icon: <FaClipboardCheck />
        },
        {
          title: "72% Process Efficiency",
          description: "Reduced time spent on compliance management and documentation",
          icon: <FaUserClock />
        },
        {
          title: "5-Day Audit Preparation",
          description: "Reduced preparation time for regulatory audits from 4 weeks to 5 days",
          icon: <FaRocket />
        }
      ],
      tags: ["Financial Services", "Microsoft Power Platform", "Compliance", "Process Automation", "Risk Management"]
    }
  ];

  // Service data for tabs
  const serviceData: Record<string, ServiceData> = {
    "ai-data-entry": {
      title: "AI-Powered Data Entry Workforce",
      description: "Our Intelligent Document Processing solution eliminates manual data entry with an AI-powered workforce that learns from your documents and business processes. We extract structured data from any source—invoices, forms, medical records, and more—with unmatched accuracy and speed.",
      icon: <FaBrain />,
      color: "from-purple-500 to-indigo-500",
      studies: aiDataEntryCaseStudies,
      partners: [
        { name: "GlyphX", logo: glyphXLogo, width: 140 }
      ]
    },
    "intelligent-automation": {
      title: "Robotic Process Automation (RPA)",
      description: "We design, implement, and optimize end-to-end Robotic Process Automation solutions that transform your business operations. Our expertise spans UiPath, Automation Anywhere, Blue Prism, and custom RPA development.",
      icon: <FaRobot />,
      color: "from-blue-500 to-cyan-500",
      studies: rpaCaseStudies,
      partners: [
        { name: "UiPath", logo: uiPathLogo, width: 120 },
        { name: "Blue Prism", logo: bluePrismLogo, width: 140 },
        { name: "Automation Anywhere", logo: automationAnywhereLogo, width: 140 }
      ]
    },
    "power-platform": {
      title: "Microsoft Power Platform Solutions",
      description: "Discover how our custom business applications and process automation solutions—built using Microsoft Power Apps, Power Automate, Power BI, and Dataverse—have helped organizations streamline operations, enhance productivity, and make data-driven decisions faster.",
      icon: <FaBolt />,
      color: "from-teal-500 to-emerald-500",
      studies: powerPlatformCaseStudies,
      partners: [
        { name: "Microsoft", logo: microsoftLogo, width: 140 }
      ]
    }
  };

  // Render a case study card
  const renderCaseStudy = (study: CaseStudy) => (
    <Card className="rounded-xl overflow-hidden border-border/50 hover:shadow-md transition-shadow duration-300 h-full" key={study.id} id={`study-${study.id}`}>
      <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 pb-3">
        <CardTitle className="text-xl">{study.title}</CardTitle>
        <CardDescription className="text-muted-foreground">{study.subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 relative">
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-semibold text-primary mb-1">The Challenge</h4>
            <p className="text-muted-foreground line-clamp-3">{study.challenge}</p>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-1">Our Solution</h4>
            <p className="text-muted-foreground line-clamp-3">{study.solution}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 my-4">
          {study.tags.map((tag, i) => (
            <Badge key={i} variant="outline" className="bg-muted/50">{tag}</Badge>
          ))}
        </div>
        
        <div className="grid grid-cols-3 gap-4 my-4">
          {study.results.slice(0, 3).map((result: CaseStudyResult, idx: number) => (
            <div className="text-center" key={idx}>
              <div className="bg-primary/10 text-primary h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-2">
                {result.icon}
              </div>
              <h5 className="font-bold text-sm mb-1">{result.title}</h5>
              <p className="text-xs text-muted-foreground">{result.description}</p>
            </div>
          ))}
        </div>
        
        <Button 
          variant="outline" 
          className="w-full mt-4 group border-primary/20 hover:border-primary/40"
          onClick={() => handleDownloadClick(study)}
        >
          <FaDownload className="mr-2 h-4 w-4 text-primary group-hover:text-primary" />
          <span>Download Case Study</span>
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">
            Transformation in <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Action</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Browse our case studies to see how we've helped organizations like yours reduce costs, increase efficiency, and drive digital transformation through intelligent automation.
          </p>
        </div>
        
        <Tabs 
          defaultValue="ai-data-entry" 
          value={selectedServiceTab}
          onValueChange={setSelectedServiceTab}
          className="mb-16"
        >
          <div className="mb-8 flex justify-center">
            <TabsList className="grid w-full max-w-3xl grid-cols-3">
              <TabsTrigger value="ai-data-entry" className="text-sm md:text-base py-3">
                <FaBrain className="h-4 w-4 inline-block mr-2" />
                <span className="hidden sm:inline">AI-Powered Data Entry</span>
                <span className="sm:hidden">AI Data</span>
              </TabsTrigger>
              <TabsTrigger value="intelligent-automation" className="text-sm md:text-base py-3">
                <FaRobot className="h-4 w-4 inline-block mr-2" />
                <span className="hidden sm:inline">Intelligent Automation</span>
                <span className="sm:hidden">RPA</span>
              </TabsTrigger>
              <TabsTrigger value="power-platform" className="text-sm md:text-base py-3">
                <FaBolt className="h-4 w-4 inline-block mr-2" />
                <span className="hidden sm:inline">Microsoft Power Platform</span>
                <span className="sm:hidden">Power Platform</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          {Object.keys(serviceData).map(serviceKey => (
            <TabsContent key={serviceKey} value={serviceKey}>
              <div className="mb-10">
                <div className="bg-gradient-to-r from-muted/50 to-muted p-8 rounded-xl mb-8">
                  <h2 className={`text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${serviceData[serviceKey].color} mb-4`}>
                    {serviceData[serviceKey].title}
                  </h2>
                  <p className="text-muted-foreground mb-6 max-w-3xl">
                    {serviceData[serviceKey].description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-6">
                    <span className="text-sm font-medium">Trusted by:</span>
                    <div className="flex flex-wrap items-center gap-6 overflow-x-auto pb-2 no-scrollbar snap-x">
                      {serviceData[serviceKey].partners.map((partner: PartnerLogo, idx: number) => (
                        <div key={idx} className="flex-shrink-0 snap-start">
                          <img 
                            src={partner.logo} 
                            alt={partner.name} 
                            style={{ width: partner.width + 'px', maxHeight: '50px' }}
                            className="object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {serviceData[serviceKey].studies.map((study: CaseStudy) => renderCaseStudy(study))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-6">
            Ready to write your <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">success story?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our automation solutions can transform your business operations, reduce costs, and drive growth.
          </p>
          <Link href="/contact">
            <Button className="rounded-full px-8 py-6 h-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition duration-300">
              Schedule a Consultation
              <FaArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;