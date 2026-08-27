import React from 'react';
import { ShieldCheck, MapPin, ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black"
    >
      {/* Background Image with Dark Vignette/Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop"
          alt="Premium Gym Training Environment"
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gymDark via-gymDark/70 to-black/90" />
        <div className="absolute inset-0 bg-radial-gradient" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 pb-16 md:py-24">
        {/* Rating and Hours Badges */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-6 animate-fade-in">
          {/* Rating Badge */}
          <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-gymBorder px-4 py-1.5 rounded-full">
            <span className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
            <span className="font-sans text-xs font-semibold text-white tracking-wider">
              5.0 Rating · 126 Reviews
            </span>
          </div>

          {/* 24 Hours Badge */}
          <div className="flex items-center gap-1.5 bg-gymAccent/10 backdrop-blur-md border border-gymAccent/30 px-4 py-1.5 rounded-full">
            <span className="h-2 w-2 rounded-full bg-gymAccent animate-ping" />
            <span className="font-sans text-xs font-bold text-gymAccent tracking-widest uppercase">
              Open 24 Hours
            </span>
          </div>
        </div>

        {/* Hindi Gym Subheading */}
        <h2 className="text-gymAccent font-display text-lg sm:text-xl md:text-2xl font-bold tracking-widest uppercase mb-2">
          THE POWER HOUSE GYM
        </h2>
        <span className="text-sm font-sans tracking-wide text-gray-400 uppercase block mb-6">
          थे पावर हाउस जिम योल
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase text-white tracking-tight leading-none mb-6">
          Build Strength.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gymAccent">
            Build Confidence.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-sans text-gray-300 tracking-wide leading-relaxed mb-8 md:mb-12">
          Train harder, get stronger, and become the best version of yourself in Yol's premier professional workout environment. Empowering our community daily.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-gymAccent hover:bg-gymAccentHover text-white px-8 py-4 rounded-xl font-sans uppercase tracking-wider text-base font-bold transition-all duration-300 shadow-lg shadow-gymAccent/30 hover:shadow-gymAccent/50 flex items-center justify-center gap-2 group hover:-translate-y-0.5"
          >
            <span>Join the Gym</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#location"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-4 rounded-xl font-sans uppercase tracking-wider text-base font-bold transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md hover:-translate-y-0.5"
          >
            <MapPin className="h-5 w-5 text-gymAccent" />
            <span>Get Directions</span>
          </a>
        </div>
      </div>

      {/* Bottom Angled Border Decorator */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gymDark to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
