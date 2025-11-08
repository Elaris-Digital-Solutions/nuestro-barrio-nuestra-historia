import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerChildren, viewportSettings } from "@/lib/motion";
import { Carousel } from "@/components/ui/carousel";

const slides = [
  {
    title: "Miradas desde el puente",
    button: "Ver historia",
    src: "https://images.unsplash.com/photo-1445510861639-5651173bc5d5?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Historias y miradas recogidas desde el puente central del barrio.",
  },
  {
    title: "Voces de la plaza",
    button: "Ver historia",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Relatos de encuentros y conversaciones en la plaza principal.",
  },
  {
    title: "Memorias del río",
    button: "Ver historia",
    src: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Imágenes que evocan recuerdos y vivencias junto al río.",
  },
  {
    title: "Retratos del barrio",
    button: "Ver historia",
    src: "https://images.unsplash.com/photo-1499891334380-5cf80f1ebf2c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Retratos que muestran la diversidad y el carácter de la comunidad.",
  },
];

const Exposicion = () => {
  return (
    <motion.section
      id="exposicion"
      className="py-12 sm:py-16 lg:py-20 bg-muted/20"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeIn()}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-8 sm:mb-12" variants={staggerChildren(0.12)}>
          <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4" variants={fadeInUp(0.1)}>
            Exposición <span className="text-primary">Fotográfica</span>
          </motion.h2>
          <motion.p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4" variants={fadeInUp(0.2)}>
            En esta sección se presentarán las fotografías y textos elaborados durante el proceso de fotovoz, resultado del trabajo
            reflexivo y creativo de las/os participantes.
          </motion.p>
        </motion.div>

        <motion.div variants={fadeInUp(0.2)}>
          <Carousel slides={slides} />
        </motion.div>

        <motion.p
          className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mt-12 sm:mt-16 lg:mt-20 text-center px-4"
          variants={fadeInUp(0.3)}
        >
          A través de estas imágenes y relatos, buscamos visibilizar las miradas, experiencias y mensajes de la comunidad.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Exposicion;
