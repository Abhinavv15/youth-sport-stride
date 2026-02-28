import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import ttImg from "@/assets/TT IMAGE.jpg";
import squashImg from "@/assets/Squash Image.jpg";

const programs = [
  {
    title: "Table Tennis",
    emoji: "🏓",
    image: ttImg,
    imageAlt: "Kid practicing table tennis with coach",
    features: [
      "Kids Beginner Training",
      "Pro-Level Training",
      "Tournaments",
      "Leagues",
    ],
    cta: "Explore TT Training",
    link: "/tt-training",
    accent: false,
  },
  {
    title: "Squash",
    emoji: "🏸",
    image: squashImg,
    imageAlt: "Kid playing squash in modern indoor court",
    features: [
      "Squash Court Booking",
      "Trainings",
      "Tournaments",
      "Leagues",
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
