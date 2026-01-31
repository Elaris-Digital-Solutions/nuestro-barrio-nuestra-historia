import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Loader2, Search, Edit, Eye } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface Story {
    id: string; // Assuming UUID
    title: string;
    slug: string;
    created_at: string;
    status: "pending" | "approved" | "rejected" | "hidden";
    category: string;
}

const AdminStoriesList = () => {
    const navigate = useNavigate();
    const [stories, setStories] = useState<Story[]>([]);
    const [loading, setLoading] = useState(true);
    const [filterStatus, setFilterStatus] = useState<string>("all");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchStories();
    }, []);

    const fetchStories = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from("stories")
                .select("id, title, slug, created_at, status, category")
                .order("created_at", { ascending: false });

            if (error) throw error;

            // Normalize status if missing
            const localizedData = (data || []).map((s) => ({
                ...s,
                status: s.status || "pending",
            }));

            setStories(localizedData as Story[]);
        } catch (error) {
            console.error("Error fetching stories:", error);
        } finally {
            setLoading(false);
        }
    };

    const filteredStories = stories.filter((story) => {
        const matchesStatus = filterStatus === "all" || story.status === filterStatus;
        const matchesSearch =
            story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            story.slug.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "approved":
                return <Badge className="bg-green-500 hover:bg-green-600">Aprobada</Badge>;
            case "rejected":
                return <Badge variant="destructive">Rechazada</Badge>;
            case "hidden":
                return <Badge variant="secondary">Oculta</Badge>;
            default:
                return <Badge className="bg-yellow-500 hover:bg-yellow-600">Pendiente</Badge>;
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Historias</h1>
                    <p className="text-muted-foreground">Administra y modera el contenido.</p>
                </div>
                {/* Potentially add 'Create Story' button here if admins can create */}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center bg-white p-4 rounded-lg border shadow-sm">
                <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Buscar por título..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9"
                    />
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Estado" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todos los estados</SelectItem>
                        <SelectItem value="pending">Pendientes</SelectItem>
                        <SelectItem value="approved">Aprobadas</SelectItem>
                        <SelectItem value="rejected">Rechazadas</SelectItem>
                        <SelectItem value="hidden">Ocultas</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Título</TableHead>
                            <TableHead>Categoría</TableHead>
                            <TableHead>Fecha</TableHead>
                            <TableHead>Estado</TableHead>
                            <TableHead className="text-right">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center">
                                    <div className="flex items-center justify-center">
                                        <Loader2 className="h-6 w-6 animate-spin text-primary mr-2" />
                                        Cargando historias...
                                    </div>
                                </TableCell>
                            </TableRow>
                        ) : filteredStories.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                                    No se encontraron historias.
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredStories.map((story) => (
                                <TableRow key={story.id} className="hover:bg-gray-50/50">
                                    <TableCell className="font-medium">
                                        <div className="max-w-[300px] truncate" title={story.title}>
                                            {story.title}
                                        </div>
                                    </TableCell>
                                    <TableCell>{story.category || "General"}</TableCell>
                                    <TableCell className="whitespace-nowrap">
                                        {story.created_at
                                            ? format(new Date(story.created_at), "dd MMM yyyy", { locale: es })
                                            : "-"}
                                    </TableCell>
                                    <TableCell>{getStatusBadge(story.status)}</TableCell>
                                    <TableCell className="text-right">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => navigate(`/admin/stories/${story.slug}`)}
                                        >
                                            <Eye className="h-4 w-4 mr-2" />
                                            Revisar
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default AdminStoriesList;
