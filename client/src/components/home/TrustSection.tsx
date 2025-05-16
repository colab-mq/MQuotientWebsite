import { motion } from "framer-motion";
import { Zap, Users, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

const TrustSection = () => {
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

  // Trust points
  const trustPoints = [
    {
      title: "Automation + AI, Perfectly Blended",
      description: "We combine deep automation expertise with the transformative power of AI — delivering solutions that think, adapt, and scale with you.",
      icon: <Sparkles className="h-8 w-8" />
    },
    {
      title: "Immediate, Measurable Impact",
      description: "Every solution we craft is built for visible ROI — faster processes, lower costs, smarter operations — results you can see, feel, and grow.",
      icon: <CheckCircle2 className="h-8 w-8" />
    },
    {
      title: "True Partnership, Not Just Delivery",
      description: "We embed ourselves in your journey — understanding your challenges, your goals, and becoming an extension of your team.",
      icon: <Users className="h-8 w-8" />
    },
    {
      title: "Innovation Without the Guesswork",
      description: "With 7+ years and 80+ successful projects, we bring proven frameworks — not trial-and-error experiments.",
      icon: <Zap className="h-8 w-8" />
    },
    {
      title: "Built on Trust, Secured by Compliance",
      description: "We invest heavily in certifications, security measures, and client protection — so you can innovate with total peace of mind.",
      icon: <ShieldCheck className="h-8 w-8" />
    }
  ];

  return (
    <section id="trust" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0" />
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="section-heading text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Why Leading Businesses <span className="gradient-text">Trust mquotient</span>
          </motion.h2>
          <div className="section-divider mx-auto"></div>
          <motion.p className="section-subtitle max-w-3xl mx-auto" variants={itemVariants}>
            At mquotient, we don't just implement automation — we architect your next advantage.
            Here's why organizations choose us as their transformation partner:
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-16 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {trustPoints.map((point, index) => (
            <motion.div 
              key={index}
              className="mb-10 bg-background rounded-xl border border-border p-6 hover:border-primary/20 hover:shadow-md transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="max-w-3xl mx-auto" variants={itemVariants}>
            <p className="text-lg leading-relaxed">
              Your transformation deserves more than just tools — it deserves a partner who sees your vision, shares your ambition, and has the expertise to make it real.
            </p>
            <p className="text-lg font-semibold gradient-text mt-4">
              That's the mquotient difference.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;