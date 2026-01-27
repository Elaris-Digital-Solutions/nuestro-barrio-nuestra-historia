import { motion } from "framer-motion";
import { fadeInFrom, sectionReveal, staggerChildren, viewportSettings } from "@/lib/motion";

const ALLIES = [
  { name: "Activos Mineros S.A.C. (AMSAC)", logo: "🏭" },
  { name: "Municipalidad Distrital de Santa Rosa de Sacco", logo: "🌹" },
  { name: "Municipalidad Provincial de Yauli", logo: "⛰️" },
  { name: "Comité Cultural de la Provincia de Yauli - La Oroya", logo: "🏛️" },
  { name: "Institución Educativa José Carlos Mariátegui", logo: "🎓" },
  { name: "Unidad de Gestión Educativa Local (UGEL)", logo: "🏫" },
];

const AliadosQueSuman = () => {
  return (
    <motion.section
      id="aliados"
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={sectionReveal({ delayChildren: 0.05, staggerChildren: 0.08 })}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={staggerChildren({ stagger: 0.08, delayChildren: 0.04 })}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
            variants={fadeInFrom("up", { distance: 18 })}
          >
            Actores <span className="text-primary">Comunitarios</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInFrom("up", { distance: 16 })}
          >
            Instituciones aliadas que hacen posible esta iniciativa y acompañan el proceso comunitario en La Oroya.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center"
          variants={staggerChildren({ stagger: 0.08, delayChildren: 0.05 })}
        >
          {ALLIES.map((ally, index) => (
            <motion.div
              key={ally.name}
              className="flex flex-col items-center justify-center p-5 sm:p-6 rounded-xl bg-muted/50 transition-all duration-300 group"
              variants={fadeInFrom(index % 2 === 0 ? "up" : "down", {
                duration: 0.5,
                distance: 16,
              })}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <motion.div
                className="text-6xl mb-3"
                whileHover={{ rotate: [0, -6, 6, 0] }}
                transition={{ duration: 0.6 }}
              >
                {ally.logo}
              </motion.div>
              <p className="text-sm text-center text-muted-foreground font-medium">{ally.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AliadosQueSuman;
