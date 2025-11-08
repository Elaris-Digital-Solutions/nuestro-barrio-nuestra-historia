import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn, staggerChildren, viewportSettings } from "@/lib/motion";

const PILLARS = [
  {
    icon: "📸",
    title: "Fotovoz",
    description:
      "Los jóvenes usan la fotografía para narrar su entorno, emociones y experiencias, explorando cómo la imagen puede expresar su identidad y comunidad.",
  },
  {
    icon: "🗺",
    title: "Cartografía social",
    description:
      "Elaboramos mapas que muestran cómo se habita La Oroya, destacando las conexiones territorioriales, memoria colectiva y sentido de pertenencia.",
  },
  {
    icon: "🎭",
    title: "Teatro comunitario",
    description:
      "Reflexionamos sobre las memorias y vínculos a través del cuerpo, el juego de roles y la creación artística como espacios de encuentro y expresión colectiva.",
  },
  {
    icon: "🕯",
    title: "Mapas del cuerpo",
    description:
      "Metodología sensible para explorar cómo la historia se encarna en el cuerpo, reconociendo la relación entre territorio, cuerpo y emociones.",
  },
  {
    icon: "⏳",
    title: "Nuestro Tiempo",
    description:
      "Actividades con relojes y líneas del tiempo para reflexionar sobre los diversos usos del tiempo y el pasado, presente y futuro de la ciudad.",
  },
];

const ConoceElProyecto = () => {
  return (
    <motion.section
      id="conoce-el-proyecto"
      className="py-20 bg-[#FBF0ED]"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeIn()}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={staggerChildren(0.15)}>
          <motion.h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4" variants={fadeInUp(0.1)}>
            Conoce el <span className="text-primary">Proyecto</span>
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground max-w-6xl mx-auto leading-loose tracking-wide" variants={fadeInUp(0.2)}>
            <strong>Nuestro Barrio, Nuestra Historia</strong> es una iniciativa que a través de <strong>metodologías comunitarias</strong> busca <strong>rescatar, preservar y compartir historias</strong> que hacen únicas a
            las comunidades. En esta oportunidad trabajamos junto a la <strong>comunidad de La Oroya</strong> para recuperar la <strong>memoria local</strong> y producir
            <strong> conocimiento</strong> que contribuirá a futuros <strong>procesos de planificación urbana</strong>.
          </motion.p>
        </motion.div>

        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6" variants={staggerChildren(0.1)}>
          {PILLARS.map((pillar, index) => (
            <motion.div key={pillar.title} variants={scaleIn(index * 0.05)}>
              <Card className="group hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2 border-2 h-full">
                <CardContent className="p-6 space-y-4 text-center h-full flex flex-col justify-between">
                  <motion.div
                    className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center text-3xl"
                    whileHover={{ scale: 1.12, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  >
                    <span role="img" aria-label={pillar.title}>
                      {pillar.icon}
                    </span>
                  </motion.div>
                  <motion.h3 className="text-xl font-semibold text-foreground" variants={fadeInUp(0.1)}>
                    {pillar.title}
                  </motion.h3>
                  <motion.p className="text-muted-foreground text-sm leading-relaxed" variants={fadeInUp(0.15)}>
                    {pillar.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ConoceElProyecto;
