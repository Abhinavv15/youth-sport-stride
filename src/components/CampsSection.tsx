import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CampsSection = () => {
  return (
    <section id="camps" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-2xl">
            <div className="space-y-0">
              {/* Main Hero Section */}
              <div className="p-10 lg:p-16 bg-gradient-to-br from-sport-green to-emerald-700 text-white text-center">
                <div className="space-y-6 max-w-4xl mx-auto">
                  <div className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full w-fit mx-auto font-bold text-sm">
                    Registration Opening Soon
                  </div>

                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      Unleash Your
                      <span className="block text-emerald-200">Potential</span>
                    </h2>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                      The ultimate sports camp experience. Professional coaching, dynamic teamwork, and relentless fun for PA Days, Holidays, and Summer Breaks.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <Button className="bg-white hover:bg-gray-100 text-sport-green px-8 py-3 rounded-xl text-base font-semibold transition-all duration-300 hover:scale-105">
                      Get Notified
                    </Button>
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold bg-transparent">
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
                        <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-bold text-gray-800">Elite Coaching</h4>
                          <p className="text-gray-600 text-sm">Professional instruction to elevate your game in Table Tennis & Squash.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-bold text-gray-800">Dynamic Play</h4>
                          <p className="text-gray-600 text-sm">High-energy drills, matches, and activities to keep athletes moving.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-bold text-gray-800">Team Building</h4>
                          <p className="text-gray-600 text-sm">Collaborative challenges designed to build friendships and communication.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-bold text-gray-800">Max Flexibility</h4>
                          <p className="text-gray-600 text-sm">Early drop-off and late pick-up options to fit your busy schedule.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tailored Programs */}
                  <div>
                    <h3 className="text-2xl font-bold text-sport-green mb-4 text-center">Tailored Programs</h3>
                    <p className="text-gray-600 text-center mb-6">
                      From mastering the basics to advanced competitive strategy, our camps are segmented by age to ensure maximum engagement, safety, and fun.
                    </p>

                    <div className="space-y-6">
                      {/* Age Groups */}
                      <div className="bg-green-50 border border-sport-green/20 p-4 rounded-xl">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-bold text-sport-green text-lg">Spots are limited per group</h4>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card className="p-4 border-2 border-sport-green/10 bg-white hover:border-sport-green/30 transition-colors">
                          <h4 className="font-bold text-foreground text-center mb-2">5-7 Years</h4>
                          <p className="text-sport-green text-center text-sm font-medium mb-2">Mini Athletes</p>
                          <p className="text-gray-700 text-sm text-center">Focus on fundamental movement, hand-eye coordination, and joyful play.</p>
                        </Card>

                        <Card className="p-4 border-2 border-sport-green/10 bg-white hover:border-sport-green/30 transition-colors">
                          <h4 className="font-bold text-foreground text-center mb-2">8-11 Years</h4>
                          <p className="text-sport-green text-center text-sm font-medium mb-2">Junior Champs</p>
                          <p className="text-gray-700 text-sm text-center">Skill building, technique refinement, and introduction to friendly competition.</p>
                        </Card>

                        <Card className="p-4 border-2 border-sport-green/10 bg-white hover:border-sport-green/30 transition-colors">
                          <h4 className="font-bold text-foreground text-center mb-2">12-15 Years</h4>
                          <p className="text-sport-green text-center text-sm font-medium mb-2">Teen Elite</p>
                          <p className="text-gray-700 text-sm text-center">Advanced techniques, strategy, intense drills, and match-play scenarios.</p>
                        </Card>
                      </div>
                    </div>
                  </div>

                  {/* Join Waitlist */}
                  <div className="bg-sport-green p-6 rounded-2xl text-center text-white">
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
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CampsSection;