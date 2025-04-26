import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaCheck, FaChartLine, FaClipboardCheck, FaFileAlt, FaRocket, FaUserClock } from "react-icons/fa";

const CaseStudiesSection = () => {
  const [activeTab, setActiveTab] = useState("insurance");

  const caseStudies = [
    {
      id: "insurance",
      title: "Streamlining Vehicle Insurance Data Extraction",
      subtitle: "A leading internet portal for insurance products in India",
      challenge: "A leading internet portal for insurance products in India had a vast archive of auto insurance policies from various providers, each with multiple versions and layouts. They aimed to reach out to past customers for direct marketing close to their policy expiry dates. However, their fully manual back-office operations struggled to efficiently handle the cyclical peaks and troughs in demand, and traditional template-based data extraction solutions failed due to the high variability in document formats.",
      solution: [
        "The client implemented our AI-Powered Data Entry Workforce solution, which uses a sample-based learning approach to identify and extract data from any location within documents.",
        "The client uploaded policy documents in batches via FTP.",
        "Our system automatically picked up the files for processing.",
        "Raw OCR extraction followed by smart algorithms improved accuracy from around 90% to the required SLA.",
        "Processed results were exported into Excel files for the client to download.",
        "The process was repeated quarterly, processing around 30,000 documents per run with unlimited horizontal scaling."
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
      tags: ["Insurance", "Data Extraction", "Direct Marketing"]
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

  return (
    <section id="case-studies" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0" />
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <h2 className="section-title">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle max-w-3xl mx-auto">
            See how our AI-Powered Data Entry Workforce has helped organizations transform their document processing workflows and achieve significant business outcomes.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-12"
        >
          <Tabs 
            defaultValue={caseStudies[0].id} 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 w-full max-w-md">
                {caseStudies.map((study) => (
                  <TabsTrigger 
                    key={study.id} 
                    value={study.id}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-secondary/80 data-[state=active]:text-white"
                  >
                    {study.id === "insurance" ? "Insurance" : "Mortgage"}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {caseStudies.map((study) => (
              <TabsContent key={study.id} value={study.id} className="focus-visible:outline-none focus-visible:ring-0">
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate={activeTab === study.id ? "visible" : "hidden"}
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
                          {study.tags.map((tag, index) => (
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
                            {study.solution.map((step, index) => (
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
                          {study.results.map((result, index) => (
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
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;