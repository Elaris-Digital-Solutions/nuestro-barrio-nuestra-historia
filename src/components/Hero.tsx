import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const heroVideo = "/assets/video-hero.mp4";

const Hero = () => {
  const handleScrollTo = (selector: string) => {
    const element = document.querySelector(selector);
    if (!element) return;

    const headerOffset = 80;
    const elementTop = (element as HTMLElement).getBoundingClientRect().top + window.pageYOffset;
    const targetPosition = Math.max(elementTop - headerOffset, 0);

    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };

  return (
    <motion.section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial="initial"
      animate="animate"
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 1 } }
      }}
    >
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.video
          className="w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          initial={{ scale: 1.1 }}
          animate={{ scale: 1, transition: { duration: 1.5, ease: "easeOut" } }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center">
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }}
        >
          Nuestro Barrio,
          <br />
          <span className="text-primary italic">Nuestra Historia</span>
        </motion.h1>
        <motion.p
          className="text-base sm:text-2xl text-white mb-8 sm:mb-10 max-w-3xl mx-auto italic"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
        >
          Queremos reconstruir la memoria viva de La Oroya a través de las voces, ojos y experiencias de sus propios habitantes.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } }}
        >
          <Button
            variant="hero"
            size="lg"
            className="text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 text-white"
            onClick={() => handleScrollTo("#conoce-el-proyecto")}
          >
            Conoce el Proyecto
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 text-white border-white hover:bg-white hover:text-primary"
            onClick={() => handleScrollTo("#exposicion")}
          >
            Exposición Fotográfica
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
