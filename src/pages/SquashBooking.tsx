import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Award, Trophy, ArrowRight, Users, Target, Clock, User, UsersRound, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import squashHeroImg from "@/assets/Squash Image.jpg";
import coachImg from "@/assets/abhinay vaddi.jpg";

import offer1 from "@/assets/squash_gallery_1.jpeg";
import offer2 from "@/assets/squash_training_1772282166274.png";
import offer3 from "@/assets/kids_having_fun_tt.png";
import offer4 from "@/assets/squash_gallery_33.jpeg";
import offer5 from "@/assets/squash_gallery_15.jpeg";
import missionImg from "@/assets/world sports academy image 1.webp";
import squashMissionImg from "@/assets/squash_gallery_15.jpeg";

import paraImg1 from "@/assets/image-24.webp";
import paraImg2 from "@/assets/image-29.webp";

import sq1 from "@/assets/squash_gallery_1.jpeg";
import sq2 from "@/assets/squash_gallery_2.jpeg";
import sq3 from "@/assets/squash_gallery_3.jpeg";
import sq4 from "@/assets/squash_gallery_4.jpeg";
import sq5 from "@/assets/squash_gallery_5.jpeg";
import sq6 from "@/assets/squash_gallery_6.jpeg";
import sq7 from "@/assets/squash_gallery_7.jpeg";
import sq8 from "@/assets/squash_gallery_8.jpeg";
import sq9 from "@/assets/squash_gallery_9.jpeg";
import sq10 from "@/assets/squash_gallery_10.jpeg";
import sq11 from "@/assets/squash_gallery_11.jpeg";
import sq12 from "@/assets/squash_gallery_12.jpeg";
import sq13 from "@/assets/squash_gallery_13.jpeg";
import sq14 from "@/assets/squash_gallery_14.jpeg";
import sq15 from "@/assets/squash_gallery_15.jpeg";
import sq16 from "@/assets/squash_gallery_16.jpeg";
import sq17 from "@/assets/squash_gallery_17.jpeg";
import sq18 from "@/assets/squash_gallery_18.jpeg";
import sq19 from "@/assets/squash_gallery_19.jpeg";
import sq20 from "@/assets/squash_gallery_20.jpeg";
import sq21 from "@/assets/squash_gallery_21.jpeg";
import sq22 from "@/assets/squash_gallery_22.jpeg";
import sq23 from "@/assets/squash_gallery_23.jpeg";
import sq24 from "@/assets/squash_gallery_24.jpeg";
import sq25 from "@/assets/squash_gallery_25.jpeg";
import sq26 from "@/assets/squash_gallery_26.jpeg";
import sq27 from "@/assets/squash_gallery_27.jpeg";
import sq28 from "@/assets/squash_gallery_28.jpeg";
import sq29 from "@/assets/squash_gallery_29.jpeg";
import sq30 from "@/assets/squash_gallery_30.jpeg";
import sq31 from "@/assets/squash_gallery_31.jpeg";
import sq32 from "@/assets/squash_gallery_32.jpeg";
import sq33 from "@/assets/squash_gallery_33.jpeg";

const galleryImages = [
  sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9, sq10, sq11, sq12, sq13, sq14, sq15, sq16, sq17, sq18, sq19, sq20, sq21, sq22, sq23, sq24, sq25, sq26, sq27, sq28, sq29, sq30, sq31, sq32, sq33
];

const faqs = [
  {
    question: "Do I need to bring my own equipment?",
    answer: "You need to bring your own equipment. It is also available for rent or purchase at the venue."
  },
  {
    question: "Do you offer trial sessions?",
    answer: "No, we do not offer trial sessions. But we have a free assessment which needs to be booked separately"
  },
  {
    question: "What is your cancellation policy?",
    answer: "We require a 24 hr notice for cancellation of all training sessions, drop-ins and court bookings."
  },
  {
    question: "Are there programs for children?",
    answer: "Yes, we have specialized junior development programs for ages 5 and above, ranging from introductory fun classes to elite high performance training."
  },
  {
    question: "Is the facility wheelchair accessible?",
    answer: "Both locations at Brampton and Burlington are wheelchair accessible."
  },
  {
    question: "What should I wear to my first session?",
    answer: "Wear comfortable athletic clothing and non-marking indoor court shoes."
  },
  {
    question: "Is there parking available at the academy?",
    answer: "Yes, we have ample free parking available for all members and guests directly in front of both the facilities."
  }
];

const programs = [
  {
    title: "SQUASH COURT BOOKING",
    subtitle: "RESERVE YOUR COURT TODAY",
    image: offer1,
    link: "https://activepass.app/",
  },
  {
    title: "TRAININGS",
    subtitle: "ELEVATE YOUR GAME",
    image: offer2,
    link: "https://activepass.app/",
  },
  {
    title: "MEMBERSHIP",
    subtitle: "UNLIMITED ACCESS AND EXCLUSIVE PERKS",
    image: offer5,
    link: "https://activepass.app/",
  },
  {
    title: "TOURNAMENTS, LEAGUES & LADDERS",
    subtitle: "COMPETE AT THE HIGHEST LEVEL",
    image: offer4,
    link: "https://activepass.app/",
  }
];

const SquashBooking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pb-16 -mt-16">
        {/* Full Frame Hero Section */}
        <section className="relative w-full min-h-screen md:min-h-[115vh] overflow-hidden mb-16">
          <img
            src={squashHeroImg}
            alt="Squash Court Booking"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/60 md:bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-800 text-white text-center mb-4 md:mb-6 drop-shadow-xl tracking-tight leading-tight">
              Burlington Squash Club
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 text-center max-w-xs sm:max-w-lg md:max-w-2xl mb-8 md:mb-10 drop-shadow-md font-medium leading-relaxed px-2">
              Burlington Squash Club is Canada's premier destination for top tier Squash training, dedicated to developing the next generation of athletes
            </p>
            <Button size="lg" className="bg-sport-green text-white hover:bg-sport-green/90 text-base md:text-lg px-6 md:px-8 py-5 md:py-8 rounded-full font-bold shadow-2xl transform transition-transform hover:scale-105" onClick={() => window.location.href = "https://activepass.app/"}>
              Book a Court
            </Button>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-6xl">



          {/* What We Offer Section */}
          <section className="py-12 md:py-24">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-2">What We Offer</h3>
              <h2 className="text-4xl md:text-5xl font-heading font-800 text-foreground uppercase tracking-tight">Programs for Every Player</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:auto-rows-[300px]">
              {/* Box 1 - Squash Court Booking */}
              <div className="lg:col-span-8 h-[260px] lg:h-auto relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg">
                <a href={programs[0].link} target={programs[0].link.startsWith('http') ? "_blank" : "_self"} rel="noreferrer" className="block w-full h-full">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 z-10" />
                  <img src={programs[0].image} alt={programs[0].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-tight mb-1 transition-colors">{programs[0].title}</h3>
                    <p className="text-white/80 font-medium uppercase text-xs md:text-sm tracking-wider">{programs[0].subtitle}</p>
                  </div>
                </a>
              </div>

              {/* Box 2 - Trainings */}
              <div className="lg:col-span-4 h-[220px] lg:h-auto relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg">
                <div className="absolute top-4 right-4 z-30 pointer-events-none">
                  <span className="bg-sport-green text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white/20 shadow-md backdrop-blur-sm">Coming Soon</span>
                </div>
                <a href={programs[1].link} target={programs[1].link.startsWith('http') ? "_blank" : "_self"} rel="noreferrer" className="block w-full h-full">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 z-10" />
                  <img src={programs[1].image} alt={programs[1].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-white uppercase tracking-tight mb-1 transition-colors">{programs[1].title}</h3>
                    <p className="text-white/80 font-medium uppercase text-xs md:text-sm tracking-wider">{programs[1].subtitle}</p>
                  </div>
                </a>
              </div>

              {/* Box 3 - Tournaments */}
              <div className="lg:col-span-6 h-[220px] lg:h-auto relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg">
                <div className="absolute top-4 right-4 z-30 pointer-events-none">
                  <span className="bg-sport-green text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white/20 shadow-md backdrop-blur-sm">Coming Soon</span>
                </div>
                <a href={programs[2].link} target={programs[2].link.startsWith('http') ? "_blank" : "_self"} rel="noreferrer" className="block w-full h-full">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 z-10" />
                  <img src={programs[2].image} alt={programs[2].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-white uppercase tracking-tight mb-1 transition-colors">{programs[2].title}</h3>
                    <p className="text-white/80 font-medium uppercase text-xs md:text-sm tracking-wider">{programs[2].subtitle}</p>
                  </div>
                </a>
              </div>

              {/* Box 4 - Leagues */}
              <div className="lg:col-span-6 h-[220px] lg:h-auto relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg">
                <div className="absolute top-4 right-4 z-30 pointer-events-none">
                  <span className="bg-sport-green text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white/20 shadow-md backdrop-blur-sm">Coming Soon</span>
                </div>
                <a href={programs[3].link} target={programs[3].link.startsWith('http') ? "_blank" : "_self"} rel="noreferrer" className="block w-full h-full">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 z-10" />
                  <img src={programs[3].image} alt={programs[3].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-white uppercase tracking-tight mb-1 transition-colors">{programs[3].title}</h3>
                    <p className="text-white/80 font-medium uppercase text-xs md:text-sm tracking-wider">{programs[3].subtitle}</p>
                  </div>
                </a>
              </div>
            </div>

          </section>
        </div>

        {/* About Us Section (Forging Champions) */}
        <section id="about" className="py-16 md:py-28 w-full relative overflow-hidden scroll-mt-24 mb-12 md:mb-24">
          <img src={sq16} alt="Squash Training Background" className="absolute inset-0 w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3 px-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-800 text-white tracking-tight">
                Forging <span className="text-sport-green">Champions</span>
              </h2>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                <span className="text-sport-green font-bold text-xl uppercase tracking-wide">World Sports Academy</span> is Canada's premier destination for elite table tennis and squash training, dedicated to developing the next generation of athletes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-[2.5rem] p-6 md:p-10 shadow-2xl border border-white/20 relative overflow-hidden mt-8 md:mt-12">
              {/* Stats grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 relative z-10">
                {/* Stat 1 */}
                <div className="text-center space-y-2 md:space-y-3 p-4 md:p-6 bg-black/30 hover:bg-black/50 transition-colors duration-300 rounded-2xl border border-white/10 group cursor-pointer">
                  <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl bg-sport-green text-white flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-[0_0_20px_rgba(46,196,182,0.4)] group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-white">500+</h3>
                  <p className="text-[10px] lg:text-xs font-bold tracking-widest uppercase text-white/80">Active Members</p>
                </div>
                {/* Stat 2 */}
                <div className="text-center space-y-2 md:space-y-3 p-4 md:p-6 bg-black/30 hover:bg-black/50 transition-colors duration-300 rounded-2xl border border-white/10 group cursor-pointer">
                  <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl bg-sport-blue text-white flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-[0_0_20px_rgba(25,118,210,0.4)] group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-white">50+</h3>
                  <p className="text-[10px] lg:text-xs font-bold tracking-widest uppercase text-white/80">Championships</p>
                </div>
                {/* Stat 3 */}
                <div className="text-center space-y-2 md:space-y-3 p-4 md:p-6 bg-black/30 hover:bg-black/50 transition-colors duration-300 rounded-2xl border border-white/10 group cursor-pointer">
                  <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl bg-sport-purple text-white flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-[0_0_20px_rgba(156,39,176,0.4)] group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-white">10k+</h3>
                  <p className="text-[10px] lg:text-xs font-bold tracking-widest uppercase text-white/80">Sessions</p>
                </div>
                {/* Stat 4 */}
                <div className="text-center space-y-2 md:space-y-3 p-4 md:p-6 bg-black/30 hover:bg-black/50 transition-colors duration-300 rounded-2xl border border-white/10 group cursor-pointer">
                  <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl bg-sport-orange text-white flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-[0_0_20px_rgba(255,152,0,0.4)] group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-white">15+</h3>
                  <p className="text-[10px] lg:text-xs font-bold tracking-widest uppercase text-white/80">Years Legacy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-6xl">
          <section className="mb-12 md:mb-24">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="space-y-8 order-2 md:order-1">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-sport-green"></span>
                  <span className="text-sport-green font-bold tracking-widest uppercase text-sm">Our Mission</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-800 text-foreground leading-tight">
                  Excellence is not an act, but a habit.
                </h2>
                <div className="space-y-6">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We believe that every athlete has the potential to achieve greatness. At World Sports Academy, we provide the environment, expertise, and encouragement needed to unlock that potential.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Whether you're picking up a racket for the first time or competing on the international stage, our commitment remains the same: to help you become the best version of yourself, both on and off the court.
                  </p>
                </div>
              </div>
              <div className="relative order-1 md:order-2">
                <div className="absolute inset-0 bg-gradient-to-bl from-sport-blue to-sport-green rounded-[2.5rem] transform -rotate-3 scale-[1.03] opacity-30 shadow-2xl"></div>
                <img src={squashMissionImg} alt="Training mission" className="relative z-10 w-full h-auto rounded-[2.5rem] object-cover shadow-2xl" />
              </div>
            </div>
          </section>

        </div>

        {/* Kids Training Section */}
        <section id="kids-training" className="py-16 md:py-28 w-full relative overflow-hidden">
          {/* Background image covering the whole section to the edges */}
          <img src={squashHeroImg} alt="Squash Training" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <div className="space-y-3 md:space-y-4 max-w-2xl mx-auto px-2">
                <div className="flex flex-col items-center gap-2 md:gap-3 mb-2">
                  <span className="bg-sport-green text-white text-[10px] sm:text-xs font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full uppercase tracking-widest border border-white/20 shadow-lg">
                    Coming Soon
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-800 tracking-tight text-white leading-tight">
                    Choose Your Path
                  </h2>
                </div>
                <p className="text-white/80 text-base sm:text-lg max-w-lg md:max-w-2xl mx-auto leading-relaxed">
                  Led by Head Coach Abhinay Vaddi, our programs are tailored to elevate your game regardless of your starting point.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-fr relative z-10 mb-8">
              <div className="bg-card/95 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-soft transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-4 right-4 z-20 pointer-events-none">
                  <span className="bg-sport-green text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">Coming Soon</span>
                </div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-sport-blue/10">
                  <User className="w-7 h-7 text-sport-blue" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-foreground mb-3">Private Coaching</h3>
                <p className="text-muted-foreground mb-8 min-h-[48px] leading-relaxed">Dedicated 1-on-1 attention to refine technique and strategy.</p>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-start gap-3 mt-1 text-sm font-medium text-foreground/80"><CheckCircle2 className="w-5 h-5 shrink-0 text-sport-green" /><span>Personalized development plan</span></li>
                  <li className="flex items-start gap-3 mt-1 text-sm font-medium text-foreground/80"><CheckCircle2 className="w-5 h-5 shrink-0 text-sport-green" /><span>Video analysis & feedback</span></li>
                  <li className="flex items-start gap-3 mt-1 text-sm font-medium text-foreground/80"><CheckCircle2 className="w-5 h-5 shrink-0 text-sport-green" /><span>Flexible scheduling</span></li>
                </ul>
                <Button
                  size="lg"
                  className="w-full text-base font-semibold shadow-md transition-all duration-300 transform active:scale-[0.98] bg-sport-green text-white hover:bg-sport-green/90"
                  onClick={() => window.location.href = "https://activepass.app/"}
                >
                  Book Now
                </Button>
              </div>
              <div className="bg-card/95 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-soft transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-4 right-4 z-20 pointer-events-none">
                  <span className="bg-sport-green text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">Coming Soon</span>
                </div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-sport-purple/10">
                  <Users className="w-7 h-7 text-sport-purple" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-foreground mb-3">Semi-Private</h3>
                <p className="text-muted-foreground mb-8 min-h-[48px] leading-relaxed">Train with a partner. Perfect for friends or similar skill levels.</p>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-start gap-3 mt-1 text-sm font-medium text-foreground/80"><CheckCircle2 className="w-5 h-5 shrink-0 text-sport-green" /><span>2:1 Player-to-Coach ratio</span></li>
                  <li className="flex items-start gap-3 mt-1 text-sm font-medium text-foreground/80"><CheckCircle2 className="w-5 h-5 shrink-0 text-sport-green" /><span>Partner drills & tactics</span></li>
                  <li className="flex items-start gap-3 mt-1 text-sm font-medium text-foreground/80"><CheckCircle2 className="w-5 h-5 shrink-0 text-sport-green" /><span>Cost-effective training</span></li>
                </ul>
                <Button
                  size="lg"
                  className="w-full text-base font-semibold shadow-md transition-all duration-300 transform active:scale-[0.98] bg-sport-green text-white hover:bg-sport-green/90"
                  onClick={() => window.location.href = "https://activepass.app/"}
                >
                  Book Now
                </Button>
              </div>
              <div className="bg-card/95 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-soft transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-4 right-4 z-20 pointer-events-none">
                  <span className="bg-sport-green text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">Coming Soon</span>
                </div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-sport-orange/10">
                  <UsersRound className="w-7 h-7 text-sport-orange" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-foreground mb-3">Group Sessions</h3>
                <p className="text-muted-foreground mb-8 min-h-[48px] leading-relaxed">Dynamic group training to build skills in a social environment.</p>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-start gap-3 mt-1 text-sm font-medium text-foreground/80"><CheckCircle2 className="w-5 h-5 shrink-0 text-sport-green" /><span>Small group dynamic</span></li>
                  <li className="flex items-start gap-3 mt-1 text-sm font-medium text-foreground/80"><CheckCircle2 className="w-5 h-5 shrink-0 text-sport-green" /><span>Match play & scenarios</span></li>
                  <li className="flex items-start gap-3 mt-1 text-sm font-medium text-foreground/80"><CheckCircle2 className="w-5 h-5 shrink-0 text-sport-green" /><span>Community building</span></li>
                </ul>
                <Button
                  size="lg"
                  className="w-full text-base font-semibold shadow-md transition-all duration-300 transform active:scale-[0.98] bg-sport-green text-white hover:bg-sport-green/90"
                  onClick={() => window.location.href = "https://activepass.app/"}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Section */}
        <section id="membership" className="py-12 md:py-20 w-full relative overflow-hidden mb-8 mt-8 md:mt-12 bg-background">
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl group border border-border/50">
              {/* Card Background Image */}
              <img src={sq27} alt="Elite Benefits Background" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
              {/* Dark Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 md:from-black/90 md:via-black/75 md:to-black/40" />

              <div className="relative z-10 p-8 md:p-14 lg:p-16 flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="space-y-4 text-center md:text-left flex-1">
                  <div className="inline-block px-3 py-1 bg-sport-green text-white text-xs font-bold uppercase tracking-widest rounded-full mb-2 shadow-lg">
                    Elite Benefits
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-900 tracking-tight text-white uppercase drop-shadow-md">
                    Unlock the full <br className="hidden md:block" /> squash experience
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-xl font-medium drop-shadow-sm">
                    Get unlimited access to our state-of-the-art facilities, participate in exclusive leagues, enjoy priority tournament registration, and track your progress. Join our passionate community today.
                  </p>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto">
                  <Button
                    className="w-full md:w-auto text-sm md:text-base font-bold rounded-full px-10 py-8 shadow-2xl transition-all duration-300 transform hover:scale-105 bg-sport-green text-white hover:bg-sport-green/90 uppercase tracking-widest"
                    onClick={() => window.location.href = "https://activepass.app/"}
                  >
                    Become a Member <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-6xl">
          {/* Gallery Section */}
          <section id="gallery" className="py-12 md:py-24 mb-16 max-w-6xl mx-auto px-4 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-900 tracking-tight text-foreground uppercase">
                GALLERY
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="relative overflow-hidden aspect-square group shadow-sm bg-muted/20">
                  <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </section>

          {/* FAQ / Proud Section */}
          <section className="py-12 md:py-24 mb-16">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

              {/* Left Column (Text & Accordion) */}
              <div className="space-y-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-900 tracking-tight text-foreground uppercase leading-[1.1]">
                  We're proud to be the <br className="hidden lg:block" />best at training
                </h2>

                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`item-${idx}`}
                      className="border-b border-border py-2"
                    >
                      <AccordionTrigger className="text-left font-bold text-lg md:text-xl uppercase hover:no-underline hover:text-sport-green transition-colors py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Right Column (Image with Floating Boxes) */}
              <div className="relative pl-0 lg:pl-10 mt-10 lg:mt-0 pb-24 sm:pb-32 lg:pb-10">
                <div className="relative rounded-[2rem] overflow-hidden aspect-square lg:aspect-[4/5]">
                  <img src={squashMissionImg} alt="Squash Training" className="w-full h-full object-cover object-top" />
                </div>

                {/* Floating Boxes — inline on mobile, absolute-bottom on lg */}
                <div className="flex gap-3 mt-4 lg:absolute lg:-bottom-8 lg:-left-2 xl:-left-6 lg:mt-0 lg:pr-4 overflow-x-auto pb-2">

                  {/* Coaches Box */}
                  <div className="bg-sport-green text-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl min-w-[110px] sm:w-[150px] lg:w-[190px] flex flex-col justify-between aspect-square flex-shrink-0">
                    <p className="text-xs font-semibold tracking-wider uppercase text-white/90">Coaches</p>
                    <div className="mt-auto">
                      <h4 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-900 mb-1">5+</h4>
                      <p className="text-[10px] font-bold tracking-wider uppercase text-white/80">Professional Trainers</p>
                    </div>
                  </div>

                  {/* Locations Box */}
                  <div className="bg-sport-blue text-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl min-w-[110px] sm:w-[150px] lg:w-[190px] flex flex-col justify-between aspect-square flex-shrink-0">
                    <p className="text-xs font-semibold tracking-wider uppercase text-white/90">Locations</p>
                    <div className="mt-auto">
                      <h4 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-900 mb-1">2</h4>
                      <p className="text-[10px] font-bold tracking-wider uppercase text-white/80">Active Centers</p>
                    </div>
                  </div>

                  {/* Students Box */}
                  <div className="bg-sport-purple text-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl min-w-[110px] sm:w-[150px] lg:w-[190px] flex flex-col justify-between aspect-square flex-shrink-0">
                    <p className="text-xs font-semibold tracking-wider uppercase text-white/90">Community</p>
                    <div className="mt-auto">
                      <h4 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-900 mb-1">500+</h4>
                      <p className="text-[10px] font-bold tracking-wider uppercase text-white/80">Students Trained</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SquashBooking;
