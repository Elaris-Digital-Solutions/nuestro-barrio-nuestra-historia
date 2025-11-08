import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const heroVideo = "/assets/video-hero.mov";

const Hero = () => {
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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }}
        >
          Nuestro Barrio,
          <br />
          <span className="text-primary italic">Nuestra Historia</span>
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-white mb-10 max-w-3xl mx-auto italic"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
        >
          Queremos reconstruir la memoria viva de La Oroya a través de las voces, ojos y experiencias de sus propios habitantes.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } }}
        >
          <Button asChild variant="hero" size="lg" className="text-lg px-8 py-6 text-white">
            <a href="#conoce-el-proyecto">Conoce el Proyecto</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 text-white border-white hover:bg-white hover:text-primary">
            <a href="#exposicion">Exposición Fotográfica</a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
