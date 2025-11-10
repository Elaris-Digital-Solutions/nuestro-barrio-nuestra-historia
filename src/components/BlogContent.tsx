import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

interface BlogContentProps {
  content: string;
  images?: string[];
}

const BlogContent = ({ content, images = [] }: BlogContentProps) => {
  // Procesar el contenido para identificar párrafos, headings y quotes
  const processContent = () => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let imageIndex = 1; // Comenzar desde 1 porque la imagen 0 es la cover
    let currentParagraph: string[] = [];
    let key = 0;
    let headingCount = 0;

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        elements.push(
          <motion.div
            key={`text-${key++}`}
            className="prose prose-lg max-w-none mb-6"
            variants={fadeInUp()}
          >
            {currentParagraph.map((para, pIndex) => (
              <p key={pIndex} className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 last:mb-0">
                {para}
              </p>
            ))}
          </motion.div>
        );
        currentParagraph = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Heading
      if (trimmed.startsWith('## ')) {
        flushParagraph();
        headingCount++;
        const headingText = trimmed.replace('## ', '');
        
        elements.push(
          <motion.h2
            key={`heading-${key++}`}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-12 mb-6 first:mt-0"
            variants={fadeInUp()}
          >
            {headingText}
          </motion.h2>
        );
        
        // Agregar imagen después del segundo heading para romper el texto
        if (headingCount === 2 && imageIndex < images.length) {
          elements.push(
            <motion.figure
              key={`image-${key++}`}
              className="my-8 sm:my-10 lg:float-right lg:ml-8 lg:mb-6 lg:w-[45%] lg:max-w-md"
              variants={fadeInUp()}
            >
              <div className="overflow-hidden rounded-xl shadow-md">
                <img
                  src={images[imageIndex]}
                  alt={`Ilustración para ${headingText}`}
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="text-xs sm:text-sm text-muted-foreground text-center mt-3 italic">
                Taller comunitario en La Oroya
              </figcaption>
            </motion.figure>
          );
          imageIndex++;
        }
      }
      // Quote (buscar líneas que contengan comillas)
      else if (trimmed.startsWith('"') || (trimmed.includes('" -') && trimmed.length > 50)) {
        flushParagraph();
        
        const quoteParts = trimmed.split('" -');
        const quoteText = quoteParts[0].replace(/^"/, '');
        const author = quoteParts[1]?.trim();
        
        elements.push(
          <motion.blockquote
            key={`quote-${key++}`}
            className="border-l-4 border-primary bg-primary/5 pl-6 pr-6 py-6 my-8 sm:my-10 rounded-r-lg clear-both"
            variants={fadeInUp()}
          >
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground italic leading-relaxed mb-3">
              "{quoteText}"
            </p>
            {author && (
              <footer className="text-sm sm:text-base text-muted-foreground font-medium">
                — {author}
              </footer>
            )}
          </motion.blockquote>
        );
      }
      // Empty line
      else if (trimmed === '') {
        flushParagraph();
      }
      // Regular paragraph
      else if (trimmed.length > 0) {
        currentParagraph.push(trimmed);
      }
    });

    // Flush any remaining paragraph
    flushParagraph();

    // Agregar última imagen si no se usó antes
    if (imageIndex < images.length) {
      elements.push(
        <motion.figure
          key={`image-final-${key++}`}
          className="my-10 clear-both"
          variants={fadeInUp()}
        >
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src={images[imageIndex]}
              alt="Proyecto comunitario"
              className="w-full h-auto object-cover"
            />
          </div>
          <figcaption className="text-xs sm:text-sm text-muted-foreground text-center mt-3 italic">
            Mapa colaborativo creado por la comunidad
          </figcaption>
        </motion.figure>
      );
    }

    return elements;
  };

  return (
    <div className="clear-both">
      {processContent()}
      <div className="clear-both"></div>
    </div>
  );
};

export default BlogContent;
