import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 z-0" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col md:flex-row items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              variants={itemVariants}
            >
              Empowering <span className="gradient-text">Digital Transformation</span> Through Hyperautomation
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-foreground/80 leading-relaxed"
              variants={itemVariants}
            >
              We help organizations optimize their business processes with intelligent automation solutions that drive efficiency and growth.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              variants={itemVariants}
            >
              <Link href="/services" className="btn-outline">
                Explore Our Services
              </Link>
              <Link href="/contact" className="btn-primary inline-flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur-sm opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Digital Transformation" 
                className="relative rounded-xl shadow-lg w-full h-auto z-10 object-cover" 
                style={{ maxHeight: "400px" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
