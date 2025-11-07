import { useState } from "react";
import { Search, Calendar, Eye } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerChildren, viewportSettings } from "@/lib/motion";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Story {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: number;
  views: number;
}

const Stories = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todas");

  const stories: Story[] = [
    {
      id: 1,
      title: "El jardín de la comunidad",
      excerpt: "Una historia sobre cómo un pequeño espacio verde transformó nuestro vecindario, uniendo a las familias en torno al cuidado de la tierra y las plantas.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop&auto=format",
      category: "Comunidad",
      date: "15 de Octubre, 2024",
      readTime: 5,
      views: 124
    },
    {
      id: 2,
      title: "Aprendiendo juntos",
      excerpt: "Descubre cómo los niños del barrio encontraron la alegría de aprender compartiendo conocimientos y experiencias, creando un círculo de apoyo mutuo.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&auto=format",
      category: "Aprendizaje",
      date: "12 de Octubre, 2024",
      readTime: 7,
      views: 89
    },
    {
      id: 3,
      title: "Recetas de familia",
      excerpt: "Las recetas de la abuela no solo son comida, son memoria, tradición y amor. Esta es la historia de cómo la cocina nos conecta con nuestras raíces.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&auto=format",
      category: "Familia",
      date: "8 de Octubre, 2024",
      readTime: 4,
      views: 156
    },
    {
      id: 4,
      title: "Historias bajo el árbol",
      excerpt: "Cada tarde, bajo la sombra del gran árbol del parque, compartimos cuentos e historias que han pasado de generación en generación.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&auto=format",
      category: "Naturaleza",
      date: "5 de Octubre, 2024",
      readTime: 6,
      views: 203
    },
    {
      id: 5,
      title: "La biblioteca viajera",
      excerpt: "Un carrito de libros que recorre el barrio, llevando historias a cada rincón y despertando la imaginación de pequeños y grandes.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&auto=format",
      category: "Aprendizaje",
      date: "1 de Octubre, 2024",
      readTime: 8,
      views: 178
    },
    {
      id: 6,
      title: "Unidos por un sueño",
      excerpt: "Cuando la comunidad se une por una causa común, los sueños se hacen realidad. Esta es nuestra historia de perseverancia y esperanza.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&auto=format",
      category: "Comunidad",
      date: "28 de Septiembre, 2024",
      readTime: 10,
      views: 245
    },
  ];

  const categories = ["Todas", "Comunidad", "Familia", "Aprendizaje", "Naturaleza"];

  const filteredStories = stories.filter((story) => {
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "Todas" || story.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial="hidden"
      animate="visible"
      variants={fadeIn()}
      transition={{ duration: 0.5 }}
    >
      <Header />
      
      {/* Header Section */}
      <motion.header 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 mt-20"
        initial="hidden"
        animate="visible"
        variants={fadeIn()}
      >
        <div className="container mx-auto text-center space-y-6">
          {/* Breadcrumb */}
          <motion.nav className="flex items-center justify-center gap-2 text-sm text-muted-foreground" variants={fadeInUp(0.05)}>
            <button 
              onClick={() => navigate("/")}
              className="hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <span>/</span>
            <span className="text-foreground">Historias</span>
          </motion.nav>
          
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            variants={fadeInUp(0.1)}
          >
            Nuestras <span className="text-primary">Historias</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp(0.2)}
          >
            Un espacio cálido donde compartimos experiencias, aprendizajes y momentos que nos conectan como comunidad. 
            Cada historia es un tesoro que enriquece la memoria colectiva de nuestro barrio.
          </motion.p>
        </div>
      </motion.header>

      {/* Search and Filter Section */}
      {/* Search and Filter Section removed as requested */}

      {/* Stories Grid */}
      <motion.main 
        className="py-16 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={fadeIn()}
      >
        <div className="container mx-auto">
          {filteredStories.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerChildren(0.15, 0.1)}
            >
              {filteredStories.map((story) => (
                <motion.div key={story.id} variants={fadeInUp()}>
                  <Card className="group hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <div className="relative h-56 overflow-hidden">
                      <motion.img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                          {story.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{story.date}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span>{story.readTime} min lectura</span>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{story.views}</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {story.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed line-clamp-3">
                        {story.excerpt}
                      </p>
                    </CardContent>
                    <CardFooter className="px-6 pb-6">
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        onClick={() => {
                          // Navigate to individual story page
                          console.log(`Reading story ${story.id}`);
                        }}
                      >
                        Continuar leyendo
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="text-center py-20"
              variants={fadeInUp()}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  No se encontraron historias
                </h3>
                <p className="text-lg text-muted-foreground max-w-md mx-auto">
                  No hay historias que coincidan con tu búsqueda. Intenta con otros términos o categorías.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("Todas");
                  }}
                >
                  Limpiar filtros
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.main>

      {/* Call to Action Footer */}
      <motion.footer 
        className="mt-20 py-16 bg-muted/30 border-t border-border"
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={fadeIn()}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.h3 
            className="text-2xl font-bold text-foreground"
            variants={fadeInUp(0.1)}
          >
            ¿Tienes una historia para compartir?
          </motion.h3>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp(0.2)}
          >
            Únete a nuestra comunidad de narradores y comparte tus experiencias, recuerdos y momentos especiales que han marcado la vida en nuestro barrio.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={fadeInUp(0.3)}>
            <Button 
              size="lg" 
              className="px-8"
              onClick={() => navigate("/compartir-historia")}
            >
              Compartir mi historia
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="px-8"
              onClick={() => navigate("/")}
            >
              Volver al inicio
            </Button>
          </motion.div>
        </div>
      </motion.footer>
      
      <Footer />
    </motion.div>
  );
};

export default Stories;