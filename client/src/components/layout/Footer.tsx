import { Link } from "wouter";
import { 
  FaLinkedinIn, 
  FaTwitter, 
  FaFacebookF, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaGlobe
} from "react-icons/fa";
import logoPath from "../../assets/mquotient-logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="mb-6">
              <img src={logoPath} alt="MQuotient Logo" className="h-10 mb-4" />
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering digital transformation through hyperautomation and innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-background text-foreground hover:text-primary transition duration-200 h-10 w-10 rounded-full flex items-center justify-center shadow-sm border border-border"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-background text-foreground hover:text-primary transition duration-200 h-10 w-10 rounded-full flex items-center justify-center shadow-sm border border-border"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-background text-foreground hover:text-primary transition duration-200 h-10 w-10 rounded-full flex items-center justify-center shadow-sm border border-border"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              <span className="relative z-10">Services</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary/20 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-foreground hover:text-primary transition-colors duration-200 inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></span>
                  RPA Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground hover:text-primary transition-colors duration-200 inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></span>
                  Power Platform
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground hover:text-primary transition-colors duration-200 inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></span>
                  Process Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground hover:text-primary transition-colors duration-200 inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></span>
                  Custom Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground hover:text-primary transition-colors duration-200 inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></span>
                  Test Automation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary/20 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-foreground hover:text-primary transition-colors duration-200 inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground hover:text-primary transition-colors duration-200 inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground hover:text-primary transition-colors duration-200 inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground hover:text-primary transition-colors duration-200 inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary/20 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-background text-primary h-8 w-8 rounded-full flex items-center justify-center shadow-sm border border-border mr-3 flex-shrink-0 mt-0.5">
                  <FaMapMarkerAlt className="h-3 w-3" />
                </div>
                <span className="text-foreground/80">53/16, Richmond Road, Bangalore - 560025, India</span>
              </li>
              <li className="flex items-start">
                <div className="bg-background text-primary h-8 w-8 rounded-full flex items-center justify-center shadow-sm border border-border mr-3 flex-shrink-0 mt-0.5">
                  <FaEnvelope className="h-3 w-3" />
                </div>
                <span className="text-foreground/80">rishi@mquotient.net</span>
              </li>
              <li className="flex items-start">
                <div className="bg-background text-primary h-8 w-8 rounded-full flex items-center justify-center shadow-sm border border-border mr-3 flex-shrink-0 mt-0.5">
                  <FaGlobe className="h-3 w-3" />
                </div>
                <span className="text-foreground/80">www.mquotient.net</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/70 text-sm">&copy; {new Date().getFullYear()} MQuotient Business Services. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-6">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
