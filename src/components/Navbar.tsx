import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Training", href: "/tt-training" },
    { label: "Drop-in", href: "/tt-training" },
    { label: "Gallery", href: "/tt-training#gallery" },
    { label: "About", href: "/tt-training#about" },
    { label: "Camps", href: "/#camps" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? (location.pathname === "/tt-training" ? "bg-black" : "bg-background/95 backdrop-blur-md border-b border-border shadow-sm") : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className={`flex items-center gap-3 font-heading text-xl font-800 ${isHome ? "text-foreground" : "text-white"}`}>
          <img src={logo} alt="World Sports Academy Logo" className="h-10 w-auto" />
          <span>World Sports Academy</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium hover:text-sport-green transition-colors hover:scale-105 transform duration-200 ${isHome ? "text-foreground" : "text-white"}`}
            >
              {link.label}
            </a>
          ))}

        </div>

        <button
          className={`md:hidden hover:text-sport-green transition-colors ${isHome ? "text-foreground" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-sport-blue/95 backdrop-blur-md border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-white hover:text-sport-green transition-colors hover:bg-white/10 p-2 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
