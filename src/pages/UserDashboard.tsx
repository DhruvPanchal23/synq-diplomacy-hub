import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Registration {
  id: string;
  full_name: string;
  email: string;
  event_id: string;
  payment_status: string;
  registration_date: string;
  events: {
    title: string;
    event_date: string;
    location: string;
  };
}

const UserDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/auth");
      return;
    }

    setUser(session.user);
    fetchRegistrations(session.user.id);
  };

  const fetchRegistrations = async (userId: string) => {
    const { data, error } = await supabase
      .from("registrations")
      .select(`
        *,
        events (
          title,
          event_date,
          location
        )
      `)
      .eq("user_id", userId)
      .order("registration_date", { ascending: false });

    if (!error && data) {
      setRegistrations(data);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged out",
      description: "You've been successfully logged out.",
    });
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-crimson pt-24 flex items-center justify-center">
        <div className="text-2xl text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-crimson pt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
              My Dashboard
            </h1>
            <p className="text-muted-foreground">Welcome back, {user?.user_metadata?.full_name || user?.email}</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="btn-outline">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="grid gap-6">
          <div className="glass-crimson p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-gradient-gold">My Registrations</h2>
            
            {registrations.length > 0 ? (
              <div className="space-y-4">
                {registrations.map((reg) => (
                  <div key={reg.id} className="glass-gold p-6 rounded-lg border border-primary/20">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{reg.events.title}</h3>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {new Date(reg.events.event_date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {reg.events.location}
                          </div>
                        </div>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        reg.payment_status === 'paid' 
                          ? 'bg-accent/20 text-accent' 
                          : 'bg-destructive/20 text-destructive'
                      }`}>
                        {reg.payment_status === 'paid' ? 'Paid' : 'Unpaid'}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Registered on {new Date(reg.registration_date).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground mb-6">No registrations yet</p>
                <Button onClick={() => navigate("/events")} className="btn-primary">
                  Browse Events
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
