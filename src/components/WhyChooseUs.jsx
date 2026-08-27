import React from 'react';
import { Dumbbell, Users, ShieldCheck, Clock, Heart, Target } from 'lucide-react';

const WhyChooseUs = () => {
  const highlights = [
    {
      icon: <Dumbbell className="h-6 w-6 text-gymAccent" />,
      title: 'Quality Equipment',
      desc: 'Top-tier heavy-duty machines, lifting platforms, and dumbbells curated for optimal athletic training.',
    },
    {
      icon: <Users className="h-6 w-6 text-gymAccent" />,
      title: 'Friendly Trainers',
      desc: 'Expert fitness guidance, form corrections, and constant motivation to support your workout regime.',
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-gymAccent" />,
      title: 'Clean Environment',
      desc: 'Daily sanitization protocols, structured weight racks, and ventilated spaces to keep you safe.',
    },
    {
      icon: <Clock className="h-6 w-6 text-gymAccent" />,
      title: 'Flexible 24-Hour Access',
      desc: 'Your schedule, your terms. Work out at any hour of the day or night, 365 days a year.',
    },
    {
      icon: <Heart className="h-6 w-6 text-gymAccent" />,
      title: 'Supportive Community',
      desc: 'Train alongside motivated local lifters who inspire you to push past plateaus every single day.',
    },
    {
      icon: <Target className="h-6 w-6 text-gymAccent" />,
      title: 'Goal-Oriented Training',
      desc: 'Practical programs designed to deliver visible, sustainable muscle growth and strength conditioning.',
    },
  ];

  return (
    <section className="py-20 bg-gymDark border-b border-gymBorder/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gymAccent font-sans text-sm font-bold tracking-widest uppercase mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight leading-none mb-4">
            Why Power House?
          </h2>
          <div className="h-1.5 w-24 bg-gymAccent mx-auto rounded-full mb-6" />
          <p className="font-sans text-base sm:text-lg text-gymTextMuted tracking-wide">
            We are not just a gym; we are a dedicated training environment. Discover the differences that make us Yol's premier fitness destination.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gymCard border border-gymBorder/40 p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:border-gymBorder hover:bg-gymGray group"
            >
              {/* Header Box */}
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-black/60 w-12 h-12 rounded-xl flex items-center justify-center border border-gymBorder/60 group-hover:bg-gymAccent/10 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider group-hover:text-gymAccent transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
              
              {/* Body */}
              <p className="font-sans text-sm text-gymTextMuted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
