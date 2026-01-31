import { Outlet, Link, useLocation } from "react-router-dom";
import { LayoutDashboard, FileText, Users, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AdminLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await supabase.auth.signOut();
            navigate("/admin/login");
            toast.success("Has cerrado sesión exitosamente");
        } catch (error) {
            console.error("Error logging out:", error);
            toast.error("Error al cerrar sesión");
        }
    };

    const navItems = [
        {
            label: "Dashboard",
            href: "/admin/dashboard",
            icon: LayoutDashboard,
        },
        {
            label: "Historias",
            href: "/admin/stories",
            icon: FileText,
        },
        // {
        //   label: "Administradores",
        //   href: "/admin/users",
        //   icon: Users,
        // },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50/50">
            {/* Sidebar */}
            <aside className="fixed inset-y-0 left-0 z-50 w-64 border-r bg-white shadow-sm hidden md:flex flex-col">
                <div className="h-16 flex items-center px-6 border-b">
                    <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                        <span>Admin Panel</span>
                    </Link>
                </div>

                <div className="flex-1 py-6 px-4 space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname.startsWith(item.href);

                        return (
                            <Link
                                key={item.href}
                                to={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                )}
                            >
                                <Icon className="h-5 w-5" />
                                {item.label}
                            </Link>
                        );
                    })}
                </div>

                <div className="p-4 border-t">
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={handleLogout}
                    >
                        <LogOut className="mr-2 h-4 w-4" />
                        Cerrar Sesión
                    </Button>
                </div>
            </aside>

            {/* Mobile Header (TODO: Add sheet for mobile menu if needed) */}
            <div className="md:hidden fixed top-0 w-full h-16 bg-white border-b z-40 flex items-center px-4">
                <span className="font-bold">Admin Panel</span>
            </div>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-8 pt-20 md:pt-8 animate-fade-in">
                <div className="max-w-6xl mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
