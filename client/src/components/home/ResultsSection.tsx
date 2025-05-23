import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from "lucide-react";

const ResultsSection = () => {
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

  const keyMetrics = [
    {
      icon: <TrendingUp className="h-8 w-8 text-secondary" />,
      number: "80+",
      label: "Successful Projects",
      description: "Enterprise implementations delivered"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-secondary" />,
      number: "80%",
      label: "Average Cost Reduction",
      description: "Operational savings achieved"
    },
    {
      icon: <Clock className="h-8 w-8 text-secondary" />,
      number: "6-12",
      label: "Months to ROI",
      description: "Typical payback period"
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      number: "95%",
      label: "Client Satisfaction",
      description: "Would recommend to peers"
    }
  ];

  const provenResults = [
    {
      industry: "Manufacturing",
      challenge: "Supply chain visibility across 15 countries",
      result: "12% inventory reduction, 65% faster decision-making",
      link: "/case-studies"
    },
    {
      industry: "Insurance",
      challenge: "Manual claims processing delays",
      result: "80% processing time reduction, $500K annual savings",
      link: "/case-studies"
    },
    {
      industry: "Financial Services",
      challenge: "Regulatory compliance risks",
      result: "100% compliance achievement, 60% faster processing",
      link: "/case-studies"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metrics Grid */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={itemVariants}
          >
            Proven Results That Matter to <span className="gradient-text">Your Bottom Line</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-foreground/80 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Numbers that operations leaders care about—delivered consistently across industries.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {keyMetrics.map((metric, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
              variants={itemVariants}
            >
              <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {metric.icon}
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">
                {metric.number}
              </div>
              <div className="font-semibold text-lg mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-foreground/70">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Wins Section */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            Real Results from Real Companies
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {provenResults.map((result, index) => (
              <motion.div 
                key={index}
                className="bg-background p-8 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
                variants={itemVariants}
              >
                <div className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                  {result.industry}
                </div>
                <h4 className="font-semibold text-lg mb-4 group-hover:text-primary transition-colors duration-300">
                  {result.challenge}
                </h4>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  <strong className="text-secondary">Result:</strong> {result.result}
                </p>
                <Link 
                  href={result.link}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                >
                  View Full Case Study
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Executive CTA */}
        <motion.div 
          className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl p-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-4"
            variants={itemVariants}
          >
            Ready to Drive Similar Results?
          </motion.h3>
          <motion.p 
            className="text-xl mb-8 opacity-90 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Get a free assessment of your automation opportunities and see how we can deliver 
            measurable ROI for your operations.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link 
              href="/contact" 
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
            >
              Get Free Assessment
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-200"
            >
              Explore Solutions
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;