import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Award, Trophy, ArrowRight, Users, Target, Clock, User, UsersRound, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import squashHeroImg from "@/assets/Squash Image.jpg";
import coachImg from "@/assets/abhinay vaddi.jpg";

import offer1 from "@/assets/squash_booking_1772282203914.png";
import offer2 from "@/assets/squash_training_1772282166274.png";
import offer3 from "@/assets/kids_having_fun_tt.png";
import offer4 from "@/assets/squash_tournament_1772282244680.png";
import offer5 from "@/assets/image-19.webp";
import missionImg from "@/assets/world sports academy image 1.webp";

import paraImg1 from "@/assets/image-24.webp";
import paraImg2 from "@/assets/image-29.webp";

import gal1 from "@/assets/image-2.webp";
import gal2 from "@/assets/image-4.webp";
import gal3 from "@/assets/image-5.webp";
import gal4 from "@/assets/image-6.webp";
import gal5 from "@/assets/image-10.webp";
import gal6 from "@/assets/image-11.webp";
import gal7 from "@/assets/image-12.webp";
import gal8 from "@/assets/image-13.webp";
import gal9 from "@/assets/image-17.webp";
import gal10 from "@/assets/image-19.webp";
import gal11 from "@/assets/image-20.webp";
import gal12 from "@/assets/image-24.webp";
import gal13 from "@/assets/image-32.webp";
import gal14 from "@/assets/image-33.webp";
import gal15 from "@/assets/image-41.webp";
import gal16 from "@/assets/image-44.webp";
import gal17 from "@/assets/image-48.webp";

const galleryImages = [
  gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10, gal11, gal12, gal13, gal14, gal15, gal16, gal17
];

const faqs = [
  {
    question: "Do I need to bring my own equipment?",
    answer: "You need to bring your own equipment. IT is also available for rent or purchase at the venue."
  },
  {
    question: "Do you offer trial sessions?",
    answer: "No trial sessions, but we offer a free assessment which needs to be booked separately."
  },
  {
    question: "What is your cancellation policy?",
    answer: "24 hrs notice for cancellation of all training sessions, drop ins and court bookings"
  },
  {
    question: "Are there programs for children?",
    answer: "Ages 5 and above; elite high performance training"
  },
  {
    question: "Is the facility wheelchair accessible?",
    answer: "Both locations are wheelchair accessible"
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
    title: "TOURNAMENTS",
    subtitle: "COMPETE AT THE HIGHEST LEVEL",
    image: offer4,
    link: "https://activepass.app/",
  },
  {
    title: "LEAGUES",
    subtitle: "JOIN OUR SQUASH LEAGUE",
    image: offer5,
    link: "https://activepass.app/",
  }
];

const SquashBooking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pb-16 -mt-16">
        {/* Full Frame Hero Section */}
        <section className="relative w-full min-h-[115vh] overflow-hidden mb-16">
          <img
            src={squashHeroImg}
            alt="Squash Court Booking"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-800 text-white text-center mb-6 drop-shadow-xl tracking-tight">
              Squash Court Booking
            </h1>
            <p className="text-lg md:text-xl text-white/90 text-center max-w-2xl mb-10 drop-shadow-md font-medium">
              Join Canada's premier sports academy. Whether you're a beginner learning the basics or a pro refining your game, we have the expert coaching and world-class facilities for you.
            </p>
            <Button size="lg" className="bg-sport-green text-white hover:bg-sport-green/90 text-lg px-8 py-6 md:py-8 rounded-full font-bold shadow-2xl transform transition-transform hover:scale-105" onClick={() => window.location.href = "https://activepass.app/"}>
              Book a Court
            </Button>
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

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
              {/* Box 1 - Squash Court Booking */}
              <div className="md:col-span-8 relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg">
                <a href={programs[0].link} target={programs[0].link.startsWith('http') ? "_blank" : "_self"} rel="noreferrer" className="block w-full h-full">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 z-10" />
                  <img src={programs[0].image} alt={programs[0].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <h3 className="text-3xl font-heading font-bold text-white uppercase tracking-tight mb-1 transition-colors">{programs[0].title}</h3>
                    <p className="text-white/80 font-medium uppercase text-sm tracking-wider">{programs[0].subtitle}</p>
                  </div>
                </a>
              </div>

              {/* Box 2 - Trainings */}
              <div className="md:col-span-4 relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg">
                <a href={programs[1].link} target={programs[1].link.startsWith('http') ? "_blank" : "_self"} rel="noreferrer" className="block w-full h-full">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 z-10" />
                  <img src={programs[1].image} alt={programs[1].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-tight mb-1 transition-colors">{programs[1].title}</h3>
                    <p className="text-white/80 font-medium uppercase text-sm tracking-wider">{programs[1].subtitle}</p>
                  </div>
                </a>
              </div>

              {/* Box 3 - Tournaments */}
              <div className="md:col-span-6 relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg">
                <a href={programs[2].link} target={programs[2].link.startsWith('http') ? "_blank" : "_self"} rel="noreferrer" className="block w-full h-full">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 z-10" />
                  <img src={programs[2].image} alt={programs[2].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-tight mb-1 transition-colors">{programs[2].title}</h3>
                    <p className="text-white/80 font-medium uppercase text-sm tracking-wider">{programs[2].subtitle}</p>
                  </div>
                </a>
              </div>

              {/* Box 4 - Leagues */}
              <div className="md:col-span-6 relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg">
                <a href={programs[3].link} target={programs[3].link.startsWith('http') ? "_blank" : "_self"} rel="noreferrer" className="block w-full h-full">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 z-10" />
                  <img src={programs[3].image} alt={programs[3].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-tight mb-1 transition-colors">{programs[3].title}</h3>
                    <p className="text-white/80 font-medium uppercase text-sm tracking-wider">{programs[3].subtitle}</p>
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
                World Sports Academy is Canada's premier destination for elite table tennis and squash training, dedicated to developing the next generation of athletes.
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
                    We believe that every athlete has the potential to achieve greatness. At World Sports Academy, we provide the environment, expertise, and encouragement needed to unlock that potential.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Whether you're picking up a racket for the first time or competing on the international stage, our commitment remains the same: to help you become the best version of yourself, both on and off the court.
                  </p>
                </div>
              </div>
              <div className="relative order-1 md:order-2">
                <div className="absolute inset-0 bg-gradient-to-bl from-sport-blue to-sport-green rounded-[2.5rem] transform -rotate-3 scale-[1.03] opacity-30 shadow-2xl"></div>
                <img src={missionImg} alt="Training mission" className="relative z-10 w-full rounded-[2.5rem] object-cover shadow-2xl aspect-square md:aspect-[4/5] object-center" />
              </div>
            </div>
          </section>

          {/* Kids Training Section */}
          <section id="kids-training" className="pt-24 pb-12">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-800 tracking-tight text-foreground">Choose Your Path</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Led by Coach Abhinay Vaddi, our programs are tailored to elevate your game regardless of your starting point.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
              <div className="bg-card rounded-3xl p-8 border border-border shadow-soft hover:shadow-card transition-all duration-300 flex flex-col h-full relative overflow-hidden group hover:-translate-y-1">
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
              <div className="bg-card rounded-3xl p-8 border border-border shadow-soft hover:shadow-card transition-all duration-300 flex flex-col h-full relative overflow-hidden group hover:-translate-y-1">
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
              <div className="bg-card rounded-3xl p-8 border border-border shadow-soft hover:shadow-card transition-all duration-300 flex flex-col h-full relative overflow-hidden group hover:-translate-y-1">
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
          </section>

          {/* Membership Section */}
          <section id="membership" className="py-16 mb-8 mt-12 px-4 max-w-6xl mx-auto">
            <div className="bg-sport-green/5 rounded-[2rem] border-2 border-sport-green/20 p-8 md:p-14 flex flex-col items-center justify-between gap-8 md:flex-row shadow-sm hover:shadow-md hover:border-sport-green/40 transition-all duration-300">
              <div className="space-y-4 text-center md:text-left flex-1">
                <div className="inline-block px-3 py-1 bg-sport-green/10 text-sport-green text-xs font-bold uppercase tracking-widest rounded-full mb-2">
                  Elite Benefits
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-900 tracking-tight text-foreground uppercase pt-1">
                  Unlock the full <br className="hidden md:block" /> squash experience
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
                  <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
              <div className="relative pl-0 lg:pl-10 mt-10 lg:mt-0">
                <div className="relative rounded-[2rem] overflow-hidden aspect-square lg:aspect-[4/5]">
                  <img src={missionImg} alt="Squash Training" className="w-full h-full object-cover" />
                </div>

                {/* Floating Boxes */}
                <div className="absolute -bottom-8 -left-2 sm:-left-6 flex gap-3 sm:gap-4 pr-4">

                  {/* Coaches Box */}
                  <div className="bg-sport-green text-white p-5 sm:p-8 rounded-2xl shadow-xl w-[140px] sm:w-[190px] flex flex-col justify-between aspect-square">
                    <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/90">Coaches</p>
                    <div className="mt-auto">
                      <h4 className="text-4xl sm:text-6xl font-heading font-900 mb-1">5+</h4>
                      <p className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-white/80">Professional Trainers</p>
                    </div>
                  </div>

                  {/* Locations Box */}
                  <div className="bg-[#111111] text-white p-5 sm:p-8 rounded-2xl shadow-xl w-[140px] sm:w-[190px] flex flex-col justify-between aspect-square">
                    <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/70">Locations</p>
                    <div className="mt-auto">
                      <h4 className="text-4xl sm:text-6xl font-heading font-900 mb-1">2</h4>
                      <p className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-white/70">Active Centers</p>
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
