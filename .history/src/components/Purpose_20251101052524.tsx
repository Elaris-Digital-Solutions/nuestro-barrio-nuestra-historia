import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import purposeImage from "@/assets/community-purpose.jpg";

const PURPOSE_SECTIONS = [
  {
    id: "proposito",
    title: "Propósito",
    description: [
      "Nuestro Barrio, Nuestras Historias es un proyecto comunitario dedicado a rescatar, preservar y compartir las historias que hacen única a nuestra comunidad.",
      "Creemos que cada vecino tiene una historia valiosa que contar, y que al compartirlas, fortalecemos los lazos que nos unen y construimos un sentido más profundo de pertenencia.",
      "A través de testimonios, fotografías, documentos y recuerdos, estamos tejiendo la memoria colectiva de nuestro barrio para las generaciones presentes y futuras."
    ]
  },
  {
    id: "mision",
    title: "Misión",
    description: [
      "Documentar, reflexionar y compartir memorias colectivas mediante metodologías participativas —fotovoz, teatro comunitario, cartografía social y mapas del cuerpo— articulando psicología comunitaria, comunicación para el desarrollo y ciencia ambiental.",
      "Trabajamos directamente con los habitantes de La Oroya para co-crear espacios de diálogo y reflexión que permitan la construcción colectiva de conocimiento.",
      "Promovemos la participación activa de la comunidad en la documentación y preservación de su propia historia y memoria."
    ]
  },
  {
    id: "vision",
    title: "Visión",
    description: [
      "Una comunidad que reconoce y transmite su historia viva de forma intergeneracional, capaz de incidir en decisiones públicas y fortalecer la escucha institucional a través del arte, la evidencia y la colaboración.",
      "Visionamos un futuro donde las voces de La Oroya sean escuchadas y valoradas en los espacios de toma de decisiones que afectan su territorio.",
      "Aspiramos a ser un referente en metodologías participativas para la reconstrucción de memoria y el fortalecimiento del tejido social comunitario."
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
    <section id="proyecto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src={purposeImage}
              alt="Comunidad compartiendo historias"
              className="rounded-2xl shadow-[var(--shadow-soft)] w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Nuestro <span className="text-primary">Propósito</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro Barrio, Nuestras Historias es un proyecto comunitario dedicado a rescatar, preservar y compartir las historias que hacen única a nuestra comunidad.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Creemos que cada vecino tiene una historia valiosa que contar, y que al compartirlas, fortalecemos los lazos que nos unen y construimos un sentido más profundo de pertenencia.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A través de testimonios, fotografías, documentos y recuerdos, estamos tejiendo la memoria colectiva de nuestro barrio para las generaciones presentes y futuras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;
