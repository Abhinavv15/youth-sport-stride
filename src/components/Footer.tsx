import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const TiktokIcon = ({ size = 22, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-r from-slate-900 via-[#14281c] to-sport-green py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-white/90 justify-between">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-heading font-800 text-white tracking-tight">
              World Sports Academy
            </h3>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Contact Us</h4>
            <div className="space-y-4 text-sm mt-4 flex flex-col">
              <a href="mailto:info@wsateam.com" className="flex items-center gap-2 hover:text-sport-yellow transition-colors">
                <Mail size={16} /> info@wsateam.com
              </a>
              <a href="tel:+13653249060" className="flex items-center gap-2 hover:text-sport-yellow transition-colors">
                <Phone size={16} /> +1 (365) 324-9060
              </a>
              <a href="https://maps.google.com/?q=1233+Dillon+Rd,+Burlington,+ON+L7M+1K6" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-sport-yellow transition-colors pt-2 border-t border-white/10">
                <MapPin size={16} className="shrink-0 mt-1" /> 1233 Dillon Rd, Burlington, ON L7M 1K6
              </a>
              <a href="https://maps.google.com/?q=134+Kennedy+Rd+S,+Brampton+ON+L6W+0E5" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-sport-yellow transition-colors pt-2 border-t border-white/10">
                <MapPin size={16} className="shrink-0 mt-1" /> 134 Kennedy Rd S, Brampton ON L6W 0E5
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-bold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4 items-center">
              <a href="#" aria-label="Facebook" className="hover:text-sport-yellow transition-colors hover:scale-110 transform duration-200">
                <Facebook size={22} className="text-sport-yellow" />
              </a>
              <a href="https://www.instagram.com/theworldsportsacademy?igsh=MTVjOGI3N3U2cWJuYg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-sport-yellow transition-colors hover:scale-110 transform duration-200">
                <Instagram size={22} className="text-sport-yellow" />
              </a>
              <a href="#" aria-label="TikTok" className="hover:text-sport-yellow transition-colors hover:scale-110 transform duration-200 flex items-center">
                <TiktokIcon size={22} className="text-sport-yellow" />
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
