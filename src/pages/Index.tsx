import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoachSection from "@/components/CoachSection";
import CampsSection from "@/components/CampsSection";
import ProgramsSection from "@/components/ProgramsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
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
            <AboutSection />
            <CoachSection />
            <ProgramsSection />
            <WhyChooseUs />
            <HowItWorks />
            <Testimonials />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
