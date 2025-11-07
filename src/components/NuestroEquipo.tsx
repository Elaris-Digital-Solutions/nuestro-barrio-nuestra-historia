import { motion } from "framer-motion";
import ImageCarousel from "@/components/ImageCarousel";
import { fadeIn, fadeInUp, scaleIn, staggerChildren, viewportSettings } from "@/lib/motion";

const danielaPortrait = "/assets/danielabussalleu.jpg";
const maribelPortrait = "/assets/maribel-goncalves.jpg";
const bramRaulPortrait = encodeURI("/assets/Bram-Leo-Willems&Dr.Raúl-Loayza.webp");

const teamSlides = [
  {
    image: danielaPortrait,
    caption: "Daniela Bussalleu Salcedo",
  },
  {
    image: maribelPortrait,
    caption: "Dra. Maribel Goncálves",
  },
  {
    image: bramRaulPortrait,
    caption: "Dr. Bram Leo Willems y Dr. Raúl Loayza",
  },
];

const NuestroEquipo = () => {
  return (
    <motion.section
      id="equipo"
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeIn()}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto" variants={staggerChildren(0.18)}>
          <motion.div className="space-y-6" variants={staggerChildren(0.12)}>
            <motion.h2 className="text-4xl sm:text-5xl font-bold text-foreground" variants={fadeInUp(0.1)}>
              Nuestro <span className="text-primary">Equipo</span>
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground leading-relaxed text-justify" variants={fadeInUp(0.2)}>
              Proyecto liderado por la Lic. Daniela Bussalleu Salcedo (Universidad de Lima), con la asesoría de Maribel Goncálves de
              Freitas, PhD (Pontificia Universidad Católica del Perú), Raúl Loayza-Muro y Bram Leo Willems, PhD (Universidad Peruana
              Cayetano Heredia), y la colaboración de Activos Mineros S.A.C.
            </motion.p>
            <motion.p className="text-lg text-muted-foreground leading-relaxed text-justify" variants={fadeInUp(0.25)}>
              El proyecto cuenta también con la participación de jóvenes voluntarios y estudiantes locales comprometidos con la
              reconstrucción de la memoria colectiva de La Oroya.
            </motion.p>
          </motion.div>

          <motion.div className="flex justify-center" variants={scaleIn(0.2)}>
            <ImageCarousel
              slides={teamSlides}
              className="w-full max-w-sm h-[22rem] md:h-[24rem] rounded-3xl overflow-hidden shadow-[var(--shadow-soft)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NuestroEquipo;
