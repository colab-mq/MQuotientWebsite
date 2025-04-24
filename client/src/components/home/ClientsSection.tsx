import { FaQuoteLeft } from "react-icons/fa";
import { TagIcon, CalendarIcon, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const ClientsSection = () => {
  const clients = [
    "Ingram Micro",
    "Trustmarque",
    "Camelot",
    "SWAST"
  ];

  const caseStudies = [
    {
      title: "Meter Reading Automation",
      description: "Implemented UiPath RPA solution for Ingram Micro to automate the meter reading process, significantly reducing manual effort and improving accuracy.",
      tags: ["RPA", "UiPath"],
      year: "2025"
    },
    {
      title: "Power Platform Tool Enhancement",
      description: "Enhanced an existing Power Platform tool for Ingram Micro, adding new features and improving user experience to better track and manage lean initiatives.",
      tags: ["Power Platform", "Dataverse"],
      year: "2025"
    }
  ];

  const testimonials = [
    {
      quote: "MQuotient delivered an exceptional RPA solution that automated our meter reading process, saving us countless hours of manual work and virtually eliminating errors. Their expertise and professionalism were evident throughout the project.",
      name: "Simon Hill",
      position: "Business Development Manager, Ingram Micro UK",
      initials: "SH"
    },
    {
      quote: "Working with MQuotient on our Power Platform tool enhancement project was a great experience. Their team understood our requirements perfectly and delivered a solution that exceeded our expectations.",
      name: "Client Testimonial",
      position: "Project Manager, Technology Company",
      initials: "TM"
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
            Our <span className="gradient-text">Clients</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle max-w-3xl mx-auto">
            We work with leading organizations across various industries to drive digital transformation.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {clients.map((client, index) => (
            <motion.div 
              key={index} 
              className="flex items-center justify-center p-6 bg-background rounded-xl shadow-sm border border-border hover:border-primary/20 transition-all duration-300"
              variants={itemVariants}
            >
              <p className="font-bold text-xl">{client}</p>
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

        {/* Testimonials */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-2">
              What Our <span className="gradient-text">Clients Say</span>
            </h3>
            <div className="section-divider"></div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-background rounded-xl shadow-sm border border-border p-8 relative hover:border-primary/20 hover:shadow-md transition-all duration-300"
                variants={itemVariants}
              >
                <div className="text-primary/10 text-6xl absolute top-6 left-6">
                  <FaQuoteLeft />
                </div>
                <div className="relative z-10">
                  <p className="italic mb-8 text-foreground/80 leading-relaxed pt-8">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white">
                        <span className="font-bold">{testimonial.initials}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
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
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
