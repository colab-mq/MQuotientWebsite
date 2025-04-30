import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

// Import partner icons
import microsoftIcon from "/attached_assets/microsoft-icon-2048x2048-xtoxrveo.png";
import uipathIcon from "/attached_assets/uipathICON.png";
import powerAutomateIcon from "/attached_assets/PowerAutomate-2020-icon-1024x1024.png";
import automationAnywhereIcon from "/attached_assets/automation-anywhere-Icon.avif";

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-10 md:pt-32 md:pb-16">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background z-0" />
      
      {/* Decorative elements with minimal gradient blurs */}
      <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-[100px] opacity-50" />
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-secondary/10 rounded-full filter blur-[80px] opacity-40" />
      
      {/* Grid pattern for design texture - inspired by Vercel */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyNDI0MjQiIHN0cm9rZS13aWR0aD0iMC4yNSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMzAgMHYzMG0wIDMwVjMwbTMwIDB6Ii8+PC9nPjwvc3ZnPg==')] opacity-[0.03] z-0" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center mb-4 space-x-2">
            <span className="h-px w-5 bg-primary"></span>
            <span className="text-sm font-medium tracking-wider text-primary uppercase">Hyperautomation Experts</span>
            <span className="h-px w-5 bg-primary"></span>
          </motion.div>
          
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 max-w-5xl"
            variants={itemVariants}
          >
            Design the Future of Your Business <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">—</span> Powered by Automation and AI
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-lg mb-8 text-muted-foreground max-w-2xl"
            variants={itemVariants}
          >
            Expertise you can trust. Innovation you can measure.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8"
            variants={itemVariants}
          >
            <Link href="/contact" className="rounded-full bg-primary hover:bg-primary/90 text-white px-6 py-3 font-medium transition-all duration-300 flex items-center gap-2">
              Get Started
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
            <Link href="/services" className="rounded-full border border-border hover:border-primary/50 bg-transparent px-6 py-3 font-medium transition-all duration-300 flex items-center gap-2">
              Explore Services 
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Featured image with modern styling */}
            <motion.div 
              className="w-full mx-auto relative order-2 lg:order-1"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-1 scale-[1.02] blur-[2px] opacity-40"></div>
              <div className="relative overflow-hidden rounded-2xl border border-white/5 shadow-xl max-h-[300px] md:max-h-[350px]">
                <img 
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Digital transformation solutions" 
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-70"></div>
                
                {/* Floating stat cards */}
                <div className="absolute bottom-6 left-6 bg-background/80 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-base">
                      7+
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Years of Excellence</p>
                      <p className="text-sm font-medium">In Hyperautomation</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Partner logos */}
            <motion.div 
              className="flex flex-col order-1 lg:order-2"
              variants={itemVariants}
            >
              <p className="text-sm text-muted-foreground mb-5 relative inline-block">
                <span>Activating the True Potential of Leading Technologies</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
              </p>
              <div className="flex items-center gap-6 flex-wrap justify-center">
                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center shadow-sm border border-border">
                  <img src={microsoftIcon} alt="Microsoft" className="w-8 h-8 object-contain" />
                </div>
                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center shadow-sm border border-border">
                  <img src={uipathIcon} alt="UiPath" className="w-8 h-8 object-contain" />
                </div>
                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center shadow-sm border border-border">
                  <img src={powerAutomateIcon} alt="Power Automate" className="w-8 h-8 object-contain" />
                </div>
                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center shadow-sm border border-border">
                  <img src={automationAnywhereIcon} alt="Automation Anywhere" className="w-8 h-8 object-contain" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
