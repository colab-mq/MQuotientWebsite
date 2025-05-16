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

// Form validation schema for download form
const downloadFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
});

type DownloadFormValues = z.infer<typeof downloadFormSchema>;

const CaseStudies = () => {
  // Update page title for SEO
  useEffect(() => {
    document.title = "mquotient Case Studies | Success Stories in AI and RPA Implementation";
  }, []);

  const { toast } = useToast();
  
  // State for service tabs
  const [activeServiceTab, setActiveServiceTab] = useState("ai-data-entry");
  
  // No state needed for direct downloads

  // AI-Powered Data Entry Workforce case studies
  const aiDataEntryCaseStudies: CaseStudy[] = [
    {
      id: "invoice",
      title: "Transforming Invoice Processing Through Automation",
      subtitle: "A leading global consulting firm managing operations for a major telecom provider",
      challenge: "A leading global consulting firm managed invoice processing operations for one of the world's largest telecom providers. The client generated hundreds of thousands of invoices annually, with each invoice often spanning 20–50 pages, packed with detailed service descriptions, usage data, taxes, and regional compliance information. Their manual process was slow, error-prone, and costly, with dozens of full-time employees needed to handle the load, resulting in average invoice turnaround times exceeding 5 days and increased compliance risks.",
      solution: "We deployed an AI-driven document extraction and classification solution with cutting-edge technology. The solution incorporated Optical Character Recognition (OCR) to digitize scanned invoices, Machine Learning Models trained to extract key data fields, Automated Validation rules for cross-checking data, and Classification Engines to organize invoices by region, service type, and supplier.",
      process: [
        "Digitizing invoices using advanced OCR technology designed for mixed quality documents",
        "Training machine learning models on client's specific invoice formats for optimal extraction",
        "Implementing validation rules to cross-check invoice data with purchase orders",
        "Deploying classification engines to organize invoices by region, service type, and supplier",
        "Integrating the solution with existing ERP platforms for seamless data flow",
        "Providing real-time analytics for monitoring invoice processing metrics"
      ],
      results: [
        {
          title: "80% reduction in manual effort",
          description: "Massive decrease in labor required for invoice processing operations.",
          icon: <FaUserClock />
        },
        {
          title: "5x faster processing",
          description: "Processing time per invoice dropped from 5+ days to less than 1 day.",
          icon: <FaChartLine />
        },
        {
          title: "99%+ extraction accuracy",
          description: "Achieved over 99% accuracy in data capture with automated validation.",
          icon: <FaCheck />
        },
        {
          title: "$1.5M annual savings",
          description: "Significant cost reduction by cutting down on manual labor and error rectification.",
          icon: <FaClipboardCheck />
        },
        {
          title: "Enhanced vendor relationships",
          description: "Faster, more accurate invoice processing led to quicker payments and improved negotiation leverage.",
          icon: <FaRocket />
        }
      ],
      tags: ["Finance", "Invoice Processing", "AI Automation", "OCR"]
    },
    {
      id: "mortgage",
      title: "Automating Document Indexing and Data Extraction for Mortgage Loan Audits",
      subtitle: "A Top 5 mortgage lender in the United States",
      challenge: "A Top 5 mortgage lender in the US faced challenges in reviewing mortgage files for loan validity. An incoming mortgage file could range from 300 to 800 pages, comprising over 250 different document types with numerous variations. The manual process of indexing these documents by type and extracting over 1500 data points across multiple pages was characterized by long turnaround times, little flexibility to scale, high error rates due to operator dependency, and resource-intensive quality control.",
      solution: "The lender implemented our AI-Powered Data Entry Workforce solution as a turnkey electronic document classification and data extraction solution. Due to data privacy requirements, the solution was deployed on-premise. This approach allowed for automated document classification and data extraction with minimal manual intervention.",
      process: [
        "Manual effort limited to clubbing pages by document type in designated folders to configure automated classification.",
        "Defining business rules for indexing all loan pages and routing necessary pages for data extraction.",
        "Handling layout variations in unstructured mortgage documents through the configuration module.",
        "Document Classification: Our solution uses a combination of OCR and layout analysis to identify the document type of each page, assigning a confidence score. Pages with low confidence were manually checked.",
        "Routing: Documents were stacked and routed according to customer-defined business rules, extracting required pages to an output folder.",
        "Data Extraction: Our system extracts the defined fields and uses business rules to refine raw OCR output as necessary.",
        "Front-End Quality Control: A User Interface allowed for correcting exceptions or suspect fields that failed any validation rules.",
        "Data Output: Verified data files are secured and encrypted, then delivered to the customer BPM as per their defined ruleset.",
        "The process was designed to run unattended as a zero-touch process."
      ],
      results: [
        {
          title: "Unmatched Accuracy at Scale",
          description: "Delivering 99%+ post-verification accuracy in document classification and data extraction",
          icon: <FaFileAlt />
        },
        {
          title: "90% reduction in manual effort",
          description: "Over 90% reduction in manual effort for classification.",
          icon: <FaUserClock />
        },
        {
          title: "60% reduction in data entry",
          description: "Over 60% reduction in manual effort for data extraction.",
          icon: <FaClipboardCheck />
        },
        {
          title: "Seamless scalability",
          description: "Our system manages peak loads without affecting daily throughput, and volume scaling is transparent.",
          icon: <FaRocket />
        }
      ],
      tags: ["Mortgage", "Document Classification", "Data Extraction", "On-Premise"]
    }
  ];

  // RPA case studies
  const rpaCaseStudies: CaseStudy[] = [
    {
      id: "rpa-case-1",
      title: "Optimizing Process: RPA in Purchase Order ETA Management",
      subtitle: "A global supply chain team in a leading consumer goods company",
      challenge: "A global supply chain team in a leading consumer goods company struggled with managing Purchase Order ETA confirmations. The existing manual process required employees to log into multiple supplier portals, download shipment updates, reconcile expected delivery dates, and update internal systems. This caused delays, errors, and inefficiencies, particularly when handling thousands of POs each month.",
      solution: "We implemented a Robotic Process Automation (RPA) solution using UiPath to automate the end-to-end PO ETA tracking and update process. The bot was designed to log in to various supplier portals, extract shipment and ETA information, compare it with expected delivery data, and update the enterprise system of record automatically.",
      process: [
        "Created a bot to mimic user actions across diverse supplier platforms",
        "Integrated structured data extraction with logic for ETA comparison",
        "Automated updates into the internal PO management system",
        "Scheduled bot runs to ensure real-time updates throughout the day",
        "Included alerts for exception handling and discrepancies requiring human review"
      ],
      results: [
        {
          title: "80% faster PO ETA updates",
          description: "Reduced average update cycle time from 2 days to under 4 hours.",
          icon: <FaRocket />
        },
        {
          title: "Freed up 1,200+ man-hours per year",
          description: "Significant FTE savings through automation of repetitive tasks.",
          icon: <FaUserClock />
        },
        {
          title: "Higher data accuracy",
          description: "Consistent and error-free updates led to better planning and supplier coordination.",
          icon: <FaCheck />
        },
        {
          title: "Improved visibility across the supply chain",
          description: "Timely ETA data improved internal forecasting and reduced stockout risk.",
          icon: <FaChartLine />
        },
        {
          title: "Scalable across multiple categories",
          description: "Easily replicated for other sourcing regions and supplier networks.",
          icon: <FaClipboardCheck />
        }
      ],
      tags: ["Supply Chain", "Purchase Orders", "UiPath", "Process Automation"]
    },
    {
      id: "rpa-case-2",
      title: "Navigating the Future: RPA's Flightpath to Aviation Excellence",
      subtitle: "A leading aviation enterprise",
      challenge: "A leading aviation enterprise faced growing challenges in handling high-volume, time-sensitive operations across its fleet management, compliance, and maintenance reporting systems. Manual data entries, repeated validations, and fragmented systems led to delays, human errors, and compliance risks—ultimately impacting flight readiness and operational efficiency.",
      solution: "To transform the back-end operations, we deployed a suite of RPA bots using Automation Anywhere. These bots were programmed to automate routine and rule-based tasks across multiple aviation workflows—spanning aircraft maintenance scheduling, documentation updates, regulatory compliance checks, and vendor coordination.",
      process: [
        "Automated aircraft maintenance logs and service compliance updates",
        "Bots scheduled routine diagnostics and flagged critical maintenance triggers",
        "Integrated across legacy aviation systems for seamless data synchronization",
        "Implemented real-time dashboards to track bot performance and exceptions",
        "Enabled alerts and escalations for anomalies, ensuring regulatory adherence"
      ],
      results: [
        {
          title: "30% improvement in aircraft readiness KPIs",
          description: "Faster maintenance workflows led to reduced aircraft ground time.",
          icon: <FaRocket />
        },
        {
          title: "Reduced regulatory non-compliance by 85%",
          description: "Accurate and timely filings strengthened operational integrity.",
          icon: <FaCheck />
        },
        {
          title: "Saved over 5,000 manual hours annually",
          description: "Released valuable engineering time to focus on critical maintenance.",
          icon: <FaUserClock />
        },
        {
          title: "Improved cross-functional collaboration",
          description: "Real-time system updates enhanced coordination between teams.",
          icon: <FaClipboardCheck />
        },
        {
          title: "Set a roadmap for scalable aviation automation",
          description: "New use cases identified across flight scheduling and baggage handling.",
          icon: <FaChartLine />
        }
      ],
      tags: ["Aviation", "Compliance", "Automation Anywhere", "Maintenance"]
    }
  ];

  // Power Platform case studies
  const powerPlatformCaseStudies: CaseStudy[] = [
    {
      id: "power-case-opex",
      title: "Enhancing the OPEX Tool with Power Platform",
      subtitle: "A global enterprise organization",
      challenge: "The organization's OPEX tool was cumbersome and outdated, requiring multiple disconnected projects for managing financial inputs. Manual data entry, lack of a mass upload function, and a clunky interface slowed down operations. Teams struggled to maintain accurate financial oversight and spent unnecessary hours performing basic tasks.",
      solution: "We rebuilt the OPEX tool using Microsoft Power Platform technologies—Power Apps, Power Automate, and Power BI. This new solution centralized project data, introduced automation to reduce manual work, and added much-needed flexibility and usability through a modern interface and enhanced reporting.",
      process: [
        "Built a new Power Apps interface for intuitive use",
        "Introduced mass upload capability via Power Automate",
        "Enabled automated workflows for data syncing and validation",
        "Created Power BI dashboards for dynamic, real-time financial tracking",
        "Standardized naming conventions and workflows for ease of use"
      ],
      results: [
        {
          title: "2,080 hours saved annually",
          description: "Major time savings from automation and simplified workflows.",
          icon: <FaUserClock />
        },
        {
          title: "$260K annual cost savings",
          description: "Consolidated tool replaced multiple disconnected projects.",
          icon: <FaClipboardCheck />
        },
        {
          title: "Enhanced financial granularity",
          description: "More precise and accessible data for improved decision-making.",
          icon: <FaChartLine />
        },
        {
          title: "Simplified user experience",
          description: "Non-technical teams could now manage data and updates efficiently.",
          icon: <FaCheck />
        }
      ],
      tags: ["Enterprise", "Finance", "OPEX", "Power Apps", "Power Automate", "Power BI"]
    },
    {
      id: "power-case-vat",
      title: "Automating VAT Invoice Requests with Power Automate",
      subtitle: "A multinational retail chain",
      challenge: "A multinational retail chain faced a recurring operational burden in handling VAT invoice requests from corporate customers. The manual process involved receiving invoice requests via email, validating order and payment details, and manually generating compliant VAT invoices. This led to delays, inconsistencies, and a growing backlog, especially during peak retail periods, impacting customer satisfaction and compliance standards.",
      solution: "We developed and deployed a low-code automation solution using Microsoft Power Automate to streamline and fully automate the VAT invoice request workflow. The system integrated with the client's email, ERP, and invoicing platforms to auto-capture requests, validate inputs, generate invoices, and send them back to requestors—without human intervention.",
      process: [
        "Set up Power Automate to monitor shared mailboxes for invoice request emails",
        "Parsed email content using AI Builder and Power Automate expressions",
        "Connected with ERP system APIs to validate transaction and customer data",
        "Auto-generated compliant VAT invoices using pre-configured templates",
        "Sent responses to requestors and logged transactions for audit readiness",
        "Created dashboards in Power BI for tracking volumes and SLA compliance"
      ],
      results: [
        {
          title: "90% reduction in manual effort",
          description: "Nearly eliminated human involvement in the end-to-end request lifecycle.",
          icon: <FaUserClock />
        },
        {
          title: "Instant turnaround time",
          description: "Invoice delivery time reduced from 3–4 days to under 30 minutes.",
          icon: <FaRocket />
        },
        {
          title: "100% compliance adherence",
          description: "Every VAT invoice met regional format and audit requirements.",
          icon: <FaCheck />
        },
        {
          title: "Enhanced customer experience",
          description: "Faster, accurate responses improved client satisfaction ratings.",
          icon: <FaClipboardCheck />
        },
        {
          title: "Fully scalable automation",
          description: "Easily replicated across 6 business units with zero code duplication.",
          icon: <FaChartLine />
        }
      ],
      tags: ["Retail", "VAT", "Invoice Processing", "Power Automate", "Power BI"]
    },
    {
      id: "power-case-1",
      title: "Field Service Management Transformation",
      subtitle: "A utilities service provider",
      challenge: "A utilities service provider with hundreds of field technicians struggled with inefficient job dispatching, paper-based work orders, and delayed reporting. This resulted in longer response times, customer dissatisfaction, and challenges in tracking field operations performance.",
      solution: "We developed a comprehensive Microsoft Power Platform solution combining Power Apps for mobile field service, Power Automate for workflow automation, and Power BI for analytics. This provided a unified platform for scheduling, dispatching, job management, and performance tracking that transformed their field service operations.",
      process: [
        "Created a custom mobile app for field technicians using Power Apps",
        "Implemented automated job assignment and scheduling using Power Automate",
        "Developed digital forms for work orders, inspections, and customer sign-offs",
        "Built real-time dashboards for managers to monitor field operations",
        "Integrated with existing CRM and ERP systems",
        "Implemented offline capabilities for areas with poor connectivity",
        "Provided real-time job status updates to customers"
      ],
      results: [
        {
          title: "35% increase in jobs completed per day",
          description: "More efficient routing and reduced administrative time.",
          icon: <FaChartLine />
        },
        {
          title: "Digital transformation of field operations",
          description: "Elimination of paper-based processes and manual data entry.",
          icon: <FaRocket />
        },
        {
          title: "Real-time visibility",
          description: "Management had immediate access to field operation status.",
          icon: <FaClipboardCheck />
        },
        {
          title: "Improved customer satisfaction",
          description: "Customer satisfaction scores increased by 28%.",
          icon: <FaUserClock />
        },
        {
          title: "Enhanced compliance",
          description: "Automated documentation ensured regulatory requirements were met.",
          icon: <FaCheck />
        }
      ],
      tags: ["Utilities", "Field Service", "Power Apps", "Power Automate", "Power BI"]
    },
    {
      id: "power-case-2",
      title: "Supply Chain Visibility Solution",
      subtitle: "A global manufacturing company",
      challenge: "A global manufacturing company with operations in 15 countries struggled with supply chain visibility. They had data silos across different systems, manual reporting processes, and couldn't get a unified view of their supply chain performance, leading to inefficiencies and increased costs.",
      solution: "We implemented a Microsoft Power Platform solution centered around Power BI with data integration from multiple sources. This provided real-time visibility into their entire supply chain with automated alerts and recommendations using AI capabilities built into Power Platform.",
      process: [
        "Consolidated data from multiple ERP systems, warehouse management systems, and IoT sensors",
        "Built interactive Power BI dashboards for different roles and levels",
        "Implemented Power Automate flows for alerts and notifications",
        "Created AI models to predict potential supply chain disruptions",
        "Implemented automated reporting to replace manual processes",
        "Developed a Power App for mobile access to key metrics",
        "Provided training and change management support"
      ],
      results: [
        {
          title: "Comprehensive supply chain visibility",
          description: "End-to-end visibility across all operations for the first time.",
          icon: <FaChartLine />
        },
        {
          title: "12% reduction in inventory",
          description: "Better forecasting and visibility led to optimized inventory levels.",
          icon: <FaRocket />
        },
        {
          title: "Proactive risk management",
          description: "Early detection of potential disruptions through AI predictions.",
          icon: <FaCheck />
        },
        {
          title: "Faster decision making",
          description: "Reduced time to make data-driven decisions by 65%.",
          icon: <FaUserClock />
        },
        {
          title: "Single source of truth",
          description: "Eliminated data silos and provided consistent reporting.",
          icon: <FaClipboardCheck />
        }
      ],
      tags: ["Manufacturing", "Supply Chain", "Power BI", "Power Automate"]
    }
  ];

  // Service meta data
  const serviceData: Record<string, ServiceData> = {
    "ai-data-entry": {
      title: "AI-Powered Data Entry Workforce",
      description: "Our intelligent document processing solutions that automatically extract and validate data from both structured and unstructured documents.",
      icon: <FaBrain />,
      color: "from-purple-500 to-pink-500",
      studies: aiDataEntryCaseStudies,
      partners: [
        { name: "GlyphX", logo: glyphXLogo, width: 160 }
      ]
    },
    "rpa": {
      title: "Robotic Process Automation",
      description: "Automate repetitive tasks, reduce errors, and boost efficiency with RPA solutions tailored to your needs, with the platform of your choice driving your specific requirements.",
      icon: <FaRobot />,
      color: "from-blue-500 to-cyan-500",
      studies: rpaCaseStudies,
      partners: [
        { name: "UiPath", logo: uiPathLogo, width: 120 },
        { name: "Blue Prism", logo: bluePrismLogo, width: 120 },
        { name: "Power Automate", logo: powerAutomateLogo, width: 100 },
        { name: "Automation Anywhere", logo: automationAnywhereLogo, width: 160 }
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

  // Function to handle direct download without requiring user details
  const handleDownloadClick = (study: CaseStudy) => {
    // Create a simple PDF directly without complex HTML conversion
    createSimplePDF(study);
    
    // Show success message
    toast({
      title: "Download Started",
      description: "Your case study is being downloaded.",
    });
  };
  
  // Enhanced function to create a comprehensive PDF case study
  const createSimplePDF = (study: CaseStudy) => {
    try {
      // Create a new PDF document
      const pdf = new jsPDF();
      
      // Add MQUOTIENT text as header since we can't reliably add image
      pdf.setFontSize(22);
      pdf.setTextColor(1, 37, 125); // #01257D
      pdf.text("MQUOTIENT", 20, 20);
      
      pdf.setFontSize(12);
      pdf.setTextColor(100, 100, 100);
      pdf.text("Case Study", 20, 30);
      
      // Add divider line
      pdf.setDrawColor(1, 37, 125);
      pdf.setLineWidth(0.5);
      pdf.line(20, 34, 190, 34);
      
      // Add title and subtitle with word wrapping for long titles
      pdf.setFontSize(18);
      pdf.setTextColor(1, 37, 125);
      const titleLines = pdf.splitTextToSize(study.title, 170);
      pdf.text(titleLines, 20, 47);
      
      pdf.setFontSize(13);
      pdf.setTextColor(100, 100, 100);
      const subtitleLines = pdf.splitTextToSize(study.subtitle, 170);
      pdf.text(subtitleLines, 20, 60 + (titleLines.length - 1) * 10);
      
      // Calculate dynamic position based on title/subtitle length
      let yPos = 65 + (titleLines.length - 1) * 10 + (subtitleLines.length - 1) * 7;
      
      // Add challenge section
      pdf.setFontSize(15);
      pdf.setTextColor(1, 37, 125);
      pdf.text("The Challenge", 20, yPos);
      
      pdf.setFontSize(11);
      pdf.setTextColor(0, 0, 0);
      const challengeLines = pdf.splitTextToSize(study.challenge, 170);
      pdf.text(challengeLines, 20, yPos + 8);
      
      // Move to next section, add page if needed
      yPos = yPos + 12 + (challengeLines.length * 5);
      if (yPos > 230) {
        pdf.addPage();
        yPos = 20;
      }
      
      // Add solution section
      pdf.setFontSize(15);
      pdf.setTextColor(1, 37, 125);
      pdf.text("Our Solution", 20, yPos);
      
      pdf.setFontSize(11);
      pdf.setTextColor(0, 0, 0);
      const solutionLines = pdf.splitTextToSize(study.solution, 170);
      pdf.text(solutionLines, 20, yPos + 8);
      
      // Move to next section, add page if needed
      yPos = yPos + 12 + (solutionLines.length * 5);
      if (yPos > 230) {
        pdf.addPage();
        yPos = 20;
      }
      
      // Add implementation process section
      pdf.setFontSize(15);
      pdf.setTextColor(1, 37, 125);
      pdf.text("Implementation Process", 20, yPos);
      
      // Add process steps
      pdf.setFontSize(11);
      pdf.setTextColor(0, 0, 0);
      yPos += 8;
      
      for (let i = 0; i < study.process.length; i++) {
        const step = study.process[i];
        const stepLines = pdf.splitTextToSize(`${i + 1}. ${step}`, 165);
        
        // Check if we need to add a new page
        if (yPos + (stepLines.length * 5) > 240) {
          pdf.addPage();
          yPos = 20;
        }
        
        pdf.text(stepLines, 20, yPos);
        yPos += stepLines.length * 5;
      }
      
      // Move to results section, add page if needed
      yPos += 5;
      if (yPos > 230) {
        pdf.addPage();
        yPos = 20;
      }
      
      // Add results section
      pdf.setFontSize(15);
      pdf.setTextColor(1, 37, 125);
      pdf.text("Results & Impact", 20, yPos);
      
      // Add results items
      pdf.setFontSize(11);
      yPos += 8;
      
      for (let i = 0; i < study.results.length; i++) {
        const result = study.results[i];
        
        // Check if we need to add a new page
        if (yPos > 240) {
          pdf.addPage();
          yPos = 20;
        }
        
        pdf.setTextColor(1, 37, 125);
        pdf.text(`• ${result.title}`, 20, yPos);
        
        pdf.setTextColor(60, 60, 60);
        const descLines = pdf.splitTextToSize(result.description, 160);
        pdf.text(descLines, 30, yPos + 6);
        yPos += 8 + (descLines.length * 5);
      }
      
      // Add footer to all pages with proper spacing
      const totalPages = pdf.internal.pages.length - 1;
      
      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        
        pdf.setDrawColor(200, 200, 200);
        pdf.setLineWidth(0.2);
        pdf.line(20, 275, 190, 275);
        
        pdf.setFontSize(9);
        pdf.setTextColor(100, 100, 100);
        pdf.text(`© ${new Date().getFullYear()} MQUOTIENT | Generated: ${new Date().toLocaleDateString()}`, 20, 280);
        pdf.text("Contact: hi@mquotient.net | www.mquotient.net", 20, 285);
      }
      
      // Download the PDF
      pdf.save(`mquotient-case-study-${study.id}.pdf`);
      
      // Show success message
      toast({
        title: "Download Started",
        description: "Your case study PDF is being downloaded.",
      });
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: "Error generating PDF",
        description: "There was a problem creating your PDF. Please try again.",
        variant: "destructive"
      });
    }
  };
      


  // Function to generate PDF from a case study
  const generatePDF = async (study: CaseStudy) => {
    // Create a temporary div to render the case study content for PDF
    const tempDiv = document.createElement('div');
    tempDiv.style.width = '800px';
    tempDiv.style.padding = '40px';
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.className = 'bg-white text-black';
    
    // Add the mQuotient logo at the top
    const logoImg = document.createElement('img');
    logoImg.src = mquotientLogo;
    logoImg.style.width = '200px';
    logoImg.style.marginBottom = '20px';
    tempDiv.appendChild(logoImg);
    
    // Add case study content
    const title = document.createElement('h1');
    title.textContent = study.title;
    title.style.fontSize = '24px';
    title.style.fontWeight = 'bold';
    title.style.marginBottom = '5px';
    title.style.color = '#01257D';
    tempDiv.appendChild(title);
    
    const subtitle = document.createElement('p');
    subtitle.textContent = study.subtitle;
    subtitle.style.fontSize = '16px';
    subtitle.style.marginBottom = '20px';
    subtitle.style.color = '#666';
    tempDiv.appendChild(subtitle);
    
    // The Challenge
    const challengeTitle = document.createElement('h2');
    challengeTitle.textContent = 'The Challenge';
    challengeTitle.style.fontSize = '18px';
    challengeTitle.style.fontWeight = 'bold';
    challengeTitle.style.marginBottom = '10px';
    challengeTitle.style.color = '#01257D';
    tempDiv.appendChild(challengeTitle);
    
    const challengeText = document.createElement('p');
    challengeText.textContent = study.challenge;
    challengeText.style.marginBottom = '20px';
    challengeText.style.fontSize = '14px';
    tempDiv.appendChild(challengeText);
    
    // Our Solution
    const solutionTitle = document.createElement('h2');
    solutionTitle.textContent = 'Our Solution';
    solutionTitle.style.fontSize = '18px';
    solutionTitle.style.fontWeight = 'bold';
    solutionTitle.style.marginBottom = '10px';
    solutionTitle.style.color = '#01257D';
    tempDiv.appendChild(solutionTitle);
    
    const solutionText = document.createElement('p');
    solutionText.textContent = study.solution;
    solutionText.style.marginBottom = '20px';
    solutionText.style.fontSize = '14px';
    tempDiv.appendChild(solutionText);
    
    // Implementation Process
    const processTitle = document.createElement('h2');
    processTitle.textContent = 'Implementation Process';
    processTitle.style.fontSize = '18px';
    processTitle.style.fontWeight = 'bold';
    processTitle.style.marginBottom = '10px';
    processTitle.style.color = '#01257D';
    tempDiv.appendChild(processTitle);
    
    const processList = document.createElement('ul');
    processList.style.marginBottom = '20px';
    processList.style.paddingLeft = '20px';
    study.process.forEach(step => {
      const item = document.createElement('li');
      item.textContent = step;
      item.style.marginBottom = '5px';
      item.style.fontSize = '14px';
      processList.appendChild(item);
    });
    tempDiv.appendChild(processList);
    
    // Results & Impact
    const resultsTitle = document.createElement('h2');
    resultsTitle.textContent = 'Results & Impact';
    resultsTitle.style.fontSize = '18px';
    resultsTitle.style.fontWeight = 'bold';
    resultsTitle.style.marginBottom = '10px';
    resultsTitle.style.color = '#01257D';
    tempDiv.appendChild(resultsTitle);
    
    const resultsList = document.createElement('ul');
    resultsList.style.marginBottom = '20px';
    resultsList.style.paddingLeft = '20px';
    study.results.forEach(result => {
      const item = document.createElement('li');
      item.textContent = `${result.title}: ${result.description}`;
      item.style.marginBottom = '5px';
      item.style.fontSize = '14px';
      resultsList.appendChild(item);
    });
    tempDiv.appendChild(resultsList);
    
    // Add generation date
    const generatedTitle = document.createElement('h2');
    generatedTitle.textContent = 'Generated';
    generatedTitle.style.fontSize = '18px';
    generatedTitle.style.fontWeight = 'bold';
    generatedTitle.style.marginBottom = '10px';
    generatedTitle.style.color = '#01257D';
    tempDiv.appendChild(generatedTitle);
    
    const generatedDate = document.createElement('p');
    generatedDate.textContent = new Date().toLocaleDateString();
    generatedDate.style.marginBottom = '20px';
    generatedDate.style.fontSize = '14px';
    tempDiv.appendChild(generatedDate);
    
    // Add copyright and contact
    const footer = document.createElement('div');
    footer.style.marginTop = '30px';
    footer.style.borderTop = '1px solid #ddd';
    footer.style.paddingTop = '10px';
    footer.style.fontSize = '12px';
    footer.style.color = '#666';
    footer.textContent = '© ' + new Date().getFullYear() + ' mquotient. For more information, please contact us at hi@mquotient.net';
    tempDiv.appendChild(footer);
    
    // Append to document, convert to image, then remove
    document.body.appendChild(tempDiv);
    
    try {
      // Convert to image with html2canvas
      const canvas = await html2canvas(tempDiv, {
        scale: 2,
        useCORS: true,
        logging: false
      });
      
      // Create PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: 'a4'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      
      // Save the PDF
      pdf.save(`mquotient-case-study-${study.id}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: "Error generating PDF",
        description: "There was a problem creating your PDF. Please try again.",
        variant: "destructive"
      });
    } finally {
      // Clean up
      document.body.removeChild(tempDiv);
    }
  };

  // Function to render a case study
  const renderCaseStudy = (study: CaseStudy) => (
    <div key={study.id} className="border-b border-border pb-16 last:border-b-0 last:pb-0 mb-16">
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {study.title}
          </h2>
          <div className="text-lg font-medium text-foreground/70 mb-4">{study.subtitle}</div>
          <div className="flex flex-wrap gap-2 mt-3">
            {study.tags.map((tag: string, idx: number) => (
              <Badge key={idx} variant="outline" className="bg-primary/5 text-primary border-primary/20">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-2 border-primary/20 text-primary hover:bg-primary/10"
          onClick={() => handleDownloadClick(study)}
        >
          <FaDownload className="w-4 h-4" /> 
          <span className="hidden sm:inline">Download</span> PDF
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
        <div className="lg:col-span-3">
          <div className="bg-muted/30 rounded-xl p-8 border border-border h-full">
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              <span className="relative z-10">The Challenge</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded-full"></span>
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-8">{study.challenge}</p>

            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              <span className="relative z-10">Our Solution</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded-full"></span>
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-8">{study.solution}</p>

            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              <span className="relative z-10">Implementation Process</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {study.process.map((step: string, idx: number) => (
                <li key={idx} className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                    <FaCheck className="text-primary h-3 w-3" />
                  </div>
                  <span className="text-foreground/80">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-border p-8 h-full">
            <h3 className="text-xl font-semibold mb-6 text-center">Results & Impact</h3>
            <div className="space-y-4">
              {study.results.map((result: CaseStudyResult, idx: number) => (
                <Card key={idx} className="bg-background border-border hover:shadow-md transition-shadow">
                  <CardHeader className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center text-primary">
                        {result.icon}
                      </div>
                      <CardTitle className="text-base font-semibold">{result.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="py-2 px-5 pt-0 text-sm text-foreground/70">
                    {result.description}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-16 pb-16">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl max-w-3xl">
            A closer look at how we've solved complex challenges, streamlined operations, and delivered measurable impact—one project at a time.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Success Stories by Service Area</h2>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            See how we've applied automation where it matters—boosting accuracy, speeding up workflows, and making operations smarter across industries.
          </p>
        </div>

        <Tabs 
          defaultValue="ai-data-entry" 
          value={activeServiceTab}
          onValueChange={setActiveServiceTab}
          className="w-full mb-12"
        >
          <div className="flex justify-center mb-12">
            <TabsList className="flex flex-col sm:grid sm:grid-cols-3 w-full max-w-2xl gap-2">
              {Object.keys(serviceData).map((serviceKey) => (
                <TabsTrigger 
                  key={serviceKey} 
                  value={serviceKey}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-secondary/80 data-[state=active]:text-white gap-2 p-4 h-full flex items-center justify-center"
                >
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    <span className="flex-shrink-0">{serviceData[serviceKey].icon}</span>
                    <span className="whitespace-nowrap text-center min-w-[110px]">
                      {serviceKey === "ai-data-entry" 
                        ? "AI Data Entry" 
                        : serviceKey === "rpa" 
                          ? "RPA" 
                          : "Power Platform"}
                    </span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.keys(serviceData).map((serviceKey) => (
            <TabsContent key={serviceKey} value={serviceKey} className="focus-visible:outline-none focus-visible:ring-0">
              <div className={`bg-gradient-to-r ${serviceData[serviceKey].color} text-white p-8 rounded-lg mb-10`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        {serviceData[serviceKey].icon}
                      </div>
                      <h2 className="text-2xl font-bold">{serviceData[serviceKey].title}</h2>
                    </div>
                    <p className="text-lg">{serviceData[serviceKey].description}</p>
                  </div>
                  
                  {/* Partner logos */}
                  <div className="flex flex-wrap gap-4">
                    {serviceData[serviceKey].partners.map((partner: PartnerLogo, idx: number) => (
                      <div key={idx} className="bg-white rounded-md p-2 shadow-sm">
                        <img 
                          src={partner.logo} 
                          alt={partner.name} 
                          className="object-contain h-8" 
                          style={{ width: `${partner.width}px`, maxHeight: '40px' }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {serviceData[serviceKey].studies.map((study: CaseStudy) => renderCaseStudy(study))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-10 rounded-lg mt-16 shadow-md border border-primary/10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Contact us today to discuss how our solutions can help your organization automate processes, reduce manual effort, and improve accuracy.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Contact Us <FaArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="btn-outline">
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-16 pb-16">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl max-w-3xl">
            A closer look at how we've solved complex challenges, streamlined operations, and delivered measurable impact—one project at a time.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Success Stories by Service Area</h2>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            See how we've applied automation where it matters—boosting accuracy, speeding up workflows, and making operations smarter across industries.
          </p>
        </div>

        <Tabs 
          defaultValue="ai-data-entry" 
          value={activeServiceTab}
          onValueChange={setActiveServiceTab}
          className="w-full mb-12"
        >
          <div className="flex justify-center mb-12">
            <TabsList className="flex flex-col sm:grid sm:grid-cols-3 w-full max-w-2xl gap-2">
              {Object.keys(serviceData).map((serviceKey) => (
                <TabsTrigger 
                  key={serviceKey} 
                  value={serviceKey}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-secondary/80 data-[state=active]:text-white gap-2 p-4 h-full flex items-center justify-center"
                >
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    <span className="flex-shrink-0">{serviceData[serviceKey].icon}</span>
                    <span className="whitespace-nowrap text-center min-w-[110px]">{serviceData[serviceKey].title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.keys(serviceData).map((serviceKey) => (
            <TabsContent key={serviceKey} value={serviceKey} className="focus-visible:outline-none focus-visible:ring-0">
              <div className={`bg-gradient-to-r ${serviceData[serviceKey].color} text-white p-8 rounded-lg mb-10`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        {serviceData[serviceKey].icon}
                      </div>
                      <h2 className="text-2xl font-bold">{serviceData[serviceKey].title}</h2>
                    </div>
                    <p className="text-lg">{serviceData[serviceKey].description}</p>
                  </div>
                  
                  {/* Partner logos */}
                  <div className="flex flex-wrap gap-4">
                    {serviceData[serviceKey].partners.map((partner: PartnerLogo, idx: number) => (
                      <div key={idx} className="bg-white rounded-md p-2 shadow-sm">
                        <img 
                          src={partner.logo} 
                          alt={partner.name} 
                          className="object-contain h-8" 
                          style={{ width: `${partner.width}px`, maxHeight: '40px' }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {serviceData[serviceKey].studies.map((study: CaseStudy) => renderCaseStudy(study))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-10 rounded-lg mt-16 shadow-md border border-primary/10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Contact us today to discuss how our solutions can help your organization automate processes, reduce manual effort, and improve accuracy.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Contact Us <FaArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="btn-outline">
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;