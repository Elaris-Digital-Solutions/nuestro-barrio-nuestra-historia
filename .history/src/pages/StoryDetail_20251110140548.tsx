import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, Eye, Tag, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, fadeInUp, pageTransition, staggerChildren } from "@/lib/motion";

// Datos de ejemplo - en producción esto vendría de una API o base de datos
const storyData = {
  id: "respirar-futuro-la-oroya",
  title: "Respirar Futuro en La Oroya",
  category: "Comunidad",
  publishedAt: "2 de Noviembre, 2024",
  readTime: "3 min lectura",
  views: 120,
  coverImage: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1600&h=800&fit=crop",
  summary: "Nuestro proyecto en La Oroya reconstruye el vínculo entre comunidad y territorio a través de conversaciones significativas.",
  
  content: [
    {
      type: "text",
      content: `Nuestro proyecto en La Oroya reconstruye el vínculo entre comunidad y territorio. Conversamos con vecinas y vecinos sobre memorias, miedos y esperanzas, y mapeamos estos sentimientos para crear un retrato colectivo de lo que significa vivir, resistir y soñar en este lugar tan especial.

A través de talleres participativos y encuentros comunitarios, hemos creado un espacio donde las voces de La Oroya pueden ser escuchadas, donde las historias personales se entrelazan con la historia colectiva, y donde el pasado dialoga con las aspiraciones de futuro.`
    },
    {
      type: "heading",
      content: "El Proceso de Reconstrucción del Vínculo"
    },
    {
      type: "text",
      content: `Durante meses, nuestro equipo trabajó codo a codo con los habitantes de La Oroya, creando un ambiente de confianza y escucha activa. Cada conversación era una puerta abierta a mundos personales llenos de matices, dolores y alegrías que rara vez encuentran espacio en las narrativas oficiales sobre la ciudad.

Los talleres se convirtieron en espacios de sanación colectiva, donde las personas no solo compartían sus experiencias, sino que también encontraban eco en las historias de sus vecinos. Descubrimos que muchos de los miedos eran compartidos, pero también lo eran las esperanzas y los sueños de un futuro mejor.`
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=600&fit=crop",
      caption: "Taller comunitario en La Oroya donde vecinos comparten sus experiencias"
    },
    {
      type: "quote",
      content: "Este proyecto nos dio voz. Por primera vez, alguien quería escuchar nuestras historias sin juzgar, sin intentar cambiarnos. Simplemente estar y compartir.",
      author: "María, vecina de La Oroya"
    },
    {
      type: "heading",
      content: "Mapeando Memorias y Esperanzas"
    },
    {
      type: "text",
      content: `El mapeo colectivo fue una de las herramientas más poderosas del proyecto. Utilizando metodologías participativas, invitamos a los habitantes a marcar en un mapa gigante de La Oroya los lugares que guardaban sus mejores recuerdos, aquellos que les generaban temor, y los espacios donde imaginaban un futuro próspero.

Lo que emergió fue fascinante: un mosaico de percepciones que revelaba cómo el territorio no es solo un espacio físico, sino un contenedor de emociones, relaciones y posibilidades. La plaza donde se jugaba de niño, el río que ahora genera preocupación ambiental, la esquina donde se sueña con un centro comunitario.`
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&h=600&fit=crop",
      caption: "Mapa colaborativo creado por la comunidad de La Oroya"
    },
    {
      type: "text",
      content: `Estos mapas se convirtieron en herramientas de diálogo. Funcionarios municipales, líderes comunitarios y habitantes se reunieron alrededor de ellos para discutir prioridades, entender perspectivas diferentes y co-crear soluciones. El mapa dejó de ser un simple documento geográfico para convertirse en un instrumento de transformación social.`
    },
    {
      type: "quote",
      content: "Ver nuestras historias en el mapa me hizo darme cuenta de que no estaba sola en mis preocupaciones. Todos queremos lo mismo: un lugar donde nuestros hijos puedan crecer seguros y felices.",
      author: "Rosa, participante del taller"
    },
    {
      type: "heading",
      content: "Impacto y Reflexiones"
    },
    {
      type: "text",
      content: `El proyecto "Respirar Futuro en La Oroya" ha demostrado que cuando se crean espacios genuinos de escucha y participación, las comunidades tienen la capacidad de identificar sus propias necesidades y co-crear soluciones sostenibles.

Más allá de los talleres y los mapas, lo más valioso ha sido el fortalecimiento del tejido comunitario. Vecinos que antes solo se saludaban de lejos ahora trabajan juntos en iniciativas locales. Se ha formado una red de solidaridad que trasciende el proyecto mismo.

Este es apenas el comienzo. Las semillas plantadas durante estos meses seguirán germinando en forma de proyectos comunitarios, espacios de encuentro y acciones colectivas que buscan construir un futuro donde La Oroya pueda respirar tranquila, con orgullo de su pasado y esperanza en su porvenir.`
    }
  ],
  
  relatedStories: [
    {
      id: "almacen-don-jose",
      title: "El Almacén de Don José",
      date: "15 de Octubre, 2024",
      category: "Comercio Local",
      excerpt: "Durante más de 40 años, Don José ha sido el corazón del barrio. Su almacén no solo vende productos, sino que guarda las historias de generaciones...",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop",
      readTime: "4 min lectura",
      views: 145
    },
    {
      id: "plaza-que-nos-une",
      title: "La Plaza que nos Une",
      date: "8 de Octubre, 2024",
      category: "Espacios Públicos",
      excerpt: "La plaza central ha sido testigo de celebraciones, encuentros y momentos inolvidables. Vecinos comparten sus recuerdos más preciados...",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      readTime: "5 min lectura",
      views: 98
    },
    {
      id: "tradiciones-perduran",
      title: "Tradiciones que Perduran",
      date: "1 de Octubre, 2024",
      category: "Cultura",
      excerpt: "Las fiestas patronales siguen siendo el evento más esperado del año. Descubre cómo se han mantenido vivas estas tradiciones...",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
      readTime: "6 min lectura",
      views: 203
    }
  ]
};

const StoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // En producción, aquí cargarías la historia basada en el ID
  // const story = fetchStoryById(id);

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
          <span className="text-foreground">{storyData.title}</span>
        </div>
      </motion.nav>

      {/* Article Header */}
      <motion.article
        className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20"
        initial="hidden"
        animate="visible"
        variants={staggerChildren(0.1)}
      >
        {/* Title and Meta */}
        <motion.div className="max-w-4xl mx-auto mb-8" variants={fadeInUp(0.1)}>
          <motion.div className="mb-4 flex items-center gap-3 flex-wrap" variants={fadeInUp(0.15)}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <Tag className="w-3 h-3" />
              {storyData.category}
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            variants={fadeInUp(0.2)}
          >
            {storyData.title}
          </motion.h1>

          <motion.div
            className="flex items-center gap-6 flex-wrap text-muted-foreground"
            variants={fadeInUp(0.25)}
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{storyData.publishedAt}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{storyData.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span className="text-sm">{storyData.views} vistas</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Cover Image */}
        <motion.div
          className="w-full max-w-6xl mx-auto mb-12 overflow-hidden rounded-2xl shadow-lg"
          variants={fadeInUp(0.3)}
        >
          <img
            src={storyData.coverImage}
            alt={storyData.title}
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerChildren(0.08)}
        >
          {storyData.content.map((block, index) => {
            switch (block.type) {
              case "heading":
                return (
                  <motion.h2
                    key={index}
                    className="text-3xl sm:text-4xl font-bold text-foreground mt-12 mb-6"
                    variants={fadeInUp()}
                  >
                    {block.content}
                  </motion.h2>
                );

              case "text":
                return (
                  <motion.div
                    key={index}
                    className="prose prose-lg max-w-none"
                    variants={fadeInUp()}
                  >
                    {block.content.split("\n\n").map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </motion.div>
                );

              case "image":
                return (
                  <motion.figure
                    key={index}
                    className="my-10"
                    variants={fadeInUp()}
                  >
                    <div className="overflow-hidden rounded-xl shadow-md">
                      <img
                        src={block.src}
                        alt={block.caption}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    {block.caption && (
                      <figcaption className="text-sm text-muted-foreground text-center mt-3 italic">
                        {block.caption}
                      </figcaption>
                    )}
                  </motion.figure>
                );

              case "quote":
                return (
                  <motion.blockquote
                    key={index}
                    className="border-l-4 border-primary bg-muted/30 pl-6 pr-6 py-6 my-8 rounded-r-lg"
                    variants={fadeInUp()}
                  >
                    <p className="text-lg sm:text-xl text-foreground italic mb-3">
                      "{block.content}"
                    </p>
                    {block.author && (
                      <footer className="text-sm text-muted-foreground font-medium">
                        — {block.author}
                      </footer>
                    )}
                  </motion.blockquote>
                );

              default:
                return null;
            }
          })}
        </motion.div>

        {/* Back Button */}
        <motion.div className="max-w-3xl mx-auto mt-12" variants={fadeInUp()}>
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
            {storyData.relatedStories.map((story) => (
              <motion.div key={story.id} variants={fadeInUp()}>
                <Card
                  className="group hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full cursor-pointer"
                  onClick={() => handleRelatedStoryClick(story.id)}
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <motion.img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-background/90 backdrop-blur-sm text-foreground rounded-full text-xs font-medium">
                        <Tag className="w-3 h-3" />
                        {story.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        <span>{story.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        <span>{story.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Eye className="w-3 h-3" />
                        <span>{story.views}</span>
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {story.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3">
                      {story.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

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
