import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

const ProtectedRoute = ({ children, requireAdmin = false }: ProtectedRouteProps) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      setLoading(false);
      return;
    }

    setIsAuthenticated(true);

    if (requireAdmin) {
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .single();

      setIsAdmin(!!data);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-crimson flex items-center justify-center">
        <div className="text-2xl text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  if (requireAdmin && !isAdmin) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
