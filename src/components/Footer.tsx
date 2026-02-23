import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 text-primary-foreground/80">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-xl font-heading font-800 text-primary-foreground">
              🏓 World Sports Academy
            </h3>
            <p className="text-sm leading-relaxed">
              Building confident young athletes through professional Table Tennis & Squash training.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-bold text-primary-foreground">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <MapPin size={16} className="shrink-0" /> 123 Sports Lane, City Center
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" /> +1 (555) 123-4567
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" /> hello@sportkidsacademy.com
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="font-bold text-primary-foreground">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors">
                <Facebook size={22} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors">
                <Instagram size={22} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-primary transition-colors">
                <Youtube size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/50">
          <p>All registrations and bookings are processed via ActivePass.</p>
          <p className="mt-1">© {new Date().getFullYear()} World Sports Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
