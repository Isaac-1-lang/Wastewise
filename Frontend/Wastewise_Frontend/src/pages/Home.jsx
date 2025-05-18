import React from "react";
import { Leaf, Users, Recycle, MapPin, Calendar, Award, ThumbsUp, TrendingUp } from "lucide-react";
import Navbar from "../components/Navbar";

const EnvironmentalAppSections = () => {
  return (
    <>
      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-emerald-800 mb-2">Features of our services</h2>
          <div className="h-1 w-16 bg-emerald-500 mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Community Chat Feature */}
            <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-100">
              <div className="flex items-start mb-4">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-emerald-800">Community Chat</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Connect with eco-conscious individuals in your area and coordinate local collection efforts.
                  </p>
                </div>
              </div>
              <img 
                src="http://pinterest.com/pin/1140677411867070575/" 
                alt="Community chat feature" 
                className="w-full h-auto rounded-md"
              />
            </div>
            
            {/* Eco Reward Feature */}
            <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-100">
              <div className="flex items-start mb-4">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-emerald-800">Eco Reward</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Earn points for your recycling contributions and redeem them for sustainable products.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center p-4">
                  <span className="text-emerald-600 font-bold text-4xl block">12</span>
                  <span className="text-gray-500 text-sm">points per collection</span>
                </div>
              </div>
            </div>
            
            {/* Simplicity Feature */}
            <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-100">
              <div className="flex items-start mb-4">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <ThumbsUp className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-emerald-800">Simplicity & Governance</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Our user-friendly app works across all devices, making waste management simple.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/api/placeholder/280/160" 
                  alt="Cross-platform compatibility" 
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Progress Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-emerald-800 mb-2">Our Goal and progress in Making the world a better place</h2>
          <div className="h-1 w-16 bg-emerald-500 mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <h3 className="font-medium text-emerald-700 mb-2">What We Do</h3>
                <p className="text-gray-600 border-l-4 border-emerald-500 pl-4 py-1">
                  We organize neighborhood waste collection initiatives and ensure proper recycling practices to minimize environmental impact.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium text-emerald-700 mb-2">How We Do It</h3>
                <p className="text-gray-600 border-l-4 border-emerald-500 pl-4 py-1">
                  Our app connects waste producers with local collectors, creating a streamlined process for proper waste disposal and recycling.
                </p>
              </div>
              
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                Explore More
              </button>
            </div>
            
            <div>
              <img 
                src="/api/placeholder/400/240" 
                alt="Our process" 
                className="rounded-lg shadow-md mb-4"
              />
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-emerald-500 mr-2" />
                    <span className="text-sm text-gray-600">450+ Collection points</span>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <Recycle className="h-5 w-5 text-emerald-500 mr-2" />
                    <span className="text-sm text-gray-600">12,500+ Tons recycled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-emerald-800 mb-2">Our Mission</h2>
          <div className="h-1 w-16 bg-emerald-500 mb-6"></div>
          
          <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100">
            <p className="text-center text-emerald-800 font-medium mb-6">
              Creating for Our Planet with transparent systems to ensure ethical handling of materials.
              <br />Success is a cleaner, more sustainable future for all.
            </p>
            
            <div className="flex justify-center">
              <img 
                src="/api/placeholder/560/200" 
                alt="Environmental conservation" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Five-Step Plan Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-emerald-800 mb-2">Our Five-Step Plan</h2>
          <div className="h-1 w-16 bg-emerald-500 mb-8"></div>
          
          <div className="relative flex justify-center">
            <div className="hidden md:block absolute top-4 left-0 right-0 h-2 bg-emerald-200 rounded-full"></div>
            
            <div className="flex flex-wrap md:flex-nowrap justify-between w-full relative z-10">
              <div className="flex flex-col items-center mx-4 mb-4 md:mb-0">
                <div className="bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-medium">1</div>
                <span className="text-sm text-gray-600 mt-2">Collect</span>
              </div>
              
              <div className="flex flex-col items-center mx-4 mb-4 md:mb-0">
                <div className="bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-medium">2</div>
                <span className="text-sm text-gray-600 mt-2">Sort</span>
              </div>
              
              <div className="flex flex-col items-center mx-4 mb-4 md:mb-0">
                <div className="bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-medium">3</div>
                <span className="text-sm text-gray-600 mt-2">Process</span>
              </div>
              
              <div className="flex flex-col items-center mx-4 mb-4 md:mb-0">
                <div className="bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-medium">4</div>
                <span className="text-sm text-gray-600 mt-2">Recycle</span>
              </div>
              
              <div className="flex flex-col items-center mx-4 mb-4 md:mb-0">
                <div className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-medium">5</div>
                <span className="text-sm text-gray-600 mt-2">Reuse</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
              Know our Plan
            </button>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-emerald-800 mb-2">Our partners</h2>
          <div className="h-1 w-16 bg-emerald-500 mb-8"></div>
          
          <p className="text-gray-600 mb-8 max-w-2xl">
            We're collaborating with industry leaders and environmental organizations to create a sustainable ecosystem for waste management and recycling.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-24 border border-gray-100">
              <img 
                src="/api/placeholder/100/60" 
                alt="Partner logo" 
                className="max-h-12"
              />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-24 border border-gray-100">
              <img 
                src="/api/placeholder/100/60" 
                alt="Partner logo" 
                className="max-h-12"
              />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-24 border border-gray-100">
              <img 
                src="/api/placeholder/100/60" 
                alt="Partner logo" 
                className="max-h-12"
              />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-24 border border-gray-100">
              <img 
                src="/api/placeholder/100/60" 
                alt="Partner logo" 
                className="max-h-12"
              />
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <h3 className="text-xl font-semibold text-emerald-800 mb-6">Together We Can Change And Make A World A Better Place</h3>
            
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
              Join Us
            </button>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-12 bg-emerald-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold">12K+</div>
              <div className="text-emerald-100">Tons Collected</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold">450+</div>
              <div className="text-emerald-100">Collection Points</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold">25K+</div>
              <div className="text-emerald-100">Active Users</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold">150+</div>
              <div className="text-emerald-100">Communities</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-emerald-800 mb-4">Ready to make a difference?</h2>
          <p className="text-gray-600 mb-8">
            Join our network of environmental heroes and help us create a cleaner, more sustainable future.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              Download App
            </button>
            <button className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnvironmentalAppSections;