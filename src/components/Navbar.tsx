import { useState, useEffect } from "react";
import { Menu, X, LogIn, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<{ email?: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Training", href: "/#programs" },
    { label: "Drop-in", href: "/squash-booking" },
    { label: "Gallery", href: "/#gallery" },
    { label: "About", href: "/#about" },
    { label: "Camps", href: "/#camps" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-3 font-heading text-xl font-800 text-foreground">
          <img src={logo} alt="World Sports Academy Logo" className="h-10 w-auto" />
          <span>World Sports Academy</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-blue-600 hover:text-purple-600 transition-colors hover:scale-105 transform duration-200"
            >
              {link.label}
            </a>
          ))}
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <User size={14} /> {user.email?.split("@")[0]}
              </span>
              <Button size="sm" variant="outline" onClick={handleLogout}>
                <LogOut size={14} className="mr-1" /> Logout
              </Button>
            </div>
          ) : (
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Link to="/login"><LogIn size={14} className="mr-1" /> Login</Link>
            </Button>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-blue-600 hover:text-purple-600 transition-colors hover:bg-blue-600/10 p-2 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {user ? (
            <Button size="sm" variant="outline" className="w-full" onClick={() => { handleLogout(); setIsOpen(false); }}>
              <LogOut size={14} className="mr-1" /> Logout
            </Button>
          ) : (
            <Button asChild size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg">
              <Link to="/login" onClick={() => setIsOpen(false)}><LogIn size={14} className="mr-1" /> Login</Link>
            </Button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
