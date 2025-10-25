import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, FileText, DollarSign } from "lucide-react";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalRegistrations: 0,
    totalRevenue: 0,
    totalEvents: 0,
    pendingPayments: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    const [registrations, events] = await Promise.all([
      supabase.from("registrations").select("*"),
      supabase.from("events").select("*"),
    ]);

    const totalReg = registrations.data?.length || 0;
    const paidReg = registrations.data?.filter((r) => r.payment_status === "paid") || [];
    const revenue = paidReg.reduce((sum, r) => sum + (Number(r.payment_amount) || 0), 0);
    const pending = totalReg - paidReg.length;

    setStats({
      totalRegistrations: totalReg,
      totalRevenue: revenue,
      totalEvents: events.data?.length || 0,
      pendingPayments: pending,
    });

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-2xl text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-primary">Admin Dashboard</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{stats.totalRegistrations}</div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">₹{stats.totalRevenue.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Events</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{stats.totalEvents}</div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
              <FileText className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive">{stats.pendingPayments}</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/admin/events">
            <Card className="border-primary/20 hover:bg-primary/5 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="text-primary">Manage Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Create, edit, and manage events</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/admin/registrations">
            <Card className="border-primary/20 hover:bg-primary/5 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="text-primary">View Registrations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">View and manage all registrations</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/admin/documents">
            <Card className="border-primary/20 hover:bg-primary/5 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="text-primary">Upload Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Upload event guides and materials</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
