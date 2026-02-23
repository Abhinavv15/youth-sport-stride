import { Button } from "@/components/ui/button";
import { Check, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ttImg from "@/assets/tt-illustration.png";

const ACTIVEPASS_TT_LINK = "https://activepass.in/tt";

const features = [
  "Kids Beginner Training — Learn fundamentals in a fun, supportive environment",
  "Pro-Level Training — Advanced drills, strategies, and match play",
  "Tournaments — Compete in exciting local and regional events",
  "Leagues — Join structured league play for consistent improvement",
];

const TTTraining = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img src={ttImg} alt="Kid practicing table tennis with coach" className="w-full rounded-2xl" />
            </div>
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-heading font-800 text-foreground">
                🏓 Table Tennis <span className="text-primary">Training</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Professional table tennis coaching for all skill levels. Our certified coaches help young athletes build confidence, discipline, and competitive skills.
              </p>
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-muted-foreground">
                    <Check size={18} className="text-accent shrink-0 mt-1" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3 pt-2">
                <p className="text-sm text-muted-foreground">
                  Registration is securely handled via ActivePass.
                </p>
                <Button asChild size="lg" className="w-full rounded-xl shadow-soft">
                  <a href={ACTIVEPASS_TT_LINK} target="_blank" rel="noopener noreferrer">
                    👉 Enroll in TT Training <ExternalLink size={16} className="ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TTTraining;
