import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50); // Cambia el estado cuando el scroll pasa 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        layout
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out',
          isScrolled 
            ? 'bg-primary/95 backdrop-blur-sm shadow-lg' 
            : 'bg-transparent'
        )}
        initial={false}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/">
              <motion.img
                src="/assets/kar-ma-logo.png"
                alt="Kar & Ma"
                className={cn(
                  'transition-all duration-700 filter brightness-0 invert',
                  isScrolled ? 'w-10 h-10 md:w-12 md:h-12' : 'w-12 h-12 md:w-16 md:h-16'
                )}
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="/segmentos">Segmentos</NavLink>
              <NavLink href="/nosotros">Nosotros</NavLink>
              <NavLink href="/clientes">Clientes</NavLink>
              <NavLink href="/cotizacion">Contacto</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-16 md:hidden left-0 right-0 z-40 bg-primary/95 backdrop-blur-sm overflow-hidden"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            <NavLink href="/segmentos" onClick={() => setIsMobileMenuOpen(false)}>Segmentos</NavLink>
            <NavLink href="/nosotros" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</NavLink>
            <NavLink href="/clientes" onClick={() => setIsMobileMenuOpen(false)}>Clientes</NavLink>
            <NavLink href="/cotizacion" onClick={() => setIsMobileMenuOpen(false)}>Contacto</NavLink>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const NavLink: React.FC<{ 
  href: string; 
  children: React.ReactNode; 
  onClick?: () => void;
}> = ({
  href,
  children,
  onClick,
}) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      to={href}
      onClick={onClick}
      className="text-white hover:text-white/80 font-medium text-lg transition-colors block py-2"
    >
      {children}
    </Link>
  </motion.div>
);

export default Navbar;
