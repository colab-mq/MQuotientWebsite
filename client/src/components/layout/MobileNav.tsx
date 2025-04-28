import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

interface MobileNavProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const MobileNav = ({ isOpen, closeMenu }: MobileNavProps) => {
  const [location] = useLocation();

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3, delay: 0.1 }
    }
  };

  const menuVariants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: { 
      x: '100%',
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark overlay */}
          <motion.div 
            className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-40 lg:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={backdropVariants}
            onClick={closeMenu}
          />
          
          {/* Mobile menu slide in */}
          <motion.div 
            className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-background z-50 lg:hidden shadow-xl overflow-auto flex flex-col"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <div className="p-6 flex flex-col h-full">
              <div className="space-y-6 flex-1 mt-10">
                <motion.div variants={itemVariants}>
                  <Link 
                    href="/" 
                    onClick={closeMenu} 
                    className={`block py-3 text-lg font-medium transition-colors relative ${
                      location === '/' ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    Home
                    {location === '/' && (
                      <span className="absolute left-0 w-2 h-full bg-primary top-0"></span>
                    )}
                  </Link>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Link 
                    href="/about" 
                    onClick={closeMenu} 
                    className={`block py-3 text-lg font-medium transition-colors relative ${
                      location === '/about' ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    About
                    {location === '/about' && (
                      <span className="absolute left-0 w-2 h-full bg-primary top-0"></span>
                    )}
                  </Link>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Link 
                    href="/services" 
                    onClick={closeMenu} 
                    className={`block py-3 text-lg font-medium transition-colors relative ${
                      location === '/services' ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    Services
                    {location === '/services' && (
                      <span className="absolute left-0 w-2 h-full bg-primary top-0"></span>
                    )}
                  </Link>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Link 
                    href="/case-studies" 
                    onClick={closeMenu} 
                    className={`block py-3 text-lg font-medium transition-colors relative ${
                      location === '/case-studies' ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    Case Studies
                    {location === '/case-studies' && (
                      <span className="absolute left-0 w-2 h-full bg-primary top-0"></span>
                    )}
                  </Link>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Link 
                    href="/careers" 
                    onClick={closeMenu} 
                    className={`block py-3 text-lg font-medium transition-colors relative ${
                      location === '/careers' ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    Careers
                    {location === '/careers' && (
                      <span className="absolute left-0 w-2 h-full bg-primary top-0"></span>
                    )}
                  </Link>
                </motion.div>
              </div>
              
              <motion.div variants={itemVariants} className="mt-8 mb-6">
                <Link 
                  href="/contact" 
                  onClick={closeMenu} 
                  className="block w-full py-4 px-6 rounded-full text-base font-medium bg-primary text-white hover:bg-primary/90 transition-all duration-300 text-center"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
