import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ttKidsImg from "@/assets/kids_having_fun_tt.png";
import squashImg from "@/assets/Squash Image.jpg";
import ttGroupImg from "@/assets/tt_group_pic.png";

const CampsSection = () => {
  return (
    <section id="camps" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-2xl">
            <div className="space-y-0">
              {/* Main Hero Section — photo background */}
              <div className="relative min-h-[380px] flex items-center justify-center text-center overflow-hidden">
                {/* Background collage */}
                <div className="absolute inset-0 grid grid-cols-3">
                  <img src={ttKidsImg} alt="Kids playing table tennis" className="w-full h-full object-cover" />
                  <img src={ttGroupImg} alt="TT group training" className="w-full h-full object-cover" />
                  <img src={squashImg} alt="Kids playing squash" className="w-full h-full object-cover" />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/70" />

                <div className="relative z-10 space-y-6 max-w-4xl mx-auto p-10 lg:p-16">
                  <div className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full w-fit mx-auto font-bold text-sm">
                    Registration Opening Soon
                  </div>

                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      Unleash Your
                      <span className="block text-sport-green">Potential</span>
                    </h2>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                      The ultimate multi-sport camp experience. Professional coaching in Table Tennis & Squash, dynamic teamwork, and relentless fun for PA Days, Holidays, and Summer Breaks.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <Button className="bg-sport-green hover:bg-sport-green/90 text-white px-8 py-3 rounded-xl text-base font-semibold transition-all duration-300 hover:scale-105">
                      Get Notified
                    </Button>
                    <Button variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:border-white/60 hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold bg-transparent">
                      Explore Camps
                    </Button>
                  </div>
                </div>
              </div>

              {/* Content Sections */}
              <div className="p-10 lg:p-16">
                <div className="space-y-16 max-w-6xl mx-auto">
                  {/* Why Choose Section */}
                  <div>
                    <h3 className="text-2xl font-bold text-sport-green mb-4 text-center">Why Choose Our Camps?</h3>
                    <p className="text-gray-600 text-center mb-8">
                      Designed to build confidence, skill, and lasting friendships in a premium facility.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-sport-green rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-bold text-gray-800">Elite Coaching — Multi-Sport</h4>
                          <p className="text-gray-600 text-sm">Professional instruction to elevate your game in both Table Tennis & Squash under one roof.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-sport-green rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-bold text-gray-800">Dynamic Play</h4>
                          <p className="text-gray-600 text-sm">High-energy drills, matches, and activities to keep athletes moving and engaged.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-sport-green rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-bold text-gray-800">Team Building</h4>
                          <p className="text-gray-600 text-sm">Collaborative challenges designed to build friendships and communication skills.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-sport-green rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-bold text-gray-800">Max Flexibility</h4>
                          <p className="text-gray-600 text-sm">Early drop-off and late pick-up options to fit your busy schedule.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tailored Programs — no age groups */}
                  <div>
                    <h3 className="text-2xl font-bold text-sport-green mb-4 text-center">Tailored Programs</h3>
                    <p className="text-gray-600 text-center mb-6">
                      From mastering the basics to advanced competitive strategy, our camps are tailored to ensure maximum engagement, safety, and fun for every participant.
                    </p>

                    <div className="bg-green-50 border border-sport-green/20 p-5 rounded-xl">
                      <p className="font-bold text-sport-green text-lg">🏓 Table Tennis &nbsp;|&nbsp; 🎾 Squash</p>
                      <p className="text-gray-600 text-sm mt-1">Both sports covered in one camp — kids get to discover their passion!</p>
                      <p className="text-sport-green font-semibold text-sm mt-3">Spots are limited per group — register early to secure your place.</p>
                    </div>
                  </div>

                  {/* Join Waitlist */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <img src={ttGroupImg} alt="Camp group" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-sport-green/85" />
                    <div className="relative z-10 p-6 text-center text-white">
                      <h3 className="text-xl font-bold mb-2">Our camps hit capacity fast.</h3>
                      <p className="mb-4">Get exclusive priority access and secure your spot 48 hours before the public.</p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button className="bg-white hover:bg-gray-100 text-sport-green px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                          Join Priority List
                        </Button>
                        <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold bg-transparent">
                          Call Us
                        </Button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CampsSection;