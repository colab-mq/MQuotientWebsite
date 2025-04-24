import { Link } from "wouter";
import { FaRobot, FaBolt, FaChartLine, FaCode, FaVial, FaHeadset, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      title: "Robotic Process Automation (RPA)",
      description: "We implement UiPath and Blue Prism RPA solutions to automate repetitive tasks, reduce errors, and free your team to focus on high-value activities.",
      icon: <FaRobot />,
      features: [
        "Process analysis and optimization",
        "Attended and unattended automation",
        "UiPath and Blue Prism expertise"
      ]
    },
    {
      title: "Microsoft Power Platform",
      description: "We create custom solutions using Power Apps, Power Automate, and Power BI to streamline processes and provide valuable business insights.",
      icon: <FaBolt />,
      features: [
        "Custom Power App development",
        "Workflow automation with Power Automate",
        "Business intelligence with Power BI"
      ]
    },
    {
      title: "Process Optimization",
      description: "We analyze your business processes to identify optimization opportunities and implement solutions that improve efficiency and reduce costs.",
      icon: <FaChartLine />,
      features: [
        "Process analysis and mapping",
        "Identification of automation opportunities",
        "Implementation of process improvements"
      ]
    },
    {
      title: "Custom Development",
      description: "Our skilled developers create tailored solutions to address unique business challenges that off-the-shelf software can't solve.",
      icon: <FaCode />,
      features: [
        "Web and mobile application development",
        "System integration services",
        "API development and integration"
      ]
    },
    {
      title: "Test Automation",
      description: "We implement automated testing solutions to improve software quality, reduce testing time, and accelerate your development cycles.",
      icon: <FaVial />,
      features: [
        "Test case development and execution",
        "UiPath Test Suite implementation",
        "Continuous integration support"
      ]
    },
    {
      title: "Implementation & Support",
      description: "We provide comprehensive implementation services and ongoing support to ensure your automation solutions continue to deliver value.",
      icon: <FaHeadset />,
      features: [
        "Solution implementation and deployment",
        "User training and knowledge transfer",
        "Ongoing maintenance and support"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <h2 className="section-title">Our Services</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle max-w-3xl mx-auto">
            We provide comprehensive automation solutions to streamline business processes and drive digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="text-foreground mb-6">
                {service.description}
              </p>
              <ul className="mb-6 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="service-link">
                Learn more <FaArrowRight className="inline ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
