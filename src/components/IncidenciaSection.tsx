import { Building2, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerChildren, viewportSettings } from "@/lib/motion";

const pillars = [
  {
    id: "incidencia-politica",
    icon: Building2,
    title: "¿Cómo generamos incidencia política?",
    description:
      "Todo el proceso de trabajo metodológico culmina con exposiciones artísticas desarrolladas en espacios públicos elegidos por el grupo participante, con fotografías, textos y relatos; acompañadas de conversatorios con autoridades y especialistas locales. De este modo, anclamos nuestro trabajo en la acción pública, llevando la voz comunitaria a los espacios donde se toman decisiones. Las memorias construidas se convierten en insumos técnicos y humanos para la planificación urbana y la remediación ambiental.",
  },
  {
    id: "compartimos-proceso",
    icon: Share2,
    title: "¿Cómo compartimos lo que hacemos?",
    description:
      "Socializamos todo el proceso mediante exposiciones públicas creadas colectivamente y ubicadas en espacios comunitarios, donde se presentan las mismas fotografías, textos y relatos elaborados durante el proyecto. Estos contenidos se trasladan también a una galería virtual abierta, que amplía su alcance y permite que las historias circulen más allá del territorio. Como complemento, sumamos material digital del proceso co-producido junto a estudiantes de la comunidad capacitados en comunicación digital.",
  },
];

const IncidenciaSection = () => {
  return (
    <motion.section
      id="incidencia"
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeIn()}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center max-w-3xl mx-auto" variants={staggerChildren(0.12)}>
          <motion.h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-6" variants={fadeInUp(0.1)}>
            Expandimos la voz del <span className="text-primary">territorio</span>
          </motion.h2>
          <motion.p className="mt-4 text-lg text-muted-foreground" variants={fadeInUp(0.15)}>
            Nuestros procesos terminan en espacios donde las historias se vuelven acción pública y memoria compartida.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-8 md:grid-cols-2"
          variants={staggerChildren(0.16)}
        >
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.id}
              className="rounded-3xl border border-border bg-background shadow-[0_15px_45px_-20px_rgba(20,20,20,0.2)] p-8 flex flex-col gap-5"
              variants={fadeInUp(0.12 + index * 0.06)}
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <pillar.icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground leading-tight">
                {pillar.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IncidenciaSection;
