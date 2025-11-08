import { useEffect, useMemo, useState } from "react";
import { Calendar, Eye } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, pageTransition, staggerChildren, viewportSettings } from "@/lib/motion";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useStories, estimateReadTime, estimateViews } from "@/hooks/useStories";

const Stories = () => {
  const navigate = useNavigate();
  const { stories, isLoading, errorMessage, categories } = useStories();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todas");

  useEffect(() => {
    if (!categories.includes(activeCategory)) {
      setActiveCategory("Todas");
    }
  }, [categories, activeCategory]);

  const dateFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat("es-PE", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    []
  );

  const formattedStories = useMemo(
    () =>
      stories.map((story) => {
        const parsedDate = new Date(story.publishedAt);
        const formattedDate = Number.isNaN(parsedDate.getTime())
          ? story.publishedAt
          : dateFormatter.format(parsedDate);

        return {
          ...story,
          formattedDate,
          readTime: estimateReadTime(story.content),
          views: estimateViews(story.content),
        };
      }),
    [stories, dateFormatter]
  );

  const filteredStories = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return formattedStories.filter((story) => {
      const matchesSearch =
        !normalizedQuery ||
        story.title.toLowerCase().includes(normalizedQuery) ||
        story.summary.toLowerCase().includes(normalizedQuery);

      const matchesCategory =
        activeCategory === "Todas" || story.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [formattedStories, searchQuery, activeCategory]);

  const skeletonItems = useMemo(() => Array.from({ length: 6 }), []);
  const hasNoResults = !isLoading && filteredStories.length === 0;

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
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
          {errorMessage && (
            <motion.div
              className="mb-6 rounded-2xl border border-destructive/30 bg-destructive/5 px-6 py-4 text-destructive"
              variants={fadeInUp()}
            >
              {errorMessage}
            </motion.div>
          )}

          {isLoading && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerChildren(0.08, 0.04)}
            >
              {skeletonItems.map((_, index) => (
                <motion.div key={`skeleton-${index}`} variants={fadeInUp()}>
                  <Card className="overflow-hidden rounded-3xl border border-border/40 bg-white/70 shadow-sm">
                    <div className="h-56 w-full bg-muted animate-pulse" />
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="h-4 w-24 rounded bg-muted/70 animate-pulse" />
                        <div className="h-4 w-32 rounded bg-muted/60 animate-pulse" />
                      </div>
                      <div className="space-y-3">
                        <div className="h-6 w-3/4 rounded bg-muted/70 animate-pulse" />
                        <div className="h-3 rounded bg-muted/60 animate-pulse" />
                        <div className="h-3 w-11/12 rounded bg-muted/60 animate-pulse" />
                        <div className="h-3 w-5/6 rounded bg-muted/60 animate-pulse" />
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 pb-6">
                      <div className="h-10 w-full rounded-lg bg-muted/60 animate-pulse" />
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          {!isLoading && !hasNoResults && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerChildren(0.08, 0.04)}
            >
              {filteredStories.map((story) => (
                <motion.div key={story.slug} variants={fadeInUp()}>
                  <Card className="group overflow-hidden rounded-3xl border border-border/60 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-soft)]">
                    <div className="relative h-56 overflow-hidden">
                      <motion.img
                        src={story.image}
                        alt={story.title}
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute top-4 right-4">
                        <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                          {story.category ?? "Historias"}
                        </span>
                      </div>
                    </div>
                    <CardContent className="space-y-4 p-6">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span className="capitalize">{story.formattedDate}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span>{story.readTime} min lectura</span>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            <span>{story.views}</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="line-clamp-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                        {story.title}
                      </h3>
                      <p className="line-clamp-3 text-muted-foreground leading-relaxed">
                        {story.summary}
                      </p>
                    </CardContent>
                    <CardFooter className="px-6 pb-6">
                      <Button
                        variant="outline"
                        className="w-full transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                        onClick={() => navigate(`/blog/${story.slug}`)}
                      >
                        Continuar leyendo
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          {hasNoResults && (
            <motion.div className="py-20 text-center" variants={fadeInUp()}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">No se encontraron historias</h3>
                <p className="mx-auto max-w-md text-lg text-muted-foreground">
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