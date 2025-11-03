import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn, staggerChildren, viewportSettings } from "@/lib/motion";

const danielaPortrait = "/assets/danielabussalleu.jpg";

const NuestroEquipo = () => {
  return (
    <motion.section
      id="equipo"
      className="py-20 bg-primary/5"
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
            <motion.img
              src={danielaPortrait}
              alt="Daniela Bussalleu Salcedo"
              className="w-full max-w-sm h-[22rem] md:h-[24rem] object-cover rounded-3xl shadow-[var(--shadow-soft)]"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NuestroEquipo;
