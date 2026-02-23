import { ShieldCheck, Heart, BookOpen, Trophy } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Certified Coaches",
    description: "All our coaches are professionally certified with years of youth training experience.",
  },
  {
    icon: Heart,
    title: "Safe Environment",
    description: "Child-safe facilities with proper supervision and first-aid readiness at all times.",
  },
  {
    icon: BookOpen,
    title: "Structured Programs",
    description: "Age-appropriate, progressive curricula that build skills step by step.",
  },
  {
    icon: Trophy,
    title: "Competitive Exposure",
    description: "Regular tournaments and leagues to help your child grow through healthy competition.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-sport-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl text-blue-600 mb-3 font-bold">
            Why Choose <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            We're dedicated to building confident, healthy, and happy young athletes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white/95 border border-white/20 rounded-2xl p-6 text-center shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-sport-green/20 flex items-center justify-center ring-2 ring-sport-green/40">
                <r.icon size={28} className="text-sport-green" />
              </div>
              <h3 className="text-lg font-bold text-sport-green mb-2">{r.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;