import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Target, TrendingDown, Clock, Shield } from "lucide-react";

const ValuePropositionSection = () => {
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

  const coreOffers = [
    {
      icon: <TrendingDown className="h-8 w-8 text-primary" />,
      title: "Cut Costs by 80%",
      description: "Eliminate manual processes and reduce operational expenses through intelligent automation"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "6-Month ROI",
      description: "See measurable returns within 6 months with our proven automation frameworks"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Scale Without Limits",
      description: "Build AI-ready automation infrastructure that grows with your business demands"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Risk-Free Implementation",
      description: "Platform-agnostic solutions with built-in compliance and enterprise security"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            Stop Managing Process Bottlenecks. 
            <span className="gradient-text block mt-2">Start Eliminating Them.</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            While your competitors struggle with manual processes, you could be operating with 
            intelligent automation that scales instantly, reduces costs dramatically, and 
            delivers consistent results 24/7.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {coreOffers.map((offer, index) => (
            <motion.div 
              key={index}
              className="bg-background/80 backdrop-blur-sm p-8 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
              variants={itemVariants}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {offer.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {offer.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {offer.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Executive Summary */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-6"
            variants={itemVariants}
          >
            The Bottom Line for Operations Leaders
          </motion.h3>
          <motion.p 
            className="text-lg text-foreground/80 mb-8 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            You need automation that works <em>now</em>, not projects that take years to deliver value. 
            Our unified approach consolidates your automation stack, reduces vendor complexity, 
            and delivers measurable ROI within months—not years.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link 
              href="/contact" 
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold"
            >
              Schedule Executive Briefing
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              href="/case-studies" 
              className="btn-outline inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold"
            >
              View ROI Case Studies
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;