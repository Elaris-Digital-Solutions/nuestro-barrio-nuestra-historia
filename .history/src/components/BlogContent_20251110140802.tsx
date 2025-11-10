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

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        elements.push(
          <motion.div
            key={`text-${key++}`}
            className="prose prose-lg max-w-none"
            variants={fadeInUp()}
          >
            {currentParagraph.map((para, pIndex) => (
              <p key={pIndex} className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
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
        const headingText = trimmed.replace('## ', '');
        elements.push(
          <motion.h2
            key={`heading-${key++}`}
            className="text-3xl sm:text-4xl font-bold text-foreground mt-12 mb-6"
            variants={fadeInUp()}
          >
            {headingText}
          </motion.h2>
        );
        
        // Agregar imagen después de algunos headings
        if (imageIndex < images.length && (index > 10 || elements.length > 3)) {
          elements.push(
            <motion.figure
              key={`image-${key++}`}
              className="my-10"
              variants={fadeInUp()}
            >
              <div className="overflow-hidden rounded-xl shadow-md">
                <img
                  src={images[imageIndex]}
                  alt={`Ilustración para ${headingText}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.figure>
          );
          imageIndex++;
        }
      }
      // Quote (buscar líneas que contengan comillas)
      else if (trimmed.startsWith('"') || (trimmed.includes('" -') && trimmed.endsWith('.'))) {
        flushParagraph();
        
        const quoteParts = trimmed.split('" -');
        const quoteText = quoteParts[0].replace(/^"/, '');
        const author = quoteParts[1]?.trim();
        
        elements.push(
          <motion.blockquote
            key={`quote-${key++}`}
            className="border-l-4 border-primary bg-muted/30 pl-6 pr-6 py-6 my-8 rounded-r-lg"
            variants={fadeInUp()}
          >
            <p className="text-lg sm:text-xl text-foreground italic mb-3">
              "{quoteText}"
            </p>
            {author && (
              <footer className="text-sm text-muted-foreground font-medium">
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

    return elements;
  };

  return <>{processContent()}</>;
};

export default BlogContent;
