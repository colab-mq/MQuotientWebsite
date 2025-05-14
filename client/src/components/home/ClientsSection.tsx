import { TagIcon, CalendarIcon, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

// Use static paths for the images
const ingramLogo = "/attached_assets/Ingram_Micro_logo_new.svg.png";
const pbPartnersLogo = "/attached_assets/pb_life_1665575605.png";
const firstsourceLogo = "/attached_assets/FirstSourcetransparent.webp";
const infosysLogo = "/attached_assets/Infosys_logo.svg.png";
const mquotientLogo = "/attached_assets/mquotient LOGO=removebackground.png";
const turtlemintLogo = "/attached_assets/turtlemint-logo.webp";

const ClientsSection = () => {
  const clients = [
    {
      name: "Ingram Micro",
      logo: ingramLogo
    },
    {
      name: "PB Partners",
      logo: pbPartnersLogo
    },
    {
      name: "Firstsource",
      logo: firstsourceLogo
    },
    {
      name: "Infosys",
      logo: infosysLogo
    },
    {
      name: "Turtlemint",
      logo: turtlemintLogo
    }
  ];

  const caseStudies = [
    {
      title: "Insurance Data Extraction",
      description: "For a leading insurance broker, the GlyphX Extraction Platform was deployed to automatically extract data from auto and health insurance policies—processing thousands of documents daily with speed, accuracy, and scale.",
      tags: ["AI", "Insurance", "Document Processing"],
      year: "2020"
    },
    {
      title: "Purchase Order ETA Management",
      description: "For a global supply chain team, we implemented a UiPath solution to automate PO ETA tracking across multiple supplier portals, reducing update cycle time from 2 days to under 4 hours and saving 1,200+ man-hours annually.",
      tags: ["RPA", "Supply Chain"],
      year: "2023"
    },
    {
      title: "VAT Invoice Request Automation",
      description: "For a multinational retail chain, we developed a Power Automate solution to fully automate VAT invoice requests, reducing delivery time from 3-4 days to under 30 minutes with 100% compliance adherence.",
      tags: ["Power Automate", "Finance"],
      year: "2024"
    },
    {
      title: "Aviation Maintenance Workflow",
      description: "For a leading aviation enterprise, we deployed Automation Anywhere bots to streamline fleet management and maintenance operations, improving aircraft readiness KPIs by 30% and reducing regulatory non-compliance by 85%.",
      tags: ["RPA", "Aviation"],
      year: "2024"
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
    <section id="clients" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0" />
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <h2 className="section-title">
            Companies We <span className="gradient-text">Work With</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle max-w-3xl mx-auto">
            We team up with forward-thinking organizations across industries to enhance efficiency and drive digital transformation together.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {clients.map((client, index) => (
            <motion.div 
              key={index} 
              className="flex items-center justify-center p-6 bg-background rounded-xl shadow-sm border border-border hover:border-primary/20 transition-all duration-300 h-32"
              variants={itemVariants}
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-h-full max-w-full object-contain"
                title={client.name}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Case Studies */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-2">
              Featured <span className="gradient-text">Projects</span>
            </h3>
            <div className="section-divider"></div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {caseStudies.map((study, index) => (
              <motion.div 
                key={index} 
                className="bg-background rounded-xl shadow-sm border border-border overflow-hidden hover:border-primary/20 hover:shadow-md transition-all duration-300"
                variants={itemVariants}
              >
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-4 relative inline-block">
                    <span className="relative z-10">{study.title}</span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded-full"></span>
                  </h4>
                  <p className="mb-6 text-foreground/80 leading-relaxed">
                    {study.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <TagIcon className="h-4 w-4 mr-2" />
                      <span>{study.tags.join(", ")}</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <span>{study.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/contact" className="btn-primary inline-flex items-center">
            Work With Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
