import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

interface BlogContentProps {
  content: string;
  images?: string[];
}

const BlogContent = ({ content, images = [] }: BlogContentProps) => {
  return (
    <div className="space-y-6">
      <motion.div
        className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary"
        variants={fadeInUp()}
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {/* Fallback for displaying images if they aren't embedded in the HTML content */}
      {images.length > 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {images.slice(1).map((img, idx) => (
            <motion.figure
              key={idx}
              variants={fadeInUp()}
              className="rounded-xl overflow-hidden shadow-md"
            >
              <img src={img} alt="Imagen de la historia" className="w-full h-auto object-cover" />
            </motion.figure>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogContent;
