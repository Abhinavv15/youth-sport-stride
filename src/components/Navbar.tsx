import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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
    {
      label: "Training",
      href: "#",
      subLinks: [
        { label: "Table Tennis", href: "/tt-training" },
        { label: "Squash", href: "/squash-booking" },
      ]
    },
    {
      label: "Drop-in",
      href: "#",
      subLinks: [
        { label: "Table Tennis", href: "/tt-training" },
        { label: "Squash", href: "/squash-booking" },
      ]
    },
    { label: "Camps", href: "/#camps" },
    { label: "Gallery", href: "/tt-training#gallery" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? ((location.pathname === "/tt-training" || location.pathname === "/squash-booking") ? "bg-black" : "bg-background/95 backdrop-blur-md border-b border-border shadow-sm") : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className={`flex items-center gap-3 font-heading text-xl font-800 ${isHome ? "text-foreground" : "text-white"}`}>
          <img src={logo} alt="World Sports Academy Logo" className="h-10 w-auto" />
          <span>World Sports Academy</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.subLinks ? (
              <div key={link.label} className="relative group py-2">
                <button className={`flex items-center gap-1 text-sm font-medium hover:text-sport-green transition-colors ${isHome ? "text-foreground" : "text-white"}`}>
                  {link.label}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 mt-0 w-48 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2 space-y-1 z-50">
                  {link.subLinks.map(subLink => (
                    <Link
                      key={subLink.label}
                      to={subLink.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-sport-green/10 hover:text-sport-green rounded-lg transition-colors font-medium"
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium hover:text-sport-green transition-colors hover:scale-105 transform duration-200 ${isHome ? "text-foreground" : "text-white"}`}
              >
                {link.label}
              </a>
            )
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
            <div key={link.label}>
              {link.subLinks ? (
                <div className="space-y-1">
                  <span className="block text-sm font-bold text-white/60 uppercase tracking-widest pt-2 px-2">
                    {link.label}
                  </span>
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.label}
                      to={subLink.href}
                      className="block text-sm font-medium text-white hover:text-sport-green transition-colors hover:bg-white/10 p-2 rounded-lg pl-4"
                      onClick={() => setIsOpen(false)}
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <a
                  href={link.href}
                  className="block text-sm font-medium text-white hover:text-sport-green transition-colors hover:bg-white/10 p-2 rounded-lg pt-3"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
