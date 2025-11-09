import { Link } from "wouter";
import { useEffect } from "react";
import { FaCloud, FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import googleCloudLogo from "/attached_assets/Google_Cloud_logo.svg.png";

const GoogleCloud = () => {
  useEffect(() => {
    document.title = "Google Cloud Solutions | mquotient";
  }, []);

  const deliverables = [
    {
      title: "In-Depth Cloud Readiness Assessment",
      description: "Comprehensive evaluations of your existing infrastructure, security, compliance, and cost models to define a clear, strategic migration and adoption plan aligned with your business goals."
    },
    {
      title: "Seamless Cloud Migration & Modernization",
      description: "Expert planning and execution for migration to Google Cloud, utilizing automation, best practices, and innovative tools to ensure quick, reliable, and cost-efficient transition."
    },
    {
      title: "Full-spectrum Managed Services",
      description: "Continuous management of your GCP environment, including monitoring, auto-scaling, security governance, automated backups, disaster recovery, and system optimization to ensure high availability and security."
    },
    {
      title: "Tiered Support (L1, L2, L3)",
      items: [
        "L1 Support: Quick resolution of typical user issues, access management, and routine troubleshooting to maximize productivity.",
        "L2 Support: Advanced diagnostics and resolution of complex technical challenges with support from certified Google Cloud engineers.",
        "L3 Support: Expert-level troubleshooting and architectural consultancy for high-impact issues, performance tuning, and system integration."
      ]
    },
    {
      title: "Certified Google Cloud Professionals",
      description: "Our specialists bring certified expertise in Google Cloud architecture, security, and DevOps, ensuring your cloud operations are scalable, efficient, and secure."
    },
    {
      title: "Flexible, Scalable Support Model",
      description: "Support teams that grow with your needs, offering high availability, on-demand scaling, and proactive management to reduce downtime and operational risks."
    },
    {
      title: "End-to-End Cloud Lifecycle Management",
      description: "From initial assessments to continual optimization, our services ensure your Google Cloud environment remains secure, cost-effective, and aligned with industry best practices."
    }
  ];

  const benefits = [
    {
      title: "Certified Expertise & Proven Track Record",
      description: "Our team's Google Certified Professional engineers deliver reliable, expert-driven projects tailored to enterprise-grade requirements."
    },
    {
      title: "Drive Innovation & Digital Transformation",
      description: "Accelerate your business initiatives with advanced AI/ML, IoT, and analytics services offered by Google Cloud."
    },
    {
      title: "Security & Compliance at the Core",
      description: "Implement a security-first approach with automatic threat detection, data encryption, and compliance management built into all our solutions."
    },
    {
      title: "Cost Optimization & Efficiency",
      description: "Ongoing optimization for resource usage, AI-driven cost insights, and automation tools that keep your cloud spending in check."
    },
    {
      title: "Proactive Monitoring & Incident Management",
      description: "24x7 support, real-time alerting, and rapid incident response minimize downtime and operational impact."
    },
    {
      title: "Dedicated Cloud Partnership",
      description: "Your dedicated Cloud Service Manager ensures ongoing strategic alignment, continuous improvement, and transparent reporting."
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
              <img src={googleCloudLogo} alt="Google Cloud" className="h-16 object-contain" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold" data-testid="text-page-title">Google Cloud Platform Solutions</h1>
          </div>
          <p className="text-xl max-w-3xl">
            Empowering Your Business with Cutting-Edge Google Cloud Technologies
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Leverage mquotient's expertise in Google Cloud to unlock innovation, optimize operations, and accelerate digital transformation. 
              Our services cover every stage from assessment and migration to ongoing managed support, delivered by certified Google Cloud professionals.
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
              Why mquotient for Google Cloud
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
              Partner with mquotient to harness Google Cloud's innovative offerings—from scalable infrastructure to intelligent 
              data analytics—and transform your business operations with confidence.
            </p>
            <div className="flex justify-center">
              <Link href="/contact" className="btn-primary" data-testid="button-contact">
                Get Started with Google Cloud
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleCloud;
