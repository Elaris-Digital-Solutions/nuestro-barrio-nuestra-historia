import { Calendar } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerChildren, viewportSettings } from "@/lib/motion";
import { useNavigate } from "react-router-dom";

const stories = [
  {
    title: "Respirar Futuro en La Oroya",
    date: "3 de Noviembre, 2024",
    excerpt:
      "Nuestro proyecto en La Oroya reconstruye el vínculo entre comunidad y territorio. Conversamos con vecinas y vecinos sobre memorias, miedos y esperanzas, y mapeamos caminatas barriales para reconocer puntos críticos y oportunidades...",
    image: "/assets/blog-1.jpg",
  },
  {
    title: "Marcavalle en el Mapa: Cartografías de lo Cotidiano",
    date: "20 de Octubre, 2024",
    excerpt:
      "La sesión de mapeo comunitario en Marcavalle mostró cómo se habita realmente el barrio. Las y los participantes marcaron rutas seguras, zonas de encuentro y espacios que requieren reactivación, integrando saberes locales con información técnica...",
    image: "/assets/blog-2.jpg",
  },
  {
    title: "Mirar para Transformar: Fotovoz y Teatro Comunitario",
    date: "1 de Octubre, 2024",
    excerpt:
      "El ejercicio de fotovoz invitó a capturar imágenes de injusticias, resiliencias y deseos de cambio. Esas fotografías impulsaron un laboratorio de teatro comunitario donde las historias cobraron vida y abrieron diálogos sobre convivencia y bienestar...",
    image: "/assets/blog-3.jpg",
  },
];

const Stories = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      id="historias"
      className="py-12 sm:py-16 lg:py-20 bg-[#FBF0ED]"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeIn()}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12 sm:mb-16" variants={staggerChildren(0.15)}>
          <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4" variants={fadeInUp(0.1)}>
           Nuestras<span className="text-primary"> Historias</span>
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
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-justify">
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
