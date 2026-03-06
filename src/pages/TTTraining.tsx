import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Award, Trophy, ArrowRight, Users, Target, Clock, User, UsersRound, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ttHeroImg from "@/assets/imaege4.png";
import coachImg from "@/assets/abhinay vaddi.jpg";

import offer1 from "@/assets/generic_adult_playing.png";
import offer2 from "@/assets/TT IMAGE.jpg";
import offer3 from "@/assets/kids_having_fun_tt.png";
import offer4 from "@/assets/image-30.webp";
import offer5 from "@/assets/image-19.webp";
import missionImg from "@/assets/world sports academy image 1.webp";

import ttLogo1 from "@/assets/tt_new_1.jpeg";
import ttLogo2 from "@/assets/tt_new_2.jpeg";
import ttLogo3 from "@/assets/tt_new_3.jpeg";
import ttLogo4 from "@/assets/tt_new_4.jpeg";

import paraImg1 from "@/assets/image-24.webp";
import paraImg2 from "@/assets/image-29.webp";

import g1 from "@/assets/1.webp";
import g2 from "@/assets/abhinay vaddi.jpg";
import g3 from "@/assets/generic_adult_playing.png";
import g4 from "@/assets/imaege4.png";
import g5 from "@/assets/image-1.webp";
import g6 from "@/assets/image-2.webp";
import g7 from "@/assets/image-4.webp";
import g8 from "@/assets/image-5.webp";
import g9 from "@/assets/image-6.webp";
import g10 from "@/assets/image-7.webp";
import g11 from "@/assets/image-9.webp";
import g12 from "@/assets/image-10.webp";
import g13 from "@/assets/image-11.webp";
import g14 from "@/assets/image-12.webp";
import g15 from "@/assets/image-13.webp";
import g16 from "@/assets/image-16.webp";
import g17 from "@/assets/image-17.webp";
import g18 from "@/assets/image-18.webp";
import g19 from "@/assets/image-19.webp";
import g20 from "@/assets/image-20.webp";
import g21 from "@/assets/image-21.webp";
import g22 from "@/assets/image-23.webp";
import g23 from "@/assets/image-24.webp";
import g24 from "@/assets/image-25.webp";
import g25 from "@/assets/image-27.webp";
import g26 from "@/assets/image-28.webp";
import g27 from "@/assets/image-29.webp";
import g28 from "@/assets/image-30.webp";
import g29 from "@/assets/image-31.webp";
import g30 from "@/assets/image-32.webp";
import g31 from "@/assets/image-33.webp";
import g32 from "@/assets/image-34.webp";
import g33 from "@/assets/image-35.webp";
import g34 from "@/assets/image-36.webp";
import g35 from "@/assets/image-41.webp";
import g36 from "@/assets/image-43.webp";
import g37 from "@/assets/image-44.webp";
import g38 from "@/assets/image-45.webp";
import g39 from "@/assets/image-46.webp";
import g40 from "@/assets/image-47.webp";
import g41 from "@/assets/image-48.webp";

import ng1 from "@/assets/image1.jpeg";
import ng2 from "@/assets/image2.jpeg";
import ng3 from "@/assets/image3.jpeg";
import ng4 from "@/assets/image4.jpeg";
import ng5 from "@/assets/image5.jpeg";

const galleryImages = [
  ng1, ng2, ng3, ng4, ng5, g1, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19, g20, g21, g22, g23, g24, g25, g26, g27, g28, g29, g30, g31, g32, g33, g34, g35, g36, g37, g38, g39, g40, g41
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
    title: "KIDS TRAINING",
    subtitle: 'BUILD INTEREST AND LEARN "FUN"DAMENTALS',
    image: offer3,
    link: "#kids-training",
  },
  {
    title: "MEMBERSHIP",
    subtitle: "UNLIMITED ACCESS AND EXCLUSIVE PERKS",
    image: offer2,
    link: "#membership",
  },
  {
    title: "OPEN PLAY",
    subtitle: "CASUAL PLAY AND DAILY ACCESS FOR ALL LEVELS",
    image: offer1,
    link: "https://activepass.app/",
  },
  {
    title: "HIGH PERFORMANCE TRAINING",
    subtitle: "ADULT & KIDS HIGH-PERFORMANCE COACHING AND DEVELOPMENT",
    image: offer4,
    link: "#advanced-classes",
  },
  {
    title: "TOURNAMENTS & LEAGUES",
    subtitle: "COMPETE AND SHOWCASE YOUR SKILLS",
    image: offer5,
    link: "https://activepass.app/",
  }
];

const TTTraining = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pb-16 -mt-16">
        {/* Full Frame Hero Section */}
        <section className="relative w-full min-h-screen md:min-h-[115vh] overflow-hidden mb-8 md:mb-16">
          {/* Hero image — show girl's face on all screens by centering on left portion of image */}
          <img
            src={ttHeroImg}
            alt="Table Tennis Training"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "20% 15%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 sm:justify-center sm:pb-0 p-4 md:p-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-800 text-white text-center mb-4 md:mb-6 drop-shadow-xl tracking-tight leading-tight">
              Table Tennis Training
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 text-center max-w-xs sm:max-w-lg md:max-w-2xl mb-8 md:mb-10 drop-shadow-md font-medium leading-relaxed px-2">
              Join Canada's premier sports academy. Whether you're a beginner learning the basics or a pro refining your game, we have the expert coaching and world-class facilities for you.
            </p>
            <Button size="lg" className="bg-sport-green text-white hover:bg-sport-green/90 text-base md:text-lg px-6 md:px-8 py-5 md:py-8 rounded-full font-bold shadow-2xl transform transition-transform hover:scale-105">
              Take a free Assessment
            </Button>

            <div className="mt-8 sm:mt-10 mb-2 text-center">
              <h3 className="text-white/90 font-bold tracking-widest uppercase text-sm md:text-base drop-shadow-lg drop-shadow-md">
                Certified High Performance Training Centre
              </h3>
            </div>

            {/* Logos on top of hero image */}
            <div className="mt-2 sm:mt-4 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10">
              <img src={ttLogo1} alt="Logo 1" className="h-12 sm:h-16 md:h-20 w-auto object-contain mix-blend-screen bg-white rounded-md p-1 opacity-90 transition-opacity hover:opacity-100 shadow-lg" />
              <img src={ttLogo2} alt="Logo 2" className="h-12 sm:h-16 md:h-20 w-auto object-contain mix-blend-screen bg-white rounded-md p-1 opacity-90 transition-opacity hover:opacity-100 shadow-lg" />
              <img src={ttLogo3} alt="Logo 3" className="h-12 sm:h-16 md:h-20 w-auto object-contain mix-blend-screen bg-white rounded-md p-1 opacity-90 transition-opacity hover:opacity-100 shadow-lg" />
              <img src={ttLogo4} alt="Logo 4" className="h-12 sm:h-16 md:h-20 w-auto object-contain mix-blend-screen bg-white rounded-md p-1 opacity-90 transition-opacity hover:opacity-100 shadow-lg" />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-6xl">

          {/* Head Coach Section */}
          <section className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-14 shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sport-blue/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-sport-green/5 rounded-full blur-3xl -ml-20 -mb-20"></div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
              <div className="order-2 md:order-1 space-y-8">
                <div className="space-y-3">
                  <h3 className="text-sport-green font-bold tracking-widest uppercase text-sm flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-sport-green"></span> Head Coach
                  </h3>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-800 text-foreground leading-tight">
                    Meet <br /> Abhinay Vaddi
                  </h2>
                  <p className="text-xl text-primary font-semibold mt-2 text-sport-green">
                    Expert guidance for every step of your journey
                  </p>
                </div>

                <blockquote className="border-l-4 border-sport-green pl-6 py-2 italic text-muted-foreground font-medium text-lg md:text-xl leading-relaxed bg-slate-50 dark:bg-slate-800/50 rounded-r-2xl pr-6">
                  "My philosophy is simple: every athlete has untapped potential. Whether you're picking up a racket for the first time or aiming for national rankings, my goal is to provide the technical foundation and strategic mindset you need to excel."
                </blockquote>

                <div className="space-y-6 pt-4">
                  <div className="flex gap-4">
                    <div className="bg-sport-green/10 p-3 rounded-2xl shrink-0 h-fit shadow-sm border border-sport-green/20">
                      <Award className="text-sport-green h-7 w-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">Certified Professional</h4>
                      <p className="text-muted-foreground mt-1 leading-relaxed">Internationally recognized coaching certifications and continuous professional development.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-sport-green/10 p-3 rounded-2xl shrink-0 h-fit shadow-sm border border-sport-green/20">
                      <Trophy className="text-sport-green h-7 w-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">Proven Track Record</h4>
                      <p className="text-muted-foreground mt-1 leading-relaxed">History of developing state and national level champions across multiple age categories.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    size="lg"
                    className="rounded-xl px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-foreground text-background"
                    onClick={() => window.location.href = "https://activepass.app/"}
                  >
                    Book a Session
                  </Button>
                </div>
              </div>

              <div className="order-1 md:order-2 relative group">
                <div className="absolute inset-0 bg-sport-green rounded-[2rem] transform rotate-3 scale-[1.03] opacity-30 dark:opacity-40 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105"></div>
                <img
                  src={coachImg}
                  alt="Head Coach Abhinay Vaddi"
                  className="relative z-10 w-full rounded-[2rem] object-cover shadow-2xl aspect-[4/5] object-top transition-transform duration-500 group-hover:-translate-y-2"
                />
              </div>
            </div>
          </section>

          {/* What We Offer Section */}
          <section className="py-24">
            <div className="text-center mb-12">
              <h3 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-2">What We Offer</h3>
              <h2 className="text-4xl md:text-5xl font-heading font-800 text-foreground uppercase tracking-tight">Programs for Every Player</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[300px]">
              {/* Box 1 - Kids Training (Large) */}
              <div className="md:col-span-8 h-[260px] md:h-auto relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg">
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

              {/* Box 2 - Open Play (Small Vertical) */}
              <div className="md:col-span-4 h-[220px] md:h-auto relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg">
                <a href={programs[2].link} target={programs[2].link.startsWith('http') ? "_blank" : "_self"} rel="noreferrer" className="block w-full h-full">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 z-10" />
                  <img src={programs[2].image} alt={programs[2].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-white uppercase tracking-tight mb-1 transition-colors">{programs[2].title}</h3>
                    <p className="text-white/80 font-medium uppercase text-xs md:text-sm tracking-wider">{programs[2].subtitle}</p>
                  </div>
                </a>
              </div>

              {/* Box 3 - Membership (Small) */}
              <div className="md:col-span-4 h-[220px] md:h-auto relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg">
                <a href={programs[1].link} target={programs[1].link.startsWith('http') ? "_blank" : "_self"} rel="noreferrer" className="block w-full h-full">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 z-10" />
                  <img src={programs[1].image} alt={programs[1].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-white uppercase tracking-tight mb-1 transition-colors">{programs[1].title}</h3>
                    <p className="text-white/80 font-medium uppercase text-xs md:text-sm tracking-wider">{programs[1].subtitle}</p>
                  </div>
                </a>
              </div>

              {/* Box 4 - Advanced Classes (Small) */}
              <div className="md:col-span-4 h-[220px] md:h-auto relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg">
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

              {/* Box 5 - League and Tournament (Small) */}
              <div className="md:col-span-4 h-[220px] md:h-auto relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg">
                <a href={programs[4].link} target={programs[4].link.startsWith('http') ? "_blank" : "_self"} rel="noreferrer" className="block w-full h-full">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 z-10" />
                  <img src={programs[4].image} alt={programs[4].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-white uppercase tracking-tight mb-1 transition-colors">{programs[4].title}</h3>
                    <p className="text-white/80 font-medium uppercase text-xs md:text-sm tracking-wider">{programs[4].subtitle}</p>
                  </div>
                </a>
              </div>
            </div>

          </section>

          {/* About Us Section */}
          <section id="about" className="py-24 scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-800 text-foreground tracking-tight">
                Forging <span className="text-sport-green">Champions</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                <span className="text-sport-green font-bold text-xl uppercase tracking-wide">Smash Table Tennis Club</span> is Canada's premier destination for elite table tennis training, dedicated to developing the next generation of athletes.
              </p>
            </div>

            <div className="bg-card rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-border mb-24 relative overflow-hidden">
              {/* Stats grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                {/* Stat 1 */}
                <div className="text-center space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-sport-green/10 text-sport-green flex items-center justify-center mx-auto mb-4">
                    <Users className="w-7 h-7" />
                  </div>
                  <h3 className="text-4xl font-bold font-heading text-foreground">500+</h3>
                  <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Active Members</p>
                </div>
                {/* Stat 2 */}
                <div className="text-center space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-sport-green/10 text-sport-green flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-7 h-7" />
                  </div>
                  <h3 className="text-4xl font-bold font-heading text-foreground">50+</h3>
                  <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Championships</p>
                </div>
                {/* Stat 3 */}
                <div className="text-center space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-sport-green/10 text-sport-green flex items-center justify-center mx-auto mb-4">
                    <Target className="w-7 h-7" />
                  </div>
                  <h3 className="text-4xl font-bold font-heading text-foreground">10k+</h3>
                  <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Sessions</p>
                </div>
                {/* Stat 4 */}
                <div className="text-center space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-sport-green/10 text-sport-green flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-7 h-7" />
                  </div>
                  <h3 className="text-4xl font-bold font-heading text-foreground">15+</h3>
                  <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Years Legacy</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
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
                    We believe that every athlete has the potential to achieve greatness. At <span className="text-sport-green font-bold text-xl uppercase tracking-wide">Smash Table Tennis Club</span>, we provide the environment, expertise, and encouragement needed to unlock that potential.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Whether you're picking up a bat for the first time or competing on the international stage, our commitment remains the same: to help you become the best version of yourself, both on and off the court.
                  </p>
                </div>
              </div>
              <div className="relative order-1 md:order-2">
                <div className="absolute inset-0 bg-gradient-to-bl from-sport-blue to-sport-green rounded-[2.5rem] transform -rotate-3 scale-[1.03] opacity-30 shadow-2xl"></div>
                <img src={missionImg} alt="Table Tennis paddle on table" className="relative z-10 w-full rounded-[2.5rem] object-cover shadow-2xl aspect-square md:aspect-[4/5] object-center" />
              </div>
            </div>
          </section>

        </div>

        {/* Kids Training Section */}
        <section id="kids-training" className="py-20 md:py-28 w-full relative overflow-hidden">
          {/* Background image covering the whole section to the edges */}
          <img src={missionImg} alt="Table Tennis Training" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center mb-12">
              <div className="space-y-4 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-heading font-800 tracking-tight text-white">Choose Your Path</h2>
                <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
                  Led by Head Coach Abhinay Vaddi, our programs are tailored to elevate your game regardless of your starting point.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr relative z-10">
              <div className="bg-card/95 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col h-full relative overflow-hidden group hover:-translate-y-1">
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
              <div className="bg-card/95 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col h-full relative overflow-hidden group hover:-translate-y-1">
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
              <div className="bg-card/95 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col h-full relative overflow-hidden group hover:-translate-y-1">
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

        <div className="container mx-auto px-4 max-w-6xl">
          {/* High Performance Training Section */}
          <section id="advanced-classes" className="pt-8 pb-12 mb-8 mt-12">
            <div className="text-center mb-10 space-y-3">
              <h2 className="text-3xl md:text-4xl font-heading font-800 tracking-tight text-foreground">High Performance Training</h2>
            </div>
            <div className="bg-card rounded-[2rem] shadow-xl border border-border overflow-hidden max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <img src={offer4} alt="Advanced Classes" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="p-6 md:p-10 lg:p-12 space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-sport-green/10 text-sport-green flex items-center justify-center mb-4">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">Reach Peak Performance</h2>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    For athletes aiming for the podium. Our high-performance training includes advanced tactics, physical conditioning, and mental toughness coaching.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sport-green shrink-0" />
                      <span className="font-medium text-sm text-foreground">Elite coaching</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sport-green shrink-0" />
                      <span className="font-medium text-sm text-foreground">Video analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sport-green shrink-0" />
                      <span className="font-medium text-sm text-foreground">Tournament prep</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sport-green shrink-0" />
                      <span className="font-medium text-sm text-foreground">Strength & conditioning</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button
                      className="w-full sm:w-auto text-sm font-semibold rounded-full px-6 py-5 shadow-md transition-all duration-300 transform hover:scale-105 bg-foreground text-background"
                      onClick={() => window.location.href = "https://activepass.app/"}
                    >
                      Book Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Membership Section */}
          <section id="membership" className="py-16 mb-8 mt-12 px-4 max-w-6xl mx-auto">
            <div className="bg-sport-green/5 rounded-[2rem] border-2 border-sport-green/20 p-8 md:p-14 flex flex-col items-center justify-between gap-8 md:flex-row shadow-sm hover:shadow-md hover:border-sport-green/40 transition-all duration-300">
              <div className="space-y-4 text-center md:text-left flex-1">
                <div className="inline-block px-3 py-1 bg-sport-green/10 text-sport-green text-xs font-bold uppercase tracking-widest rounded-full mb-2">
                  Elite Benefits
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-900 tracking-tight text-foreground uppercase pt-1">
                  Unlock the full <br className="hidden md:block" /> table tennis experience
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
                  Get unlimited access to our state-of-the-art facilities, participate in exclusive leagues, enjoy priority tournament registration, and track your progress. Join our passionate community today.
                </p>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto mt-6 md:mt-0">
                <Button
                  className="w-full md:w-auto text-sm md:text-base font-semibold rounded-full px-8 py-7 shadow-lg transition-all duration-300 transform hover:scale-105 bg-sport-green text-white hover:bg-sport-green/90 uppercase tracking-widest"
                  onClick={() => window.location.href = "https://activepass.app/"}
                >
                  Become a Member <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </section>

          {/* Para Athletes Section */}
          <section className="py-12 md:py-16 mb-8 mt-4 px-4 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-card to-muted/50 rounded-[2.5rem] shadow-xl border border-border overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 md:gap-0 items-center">
                <div className="p-8 md:p-12 lg:p-16 space-y-6 md:pr-4">
                  <div className="inline-block px-3 py-1 bg-sport-blue/10 text-sport-blue text-xs font-bold uppercase tracking-widest rounded-full mb-2">
                    Inclusivity & Excellence
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-900 tracking-tight text-foreground uppercase pt-1 leading-tight">
                    Para Athlete <br className="hidden lg:block" /> Training
                  </h2>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    We are deeply committed to empowering athletes of all abilities. Our specialized high-performance coaching programs emphasize the importance of inclusive para-training.
                  </p>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    We are proud to train and support members of the <span className="font-bold text-foreground">Canadian National Para team</span>, providing them with world-class facilities and expert guidance to conquer the international stage.
                  </p>
                  <div className="pt-2">
                    <p className="font-semibold text-foreground mb-1">For Enquiries:</p>
                    <p className="text-muted-foreground text-sm">
                      Abhinay Vaddi <br />
                      <a href="tel:+13653249060" className="text-sport-green hover:underline">+1 (365) 324-9060</a> <br />
                      <a href="mailto:info@wsateam.com" className="text-sport-green hover:underline">info@wsateam.com</a>
                    </p>
                  </div>
                </div>
                <div className="relative h-full min-h-[350px] md:min-h-[450px] p-6 lg:p-10 flex items-center justify-center">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sport-blue/5 rounded-full blur-3xl -z-10"></div>
                  <div className="grid grid-cols-2 h-full w-full gap-4 relative z-10">
                    <img src={paraImg1} alt="Para Athlete Training Focus" className="w-full h-[200px] md:h-[280px] object-cover rounded-2xl shadow-lg transform -rotate-3 transition-transform hover:rotate-0 hover:scale-105 duration-300" />
                    <img src={paraImg2} alt="Canadian National Para Team Training" className="w-full h-[200px] md:h-[280px] object-cover rounded-2xl shadow-lg mt-12 md:mt-16 transform rotate-3 transition-transform hover:rotate-0 hover:scale-105 duration-300 relative z-20" />
                  </div>
                </div>
              </div>
            </div>
          </section>

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
                  <img src={img} alt={`Gallery \${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </section>

          {/* FAQ / Proud Section */}
          <section className="py-24 mb-16">
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
                      value={`item-\${idx}`}
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
                  <img src={missionImg} alt="Table Tennis Training" className="w-full h-full object-cover" />
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

export default TTTraining;
