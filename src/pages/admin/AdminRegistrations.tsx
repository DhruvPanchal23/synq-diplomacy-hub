import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Search } from "lucide-react";

interface Registration {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  institution: string;
  payment_status: string;
  payment_amount: number;
  events: {
    title: string;
  };
}

const AdminRegistrations = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [filteredRegs, setFilteredRegs] = useState<Registration[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  useEffect(() => {
    filterRegistrations();
  }, [searchTerm, registrations]);

  const fetchRegistrations = async () => {
    const { data, error } = await supabase
      .from("registrations")
      .select(`
        *,
        events (
          title
        )
      `)
      .order("registration_date", { ascending: false });

    if (!error && data) {
      setRegistrations(data);
      setFilteredRegs(data);
    }
    setLoading(false);
  };

  const filterRegistrations = () => {
    if (!searchTerm) {
      setFilteredRegs(registrations);
      return;
    }

    const filtered = registrations.filter(
      (reg) =>
        reg.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.phone.includes(searchTerm)
    );
    setFilteredRegs(filtered);
  };

  const exportToCSV = () => {
    const headers = ["Name", "Email", "Phone", "Event", "Institution", "Payment Status", "Amount"];
    const rows = filteredRegs.map((reg) => [
      reg.full_name,
      reg.email,
      reg.phone,
      reg.events.title,
      reg.institution || "",
      reg.payment_status,
      reg.payment_amount || 0,
    ]);

    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `registrations_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
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
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-primary">All Registrations</h1>
          <Button onClick={exportToCSV} className="bg-primary hover:bg-primary-dark">
            <Download className="mr-2 h-4 w-4" />
            Export to CSV
          </Button>
        </div>

        <div className="mb-6 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, email, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Institution</TableHead>
                <TableHead>Payment Status</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRegs.length > 0 ? (
                filteredRegs.map((reg) => (
                  <TableRow key={reg.id}>
                    <TableCell className="font-medium">{reg.full_name}</TableCell>
                    <TableCell>{reg.email}</TableCell>
                    <TableCell>{reg.phone}</TableCell>
                    <TableCell>{reg.events.title}</TableCell>
                    <TableCell>{reg.institution || "N/A"}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          reg.payment_status === "paid"
                            ? "bg-accent/20 text-accent"
                            : "bg-destructive/20 text-destructive"
                        }`}
                      >
                        {reg.payment_status}
                      </span>
                    </TableCell>
                    <TableCell>₹{reg.payment_amount || 0}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-muted-foreground">
                    No registrations found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AdminRegistrations;
