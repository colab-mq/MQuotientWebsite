import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaArrowRight, FaCheck, FaChartLine, FaClipboardCheck, FaFileAlt, FaRocket, FaUserClock } from "react-icons/fa";

const CaseStudies = () => {
  const caseStudies = [
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

  return (
    <div className="pt-16 pb-16">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl max-w-3xl">
            Real-world examples of how our AI-Powered Data Entry Workforce has transformed business operations and delivered exceptional results.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            See how our intelligent document processing solutions have helped clients across different industries automate data extraction, improve accuracy, and accelerate their workflows.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="border-b border-border pb-16 last:border-b-0 last:pb-0">
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
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-10 rounded-lg mt-16 shadow-md border border-primary/10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Ready to Transform Your Document Processing?
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Contact us today to discuss how our AI-Powered Data Entry Workforce can help your organization automate document processing, reduce manual effort, and improve accuracy.
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