import React from 'react';
import { Link } from 'react-router-dom';
import MotifDivider from '../components/common/MotifDivider';
import { ARTISAN_STORIES } from '../data/craftData';
import {
  Heart,
  Sparkles,
  Leaf,
  ShieldCheck,
  Users,
  Palette,
  ArrowRight
} from 'lucide-react';

export const AboutPage = () => {
  const steps = [
    {
      step: '01',
      title: 'Himalayan Wood Curation & Carving',
      desc: 'We source sustainably harvested Himalayan cedar, teak, and pine wood, naturally seasoned for months before master artisans carve traditional archways and jharokha relief patterns.'
    },
    {
      step: '02',
      title: 'Organic Clay Dough & Lippan Relief',
      desc: 'Using organic mud dough, natural plant binders, and marble dust, sacred geometric lotus petals, mandalas, and temple bells are sculpted by hand.'
    },
    {
      step: '03',
      title: 'Mineral Pigments & Fine Calligraphy',
      desc: 'Rich crimson, ochre turmeric, and forest emerald tones are applied using fine natural-hair brushes, inspired by centuries-old Pahari miniature painting.'
    },
    {
      step: '04',
      title: 'Wool Threading, Brass Bells & Varnish',
      desc: 'Each piece is adorned with hand-spun woolen tassels, solid cast brass chime bells, and sealed with non-toxic protective matte lacquer for lasting heirloom beauty.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-16 sm:space-y-20">
      
      {/* 1. Header & Brand Story */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1ED] border border-[#C8D9D0] text-[#2C4A3E] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#D49B35]" />
          <span>The Soul of Shailreet • शैलरीत</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#23201D] leading-tight">
          Handmade With Tradition, Made With Love
        </h1>

        <p className="font-hindi text-lg text-[#852233] font-semibold">
          पहाड़ों की प्राचीन काष्ठ व लोक कला का पुनर्जागरण
        </p>

        <MotifDivider />

        <p className="text-xs sm:text-sm text-[#6E655C] leading-relaxed font-sans max-w-2xl mx-auto">
          Shailreet (शैलरीत) is dedicated to preserving the sacred art of Himachali Dehra woodwork, traditional temple frames, customized celebratory plaques, and Pahari folk art. Rooted in Kangra Valley, we bridge ancient craft traditions with modern homes.
        </p>
      </div>

      {/* 2. Hero Visual Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAEEF1] text-[#852233] rounded-full text-xs font-semibold">
            Our Purpose & Heritage
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#23201D] leading-snug">
            Every Handcrafted Piece Tells an Ancestral Mountain Tale
          </h2>

          <p className="text-xs sm:text-sm text-[#59534C] leading-relaxed">
            In Himachal Pradesh, the <em>Dehra</em> (देहरा) is more than just decorative art — it is a revered wooden sanctum that historically framed deities, welcoming auspicious energy, harmony, and joy into household courtyards.
          </p>

          <p className="text-xs sm:text-sm text-[#59534C] leading-relaxed">
            As modern homes shifted towards fast mass-produced plastic, many rural master carvers were losing their ancestral livelihood. Shailreet was founded to revive this timeless heritage, offering dignified, sustainable employment to talented village artisans while creating authentic keepsakes that last generations.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3">
            <div className="p-3.5 bg-[#FFFFFF] border border-[#ECE3D6] rounded-xl text-center shadow-craft-sm">
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#2C4A3E]">35+</h4>
              <p className="text-[11px] text-[#766D64]">Artisans Empowered</p>
            </div>
            <div className="p-3.5 bg-[#FFFFFF] border border-[#ECE3D6] rounded-xl text-center shadow-craft-sm">
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#852233]">1,200+</h4>
              <p className="text-[11px] text-[#766D64]">Homes Blessed</p>
            </div>
            <div className="p-3.5 bg-[#FFFFFF] border border-[#ECE3D6] rounded-xl text-center shadow-craft-sm col-span-2 sm:col-span-1">
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#D49B35]">100%</h4>
              <p className="text-[11px] text-[#766D64]">Plastic-Free Art</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border-4 border-[#FFFFFF] shadow-craft-lg relative">
            <img
              src="/images/artisan-crafting.jpg"
              alt="Woman artisan carving and painting handmade craft in Himachal studio"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
            <div className="p-3 bg-[#FAF7F2] border-t border-[#ECE3D6] text-xs text-center text-[#6E655C]">
              Master Sunita Devi hand-painting floral vines at our Kangra craft atelier
            </div>
          </div>
        </div>
      </div>

      {/* 3. Crafting Process: 4 Steps */}
      <section className="bg-[#FFFFFF] border border-[#ECE3D6] rounded-3xl p-6 sm:p-12 shadow-craft-sm space-y-10">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-[#2C4A3E] bg-[#EAF1ED] px-3 py-1 rounded-full">
            Artisanal Journey
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#23201D] mt-2">
            The Making of a Shailreet Masterpiece
          </h2>
          <MotifDivider />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.step}
              className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#ECE3D6] hover:border-[#D49B35] transition-all flex flex-col justify-between space-y-3 shadow-craft-sm"
            >
              <div>
                <span className="font-serif text-3xl font-bold text-[#D49B35] block mb-2">
                  {s.step}
                </span>
                <h3 className="font-serif text-sm font-bold text-[#23201D] leading-snug">
                  {s.title}
                </h3>
                <p className="text-xs text-[#766D64] leading-relaxed mt-2">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Packaging & Sustainability Promise */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF7F2] border border-[#DDD1C0] rounded-3xl p-6 sm:p-10 shadow-craft-sm">
        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border-2 border-[#DDD1C0] shadow-craft-sm">
            <img
              src="/images/gift-packaging.jpg"
              alt="Artisanal gift box with handwritten note and dried flowers"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D49B35]/20 text-[#23201D] rounded-full text-xs font-semibold">
            <Leaf className="w-3.5 h-3.5 text-[#2C4A3E]" />
            <span>Sustainable & Mindful Living</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#23201D]">
            Thoughtful Packaging & Hand-Written Warmth
          </h2>

          <p className="text-xs sm:text-sm text-[#6E655C] leading-relaxed">
            Every Shailreet craft is wrapped in organic butter paper, cushioned with natural wood shavings, tied with golden jute twine, and tucked into a sturdy biodegradable kraft box. We include a handwritten letter with a wax seal to thank you for preserving Indian heritage.
          </p>

          <div className="pt-2">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2C4A3E] text-[#FAF7F2] font-semibold text-xs rounded-xl hover:bg-[#1E352C] transition-colors shadow-craft-sm"
            >
              <span>Explore Handmade Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;
