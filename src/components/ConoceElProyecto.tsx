import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInFrom, sectionReveal, staggerChildren, viewportSettings } from "@/lib/motion";

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
    icon: "🚶",
    title: "Caminatas comunitarias",
    description:
      "Recorridos por el barrio con estudiantes y comunidad para compartir historias, fortalecer vínculos intergeneracionales y fomentar sentido de pertenencia.",
  },
  {
    icon: "🕯",
    title: "Mapas del cuerpo",
    description:
      "Metodología sensible para explorar cómo la historia se encarna en el cuerpo, reconociendo la relación entre territorio, cuerpo y emociones.",
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
            Conoce el <span className="text-primary">Proyecto</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-6xl mx-auto leading-loose tracking-wide"
            variants={fadeInFrom("up", { distance: 16 })}
          >
            <strong>Nuestro Barrio, Nuestra Historia</strong> es una iniciativa que a través de <strong>metodologías comunitarias</strong> busca <strong>rescatar, preservar y compartir historias</strong> que hacen únicas a
            las comunidades. En esta oportunidad trabajamos junto a la <strong>comunidad de La Oroya</strong> para recuperar la <strong>memoria local</strong> y producir
            <strong> conocimiento</strong> que contribuirá a futuros <strong>procesos de planificación urbana</strong>.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={staggerChildren({ stagger: 0.08, delayChildren: 0.05 })}
        >
          {PILLARS.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              variants={fadeInFrom(index % 2 === 0 ? "up" : "down", {
                duration: 0.5,
                distance: 18,
              })}
            >
              <Card className="group hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2 border-2 h-full w-60">
                <CardContent className="p-6 space-y-4 text-center h-full flex flex-col justify-between">
                  <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                    <span role="img" aria-label={pillar.title}>
                      {pillar.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ConoceElProyecto;
