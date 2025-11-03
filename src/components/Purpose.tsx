import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import purposeImage from "@/assets/community-purpose.jpg";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerChildren, viewportSettings } from "@/lib/motion";

const PURPOSE_SECTIONS = [
  {
    id: "quienes-somos-1",
    title: "¿Quiénes",
    highlight: "somos?",
    description: [
      "“Nuestro barrio, nuestras historias” es un proyecto interdisciplinario que combina psicología comunitaria, comunicación para el desarrollo y ciencia ambiental, con el propósito de documentar, reflexionar y compartir las memorias colectivas de La Oroya desde la mirada de sus propios habitantes."
    ]
  },
  {
    id: "quienes-somos-2",
    title: "¿Quiénes",
    highlight: "somos?",
    description: [
      "Este proyecto forma parte de una tesis de maestría en Psicología Comunitaria de la Pontificia Universidad Católica del Perú (PUCP), en alianza con el Centro de Investigación para la Rehabilitación Ambiental y Minería Responsable (CICLOMIN), un programa de la Universidad Peruana Cayetano Heredia (UPCH)."
    ]
  },
  {
    id: "quienes-somos-3",
    title: "¿Quiénes",
    highlight: "somos?",
    description: [
      "Buscamos escuchar y visibilizar las voces locales, especialmente de niños, niñas y adolescentes, a través de metodologías participativas como la fotovoz, el teatro comunitario, la cartografía social y los mapas del cuerpo.\n\nCreemos que la memoria no es una suma de recuerdos individuales, sino el producto de una reflexión colectiva e intergeneracional donde el arte y el diálogo se convierten en herramientas para desarrollar la historia viva de La Oroya."
    ]
  }
];

const Purpose = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + PURPOSE_SECTIONS.length) % PURPOSE_SECTIONS.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PURPOSE_SECTIONS.length);
  };

  const currentSection = PURPOSE_SECTIONS[currentIndex];
  return (
    <motion.section
      id="proyecto"
      className="py-20 bg-muted/30"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeIn()}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="grid md:grid-cols-2 gap-12 items-center" variants={staggerChildren(0.18)}>
          {/* Image */}
          <motion.div className="order-2 md:order-1" variants={fadeInUp(0.1)}>
            <motion.img
              src={purposeImage}
              alt="Comunidad compartiendo historias"
              className="rounded-2xl shadow-[var(--shadow-soft)] w-full h-auto"
              initial={{ scale: 0.92, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={viewportSettings}
            />
          </motion.div>

          {/* Content */}
          <motion.div className="order-1 md:order-2 space-y-6" variants={staggerChildren(0.12)}>
            <motion.h2 className="text-4xl sm:text-5xl font-bold text-foreground" variants={fadeInUp(0.15)}>
              {currentSection.title} <span className="text-primary">{currentSection.highlight}</span>
            </motion.h2>
            {currentSection.description.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line"
                variants={fadeInUp(0.2 + index * 0.1)}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        {/* Navigation */}
        <motion.div className="mt-16 flex items-center justify-center gap-8" variants={fadeInUp(0.3)}>
          <Button
            type="button"
            onClick={goToPrevious}
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full border border-border transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex gap-3">
            {PURPOSE_SECTIONS.map((section, sectionIndex) => (
              <motion.button
                key={section.id}
                type="button"
                onClick={() => setCurrentIndex(sectionIndex)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  sectionIndex === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-primary/60'
                }`}
                aria-label={`Ver ${section.title}`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          <Button
            type="button"
            onClick={goToNext}
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full border border-border transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Purpose;
