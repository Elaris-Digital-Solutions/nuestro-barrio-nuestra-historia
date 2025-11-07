import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerChildren, viewportSettings } from "@/lib/motion";
import { Carousel } from "@/components/ui/carousel";

const slides = [
  {
    title: "Oroya I",
    src: "/assets/oroya%201.jpeg.jpg",
    description: "A veces el cielo es gris por el humo, pero igual salimos a jugar. Quisiera que el aire sea más limpio para que no nos duelan los pulmones después de correr.",
  },
  {
    title: "Oroya II",
    src: "/assets/oroya%202.jpeg.jpg",
    description: "Este es el camino que tomo todos los días. Me gusta porque puedo ver las montañas, pero también siento que el polvo se pega en la ropa y en la garganta.",
  },
  {
    title: "Oroya III",
    src: "/assets/oroya%203.jpeg.jpg",
    description: "La quebrada antes era más clara, eso dicen mis papás. Yo no la conocí así. Me gustaría que vuelva a verse el fondo del agua.",
  },
  {
    title: "Oroya IV",
    src: "/assets/oroya%204.jpg",
    description: "Aquí nos reunimos para conversar. Aunque está cerca de la fábrica, es nuestro lugar. Si lo arreglaran y sembraran árboles, sería más bonito para todos.",
  },
  {
    title: "Oroya V",
    src: "/assets/oroya%205.jpg",
    description: "La casa de mi abuela siempre está limpia, pero igual entra el polvo. Ella dice que es por el viento que viene de la empresa. Quisiera que ya no tenga que barrer tantas veces.",
  },
  {
    title: "Oroya VI",
    src: "/assets/oroya%206.png",
    description: "En este árbol jugábamos cuando éramos más pequeños. Ahora sus hojas se caen más rápido. Ojalá lo cuidaran y crecieran más árboles como él.",
  },
  {
    title: "Oroya VII",
    src: "/assets/oroya%207.jpg",
    description: "Me gusta esta vista porque me recuerda que la ciudad no es solo contaminación. También tenemos montañas, colores y gente que quiere cambiar las cosas.",
  },
  {
    title: "Oroya VIII",
    src: "/assets/oroya%208.jpeg",
    description: "Este poste está pintado por nosotros. Fue un trabajo del colegio. Para mí es un símbolo de que sí podemos mejorar nuestro barrio si todos ayudamos.",
  },
];

const ExposicionFotografica = () => {
  return (
    <motion.section
      id="exposicion"
      className="py-20 bg-white"
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
