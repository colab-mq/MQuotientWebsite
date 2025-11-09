import { Link } from "wouter";
import { useEffect } from "react";
import { FaCloud, FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import azureLogo from "../../assets/partners/azure-logo.png";

const Azure = () => {
  useEffect(() => {
    document.title = "Microsoft Azure Solutions | mquotient";
  }, []);

  const deliverables = [
    {
      title: "Thorough Cloud Readiness Assessment",
      description: "Conduct detailed analysis of your current infrastructure, security posture, compliance requirements, and cost factors to formulate a strategic Azure adoption roadmap aligned with business objectives."
    },
    {
      title: "Smooth, Risk-Managed Cloud Migration",
      description: "Execute seamless migrations of workloads, applications, and data to Azure using best practices and automation, minimizing downtime and accelerating cloud adoption."
    },
    {
      title: "Robust Managed Azure Services",
      description: "Continuous end-to-end management of your Azure environment, including monitoring, automated patching, security governance, backup, disaster recovery, and proactive performance tuning."
    },
    {
      title: "Advanced Azure Support Tiers (L1, L2, L3)",
      items: [
        "L1 Support: Quick resolution of common user issues, access control, and routine troubleshooting for optimum user experience.",
        "L2 Support: Skilled handling of complex technical problems, configuration, and diagnostics by certified Azure engineers.",
        "L3 Support: Expert architectural support, integration challenges, and performance optimization addressed by senior Azure practitioners."
      ]
    },
    {
      title: "Certified Azure Professionals",
      description: "Skilled resources certified in Azure architecture, development, and security act as your cloud partners, delivering 24x7 support and rapid incident escalation."
    },
    {
      title: "Scalable Team and Support Models",
      description: "Dynamic resource allocation that grows with your business needs, with flexibility to handle peak demands, migrations, and compliance-led initiatives."
    },
    {
      title: "End-to-End Azure Cloud Lifecycle Management",
      description: "From strategic planning and migration to optimization and continual improvement, we ensure your Azure cloud environment delivers agility, cost efficiency, and best-in-class security."
    }
  ];

  const benefits = [
    {
      title: "Proven Cloud Expertise",
      description: "Deployment of certified Azure experts backed by a robust framework for operational excellence and cloud governance."
    },
    {
      title: "Accelerated Innovation",
      description: "Drive faster time-to-market with agile cloud solutions designed for scalable growth and digital innovation."
    },
    {
      title: "Security & Compliance by Design",
      description: "Layered security, compliance frameworks, and policy enforcement tailored to safeguard your critical data and applications on Azure."
    },
    {
      title: "Cost Efficiency",
      description: "Continuous cost monitoring and optimization ensure you get maximum value from your Azure investments."
    },
    {
      title: "Proactive Operational Management",
      description: "24/7 monitoring, incident management, and automated remediation reduce downtime and improve service reliability."
    },
    {
      title: "Client-Centric Partnership",
      description: "Dedicated cloud service managers coordinate ongoing delivery, improvements, and transparent reporting to align with your evolving needs."
    }
  ];

  return (
    <div className="pt-16 pb-16">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6" data-testid="link-back-to-services">
            <FaArrowLeft /> Back to Services
          </Link>
          <div className="flex items-center gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg">
              <img src={azureLogo} alt="Microsoft Azure" className="h-16 object-contain" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold" data-testid="text-page-title">Azure Cloud Solutions</h1>
          </div>
          <p className="text-xl max-w-3xl">
            Comprehensive Microsoft Azure Expertise to Accelerate Your Cloud Journey
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Leverage mquotient's extensive experience and certified Azure professionals to power your digital transformation. 
              We deliver tailored Azure cloud services spanning assessment, seamless migration, and end-to-end managed services, 
              ensuring scalable, secure, and high-performance cloud operations.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What We Deliver
            </h2>
            <div className="space-y-6">
              {deliverables.map((item, index) => (
                <div key={index} className="bg-muted/50 p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 flex items-start gap-3">
                    <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-muted-foreground ml-8">{item.description}</p>
                  )}
                  {item.items && (
                    <ul className="space-y-2 ml-8 mt-3">
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex} className="text-muted-foreground">
                          • {subItem}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Why Choose mquotient for Azure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-muted/50 p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-3 flex items-start gap-3">
                    <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm ml-8">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg border border-primary/20">
            <p className="text-lg text-center mb-6">
              Partner with mquotient to accelerate innovation, ensure security and compliance, and optimize costs 
              on Microsoft Azure. Transform your cloud operations with confidence.
            </p>
            <div className="flex justify-center">
              <Link href="/contact" className="btn-primary" data-testid="button-contact">
                Get Started with Azure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Azure;
