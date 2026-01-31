import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CheckCircle, XCircle, EyeOff, Save, Loader2, Calendar, Edit2 } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface StoryDetail {
    id: string;
    title: string;
    slug: string;
    created_at: string;
    content: string;
    status: "pending" | "approved" | "rejected" | "hidden";
    category: string;
    image: string | null;
    summary: string | null;
}

const AdminStoryDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [story, setStory] = useState<StoryDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editedStory, setEditedStory] = useState<Partial<StoryDetail>>({});
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (slug) fetchStory();
    }, [slug]);

    const fetchStory = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from("stories")
                .select("*")
                .eq("slug", slug)
                .single();

            if (error) throw error;
            setStory(data as StoryDetail);
            setEditedStory(data as StoryDetail);
        } catch (error) {
            console.error("Error fetching story:", error);
            toast.error("No se pudo cargar la historia");
            navigate("/admin/stories");
        } finally {
            setLoading(false);
        }
    };

    const handleStatusChange = async (newStatus: StoryDetail["status"]) => {
        if (!story) return;
        try {
            const { error } = await supabase
                .from("stories")
                .update({ status: newStatus })
                .eq("id", story.id);

            if (error) throw error;

            setStory({ ...story, status: newStatus });
            toast.success(`Historia actualizada a: ${newStatus === "approved" ? "Aprobada" : newStatus === "rejected" ? "Rechazada" : "Oculta"}`);
        } catch (error) {
            console.error("Error updating status:", error);
            toast.error("Error al actualizar el estado");
        }
    };

    const handleSaveChanges = async () => {
        if (!story) return;
        setIsSaving(true);
        try {
            const { error } = await supabase
                .from("stories")
                .update({
                    title: editedStory.title,
                    summary: editedStory.summary,
                    content: editedStory.content,
                    category: editedStory.category,
                })
                .eq("id", story.id);

            if (error) throw error;

            setStory({ ...story, ...editedStory } as StoryDetail);
            setIsEditing(false);
            toast.success("Cambios guardados correctamente");
        } catch (error) {
            console.error("Error saving changes:", error);
            toast.error("Error al guardar cambios");
        } finally {
            setIsSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    if (!story) return null;

    return (
        <div className="space-y-6 max-w-4xl mx-auto animate-fade-in">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => navigate("/admin/stories")}>
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-bold text-gray-900 line-clamp-1">{story.title}</h1>
                        <Badge
                            variant={story.status === 'approved' ? 'default' : story.status === 'rejected' ? 'destructive' : 'secondary'}
                            className={story.status === 'approved' ? 'bg-green-500 hover:bg-green-600' : ''}
                        >
                            {story.status === 'approved' ? 'Aprobada' : story.status === 'rejected' ? 'Rechazada' : story.status === 'hidden' ? 'Oculta' : 'Pendiente'}
                        </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                        <Calendar className="h-3 w-3" />
                        {format(new Date(story.created_at), "PPP p", { locale: es })}
                    </p>
                </div>
                <div className="flex gap-2">
                    {!isEditing ? (
                        <Button variant="outline" onClick={() => setIsEditing(true)}>
                            <Edit2 className="h-4 w-4 mr-2" />
                            Editar
                        </Button>
                    ) : (
                        <div className="flex gap-2">
                            <Button variant="ghost" onClick={() => {
                                setIsEditing(false);
                                setEditedStory(story);
                            }}>
                                Cancelar
                            </Button>
                            <Button onClick={handleSaveChanges} disabled={isSaving}>
                                {isSaving && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                                <Save className="h-4 w-4 mr-2" />
                                Guardar
                            </Button>
                        </div>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Main Content Column */}
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Contenido</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Título</Label>
                                {isEditing ? (
                                    <Input
                                        value={editedStory.title || ''}
                                        onChange={(e) => setEditedStory({ ...editedStory, title: e.target.value })}
                                    />
                                ) : (
                                    <p className="text-lg font-medium">{story.title}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label>Resumen</Label>
                                {isEditing ? (
                                    <Textarea
                                        value={editedStory.summary || ''}
                                        onChange={(e) => setEditedStory({ ...editedStory, summary: e.target.value })}
                                        className="min-h-[100px]"
                                    />
                                ) : (
                                    <p className="text-gray-600 italic border-l-4 border-gray-200 pl-4 py-1">
                                        {story.summary || "Sin resumen"}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label>Cuerpo de la historia</Label>
                                {isEditing ? (
                                    <Textarea
                                        value={editedStory.content || ''}
                                        onChange={(e) => setEditedStory({ ...editedStory, content: e.target.value })}
                                        className="min-h-[300px] font-mono text-sm"
                                    />
                                ) : (
                                    <div className="prose max-w-none bg-gray-50 p-4 rounded-lg text-gray-800 whitespace-pre-wrap">
                                        {story.content}
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar Column */}
                <div className="space-y-6">
                    {/* Status Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Moderación</CardTitle>
                            <CardDescription>Acciones de visibilidad</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-3">
                            {story.status !== "approved" && (
                                <Button
                                    className="w-full bg-green-600 hover:bg-green-700"
                                    onClick={() => handleStatusChange("approved")}
                                >
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    Aprobar Historia
                                </Button>
                            )}

                            {story.status !== "rejected" && (
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button variant="destructive" className="w-full">
                                            <XCircle className="h-4 w-4 mr-2" />
                                            Rechazar Historia
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>¿Rechazar esta historia?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Esta acción ocultará la historia de la vista pública. Puedes volver a aprobarla más tarde.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                            <AlertDialogAction
                                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                                onClick={() => handleStatusChange("rejected")}
                                            >
                                                Rechazar
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            )}

                            {story.status === "approved" && (
                                <Button
                                    variant="secondary"
                                    className="w-full"
                                    onClick={() => handleStatusChange("hidden")}
                                >
                                    <EyeOff className="h-4 w-4 mr-2" />
                                    Ocultar (Sin Rechazar)
                                </Button>
                            )}
                        </CardContent>
                    </Card>

                    {/* Media Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Multimedia</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {story.image ? (
                                <div className="rounded-md overflow-hidden border">
                                    <img src={story.image} alt="Portada" className="w-full h-auto object-cover" />
                                </div>
                            ) : (
                                <div className="h-32 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 text-sm">
                                    Sin imagen
                                </div>
                            )}
                            {isEditing && (
                                <div className="mt-4">
                                    <Label>URL de Imagen</Label>
                                    <Input
                                        value={editedStory.image || ''}
                                        onChange={(e) => setEditedStory({ ...editedStory, image: e.target.value })}
                                        className="mt-1"
                                    />
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Category Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Categoría</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {isEditing ? (
                                <Input
                                    value={editedStory.category || ''}
                                    onChange={(e) => setEditedStory({ ...editedStory, category: e.target.value })}
                                />
                            ) : (
                                <Badge variant="outline" className="text-base px-3 py-1">
                                    {story.category || "General"}
                                </Badge>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default AdminStoryDetail;
