import { Link } from "wouter";
import { useEffect } from "react";
import { FaRobot, FaBolt, FaCode, FaHeadset, FaCheckCircle, FaArrowRight, FaBrain, FaCloud, FaCog } from "react-icons/fa";

// Import partner logos
import bluePrismLogo from "../assets/partners/Blue_Prism_Logo-700x126.png";
import glyphXLogo from "../assets/partners/GLYPHX.png";
import microsoftLogo from "../assets/partners/Microsoft_logo.png";
import powerPlatformLogo from "../assets/partners/Microsoft_Power_Platform_logo.svg.png";
import uiPathLogo from "../assets/partners/UiPath_2019_Corporate_Logo.png";
import awsLogo from "../assets/partners/aws-logo-new.png";
import azureLogo from "../assets/partners/azure-logo.png";
import gcpLogo from "../assets/partners/gcp-logo-new.png";

const Services = () => {
  // Update page title for SEO
  useEffect(() => {
    document.title = "m·quotient Services | AI Document Processing, RPA & Power Platform Solutions";
  }, []);

  // Partner logos for each service
  const partnerLogos = {
    "ai-data-entry": [
      { src: glyphXLogo, alt: "GlyphX", width: 160 }
    ],
    "rpa": [
      { src: uiPathLogo, alt: "UiPath", width: 140 },
      { src: bluePrismLogo, alt: "Blue Prism", width: 140 }
    ],
    "power-platform": [
      { src: microsoftLogo, alt: "Microsoft", width: 140 },
      { src: powerPlatformLogo, alt: "Microsoft Power Platform", width: 120 }
    ],
    "cloud": [
      { src: azureLogo, alt: "Microsoft Azure", width: 100 },
      { src: awsLogo, alt: "Amazon Web Services", width: 100 },
      { src: gcpLogo, alt: "Google Cloud Platform", width: 120 }
    ]
  };
  
  const services = [
    {
      title: "AI-Powered Data Entry Workforce",
      description: "Break free from manual data entry bottlenecks with our intelligent document processing solution that automatically extracts and validates data from both structured and unstructured documents.",
      icon: <FaBrain />,
      features: [
        "Intelligent classification of document types",
        "Advanced data extraction beyond simple OCR",
        "Automated validation with business rules",
        "Processing of structured and unstructured formats",
        "Human-in-the-loop oversight for quality assurance",
        "Seamless integration with existing enterprise systems"
      ],
      benefits: [
        "Up to 80% reduction in manual data entry tasks",
        "99%+ accuracy with automated validation",
        "Drastically reduced processing turnaround times",
        "Significant cost savings on overhead",
        "Scalability to handle peak loads without additional hiring"
      ]
    },
    {
      title: "Robotic Process Automation (RPA)",
      description: "We implement UiPath and Blue Prism RPA solutions to automate repetitive tasks, reduce errors, and free your team to focus on high-value activities.",
      icon: <FaRobot />,
      features: [
        "Process analysis and optimization",
        "Attended and unattended automation",
        "UiPath and Blue Prism expertise",
        "Test automation and quality assurance",
        "Integration with existing systems",
        "Scalable RPA implementation"
      ],
      benefits: [
        "Reduced operational costs",
        "Increased accuracy and compliance",
        "Faster processing times",
        "Improved employee satisfaction",
        "Better customer experience"
      ]
    },
    {
      title: "Microsoft Power Platform",
      description: "We create custom solutions using Power Apps, Power Automate, and Power BI to streamline processes and provide valuable business insights.",
      icon: <FaBolt />,
      features: [
        "Custom Power App development",
        "Workflow automation with Power Automate",
        "Business intelligence with Power BI",
        "Dataverse integration",
        "Custom development for unique challenges",
        "API development and integration"
      ],
      benefits: [
        "Rapid application development",
        "Improved data-driven decision making",
        "Streamlined business processes",
        "Enhanced collaboration",
        "Lower development costs"
      ]
    },
    {
      title: "Cloud Services",
      description: "Harness the power of cloud computing to transform, streamline, and secure your business with our tailored solutions supporting Azure, AWS, and Google Cloud.",
      icon: <FaCloud />,
      features: [
        "Cloud Assessment as a Service",
        "Seamless Cloud Migration",
        "Cloud Security & Governance",
        "Deployment & Network Services",
        "Database & DevOps Support",
        "Industry-Focused Cloud Solutions"
      ],
      benefits: [
        "Reduced infrastructure costs",
        "Enhanced scalability and flexibility",
        "Comprehensive data protection & compliance",
        "Accelerated innovation and time-to-market",
        "Minimized disruption during transitions"
      ]
    },
    {
      title: "AI & Intelligent Automation",
      description: "Accelerate innovation and productivity through AI and automation solutions designed to deliver business outcomes, optimize processes, and enable data-driven decision-making.",
      icon: <FaCode />,
      features: [
        "AI Strategy & Transformation Roadmap",
        "Intelligent Automation with NLP and RPA",
        "AI for Employee Productivity",
        "Data Analytics & Machine Learning",
        "Proof of Concepts & Prototyping",
        "Industry-Specific AI Use Cases"
      ],
      benefits: [
        "Increased operational efficiency",
        "Data-driven decision making",
        "Enhanced customer experiences",
        "Reduced manual workload",
        "Competitive advantage through innovation"
      ]
    },
    {
      title: "Managed Services",
      description: "We provide comprehensive implementation services and ongoing support to ensure your automation solutions continue to deliver value.",
      icon: <FaHeadset />,
      features: [
        "Solution implementation and deployment",
        "User training and knowledge transfer",
        "Ongoing maintenance and support",
        "Performance monitoring",
        "Issue resolution",
        "System upgrades and enhancements"
      ],
      benefits: [
        "Smooth transition to new solutions",
        "Maximized return on investment",
        "Minimized disruption to operations",
        "Continuous improvement",
        "Peace of mind"
      ]
    }
  ];

  return (
    <div className="pt-16 pb-16">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl">
            Comprehensive hyperautomation and digital transformation solutions tailored to your business needs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How We Can Help Your Business</h2>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            We offer a comprehensive suite of services designed to help you optimize your business processes, 
            reduce costs, and drive digital transformation.
          </p>
        </div>

        {services.map((service, index) => (
          <div key={index} className="mb-16 border-b pb-16 last:border-b-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="relative">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-primary/90 to-secondary/90 text-white text-2xl mb-6 shadow-md">
                    {service.icon}
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  {service.title}
                </h2>
                <p className="mb-6 text-muted-foreground">{service.description}</p>
                
                {/* Partner logos */}
                {(service.title === "AI-Powered Data Entry Workforce" || 
                  service.title === "Robotic Process Automation (RPA)" || 
                  service.title === "Microsoft Power Platform" ||
                  service.title === "Cloud Services") && (
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">Technology Partner{partnerLogos[service.title === "AI-Powered Data Entry Workforce" ? "ai-data-entry" : 
                                                 service.title === "Robotic Process Automation (RPA)" ? "rpa" : 
                                                 service.title === "Cloud Services" ? "cloud" :
                                                 "power-platform"].length > 1 ? 's' : ''}</h3>
                    <div className={`flex items-center ${service.title === "Cloud Services" ? "justify-between w-full max-w-md" : "flex-wrap gap-6"}`}>
                      {partnerLogos[service.title === "AI-Powered Data Entry Workforce" ? "ai-data-entry" : 
                                    service.title === "Robotic Process Automation (RPA)" ? "rpa" : 
                                    service.title === "Cloud Services" ? "cloud" :
                                    "power-platform"].map((logo, i) => (
                        <div key={i} className="bg-white p-2 rounded-md shadow-sm border border-gray-100">
                          <img 
                            src={logo.src} 
                            alt={logo.alt} 
                            className="object-contain h-8" 
                            style={{ width: `${logo.width}px`, maxHeight: '36px' }} 
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get Started <FaArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-muted/50 p-6 rounded-lg border border-border">
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="bg-primary/10 p-1 rounded-full mr-3 text-primary">
                            <FaCheckCircle className="h-4 w-4" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-muted/50 p-6 rounded-lg border border-border">
                    <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <div className="bg-primary/10 p-1 rounded-full mr-3 text-primary">
                            <FaCheckCircle className="h-4 w-4" />
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-10 rounded-lg mt-12 shadow-md border border-primary/10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Contact us today to discuss how our services can help you achieve your business goals and 
              drive digital transformation in your organization.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
            <Link href="/careers" className="btn-outline">
              Join Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;