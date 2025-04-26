import { FaRobot, FaBolt, FaChartLine, FaCode, FaVial, FaHeadset, FaCheckCircle, FaArrowRight, FaBrain } from "react-icons/fa";
import { Link } from "wouter";

// Import partner logos
import bluePrismLogo from "../assets/partners/Blue_Prism_Logo-700x126.png";
import glyphXLogo from "../assets/partners/GlyphX.LOGOOne.jpg";
import microsoftLogo from "../assets/partners/Microsoft_logo.png";
import uiPathLogo from "../assets/partners/UiPath_2019_Corporate_Logo.png";

const Services = () => {
  // Partner logos for each service
  const partnerLogos = {
    "ai-data-entry": [
      { src: glyphXLogo, alt: "GlyphX", width: 140 }
    ],
    "rpa": [
      { src: uiPathLogo, alt: "UiPath", width: 140 },
      { src: bluePrismLogo, alt: "Blue Prism", width: 140 }
    ],
    "power-platform": [
      { src: microsoftLogo, alt: "Microsoft", width: 140 }
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
        "Automation of back-office processes",
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
        "Microsoft 365 integration",
        "Low-code solution development"
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
      title: "Process Optimization",
      description: "We analyze your business processes to identify optimization opportunities and implement solutions that improve efficiency and reduce costs.",
      icon: <FaChartLine />,
      features: [
        "Process analysis and mapping",
        "Identification of automation opportunities",
        "Implementation of process improvements",
        "Process standardization",
        "Performance metrics and KPIs",
        "Continuous improvement methodologies"
      ],
      benefits: [
        "Streamlined operations",
        "Elimination of bottlenecks",
        "Reduced waste and inefficiency",
        "Improved resource utilization",
        "Enhanced process visibility"
      ]
    },
    {
      title: "Custom Development",
      description: "Our skilled developers create tailored solutions to address unique business challenges that off-the-shelf software can't solve.",
      icon: <FaCode />,
      features: [
        "Web and mobile application development",
        "System integration services",
        "API development and integration",
        "Database design and optimization",
        "Cloud-based solutions",
        "Enterprise application development"
      ],
      benefits: [
        "Tailored solutions for specific business needs",
        "Seamless integration with existing systems",
        "Improved productivity and efficiency",
        "Enhanced user experience",
        "Competitive advantage"
      ]
    },
    {
      title: "Test Automation",
      description: "We implement automated testing solutions to improve software quality, reduce testing time, and accelerate your development cycles.",
      icon: <FaVial />,
      features: [
        "Test case development and execution",
        "UiPath Test Suite implementation",
        "Continuous integration support",
        "Regression testing automation",
        "Performance testing",
        "Quality assurance processes"
      ],
      benefits: [
        "Faster time to market",
        "Improved software quality",
        "Reduced testing costs",
        "Consistent and reliable testing",
        "Early detection of defects"
      ]
    },
    {
      title: "Implementation & Support",
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
                  service.title === "Microsoft Power Platform") && (
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">Technology Partner{partnerLogos[service.title === "AI-Powered Data Entry Workforce" ? "ai-data-entry" : 
                                                 service.title === "Robotic Process Automation (RPA)" ? "rpa" : 
                                                 "power-platform"].length > 1 ? 's' : ''}</h3>
                    <div className="flex flex-wrap items-center gap-6">
                      {partnerLogos[service.title === "AI-Powered Data Entry Workforce" ? "ai-data-entry" : 
                                    service.title === "Robotic Process Automation (RPA)" ? "rpa" : 
                                    "power-platform"].map((logo, i) => (
                        <div key={i} className="bg-white p-2 rounded-md shadow-sm border border-gray-100">
                          <img 
                            src={logo.src} 
                            alt={logo.alt} 
                            className="object-contain h-8" 
                            style={{ width: `${logo.width}px`, maxHeight: '40px' }} 
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
