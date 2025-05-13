import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaCheck, FaChartLine, FaClipboardCheck, FaFileAlt, FaRocket, FaUserClock, FaBrain, FaRobot, FaBolt } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const CaseStudiesSection = () => {
  // First level tabs for different services
  const [activeServiceTab, setActiveServiceTab] = useState("ai-data-entry");
  
  // Second level tabs for case studies within each service
  const [activeAIDataEntryTab, setActiveAIDataEntryTab] = useState("invoice");
  const [activeRPATab, setActiveRPATab] = useState("rpa-case-1");
  const [activePowerPlatformTab, setActivePowerPlatformTab] = useState("power-case-1");

  // AI-Powered Data Entry Workforce case studies
  const aiDataEntryCaseStudies = [
    {
      id: "invoice",
      title: "Transforming Invoice Processing Through Automation",
      subtitle: "A leading global consulting firm managing operations for a major telecom provider",
      challenge: "A leading global consulting firm managed invoice processing operations for one of the world's largest telecom providers. The client generated hundreds of thousands of invoices annually, with each invoice often spanning 20–50 pages, packed with detailed service descriptions, usage data, taxes, and regional compliance information. Their manual process was slow, error-prone, and costly, with dozens of full-time employees needed to handle the load, resulting in average invoice turnaround times exceeding 5 days and increased compliance risks.",
      solution: [
        "We deployed an AI-driven document extraction and classification solution with cutting-edge technology.",
        "Optical Character Recognition (OCR) was used to digitize scanned invoices of varying quality.",
        "Machine Learning Models were trained to extract key data (supplier name, invoice number, amounts, line items, VAT details).",
        "Automated Validation rules were implemented for cross-checking data (e.g., matching PO numbers, checking tax calculations).",
        "Classification Engines organized invoices by region, service type, and supplier.",
        "The solution was integrated with existing ERP platforms for automatic data ingestion."
      ],
      results: [
        {
          title: "80% reduction in manual effort",
          description: "Massive decrease in labor required for invoice processing.",
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
      tags: ["Finance", "Invoice Processing", "AI Automation"]
    },
    {
      id: "mortgage",
      title: "Automating Document Indexing for Mortgage Loan Audits",
      subtitle: "A Top 5 mortgage lender in the United States",
      challenge: "A Top 5 mortgage lender in the US faced challenges in reviewing mortgage files for loan validity. An incoming mortgage file could range from 300 to 800 pages, comprising over 250 different document types with numerous variations. The manual process of indexing these documents by type and extracting over 1500 data points across multiple pages was characterized by long turnaround times, little flexibility to scale, high error rates due to operator dependency, and resource-intensive quality control.",
      solution: [
        "The lender implemented our AI-Powered Data Entry Workforce solution as a turnkey electronic document classification and data extraction solution.",
        "Due to data privacy requirements, the solution was deployed on-premise.",
        "Manual effort was limited to clubbing pages by document type in designated folders to configure automated classification.",
        "Business rules were defined for indexing all loan pages and routing necessary pages for data extraction.",
        "Our system handled layout variations in unstructured mortgage documents through the configuration module.",
        "Document Classification: Our solution used a combination of OCR and layout analysis to identify the document type of each page, assigning a confidence score.",
        "Routing: Documents were stacked and routed according to customer-defined business rules.",
        "Data Extraction: The system extracted defined fields and used business rules to refine raw OCR output as necessary.",
        "Front-End Quality Control: A User Interface allowed for correcting exceptions or suspect fields.",
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
          description: "The system manages peak loads without affecting daily throughput, and volume scaling is transparent.",
          icon: <FaRocket />
        }
      ],
      tags: ["Mortgage", "Document Classification", "Data Extraction"]
    }
  ];
  
  // RPA case studies
  const rpaCaseStudies = [
    {
      id: "rpa-case-1",
      title: "Automating Finance Operations for Retail Giant",
      subtitle: "A multinational retail corporation",
      challenge: "A multinational retail corporation was struggling with their accounts payable process, which required significant manual effort for invoice processing, data entry, and reconciliation. The process was error-prone, time-consuming, and preventing the finance team from focusing on higher-value strategic activities.",
      solution: [
        "We implemented a comprehensive UiPath RPA solution to automate the entire accounts payable workflow from invoice receipt to payment processing.",
        "Invoice data extraction using OCR and our AI-powered validation",
        "Automated three-way matching between purchase orders, receiving documents, and invoices",
        "Integration with the client's ERP system for automated data entry",
        "Exception handling with notifications for human intervention when needed",
        "Automated payment scheduling and processing",
        "Creation of comprehensive audit logs and reporting"
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
      solution: [
        "We deployed a Blue Prism RPA solution that automated key parts of the employee onboarding workflow:",
        "Automated data extraction from employment contracts and documents",
        "Integration with multiple HR systems and databases",
        "Automated provisioning of IT accounts and access rights",
        "Triggered notifications and workflows for required training programs",
        "Generated personalized welcome packages and documentation",
        "Provided real-time status updates on onboarding progress"
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
  const powerPlatformCaseStudies = [
    {
      id: "power-case-1",
      title: "Field Service Management Transformation",
      subtitle: "A utilities service provider",
      challenge: "A utilities service provider with hundreds of field technicians struggled with inefficient job dispatching, paper-based work orders, and delayed reporting. This resulted in longer response times, customer dissatisfaction, and challenges in tracking field operations performance.",
      solution: [
        "We created a comprehensive Microsoft Power Platform solution:",
        "Custom Power App for field technicians to receive, manage, and report on work orders",
        "Power Automate flows for automated job assignment based on location, skills, and priority",
        "Real-time service tracking with GPS integration",
        "Digital forms with photo capture capability for documentation",
        "Automated customer notifications and feedback collection",
        "Power BI dashboards for management to track KPIs and service performance"
      ],
      results: [
        {
          title: "35% increase in jobs completed",
          description: "More efficient routing and job management increased productivity.",
          icon: <FaChartLine />
        },
        {
          title: "2-hour reduction in response time",
          description: "Customers received faster service and real-time updates.",
          icon: <FaRocket />
        },
        {
          title: "Complete elimination of paper forms",
          description: "Digital transformation of all field documentation.",
          icon: <FaClipboardCheck />
        },
        {
          title: "23% reduction in operational costs",
          description: "Lower costs due to optimized routing and resource allocation.",
          icon: <FaUserClock />
        },
        {
          title: "20% improvement in customer satisfaction",
          description: "Better communication and faster service resolution.",
          icon: <FaCheck />
        }
      ],
      tags: ["Utilities", "Field Service", "Power Apps", "Power BI"]
    },
    {
      id: "power-case-2",
      title: "Supply Chain Visibility Solution",
      subtitle: "A global manufacturing company",
      challenge: "A global manufacturing company lacked real-time visibility into their supply chain, resulting in inventory discrepancies, production delays, and difficulty responding to disruptions. Data existed in silos across multiple systems, making consolidated reporting nearly impossible.",
      solution: [
        "We developed an integrated Microsoft Power Platform solution:",
        "Power BI dashboards providing end-to-end supply chain visibility",
        "Power Apps for inventory management and exception reporting",
        "Power Automate workflows for alerts and notifications on critical events",
        "Integration with existing ERP, warehouse management, and logistics systems",
        "AI-powered demand forecasting and inventory optimization",
        "Automated supplier performance tracking and evaluation"
      ],
      results: [
        {
          title: "28% reduction in inventory costs",
          description: "Optimized inventory levels across the supply chain.",
          icon: <FaChartLine />
        },
        {
          title: "62% improvement in forecast accuracy",
          description: "AI-powered predictions enhanced planning capabilities.",
          icon: <FaCheck />
        },
        {
          title: "90% faster response to disruptions",
          description: "Real-time alerts enabled rapid problem resolution.",
          icon: <FaRocket />
        },
        {
          title: "15% improvement in on-time delivery",
          description: "Better visibility led to improved logistics performance.",
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Type definitions for case studies
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
    solution: string[];
    results: CaseStudyResult[];
    tags: string[];
  }

  // Helper function to render a case study
  const renderCaseStudy = (study: CaseStudy, isActive: boolean) => (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10"
    >
      <motion.div variants={itemVariants} className="flex flex-col">
        <Card className="flex-grow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                <CardDescription className="text-lg font-medium text-foreground/80">
                  {study.subtitle}
                </CardDescription>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {study.tags.map((tag: string, index: number) => (
                <Badge key={index} variant="outline" className="bg-primary/5 text-primary border-primary/20">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 relative inline-block">
                <span className="relative z-10">The Challenge</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded-full"></span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 relative inline-block">
                <span className="relative z-10">Our Solution</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {study.solution.map((step: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                      <FaCheck className="text-primary h-3 w-3" />
                    </div>
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <div className="bg-background border border-border rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
            <h3 className="text-xl font-semibold">Results & Impact</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 gap-6">
              {study.results.map((result: CaseStudyResult, index: number) => (
                <div 
                  key={index} 
                  className="flex items-start p-4 rounded-lg border border-border bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center text-primary mr-4">
                    {result.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{result.title}</h4>
                    <p className="text-muted-foreground text-sm">{result.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  const serviceIcons = {
    "ai-data-entry": <FaBrain />,
    "rpa": <FaRobot />,
    "power-platform": <FaBolt />
  };

  return (
    <section id="case-studies" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0" />
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <h2 className="section-title">
            The <span className="gradient-text">Results</span> We Deliver
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle max-w-3xl mx-auto">
            Come Witness How Automation and AI Create Real-World Magic
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-12"
        >
          {/* Service tabs */}
          <Tabs 
            defaultValue="ai-data-entry" 
            value={activeServiceTab}
            onValueChange={setActiveServiceTab}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-2xl">
                <TabsTrigger 
                  value="ai-data-entry"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-secondary/80 data-[state=active]:text-white gap-1 px-1 sm:px-2 md:px-3 text-xs sm:text-sm"
                >
                  {serviceIcons["ai-data-entry"]} <span className="whitespace-nowrap text-center min-w-[50px]">AI Data Entry</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="rpa"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-secondary/80 data-[state=active]:text-white gap-1 sm:gap-2 px-1 sm:px-2 md:px-3 text-xs sm:text-sm"
                >
                  {serviceIcons["rpa"]} <span className="whitespace-nowrap text-center min-w-[50px]">RPA</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="power-platform"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-secondary/80 data-[state=active]:text-white gap-1 sm:gap-2 px-1 sm:px-2 md:px-3 text-xs sm:text-sm"
                >
                  {serviceIcons["power-platform"]} <span className="whitespace-nowrap text-center min-w-[50px]">Power&nbsp;Platform</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* AI Data Entry case studies */}
            <TabsContent value="ai-data-entry" className="focus-visible:outline-none focus-visible:ring-0">
              <Tabs 
                defaultValue="invoice" 
                value={activeAIDataEntryTab}
                onValueChange={setActiveAIDataEntryTab}
                className="w-full"
              >
                <div className="flex justify-center mb-8">
                  <TabsList className="grid grid-cols-2 w-full max-w-md">
                    {aiDataEntryCaseStudies.map((study) => (
                      <TabsTrigger 
                        key={study.id} 
                        value={study.id}
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/60 data-[state=active]:to-secondary/60 data-[state=active]:text-white"
                      >
                        {study.id === "invoice" ? "Invoice" : "Mortgage"}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                {aiDataEntryCaseStudies.map((study) => (
                  <TabsContent key={study.id} value={study.id} className="focus-visible:outline-none focus-visible:ring-0">
                    {renderCaseStudy(study, activeAIDataEntryTab === study.id)}
                  </TabsContent>
                ))}
              </Tabs>
            </TabsContent>

            {/* RPA case studies */}
            <TabsContent value="rpa" className="focus-visible:outline-none focus-visible:ring-0">
              <Tabs 
                defaultValue="rpa-case-1" 
                value={activeRPATab}
                onValueChange={setActiveRPATab}
                className="w-full"
              >
                <div className="flex justify-center mb-8">
                  <TabsList className="grid grid-cols-2 w-full max-w-md">
                    {rpaCaseStudies.map((study) => (
                      <TabsTrigger 
                        key={study.id} 
                        value={study.id}
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/60 data-[state=active]:to-secondary/60 data-[state=active]:text-white"
                      >
                        {study.id === "rpa-case-1" ? "Finance" : "Healthcare"}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                {rpaCaseStudies.map((study) => (
                  <TabsContent key={study.id} value={study.id} className="focus-visible:outline-none focus-visible:ring-0">
                    {renderCaseStudy(study, activeRPATab === study.id)}
                  </TabsContent>
                ))}
              </Tabs>
            </TabsContent>

            {/* Power Platform case studies */}
            <TabsContent value="power-platform" className="focus-visible:outline-none focus-visible:ring-0">
              <Tabs 
                defaultValue="power-case-1" 
                value={activePowerPlatformTab}
                onValueChange={setActivePowerPlatformTab}
                className="w-full"
              >
                <div className="flex justify-center mb-8">
                  <TabsList className="grid grid-cols-2 w-full max-w-md">
                    {powerPlatformCaseStudies.map((study) => (
                      <TabsTrigger 
                        key={study.id} 
                        value={study.id}
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/60 data-[state=active]:to-secondary/60 data-[state=active]:text-white"
                      >
                        {study.id === "power-case-1" ? "Field Service" : "Supply Chain"}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                {powerPlatformCaseStudies.map((study) => (
                  <TabsContent key={study.id} value={study.id} className="focus-visible:outline-none focus-visible:ring-0">
                    {renderCaseStudy(study, activePowerPlatformTab === study.id)}
                  </TabsContent>
                ))}
              </Tabs>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-10">
            <Link href="/case-studies" className="btn-primary inline-flex items-center gap-2">
              View All Case Studies
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;