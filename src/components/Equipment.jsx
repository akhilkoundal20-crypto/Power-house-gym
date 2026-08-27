import React from 'react';
import { Dumbbell } from 'lucide-react';

const Equipment = () => {
  const equipments = [
    {
      title: 'Free Weights',
      image: 'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=600&auto=format&fit=crop',
      desc: 'Dumbbells up to 50kg, Barbells, and Olympic plate sets.',
    },
    {
      title: 'Squat Racks',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
      desc: 'Sturdy power racks for squats, presses, and pull-ups.',
    },
    {
      title: 'Cable Machines',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop',
      desc: 'Versatile crossover and pulley systems for isolations.',
    },
    {
      title: 'Bench Press',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop',
      desc: 'Flat, incline, and decline bench setups for chest power.',
    },
    {
      title: 'Cardio Area',
      image: 'https://images.unsplash.com/photo-1571731979149-75be7a62506b?q=80&w=600&auto=format&fit=crop',
      desc: 'Commercial treadmills, ellipticals, and stationary bikes.',
    },
    {
      title: 'Functional Training',
      image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=600&auto=format&fit=crop',
      desc: 'Battle ropes, kettlebells, medicine balls, and plyo blocks.',
    },
  ];

  return (
    <section className="py-20 bg-gymGray border-b border-gymBorder/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gymAccent font-sans text-sm font-bold tracking-widest uppercase mb-3 block">
            Premium Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight leading-none mb-4">
            Train with Standard Equipment
          </h2>
          <div className="h-1.5 w-24 bg-gymAccent mx-auto rounded-full mb-6" />
          <p className="font-sans text-base sm:text-lg text-gymTextMuted tracking-wide">
            We don't compromise on your training. Our facility is equipped with heavy-duty machines and standard gear.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {equipments.map((eq, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl group border border-gymBorder h-[300px] sm:h-[350px] shadow-lg cursor-pointer"
            >
              {/* Equipment Photo */}
              <img
                src={eq.image}
                alt={eq.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              
              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:via-black/70 transition-all duration-300" />

              {/* Card Contents */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end transform transition-transform duration-300">
                <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-wide mb-2">
                  {eq.title}
                </h3>
                
                <p className="font-sans text-sm text-gray-300 opacity-95 mb-4 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-in-out">
                  {eq.desc}
                </p>

                <div className="flex items-center gap-2 text-gymAccent text-xs sm:text-sm font-bold uppercase tracking-widest font-sans transition-opacity duration-300 group-hover:opacity-100 opacity-80">
                  <span>View Details</span>
                  <Dumbbell className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Equipment;
