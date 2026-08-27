import React from 'react';
import { Star, ShieldAlert, Award, Activity } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      value: '5.0',
      label: 'Google Rating',
      icon: <Star className="h-6 w-6 text-yellow-500 fill-current" />,
    },
    {
      value: '126+',
      label: 'Happy Reviews',
      icon: <Award className="h-6 w-6 text-gymAccent" />,
    },
    {
      value: '24/7',
      label: 'Open Hours',
      icon: <Activity className="h-6 w-6 text-emerald-500" />,
    },
    {
      value: '100%',
      label: 'Fitness Focus',
      icon: <ShieldAlert className="h-6 w-6 text-cyan-400" />,
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-r from-gymDark via-gymGray to-gymDark border-b border-gymBorder">
      {/* Subtle Glowing Background Accent */}
      <div className="absolute inset-0 bg-gymAccent/[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y-0 divide-x-0 lg:divide-x lg:divide-gymBorder">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-4 transition-transform duration-300 hover:scale-105"
            >
              {/* Icon Container */}
              <div className="mb-3 p-2 bg-black/45 rounded-lg border border-gymBorder/45">
                {stat.icon}
              </div>
              {/* Stat Value */}
              <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight uppercase">
                {stat.value}
              </span>
              {/* Stat Label */}
              <span className="font-sans text-xs sm:text-sm font-semibold text-gymTextMuted uppercase tracking-widest mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
