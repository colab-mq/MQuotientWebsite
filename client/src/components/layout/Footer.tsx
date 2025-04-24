import { Link } from "wouter";
import { 
  FaLinkedinIn, 
  FaTwitter, 
  FaFacebookF, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaGlobe
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MQuotient</h3>
            <p className="text-muted-foreground mb-4">
              Empowering digital transformation through hyperautomation and innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary-foreground transition duration-300">
                <FaLinkedinIn />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary-foreground transition duration-300">
                <FaTwitter />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary-foreground transition duration-300">
                <FaFacebookF />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary-foreground transition duration-300">
                  RPA Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary-foreground transition duration-300">
                  Power Platform
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary-foreground transition duration-300">
                  Process Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary-foreground transition duration-300">
                  Custom Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary-foreground transition duration-300">
                  Test Automation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary-foreground transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary-foreground transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary-foreground transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary-foreground transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3" />
                <span>53/16, Richmond Road, Bangalore - 560025, India</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3" />
                <span>rishi@mquotient.net</span>
              </li>
              <li className="flex items-start">
                <FaGlobe className="mt-1 mr-3" />
                <span>www.mquotient.net</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} MQuotient Business Services. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary-foreground transition duration-300 mr-4">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary-foreground transition duration-300">
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
