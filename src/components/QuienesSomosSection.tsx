import purposeImage from "@/assets/community-purpose.jpg";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerChildren, viewportSettings } from "@/lib/motion";

const QuienesSomosSection = () => {

  return (
    <motion.section
      id="quienes-somos"
  className="py-20 bg-primary/5"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeIn()}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="grid md:grid-cols-2 gap-12 items-center" variants={staggerChildren(0.18)}>
          {/* Imagen */}
          <motion.div className="order-2 md:order-1" variants={fadeInUp(0.1)}>
            <motion.img
              src={purposeImage}
              alt="Comunidad compartiendo historias"
              className="rounded-2xl shadow-[var(--shadow-soft)] w-full h-auto"
              initial={{ scale: 0.92, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={viewportSettings}
            />
          </motion.div>

          {/* Contenido */}
          <motion.div className="order-1 md:order-2 space-y-6" variants={staggerChildren(0.12)}>
            <motion.h2 className="text-4xl sm:text-5xl font-bold text-foreground" variants={fadeInUp(0.15)}>
              ¿Quiénes <span className="text-primary">somos?</span>
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line"
              variants={fadeInUp(0.2)}
            >
              "Nuestro Barrio, Nuestra Historia" es un proyecto interdisciplinario que desarrolla soluciones metodológicas creativas y comunitarias para aportar a un urban planning sostenible en ciudades afectadas por contaminación ambiental. Creemos que los niños, niñas y adolescentes poseen una mirada única del territorio, por lo que su voz es el eje y motor de nuestros procesos.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line"
              variants={fadeInUp(0.3)}
            >
              Trabajamos desde un enfoque de memoria, ciudadanía ambiental y participación intergeneracional. Aunque los NNA son protagonistas, la presencia de familias y personas adultas de la comunidad complementa y fortalece la construcción colectiva de significados, ampliando la comprensión del entorno urbano.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line"
              variants={fadeInUp(0.4)}
            >
              Nuestro propósito es generar espacios donde la comunidad pueda narrar su historia, reconocer sus vínculos con el territorio y proponer caminos para un futuro más habitable. Buscamos que estas memorias dialoguen con instituciones y actores locales, contribuyendo a decisiones que promuevan ciudades más saludables, funcionales y humanas.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default QuienesSomosSection;
