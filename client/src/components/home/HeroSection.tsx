import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Import partner icons
import microsoftIcon from "/attached_assets/microsoft-icon-2048x2048-xtoxrveo.png";
import uipathIcon from "/attached_assets/uipathICON.png";
import blueprismIcon from "/attached_assets/BluePrism.png";
import glyphxIcon from "/attached_assets/GlyphxIcon.jpg";

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
    <section className="relative overflow-hidden py-20 md:py-36">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 z-0" />
      
      {/* More decorative elements with animated gradients */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full filter blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full filter blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full filter blur-3xl opacity-50 animate-pulse" style={{ animationDuration: '12s' }} />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div
              className="relative inline-block mb-6" 
              variants={itemVariants}
            >
              <span className="px-4 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full text-sm font-medium text-primary">
                Hyperautomation Experts
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
              variants={itemVariants}
            >
              Empowering <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Digital Transformation</span> Through Innovation
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-10 text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              We help organizations optimize their business processes with intelligent automation solutions that drive efficiency and growth.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              variants={itemVariants}
            >
              <Link href="/services" className="btn-outline inline-flex items-center gap-2">
                Explore Our Services 
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-6 mt-12"
              variants={itemVariants}
            >
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-background overflow-hidden" title="Microsoft">
                  <img src={microsoftIcon} alt="Microsoft" className="w-8 h-8 object-contain" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-background overflow-hidden" title="UiPath">
                  <img src={uipathIcon} alt="UiPath" className="w-8 h-8 object-contain" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-background overflow-hidden" title="Blue Prism">
                  <img src={blueprismIcon} alt="Blue Prism" className="w-8 h-8 object-contain" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-background overflow-hidden" title="GlyphX">
                  <img src={glyphxIcon} alt="GlyphX" className="w-8 h-8 object-contain scale-[1.55]" />
                </div>
              </div>
              <span className="text-sm text-muted-foreground">
                Trusted partners with industry leaders
              </span>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Animated gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-xl blur-sm opacity-30 animate-gradient-xy"></div>
              
              {/* Decorative elements behind image */}
              <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary/5 rounded-full z-0"></div>
              <div className="absolute -left-8 -top-8 w-40 h-40 bg-secondary/5 rounded-full z-0"></div>
              
              <img 
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Business professional working on digital transformation solutions" 
                className="relative rounded-xl shadow-xl w-full h-auto z-10 object-cover border border-border/40" 
                style={{ maxHeight: "450px" }}
              />
              
              {/* Floating info card */}
              <div className="absolute -bottom-6 -left-6 bg-background/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-border/60 z-20">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                    7+
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Years of Excellence</p>
                    <p className="text-sm font-medium">In Hyperautomation</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
