import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerChildren, viewportSettings } from "@/lib/motion";
import { Carousel } from "@/components/ui/carousel";

const slides = [
  {
    title: "Miradas desde el puente",
    button: "Ver historia",
    src: "https://images.unsplash.com/photo-1445510861639-5651173bc5d5?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    title: "Voces de la plaza",
    button: "Ver historia",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    title: "Memorias del río",
    button: "Ver historia",
    src: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    title: "Retratos del barrio",
    button: "Ver historia",
    src: "https://images.unsplash.com/photo-1499891334380-5cf80f1ebf2c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

const ExposicionFotografica = () => {
  return (
    <motion.section
      id="exposicion"
      className="py-20 bg-muted/20"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeIn()}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12" variants={staggerChildren(0.12)}>
          <motion.h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4" variants={fadeInUp(0.1)}>
            Exposición <span className="text-primary">fotográfica</span>
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground max-w-3xl mx-auto" variants={fadeInUp(0.2)}>
            En esta sección se presentarán las fotografías y textos elaborados durante el proceso de fotovoz, resultado del trabajo
            reflexivo y creativo de las/os participantes.
          </motion.p>
        </motion.div>

        <motion.div variants={fadeInUp(0.2)}>
          <Carousel slides={slides} />
        </motion.div>

        <motion.p
          className="text-lg text-muted-foreground max-w-3xl mx-auto mt-16 md:mt-20 text-center"
          variants={fadeInUp(0.3)}
        >
          A través de estas imágenes y relatos, buscamos visibilizar las miradas, experiencias y mensajes de la comunidad.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ExposicionFotografica;
