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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import MediaEmbed from "@/components/MediaEmbed";
import { Badge } from "@/components/ui/badge";
import { Info, Eye, Send } from "lucide-react";
import ImageUpload from "@/components/ImageUpload";
import RichTextEditor from "@/components/RichTextEditor";
import { Loader2, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, pageTransition } from "@/lib/motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

const storySchema = z.object({
  title: z.string().min(3, "El título debe tener al menos 3 caracteres").max(100, "El título debe tener menos de 100 caracteres"),
  category: z.string().min(1, "Selecciona una categoría"),
  customCategory: z.string().optional(),
  content: z.string().min(50, "La historia debe tener al menos 50 caracteres"),
  mediaLink: z.string().optional().refine((val) => {
    if (!val) return true;
    const isUrl = z.string().url().safeParse(val).success;
    if (!isUrl) return false;
    const youtube = val.includes("youtube.com") || val.includes("youtu.be");
    const vimeo = val.includes("vimeo.com");
    const image = /\.(jpeg|jpg|gif|png|webp)($|\?)/i.test(val);
    return youtube || vimeo || image;
  }, "El enlace debe ser de YouTube, Vimeo o una imagen directa (jpg, png, webp)"),
}).refine((data) => {
  if (data.category === "Otra" && (!data.customCategory || data.customCategory.length < 3)) {
    return false;
  }
  return true;
}, {
  message: "Escribe una categoría válida (mínimo 3 letras)",
  path: ["customCategory"],
});

type StoryFormData = z.infer<typeof storySchema>;

const ShareStory = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [content, setContent] = useState("");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger, // Used for manual validation trigger
    getValues // Used to get values without submitting
  } = useForm<StoryFormData>({
    resolver: zodResolver(storySchema),
    defaultValues: {
      category: "",
      customCategory: "",
      mediaLink: "",
    }
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
    if (isSubmitting) return; // Prevent double submission
    setIsSubmitting(true);

    // Close preview if open
    if (isPreviewOpen) setIsPreviewOpen(false);

    try {
      let imageUrl = null;
      const finalCategory = data.category === "Otra" ? data.customCategory : data.category;

      if (selectedImage) {
        setIsImageUploading(true);
        const fileExt = selectedImage.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('story-images')
          .upload(filePath, selectedImage);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('story-images')
          .getPublicUrl(filePath);

        imageUrl = publicUrl;
        setIsImageUploading(false);
      }

      const slug = data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

      // Try insert with Media URL
      // If the column doesn't exist, this might fail. We should handle that gracefully if possible?
      // But we can't easily fallback without re-querying.
      // We will assume column exists as per requirements.
      const { error: insertError } = await supabase
        .from('stories')
        .insert([
          {
            title: data.title,
            category: finalCategory,
            content: data.content,
            image: imageUrl,
            slug: `${slug}-${Date.now()}`,
            summary: data.content.substring(0, 200) + '...',
            media_url: data.mediaLink || null,
            status: 'pending',
          }
        ]);

      if (insertError) {
        console.error("Supabase Error:", insertError);
        throw insertError;
      }

      setIsSuccess(true);
      window.scrollTo(0, 0);

    } catch (error: any) {
      console.error("Error submitting story:", error);
      // Fallback for missing column: try inserting without media_url
      if (error?.message?.includes("media_url") || error?.code === "42703") {
        alert("Error de base de datos: La columna 'media_url' no existe. Por favor contacta al administrador.");
      } else {
        alert("Hubo un error al enviar tu historia. Por favor intenta de nuevo.");
      }
    } finally {
      setIsSubmitting(false);
      setIsImageUploading(false);
    }
  };

  const handleManualSubmit = async () => {
    const isValid = await trigger(); // Trigger validation
    if (isValid) {
      const data = getValues();
      await onFormSubmit(data);
    }
  };

  const handleCancel = () => {
    navigate("/historias");
  };

  const categories = ["Comunidad", "Familia", "Aprendizaje", "Naturaleza"];

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card w-full max-w-lg rounded-2xl shadow-[var(--shadow-soft)] p-8 text-center space-y-6"
          >
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <Send className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">¡Gracias por compartir!</h2>
            <p className="text-muted-foreground text-lg">
              Tu historia ha sido recibida y enviada a moderación. <br />
              Una vez aprobada, será visible para toda la comunidad.
            </p>
            <Button onClick={() => navigate("/historias")} className="w-full h-12 text-base">
              Volver a Historias
            </Button>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      <Header />

      <motion.header
        className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30 border-b border-border mt-20"
        initial="hidden"
        animate="visible"
        variants={fadeIn()}
      >
        <div className="container mx-auto">
          <div className="space-y-6">
            <motion.nav className="flex items-center gap-2 text-sm text-muted-foreground" variants={fadeInUp(0.1)}>
              <button onClick={() => navigate("/")} className="hover:text-primary transition-colors">Inicio</button>
              <span>/</span>
              <button onClick={() => navigate("/historias")} className="hover:text-primary transition-colors">Historias</button>
              <span>/</span>
              <span className="text-foreground">Compartir Historia</span>
            </motion.nav>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => navigate("/historias")} className="rounded-full">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <motion.h1 className="text-3xl sm:text-4xl font-bold text-foreground" variants={fadeInUp(0.1)}>
                  Comparte tu <span className="text-primary">Historia</span>
                </motion.h1>
                <motion.p className="text-muted-foreground mt-2" variants={fadeInUp(0.2)}>
                  Tu historia enriquece la memoria colectiva de nuestro barrio
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

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
              <div className="space-y-2">
                <Label htmlFor="title" className="text-base font-medium text-foreground">Título de tu Historia</Label>
                <Input id="title" {...register("title")} placeholder="Escribe un título llamativo..." className="text-lg h-12" />
                {errors.title && <p className="text-sm text-destructive">{errors.title.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="category" className="text-base font-medium text-foreground">Categoría</Label>
                <Select
                  value={categoryValue}
                  onValueChange={(value) => {
                    setValue("category", value);
                    if (value !== "Otra") setValue("customCategory", "");
                  }}
                >
                  <SelectTrigger className="w-full h-12">
                    <SelectValue placeholder="Selecciona una categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                    <SelectItem value="Otra">Otra (Escribir nueva)</SelectItem>
                  </SelectContent>
                </Select>
                {errors.category && <p className="text-sm text-destructive">{errors.category.message}</p>}
              </div>

              {categoryValue === "Otra" && (
                <div className="space-y-2">
                  <Label htmlFor="customCategory" className="text-base font-medium text-foreground">Escribe tu categoría</Label>
                  <Input id="customCategory" {...register("customCategory")} placeholder="Ej. Deportes, Arte, Recuerdos..." className="text-lg h-12" />
                  {errors.customCategory && <p className="text-sm text-destructive">{errors.customCategory.message}</p>}
                </div>
              )}

              <div className="space-y-2">
                <Label className="text-base font-medium text-foreground">Sube una imagen para tu historia</Label>
                <ImageUpload
                  onImageSelect={handleImageSelect}
                  imagePreview={imagePreview}
                  onRemoveImage={handleRemoveImage}
                  isUploading={isImageUploading}
                />
              </div>

              <div className="space-y-2">
                <Label className="text-base font-medium text-foreground">Tu Historia</Label>
                <RichTextEditor
                  value={content}
                  onChange={handleContentChange}
                  placeholder="Comparte tu historia con la comunidad..."
                />
                {errors.content && <p className="text-sm text-destructive">{errors.content.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="mediaLink" className="text-base font-medium text-foreground">Enlace Multimedia Opcional (YouTube, Vimeo, o Imagen)</Label>
                <Input id="mediaLink" {...register("mediaLink")} placeholder="https://youtube.com/..." className="h-12" />
                <p className="text-xs text-muted-foreground">Si tienes un video o una imagen externa, pega el enlace aquí. Aparecerá al final de tu historia.</p>
                {errors.mediaLink && <p className="text-sm text-destructive">{errors.mediaLink.message}</p>}
                {watch("mediaLink") && !errors.mediaLink && (
                  <div className="mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2 mb-2">Vista previa del enlace:</span>
                    <MediaEmbed url={watch("mediaLink") || ""} className="max-w-md" />
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="rounded-lg bg-blue-50 p-4 border border-blue-100 flex gap-3 text-blue-800 text-sm">
                  <Info className="w-5 h-5 flex-shrink-0" />
                  <p><strong>Nota:</strong> Tu historia será enviada a moderación. Una vez aprobada por los administradores, será visible para toda la comunidad.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button type="button" variant="secondary" onClick={() => setIsPreviewOpen(true)} className="flex-1 h-12 text-base" disabled={isSubmitting}>
                    <Eye className="mr-2 h-5 w-5" />
                    Previsualizar
                  </Button>
                  <Button type="submit" disabled={isSubmitting || isImageUploading} className="flex-[2] h-12 text-base bg-primary hover:bg-primary/90">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Historia
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
                <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0 overflow-hidden">
                  <DialogHeader className="px-6 py-4 border-b">
                    <DialogTitle>Vista Previa de tu Historia</DialogTitle>
                    <DialogDescription>Así es como se verá tu historia una vez publicada.</DialogDescription>
                  </DialogHeader>

                  <div className="flex-1 overflow-y-auto p-6 bg-white/50">
                    <div className="max-w-3xl mx-auto space-y-8">
                      <div className="space-y-4 text-center">
                        <Badge variant="secondary" className="mb-2">
                          {watch("category") === "Otra" ? watch("customCategory") : watch("category") || "Categoría"}
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                          {watch("title") || "Sin título"}
                        </h1>
                        <div className="flex items-center justify-center text-muted-foreground text-sm gap-2">
                          <span>Por: Autores (Comunidad)</span>
                          <span>•</span>
                          <span>{new Date().toLocaleDateString()}</span>
                        </div>
                      </div>

                      {(imagePreview || selectedImage) && (
                        <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-sm">
                          <img src={imagePreview || ""} alt="Vista previa" className="w-full h-full object-cover" />
                        </div>
                      )}

                      <div className="prose max-w-none prose-lg prose-gray">
                        {content ? <div dangerouslySetInnerHTML={{ __html: content }} /> : <p className="text-muted-foreground italic text-center">Sin contenido aún...</p>}
                      </div>

                      {watch("mediaLink") && (
                        <div className="border-t pt-8">
                          <h3 className="text-lg font-semibold mb-4">Contenido Multimedia Adicional</h3>
                          <MediaEmbed url={watch("mediaLink") || ""} />
                        </div>
                      )}
                    </div>
                  </div>

                  <DialogFooter className="px-6 py-4 border-t bg-gray-50 flex-col sm:flex-row gap-3">
                    <Button variant="outline" onClick={() => setIsPreviewOpen(false)} className="w-full sm:w-auto">Seguir Editando</Button>
                    {/* Fixed: Use onClick with manual trigger instead of form submit event */}
                    <Button onClick={handleManualSubmit} disabled={isSubmitting} className="w-full sm:w-auto">
                      {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                      Enviar Ahora
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </form>
          </motion.div>
        </div>
      </motion.main>
      <Footer />
    </motion.div>
  );
};

export default ShareStory;