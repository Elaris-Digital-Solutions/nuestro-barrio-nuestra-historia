import { motion } from "framer-motion";
import { fadeInFrom, sectionReveal, staggerChildren, viewportSettings } from "@/lib/motion";
import { Carousel } from "@/components/ui/carousel";

const slides = [
  {
    title: "Oroya I",
    src: "/assets/n.b.n.h-carousel/1.JPG",
    description: "“Soy la feria de Marcavalle y ¡me gusta que me mantengan colorida!”",
  },
  {
    title: "Oroya II",
    src: "/assets/n.b.n.h-carousel/2.jpg",
    description: "“Soy el Río Yauli y tengo a mi alrededor las casas de los 40 ladrones”",
  },
  {
    title: "Oroya III",
    src: "/assets/n.b.n.h-carousel/3.jpg",
    description: "“Somos las casas de los 40 ladrones y tenemos mucha historia, aunque no la conozcan muchos....”",
  },
  {
    title: "Oroya IV",
    src: "/assets/n.b.n.h-carousel/4.jpg",
    description: "",
  },
  {
    title: "Oroya V",
    src: "/assets/n.b.n.h-carousel/5.jpg",
    description: "",
  },
  {
    title: "Oroya VI",
    src: "/assets/n.b.n.h-carousel/6.jpg",
    description: "",
  },
  {
    title: "Oroya VII",
    src: "/assets/n.b.n.h-carousel/7.JPG",
    description: "",
  },
  {
    title: "Oroya VIII",
    src: "/assets/n.b.n.h-carousel/8.JPG",
    description: "“Soy el camino que llevó riqueza a La Oroya”",
  },
  {
    title: "Oroya IX",
    src: "/assets/n.b.n.h-carousel/9.JPG",
    description: "“Soy el camino que llevó riqueza a La Oroya”",
  },
  {
    title: "Oroya X",
    src: "/assets/n.b.n.h-carousel/10.jpg",
    description: "“Soy el SEYO, la historia que sigue viva...”",
  },
  {
    title: "Oroya XI",
    src: "/assets/n.b.n.h-carousel/11.png",
    description: "“Soy el SEYO, la historia que sigue viva...”",
  },
  {
    title: "Oroya XII",
    src: "/assets/n.b.n.h-carousel/12.jpg",
    description: "“Soy un elefante y represento la buena suerte”",
  },
  {
    title: "Oroya XIII",
    src: "/assets/n.b.n.h-carousel/13.JPG",
    description: "",
  },
  {
    title: "Oroya XIV",
    src: "/assets/n.b.n.h-carousel/14.JPG",
    description: "“Soy la plaza y los chicos me visitan cuando están tristes, para sentirse tranquilos”",
  },
  {
    title: "Oroya XV",
    src: "/assets/n.b.n.h-carousel/15.jpg",
    description: "",
  },
  {
    title: "Oroya XVI",
    src: "/assets/n.b.n.h-carousel/16.JPG",
    description: "",
  },
  {
    title: "Oroya XVII",
    src: "/assets/n.b.n.h-carousel/17.JPG",
    description: "Soy la entrada de un lugar que muere poco a poco",
  },
  {
    title: "Oroya XVIII",
    src: "/assets/n.b.n.h-carousel/18.JPG",
    description: "“Soy el bosque triste porque me seco día a día”",
  },
  {
    title: "Oroya XIX",
    src: "/assets/n.b.n.h-carousel/19.JPG",
    description: "“Fui una casa de aves históricas de La Oroya, hasta que me convertí en una cárcel de la que tuvieron que escapar”",
  },
  {
    title: "Oroya XX",
    src: "/assets/n.b.n.h-carousel/20.JPG",
    description: "",
  },
  {
    title: "Oroya XXI",
    src: "/assets/n.b.n.h-carousel/21.jpg",
    description: "",
  },
  {
    title: "Oroya XXII",
    src: "/assets/n.b.n.h-carousel/22.jpg",
    description: "",
  },
  {
    title: "Oroya XXIII",
    src: "/assets/n.b.n.h-carousel/23.JPG",
    description: "",
  },
  {
    title: "Oroya XXIV",
    src: "/assets/n.b.n.h-carousel/24.JPG",
    description: "",
  },
  {
    title: "Oroya XXV",
    src: "/assets/n.b.n.h-carousel/25.JPG",
    description: "“¡Desentiérrennos y cuídennos que queremos hacer felices a los niños!”",
  },
  {
    title: "Oroya XXVI",
    src: "/assets/n.b.n.h-carousel/26.JPG",
    description: "“Sigan deslizándose en mi como sus antepasados lo hicieron…”",
  },
  {
    title: "Oroya XXVII",
    src: "/assets/n.b.n.h-carousel/27.JPG",
    description: "",
  },
  {
    title: "Oroya XXVIII",
    src: "/assets/n.b.n.h-carousel/28.JPG",
    description: "“Soy el cerro y me gustaría volver a ser como antes: que crezca vegetación”",
  },
  {
    title: "Oroya XXIX",
    src: "/assets/n.b.n.h-carousel/29.JPG",
    description: "“Soy el río Mantaro y produzco trucha”",
  },
  {
    title: "Oroya XXX",
    src: "/assets/n.b.n.h-carousel/30.JPG",
    description: "“Soy el tendedero y me gusta secar ropa con el sol que lavaron el el río Mantaro”",
  },
  {
    title: "Oroya XXXI",
    src: "/assets/n.b.n.h-carousel/31.JPG",
    description: "“Soy la lengua del diablo y me gusta romper pantalones”",
  },
  {
    title: "Oroya XXXII",
    src: "/assets/n.b.n.h-carousel/32.JPG",
    description: "",
  },
  {
    title: "Oroya XXXIII",
    src: "/assets/n.b.n.h-carousel/33.JPG",
    description: "",
  },
  {
    title: "Oroya XXXIV",
    src: "/assets/n.b.n.h-carousel/34.JPG",
    description: "",
  },
  {
    title: "Oroya XXXV",
    src: "/assets/n.b.n.h-carousel/35.JPG",
    description: "",
  },
];

const ExposicionFotografica = () => {
  return (
    <motion.section
      id="exposicion"
      className="py-20 bg-[#FBF0ED]"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={sectionReveal({ delayChildren: 0.05, staggerChildren: 0.08 })}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={staggerChildren({ stagger: 0.08, delayChildren: 0.04 })}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
            variants={fadeInFrom("up", { distance: 18 })}
          >
            Exposición <span className="text-primary">Fotográfica</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInFrom("up", { distance: 16 })}
          >
            A través de estas imágenes y relatos, buscamos visibilizar las miradas, experiencias y mensajes de la comunidad.
          </motion.p>
        </motion.div>

        <motion.div variants={fadeInFrom("up", { duration: 0.5, distance: 18 })}>
          <Carousel slides={slides} />
        </motion.div>

        <motion.p
          className="text-lg text-muted-foreground max-w-3xl mx-auto mt-16 md:mt-20 text-center"
          variants={fadeInFrom("up", { duration: 0.5, distance: 16 })}
        >
          Natzumi Soe Sotelo Torres • Valentino Aliaga Fernández • Sayuri Pumacarhua Trinidad • Christinn Hesed Coronel Collazos • Britany Patricia Amaro Sanabria • Yennova Celeste Inga Cerrón• Nardo Yared Quinto Huari • Keydens Jaylee Lagos Torres • Abigail Alanya Canto • Daniela Gamarra Prado • Kristen Soto Camac • Astrid Inga Ñaupari
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ExposicionFotografica;
