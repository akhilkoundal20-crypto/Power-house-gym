import React, { useState } from 'react';
import { GALLERY_ITEMS, PRODUCTS } from '../data/craftData';
import { Link } from 'react-router-dom';
import MotifDivider from '../components/common/MotifDivider';
import {
  ShoppingBag,
  X,
  ExternalLink,
  Sparkles,
  Heart
} from 'lucide-react';
import InstagramIcon from '../components/common/InstagramIcon';

export const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTag, setSelectedTag] = useState('all');

  const tags = ['all', 'Home Decor', 'Behind The Scenes', 'Artisan Packaging', 'Custom Milestone', 'Festive Entrance'];

  const filteredItems = selectedTag === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedTag);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#852233] bg-[#FAEEF1] px-3.5 py-1 rounded-full border border-[#E7BDC7] mb-2">
          <InstagramIcon className="w-3.5 h-3.5" />
          <span>@shailreet.crafts Gallery</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#23201D]">
          Artisanal Craft Gallery
        </h1>
        <p className="font-hindi text-base text-[#852233] mt-1">
          पहाड़ी कला की झलक — कार्यशाला से आपके घर तक
        </p>
        <MotifDivider />
        <p className="text-xs sm:text-sm text-[#766D64]">
          Explore behind-the-scenes craft details, raw natural pigments, finished living room decor, and patron unboxings.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedTag === tag
                ? 'bg-[#2C4A3E] text-[#FAF7F2] shadow-xs'
                : 'bg-[#FFFFFF] border border-[#DDD1C0] text-[#766D64] hover:text-[#23201D] hover:border-[#D49B35]'
            }`}
          >
            {tag === 'all' ? 'All Visuals' : tag}
          </button>
        ))}
      </div>

      {/* Gallery Masonry / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group relative rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#ECE3D6] shadow-craft-sm hover:shadow-craft-md cursor-pointer transition-all aspect-square"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />

            {/* Hover Details Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-between text-[#FAF7F2]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-[#D49B35] text-[#23201D] rounded">
                  {item.category}
                </span>
                <span className="text-xs text-[#FAF7F2]/80 flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 fill-[#852233] text-[#852233]" />
                </span>
              </div>

              <div>
                <h4 className="font-serif text-base font-bold text-[#FAF7F2] leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-[#DDD1C0] line-clamp-2 mt-1">
                  {item.caption}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#D49B35] font-semibold mt-2.5">
                  <span>Click to view details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="bg-[#FAF7F2] border border-[#DDD1C0] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3.5 right-3.5 z-10 p-1.5 bg-[#FFFFFF] text-[#23201D] rounded-full shadow-md hover:bg-[#FAF7F2]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[4/3] bg-[#000000] overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-[#2C4A3E] bg-[#EAF1ED] px-2.5 py-0.5 rounded">
                  {selectedImage.category}
                </span>
                <span className="text-xs text-[#766D64]">Kangra Studio Collection</span>
              </div>

              <h3 className="font-serif text-lg font-bold text-[#23201D]">
                {selectedImage.title}
              </h3>
              <p className="text-xs text-[#6E655C] leading-relaxed">
                {selectedImage.caption}
              </p>

              <div className="pt-2 flex items-center justify-between border-t border-[#ECE3D6]">
                <Link
                  to="/shop"
                  onClick={() => setSelectedImage(null)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2C4A3E] text-[#FAF7F2] text-xs font-semibold rounded-xl hover:bg-[#1E352C] transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Shop This Handcrafted Style</span>
                </Link>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#852233] hover:underline font-medium"
                >
                  View on Instagram →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default GalleryPage;
