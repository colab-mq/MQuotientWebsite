import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaArrowRight, FaCheck, FaChartLine, FaClipboardCheck, FaFileAlt, FaRocket, FaUserClock, FaBrain, FaRobot, FaBolt } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import partner logos
import bluePrismLogo from "../assets/partners/Blue_Prism_Logo-700x126.png";
import glyphXLogo from "../assets/partners/GLYPHX.png";
import microsoftLogo from "../assets/partners/Microsoft_logo.png";
import powerPlatformLogo from "../assets/partners/Microsoft_Power_Platform_logo.svg.png";
import uiPathLogo from "../assets/partners/UiPath_2019_Corporate_Logo.png";

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

const CaseStudies = () => {
  // State for service tabs
  const [activeServiceTab, setActiveServiceTab] = useState("ai-data-entry");

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
          title: "98% classification accuracy",
          description: "End accuracy of over 98% for document classification.",
          icon: <FaFileAlt />
        },
        {
          title: "90% reduction in manual effort",
          description: "Over 90% reduction in manual effort for classification.",
          icon: <FaUserClock />
        },
        {
          title: "99.99% data extraction accuracy",
          description: "Post-verification accuracy of 99.99% for data extraction.",
          icon: <FaCheck />
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
      title: "Automating Finance Operations for Retail Giant",
      subtitle: "A multinational retail corporation",
      challenge: "A multinational retail corporation was struggling with their accounts payable process, which required significant manual effort for invoice processing, data entry, and reconciliation. The process was error-prone, time-consuming, and preventing the finance team from focusing on higher-value strategic activities.",
      solution: "We implemented a comprehensive UiPath RPA solution to automate the entire accounts payable workflow from invoice receipt to payment processing. This solution not only automated data entry but also integrated with their ERP system to create a seamless, efficient process with minimal human intervention.",
      process: [
        "Invoice data extraction using OCR and our AI-powered validation",
        "Automated three-way matching between purchase orders, receiving documents, and invoices",
        "Integration with the client's ERP system for automated data entry",
        "Exception handling with notifications for human intervention when needed",
        "Automated payment scheduling and processing",
        "Creation of comprehensive audit logs and reporting",
        "Continuous monitoring and optimization of the automated processes"
      ],
      results: [
        {
          title: "75% reduction in processing time",
          description: "Invoice processing time reduced from days to hours.",
          icon: <FaUserClock />
        },
        {
          title: "99.5% accuracy rate",
          description: "Near-elimination of data entry errors and improved compliance.",
          icon: <FaCheck />
        },
        {
          title: "ROI within 6 months",
          description: "The solution paid for itself within the first 6 months of operation.",
          icon: <FaRocket />
        },
        {
          title: "30% cost savings",
          description: "Significant reduction in operational costs.",
          icon: <FaChartLine />
        },
        {
          title: "Improved vendor relationships",
          description: "Faster payments and fewer disputes led to better vendor relations.",
          icon: <FaClipboardCheck />
        }
      ],
      tags: ["Finance", "Accounts Payable", "UiPath", "OCR"]
    },
    {
      id: "rpa-case-2",
      title: "HR Process Automation for Healthcare Provider",
      subtitle: "A leading healthcare provider network",
      challenge: "A large healthcare provider with over 5,000 employees faced challenges with their employee onboarding process. The manual process was slow, inconsistent, and created a poor experience for new hires. HR staff spent excessive time on repetitive administrative tasks instead of strategic HR initiatives.",
      solution: "We deployed a Blue Prism RPA solution that automated key parts of the employee onboarding workflow. The solution integrated with multiple HR systems and databases to create a streamlined, consistent process that significantly reduced manual effort while improving the experience for new employees.",
      process: [
        "Automated data extraction from employment contracts and documents",
        "Integration with multiple HR systems and databases",
        "Automated provisioning of IT accounts and access rights",
        "Triggered notifications and workflows for required training programs",
        "Generated personalized welcome packages and documentation",
        "Provided real-time status updates on onboarding progress",
        "Automated compliance checks and documentation"
      ],
      results: [
        {
          title: "85% faster onboarding",
          description: "Reduced onboarding processing time from 3 days to 4 hours.",
          icon: <FaRocket />
        },
        {
          title: "Improved compliance",
          description: "100% adherence to regulatory requirements and internal policies.",
          icon: <FaCheck />
        },
        {
          title: "Enhanced employee experience",
          description: "Significantly improved satisfaction scores from new hires.",
          icon: <FaUserClock />
        },
        {
          title: "40% reduction in HR workload",
          description: "HR staff time freed up for strategic initiatives.",
          icon: <FaClipboardCheck />
        },
        {
          title: "Scalability during hiring peaks",
          description: "Ability to handle seasonal hiring surges without additional staff.",
          icon: <FaChartLine />
        }
      ],
      tags: ["Healthcare", "HR", "Blue Prism", "Employee Onboarding"]
    }
  ];

  // Power Platform case studies
  const powerPlatformCaseStudies: CaseStudy[] = [
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
      description: "UiPath and Blue Prism RPA solutions to automate repetitive tasks, reduce errors, and free your team to focus on high-value activities.",
      icon: <FaRobot />,
      color: "from-blue-500 to-cyan-500",
      studies: rpaCaseStudies,
      partners: [
        { name: "UiPath", logo: uiPathLogo, width: 120 },
        { name: "Blue Prism", logo: bluePrismLogo, width: 120 }
      ]
    },
    "power-platform": {
      title: "Microsoft Power Platform",
      description: "Custom solutions using Power Apps, Power Automate, and Power BI to streamline processes and provide valuable business insights.",
      icon: <FaBolt />,
      color: "from-teal-500 to-emerald-500",
      studies: powerPlatformCaseStudies,
      partners: [
        { name: "Microsoft", logo: microsoftLogo, width: 140 },
        { name: "Microsoft Power Platform", logo: powerPlatformLogo, width: 120 }
      ]
    }
  };

  // Function to render a case study
  const renderCaseStudy = (study: CaseStudy) => (
    <div key={study.id} className="border-b border-border pb-16 last:border-b-0 last:pb-0 mb-16">
      <div className="mb-8">
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
            Real-world examples of how our solutions have transformed business operations and delivered exceptional results.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Client Success Stories by Service Area</h2>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Explore how our solutions have helped clients across different industries automate processes, improve accuracy, and accelerate their workflows.
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
                  <div className="flex items-center justify-center gap-3 flex-wrap">
                    <span className="flex-shrink-0">{serviceData[serviceKey].icon}</span>
                    <span>{serviceKey === "ai-data-entry" ? "AI Data Entry" : serviceKey === "rpa" ? "RPA" : "Power Platform"}</span>
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