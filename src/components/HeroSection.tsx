import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ttImg from "@/assets/TT IMAGE.jpg";
import squashImg from "@/assets/Squash Image.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-4 md:pt-32 md:pb-8 overflow-hidden bg-slate-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-800 leading-tight text-foreground">
              Building Confident <span className="text-sport-green">Young Athletes</span>
            </h1>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
