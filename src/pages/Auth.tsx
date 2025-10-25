import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { LogIn, UserPlus } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: error.message,
      });
    } else {
      toast({
        title: "Welcome back!",
        description: "You've successfully logged in.",
      });
      navigate("/");
    }

    setLoading(false);
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const fullName = formData.get("fullName") as string;

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
        emailRedirectTo: `${window.location.origin}/`,
      },
    });

    if (error) {
      toast({
        variant: "destructive",
        title: "Signup failed",
        description: error.message,
      });
    } else {
      toast({
        title: "Account created!",
        description: "Please check your email to confirm your account.",
      });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-crimson flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gradient-gold">Welcome to SYNQ</h1>
          <p className="text-muted-foreground">Login or create an account to continue</p>
        </div>

        <div className="glass-crimson p-8 rounded-xl">
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="bg-card/50 border-primary/30"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <Input
                    name="password"
                    type="password"
                    required
                    placeholder="••••••••"
                    className="bg-card/50 border-primary/30"
                  />
                </div>

                <Button type="submit" className="btn-primary w-full" disabled={loading}>
                  <LogIn className="mr-2 h-4 w-4" />
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <Input
                    name="fullName"
                    required
                    placeholder="John Doe"
                    className="bg-card/50 border-primary/30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="bg-card/50 border-primary/30"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <Input
                    name="password"
                    type="password"
                    required
                    placeholder="••••••••"
                    minLength={6}
                    className="bg-card/50 border-primary/30"
                  />
                </div>

                <Button type="submit" className="btn-primary w-full" disabled={loading}>
                  <UserPlus className="mr-2 h-4 w-4" />
                  {loading ? "Creating account..." : "Sign Up"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Auth;
