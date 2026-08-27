import React from 'react';
import { Dumbbell, Shield, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gymDark overflow-hidden border-b border-gymBorder/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Asset */}
          <div className="lg:col-span-6 relative group">
            {/* Background design elements */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-gymAccent to-red-500 rounded-3xl blur opacity-30 group-hover:opacity-40 transition duration-1000" />
            
            <div className="relative overflow-hidden rounded-2xl border border-gymBorder bg-gymGray">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop"
                alt="The Power House Gym Yol Interior"
                className="w-full h-[320px] sm:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Badge overlay on image */}
              <div className="absolute bottom-5 right-5 bg-black/80 backdrop-blur-md border border-gymBorder p-4 rounded-xl flex items-center gap-3">
                <div className="bg-gymAccent p-2.5 rounded-lg text-white">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">NO.1 IN YOL</h4>
                  <p className="font-sans text-xs text-gymTextMuted">Premium Fitness Facility</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Intro Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-gymAccent font-sans text-sm font-bold tracking-widest uppercase mb-3">
              Welcome to the Power House
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white leading-tight mb-6">
              Train With Purpose.
            </h2>
            <p className="font-sans text-base sm:text-lg text-gray-300 tracking-wide leading-relaxed mb-6">
              Power House Gym Yol provides an ultra-motivating training atmosphere packed with professional, heavy-duty workout equipment. Whether you're lifting for the first time or training for competitive gains, we support your grind.
            </p>
            <p className="font-sans text-sm sm:text-base text-gymTextMuted tracking-wide leading-relaxed mb-8">
              Step into an active community of fitness enthusiasts. Our clean environment, round-the-clock accessibility, and premium weights setup ensure you get standard-setting results.
            </p>

            {/* Core Features Mini-Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 bg-gymGray border border-gymBorder/40 rounded-xl">
                <div className="text-gymAccent">
                  <Dumbbell className="h-5 w-5" />
                </div>
                <span className="font-display text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  Top Equipment
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gymGray border border-gymBorder/40 rounded-xl">
                <div className="text-gymAccent">
                  <Shield className="h-5 w-5" />
                </div>
                <span className="font-display text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  Safe &amp; Clean
                </span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-white text-black hover:bg-gymAccent hover:text-white px-8 py-3.5 rounded-xl font-sans uppercase tracking-wider text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 shadow-md"
              >
                <span>Explore Our Gym</span>
                <Dumbbell className="h-4 w-4" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
