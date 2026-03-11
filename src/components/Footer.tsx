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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 text-white/90 justify-between">
          {/* Brand & Social */}
          <div className="space-y-8 lg:col-span-3 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-heading font-800 text-white tracking-tight leading-tight">
                World Sports <br />Academy
              </h3>
              <p className="text-white/70 mt-4 text-sm leading-relaxed">
                Canada's premier destination for elite table tennis and squash training.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-white mb-2">Follow Us</h4>
              <div className="flex gap-4 items-center">
                <a href="#" aria-label="Facebook" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-sport-yellow hover:text-black transition-all hover:scale-110 transform duration-200">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/theworldsportsacademy?igsh=MTVjOGI3N3U2cWJuYg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-sport-yellow hover:text-black transition-all hover:scale-110 transform duration-200">
                  <Instagram size={20} />
                </a>
                <a href="#" aria-label="TikTok" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-sport-yellow hover:text-black transition-all hover:scale-110 transform duration-200">
                  <TiktokIcon size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info & Maps */}
          <div className="space-y-6 lg:col-span-5 flex flex-col">
            <h4 className="font-bold text-white text-lg border-b border-white/20 pb-2">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <a href="mailto:info@wsateam.com" className="flex items-center gap-3 hover:text-sport-yellow transition-colors group">
                <div className="bg-white/10 p-2 rounded-full group-hover:bg-sport-yellow/20 transition-colors"><Mail size={16} /></div>
                info@wsateam.com
              </a>
              <a href="tel:+13653249060" className="flex items-center gap-3 hover:text-sport-yellow transition-colors group">
                <div className="bg-white/10 p-2 rounded-full group-hover:bg-sport-yellow/20 transition-colors"><Phone size={16} /></div>
                +1 (365) 324-9060
              </a>
              <a href="https://maps.google.com/?q=1233+Dillon+Rd,+Burlington,+ON+L7M+1K6" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-sport-yellow transition-colors pt-2 group">
                <div className="bg-white/10 p-2 rounded-full group-hover:bg-sport-yellow/20 mt-1 transition-colors"><MapPin size={16} /></div>
                1233 Dillon Rd, Burlington, ON L7M 1K6
              </a>
              <a href="https://maps.google.com/?q=134+Kennedy+Rd+S,+Brampton+ON+L6W+0E5" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-sport-yellow transition-colors pt-1 group">
                <div className="bg-white/10 p-2 rounded-full group-hover:bg-sport-yellow/20 mt-1 transition-colors"><MapPin size={16} /></div>
                134 Kennedy Rd S, Brampton ON L6W 0E5
              </a>
            </div>

            {/* Desktop Maps */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/50 mb-1 font-bold">Burlington</p>
                <iframe
                  src="https://maps.google.com/maps?width=100%25&amp;height=160&amp;hl=en&amp;q=1233%20Dillon%20Rd,%20Burlington,%20ON%20L7M%201K6&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  className="w-full h-32 sm:h-24 rounded-lg border-2 border-white/10 opacity-70 hover:opacity-100 transition-opacity"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Burlington Map"
                ></iframe>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/50 mb-1 font-bold">Brampton</p>
                <iframe
                  src="https://maps.google.com/maps?width=100%25&amp;height=160&amp;hl=en&amp;q=134%20Kennedy%20Rd%20S,%20Brampton%20ON%20L6W%200E5&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  className="w-full h-32 sm:h-24 rounded-lg border-2 border-white/10 opacity-70 hover:opacity-100 transition-opacity"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Brampton Map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-4 bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl backdrop-blur-sm">
            <h4 className="font-bold text-white text-lg mb-4">Get in Touch</h4>
            <form action="https://formsubmit.co/info@wsateam.com" method="POST" className="space-y-3">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Website Inquiry!" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-sport-yellow focus:border-transparent transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-sport-yellow focus:border-transparent transition-all"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-sport-yellow focus:border-transparent transition-all"
              />

              <textarea
                name="message"
                placeholder="Message (optional)"
                rows={3}
                className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-sport-yellow focus:border-transparent transition-all resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-sport-yellow hover:bg-[#e6c100] text-black font-bold py-2.5 rounded-md transition-colors shadow-md active:scale-95 transform duration-150"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center text-xs text-white/50 flex flex-col items-center">
          <p className="hover:text-white/90 transition-colors cursor-pointer">Copyright © 2026 World Sports Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
