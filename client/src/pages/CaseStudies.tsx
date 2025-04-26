import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaArrowRight, FaCheck, FaChartLine, FaClipboardCheck, FaFileAlt, FaRocket, FaUserClock, FaBrain, FaRobot, FaBolt } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CaseStudies = () => {
  // State for service tabs
  const [activeServiceTab, setActiveServiceTab] = useState("ai-data-entry");

  // AI-Powered Data Entry Workforce case studies
  const aiDataEntryCaseStudies = [
    {
      id: "insurance",
      title: "Streamlining Vehicle Insurance Data Extraction for Direct Marketing",
      subtitle: "A leading internet portal for insurance products in India",
      challenge: "A leading internet portal for insurance products in India had a vast archive of auto insurance policies from various providers, each with multiple versions and layouts. They aimed to reach out to past customers for direct marketing close to their policy expiry dates. However, their fully manual back-office operations struggled to efficiently handle the cyclical peaks and troughs in demand, and traditional template-based data extraction solutions failed due to the high variability in document formats.",
      solution: "The client implemented our AI-Powered Data Entry Workforce solution, which uses a sample-based learning approach to identify and extract data from any location within documents. Unlike traditional methods relying on pre-configured locations, our solution uses a more intelligent approach where the system is taught to identify and extract data from any location within the documents using provided samples.",
      process: [
        "The client uploading policy documents in batches via FTP.",
        "Our system automatically picking up the files for processing.",
        "Raw OCR extraction followed by smart algorithms to improve accuracy from around 90% to the required SLA.",
        "Exporting the processed results into Excel files for the client to download.",
        "The process was repeated quarterly, processing around 30,000 documents per run with unlimited horizontal scaling.",
        "Hosted solutions by mquotient offer a quick and hassle-free setup."
      ],
      results: [
        {
          title: "100% increase in targeting",
          description: "The client could contact all their target customers compared to 50% pre-project.",
          icon: <FaUserClock />
        },
        {
          title: "40% increase in conversion",
          description: "The direct marketing outreach achieved a 40% higher conversion rate compared to typical mail campaigns.",
          icon: <FaChartLine />
        },
        {
          title: "Guaranteed ROI",
          description: "The project delivered exceptionally high return on investment through increased conversion and a shorter sales cycle.",
          icon: <FaRocket />
        },
        {
          title: "Improved efficiency",
          description: "The delivery was typically completed within 5 days, exceeding the throughput requirement of the SLA.",
          icon: <FaClipboardCheck />
        },
        {
          title: "High accuracy",
          description: "The project met and exceeded the required accuracy levels.",
          icon: <FaCheck />
        }
      ],
      tags: ["Insurance", "Data Extraction", "Direct Marketing", "OCR"]
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
  const rpaCaseStudies = [
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
  const powerPlatformCaseStudies = [
    {
      id: "power-case-1",
      title: "Field Service Management Transformation",
      subtitle: "A utilities service provider",
      challenge: "A utilities service provider with hundreds of field technicians struggled with inefficient job dispatching, paper-based work orders, and delayed reporting. This resulted in longer response times, customer dissatisfaction, and challenges in tracking field operations performance.",
      solution: "We created a comprehensive Microsoft Power Platform solution that digitized and streamlined their field service operations. The solution included custom Power Apps for technicians, automated workflows with Power Automate, and real-time analytics with Power BI, all working together to transform their field service capabilities.",
      process: [
        "Custom Power App for field technicians to receive, manage, and report on work orders",
        "Power Automate flows for automated job assignment based on location, skills, and priority",
        "Real-time service tracking with GPS integration",
        "Digital forms with photo capture capability for documentation",
        "Automated customer notifications and feedback collection",
        "Power BI dashboards for management to track KPIs and service performance",
        "Integration with existing CRM and ERP systems"
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
      solution: "We developed an integrated Microsoft Power Platform solution that connected disparate systems and provided end-to-end supply chain visibility. The solution included Power BI dashboards, custom Power Apps for inventory management, and automated alerts through Power Automate to enable proactive management of the supply chain.",
      process: [
        "Power BI dashboards providing end-to-end supply chain visibility",
        "Power Apps for inventory management and exception reporting",
        "Power Automate workflows for alerts and notifications on critical events",
        "Integration with existing ERP, warehouse management, and logistics systems",
        "AI-powered demand forecasting and inventory optimization",
        "Automated supplier performance tracking and evaluation",
        "Mobile access to key supply chain metrics and alerts"
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

  // Service meta data
  const serviceData = {
    "ai-data-entry": {
      title: "AI-Powered Data Entry Workforce",
      description: "Our intelligent document processing solutions that automatically extract and validate data from both structured and unstructured documents.",
      icon: <FaBrain />,
      color: "from-purple-500 to-pink-500",
      studies: aiDataEntryCaseStudies
    },
    "rpa": {
      title: "Robotic Process Automation",
      description: "UiPath and Blue Prism RPA solutions to automate repetitive tasks, reduce errors, and free your team to focus on high-value activities.",
      icon: <FaRobot />,
      color: "from-blue-500 to-cyan-500",
      studies: rpaCaseStudies
    },
    "power-platform": {
      title: "Microsoft Power Platform",
      description: "Custom solutions using Power Apps, Power Automate, and Power BI to streamline processes and provide valuable business insights.",
      icon: <FaBolt />,
      color: "from-teal-500 to-emerald-500",
      studies: powerPlatformCaseStudies
    }
  };

  // Function to render a case study
  const renderCaseStudy = (study) => (
    <div key={study.id} className="border-b border-border pb-16 last:border-b-0 last:pb-0 mb-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {study.title}
        </h2>
        <div className="text-lg font-medium text-foreground/70 mb-4">{study.subtitle}</div>
        <div className="flex flex-wrap gap-2 mt-3">
          {study.tags.map((tag, idx) => (
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
              {study.process.map((step, idx) => (
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
              {study.results.map((result, idx) => (
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
            <TabsList className="grid grid-cols-3 w-full max-w-2xl">
              {Object.keys(serviceData).map((serviceKey) => (
                <TabsTrigger 
                  key={serviceKey} 
                  value={serviceKey}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-secondary/80 data-[state=active]:text-white gap-2 p-4"
                >
                  <span className="mr-2">{serviceData[serviceKey].icon}</span>
                  <span className="hidden sm:inline">{serviceData[serviceKey].title}</span>
                  <span className="sm:hidden">{serviceKey === "ai-data-entry" ? "AI" : serviceKey === "rpa" ? "RPA" : "Power"}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.keys(serviceData).map((serviceKey) => (
            <TabsContent key={serviceKey} value={serviceKey} className="focus-visible:outline-none focus-visible:ring-0">
              <div className={`bg-gradient-to-r ${serviceData[serviceKey].color} text-white p-8 rounded-lg mb-10`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    {serviceData[serviceKey].icon}
                  </div>
                  <h2 className="text-2xl font-bold">{serviceData[serviceKey].title}</h2>
                </div>
                <p className="text-lg">{serviceData[serviceKey].description}</p>
              </div>
              
              <div className="space-y-6">
                {serviceData[serviceKey].studies.map((study) => renderCaseStudy(study))}
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