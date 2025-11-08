import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Eye } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  fadeIn,
  fadeInFrom,
  fadeInUp,
  pageTransition,
  sectionReveal,
  staggerChildren,
  viewportSettings,
} from "@/lib/motion";
import { estimateReadTime, estimateViews, useStories } from "@/hooks/useStories";

const splitContentIntoParagraphs = (content: string) => {
  if (!content) {
    return [];
  }

  const normalized = content.replace(/\s+/g, " ").trim();

  if (!normalized) {
    return [];
  }

  const segments = normalized.split(/(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÑ])/);

  if (segments.length === 0) {
    return [normalized];
  }

  return segments;
};

const BlogPost = () => {
  const { slug = "" } = useParams();
  const navigate = useNavigate();
  const { stories, isLoading, errorMessage } = useStories();

  const story = useMemo(
    () => stories.find((item) => item.slug === slug),
    [stories, slug]
  );

  const otherStories = useMemo(
    () => stories.filter((item) => item.slug !== slug).slice(0, 3),
    [stories, slug]
  );

  const formattedDate = useMemo(() => {
    if (!story?.publishedAt) {
      return "";
    }

    const parsed = new Date(story.publishedAt);

    if (Number.isNaN(parsed.getTime())) {
      return story.publishedAt;
    }

    return new Intl.DateTimeFormat("es-PE", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(parsed);
  }, [story?.publishedAt]);

  const readTime = useMemo(() => (story ? estimateReadTime(story.content) : 0), [story]);
  const viewsEstimate = useMemo(() => (story ? estimateViews(story.content) : 0), [story]);
  const contentParagraphs = useMemo(
    () => (story ? splitContentIntoParagraphs(story.content) : []),
    [story]
  );

  const navigateToStories = () => navigate("/historias");

  const renderContent = () => {
    if (isLoading && !story) {
      return (
        <motion.section
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
          variants={sectionReveal({ staggerChildren: 0.08 })}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="space-y-6"
            variants={staggerChildren({ stagger: 0.1 })}
          >
            <div className="h-8 w-56 rounded bg-muted animate-pulse" />
            <div className="h-10 w-3/4 rounded bg-muted animate-pulse" />
            <div className="h-10 w-5/6 rounded bg-muted animate-pulse" />
            <div className="grid grid-cols-1 gap-5">
              <div className="h-80 rounded-3xl bg-muted animate-pulse" />
              <div className="space-y-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <div key={idx} className="h-4 w-full rounded bg-muted/80 animate-pulse" />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>
      );
    }

    if (!story) {
      return (
        <motion.section
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
          variants={sectionReveal({ staggerChildren: 0.08 })}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="mx-auto max-w-3xl text-center"
            variants={fadeInFrom("up", { distance: 16 })}
          >
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              No encontramos esta historia
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Puede que haya sido movida o ya no esté disponible. Te invitamos a volver al listado
              para seguir explorando todo lo que sucede en el territorio.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button onClick={navigateToStories} size="lg" className="px-8">
                Ver todas las historias
              </Button>
              <Button variant="outline" size="lg" className="px-8" onClick={() => navigate("/")}>
                Ir al inicio
              </Button>
            </div>
          </motion.div>
        </motion.section>
      );
    }

    return (
      <>
        <motion.section
          className="relative overflow-hidden"
          variants={fadeIn()}
          initial="hidden"
          animate="visible"
        >
          <div className="relative h-[340px] w-full sm:h-[420px]">
            <motion.img
              src={story.image}
              alt={story.title}
              className="h-full w-full object-cover"
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <motion.div
                  className="max-w-3xl space-y-4 text-white drop-shadow"
                  variants={fadeInFrom("up", { distance: 18 })}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={navigateToStories}
                    className="border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Volver a historias
                  </Button>
                  <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                    {story.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-white/90">
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="capitalize">{formattedDate}</span>
                    </span>
                    <span className="inline-flex items-center gap-2">
                      ⏱️ {readTime} min lectura
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Eye className="h-4 w-4" /> {viewsEstimate} vistas estimadas
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
          variants={sectionReveal({ staggerChildren: 0.1 })}
          initial="hidden"
          animate="visible"
        >
          {errorMessage && (
            <motion.div
              className="mb-8 rounded-2xl border border-amber-400/40 bg-amber-300/10 px-6 py-4 text-amber-700"
              variants={fadeInFrom("up", { distance: 16 })}
            >
              {errorMessage}
            </motion.div>
          )}

          <motion.article
            className="mx-auto flex max-w-3xl flex-col gap-8"
            variants={fadeInFrom("up", { distance: 16 })}
          >
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {contentParagraphs.map((paragraph, index) => (
                <p key={index} className="first:font-medium first:text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 text-sm text-muted-foreground">
              Estás leyendo "{story.title}" — una historia recopilada desde el territorio para amplificar las voces de la comunidad.
            </div>
          </motion.article>
        </motion.section>

        {otherStories.length > 0 && (
          <motion.section
            className="bg-muted/30 py-16"
            variants={sectionReveal({ staggerChildren: 0.08 })}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="mb-10 text-center"
                variants={fadeInFrom("up", { distance: 18 })}
              >
                <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                  Sigue explorando el territorio
                </h2>
                <p className="mt-3 text-base text-muted-foreground">
                  Estas historias también están conectando a vecinas, vecinos y aliados.
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                variants={staggerChildren({ stagger: 0.08 })}
              >
                {otherStories.map((item) => (
                  <motion.article key={item.slug} variants={fadeInUp()}>
                    <Card className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-background/90 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-soft)]">
                      <div className="relative h-48 overflow-hidden">
                        <motion.img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover"
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                      <CardContent className="flex flex-1 flex-col space-y-3 p-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span className="capitalize">
                            {(() => {
                              const parsed = new Date(item.publishedAt);
                              if (Number.isNaN(parsed.getTime())) {
                                return item.publishedAt;
                              }
                              return new Intl.DateTimeFormat("es-PE", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              }).format(parsed);
                            })()}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                          {item.title}
                        </h3>
                        <p className="line-clamp-3 text-sm text-muted-foreground leading-relaxed">
                          {item.summary}
                        </p>
                      </CardContent>
                      <CardFooter className="px-6 pb-6">
                        <Button
                          variant="outline"
                          className="w-full transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                          onClick={() => navigate(`/blog/${item.slug}`)}
                        >
                          Leer historia
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </motion.section>
        )}
      </>
    );
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
      {renderContent()}
      <Footer />
    </motion.div>
  );
};

export default BlogPost;
