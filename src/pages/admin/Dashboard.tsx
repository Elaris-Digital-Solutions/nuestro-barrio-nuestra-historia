import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle, XCircle, EyeOff, Clock } from "lucide-react";
import { Loader2 } from "lucide-react";

interface DashboardStats {
    total: number;
    pending: number;
    approved: number;
    rejected: number;
    hidden: number;
}

const Dashboard = () => {
    const [stats, setStats] = useState<DashboardStats>({
        total: 0,
        pending: 0,
        approved: 0,
        rejected: 0,
        hidden: 0,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const { data, error } = await supabase
                    .from("stories")
                    .select("status");

                if (error) throw error;

                const newStats = (data || []).reduce(
                    (acc, story) => {
                        acc.total++;
                        const status = story.status || "pending"; // Default to pending if null
                        if (status === "approved") acc.approved++;
                        else if (status === "rejected") acc.rejected++;
                        else if (status === "hidden") acc.hidden++;
                        else acc.pending++;
                        return acc;
                    },
                    { total: 0, pending: 0, approved: 0, rejected: 0, hidden: 0 }
                );

                setStats(newStats);
            } catch (error) {
                console.error("Error fetching stats:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    const statCards = [
        {
            title: "Total Historias",
            value: stats.total,
            icon: FileText,
            color: "text-blue-500",
            bg: "bg-blue-50",
        },
        {
            title: "Pendientes",
            value: stats.pending,
            icon: Clock,
            color: "text-yellow-500",
            bg: "bg-yellow-50",
        },
        {
            title: "Aprobadas",
            value: stats.approved,
            icon: CheckCircle,
            color: "text-green-500",
            bg: "bg-green-50",
        },
        {
            title: "Rechazadas",
            value: stats.rejected,
            icon: XCircle,
            color: "text-red-500",
            bg: "bg-red-50",
        },
        {
            title: "Ocultas",
            value: stats.hidden,
            icon: EyeOff,
            color: "text-gray-500",
            bg: "bg-gray-50",
        },
    ];

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                <p className="text-muted-foreground">Resumen global de las historias y su estado de moderación.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {statCards.map((stat) => (
                    <Card key={stat.title} className="border-none shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                {stat.title}
                            </CardTitle>
                            <div className={`p-2 rounded-full ${stat.bg}`}>
                                <stat.icon className={`h-4 w-4 ${stat.color}`} />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
