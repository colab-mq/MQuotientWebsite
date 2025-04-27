import { Link } from "wouter";
import { 
  FaLinkedinIn,
  FaMapMarkerAlt, 
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa";
import logoPath from "../../assets/mquotient-logo.png"; // TODO: Update to m·quotient logo

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="mb-6">
              <img src={logoPath} alt="m·quotient Logo" className="h-10 mb-4" />
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering digital transformation through hyperautomation and innovative technology solutions.
            </p>

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
                  AI-Powered Data Entry Workforce
                </Link>
              </li>
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
                <span className="text-foreground/80">C-61/3, Okhla Industrial Area, Phase II, New Delhi 110020, India</span>
              </li>
              <li className="flex items-start">
                <div className="bg-background text-primary h-8 w-8 rounded-full flex items-center justify-center shadow-sm border border-border mr-3 flex-shrink-0 mt-0.5">
                  <FaEnvelope className="h-3 w-3" />
                </div>
                <span className="text-foreground/80">hi@m·quotient.net</span>
              </li>
              <li className="flex items-center">
                <span className="text-foreground/80 mr-4">Connect</span>
                <div className="flex space-x-3">
                  <a 
                    href="https://www.linkedin.com/company/m·quotient/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-[#0077b5] text-white hover:bg-[#0077b5]/90 transition duration-200 h-8 w-8 rounded-full flex items-center justify-center shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="h-4 w-4" />
                  </a>
                  <a 
                    href="https://wa.me/919987192566" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-[#25D366] text-white hover:bg-[#25D366]/90 transition duration-200 h-8 w-8 rounded-full flex items-center justify-center shadow-sm"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="h-4 w-4" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/70 text-sm">&copy; {new Date().getFullYear()} m·quotient. All rights reserved.</p>
            {/* Footer links removed as requested */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
