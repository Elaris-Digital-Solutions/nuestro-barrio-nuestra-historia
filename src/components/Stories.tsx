import { useMemo } from "react";
import { Calendar } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInFrom, sectionReveal, staggerChildren, viewportSettings } from "@/lib/motion";
import { useNavigate } from "react-router-dom";
import { useStories } from "@/hooks/useStories";

const dateFormatter = new Intl.DateTimeFormat("es-PE", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const Stories = () => {
  const navigate = useNavigate();
  const { stories, isLoading, errorMessage } = useStories();

  const skeletonItems = useMemo(() => Array.from({ length: 3 }), []);
  const featuredStories = useMemo(() => stories.slice(0, 3), [stories]);
  const formattedStories = useMemo(
    () =>
      featuredStories.map((story) => {
        const parsed = new Date(story.publishedAt);
        const formatted = Number.isNaN(parsed.getTime())
          ? story.publishedAt
          : dateFormatter.format(parsed);

        return {
          ...story,
          formattedDate: formatted,
        };
      }),
    [featuredStories]
  );

  const shouldShowEmptyState = !isLoading && !errorMessage && formattedStories.length === 0;

  return (
    <motion.section
      id="historias"
      className="py-12 sm:py-16 lg:py-20 bg-[#FBF0ED]"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={sectionReveal({ delayChildren: 0.05, staggerChildren: 0.08 })}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={staggerChildren({ stagger: 0.08, delayChildren: 0.04 })}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            variants={fadeInFrom("up", { distance: 18 })}
          >
            Nuestras<span className="text-primary"> Historias</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4"
            variants={fadeInFrom("up", { distance: 16 })}
          >
            Descubre las historias que dan vida a nuestro barrio
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12"
          variants={staggerChildren({ stagger: 0.08, delayChildren: 0.05 })}
        >
          {isLoading &&
            skeletonItems.map((_, index) => (
              <motion.article
                key={`skeleton-${index}`}
                variants={fadeInFrom(index % 2 === 0 ? "up" : "down", {
                  duration: 0.45,
                  distance: 14,
                })}
              >
                <Card className="flex h-full flex-col overflow-hidden rounded-3xl border border-border/40 bg-white/70 shadow-sm">
                  <div className="h-48 sm:h-56 w-full bg-muted animate-pulse" />
                  <CardContent className="flex flex-1 flex-col gap-3 p-4 sm:p-6">
                    <div className="h-4 w-28 rounded-full bg-muted/80 animate-pulse" />
                    <div className="h-6 w-3/4 rounded bg-muted/70 animate-pulse" />
                    <div className="space-y-2">
                      <div className="h-3 rounded bg-muted/60 animate-pulse" />
                      <div className="h-3 w-11/12 rounded bg-muted/60 animate-pulse" />
                      <div className="h-3 w-5/6 rounded bg-muted/60 animate-pulse" />
                    </div>
                  </CardContent>
                  <CardFooter className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <div className="h-4 w-20 rounded bg-muted/70 animate-pulse" />
                  </CardFooter>
                </Card>
              </motion.article>
            ))}

          {!isLoading &&
            formattedStories.map((story, index) => (
              <motion.article
                key={story.slug}
                variants={fadeInFrom(index % 2 === 0 ? "up" : "down", {
                  duration: 0.48,
                  distance: 18,
                })}
              >
                <Card className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-soft)]">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <motion.img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="flex flex-1 flex-col space-y-3 p-4 sm:p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="capitalize">{story.formattedDate}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {story.title}
                    </h3>
                    <p className="story-excerpt text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {story.summary}
                    </p>
                  </CardContent>
                  <CardFooter className="mt-auto px-4 sm:px-6 pb-4 sm:pb-6">
                    <Button
                      variant="link"
                      className="h-auto p-0 text-base font-semibold text-primary hover:text-primary/80 touch-manipulation"
                      onClick={() => navigate(`/blog/${story.slug}`)}
                    >
                      Leer más →
                    </Button>
                  </CardFooter>
                </Card>
              </motion.article>
            ))}

          {shouldShowEmptyState && (
            <motion.div
              className="col-span-full rounded-3xl border border-dashed border-primary/40 bg-white/70 p-8 text-center text-muted-foreground"
              variants={fadeInFrom("up", { duration: 0.45, distance: 14 })}
            >
              Pronto compartiremos nuevas historias desde el territorio.
            </motion.div>
          )}

          {errorMessage && !isLoading && (
            <motion.div
              className="col-span-full rounded-3xl border border-destructive/30 bg-destructive/5 p-6 text-center text-destructive"
              variants={fadeInFrom("up", { duration: 0.45, distance: 14 })}
            >
              {errorMessage}
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className="text-center"
          variants={fadeInFrom("up", { duration: 0.5, distance: 16 })}
        >
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
