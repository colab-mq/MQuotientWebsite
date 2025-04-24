import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

interface MobileNavProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const MobileNav = ({ isOpen, closeMenu }: MobileNavProps) => {
  const [location] = useLocation();

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.3,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="md:hidden border-t border-border"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
        >
          <div className="px-2 py-4 space-y-3 sm:px-3">
            <motion.div variants={itemVariants}>
              <Link 
                href="/" 
                onClick={closeMenu} 
                className={`block py-2 px-3 rounded-md text-base font-medium transition-colors ${location === '/' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
              >
                Home
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Link 
                href="/about" 
                onClick={closeMenu} 
                className={`block py-2 px-3 rounded-md text-base font-medium transition-colors ${location === '/about' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
              >
                About
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Link 
                href="/services" 
                onClick={closeMenu} 
                className={`block py-2 px-3 rounded-md text-base font-medium transition-colors ${location === '/services' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
              >
                Services
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Link 
                href="/contact" 
                onClick={closeMenu} 
                className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity mt-2 text-center"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
