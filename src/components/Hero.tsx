import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInFrom, scaleIn, sectionReveal, staggerChildren } from "@/lib/motion";

const heroVideo = "/assets/video-hero.mp4";
const heroPosterWebp = "/assets/video-hero-poster.webp";
const heroPosterFallback = "/assets/video-hero-poster.jpg";

const Hero = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);

  const handleScrollTo = (selector: string) => {
    const element = document.querySelector(selector);
    if (!element) return;

    const headerOffset = 80;
    const elementTop = (element as HTMLElement).getBoundingClientRect().top + window.scrollY;
    const targetPosition = Math.max(elementTop - headerOffset, 0);

    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };

  return (
    <motion.section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={sectionReveal({ duration: 0.55, delayChildren: 0.04, staggerChildren: 0.08 })}
    >
      {/* Background — solo imagen WebP y video */}
      <div
        className="absolute inset-0 overflow-hidden bg-black will-change-[opacity]"
        style={{
          backgroundImage: `url(${heroPosterFallback})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Imagen base (siempre visible hasta que el video esté listo) */}
        <picture
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${isVideoReady ? "opacity-0" : "opacity-100"
            }`}
        >
          <source srcSet={heroPosterWebp} type="image/webp" />
          <img
            src={heroPosterFallback}
            alt="Previsualización del video de Nuestro Barrio, Nuestra Historia"
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
        </picture>

        {/* Video — aparece suavemente cuando carga */}
        <video
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${isVideoReady ? "opacity-100" : "opacity-0"
            }`}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          controls={false}
          poster={heroPosterFallback}
          onLoadedData={() => setIsVideoReady(true)}
          style={{ pointerEvents: "none" }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Contenido principal */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center"
        variants={staggerChildren({ stagger: 0.08, delayChildren: 0.02 })}
      >
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          variants={fadeInFrom("up", { duration: 0.5, distance: 18, delay: 0 })}
        >
          Nuestro Barrio,
          <br />
          <span className="text-primary italic">Nuestra Historia</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-2xl text-white mb-8 sm:mb-10 max-w-3xl mx-auto italic"
          variants={fadeInFrom("up", { duration: 0.5, distance: 16, delay: 0.04 })}
        >
          Queremos reconstruir la memoria viva de La Oroya a través de las voces,
          ojos y experiencias de sus propios habitantes.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          variants={staggerChildren({ stagger: 0.08, delayChildren: 0.04 })}
        >
          <motion.div variants={scaleIn(0)}>
            <a
              href="https://drive.google.com/file/d/1r_riyBFeMp0X4gaGqyfPxurQ-MkT2GLm/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="hero"
                size="lg"
                className="text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 text-white"
              >
                Nuestra Revista
              </Button>
            </a>
          </motion.div>
          <motion.div variants={scaleIn(0)}>
            <Button
              variant="outline"
              size="lg"
              className="text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 text-white border-white hover:bg-white hover:text-primary"
              onClick={() => handleScrollTo("#exposicion")}
            >
              Exposición Fotográfica
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
