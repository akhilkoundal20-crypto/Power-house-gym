import React from 'react';
import { MapPin, Phone, Clock, Compass, ShieldAlert, Mail } from 'lucide-react';

const Location = () => {
  const directionsUrl = 'https://maps.google.com/?q=The+Power+House+Gym+Yol+Himachal+Pradesh';

  return (
    <section id="location" className="py-20 bg-gymDark border-b border-gymBorder/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gymAccent font-sans text-sm font-bold tracking-widest uppercase mb-3 block">
            Directions &amp; Hours
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight leading-none mb-4">
            Find Us In Yol
          </h2>
          <div className="h-1.5 w-24 bg-gymAccent mx-auto rounded-full mb-6" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Styled Map Placeholder */}
          <div className="lg:col-span-7 relative group min-h-[350px] sm:min-h-[450px] rounded-2xl overflow-hidden border border-gymBorder bg-gymGray flex flex-col justify-end p-6">
            
            {/* Map Placeholder Graphic Background */}
            <div className="absolute inset-0 z-0 bg-[#0f0f11] opacity-90">
              {/* Retro stylized grid pattern to resemble a GPS mapping interface */}
              <div 
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `radial-gradient(#222 1px, transparent 1px), radial-gradient(#222 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 10px 10px'
                }}
              />
              {/* Graphic shapes representing Mock Roads */}
              <div className="absolute top-[20%] left-0 right-0 h-4 bg-gymBorder/30 transform -rotate-12" />
              <div className="absolute top-0 bottom-0 left-[40%] w-6 bg-gymBorder/30 transform rotate-45" />
              <div className="absolute bottom-[30%] left-0 right-0 h-5 bg-gymBorder/30 transform rotate-6" />
              
              {/* Glowing Gym Pin in Yol */}
              <div className="absolute top-[45%] left-[52%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                {/* Glowing ring */}
                <span className="absolute inline-flex h-12 w-12 rounded-full bg-gymAccent/20 animate-ping" />
                <div className="bg-gymDark border border-gymAccent text-white p-3 rounded-full shadow-2xl relative z-10">
                  <MapPin className="h-6 w-6 text-gymAccent fill-gymAccent/20" />
                </div>
                <div className="mt-2 bg-black/90 backdrop-blur-md border border-gymBorder px-3 py-1.5 rounded-lg text-center shadow-lg">
                  <span className="font-display text-xs font-black text-white uppercase tracking-wider block">
                    The Power House Gym
                  </span>
                  <span className="font-sans text-[9px] text-gymTextMuted uppercase tracking-widest block">
                    Yol, Himachal Pradesh
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Panel overlay */}
            <div className="relative z-10 bg-black/85 backdrop-blur-md border border-gymBorder/80 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
              <div>
                <h4 className="font-display font-bold text-white text-base uppercase tracking-wider mb-1">
                  Ready to visit?
                </h4>
                <p className="font-sans text-xs text-gymTextMuted">
                  Click below to open GPS navigation on Google Maps.
                </p>
              </div>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gymAccent hover:bg-gymAccentHover text-white px-5 py-2.5 rounded-lg font-sans uppercase tracking-wider text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <Compass className="h-4 w-4" />
                <span>Navigate</span>
              </a>
            </div>
            
          </div>

          {/* Right Column: Physical Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-gymCard border border-gymBorder rounded-2xl p-6 sm:p-8 shadow-lg">
            
            {/* Title Details */}
            <div className="mb-6">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-wider mb-1">
                The Power House Gym
              </h3>
              <span className="text-gymAccent font-sans text-xs font-bold tracking-widest uppercase block mb-6">
                थे पावर हाउस जिम योल
              </span>
              <div className="h-px bg-gymBorder w-full mb-6" />
            </div>

            {/* Information Grid */}
            <div className="flex flex-col gap-6 mb-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-black/60 p-2.5 rounded-lg border border-gymBorder text-gymAccent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-black text-white uppercase tracking-wider mb-1">
                    Location Address
                  </h4>
                  <p className="font-sans text-sm text-gray-300 leading-tight">
                    Yol Cantonment, near main market, Yol,<br />
                    Himachal Pradesh, 176052, India
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="bg-black/60 p-2.5 rounded-lg border border-gymBorder text-gymAccent">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-black text-white uppercase tracking-wider mb-1">
                    Opening Hours
                  </h4>
                  <p className="font-sans text-sm text-emerald-500 font-semibold leading-tight">
                    Open 24 Hours / 7 Days a week
                  </p>
                </div>
              </div>

              {/* Contact Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-black/60 p-2.5 rounded-lg border border-gymBorder text-gymAccent">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-black text-white uppercase tracking-wider mb-1">
                    Call / Inquiry
                  </h4>
                  <p className="font-sans text-sm text-gray-300 leading-tight">
                    +91 88941 78550
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gymAccent hover:bg-gymAccentHover text-white text-center py-3.5 rounded-xl font-sans uppercase tracking-wider text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <Compass className="h-4 w-4" />
                <span>Directions</span>
              </a>
              <a
                href="tel:+918894178550"
                className="flex-1 bg-white/10 hover:bg-white/15 text-white border border-white/20 text-center py-3.5 rounded-xl font-sans uppercase tracking-wider text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4 text-gymAccent" />
                <span>Call Now</span>
              </a>
            </div>
            
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Location;
