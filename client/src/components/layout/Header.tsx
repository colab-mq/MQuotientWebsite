import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import MobileNav from "./MobileNav";
import logoPath from "../../assets/mquotient-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src={logoPath} alt="mquotient Logo" className="h-10" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-base font-medium transition-colors hover:text-primary ${location === '/' ? 'text-primary' : 'text-foreground'}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`text-base font-medium transition-colors hover:text-primary ${location === '/about' ? 'text-primary' : 'text-foreground'}`}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className={`text-base font-medium transition-colors hover:text-primary ${location === '/services' ? 'text-primary' : 'text-foreground'}`}
            >
              Services
            </Link>
            <Link 
              href="/careers" 
              className={`text-base font-medium transition-colors hover:text-primary ${location === '/careers' ? 'text-primary' : 'text-foreground'}`}
            >
              Careers
            </Link>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity">
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNav isOpen={isOpen} closeMenu={closeMenu} />
      </div>
    </header>
  );
};

export default Header;
