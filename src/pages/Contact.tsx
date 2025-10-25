import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-crimson pt-24">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-12 text-gradient-gold">
          Get in Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-crimson p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-gradient-gold">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  required
                  placeholder="Your name"
                  className="bg-card/50 border-primary/30 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  required
                  type="email"
                  placeholder="your@email.com"
                  className="bg-card/50 border-primary/30 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  required
                  placeholder="Tell us what you're thinking..."
                  rows={5}
                  className="bg-card/50 border-primary/30 focus:border-primary"
                />
              </div>

              <Button type="submit" className="btn-primary w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-crimson p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6 text-gradient-gold">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">contact@synqinc.org</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Instagram className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Instagram</h3>
                    <p className="text-muted-foreground">@synqinc</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-crimson p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gradient-gold">Follow Us</h3>
              <p className="text-muted-foreground mb-4">
                Stay updated with our latest events and announcements on social media.
              </p>
              <div className="flex gap-4">
                <Button className="btn-gold">
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
