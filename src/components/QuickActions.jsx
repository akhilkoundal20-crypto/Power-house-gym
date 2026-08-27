import React from 'react';
import { MapPin, Phone, MessageSquare, Star } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    {
      icon: <MapPin className="h-6 w-6 text-gymAccent" />,
      title: 'Directions',
      subtitle: 'Find us in Yol',
      href: '#location',
      bgColor: 'hover:bg-gymAccent/5',
    },
    {
      icon: <Phone className="h-6 w-6 text-emerald-500" />,
      title: 'Call Gym',
      subtitle: '+91 88941 78550',
      href: 'tel:+918894178550',
      bgColor: 'hover:bg-emerald-500/5',
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-green-500" />,
      title: 'WhatsApp',
      subtitle: 'Chat with us',
      href: 'https://wa.me/918894178550?text=Hi!%20I%20am%20interested%20in%20joining%20The%20Power%20House%20Gym%20Yol.%20Please%20share%20membership%20details.',
      target: '_blank',
      rel: 'noopener noreferrer',
      bgColor: 'hover:bg-green-500/5',
    },
    {
      icon: <Star className="h-6 w-6 text-yellow-500" />,
      title: 'Reviews',
      subtitle: '126 reviews',
      href: '#reviews',
      bgColor: 'hover:bg-yellow-500/5',
    },
  ];

  return (
    <div className="relative z-20 max-w-5xl mx-auto px-4 -mt-10 sm:-mt-12 md:-mt-16">
      <div className="bg-gymGray/90 backdrop-blur-md border border-gymBorder rounded-2xl md:rounded-3xl shadow-xl overflow-hidden p-3 sm:p-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {actions.map((act, index) => {
            const Element = act.href.startsWith('#') ? 'a' : 'a';
            return (
              <Element
                key={index}
                href={act.href}
                target={act.target}
                rel={act.rel}
                className={`flex flex-col items-center text-center p-4 rounded-xl border border-gymBorder/40 transition-all duration-300 group cursor-pointer ${act.bgColor} hover:-translate-y-1 hover:border-gymBorder`}
              >
                <div className="p-3 bg-black/60 rounded-xl mb-3 border border-gymBorder/30 transition-transform group-hover:scale-110 duration-300">
                  {act.icon}
                </div>
                <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-0.5">
                  {act.title}
                </h3>
                <span className="font-sans text-xs text-gymTextMuted font-medium group-hover:text-white transition-colors duration-300">
                  {act.subtitle}
                </span>
              </Element>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
