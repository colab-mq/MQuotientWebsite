import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import MobileNav from "./MobileNav";
import logoPath from "../../assets/mquotient-logo-new.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Add scroll listener for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 dark:bg-background/80 backdrop-blur-xl shadow-sm dark:shadow-md dark:shadow-black/10 py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src={logoPath} 
                alt="m·quotient Logo" 
                className={`transition-all duration-300 ${scrolled ? 'h-8' : 'h-10'}`} 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-all duration-200 hover:text-primary relative group
                ${location === '/' ? 'text-primary' : 'text-foreground'}`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full
                ${location === '/' ? 'w-full' : 'w-0'}`}></span>
            </Link>
            <Link 
              href="/about" 
              className={`text-sm font-medium transition-all duration-200 hover:text-primary relative group
                ${location === '/about' ? 'text-primary' : 'text-foreground'}`}
            >
              About
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full
                ${location === '/about' ? 'w-full' : 'w-0'}`}></span>
            </Link>
            <Link 
              href="/services" 
              className={`text-sm font-medium transition-all duration-200 hover:text-primary relative group
                ${location === '/services' ? 'text-primary' : 'text-foreground'}`}
            >
              Services
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full
                ${location === '/services' ? 'w-full' : 'w-0'}`}></span>
            </Link>
            <Link 
              href="/case-studies" 
              className={`text-sm font-medium transition-all duration-200 hover:text-primary relative group
                ${location === '/case-studies' ? 'text-primary' : 'text-foreground'}`}
            >
              Case Studies
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full
                ${location === '/case-studies' ? 'w-full' : 'w-0'}`}></span>
            </Link>
            <Link 
              href="/careers" 
              className={`text-sm font-medium transition-all duration-200 hover:text-primary relative group
                ${location === '/careers' ? 'text-primary' : 'text-foreground'}`}
            >
              Careers
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full
                ${location === '/careers' ? 'w-full' : 'w-0'}`}></span>
            </Link>
            <Link href="/contact">
              <Button className="rounded-full bg-primary hover:bg-primary/90 text-white text-sm transition-all duration-300 px-6">
                Contact Us
              </Button>
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile and Theme Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
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
