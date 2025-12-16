import { motion } from "framer-motion";
import ImageCarousel from "@/components/ImageCarousel";
import { fadeInFrom, sectionReveal, staggerChildren, viewportSettings } from "@/lib/motion";

const slides = [
  {
    image: "/assets/Nosotros1.png",
    caption: "Nos reunimos para imaginar juntas el barrio que soñamos",
  },
  {
    image: "/assets/Nosotros2.jpg",
    caption: "Historias y memorias que siguen latiendo en La Oroya",
  },
  {
    image: "/assets/Nosotros3.jpg",
    caption: "Recorridos y memorias compartidas",
  },
];

const QuienesSomosSection = () => {
  return (
    <motion.section
      id="quienes-somos"
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
  variants={sectionReveal({ delayChildren: 0.05, staggerChildren: 0.08 })}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-12 md:items-stretch"
          variants={staggerChildren({ stagger: 0.08, delayChildren: 0.05 })}
        >
          {/* Contenido */}
          <motion.div
            className="order-1 md:order-2 space-y-6"
            variants={staggerChildren({ stagger: 0.08, delayChildren: 0.04 })}
          >
            <motion.h2
              className="text-4xl sm:text-5xl font-bold text-foreground"
              variants={fadeInFrom("up", { distance: 18 })}
            >
              ¿Quiénes <span className="text-primary">Somos?</span>
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line text-justify"
              variants={fadeInFrom("up", { distance: 16 })}
            >
              <strong><em>“Nuestro Barrio, Nuestra Historia”</em></strong> es un proyecto interdisciplinario que desarrolla <strong>metodologías creativas y comunitarias</strong> para aportar a una <strong>planificación urbana sostenible</strong>. Partimos de la convicción de que las <strong>niñas, niños y adolescentes (NNA)</strong> poseen una <em>mirada única del territorio</em>, por lo que <strong>su voz constituye el eje y motor</strong> de nuestros procesos.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line text-justify"
              variants={fadeInFrom("up", { distance: 16 })}
            >
              El proyecto se trabaja desde un enfoque de <strong>memoria</strong>, <strong>ciudadanía ambiental</strong> y <strong>participación intergeneracional</strong>. Si bien los <strong>NNA</strong> son protagonistas, la participación de las <strong>familias</strong> y de <strong>personas adultas de la comunidad</strong> complementa y fortalece la <strong>construcción colectiva de significados</strong>, ampliando la comprensión del <em>entorno urbano</em>.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line text-justify"
              variants={fadeInFrom("up", { distance: 16 })}
            >
              Nuestro propósito es generar <strong>espacios</strong> donde la comunidad pueda <strong>narrar su historia</strong>, <strong>reconocer sus vínculos con el territorio</strong> y <strong>proponer caminos</strong> para un <strong>futuro más habitable</strong>. Buscamos que estas <strong>memorias</strong> dialoguen con <strong>instituciones y actores locales</strong>, contribuyendo a la <strong>toma de decisiones</strong> que promuevan <strong>ciudades más saludables, funcionales y humanas</strong>.
            </motion.p>
          </motion.div>

          {/* Carrusel */}
          <motion.div
            className="order-2 md:order-1 h-full"
            variants={fadeInFrom("left", { distance: 20 })}
          >
            <ImageCarousel
              slides={slides}
              className="w-full h-full min-h-[22rem] md:min-h-0 rounded-3xl overflow-hidden shadow-[var(--shadow-soft)]"
              showCaption={false}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default QuienesSomosSection;
