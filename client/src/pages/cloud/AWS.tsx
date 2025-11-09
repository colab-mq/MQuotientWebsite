import { Link } from "wouter";
import { useEffect } from "react";
import { FaCloud, FaArrowLeft } from "react-icons/fa";
import awsLogo from "/attached_assets/amazon-web-services-1-logo-png-transparent.png";

const AWS = () => {
  useEffect(() => {
    document.title = "AWS Cloud Solutions | mquotient";
  }, []);

  return (
    <div className="pt-16 pb-16">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6" data-testid="link-back-to-services">
            <FaArrowLeft /> Back to Services
          </Link>
          <div className="flex items-center gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg">
              <img src={awsLogo} alt="Amazon Web Services" className="h-16 object-contain" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold" data-testid="text-page-title">Amazon Web Services (AWS)</h1>
          </div>
          <p className="text-xl max-w-3xl">
            Enterprise cloud solutions powered by AWS
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-muted/30 border border-border rounded-lg p-8 text-center">
            <FaCloud className="text-6xl text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4" data-testid="text-coming-soon">Coming Soon</h2>
            <p className="text-muted-foreground mb-6">
              Detailed information about our AWS cloud solutions and services is currently being prepared. 
              Check back soon for comprehensive details about how mquotient can help you leverage AWS for your enterprise.
            </p>
            <Link href="/contact" className="btn-primary" data-testid="button-contact">
              Contact Us to Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AWS;
