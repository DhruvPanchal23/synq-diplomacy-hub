import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const MainNav = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/events", label: "Events" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-crimson border-b border-primary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gradient-gold">
            SYNQ INC
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/auth">
              <Button className="btn-primary">Login / Register</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
              <Button className="btn-primary w-full">Login / Register</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNav;
