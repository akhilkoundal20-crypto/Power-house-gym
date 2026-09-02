import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCraft } from '../context/CraftContext';
import { CATEGORIES, PRODUCTS, REVIEWS, GALLERY_ITEMS, FAQS } from '../data/craftData';
import ProductCard from '../components/shop/ProductCard';
import MotifDivider from '../components/common/MotifDivider';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Truck,
  Heart,
  Star,
  Gift,
  Palette,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import InstagramIcon from '../components/common/InstagramIcon';

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeFaq, setActiveFaq] = useState(null);
  const { setQuickViewProduct } = useCraft();

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS.slice(0, 6)
      : PRODUCTS.filter((p) => p.category === selectedCategory).slice(0, 6);

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#F4EFE7]/80 via-[#FAF7F2] to-[#FAF7F2]">
        {/* Subtle Decorative Indian Motifs in Background */}
        <div className="absolute top-10 left-6 text-[#D49B35]/20 pointer-events-none hidden lg:block">
          <svg className="w-32 h-32 fill-current" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 4" />
            <path d="M50 5 L55 35 L85 35 L60 55 L70 85 L50 65 L30 85 L40 55 L15 35 L45 35 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              
              {/* Artisanal Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1ED] border border-[#C8D9D0] text-[#2C4A3E] text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-[#D49B35]" />
                <span>Authentic Himalayan Handcrafted Art</span>
                <span className="w-1 h-1 rounded-full bg-[#2C4A3E]" />
                <span className="font-hindi text-sm font-bold text-[#852233]">शैलरीत</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-normal text-[#23201D] leading-[1.15] tracking-tight">
                Handmade With <span className="text-[#852233] italic font-serif">Tradition</span>,<br />
                Made With <span className="text-[#2C4A3E] font-serif underline decoration-[#D49B35]/50 decoration-2">Love</span>.
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base text-[#6E655C] max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Beautiful handcrafted Dehra artwork, customized milestone boards, and festive decor — thoughtfully carved and painted by traditional artisans in the hills of Himachal Pradesh.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  to="/shop"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#2C4A3E] hover:bg-[#1E352C] text-[#FAF7F2] font-semibold text-sm rounded-xl transition-all shadow-craft-md hover:shadow-craft-hover group"
                >
                  <span>Shop Collection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/custom-orders"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FAF7F2] hover:bg-[#F4EFE7] text-[#23201D] border-2 border-[#D49B35] font-semibold text-sm rounded-xl transition-all shadow-craft-sm hover:border-[#852233]"
                >
                  <Sparkles className="w-4 h-4 text-[#D49B35]" />
                  <span>Customise Your Craft</span>
                </Link>
              </div>

              {/* Trust Metrics Bar */}
              <div className="pt-6 border-t border-[#ECE3D6] grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#2C4A3E]">100%</h4>
                  <p className="text-[11px] sm:text-xs text-[#766D64]">Artisan Handcrafted</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#852233]">4.95 ★</h4>
                  <p className="text-[11px] sm:text-xs text-[#766D64]">1,200+ Craft Lovers</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#D49B35]">Pan-India</h4>
                  <p className="text-[11px] sm:text-xs text-[#766D64]">Safe Insured Shipping</p>
                </div>
              </div>
            </div>

            {/* Right Hero Image (6 Cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border-4 border-[#FFFFFF] shadow-craft-lg group">
                <img
                  src="/images/hero-banner.jpg"
                  alt="Authentic handcrafted Himachali Dehra art and traditional wall hangings by Shailreet"
                  className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-102 transition-transform duration-700 ease-out"
                />

                {/* Floating Artisan Tag Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#FAF7F2]/95 backdrop-blur-xs p-3.5 rounded-xl border border-[#DDD1C0] shadow-craft-md flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#EAF1ED] flex items-center justify-center text-[#2C4A3E] font-bold shrink-0">
                    <span className="font-hindi text-lg">दे</span>
                  </div>
                  <div>
                    <h5 className="font-serif text-xs sm:text-sm font-bold text-[#23201D]">
                      Himachali Dehra Temple Art
                    </h5>
                    <p className="text-[11px] text-[#766D64]">
                      Hand-carved cedar wood & brass chime bells
                    </p>
                  </div>
                  <Link
                    to="/product/handcrafted-peacock-dehra-frame"
                    className="ml-auto text-xs font-semibold text-[#2C4A3E] hover:underline"
                  >
                    View →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CRAFT CATEGORIES EXPLORER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#852233] bg-[#FAEEF1] px-3 py-1 rounded-full border border-[#E7BDC7]">
            Traditional Collections
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#23201D] mt-3">
            Handcrafted Treasures For Every Occasion
          </h2>
          <MotifDivider />
          <p className="text-xs sm:text-sm text-[#766D64] mt-2">
            Each creation is a harmonious blend of Himachali heritage woodwork, natural clay, vibrant threads, and intricate folk artistry.
          </p>
        </div>

        {/* Categories Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {CATEGORIES.slice(1).map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="p-4 rounded-xl bg-[#FFFFFF] border border-[#ECE3D6] hover:border-[#D49B35] shadow-craft-sm hover:shadow-craft-md transition-all text-center flex flex-col items-center justify-center group"
            >
              <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#DDD1C0] group-hover:border-[#2C4A3E] flex items-center justify-center text-[#2C4A3E] group-hover:text-[#D49B35] transition-colors mb-3">
                {cat.id === 'dehra' && <span className="font-hindi text-xl font-bold text-[#852233]">दे</span>}
                {cat.id === 'birthday-boards' && <Gift className="w-5 h-5 text-[#C94A6E]" />}
                {cat.id === 'customized-gifts' && <Sparkles className="w-5 h-5 text-[#D49B35]" />}
                {cat.id === 'festive-decor' && <Palette className="w-5 h-5 text-[#2C4A3E]" />}
                {cat.id === 'traditional-art' && <Star className="w-5 h-5 text-[#852233]" />}
                {cat.id === 'new-arrivals' && <span className="text-xs font-bold text-[#2C4A3E]">NEW</span>}
              </div>
              <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#23201D] group-hover:text-[#2C4A3E] transition-colors">
                {cat.name}
              </h4>
              <p className="font-hindi text-[11px] text-[#852233] mt-0.5 opacity-80">
                {cat.hindi}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#852233]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#852233]">Curated Catalog</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#23201D] mt-1">
              Popular Handcrafted Pieces
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {CATEGORIES.slice(0, 5).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#2C4A3E] text-[#FAF7F2] shadow-xs'
                    : 'bg-[#FFFFFF] border border-[#DDD1C0] text-[#766D64] hover:text-[#23201D] hover:border-[#D49B35]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#FAF7F2] border-2 border-[#2C4A3E] text-[#2C4A3E] hover:bg-[#EAF1ED] font-semibold text-xs sm:text-sm rounded-xl transition-colors shadow-craft-sm"
          >
            <span>View All Handcrafted Products ({PRODUCTS.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. "MADE ESPECIALLY FOR YOU" - CUSTOM ORDER HIGHLIGHT */}
      <section className="bg-[#244035] text-[#FAF7F2] py-14 sm:py-20 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D49B35_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Image Mockup */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border-4 border-[#FAF7F2]/20 shadow-2xl">
                <img
                  src="/images/nameplate.jpg"
                  alt="Customized handcrafted wooden nameplate"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#D49B35] text-[#23201D] text-xs font-bold px-3 py-1 rounded-md shadow-md">
                  Personalized For Your Home
                </div>
              </div>
            </div>

            {/* Right Form & Story CTA */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D49B35]/20 text-[#D49B35] border border-[#D49B35]/40 rounded-full text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bespoke Artisan Studio</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF7F2] leading-tight">
                Made Especially For You
              </h2>
              <p className="font-hindi text-base text-[#D49B35]">
                आपकी विशेष पसंद और नाम के साथ हस्तनिर्मित कला
              </p>

              <p className="text-xs sm:text-sm text-[#C8D9D0] leading-relaxed max-w-xl">
                Looking for a personalized baby milestone plaque, a carved family entrance nameplate, a customized Dehra frame, or auspicious festive gifts? Our master artisans hand-carve and hand-inscribe your names, dates, and special color choices with utmost devotion.
              </p>

              {/* Custom Options List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#FAF7F2]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D49B35] shrink-0" />
                  <span>Custom Inscribed Family & Baby Names</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D49B35] shrink-0" />
                  <span>Choice of Cedar / Teak / Pine Wood</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D49B35] shrink-0" />
                  <span>Tailored Color Palettes & Wool Florals</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D49B35] shrink-0" />
                  <span>Free Handwritten Gift Letter with Wax Seal</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3.5">
                <Link
                  to="/custom-orders"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#D49B35] hover:bg-[#B57E22] text-[#23201D] font-bold text-xs sm:text-sm rounded-xl transition-all shadow-craft-md"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Build Your Custom Craft</span>
                </Link>

                <a
                  href="https://wa.me/919816000000?text=Namaste%20Shailreet,%20I%20want%20to%20discuss%20a%20customized%20craft%20order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent hover:bg-[#FAF7F2]/10 text-[#FAF7F2] border border-[#C8D9D0] font-semibold text-xs sm:text-sm rounded-xl transition-all"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. ARTISAN HERITAGE STORY - "THE SOUL OF SHAILREET" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border border-[#DDD1C0] rounded-2xl p-6 sm:p-10 shadow-craft-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Story */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAF1ED] text-[#2C4A3E] rounded-full text-xs font-semibold">
                <span className="font-hindi text-sm">शैलरीत की कहानी</span>
                <span>• The Heritage Story</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#23201D] leading-snug">
                Preserving Ancient Mountain Crafts & Empowering Village Artisans
              </h2>

              <p className="text-xs sm:text-sm text-[#6E655C] leading-relaxed">
                Nestled in the serene valleys of Himachal Pradesh, <strong>Shailreet</strong> was born out of deep reverence for ancestral wood carving and folk temple traditions. In a world overrun by mass-produced plastic, we champion the slow, thoughtful beauty of handmade art.
              </p>

              <div className="p-4 bg-[#F4EFE7] rounded-xl border border-[#ECE3D6] space-y-2">
                <p className="italic text-xs sm:text-sm font-serif text-[#23201D] leading-relaxed">
                  "Every line I carve into cedar wood is a prayer and a celebration of our mountain ancestors. Creating art with our hands keeps our soul alive."
                </p>
                <div className="flex items-center justify-between text-xs text-[#766D64] pt-1">
                  <span className="font-bold text-[#852233]">— Master Sunita Devi</span>
                  <span>Kangra Valley, Himachal Pradesh</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/about"
                  className="text-xs sm:text-sm font-bold text-[#2C4A3E] hover:underline flex items-center gap-1.5"
                >
                  Read Our Full Story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border-2 border-[#DDD1C0] shadow-craft-sm">
                <img
                  src="/images/artisan-crafting.jpg"
                  alt="Artisan hand-painting traditional woodwork"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="p-3 bg-[#FFFFFF] text-center border-t border-[#ECE3D6]">
                  <p className="text-xs font-semibold text-[#23201D]">Master Artisan at Kangra Valley Workshop</p>
                  <p className="text-[11px] text-[#766D64]">100% natural gouache mineral pigments</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CUSTOMER LOVE & PHOTO REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#2C4A3E] bg-[#EAF1ED] px-3 py-1 rounded-full">
            Real Customer Love
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#23201D] mt-3">
            “Received my parcel today, it’s beautiful ❤️”
          </h2>
          <MotifDivider />
          <p className="text-xs sm:text-sm text-[#766D64] mt-2">
            Read heartfelt experiences from art lovers across India who welcomed Shailreet crafts into their homes.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="p-5 rounded-xl bg-[#FFFFFF] border border-[#ECE3D6] shadow-craft-sm flex flex-col justify-between space-y-4 hover:border-[#D49B35] transition-colors"
            >
              <div>
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-[#D49B35]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D49B35]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#9A9085]">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#3A3530] leading-relaxed italic mb-4">
                  "{review.comment}"
                </p>
              </div>

              {/* Product Tag & Customer */}
              <div className="pt-3 border-t border-[#F4EFE7] flex items-center gap-3">
                <img
                  src={review.productImage}
                  alt={review.productName}
                  className="w-12 h-12 object-cover rounded-lg border border-[#E4DCD2] shrink-0"
                />
                <div className="min-w-0">
                  <h5 className="text-xs font-bold text-[#23201D] truncate">
                    {review.author}
                  </h5>
                  <p className="text-[11px] text-[#766D64]">{review.location}</p>
                  <span className="text-[10px] text-[#2C4A3E] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5" /> Verified Craft Buyer
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/reviews"
            className="text-xs sm:text-sm font-semibold text-[#852233] hover:underline"
          >
            View All Verified Customer Reviews & Photos →
          </Link>
        </div>
      </section>

      {/* 7. INSTAGRAM / CRAFT GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#852233]">
            <InstagramIcon className="w-4 h-4" />
            <span>@shailreet.crafts</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#23201D] mt-1">
            Artisanal Studio Moments & Living Spaces
          </h2>
          <p className="text-xs text-[#766D64] mt-1">
            Follow our handcrafted journey from Kangra mountain workshops to cozy home walls.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {GALLERY_ITEMS.map((item) => (
            <Link
              key={item.id}
              to="/gallery"
              className="group relative rounded-xl overflow-hidden aspect-square bg-[#F4EFE7] border border-[#ECE3D6] shadow-craft-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2.5 flex flex-col justify-end text-[#FAF7F2]">
                <span className="text-[10px] font-bold text-[#D49B35] uppercase">{item.category}</span>
                <p className="text-[11px] font-serif line-clamp-1 leading-tight">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#23201D]">
            Craft Questions & Ordering Guide
          </h2>
          <MotifDivider />
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#FFFFFF] border border-[#ECE3D6] overflow-hidden shadow-craft-sm"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-[#FDFBF7] transition-colors"
              >
                <span className="font-serif text-sm sm:text-base font-semibold text-[#23201D]">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#766D64] transition-transform duration-200 shrink-0 ${
                    activeFaq === idx ? 'rotate-180 text-[#2C4A3E]' : ''
                  }`}
                />
              </button>
              {activeFaq === idx && (
                <div className="p-4 pt-0 text-xs sm:text-sm text-[#6E655C] leading-relaxed border-t border-[#F4EFE7] bg-[#FAF7F2]/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
