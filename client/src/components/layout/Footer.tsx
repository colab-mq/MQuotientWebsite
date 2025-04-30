import { Link } from "wouter";
import { 
  FaLinkedinIn,
  FaMapMarkerAlt, 
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa";
import logoPath from "../../assets/mquotient-logo-new.png";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white border-t border-primary-dark/50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="mb-6">
              <img src={logoPath} alt="m·quotient Logo" className="h-10 mb-4 filter brightness-0 invert" />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Empowering digital transformation through hyperautomation and innovative technology solutions.
            </p>

          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative text-white">
              <span className="relative z-10">Services</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-secondary/50 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-white/90 hover:text-secondary transition-colors duration-200 inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                  AI-Powered Data Entry Workforce
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/90 hover:text-secondary transition-colors duration-200 inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                  RPA Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/90 hover:text-secondary transition-colors duration-200 inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                  Microsoft Power Platform
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/90 hover:text-secondary transition-colors duration-200 inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/90 hover:text-secondary transition-colors duration-200 inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                  AI & Intelligent Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/90 hover:text-secondary transition-colors duration-200 inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                  Managed Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative text-white">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-secondary/50 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/90 hover:text-secondary transition-colors duration-200 inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/90 hover:text-secondary transition-colors duration-200 inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/90 hover:text-secondary transition-colors duration-200 inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/90 hover:text-secondary transition-colors duration-200 inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative text-white">
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-secondary/50 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-white/10 text-secondary h-8 w-8 rounded-full flex items-center justify-center shadow-sm border border-white/10 mr-3 flex-shrink-0 mt-0.5">
                  <FaMapMarkerAlt className="h-3 w-3" />
                </div>
                <span className="text-white/80">C-61/3, Okhla Industrial Area, Phase II, New Delhi 110020, India</span>
              </li>
              <li className="flex items-start">
                <div className="bg-white/10 text-secondary h-8 w-8 rounded-full flex items-center justify-center shadow-sm border border-white/10 mr-3 flex-shrink-0 mt-0.5">
                  <FaEnvelope className="h-3 w-3" />
                </div>
                <span className="text-white/80">hi@mquotient.net</span>
              </li>
              <li className="flex items-center">
                <span className="text-white/80 mr-4">Connect</span>
                <div className="flex space-x-3">
                  <a 
                    href="https://www.linkedin.com/company/mquotient/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-white/20 text-white hover:bg-secondary/90 hover:text-primary-dark transition duration-200 h-8 w-8 rounded-full flex items-center justify-center shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="h-4 w-4" />
                  </a>
                  <a 
                    href="https://wa.me/919987192566" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-white/20 text-white hover:bg-secondary/90 hover:text-primary-dark transition duration-200 h-8 w-8 rounded-full flex items-center justify-center shadow-sm"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="h-4 w-4" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">&copy; {new Date().getFullYear()} m·quotient. All rights reserved.</p>
            {/* Footer links removed as requested */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
