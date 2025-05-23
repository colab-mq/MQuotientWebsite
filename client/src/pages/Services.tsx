import { Link } from "wouter";
import { useEffect } from "react";
import { FaRobot, FaBolt, FaCode, FaHeadset, FaCheckCircle, FaArrowRight, FaBrain, FaCloud, FaCog } from "react-icons/fa";

// Import partner logos
import glyphXLogo from "../assets/partners/GLYPHX.png";
import microsoftLogo from "../assets/partners/Microsoft_logo.png";
import azureLogo from "../assets/partners/azure-logo.png";

// Import RPA and cloud partner logos from attached assets
import uiPathIcon from "/attached_assets/uipathICON.png";
import automationAnywhereIcon from "/attached_assets/automation-anywhere-Icon.avif";
import huggingfaceLogo from "/attached_assets/huggingface-color.logo.png";
import awsLogo from "/attached_assets/amazon-web-services-1-logo-png-transparent.png";
import googleCloudLogo from "/attached_assets/Google_Cloud_logo.svg.png";
import bluePrismLogo from "/attached_assets/Blue-Prism-Logo-What-is-Blue-Prism-Edureka.png";

// Import updated Power Platform logos
import powerPlatformLogo from "/attached_assets/PowerPlatform_scalable.png";
import powerAppsLogo from "/attached_assets/PowerApps_scalable.png";
import powerAutomate2Logo from "/attached_assets/PowerAutomate_scalable.png";
import powerBILogo from "/attached_assets/PowerBI_scalable.png";
import dataverseLogo from "/attached_assets/Dataverse_scalable.png";
import copilotStudioLogo from "/attached_assets/CopilotStudio_scalable.png";
import powerPagesLogo from "/attached_assets/PowerPages_scalable.png";
import powerFxLogo from "/attached_assets/PowerFx_scalable_1747370012300.png";
import aiBuilderLogo from "/attached_assets/AIBuilder_scalable.png";

const Services = () => {
  // Update page title for SEO
  useEffect(() => {
    document.title = "mquotient Services | AI Document Processing, RPA & Power Platform Solutions";
  }, []);

  // Partner logos for each service
  const partnerLogos = {
    "ai-data-entry": [
      { src: glyphXLogo, alt: "GlyphX", width: 160 }
    ],
    "intelligent-automation": [
      { src: uiPathIcon, alt: "UiPath", width: 32 },
      { src: automationAnywhereIcon, alt: "Automation Anywhere", width: 32 },
      { src: bluePrismLogo, alt: "Blue Prism", width: 32 },
      { src: huggingfaceLogo, alt: "Hugging Face", width: 32 },
      { src: awsLogo, alt: "Amazon Web Services", width: 32 },
      { src: googleCloudLogo, alt: "Google Cloud", width: 32 }
    ],
    "power-platform": [
      { src: powerPlatformLogo, alt: "Power Platform", width: 50 },
      { src: powerAppsLogo, alt: "Power Apps", width: 50 },
      { src: powerAutomate2Logo, alt: "Power Automate", width: 50 },
      { src: powerBILogo, alt: "Power BI", width: 50 },
      { src: dataverseLogo, alt: "Dataverse", width: 50 },
      { src: copilotStudioLogo, alt: "Copilot Studio", width: 50 },
      { src: powerPagesLogo, alt: "Power Pages", width: 50 },
      { src: powerFxLogo, alt: "Power Fx", width: 50 },
      { src: aiBuilderLogo, alt: "AI Builder", width: 50 }
    ],
    "cloud": [
      { src: azureLogo, alt: "Microsoft Azure", width: 100 },
      { src: awsLogo, alt: "Amazon Web Services", width: 100 },
      { src: googleCloudLogo, alt: "Google Cloud Platform", width: 100 }
    ]
  };
  
  const services = [
    {
      title: "Intelligent Business Automation: AI + RPA",
      description: "At mquotient, we believe automation should do more than just reduce effort—it should unlock innovation and prepare you for what's next. That's why our AI-enabled automation and RPA solutions are designed not only to eliminate repetitive tasks, but also to scale intelligent decision-making across your organization.",
      icon: <FaRobot />,
      features: [
        "Process discovery, analysis & optimization",
        "Attended & unattended RPA (UiPath, Blue Prism, Power Automate)",
        "AI-enhanced automation (OCR, NLP, ML)",
        "Automation consolidation & migration (up to 80% cost savings)",
        "Scalable automation frameworks built for AI readiness",
        "Test automation and QA"
      ],
      benefits: [
        "Smarter, faster operations powered by proven automation strategies",
        "Lower costs through license reduction and optimized platforms",
        "Future-ready systems designed for enterprise-scale AI integration",
        "Hands-on, committed team that listens first and delivers with precision",
        "Improved compliance and customer satisfaction through intelligent workflows"
      ]
    },
    {
      title: "Microsoft Power Platform Solutions",
      description: "We design custom business applications and process automation solutions using Microsoft Power Apps, Power Automate, Power BI, and Dataverse—helping your teams work smarter and make faster, informed decisions.",
      icon: <FaBolt />,
      features: [
        "Custom Power App development",
        "Workflow automation with Power Automate",
        "Visual reporting with Power BI dashboards",
        "Dataverse for centralized data management",
        "Tailored low-code/no-code solutions",
        "API integration and external system connectors"
      ],
      benefits: [
        "Rapid business app development",
        "Empowered business users via low-code tools",
        "Streamlined internal workflows",
        "Better decision-making with visual data insights",
        "Reduced reliance on IT and lower development costs"
      ]
    },
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
      title: "Managed Automation Services",
      description: "Sustain Performance. Scale with Confidence. Automation isn't a one-time project—it's an evolving capability. Our Managed Services ensure your automation environment continues to deliver value long after go-live.",
      icon: <FaHeadset />,
      features: [
        "End-to-end solution onboarding and operationalization",
        "Hypercare and stabilization post-deployment",
        "Performance monitoring to identify optimization opportunities",
        "Knowledge transfer and user enablement to empower teams",
        "System upgrades and platform enhancements",
        "Support for automation roadmap planning and AI integration readiness"
      ],
      benefits: [
        "Minimize disruption with proactive, responsive support",
        "Maximize ROI by extending the life and impact of your automation investments",
        "Enable continuous improvement through data-driven insights and refinement",
        "Stay scalable and AI-ready with architecture designed for what's next",
        "Work with a team that listens, adapts, and delivers—long after the build is done"
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
                  service.title === "Intelligent Business Automation: AI + RPA" || 
                  service.title === "Microsoft Power Platform Solutions" ||
                  service.title === "Cloud Services") && (
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">Technology Stack</h3>
                    {service.title === "Microsoft Power Platform Solutions" ? (
                      <div className="w-full overflow-hidden relative">
                        <div className="flex gap-4 py-2 overflow-x-auto scrollbar-hide snap-x">
                          {partnerLogos["power-platform"].map((logo: { src: string; alt: string; width: number }, i: number) => (
                            <div key={i} className="bg-white/90 p-2 rounded-md shadow-sm border border-gray-100 flex-shrink-0 flex items-center justify-center h-16 w-16 snap-start">
                              <img 
                                src={logo.src} 
                                alt={logo.alt} 
                                className="object-contain h-full w-full"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : service.title === "Intelligent Business Automation: AI + RPA" ? (
                      <div className="w-full overflow-hidden relative">
                        <div className="flex gap-4 py-2 overflow-x-auto scrollbar-hide snap-x">
                          {partnerLogos["intelligent-automation"].map((logo: { src: string; alt: string; width: number }, i: number) => (
                            <div key={i} className="w-14 h-14 rounded-full bg-background flex-shrink-0 flex items-center justify-center shadow-sm border border-border snap-start">
                              <img 
                                src={logo.src} 
                                alt={logo.alt} 
                                className="w-8 h-8 object-contain"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className={`flex items-center ${
                        service.title === "Cloud Services" 
                          ? "justify-between w-full max-w-md flex-wrap" 
                          : "flex-wrap gap-6"
                      }`}>
                        {partnerLogos[
                          service.title === "AI-Powered Data Entry Workforce" ? "ai-data-entry" : "cloud"
                        ].map((logo: { src: string; alt: string; width: number }, i: number) => (
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
                    )}
                  </div>
                )}
                
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get Started <FaArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-muted/50 p-6 rounded-lg border border-border">
                    <h3 className="text-xl font-semibold mb-4">What We Deliver</h3>
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
                    <h3 className="text-xl font-semibold mb-4">Why mquotient</h3>
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