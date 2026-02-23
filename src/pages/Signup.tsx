import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
        emailRedirectTo: window.location.origin,
      },
    });
    setLoading(false);
    if (error) {
      toast({ title: "Signup failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Check your email", description: "We sent you a confirmation link to verify your account." });
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link to="/" className="font-heading text-2xl font-800 text-blue-600">
            🏓 World Sports <span className="text-purple-600">Academy</span>
          </Link>
          <h2 className="mt-6 text-3xl font-heading font-bold text-blue-600">Create your account</h2>
          <p className="mt-2 text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:text-purple-600 hover:underline">Sign in</Link>
          </p>
        </div>
        <form onSubmit={handleSignup} className="space-y-5 bg-white p-8 rounded-2xl shadow-card border border-blue-100">
          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-800">Full Name</label>
            <Input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="John Doe" required className="border-blue-200 focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-800">Email</label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required className="border-blue-200 focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-800">Password</label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required minLength={6} className="border-blue-200 focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <Button type="submit" className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white" size="lg" disabled={loading}>
            {loading ? "Creating account..." : "Sign Up"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
