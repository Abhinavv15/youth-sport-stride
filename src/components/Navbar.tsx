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

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else if (location.pathname !== "/") {
      window.scrollTo(0, 0);
    }
  }, [location]);

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
    {
      label: "Gallery",
      href: "#",
      subLinks: [
        { label: "Table Tennis", href: "/tt-training#gallery" },
        { label: "Squash", href: "/squash-booking#gallery" },
      ]
    },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? ((location.pathname === "/tt-training" || location.pathname === "/squash-booking") ? "bg-[#111] border-b border-border shadow-md" : "bg-sport-green shadow-md") : (isHome ? "bg-sport-green shadow-md" : "bg-transparent")}`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" onClick={(e) => { e.preventDefault(); window.location.href = "/"; }} className="flex items-center gap-3 font-heading text-xl font-800 text-white cursor-pointer hover:opacity-90 transition-opacity">
          <img src={logo} alt="World Sports Academy Logo" className="h-10 w-auto brightness-0 invert" />
          <span>World Sports Academy</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.subLinks ? (
              <div key={link.label} className="relative group py-2">
                <button className="flex items-center gap-1 text-sm font-medium hover:text-sport-yellow transition-colors text-white">
                  {link.label}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 mt-0 w-48 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2 space-y-1 z-50">
                  {link.subLinks.map(subLink => {
                    const isHashLink = subLink.href.includes('#');
                    const [path, hash] = subLink.href.split('#');
                    const isCurrentPath = location.pathname === path || (path === '' && isHome && location.pathname === '/');

                    return (
                      <Link
                        key={subLink.label}
                        to={subLink.href}
                        onClick={(e) => {
                          if (isHashLink && isCurrentPath && hash) {
                            const element = document.getElementById(hash);
                            if (element) {
                              element.scrollIntoView({ behavior: "smooth" });
                            }
                          }
                        }}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-sport-green/10 hover:text-sport-green rounded-lg transition-colors font-medium"
                      >
                        {subLink.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium hover:text-sport-yellow transition-colors hover:scale-105 transform duration-200 text-white"
              >
                {link.label}
              </a>
            )
          ))}
        </div>

        <button
          className="md:hidden hover:text-sport-yellow transition-colors text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-sport-green/95 backdrop-blur-md border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.subLinks ? (
                <div className="space-y-1">
                  <span className="block text-sm font-bold text-white/80 uppercase tracking-widest pt-2 px-2">
                    {link.label}
                  </span>
                  {link.subLinks.map((subLink) => {
                    const isHashLink = subLink.href.includes('#');
                    const [path, hash] = subLink.href.split('#');
                    const isCurrentPath = location.pathname === path || (path === '' && isHome && location.pathname === '/');

                    return (
                      <Link
                        key={subLink.label}
                        to={subLink.href}
                        className="block text-sm font-medium text-white hover:text-sport-yellow transition-colors hover:bg-white/10 p-2 rounded-lg pl-4"
                        onClick={(e) => {
                          setIsOpen(false);
                          if (isHashLink && isCurrentPath && hash) {
                            const element = document.getElementById(hash);
                            if (element) {
                              element.scrollIntoView({ behavior: "smooth" });
                            }
                          }
                        }}
                      >
                        {subLink.label}
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <a
                  href={link.href}
                  className="block text-sm font-medium text-white hover:text-sport-yellow transition-colors hover:bg-white/10 p-2 rounded-lg pt-3"
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
