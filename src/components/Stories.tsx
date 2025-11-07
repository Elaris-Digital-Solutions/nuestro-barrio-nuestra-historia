import { Calendar } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerChildren, viewportSettings } from "@/lib/motion";
import { useNavigate } from "react-router-dom";

const stories = [
  {
    title: "El Almacén de Don José",
    date: "15 de Octubre, 2024",
    excerpt: "Durante más de 40 años, Don José ha sido el corazón del barrio. Su almacén no solo vende productos, sino que guarda las historias de generaciones...",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop",
  },
  {
    title: "La Plaza que nos Une",
    date: "8 de Octubre, 2024",
    excerpt: "La plaza central ha sido testigo de celebraciones, encuentros y momentos inolvidables. Vecinos comparten sus recuerdos más preciados...",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
  },
  {
    title: "Tradiciones que Perduran",
    date: "1 de Octubre, 2024",
    excerpt: "Las fiestas patronales siguen siendo el evento más esperado del año. Descubre cómo se han mantenido vivas estas tradiciones...",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
  },
];

const Stories = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      id="historias"
      className="py-12 sm:py-16 lg:py-20 bg-[#E0E0DC]"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeIn()}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12 sm:mb-16" variants={staggerChildren(0.15)}>
          <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4" variants={fadeInUp(0.1)}>
           <span className="text-primary">Blog</span>
          </motion.h2>
          <motion.p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4" variants={fadeInUp(0.2)}>
            Descubre las historias que dan vida a nuestro barrio
          </motion.p>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12" variants={staggerChildren(0.12, 0.1)}>
          {stories.map((story) => (
            <motion.div key={story.title} variants={fadeInUp()}>
              <Card className="group hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <motion.img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <CardContent className="p-4 sm:p-6 space-y-3 flex-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{story.date}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {story.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <Button variant="link" className="p-0 h-auto touch-manipulation">
                    Leer más →
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center" variants={fadeInUp(0.2)}>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate("/historias")}
            className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg touch-manipulation"
          >
            Ver Todas las Historias
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Stories;
