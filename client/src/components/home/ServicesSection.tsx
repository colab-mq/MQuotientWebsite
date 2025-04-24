import { Link } from "wouter";
import { motion } from "framer-motion";
import { FaRobot, FaBolt, FaChartLine, FaCode, FaVial, FaHeadset, FaCheckCircle } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Robotic Process Automation",
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
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <h2 className="section-title">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle max-w-3xl mx-auto">
            We provide comprehensive automation solutions to streamline business processes and drive digital transformation.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card group"
              variants={itemVariants}
            >
              <div className="service-icon group-hover:bg-primary/20 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="mb-6 space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                      <FaCheckCircle className="text-primary h-3 w-3" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services" className="service-link group">
                Learn more 
                <ArrowRight className="inline ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <Link href="/services" className="btn-primary inline-flex items-center">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
