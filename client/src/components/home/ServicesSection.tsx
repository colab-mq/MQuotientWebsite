import { Link } from "wouter";
import { motion } from "framer-motion";
import { FaRobot, FaBolt, FaChartLine, FaCode, FaVial, FaHeadset, FaCheckCircle, FaBrain, FaStar, FaCloud } from "react-icons/fa";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ServicesSection = () => {
  const services = [
    {
      title: "AI-Powered Data Entry Workforce",
      description: "Break free from manual data entry bottlenecks with our intelligent document processing solution that automatically extracts and validates data from both structured and unstructured documents.",
      icon: <FaBrain />,
      features: [
        "99%+ accuracy with automated validation",
        "80% reduction in manual processing tasks",
        "Seamless integration with existing systems",
        "Process analysis and optimization",
        "System integration services"
      ]
    },
    {
      title: "Robotic Process Automation",
      description: "We implement UiPath and Blue Prism RPA solutions to automate repetitive tasks, reduce errors, and free your team to focus on high-value activities.",
      icon: <FaRobot />,
      features: [
        "Process analysis and optimization",
        "Attended and unattended automation",
        "UiPath and Blue Prism expertise",
        "Test automation and quality assurance",
        "Implementation of process improvements"
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
        "Custom development for unique challenges",
        "API development and integration"
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
        "Database & DevOps Support",
        "Industry-Focused Cloud Solutions"
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
        "Proof of Concepts & Prototyping"
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
        "Performance monitoring and support",
        "System upgrades and enhancements"
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
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 z-0" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full filter blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full filter blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full filter blur-3xl opacity-50 animate-pulse" style={{ animationDuration: '12s' }} />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block"
          >
            Our Services
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"
          ></motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            We provide comprehensive automation solutions to streamline business processes and drive digital transformation.
          </motion.p>
        </motion.div>

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
              className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl border border-border/50 hover:shadow-lg transition-shadow relative"
              variants={itemVariants}
            >
              {/* New badge functionality removed as requested */}
              
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center text-primary mb-4 text-2xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="mb-6 flex-grow">
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                          <FaCheckCircle className="text-primary h-3 w-3" />
                        </div>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href="/services" 
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors group"
                >
                  Learn more 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <Link 
            href="/services" 
            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-medium inline-flex items-center shadow-md hover:shadow-xl transition-shadow"
          >
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
