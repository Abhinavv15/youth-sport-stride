import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CampsSection from "@/components/CampsSection";
import ProgramsSection from "@/components/ProgramsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showCamps, setShowCamps] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#camps') {
        setShowCamps(true);
      } else {
        setShowCamps(false);
      }
    };

    // Check on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {showCamps ? (
          <CampsSection />
        ) : (
          <>
            <HeroSection />
            <ProgramsSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
