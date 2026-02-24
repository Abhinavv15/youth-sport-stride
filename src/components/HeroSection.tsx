import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImg from "@/assets/world sports academy 4.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-800 leading-tight text-blue-600">
              Building Confident{" "}
              <span className="text-blue-600">Young Athletes</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg bg-gradient-to-r from-foreground/80 to-sport-blue/80 bg-clip-text text-transparent">
              Professional Table Tennis & Squash training designed for kids.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-2xl text-base px-8 shadow-soft bg-sport-gradient hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sport-blue font-bold">
                <Link to="/tt-training">🏓 Explore TT Training</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-2xl text-base px-8 border-sport-green/30 text-sport-green hover:bg-sport-green/10 hover:border-sport-green/50 hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-bold">
                <Link to="/squash-booking">🏸 Book Squash Facility</Link>
              </Button>
            </div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <img
              src={heroImg}
              alt="Kids playing table tennis and squash with coaches and supportive parents"
              className="w-full h-auto rounded-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
