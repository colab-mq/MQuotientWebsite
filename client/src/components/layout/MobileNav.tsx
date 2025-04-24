import { Link } from "wouter";

interface MobileNavProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const MobileNav = ({ isOpen, closeMenu }: MobileNavProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link href="/" onClick={closeMenu} className="nav-link-mobile">
          Home
        </Link>
        <Link href="/about" onClick={closeMenu} className="nav-link-mobile">
          About
        </Link>
        <Link href="/services" onClick={closeMenu} className="nav-link-mobile">
          Services
        </Link>
        <Link 
          href="/contact" 
          onClick={closeMenu} 
          className="block px-3 py-2 rounded-md text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition duration-300 mt-2"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
