import { Button } from "@/components/ui/button";
import { Check, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import squashImg from "@/assets/squash-illustration.png";

const ACTIVEPASS_SQUASH_LINK = "https://activepass.in/squash";

const features = [
  "Modern Indoor Squash Courts — Well-maintained, professional-grade facilities",
  "Flexible Time Slots — Book at your convenience, morning to evening",
  "Equipment Available — Rackets and balls available for beginners",
  "Safe Environment — Clean, well-lit courts with supervision",
];

const SquashBooking = () => {
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
              <img src={squashImg} alt="Kid playing squash in modern indoor court" className="w-full rounded-2xl" />
            </div>
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-heading font-800 text-foreground">
                🏸 Squash Court <span className="text-primary">Booking</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Book our professional squash courts for practice or fun. Perfect for kids learning the sport or experienced players looking for quality facilities.
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
                  Booking is securely handled via ActivePass.
                </p>
                <Button asChild size="lg" className="w-full rounded-xl shadow-soft">
                  <a href={ACTIVEPASS_SQUASH_LINK} target="_blank" rel="noopener noreferrer">
                    👉 Book Squash Court <ExternalLink size={16} className="ml-1" />
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

export default SquashBooking;
