import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast({ title: "Login failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Welcome back!" });
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link to="/" className="font-heading text-2xl font-800 text-blue-600">
            🏓 World Sports <span className="text-purple-600">Academy</span>
          </Link>
          <h2 className="mt-6 text-3xl font-heading font-bold text-blue-600">Sign in to your account</h2>
          <p className="mt-2 text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:text-purple-600 hover:underline">Sign up</Link>
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-5 bg-white p-8 rounded-2xl shadow-card border border-blue-100">
          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-800">Email</label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required className="border-blue-200 focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-800">Password</label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required className="border-blue-200 focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <Button type="submit" className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white" size="lg" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
