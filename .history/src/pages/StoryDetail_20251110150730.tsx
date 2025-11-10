import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, Eye, Tag, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogContent from "@/components/BlogContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, fadeInUp, pageTransition, staggerChildren } from "@/lib/motion";
import { useStoryBySlug, useStories, estimateReadTime, estimateViews } from "@/hooks/useStories";

const StoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { story, isLoading, errorMessage } = useStoryBySlug(id);
  const { stories } = useStories();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Si no existe la historia, mostrar error o redirigir
  useEffect(() => {
    if (!isLoading && !story && !errorMessage) {
      navigate("/historias");
    }
  }, [isLoading, story, errorMessage, navigate]);

  if (isLoading) {
    return (
      <motion.div
        className="min-h-screen bg-background"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={pageTransition}
      >
        <Header />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-20">
          <div className="max-w-4xl mx-auto space-y-8 animate-pulse">
            <div className="h-12 bg-muted rounded w-3/4"></div>
            <div className="h-8 bg-muted rounded w-1/2"></div>
            <div className="h-96 bg-muted rounded"></div>
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
              <div className="h-4 bg-muted rounded w-4/6"></div>
            </div>
          </div>
        </div>
        <Footer />
      </motion.div>
    );
  }

  if (!story) {
    return null;
  }

  const readTime = `${estimateReadTime(story.content)} min lectura`;
  const views = estimateViews(story.content);

  // Obtener historias relacionadas (misma categoría o las más recientes)
  const relatedStories = stories
    .filter((s) => s.slug !== story.slug)
    .filter((s) => s.category === story.category || stories.indexOf(s) < 3)
    .slice(0, 3)
    .map((s) => ({
      id: s.slug,
      title: s.title,
      date: s.publishedAt,
      category: s.category,
      excerpt: s.summary,
      image: s.image,
      readTime: `${estimateReadTime(s.content)} min lectura`,
      views: estimateViews(s.content),
    }));

  const handleShareStoryClick = () => {
    navigate("/compartir-historia");
  };

  const handleRelatedStoryClick = (storyId: string) => {
    navigate(`/historias/${storyId}`);
  };

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      <Header />

      {/* Breadcrumb */}
      <motion.nav
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <button
            onClick={() => navigate("/")}
            className="hover:text-primary transition-colors"
          >
            Inicio
          </button>
          <span>/</span>
          <button
            onClick={() => navigate("/historias")}
            className="hover:text-primary transition-colors"
          >
            Historias
          </button>
          <span>/</span>
          <span className="text-foreground">{story.title}</span>
        </div>
      </motion.nav>

      {/* Article Header */}
      <motion.article
        className="pb-20"
        initial="hidden"
        animate="visible"
        variants={staggerChildren(0.1)}
      >
        {/* Title and Meta - Centered */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <motion.div className="max-w-4xl mx-auto text-center" variants={fadeInUp(0.1)}>
            {/* Category Badge */}
            <motion.div className="mb-6 flex justify-center" variants={fadeInUp(0.15)}>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <Tag className="w-4 h-4" />
                {story.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
              variants={fadeInUp(0.2)}
            >
              {story.title}
            </motion.h1>

            {/* Metadata */}
            <motion.div
              className="flex items-center gap-4 sm:gap-6 justify-center flex-wrap text-muted-foreground"
              variants={fadeInUp(0.25)}
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{story.publishedAt}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span className="text-sm">{views} vistas</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Cover Image - HERO Style Full Width */}
        <motion.div
          className="w-full mb-16 overflow-hidden"
          variants={fadeInUp(0.3)}
        >
          <img
            src={story.images && story.images.length > 0 ? story.images[0] : story.image}
            alt={story.title}
            className="w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="max-w-4xl mx-auto space-y-8 px-4"
          variants={staggerChildren(0.08)}
        >
          <BlogContent content={story.content} images={story.images} />
        </motion.div>

        {/* Back Button */}
        <motion.div className="max-w-4xl mx-auto mt-12 px-4" variants={fadeInUp()}>
          <Button
            variant="outline"
            onClick={() => navigate("/historias")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Historias
          </Button>
        </motion.div>
      </motion.article>

      {/* Related Stories */}
      {relatedStories.length > 0 && (
        <motion.section
          className="bg-muted/30 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn()}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-center mb-12"
              variants={fadeInUp(0.1)}
            >
              Artículos <span className="text-primary">Relacionados</span>
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              variants={staggerChildren(0.1)}
            >
              {relatedStories.map((relatedStory) => (
                <motion.div key={relatedStory.id} variants={fadeInUp()}>
                  <Card
                    className="group hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full cursor-pointer"
                    onClick={() => handleRelatedStoryClick(relatedStory.id)}
                  >
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <motion.img
                        src={relatedStory.image}
                        alt={relatedStory.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-background/90 backdrop-blur-sm text-foreground rounded-full text-xs font-medium">
                          <Tag className="w-3 h-3" />
                          {relatedStory.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-4 sm:p-6 space-y-3">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          <span>{relatedStory.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3" />
                          <span>{relatedStory.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Eye className="w-3 h-3" />
                          <span>{relatedStory.views}</span>
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {relatedStory.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3">
                        {relatedStory.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Share Your Story CTA */}
      <motion.section
        className="py-20 bg-primary/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn()}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div className="max-w-3xl mx-auto space-y-6" variants={staggerChildren(0.12)}>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground"
              variants={fadeInUp(0.1)}
            >
              ¿Tienes una historia para <span className="text-primary">compartir</span>?
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
              variants={fadeInUp(0.2)}
            >
              Únete a nuestra comunidad de narradores y comparte tus experiencias, recuerdos y momentos especiales
              que han marcado la vida en nuestro barrio.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              variants={fadeInUp(0.3)}
            >
              <Button
                size="lg"
                onClick={handleShareStoryClick}
                className="px-8 py-6 text-lg"
              >
                Compartir mi historia
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/")}
                className="px-8 py-6 text-lg"
              >
                Volver al inicio
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </motion.div>
  );
};

export default StoryDetail;
