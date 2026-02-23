import { Star } from "lucide-react";
import testimonialImg from "@/assets/testimonial-illustration.png";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Parent of 8-year-old",
    text: "My son has gained so much confidence since joining the academy. The coaches are amazing with kids!",
  },
  {
    name: "David K.",
    role: "Parent of 10-year-old",
    text: "The structured programs are fantastic. My daughter went from beginner to competing in tournaments within a year.",
  },
  {
    name: "Priya R.",
    role: "Parent of 7-year-old",
    text: "Safe environment, professional coaching, and my child actually looks forward to training sessions. Highly recommend!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl text-foreground mb-3">
            What <span className="text-primary">Parents</span> Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-2xl p-6 shadow-soft space-y-4"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed italic">"{t.text}"</p>
              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <img
            src={testimonialImg}
            alt="Happy parent and child after sports training"
            className="w-48 h-auto rounded-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
