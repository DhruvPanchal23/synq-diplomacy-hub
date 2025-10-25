import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRegistrations from "./pages/admin/AdminRegistrations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<EventDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute requireAdmin>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/registrations" element={
            <ProtectedRoute requireAdmin>
              <AdminRegistrations />
            </ProtectedRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
