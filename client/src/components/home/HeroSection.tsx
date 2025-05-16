import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

// Import partner icons
import uipathIcon from "/attached_assets/uipathICON.png";
import automationAnywhereIcon from "/attached_assets/automation-anywhere-Icon.avif";
import powerPlatformLogo from "@assets/PowerPlatform_scalable.png";
import powerAppsLogo from "@assets/PowerApps_scalable.png";
import powerAutomateLogo from "@assets/PowerAutomate_scalable.png";
import powerBILogo from "@assets/PowerBI_scalable.png";
import powerPagesLogo from "@assets/PowerPages_scalable.png";
import powerFxLogo from "@assets/PowerFx_scalable.png";
import aiBuilderLogo from "@assets/AIBuilder_scalable.png";
import dataverseLogo from "@assets/Dataverse_scalable.png";
import copilotStudioLogo from "@assets/CopilotStudio_scalable.png";

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left side content */}
          <motion.div 
            className="lg:col-span-6 flex flex-col"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center mb-4 space-x-2">
              <span className="h-px w-5 bg-primary"></span>
              <span className="text-sm font-medium tracking-wider text-primary uppercase">Hyperautomation Experts</span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
              variants={itemVariants}
            >
              Architect the Future of Your Enterprise <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">—</span> Unified, Scalable, AI-Ready
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-lg mb-8 text-muted-foreground max-w-2xl"
              variants={itemVariants}
            >
              Reduce automation costs by up to 80% while building a resilient, AI-ready foundation with proven, platform-agnostic execution
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4"
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
            
            {/* Partner logos */}
            <motion.div 
              className="mt-10 lg:mt-12"
              variants={itemVariants}
            >
              <p className="text-sm text-muted-foreground mb-5 relative inline-block">
                <span>Activating Enterprise-Grade Platforms to Deliver Scalable, Intelligent Outcomes</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
              </p>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center shadow-sm border border-border">
                  <img src={uipathIcon} alt="UiPath" className="w-8 h-8 object-contain" />
                </div>
                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center shadow-sm border border-border">
                  <img src={automationAnywhereIcon} alt="Automation Anywhere" className="w-8 h-8 object-contain" />
                </div>
              </div>
              
              <div className="w-full overflow-hidden relative">
                <p className="text-xs text-muted-foreground mb-2">Microsoft Power Platform</p>
                <div className="flex gap-4 py-2 overflow-x-auto scrollbar-hide snap-x">
                  <div className="w-12 h-12 rounded-full bg-background flex-shrink-0 flex items-center justify-center shadow-sm border border-border snap-start">
                    <img src={powerPlatformLogo} alt="Power Platform" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-background flex-shrink-0 flex items-center justify-center shadow-sm border border-border snap-start">
                    <img src={powerAppsLogo} alt="Power Apps" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-background flex-shrink-0 flex items-center justify-center shadow-sm border border-border snap-start">
                    <img src={powerAutomateLogo} alt="Power Automate" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-background flex-shrink-0 flex items-center justify-center shadow-sm border border-border snap-start">
                    <img src={powerBILogo} alt="Power BI" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-background flex-shrink-0 flex items-center justify-center shadow-sm border border-border snap-start">
                    <img src={powerPagesLogo} alt="Power Pages" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-background flex-shrink-0 flex items-center justify-center shadow-sm border border-border snap-start">
                    <img src={powerFxLogo} alt="Power Fx" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-background flex-shrink-0 flex items-center justify-center shadow-sm border border-border snap-start">
                    <img src={aiBuilderLogo} alt="AI Builder" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-background flex-shrink-0 flex items-center justify-center shadow-sm border border-border snap-start">
                    <img src={dataverseLogo} alt="Dataverse" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-background flex-shrink-0 flex items-center justify-center shadow-sm border border-border snap-start">
                    <img src={copilotStudioLogo} alt="Copilot Studio" className="w-8 h-8 object-contain" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side image */}
          <motion.div 
            className="lg:col-span-6 lg:pr-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              className="w-full h-full relative"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-1 scale-[1.02] blur-[2px] opacity-40"></div>
              <div className="relative overflow-hidden rounded-2xl border border-white/5 shadow-xl h-[350px] md:h-[450px]">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
