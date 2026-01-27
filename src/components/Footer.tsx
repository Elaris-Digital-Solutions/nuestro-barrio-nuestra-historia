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
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 max-w-5xl mx-auto mb-16"
          variants={staggerChildren(0.08)}
        >
          {/* Identity Section - Spans 2 columns (50%) */}
          <motion.div className="md:col-span-2 space-y-6" variants={fadeInUp(0.1)}>
            <div className="w-full max-w-[280px]">
              <img
                src="/assets/CICLOMIN.png"
                alt="Ciclomin"
                className="w-full h-auto object-contain"
              />
            </div>
            <motion.div
              className="text-primary-foreground/90 text-sm leading-relaxed max-w-md"
              variants={fadeInUp(0.2)}
            >
              <p>Rescatando, preservando y compartiendo las historias que hacen única a nuestra comunidad, con el financiamiento del Fondo VLIR-UOS de Bélgica mediante los proyectos SI (PE2023SIN391): <em>Sustainable Mining Research Network (CicloMin)</em> y SI (PE2025SIN467A101): <em>Improving bioremediation capacities in high Andes</em>.</p>
            </motion.div>
          </motion.div>

          {/* Navigation - Spans 1 column (25%) */}
          <motion.div variants={fadeInUp(0.15)} className="md:pl-8">
            <h3 className="font-heading font-semibold text-lg mb-6 text-primary-foreground">Navegación</h3>
            <motion.ul className="space-y-3" variants={staggerChildren(0.08)}>
              {navigation.map((item) => (
                <motion.li key={item.name} variants={fadeInUp(0.1)}>
                  <motion.a
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm inline-block"
                    whileHover={{ x: 4 }}
                  >
                    {item.name}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact - Spans 1 column (25%) */}
          <motion.div variants={fadeInUp(0.2)}>
            <h3 className="font-heading font-semibold text-lg mb-6 text-primary-foreground">Contacto</h3>
            <div className="space-y-4 text-sm text-primary-foreground/80">
              <a
                href="mailto:daniela.bussalleu@upch.pe"
                className="flex items-center gap-3 hover:text-primary-foreground transition-colors group"
              >
                <div className="p-2 rounded-full bg-primary-foreground/10 group-hover:bg-primary-foreground/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>daniela.bussalleu@upch.pe</span>
              </a>
              <a
                href="https://www.linkedin.com/in/daniela-bussalleu"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-primary-foreground transition-colors group"
              >
                <div className="p-2 rounded-full bg-primary-foreground/10 group-hover:bg-primary-foreground/20 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span>Daniela Bussalleu</span>
              </a>
              <a
                href="https://www.instagram.com/daniela.bussalleu?igsh=cXptdDJ5OGZoZmhs"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-primary-foreground transition-colors group"
              >
                <div className="p-2 rounded-full bg-primary-foreground/10 group-hover:bg-primary-foreground/20 transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
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
