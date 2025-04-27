import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
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

  // Company principles
  const companyPrinciples = [
    "Process Excellence",
    "Technical Mastery",
    "Relentless Innovation",
    "True Client Partnership"
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0" />
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <h2 className="section-title">
            About <span className="gradient-text">mQuotient</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        {/* Who We Are */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4 relative inline-block">
              <span className="relative z-10">Who We Are</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded-full"></span>
            </h3>
            <p className="mb-6 text-foreground/80 leading-relaxed">
              At mQuotient, we bring automation to life — combining intelligent automation with AI-driven solutions to transform complex business processes into simple, scalable systems.
            </p>
            <p className="mb-6 text-foreground/80 leading-relaxed">
              With deep expertise and a passion for innovation, we help you move faster, work smarter, and grow stronger.
            </p>
          </motion.div>
          
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur-sm opacity-20"></div>
              <img 
                src="https://images.pexels.com/photos/2505026/pexels-photo-2505026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Business team collaborating at mQuotient" 
                className="relative rounded-xl shadow-lg w-full h-auto object-cover z-10" 
                style={{ maxHeight: "400px" }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* What We Do */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="order-2 md:order-1 relative" variants={itemVariants}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur-sm opacity-20"></div>
              <img 
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="AI-powered automation solutions" 
                className="relative rounded-xl shadow-lg w-full h-auto object-cover z-10" 
                style={{ maxHeight: "400px" }}
              />
            </div>
          </motion.div>
          
          <motion.div className="order-1 md:order-2" variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4 relative inline-block">
              <span className="relative z-10">What We Do</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded-full"></span>
            </h3>
            <p className="mb-6 text-foreground/80 leading-relaxed">
              We specialize in intelligent automation powered by AI — from Intelligent Document Processing (IDP) and Robotic Process Automation (RPA) to building custom tools that drive end-to-end digital transformation.
            </p>
            <p className="mb-6 text-foreground/80 leading-relaxed">
              Our AI-infused solutions make your processes faster, more accurate, and more cost-effective — delivering real, measurable growth where it matters most.
            </p>
          </motion.div>
        </motion.div>

        {/* How We Work */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4 relative inline-block">
              <span className="relative z-10">How We Work</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded-full"></span>
            </h3>
            <p className="mb-6 text-foreground/80 leading-relaxed">
              At mQuotient, we begin with you — understanding your goals, your challenges, and what success looks like for your business.
            </p>
            <p className="mb-6 text-foreground/80 leading-relaxed">
              We design solutions that are the perfect fit — blending automation and AI to cut costs, improve control, reduce turnaround times, and deliver immediate, visible ROI.
            </p>
            <p className="mb-6 text-foreground/80 leading-relaxed">
              We're not here just to make a sale. We're here to make you succeed.
            </p>
            <p className="mb-6 text-foreground/80 leading-relaxed">
              By identifying high-impact opportunities and applying the right blend of automation and AI with precision, we deliver results you can see, feel, and scale.
            </p>
            
            <h4 className="text-xl font-medium mb-4">Our principles:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
              {companyPrinciples.map((principle, index) => (
                <div className="flex items-center group" key={index}>
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-all duration-300">
                    <FaCheck className="text-primary h-4 w-4" />
                  </div>
                  <span className="font-medium">{principle}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur-sm opacity-20"></div>
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team collaboration at mQuotient" 
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
                <span className="gradient-text font-bold text-3xl">80+</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Ready to Get Started */}
        <motion.div 
          className="mt-32 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">
              Ready to <span className="gradient-text">Get Started?</span>
            </h3>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-foreground/80">
              Let's bring the power of automation and AI together to transform your business.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 mx-auto">
              Talk to Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
