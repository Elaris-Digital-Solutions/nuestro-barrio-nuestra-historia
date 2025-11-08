import { Instagram, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerChildren, viewportSettings } from "@/lib/motion";

const Footer = () => {
  const navigation = [
    { name: "¿Quiénes Somos?", href: "#quienes-somos" },
    { name: "Conoce el Proyecto", href: "#conoce-el-proyecto" },
    { name: "Nuestras Historias", href: "#historias" },
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
        <motion.div className="grid md:grid-cols-3 gap-8 mb-8" variants={staggerChildren(0.18)}>
          {/* Logo and Description */}
          <motion.div className="space-y-4" variants={fadeInUp(0.1)}>
            <motion.img
              src="/assets/CICLOMIN.png"
              alt="Nuestro Barrio, Nuestra Historia"
              className="h-20 w-auto md:h-24"
              whileHover={{ rotate: 2 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            />
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
                <span>LinkedIn</span>
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
          <p>&copy; {new Date().getFullYear()} Nuestro Barrio, Nuestra Historia. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
