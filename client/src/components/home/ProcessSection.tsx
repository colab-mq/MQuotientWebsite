import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Assess & Design",
      description: "We analyze your processes, identify automation opportunities, and design optimal solutions tailored to your needs."
    },
    {
      number: "2",
      title: "Build & Test",
      description: "We develop automation solutions and thoroughly test them to ensure they meet all requirements and function correctly."
    },
    {
      number: "3",
      title: "Deploy & Go Live",
      description: "We implement the solution in your production environment, ensuring a smooth transition and minimal disruption."
    },
    {
      number: "4",
      title: "Support & Optimize",
      description: "We provide ongoing support and continuously optimize your automation solutions to maximize their value and effectiveness."
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
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 z-0" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <h2 className="section-title">
            How We <span className="gradient-text">Work</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle max-w-3xl mx-auto">
            We follow a structured methodology to ensure successful implementation of automation solutions.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {steps.map((step, index) => (
            <motion.div key={index} className="relative" variants={itemVariants}>
              <div className="process-step h-full">
                <div className="process-number">
                  <span>{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-foreground/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10 bg-background rounded-full p-1 shadow-sm border border-border">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg max-w-2xl mx-auto mb-8 text-foreground/80">
            Our proven approach ensures seamless integration of automation technologies into your existing workflows, maximizing ROI and operational efficiency.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
