import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-[#14281c] to-sport-green py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-white/90 justify-between">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="World Sports Academy Logo" className="h-8 w-auto" />
              <h3 className="text-xl font-heading font-800 text-white">
                World Sports Academy
              </h3>
            </div>
            <p className="text-sm leading-relaxed mt-4">
              High-performance programs, facilities, and coaching for ambitious athletes.
            </p>
            <a
              href="/squash-booking"
              className="inline-block bg-sport-green hover:bg-sport-green/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors hover:scale-105 transform duration-200 mt-4"
            >
              Book Drop-in Session
            </a>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Navigation</h4>
            <ul className="space-y-4 text-sm mt-4">
              <li><a href="/" className="hover:text-sport-yellow transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-sport-yellow transition-colors">Book a Session</a></li>
              <li><a href="#" className="hover:text-sport-yellow transition-colors">Memberships</a></li>
              <li><a href="#" className="hover:text-sport-yellow transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Contact Us</h4>
            <div className="space-y-4 text-sm mt-4">
              <p className="hover:text-sport-yellow transition-colors block">
                +1 (365) 324-9060
              </p>
              <p className="hover:text-sport-yellow transition-colors block mt-4">
                1233 Dillon Rd, Burlington, ON L7M 1K6
              </p>
              <p className="hover:text-sport-yellow transition-colors block mt-4 pt-4 border-t border-white/10">
                134 Kennedy Rd S, Brampton ON L6W 0E5
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-bold text-white mb-4">Follow Us</h4>
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

        <div className="border-t border-white/30 mt-6 pt-4 text-center text-xs text-white/80">
          <p className="mt-1 hover:text-sport-yellow/80 transition-colors">Copyright © 2026 World Sports Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
