"use client";

import { Carousel } from "@/components/ui/carousel";

const slideData = [
  {
    title: "Mystic Mountains",
    src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Senderos fríos, aire limpio y la sensación de tocar las nubes en cada paso.",
  },
  {
    title: "Urban Dreams",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "La ciudad despierta con ganas de crear, compartir y transformar cada esquina.",
  },
  {
    title: "Neon Nights",
    src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Luces, reflejos y ritmos que iluminan historias cuando cae la noche.",
  },
  {
    title: "Desert Whispers",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "El viento del desierto guarda secretos de quienes lo atraviesan con calma.",
  },
];

export function CarouselDemo() {
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
