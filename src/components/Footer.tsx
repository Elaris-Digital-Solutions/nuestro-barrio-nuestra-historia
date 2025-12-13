import { useState, useEffect, useRef } from "react";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, fadeInUp, staggerChildren, viewportSettings } from "@/lib/motion";

const logos = [
  { src: "/assets/CICLOMIN.png", alt: "Ciclomin", width: "w-auto" },
  { src: "/assets/AMSAC.png", alt: "AMSAC", width: "w-auto" },
  { src: "/assets/COM_CULTURAL.png", alt: "COMCULTURAL", width: "w-auto" },
];

const ROTATION_INTERVAL = 4000;

const LogoRotator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, ROTATION_INTERVAL);

    return () => clearInterval(intervalId);
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="h-24 w-48 relative flex items-center justify-start overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={logos[currentIndex].src}
          alt={logos[currentIndex].alt}
          className={`h-full object-contain ${logos[currentIndex].width}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </div>
  );
};

const Footer = () => {
  const navigation = [
    { name: "¿Quiénes Somos?", href: "#quienes-somos" },
    { name: "Conoce el Proyecto", href: "#conoce-el-proyecto" },
    // { name: "Nuestras Historias", href: "#historias" },
    { name: "Nuestro Equipo", href: "#equipo" },
    { name: "Exposición Fotográfica", href: "#exposicion" },
  ];

  return (
    <motion.footer
      className="bg-brown text-primary-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeIn()}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div className="grid md:grid-cols-3 gap-8 mb-8" variants={staggerChildren(0.08)}>
          {/* Logo and Description */}
          <motion.div className="space-y-4" variants={fadeInUp(0.1)}>
            <LogoRotator />
            <motion.p
              className="text-primary-foreground/80 text-sm leading-relaxed"
              variants={fadeInUp(0.2)}
            >
              Rescatando, preservando y compartiendo las historias que hacen única a nuestra comunidad.
            </motion.p>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={fadeInUp(0.15)}>
            <h3 className="font-semibold text-lg mb-4">Navegación</h3>
            <motion.ul className="space-y-2" variants={staggerChildren(0.08)}>
              {navigation.map((item) => (
                <motion.li key={item.name} variants={fadeInUp(0.1)}>
                  <motion.a
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    whileHover={{ x: 4 }}
                  >
                    {item.name}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp(0.2)}>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <a
                href="mailto:daniela.bussalleu@upch.pe"
                className="flex items-center gap-3 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>daniela.bussalleu@upch.pe</span>
              </a>
              <a
                href="https://www.linkedin.com/in/daniela-bussalleu"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>Daniela Bussalleu</span>
              </a>
              <a
                href="https://www.instagram.com/daniela.bussalleu?igsh=cXptdDJ5OGZoZmhs"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@daniela.bussalleu</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <p>
            &copy; {new Date().getFullYear()} Nuestro Barrio, Nuestra Historia. Todos los derechos reservados. Desarrollado por
            {" "}
            <a
              href="https://www.instagram.com/elarisdigitalsolutions"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-1 decoration-primary-foreground/60 underline-offset-2 hover:decoration-primary-foreground hover:text-primary-foreground"
            >
              Elaris Digital Solutions
            </a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
