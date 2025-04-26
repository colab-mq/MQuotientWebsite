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
                Technical Expertise
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
                  <span className="text-muted-foreground">Robotic Process Automation (RPA) with UiPath and Blue Prism</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 text-primary">
                    <FaCheck className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">Microsoft Power Platform (Power BI, Power Automate, Power Apps)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 text-primary">
                    <FaCheck className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">Custom automation solutions and API integrations</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 text-primary">
                    <FaCheck className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">Process optimization and workflow automation</span>
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
        
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">Featured Projects</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              variants={itemVariants} 
              className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl border border-border/50 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Insurance Data Extraction (2024)</h3>
              <p className="text-muted-foreground mb-4">
                For a leading insurance broker, we implemented a GlyphX AI-powered solution to extract data from auto and health insurance policies across multiple providers.
              </p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-sm uppercase tracking-wider text-muted-foreground">Challenge:</h4>
                <p className="text-sm text-muted-foreground">
                  Processing thousands of policies with variable formats to streamline reconciliation processes with brokers and enable targeted marketing near policy expiry dates.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-sm uppercase tracking-wider text-muted-foreground">Solution:</h4>
                <p className="text-sm text-muted-foreground">
                  Our GlyphX AI-Powered Data Entry Workforce used advanced machine learning to identify and extract data from policies regardless of format, processing over 30,000 documents per quarter.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <FaCheck className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">100% targeting</p>
                    <p className="text-xs text-muted-foreground">increase</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <FaCheck className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">40% conversion</p>
                    <p className="text-xs text-muted-foreground">rate increase</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants} 
              className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl border border-border/50 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Meter Reading Automation (2025)</h3>
              <p className="text-muted-foreground mb-4">
                For a utilities service provider, we developed a UiPath RPA solution to automate the meter reading and data processing workflow.
              </p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-sm uppercase tracking-wider text-muted-foreground">Challenge:</h4>
                <p className="text-sm text-muted-foreground">
                  Managing a complex system of manual meter readings across multiple sites, with inconsistent data formats and frequent human errors.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-sm uppercase tracking-wider text-muted-foreground">Solution:</h4>
                <p className="text-sm text-muted-foreground">
                  Our RPA solution automated data collection, validation, and processing, integrating with existing systems and implementing error-handling protocols.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <FaCheck className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">85% reduction</p>
                    <p className="text-xs text-muted-foreground">in processing time</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <FaCheck className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">99.5% accuracy</p>
                    <p className="text-xs text-muted-foreground">in data reporting</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants} 
              className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl border border-border/50 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Mortgage Post-Closing Automation (2023)</h3>
              <p className="text-muted-foreground mb-4">
                For a major mortgage lender, we streamlined the post-closing process through comprehensive automation.
              </p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-sm uppercase tracking-wider text-muted-foreground">Challenge:</h4>
                <p className="text-sm text-muted-foreground">
                  Managing complex post-closing workflows including document review, compliance validation, and tracking trailing documents across 300-800 page loan files.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-sm uppercase tracking-wider text-muted-foreground">Solution:</h4>
                <p className="text-sm text-muted-foreground">
                  Our AI-powered solution automated document classification, data extraction, compliance validation, and trailing document tracking with integrated workflow management.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <FaCheck className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">98% classification</p>
                    <p className="text-xs text-muted-foreground">accuracy</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <FaCheck className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">99.99% extraction</p>
                    <p className="text-xs text-muted-foreground">accuracy</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants} 
              className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl border border-border/50 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Power Platform Tool Enhancement (2025)</h3>
              <p className="text-muted-foreground mb-4">
                For a manufacturing client, we enhanced an existing Power Platform tool to improve lean initiative tracking and management.
              </p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-sm uppercase tracking-wider text-muted-foreground">Challenge:</h4>
                <p className="text-sm text-muted-foreground">
                  The existing tool lacked critical reporting capabilities, had poor user experience, and failed to provide real-time analytics needed for decision-making.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-sm uppercase tracking-wider text-muted-foreground">Solution:</h4>
                <p className="text-sm text-muted-foreground">
                  We enhanced the Power Platform application with improved UI/UX, custom Power BI dashboards, and automated workflows for data collection and analysis.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <FaCheck className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">35% productivity</p>
                    <p className="text-xs text-muted-foreground">improvement</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <FaCheck className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">90% user</p>
                    <p className="text-xs text-muted-foreground">satisfaction rate</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
