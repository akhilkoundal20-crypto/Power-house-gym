import React from 'react';
import { Dumbbell, Flame, Users, HeartPulse, Sparkles, Trophy } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Dumbbell className="h-7 w-7 text-gymAccent" />,
      title: 'Strength Training',
      desc: 'Heavy duty platforms, Olympic bars, and high-performance plates for progressive strength development.',
    },
    {
      icon: <Trophy className="h-7 w-7 text-gymAccent" />,
      title: 'Weight Training',
      desc: 'Free weights and targeted muscle selectorized machines for full body strength optimization.',
    },
    {
      icon: <HeartPulse className="h-7 w-7 text-gymAccent" />,
      title: 'Cardio Training',
      desc: 'Premium treadmills, commercial spin cycles, and elliptical equipment for cardiovascular conditioning.',
    },
    {
      icon: <Users className="h-7 w-7 text-gymAccent" />,
      title: 'Personal Training',
      desc: 'One-on-one professional guidance, body composition tracking, and goal-oriented program support.',
    },
    {
      icon: <Flame className="h-7 w-7 text-gymAccent" />,
      title: 'Muscle Building',
      desc: 'High-intensity coaching environment, recovery-focused design, and standard hypertrophy machines.',
    },
    {
      icon: <Sparkles className="h-7 w-7 text-gymAccent" />,
      title: 'Fat Loss',
      desc: 'Structured metabolic conditioning workouts and nutrition templates to speed up fat burning.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gymDark border-b border-gymBorder/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gymAccent font-sans text-sm font-bold tracking-widest uppercase mb-3 block">
            Our Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight leading-none mb-4">
            Everything You Need To Get Stronger
          </h2>
          <div className="h-1.5 w-24 bg-gymAccent mx-auto rounded-full mb-6" />
          <p className="font-sans text-base sm:text-lg text-gymTextMuted tracking-wide">
            Whether you want to gain muscle, drop fat, or optimize athletic performance, our fully equipped training zones are ready for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((srv, index) => (
            <div
              key={index}
              className="bg-gymCard border border-gymBorder/60 hover:border-gymAccent/50 p-6 sm:p-8 rounded-2xl transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gymAccent/5"
            >
              {/* Icon */}
              <div className="bg-black/60 w-14 h-14 rounded-xl flex items-center justify-center border border-gymBorder/60 mb-6 group-hover:bg-gymAccent group-hover:text-white transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {srv.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="font-display text-xl font-bold text-white uppercase tracking-wider mb-3 group-hover:text-gymAccent transition-colors duration-300">
                {srv.title}
              </h3>
              
              {/* Description */}
              <p className="font-sans text-sm text-gymTextMuted leading-relaxed">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
