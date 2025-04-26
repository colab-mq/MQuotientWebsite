import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutSection = () => {
  // Company values instead of leadership
  const companyValues = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from client communication to solution delivery.",
      icon: "🌟"
    },
    {
      title: "Innovation",
      description: "We continuously explore new technologies and approaches to provide cutting-edge solutions.",
      icon: "💡"
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical business practices in all our dealings.",
      icon: "🔒"
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
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0" />
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <h2 className="section-title">
            About <span className="gradient-text">mquotient</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle max-w-3xl mx-auto">
            mquotient is a specialized provider of hyperautomation solutions, helping organizations transform their business processes.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4 relative inline-block">
              <span className="relative z-10">Our Mission</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded-full"></span>
            </h3>
            <p className="mb-6 text-foreground/80 leading-relaxed">
              At mquotient, we deliver innovative automation solutions that streamline operations, reduce costs, and increase productivity. Our expert team specializes in RPA implementation, custom software development, and digital transformation strategies.
            </p>
            <h3 className="text-2xl font-semibold mb-4 relative inline-block">
              <span className="relative z-10">Our Approach</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded-full"></span>
            </h3>
            <p className="mb-8 text-foreground/80 leading-relaxed">
              We partner with leading technology providers to deliver comprehensive solutions customized to your specific business needs. Our methodology focuses on identifying high-value automation opportunities and implementing solutions with measurable ROI.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
              <div className="flex items-center group">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-all duration-300">
                  <FaCheck className="text-primary h-4 w-4" />
                </div>
                <span className="font-medium">Process Excellence</span>
              </div>
              <div className="flex items-center group">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-all duration-300">
                  <FaCheck className="text-primary h-4 w-4" />
                </div>
                <span className="font-medium">Technical Expertise</span>
              </div>
              <div className="flex items-center group">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-all duration-300">
                  <FaCheck className="text-primary h-4 w-4" />
                </div>
                <span className="font-medium">Continuous Innovation</span>
              </div>
              <div className="flex items-center group">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-all duration-300">
                  <FaCheck className="text-primary h-4 w-4" />
                </div>
                <span className="font-medium">Client Partnership</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur-sm opacity-20"></div>
              <img 
                src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Business team collaborating at mquotient" 
                className="relative rounded-xl shadow-lg w-full h-auto object-cover z-10" 
                style={{ maxHeight: "400px" }}
              />
            </div>
            <div className="absolute -bottom-5 md:-bottom-8 left-1/2 md:-left-8 transform -translate-x-1/2 md:translate-x-0 bg-background p-6 rounded-xl shadow-lg border border-border z-20 w-4/5 md:w-auto">
              <div className="flex items-center justify-between mb-4 gap-4">
                <h4 className="font-semibold whitespace-nowrap">Years of Experience</h4>
                <span className="gradient-text font-bold text-3xl">7+</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <h4 className="font-semibold whitespace-nowrap">Successful Projects</h4>
                <span className="gradient-text font-bold text-3xl">100+</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Company Values */}
        <motion.div 
          className="mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-2">
              Our <span className="gradient-text">Values</span>
            </h3>
            <div className="section-divider"></div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {companyValues.map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-background rounded-xl shadow-sm border border-border p-8 hover:border-primary/20 hover:shadow-md transition-all duration-300"
                variants={itemVariants}
              >
                <div className="text-center mb-6">
                  <div className="mx-auto h-16 w-16 flex items-center justify-center text-4xl bg-primary/10 rounded-full">
                    {value.icon}
                  </div>
                  <h4 className="font-semibold text-xl mt-4 mb-1">{value.title}</h4>
                </div>
                <p className="text-center text-foreground/80 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
