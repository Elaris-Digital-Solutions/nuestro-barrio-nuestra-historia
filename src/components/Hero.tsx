import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-neighborhood.jpg";
import { motion } from "framer-motion";

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
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1, transition: { duration: 1.5, ease: "easeOut" } }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }}
        >
          Nuestro Barrio,
          <br />
          <span className="text-primary">Nuestra Historia</span>
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
        >
          Queremos reconstruir la memoria viva de La Oroya a través de las voces, los ojos y las experiencias de sus propios habitantes.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } }}
        >
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Conoce Más
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Ver Historias
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          animate={{
            borderColor: ["var(--primary)", "rgba(244, 114, 182, 0.6)", "var(--primary)"],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
            animate={{ opacity: [1, 0.2, 1], y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
