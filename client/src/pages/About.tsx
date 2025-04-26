import { FaCheck, FaAward, FaUsers, FaLightbulb, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
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

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from the solutions we build to the service we provide."
    },
    {
      title: "Innovation",
      description: "We embrace innovation and continuously explore new technologies and approaches to deliver better results."
    },
    {
      title: "Integrity",
      description: "We act with integrity and transparency, building trust-based relationships with our clients and partners."
    },
    {
      title: "Client Focus",
      description: "We put our clients at the center of everything we do, focusing on delivering solutions that address their specific challenges."
    }
  ];

  return (
    <div className="pt-16 pb-16">
      <div className="relative overflow-hidden">
        {/* Hero section with enhanced background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 z-0" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full filter blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full filter blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '10s' }} />
        
        <div className="relative py-20 z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                About <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">mquotient</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-muted-foreground"
              >
                We're a specialized provider of hyperautomation solutions, helping organizations transform their business processes for greater efficiency and growth.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Our Story</h2>
            <p className="mb-4 text-muted-foreground">
              mquotient Business Services was founded with a vision to help organizations leverage automation and digital technologies to transform their operations and drive growth. Over the years, we've built a reputation for delivering innovative solutions that address complex business challenges.
            </p>
            <p className="mb-4 text-muted-foreground">
              With a team of experienced professionals specializing in RPA, Power Platform, and custom development, we've successfully delivered over 100 projects across various industries, helping our clients achieve significant improvements in operational efficiency and cost savings.
            </p>
            <p className="text-muted-foreground">
              Our commitment to excellence, technical expertise, and client-focused approach has made us a trusted partner for organizations looking to embark on their digital transformation journey.
            </p>
            
            <div className="flex items-center gap-4 mt-8 bg-muted/50 p-4 rounded-lg border border-border/50">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-bold">
                100+
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Successful Projects</p>
                <p className="font-medium">Delivered to Clients</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-xl blur-sm opacity-30 animate-gradient-xy"></div>
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Team Collaboration" 
              className="relative rounded-xl shadow-xl border border-border/40 z-10" 
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">Our Values</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl border border-border/50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FaAward className="text-primary h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">We strive for excellence in everything we do, from the solutions we build to the service we provide.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl border border-border/50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FaLightbulb className="text-primary h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">We embrace innovation and continuously explore new technologies and approaches to deliver better results.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl border border-border/50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FaHandshake className="text-primary h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-muted-foreground">We act with integrity and transparency, building trust-based relationships with our clients and partners.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl border border-border/50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FaUsers className="text-primary h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Client Focus</h3>
              <p className="text-muted-foreground">We put our clients at the center of everything we do, focusing on delivering solutions that address their specific challenges.</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">Our Expertise</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="bg-muted/50 p-6 rounded-xl border border-border/50 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <FaCheck className="text-primary h-4 w-4" />
                </span>
                Document Processing Capabilities
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 text-primary">
                    <FaCheck className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">AI-powered intelligent document processing (IDP)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 text-primary">
                    <FaCheck className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">Automated data extraction from structured and unstructured documents</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 text-primary">
                    <FaCheck className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">Document classification and routing</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 text-primary">
                    <FaCheck className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">OCR with advanced validation and business rules implementation</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 text-primary">
                    <FaCheck className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">Sample-based learning for document processing without templates</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 text-primary">
                    <FaCheck className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">UiPath and Blue Prism integration for end-to-end automation</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-muted/50 p-6 rounded-xl border border-border/50 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <FaCheck className="text-primary h-4 w-4" />
                </span>
                Industry Experience
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 text-primary">
                    <FaCheck className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">Insurance (policy processing, claims automation)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 text-primary">
                    <FaCheck className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">Banking & Finance (mortgage loan processing, accounts payable)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 text-primary">
                    <FaCheck className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">Healthcare (patient documentation, medical records management)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 text-primary">
                    <FaCheck className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">Retail & Manufacturing (supply chain documentation, inventory)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 text-primary">
                    <FaCheck className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">Utilities (field service documentation, meter reading automation)</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
