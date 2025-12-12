import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, fadeInUp, staggerChildren } from "@/lib/motion";

const logoMobile = "/assets/logo (2).png";
const logoDesktop = "/assets/logo-web.png";
const logoCorrected = "/assets/logo-corregido.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeroInView, setIsHeroInView] = useState(true);
  const [logoPhase, setLogoPhase] = useState<"initial" | "animating" | "final">("initial");
  const getIsDesktop = () =>
    typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches;
  const [isDesktop, setIsDesktop] = useState(getIsDesktop);
  const [hasSwappedToCorrected, setHasSwappedToCorrected] = useState(false);
  const [isCorrectedReady, setIsCorrectedReady] = useState(false);
  const pendingScrollTimeout = useRef<number | null>(null);
  const logoFinishTimeout = useRef<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const preloadImage = new Image();
    const handleLoad = () => setIsCorrectedReady(true);
    const handleError = () => {
      console.warn('Failed to preload corrected logo');
      setIsCorrectedReady(true);
    };

    preloadImage.addEventListener("load", handleLoad);
    preloadImage.addEventListener("error", handleError);
    preloadImage.src = logoCorrected;

    return () => {
      preloadImage.removeEventListener("load", handleLoad);
      preloadImage.removeEventListener("error", handleError);
    };
  }, []);

  useEffect(() => {
    const heroElement = document.getElementById("inicio");
    if (!heroElement) {
      setIsHeroInView(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(heroElement);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateIsDesktop = () => setIsDesktop(mediaQuery.matches);

    updateIsDesktop();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateIsDesktop);
      return () => mediaQuery.removeEventListener("change", updateIsDesktop);
    }

    mediaQuery.addListener(updateIsDesktop);
    return () => mediaQuery.removeListener(updateIsDesktop);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (hasSwappedToCorrected) {
      setLogoPhase("final");
      return;
    }

    setLogoPhase("initial");

    if (logoFinishTimeout.current) {
      window.clearTimeout(logoFinishTimeout.current);
      logoFinishTimeout.current = null;
    }

    const startTimer = window.setTimeout(() => {
      setLogoPhase("animating");
      logoFinishTimeout.current = window.setTimeout(() => {
        setLogoPhase("final");
      }, isDesktop ? 1800 : 1500);
    }, isDesktop ? 60 : 10000);

    return () => {
      window.clearTimeout(startTimer);
      if (logoFinishTimeout.current) {
        window.clearTimeout(logoFinishTimeout.current);
        logoFinishTimeout.current = null;
      }
    };
  }, [isDesktop, hasSwappedToCorrected]);

  useEffect(() => {
    if (!isDesktop && logoPhase === "final" && isCorrectedReady) {
      setHasSwappedToCorrected(true);
    }
  }, [isDesktop, logoPhase, isCorrectedReady]);

  const navigation = [
    { name: "¿Quiénes Somos?", href: "#quienes-somos" },
    { name: "Conoce el Proyecto", href: "#conoce-el-proyecto" },
    // { name: "Nuestras Historias", href: "#historias" },
    { name: "Nuestro Equipo", href: "#equipo" },
    { name: "Exposición Fotográfica", href: "#exposicion" },
  ];

  useEffect(() => {
    return () => {
      if (pendingScrollTimeout.current) {
        window.clearTimeout(pendingScrollTimeout.current);
        pendingScrollTimeout.current = null;
      }
    };
  }, []);

  const updateUrlHash = (hash: string) => {
    const { pathname, search } = window.location;
    const newHash = hash ? hash : "";
    window.history.replaceState(null, "", `${pathname}${search}${newHash}`);
  };

  const scrollToHash = (hash: string): boolean => {
    const elementId = hash.replace("#", "");
    if (!elementId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      updateUrlHash("");
      return true;
    }

    const target = document.getElementById(elementId);
    if (!target) {
      return false;
    }

    const headerOffset = 88;
    const rect = target.getBoundingClientRect();
    const offsetTop = rect.top + window.scrollY - headerOffset;

    window.scrollTo({ top: Math.max(offsetTop, 0), behavior: "smooth" });
    updateUrlHash(hash);
    return true;
  };

  const scheduleScrollAttempt = (hash: string, delay = 150, attempt = 1) => {
    if (pendingScrollTimeout.current) {
      window.clearTimeout(pendingScrollTimeout.current);
    }

    pendingScrollTimeout.current = window.setTimeout(() => {
      const success = scrollToHash(hash);
      if (!success && attempt < 5) {
        scheduleScrollAttempt(hash, 150, attempt + 1);
        return;
      }

      pendingScrollTimeout.current = null;
    }, delay);
  };

  const handleNavigation = (hash: string) => {
    setIsMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      scheduleScrollAttempt(hash, 250);
      return;
    }

    // Execute scroll immediately
    setTimeout(() => {
      const didScroll = scrollToHash(hash);
      if (!didScroll) {
        scheduleScrollAttempt(hash, 100);
      }
    }, 50);
  };

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, hash: string) => {
    event.preventDefault();
    event.stopPropagation();
    handleNavigation(hash);
  };

  const navItemMotion: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const showCorrectedLogo = !isDesktop && hasSwappedToCorrected;
  const animatedLogoWidth = isDesktop ? "min(24vw, 380px)" : "min(70vw, 300px)";
  const correctedLogoWidth = isDesktop ? "min(24vw, 380px)" : "min(58vw, 260px)";
  const clipInitial = isDesktop ? "inset(0% 100% 0% 0%)" : "inset(0% 0% 0% 0%)";
  const clipTarget = (() => {
    if (isDesktop) {
      return logoPhase === "initial" ? "inset(0% 100% 0% 0%)" : "inset(0% 0% 0% 0%)";
    }
    if (logoPhase === "animating") {
      return "inset(0% 42% 0% 0%)";
    }
    return "inset(0% 0% 0% 0%)";
  })();
  const clipTransition = {
    duration: isDesktop ? 1.8 : 1.2,
    ease: [0.42, 0, 0.58, 1],
  } as const;

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
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm ${isHeroInView
          ? "bg-gradient-to-b from-white/90 via-white/75 to-white/60"
          : "bg-background/95 border-b border-border"
        }`}
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
              className="flex items-center focus:outline-none md:-ml-2 lg:-ml-4"
              aria-label="Ir al inicio"
              whileTap={{ scale: 0.96 }}
              whileHover={{ rotate: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {showCorrectedLogo ? (
                  <motion.img
                    key="logo-corrected"
                    src={logoCorrected}
                    alt="Nuestro Barrio, Nuestra Historia"
                    className="w-full h-auto"
                    style={{ width: correctedLogoWidth }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                ) : (
                  <motion.div
                    key={`logo-animated-${isDesktop ? "desktop" : "mobile"}`}
                    className="relative overflow-hidden"
                    style={{ width: animatedLogoWidth }}
                    initial={{ clipPath: clipInitial }}
                    animate={{ clipPath: clipTarget }}
                    transition={clipTransition}
                  >
                    <picture>
                      <source srcSet={logoDesktop} media="(min-width: 1024px)" />
                      <img
                        src={logoMobile}
                        alt="Nuestro Barrio, Nuestra Historia"
                        className="w-full h-auto"
                      />
                    </picture>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            variants={staggerChildren(0.08, 0.04)}
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
                      <a href={item.href} onClick={(event) => handleAnchorClick(event, item.href)}>
                        {item.name}
                      </a>
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
                  onClick={(event) => handleAnchorClick(event, item.href)}
                >
                  {item.name}
                </motion.a>
              );
            })}

          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Alternar menú"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" strokeWidth={2.2} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={2.2} />
            )}
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
                      <a href={item.href} onClick={(event) => handleAnchorClick(event, item.href)}>
                        {item.name}
                      </a>
                    </Button>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-semibold"
                      onClick={(event) => handleAnchorClick(event, item.href)}
                    >
                      {item.name}
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
