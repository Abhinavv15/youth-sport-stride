import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import ttImg from "@/assets/TT IMAGE.jpg";
import squashImg from "@/assets/Squash Image.jpg";

const SquashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.2em" height="1.2em" className="inline-block relative -top-[2px] mr-1">
    <g transform="rotate(45 32 32)">
      {/* Shaft & Handle */}
      <rect x="30" y="34" width="4" height="28" fill="#CBD5E1" rx="1" />
      <rect x="28" y="46" width="8" height="16" fill="#1D4ED8" rx="2" />
      <path d="M 28 48 L 36 50 M 28 52 L 36 54 M 28 56 L 36 58 M 28 60 L 36 62" stroke="#2563EB" strokeWidth="1" />

      {/* Strings */}
      <g stroke="#94A3B8" strokeWidth="1.5" opacity="0.6">
        <line x1="26" y1="12" x2="26" y2="28" />
        <line x1="30" y1="6" x2="30" y2="32" />
        <line x1="34" y1="6" x2="34" y2="32" />
        <line x1="38" y1="12" x2="38" y2="28" />
        <line x1="22" y1="14" x2="42" y2="14" />
        <line x1="20" y1="20" x2="44" y2="20" />
        <line x1="22" y1="26" x2="42" y2="26" />
      </g>

      {/* Racket Rim */}
      <path d="M 32 36 C 44 26 44 12 32 4 C 20 12 20 26 32 36 Z" fill="none" stroke="#DC2626" strokeWidth="4" />

      {/* Bumper Guard */}
      <path d="M 23 10 C 27 6 37 6 41 10" fill="none" stroke="#F1F5F9" strokeWidth="4" strokeLinecap="round" />
    </g>

    {/* Squash Ball */}
    <g transform="translate(48, 16)">
      <circle cx="0" cy="0" r="6" fill="#1A202C" />
      <circle cx="-2" cy="-2" r="1.5" fill="#FBBF24" />
      <circle cx="2" cy="-2" r="1.5" fill="#FBBF24" />
    </g>
  </svg>
);

const programs = [
  {
    title: "Smash Table Tennis Club",
    emoji: "🏓",
    image: ttImg,
    imageAlt: "Kid practicing table tennis with coach",
    features: [
      "Kids Beginner Training",
      "Pro-Level Training",
      "Tournaments & Leagues",
      "Open Play",
    ],
    cta: "Explore TT Training",
    link: "/tt-training",
    accent: false,
  },
  {
    title: "Burlington Squash Club",
    emoji: <SquashIcon />,
    image: squashImg,
    imageAlt: "Kid playing squash in modern indoor court",
    features: [
      "Squash Court Booking",
      "Trainings",
      "Tournaments & Leagues",
      "Open Play",
    ],
    cta: "Book Squash Court",
    link: "/squash-booking",
    accent: true,
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="pb-8 md:pb-12 pt-0 relative overflow-hidden bg-slate-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program) => (
            <Link
              key={program.title}
              to={program.link}
              className={`block bg-card rounded-2xl shadow-card overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${program.accent ? "ring-2 ring-sport-green/20" : ""}`}
            >
              <img
                src={program.image}
                alt={program.imageAlt}
                className="w-full h-56 object-cover bg-muted"
                loading="lazy"
              />
              <div className="p-6 space-y-5">
                <h3 className={`text-2xl text-sport-green font-bold`}>
                  {program.emoji} {program.title}
                </h3>
                <ul className="space-y-2">
                  {program.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-muted-foreground hover:text-sport-blue transition-colors">
                      <Check size={18} className="shrink-0 text-sport-green" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
