import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const MembershipCTA = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-black text-center">
      {/* Background Image with Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1600&auto=format&fit=crop"
          alt="Athlete Training Background"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gymDark/90 via-black/80 to-gymDark" />
        <div className="absolute inset-0 bg-gymAccent/5 pointer-events-none" />
      </div>

      {/* CTA Contents */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-gymAccent font-sans text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 block">
          Become Your Best Version
        </span>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white uppercase tracking-tight leading-none mb-6">
          Ready To Get Stronger?
        </h2>
        
        <p className="font-sans text-lg sm:text-xl text-gray-300 tracking-wide max-w-xl mx-auto mb-10">
          Your next level starts with your next workout. Join The Power House Gym Yol today and start your journey.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#contact"
            className="w-full sm:flex-1 bg-gymAccent hover:bg-gymAccentHover text-white px-8 py-4 rounded-xl font-sans uppercase tracking-wider text-sm font-bold transition-all duration-300 shadow-lg shadow-gymAccent/20 hover:shadow-gymAccent/45 flex items-center justify-center gap-2 group hover:-translate-y-0.5"
          >
            <span>Join Now</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+918894178550"
            className="w-full sm:flex-1 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-4 rounded-xl font-sans uppercase tracking-wider text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4 text-gymAccent" />
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MembershipCTA;
