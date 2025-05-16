import { FaCheck, FaAward, FaUsers, FaLightbulb, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect } from "react";

const About = () => {
  // Update page title for SEO
  useEffect(() => {
    document.title = "About mquotient | Our Story, Values & Approach";
  }, []);
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
                We help organizations unlock the full potential of automation—designing and implementing solutions that simplify operations, boost efficiency, and deliver measurable results.
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
              At mquotient, we started with a clear goal: help businesses work smarter—not harder—by making the most of automation and digital technology.
            </p>
            <p className="mb-4 text-muted-foreground">
              Since then, we've delivered over 80 successful projects across industries, solving complex challenges, streamlining operations, and reducing costs where it matters most.
            </p>
            <p className="mb-4 text-muted-foreground">
              Today, we bring that same hands-on, problem-solving mindset to a new era of opportunity: unified automation that's leaner, smarter, and AI-ready.
            </p>
            <p className="mb-4 text-muted-foreground">
              With our Automation Consolidation & Migration Services, we help forward-thinking teams:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">
                    <FaCheck className="h-3 w-3" />
                  </div>
                  Unify & Simplify
                </h3>
                <p className="text-sm text-muted-foreground">Fragmented systems into a single streamlined platform</p>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">
                    <FaCheck className="h-3 w-3" />
                  </div>
                  Slash Costs
                </h3>
                <p className="text-sm text-muted-foreground">Cutting license and maintenance overhead by up to 80%</p>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">
                    <FaCheck className="h-3 w-3" />
                  </div>
                  Scale Smarter
                </h3>
                <p className="text-sm text-muted-foreground">With a resilient automation foundation built for AI integration</p>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">
                    <FaCheck className="h-3 w-3" />
                  </div>
                  Maximize ROI
                </h3>
                <p className="text-sm text-muted-foreground">By eliminating inefficiencies and unlocking intelligent workflows</p>
              </div>
            </div>
            
            <p className="mb-4 text-muted-foreground">
              Whether you're a CIO driving enterprise-wide transformation or an operations leader focused on agility, we don't experiment with your business—we implement what's proven to work, faster.
            </p>
            <p className="mb-4 text-muted-foreground">
              We believe companies that embrace AI will outpace those that don't—and our job is to make sure you're ready.
            </p>
            <p className="mb-4 text-muted-foreground">
              Let's cut costs, boost scalability, and unlock the next phase of your automation journey—together.
            </p>
            
            <div className="flex items-center gap-4 mt-8 bg-muted/50 p-4 rounded-lg border border-border/50">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-bold">
                80+
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
              <p className="text-muted-foreground">We don't settle. From strategy to execution, we aim to deliver work we're proud of—every time.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl border border-border/50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FaLightbulb className="text-primary h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">We stay curious and forward-thinking, always looking for smarter ways to solve real problems.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl border border-border/50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FaHandshake className="text-primary h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">We believe in the power of teamwork—both within our company and with our clients. Together, we create solutions that make an impact.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl border border-border/50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FaUsers className="text-primary h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Client Focus</h3>
              <p className="text-muted-foreground">We listen closely, build thoughtfully, and stay focused on what matters most: our clients' success.</p>
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
                  <span className="text-muted-foreground">AI-powered data extraction & document classification from various document types</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 text-primary">
                    <FaCheck className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">Robotic Process Automation (RPA) with Power Automate, Automation Anywhere, UiPath, and Blue Prism</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 text-primary">
                    <FaCheck className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">Microsoft Power Platform for data analysis, process automation, and custom app development</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 text-primary">
                    <FaCheck className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">Custom automation solutions and seamless API integrations</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 text-primary">
                    <FaCheck className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">Cloud services with Azure, AWS, and Google Cloud for migration, security, and industry solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 text-primary">
                    <FaCheck className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">Managed services: implementation, training, support, upgrades, and performance monitoring</span>
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
              <h3 className="text-xl font-semibold mb-3">Insurance Data Extraction (2020)</h3>
              <p className="text-muted-foreground mb-4">
                For a leading insurance broker, the GlyphX Extraction Platform was deployed to automatically extract data from auto and health insurance policies—processing thousands of documents daily with speed, accuracy, and scale.
              </p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-sm uppercase tracking-wider text-muted-foreground">Challenge:</h4>
                <p className="text-sm text-muted-foreground">
                  Extracting data from a wide variety of policy formats across multiple providers
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-sm uppercase tracking-wider text-muted-foreground">Solution:</h4>
                <p className="text-sm text-muted-foreground">
                  A fully automated, auto-scalable AI system capable of processing 1 to 25,000 policies per day—24/7, error-free, and without manual checks
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <FaCheck className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Zero manual checks</p>
                    <p className="text-xs text-muted-foreground">required</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <FaCheck className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">High volumes</p>
                    <p className="text-xs text-muted-foreground">processed within days</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants} 
              className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl border border-border/50 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">VAT Invoice Automation (2024)</h3>
              <p className="text-muted-foreground mb-4">
                For a multinational retailer, we implemented a Power Automate solution to streamline VAT invoice request handling end-to-end.
              </p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-sm uppercase tracking-wider text-muted-foreground">Challenge:</h4>
                <p className="text-sm text-muted-foreground">
                  Manual email-based requests, slow invoice generation, and compliance risks due to inconsistent processing during peak periods.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-sm uppercase tracking-wider text-muted-foreground">Solution:</h4>
                <p className="text-sm text-muted-foreground">
                  The Power Automate workflow captured, validated, generated, and delivered VAT invoices with full ERP integration and audit tracking.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <FaCheck className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">90% reduction</p>
                    <p className="text-xs text-muted-foreground">in manual effort</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <FaCheck className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{"<30 min turnaround"}</p>
                    <p className="text-xs text-muted-foreground">from request to delivery</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-2 mt-3">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <FaCheck className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">100% compliance</p>
                    <p className="text-xs text-muted-foreground">with regional standards</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants} 
              className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl border border-border/50 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Mortgage Post-Closing Automation (2021)</h3>
              <p className="text-muted-foreground mb-4">
                For a major mortgage lender, we streamlined the post-closing process through comprehensive automation.
              </p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-sm uppercase tracking-wider text-muted-foreground">Challenge:</h4>
                <p className="text-sm text-muted-foreground">
                  Managing complex post-closing workflows including document review, compliance validation, and tracking trailing documents across 100-800 page loan files.
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
              <h3 className="text-xl font-semibold mb-3">OPEX Tool Enhancement with Power Platform (2025)</h3>
              <p className="text-muted-foreground mb-4">
                For a global manufacturing firm, we modernized the financial OPEX tool using Power Apps, Power Automate, and Power BI.
              </p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-sm uppercase tracking-wider text-muted-foreground">Challenge:</h4>
                <p className="text-sm text-muted-foreground">
                  The original workflow relied on disconnected projects, manual inputs, and lacked user-friendly interfaces or mass upload features.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-sm uppercase tracking-wider text-muted-foreground">Solution:</h4>
                <p className="text-sm text-muted-foreground">
                  We redesigned the tool for usability, added mass upload automation, and integrated real-time reporting through Power BI.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <FaCheck className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">2,080 hours saved</p>
                    <p className="text-xs text-muted-foreground">annually via automation</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <FaCheck className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">$260K cost savings</p>
                    <p className="text-xs text-muted-foreground">from reduced manual work</p>
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
