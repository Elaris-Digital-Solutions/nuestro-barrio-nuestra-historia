/*
  Componente HeroSection Refactorizado:
  - UI/UX y Animación: Se ha mejorado la secuencia de animación de entrada para que sea más limpia, declarativa y orquestada, utilizando las variantes de Framer Motion.
  - Animación Escalonada (Stagger): Se introdujo un `container` de animación que aplica un efecto `staggerChildren`. Esto hace que el logo, el título, el subtítulo y los botones aparezcan en una secuencia fluida y natural, en lugar de hacerlo todos a la vez.
  - Código Declarativo: Se reemplazaron las animaciones en línea (inline) por variantes reutilizables (`logoVariant`, `textVariant`, `buttonVariant`), haciendo el código más legible, mantenible y consistente con las mejores prácticas de Framer Motion.
*/
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

// Variantes para la animación orquestada
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Tiempo entre la animación de cada hijo
    },
  },
};

const easeBezier = [0.22, 1, 0.36, 1] as const;

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: easeBezier }
  },
};

const buttonVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: easeBezier }
  },
};

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const element = document.querySelector('.segment-cards');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img 
          src="/assets/hero-image.jpg" 
          alt="Salinas de Kar & Ma" 
          className="w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-blue-400/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center min-h-screen justify-center py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={textVariant} className="mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent px-4">
            Ciencia que conecta para transformar
          </h1>
        </motion.div>

        <motion.p
          variants={textVariant}
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto text-white/90 leading-relaxed px-4"
        >
          Traducimos la complejidad del territorio en decisiones claras, soluciones accionables y cambios medibles.
        </motion.p>

        <div className="flex flex-col items-center gap-8">
          <motion.div
            variants={buttonVariant}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4 w-full max-w-2xl"
          >
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Contáctanos
            </Button>
            <Button 
              onClick={scrollToNext}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Conoce más
            </Button>
          </motion.div>

          <motion.div
            variants={textVariant} // Re-using text variant for a consistent entrance
            className="flex flex-col items-center gap-2 cursor-pointer pt-8"
            onClick={scrollToNext}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-sm font-medium text-white">Descubre más</span>
              <ChevronDown className="w-5 h-5 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
};

export default HeroSection;
