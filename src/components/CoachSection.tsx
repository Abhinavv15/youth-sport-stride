import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import coachImg from "@/assets/abhinay vaddi.png";

const CoachSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-2xl">
            <div className="flex flex-col lg:flex-row">
              {/* Coach Image - Left Side */}
              <div className="lg:w-2/5 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-8">
                <div className="relative">
                  <img 
                    src={coachImg} 
                    alt="Head Coach Abhinay Vaddi" 
                    className="rounded-2xl shadow-2xl max-w-full h-auto border-4 border-white/20 object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold text-sm">
                    Head Coach
                  </div>
                </div>
              </div>
              
              {/* Content - Right Side */}
              <div className="lg:w-3/5 p-10 lg:p-16 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                      Meet the Head Coach
                    </h2>
                    <p className="text-xl text-purple-600 font-medium">
                      Expert guidance for every step of your journey
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <p className="text-gray-800 text-lg italic leading-relaxed">
                      "My philosophy is simple: every athlete has untapped potential. Whether you're picking up a racket for the first time or aiming for national rankings, my goal is to provide the technical foundation and strategic mindset you need to excel."
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-bold text-gray-800">Certified Professional</h3>
                        <p className="text-gray-600 text-sm">Internationally recognized coaching certifications and continuous professional development.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-bold text-gray-800">Proven Track Record</h3>
                        <p className="text-gray-600 text-sm">History of developing state and national level champions across multiple age categories.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <Button asChild className="bg-sport-green hover:bg-sport-green/90 text-white px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105">
                      <Link to="/tt-training">Book a Session</Link>
                    </Button>
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

export default CoachSection;