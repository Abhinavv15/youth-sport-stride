import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ttImg from "@/assets/TT IMAGE.jpg";
import squashImg from "@/assets/Squash Image.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-4 md:pt-32 md:pb-8 overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-800 leading-tight text-foreground">
              Building Confident <span className="text-sport-green">Young Athletes</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
              Professional Table Tennis & Squash training designed for kids.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
