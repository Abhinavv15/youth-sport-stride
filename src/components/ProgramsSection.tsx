import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import ttImg from "@/assets/tt-illustration.png";
import squashImg from "@/assets/squash-illustration.png";

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
    cta: "Enroll in TT Training",
    link: "/tt-training",
    accent: false,
  },
  {
    title: "Squash",
    emoji: "🏸",
    image: squashImg,
    imageAlt: "Kid playing squash in modern indoor court",
    features: [
      "Squash Court Facility Booking",
      "Flexible Time Slots",
    ],
    cta: "Book Squash Court",
    link: "/squash-booking",
    accent: true,
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl text-foreground mb-3">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Choose from our professionally designed training programs and facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-card rounded-2xl shadow-card overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <img
                src={program.image}
                alt={program.imageAlt}
                className="w-full h-56 object-contain bg-muted p-4"
                loading="lazy"
              />
              <div className="p-6 space-y-5">
                <h3 className="text-2xl text-foreground">
                  {program.emoji} {program.title}
                </h3>
                <ul className="space-y-2">
                  {program.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-muted-foreground">
                      <Check size={18} className="text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="w-full rounded-xl shadow-soft">
                  <Link to={program.link}>
                    👉 {program.cta}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
