import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
const logo = "/assets/logo.png";
import { fadeIn, fadeInUp, staggerChildren } from "@/lib/motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { name: "¿Quiénes Somos?", href: "#quienes-somos" },
    { name: "Conoce el Proyecto", href: "#conoce-el-proyecto" },
    { name: "Nuestras Historias", href: "#historias" },
    { name: "Nuestro Equipo", href: "#equipo" },
    { name: "Exposición Fotográfica", href: "#exposicion" },
  ];

  const navItemMotion: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);

    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    navigate("/");
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center justify-between h-20"
          variants={fadeIn()}
          initial="hidden"
          animate="visible"
        >
          {/* Logo */}
          <motion.div className="flex items-center gap-3" variants={fadeInUp(0.05)}>
            <motion.button
              type="button"
              onClick={handleLogoClick}
              className="flex items-center focus:outline-none"
              aria-label="Ir al inicio"
              whileTap={{ scale: 0.96 }}
            >
              <motion.img
                src={logo}
                alt="Nuestro Barrio, Nuestra Historia"
                className="h-36 w-auto"
                whileHover={{ rotate: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              />
            </motion.button>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            variants={staggerChildren(0.1, 0.2)}
            initial="hidden"
            animate="visible"
          >
            {navigation.map((item) => {
              const isButton = item.name === "Exposición Fotográfica";

              if (isButton) {
                return (
                  <motion.div
                    key={item.name}
                    variants={navItemMotion}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      asChild
                      className="bg-primary text-primary-foreground font-semibold px-5 py-2 rounded-full shadow-md hover:bg-primary/90 transition-colors"
                    >
                      <a href={item.href}>{item.name}</a>
                    </Button>
                  </motion.div>
                );
              }

              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-semibold"
                  variants={navItemMotion}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {item.name}
                </motion.a>
              );
            })}
            
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Alternar menú"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </motion.div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden py-4 space-y-3 border-t border-border"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut", delay: 0.05 * index }}
                >
                  {item.name === "Exposición Fotográfica" ? (
                    <Button
                      asChild
                      className="w-full bg-primary text-primary-foreground font-semibold rounded-full shadow-md hover:bg-primary/90 transition-colors"
                    >
                      <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                        {item.name}
                      </a>
                    </Button>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-semibold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </motion.div>
              ))}
              <motion.div
                className="px-4 pt-2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut", delay: 0.2 }}
              >
                <Button variant="hero" size="lg" className="w-full">
                  Únete
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
