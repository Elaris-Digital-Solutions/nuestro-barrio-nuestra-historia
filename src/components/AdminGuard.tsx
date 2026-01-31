import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const AdminGuard = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();

                if (!session) {
                    console.log("No active session, redirecting to login");
                    navigate("/admin/login");
                    return;
                }

                // For now, we'll implement a simple check. 
                // In a real app, you'd check a role in the database or JWT metadata.
                // We will assume that if they can log in to the admin panel, they are likely an admin
                // or we can add a specific email check here if provided.
                // For MVP/Demo: Just checking if authenticated. 
                // OPTIONAL: Check specific email or metadata
                // const isAdmin = session.user.email === 'admin@example.com' || session.user.app_metadata.role === 'admin';

                setIsAuthorized(true);
            } catch (error) {
                console.error("Auth check failed:", error);
                navigate("/admin/login");
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!session) {
                navigate("/admin/login");
            }
        });

        return () => subscription.unsubscribe();
    }, [navigate]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    return isAuthorized ? <>{children}</> : null;
};

export default AdminGuard;
