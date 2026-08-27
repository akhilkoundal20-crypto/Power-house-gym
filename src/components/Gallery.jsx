import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const Gallery = () => {
  const [activeIdx, setActiveIdx] = useState(null);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop',
      title: 'Main Workout Floor',
      category: 'Gym Floor',
    },
    {
      url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
      title: 'Weight Training Area',
      category: 'Strength',
    },
    {
      url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
      title: 'Cardio Training Section',
      category: 'Cardio',
    },
    {
      url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
      title: 'Personal Training Sessions',
      category: 'Coaching',
    },
    {
      url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop',
      title: 'Powerlifting Platform',
      category: 'Strength',
    },
    {
      url: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=800&auto=format&fit=crop',
      title: 'Functional Workout Area',
      category: 'Conditioning',
    },
  ];

  // Handle keyboard events for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIdx === null) return;
      if (e.key === 'Escape') setActiveIdx(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 bg-gymGray border-b border-gymBorder/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gymAccent font-sans text-sm font-bold tracking-widest uppercase mb-3 block">
            Visual Tour
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight leading-none mb-4">
            Our Gym Gallery
          </h2>
          <div className="h-1.5 w-24 bg-gymAccent mx-auto rounded-full mb-6" />
          <p className="font-sans text-base sm:text-lg text-gymTextMuted tracking-wide">
            Take a look at the workout zones, heavy weights configuration, and premium training floor at Yol.
          </p>
        </div>

        {/* Mobile View: Swipeable Carousel */}
        <div className="lg:hidden flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory no-scrollbar scroll-smooth">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className="flex-shrink-0 w-[80%] sm:w-[50%] snap-center relative rounded-2xl overflow-hidden border border-gymBorder h-64 bg-gymCard"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                <span className="text-[10px] text-gymAccent font-bold uppercase tracking-wider font-sans mb-1">
                  {img.category}
                </span>
                <h4 className="font-display font-bold text-white text-base leading-tight">
                  {img.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Grid (Masonry-like layout heights) */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => {
            // Give different cards custom vertical spacing or styling
            const heightClass = idx === 1 || idx === 4 ? 'h-[400px]' : 'h-[320px]';
            return (
              <div
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`relative overflow-hidden rounded-2xl group border border-gymBorder cursor-pointer bg-gymCard ${heightClass} transition-all duration-300 hover:shadow-xl hover:shadow-gymAccent/5 hover:border-gymAccent/40`}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-750 ease-out group-hover:scale-105"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  {/* Category */}
                  <span className="self-start bg-gymAccent text-white font-sans text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {img.category}
                  </span>
                  
                  {/* Action Preview */}
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-white/10 rounded-full text-white mb-2 backdrop-blur-sm border border-white/20">
                      <Eye className="h-6 w-6" />
                    </div>
                    <span className="font-sans text-xs uppercase tracking-wider text-white font-bold">
                      Open Lightbox
                    </span>
                  </div>
                  
                  {/* Title */}
                  <div>
                    <h4 className="font-display font-black text-white text-lg uppercase tracking-wider leading-none">
                      {img.title}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeIdx !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6 backdrop-blur-sm">
          {/* Top Actions: Close */}
          <div className="flex justify-between items-center max-w-7xl mx-auto w-full pt-2">
            <div className="flex flex-col">
              <span className="text-gymAccent font-sans text-xs font-bold uppercase tracking-widest">
                {images[activeIdx].category}
              </span>
              <span className="text-white font-display text-lg uppercase tracking-wider hidden sm:inline">
                {images[activeIdx].title}
              </span>
            </div>
            <button
              onClick={() => setActiveIdx(null)}
              className="text-white hover:text-gymAccent bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full transition-colors backdrop-blur-md"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Main Visual Carousel View */}
          <div className="flex items-center justify-between w-full max-w-7xl mx-auto flex-grow gap-2 sm:gap-4 my-4">
            {/* Prev Trigger */}
            <button
              onClick={handlePrev}
              className="text-white hover:text-gymAccent bg-white/5 hover:bg-white/10 p-2 sm:p-4 rounded-full transition-colors backdrop-blur-md"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>

            {/* Image Box */}
            <div className="relative max-h-[70vh] max-w-[85vw] md:max-w-[70vw] overflow-hidden rounded-xl border border-gymBorder shadow-2xl flex items-center justify-center">
              <img
                src={images[activeIdx].url}
                alt={images[activeIdx].title}
                className="max-h-[70vh] w-auto object-contain rounded-xl"
              />
            </div>

            {/* Next Trigger */}
            <button
              onClick={handleNext}
              className="text-white hover:text-gymAccent bg-white/5 hover:bg-white/10 p-2 sm:p-4 rounded-full transition-colors backdrop-blur-md"
              aria-label="Next Image"
            >
              <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>
          </div>

          {/* Bottom Info details */}
          <div className="text-center pb-4 max-w-7xl mx-auto w-full flex flex-col items-center">
            <span className="font-display font-medium text-white text-sm sm:text-base uppercase tracking-wider block mb-1 sm:hidden">
              {images[activeIdx].title}
            </span>
            <span className="text-xs text-gymTextMuted font-sans">
              Image {activeIdx + 1} of {images.length}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
