import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ImageUpload from "@/components/ImageUpload";
import RichTextEditor from "@/components/RichTextEditor";
import { Loader2, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, pageTransition } from "@/lib/motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const storySchema = z.object({
  title: z.string().min(3, "El título debe tener al menos 3 caracteres").max(100, "El título debe tener menos de 100 caracteres"),
  category: z.string().min(1, "Selecciona una categoría"),
  content: z.string().min(50, "La historia debe tener al menos 50 caracteres"),
});

type StoryFormData = z.infer<typeof storySchema>;

const ShareStory = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [content, setContent] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<StoryFormData>({
    resolver: zodResolver(storySchema),
  });

  const categoryValue = watch("category");

  const handleImageSelect = (file: File) => {
    setSelectedImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  const handleContentChange = (value: string) => {
    setContent(value);
    setValue("content", value);
  };

  const onFormSubmit = async (data: StoryFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate image upload to Cloudinary
      if (selectedImage) {
        setIsImageUploading(true);
        // Here you would upload to Cloudinary/Supabase
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsImageUploading(false);
      }
      
      // Here you would submit the story data
      console.log("Story submitted:", { ...data, image: selectedImage });
      
      // Navigate back to stories page after successful submission
      navigate("/historias");
    } catch (error) {
      console.error("Error submitting story:", error);
    } finally {
      setIsSubmitting(false);
      setIsImageUploading(false);
    }
  };

  const handleCancel = () => {
    navigate("/historias");
  };

  const categories = ["Comunidad", "Familia", "Aprendizaje", "Naturaleza"];

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      <Header />
      
      {/* Header */}
      <motion.header 
        className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30 border-b border-border mt-20"
        initial="hidden"
        animate="visible"
        variants={fadeIn()}
      >
        <div className="container mx-auto">
          <div className="space-y-6">
            {/* Breadcrumb */}
            <motion.nav className="flex items-center gap-2 text-sm text-muted-foreground" variants={fadeInUp(0.1)}>
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
              <span className="text-foreground">Compartir Historia</span>
            </motion.nav>
            
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/historias")}
                className="rounded-full"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <motion.h1 
                  className="text-3xl sm:text-4xl font-bold text-foreground"
                  variants={fadeInUp(0.1)}
                >
                  Comparte tu <span className="text-primary">Historia</span>
                </motion.h1>
                <motion.p 
                  className="text-muted-foreground mt-2"
                  variants={fadeInUp(0.2)}
                >
                  Tu historia enriquece la memoria colectiva de nuestro barrio
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Form */}
      <motion.main 
        className="py-12 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn()}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="bg-card rounded-2xl shadow-[var(--shadow-soft)] p-8"
            variants={fadeInUp(0.2)}
          >
            <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-8">
              {/* Title Field */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-base font-medium text-foreground">
                  Título de tu Historia
                </Label>
                <Input
                  id="title"
                  {...register("title")}
                  placeholder="Escribe un título llamativo..."
                  className="text-lg h-12"
                />
                {errors.title && (
                  <p className="text-sm text-destructive">{errors.title.message}</p>
                )}
              </div>

              {/* Category Field */}
              <div className="space-y-2">
                <Label htmlFor="category" className="text-base font-medium text-foreground">
                  Categoría
                </Label>
                <Select
                  value={categoryValue}
                  onValueChange={(value) => setValue("category", value)}
                >
                  <SelectTrigger className="w-full h-12">
                    <SelectValue placeholder="Selecciona una categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.category && (
                  <p className="text-sm text-destructive">{errors.category.message}</p>
                )}
              </div>

              {/* Image Upload */}
              <div className="space-y-2">
                <Label className="text-base font-medium text-foreground">
                  Sube una imagen para tu historia
                </Label>
                <ImageUpload
                  onImageSelect={handleImageSelect}
                  imagePreview={imagePreview}
                  onRemoveImage={handleRemoveImage}
                  isUploading={isImageUploading}
                />
              </div>

              {/* Rich Text Editor */}
              <div className="space-y-2">
                <Label className="text-base font-medium text-foreground">
                  Tu Historia
                </Label>
                <RichTextEditor
                  value={content}
                  onChange={handleContentChange}
                  placeholder="Comparte tu historia con la comunidad..."
                />
                {errors.content && (
                  <p className="text-sm text-destructive">{errors.content.message}</p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting || isImageUploading}
                  className="flex-1 h-12 text-base"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Publicando...
                    </>
                  ) : (
                    "Publicar Historia"
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCancel}
                  disabled={isSubmitting || isImageUploading}
                  className="flex-1 h-12 text-base"
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.main>
      
      <Footer />
    </motion.div>
  );
};

export default ShareStory;