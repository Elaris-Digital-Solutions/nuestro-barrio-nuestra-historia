import { motion } from "framer-motion";
import ImageCarousel from "@/components/ImageCarousel";
import { fadeInFrom, sectionReveal, staggerChildren, viewportSettings } from "@/lib/motion";

const danielaPortrait = "/assets/danielabussalleu.jpg";
const maribelPortrait = "/assets/maribel-goncalves.jpg";
const bramRaulPortrait = encodeURI("/assets/Bram-Leo-Willems&Dr.Raúl-Loayza.webp");

const teamSlides = [
  {
    image: danielaPortrait,
    caption: "Lic. Daniela Bussalleu Salcedo",
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
      className="py-20 bg-[#FBF0ED]"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={sectionReveal({ delayChildren: 0.05, staggerChildren: 0.08 })}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
          variants={staggerChildren({ stagger: 0.08, delayChildren: 0.05 })}
        >
          <motion.div
            className="space-y-6"
            variants={staggerChildren({ stagger: 0.08, delayChildren: 0.04 })}
          >
            <motion.h2
              className="text-4xl sm:text-5xl font-bold text-foreground"
              variants={fadeInFrom("up", { distance: 18 })}
            >
              Nuestro <span className="text-primary">Equipo</span>
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed text-justify"
              variants={fadeInFrom("up", { distance: 16 })}
            >
              Proyecto liderado por la Lic. {" "}
              <a
                href="https://www.linkedin.com/in/daniela-bussalleu/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 decoration-muted-foreground/60 underline-offset-2 hover:decoration-muted-foreground hover:text-foreground transition-colors"
              >
                Daniela Bussalleu Salcedo
              </a>{" "}
              (Universidad de Lima), con la asesoría de{" "}
              <a
                href="https://facultad-pucp.academia.edu/MaribelGoncalvesdeFreitas"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 decoration-muted-foreground/60 underline-offset-2 hover:decoration-muted-foreground hover:text-foreground transition-colors"
              >
                Maribel Goncálves de Freitas
              </a>
              , PhD (Pontificia Universidad Católica del Perú),{" "}
              <a
                href="https://www.linkedin.com/in/raúl-loayza-299b0831/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 decoration-muted-foreground/60 underline-offset-2 hover:decoration-muted-foreground hover:text-foreground transition-colors"
              >
                Raúl Loayza-Muro
              </a>{" "}
              y{" "}
              <a
                href="https://www.linkedin.com/in/bram-leo-willems-27536922/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 decoration-muted-foreground/60 underline-offset-2 hover:decoration-muted-foreground hover:text-foreground transition-colors"
              >
                Bram Leo Willems
              </a>
              , PhD (Universidad Peruana Cayetano Heredia), y la colaboración de Activos Mineros S.A.C.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed text-justify"
              variants={fadeInFrom("up", { distance: 16 })}
            >
              El proyecto cuenta también con la participación de jóvenes y estudiantes locales comprometidos con la
              reconstrucción de la memoria colectiva de La Oroya, así como la contribución de los arquitectos{" "}
              <a
                href="https://www.linkedin.com/in/vaniamasalias/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 decoration-muted-foreground/60 underline-offset-2 hover:decoration-muted-foreground hover:text-foreground transition-colors"
              >
                Vania Masalias
              </a>
              {" "}y{" "}
              <a
                href="https://www.linkedin.com/in/kevin-fu-fang-71541496/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 decoration-muted-foreground/60 underline-offset-2 hover:decoration-muted-foreground hover:text-foreground transition-colors"
              >
                Kevin Fu
              </a>
            </motion.p>
          </motion.div>

          <motion.div
            className="flex justify-center"
            variants={fadeInFrom("right", { duration: 0.5, distance: 20 })}
          >
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
