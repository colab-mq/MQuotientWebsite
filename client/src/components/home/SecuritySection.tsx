import { motion } from "framer-motion";
import { Shield, Lock, Users, Activity, UserCheck, Trash2 } from "lucide-react";

const SecuritySection = () => {
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

  // Security measures with icons
  const securityMeasures = [
    {
      title: "Certified Infrastructure",
      description: "Our Cloud Infrastructure is ISO 27001 and SOC 2 compliant cloud providers and implement Virtual Private Clouds (VPC) with secured access protocols.",
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: "Data Protection by Design",
      description: "All data at rest is encrypted using AES-256 standards; all data in transit is secured via TLS and HTTPS with mutual authentication.",
      icon: <Lock className="h-8 w-8" />
    },
    {
      title: "Robust Access Control",
      description: "Role-based access controls, multi-factor authentication (MFA), and least-privilege policies are strictly enforced across systems.",
      icon: <Users className="h-8 w-8" />
    },
    {
      title: "Vigilant Monitoring and Incident Response",
      description: "Comprehensive audit logs, proactive threat detection, and a tested incident response framework ensure rapid action if issues arise.",
      icon: <Activity className="h-8 w-8" />
    },
    {
      title: "Employee Readiness",
      description: "All employees undergo continuous training in information security best practices, data privacy, and compliance standards.",
      icon: <UserCheck className="h-8 w-8" />
    },
    {
      title: "Secure Data Disposal",
      description: "We follow strict protocols for secure data deletion, ensuring no residual data risks post-engagement.",
      icon: <Trash2 className="h-8 w-8" />
    }
  ];

  // Insurance coverage
  const insuranceCoverage = [
    "Public Liability Insurance",
    "Cyber Risk Insurance — protecting against data breaches, cyberattacks, and unauthorized access incidents.",
    "Professional Indemnity Insurance - covering worldwide service delivery risks"
  ];

  return (
    <section id="security" className="py-20 bg-muted/30 relative overflow-hidden">
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
            Your Security, <span className="gradient-text">Our Commitment</span>
          </motion.h2>
          <div className="section-divider mx-auto"></div>
          <motion.p className="section-subtitle max-w-3xl mx-auto" variants={itemVariants}>
            At mquotient, your trust is our most valuable asset.
            That's why we invest deeply in information security, compliance, and risk management — ensuring your business and data are protected at every stage of our partnership.
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h3 className="text-2xl font-semibold text-center mb-8" variants={itemVariants}>
            Our Security Measures
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {securityMeasures.map((measure, index) => (
              <motion.div 
                key={index}
                className="bg-background rounded-xl shadow-sm border border-border p-6 hover:border-primary/20 hover:shadow-md transition-all duration-300"
                variants={itemVariants}
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {measure.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{measure.title}</h4>
                <p className="text-muted-foreground">{measure.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="bg-background rounded-xl border border-border p-8" variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Shield className="h-6 w-6 mr-3 text-primary" />
              Our Insurance Coverage
            </h3>
            <ul className="space-y-4">
              {insuranceCoverage.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <Shield className="h-3 w-3 text-primary" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="max-w-3xl mx-auto border-t border-border pt-8" variants={itemVariants}>
            <p className="text-lg font-medium mb-2">
              With mquotient, your transformation is built on a foundation of trust, compliance, and resilience.
            </p>
            <p className="text-lg font-semibold gradient-text">
              Your systems are secure with us.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySection;