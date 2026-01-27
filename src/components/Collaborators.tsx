import { motion } from "framer-motion";
import ImageCarousel from "@/components/ImageCarousel";
import { fadeInFrom, sectionReveal, staggerChildren, viewportSettings } from "@/lib/motion";

const alexandra1 = "/assets/alexandra.jpg";
const alexandra2 = "/assets/alexandra2.JPG";

const collaboratorSlides = [
  {
    image: alexandra1,
    caption: "Alexandra Gutiérrez, artista Oroyina",
  },
  {
    image: alexandra2,
    caption: "Alexandra Gutiérrez, artista Oroyina",
  },
];

const Collaborators = () => {
  return (
    <motion.section
      id="colaboraciones"
      className="py-20 bg-[#FBF0ED]"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={sectionReveal({ delayChildren: 0.05, staggerChildren: 0.08 })}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
          variants={staggerChildren({ stagger: 0.08, delayChildren: 0.05 })}
        >
          <motion.div
            className="flex justify-center order-2 md:order-1"
            variants={fadeInFrom("right", { duration: 0.5, distance: 20 })}
          >
            <ImageCarousel
              slides={collaboratorSlides}
              className="w-full max-w-sm h-[22rem] md:h-[24rem] rounded-3xl overflow-hidden shadow-[var(--shadow-soft)]"
            />
          </motion.div>

          <motion.div
            className="space-y-6 order-1 md:order-2"
            variants={staggerChildren({ stagger: 0.08, delayChildren: 0.04 })}
          >
            <motion.h2
              className="text-4xl sm:text-5xl font-bold text-foreground"
              variants={fadeInFrom("up", { distance: 18 })}
            >
              Colaboradores <span className="text-primary">locales</span>
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed text-justify"
              variants={fadeInFrom("up", { distance: 16 })}
            >
              Alexandra Gutiérrez (La Oroya, 2002) es estudiante de Pintura con concentración en Cerámica en la Pontificia Universidad Católica del Perú. Colaboradora del proyecto Nuestro Barrio, Nuestra Historia, ha brindado sesiones de curaduría a los estudiantes y participa activamente en el montaje y la exposición fotográfica, reforzando su compromiso con la cultura local.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Collaborators;
