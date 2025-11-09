import { Link } from "wouter";
import { useEffect } from "react";
import { FaCloud, FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import awsLogo from "/attached_assets/amazon-web-services-1-logo-png-transparent.png";

const AWS = () => {
  useEffect(() => {
    document.title = "AWS Cloud Solutions | mquotient";
  }, []);

  const deliverables = [
    {
      title: "Comprehensive Cloud Assessment",
      description: "In-depth evaluation of your infrastructure to analyze readiness, cost optimization, security posture, and cloud migration strategy, providing a clear roadmap customized for your business goals."
    },
    {
      title: "Seamless Cloud Migration",
      description: "Hands-on planning and execution of workloads migration to AWS with minimal downtime, leveraging automation and best practices to ensure a smooth transition and modernization of your applications."
    },
    {
      title: "Robust Managed Services",
      description: "End-to-end AWS environment management covering monitoring, proactive performance optimization, patching, backup and disaster recovery, compliance, and security management to maximize operational efficiency."
    },
    {
      title: "Tiered AWS Help Desk Support (L1, L2, L3)",
      items: [
        "L1 Help Desk: Rapid resolution of common issues, user access management, and basic troubleshooting to maximize productivity.",
        "L2 Help Desk: Advanced diagnostics and complex problem resolution handled by certified cloud engineers.",
        "L3 Help Desk: Expert-level support for architectural challenges, performance tuning, and integrations by AWS-certified specialists."
      ]
    },
    {
      title: "Skilled and Certified Resources",
      description: "Our AWS-accredited professionals operate as an extension of your team, ensuring 24x7 coverage, rapid escalation of business-critical incidents, and continuous operational excellence."
    },
    {
      title: "Scalable Support Model",
      description: "Flexible team sizing to adapt to your growth, digital transformations, and regulatory compliance needs."
    },
    {
      title: "Lifecycle Management",
      description: "Full-cycle cloud care—from onboarding and migration to optimization and ongoing adjustments—ensuring AWS environments remain secure, cost-effective, and high-performing."
    }
  ];

  const benefits = [
    {
      title: "Certified Expertise",
      description: "Trained AWS professionals with multiple certifications who are dedicated to managing and optimizing your cloud operations."
    },
    {
      title: "Operational Excellence",
      description: "Simplifying cloud complexity with automated workflows, ITIL-aligned process management, and continuous monitoring to reduce downtime and operational risk."
    },
    {
      title: "Cost Optimization",
      description: "Strategic analysis and management to ensure cloud investments are maximized, reducing unnecessary spend without compromising on performance."
    },
    {
      title: "Security & Compliance",
      description: "Ensuring your AWS infrastructure adheres to industry-standard compliance protocols, with real-time security monitoring and timely patching."
    },
    {
      title: "Proactive Incident Management",
      description: "Our 24/7 help desk and incident response teams provide rapid resolution, minimizing business impact through effective change management and monitoring."
    },
    {
      title: "Customer-Focused Partnership",
      description: "Dedicated Cloud Service Delivery Managers coordinate with your teams, providing transparency, continuous improvement, and a trusted cloud operations partnership."
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
              <img src={awsLogo} alt="Amazon Web Services" className="h-16 object-contain" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold" data-testid="text-page-title">AWS Cloud Solutions</h1>
          </div>
          <p className="text-xl max-w-3xl">
            End-to-End Enterprise AWS Expertise Tailored for Your Success
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unlock the full potential of AWS with mquotient's specialized cloud services designed for modern enterprises. 
              Our service offering spans the entire cloud lifecycle—from initial readiness assessment and strategic migration 
              to ongoing managed services—delivering seamless, secure, and reliable AWS operations backed by a team of certified experts.
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
              Why Choose mquotient for AWS
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
              Partner with mquotient to drive high availability, rapid responsiveness, proactive optimization, 
              and continuous innovation on AWS. Let us transform your cloud journey into a competitive advantage.
            </p>
            <div className="flex justify-center">
              <Link href="/contact" className="btn-primary" data-testid="button-contact">
                Get Started with AWS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AWS;
