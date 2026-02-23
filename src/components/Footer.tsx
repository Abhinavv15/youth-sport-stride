import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-foreground to-sport-blue py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 text-white/90">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-xl font-heading font-800 text-white">
              🏓 World Sports Academy
            </h3>
            <p className="text-sm leading-relaxed">
              Building confident young athletes through professional Table Tennis & Squash training.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-bold text-white">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2 hover:text-sport-yellow transition-colors">
                <MapPin size={16} className="shrink-0 text-sport-yellow" /> 123 Sports Lane, City Center
              </p>
              <p className="flex items-center gap-2 hover:text-sport-yellow transition-colors">
                <Phone size={16} className="shrink-0 text-sport-yellow" /> +1 (555) 123-4567
              </p>
              <p className="flex items-center gap-2 hover:text-sport-yellow transition-colors">
                <Mail size={16} className="shrink-0 text-sport-yellow" /> hello@sportkidsacademy.com
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="font-bold text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="hover:text-sport-yellow transition-colors hover:scale-110 transform duration-200">
                <Facebook size={22} className="text-sport-yellow" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-sport-yellow transition-colors hover:scale-110 transform duration-200">
                <Instagram size={22} className="text-sport-yellow" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-sport-yellow transition-colors hover:scale-110 transform duration-200">
                <Youtube size={22} className="text-sport-yellow" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 mt-10 pt-6 text-center text-xs text-white/80">
          <p className="hover:text-sport-yellow/80 transition-colors">All registrations and bookings are processed via ActivePass.</p>
          <p className="mt-1 hover:text-sport-yellow/80 transition-colors">© {new Date().getFullYear()} World Sports Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
