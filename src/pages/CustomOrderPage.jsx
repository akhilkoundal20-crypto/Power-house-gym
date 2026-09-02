import React, { useState } from 'react';
import { useCraft } from '../context/CraftContext';
import MotifDivider from '../components/common/MotifDivider';
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  Gift,
  Palette,
  Phone,
  ArrowRight,
  HelpCircle,
  Clock,
  Heart
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const CustomOrderPage = () => {
  const { submitCustomRequest, showToast } = useCraft();

  const [craftType, setCraftType] = useState('birthday-board');
  const [customName, setCustomName] = useState('');
  const [occasion, setOccasion] = useState('1st Birthday Milestone');
  const [theme, setTheme] = useState('pastel-blooms');
  const [woodType, setWoodType] = useState('pine');
  const [size, setSize] = useState('standard');
  const [specialNotes, setSpecialNotes] = useState('');
  
  // Contact details
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerCity, setCustomerCity] = useState('');

  // Submission state
  const [submittedRequest, setSubmittedRequest] = useState(null);

  const craftTypes = [
    { id: 'dehra', name: 'Personalized Dehra Temple Art', basePrice: 3499, time: '4-6 Days', img: '/images/dehra-peacock.jpg' },
    { id: 'birthday-board', name: 'Customized Baby Birthday Board', basePrice: 2199, time: '3-4 Days', img: '/images/birthday-board.jpg' },
    { id: 'nameplate', name: 'Carved Wooden Family Nameplate', basePrice: 2899, time: '4-5 Days', img: '/images/nameplate.jpg' },
    { id: 'toran', name: 'Festive Door Toran & Bandhanwar', basePrice: 1599, time: '2-3 Days', img: '/images/festive-toran.jpg' },
    { id: 'painting', name: 'Framed Kangra Folk Painting', basePrice: 4499, time: '5-7 Days', img: '/images/pahari-painting.jpg' },
    { id: 'lippan', name: 'Handmade Lippan Mud & Mirror Disc', basePrice: 2699, time: '3-5 Days', img: '/images/lippan-art.jpg' }
  ];

  const selectedCraft = craftTypes.find((c) => c.id === craftType) || craftTypes[0];

  const sizeAddons = {
    'standard': { label: 'Standard Classic Size', add: 0 },
    'large': { label: 'Large Feature Size (+ ₹600)', add: 600 },
    'grand': { label: 'Grand Heirloom Masterpiece (+ ₹1,200)', add: 1200 }
  };

  const estimatedPrice = selectedCraft.basePrice + sizeAddons[size].add;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customName.trim() || !customerName.trim() || !customerPhone.trim()) {
      showToast('Please fill in your custom inscription, name and mobile number', 'error');
      return;
    }

    const requestDetails = {
      craftType: selectedCraft.name,
      customName,
      occasion,
      theme,
      woodType,
      size: sizeAddons[size].label,
      specialNotes,
      customerName,
      customerPhone,
      customerCity,
      estimatedPrice
    };

    const res = submitCustomRequest(requestDetails);
    setSubmittedRequest(res);

    // Fire celebratory confetti
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-12">
      
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAEEF1] border border-[#E7BDC7] text-[#852233] text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#852233]" />
          <span>Bespoke Handmade Service</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#23201D] leading-tight">
          Made Especially For You
        </h1>
        <p className="font-hindi text-base sm:text-lg text-[#852233] mt-1">
          हस्तनिर्मित विशेष कलाकृतियां — आपकी पसंद व नाम के साथ
        </p>
        <MotifDivider />
        <p className="text-xs sm:text-sm text-[#766D64] leading-relaxed max-w-xl mx-auto font-sans">
          Whether you need an auspicious personalized Dehra for your home shrine, an adorable birthday milestone board with handmade wool flowers, or a carved family entrance plaque — our artisans in Himachal Pradesh craft it with love.
        </p>
      </div>

      {submittedRequest ? (
        /* Confirmation Screen */
        <div className="bg-[#FFFFFF] border-2 border-[#2C4A3E] rounded-2xl p-6 sm:p-10 shadow-craft-lg text-center max-w-2xl mx-auto space-y-6 animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-[#EAF1ED] text-[#2C4A3E] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-bold text-[#852233] uppercase tracking-wider">
              Request Received #{submittedRequest.requestId}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#23201D] mt-1">
              Thank You for Supporting Traditional Art! ❤️
            </h2>
            <p className="text-xs sm:text-sm text-[#766D64] mt-2 max-w-md mx-auto">
              Our Kangra studio artisans have received your bespoke request for <strong>{submittedRequest.craftType}</strong> with inscription <em>"{submittedRequest.customName}"</em>.
            </p>
          </div>

          <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#ECE3D6] text-left text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-[#766D64]">Estimated Craft Value:</span>
              <strong className="text-[#23201D] font-bold">₹{submittedRequest.estimatedPrice.toLocaleString('en-IN')}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-[#766D64]">Artisan Crafting Time:</span>
              <span className="text-[#2C4A3E] font-medium">{selectedCraft.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#766D64]">Customer Name:</span>
              <span className="text-[#23201D]">{submittedRequest.customerName} ({submittedRequest.customerCity})</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={`https://wa.me/919816000000?text=${encodeURIComponent(
                `Namaste Shailreet! I submitted custom order #${submittedRequest.requestId} for ${submittedRequest.craftType} ("${submittedRequest.customName}"). Can we discuss the details?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#2C4A3E] text-[#FAF7F2] text-xs font-bold rounded-xl hover:bg-[#1E352C] transition-colors shadow-craft-sm"
            >
              <Phone className="w-4 h-4" /> Share On WhatsApp Direct
            </a>
            <button
              onClick={() => setSubmittedRequest(null)}
              className="flex-1 py-3 bg-[#FAF7F2] text-[#23201D] border border-[#DDD1C0] text-xs font-semibold rounded-xl hover:bg-[#F4EFE7] transition-colors"
            >
              Configure Another Craft
            </button>
          </div>
        </div>
      ) : (
        /* Interactive Customizer Studio Form */
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Configurator (8 Cols) */}
          <div className="lg:col-span-8 bg-[#FFFFFF] border border-[#ECE3D6] p-6 sm:p-8 rounded-2xl shadow-craft-sm space-y-8">
            
            {/* Step 1: Select Craft Type */}
            <div>
              <label className="block font-serif text-base font-bold text-[#23201D] mb-3">
                1. Select Handcrafted Art Form
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {craftTypes.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCraftType(c.id)}
                    className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                      craftType === c.id
                        ? 'border-[#2C4A3E] bg-[#EAF1ED] ring-1 ring-[#2C4A3E]'
                        : 'border-[#ECE3D6] hover:border-[#D49B35] bg-[#FFFFFF]'
                    }`}
                  >
                    <img
                      src={c.img}
                      alt={c.name}
                      className="w-12 h-12 rounded-lg object-cover border border-[#E4DCD2] shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-[#23201D] truncate">{c.name}</h4>
                      <p className="text-[11px] text-[#852233] font-semibold">From ₹{c.basePrice.toLocaleString('en-IN')}</p>
                      <span className="text-[10px] text-[#766D64] flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" /> {c.time}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Inscription & Occasion */}
            <div className="space-y-4 pt-4 border-t border-[#ECE3D6]">
              <label className="block font-serif text-base font-bold text-[#23201D]">
                2. Personalized Text & Occasion
              </label>
              
              <div>
                <label className="block text-xs font-semibold text-[#3A3530] mb-1">
                  Name / Text to Inscribe in Calligraphy <span className="text-[#852233]">*</span>
                </label>
                <input
                  type="text"
                  placeholder='e.g. "Aarav - 1st Birthday" or "The Sharma Niwas" or "Shubh Labh"'
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  required
                  className="w-full text-xs sm:text-sm p-3 bg-[#FAF7F2] border border-[#DDD1C0] rounded-xl text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3A3530] mb-1">
                    Occasion / Event
                  </label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full text-xs p-3 bg-[#FAF7F2] border border-[#DDD1C0] rounded-xl text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
                  >
                    <option value="1st Birthday Milestone">Baby Birthday / Milestone</option>
                    <option value="Griha Pravesh / Housewarming">Griha Pravesh / New Home</option>
                    <option value="Wedding & Anniversary">Wedding / Anniversary Keepsake</option>
                    <option value="Pooja Sanctum / Mandir">Home Mandir / Sacred Space</option>
                    <option value="Diwali & Festive Decor">Diwali / Festive Gift</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3A3530] mb-1">
                    Color & Floral Palette
                  </label>
                  <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="w-full text-xs p-3 bg-[#FAF7F2] border border-[#DDD1C0] rounded-xl text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
                  >
                    <option value="pastel-blooms">Pastel Felt Blooms (Blush, Sage & Cream)</option>
                    <option value="himachali-heritage">Himachali Heritage (Maroon, Ochre & Forest Green)</option>
                    <option value="royal-gold">Royal Emerald Green & 24K Gold</option>
                    <option value="earthy-terracotta">Earthy Terracotta, Mustard & Teal</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Size & Materials */}
            <div className="space-y-4 pt-4 border-t border-[#ECE3D6]">
              <label className="block font-serif text-base font-bold text-[#23201D]">
                3. Dimensions & Wood Choice
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Object.entries(sizeAddons).map(([key, value]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSize(key)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      size === key
                        ? 'border-[#2C4A3E] bg-[#EAF1ED] ring-1 ring-[#2C4A3E]'
                        : 'border-[#ECE3D6] hover:border-[#D49B35] bg-[#FAF7F2]'
                    }`}
                  >
                    <p className="text-xs font-bold text-[#23201D]">{value.label}</p>
                    <span className="text-[11px] text-[#766D64]">
                      {key === 'standard' ? 'Approx 12" x 9"' : key === 'large' ? 'Approx 16" x 12"' : 'Approx 22" x 16"'}
                    </span>
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3A3530] mb-1">
                  Additional Notes or Custom Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention any specific flower preferences, background motif ideas, or special dates to add..."
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full text-xs p-3 bg-[#FAF7F2] border border-[#DDD1C0] rounded-xl text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
                />
              </div>
            </div>

            {/* Step 4: Contact Information */}
            <div className="space-y-4 pt-4 border-t border-[#ECE3D6]">
              <label className="block font-serif text-base font-bold text-[#23201D]">
                4. Your Contact Information
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#3A3530] mb-1">
                    Your Full Name <span className="text-[#852233]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                    className="w-full text-xs p-2.5 bg-[#FAF7F2] border border-[#DDD1C0] rounded-lg text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3A3530] mb-1">
                    WhatsApp / Phone <span className="text-[#852233]">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit Mobile No."
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    required
                    className="w-full text-xs p-2.5 bg-[#FAF7F2] border border-[#DDD1C0] rounded-lg text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3A3530] mb-1">
                    Delivery City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Mumbai, Chandigarh"
                    value={customerCity}
                    onChange={(e) => setCustomerCity(e.target.value)}
                    className="w-full text-xs p-2.5 bg-[#FAF7F2] border border-[#DDD1C0] rounded-lg text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#2C4A3E] hover:bg-[#1E352C] text-[#FAF7F2] font-bold text-sm rounded-xl transition-all shadow-craft-md flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#D49B35]" />
              <span>Submit Custom Craft Request (Est. ₹{estimatedPrice.toLocaleString('en-IN')})</span>
            </button>

          </div>

          {/* Right Summary & Craft Promise (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Live Spec Preview Card */}
            <div className="bg-[#FFFFFF] border border-[#ECE3D6] rounded-2xl p-5 shadow-craft-sm space-y-4">
              <h3 className="font-serif text-base font-bold text-[#23201D] pb-2 border-b border-[#ECE3D6]">
                Bespoke Order Estimate
              </h3>

              <div className="flex gap-3">
                <img
                  src={selectedCraft.img}
                  alt={selectedCraft.name}
                  className="w-16 h-16 rounded-xl object-cover border border-[#E4DCD2] shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-[#23201D]">{selectedCraft.name}</h4>
                  <p className="text-xs text-[#852233] font-serif font-semibold mt-0.5">
                    Est. ₹{estimatedPrice.toLocaleString('en-IN')}
                  </p>
                  <span className="text-[10px] text-[#766D64]">Complimentary Gift Box included</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#766D64] pt-2 border-t border-[#ECE3D6]">
                <div className="flex justify-between">
                  <span>Custom Inscription:</span>
                  <span className="font-medium text-[#23201D] text-right truncate max-w-[140px]">
                    {customName || '(Not entered yet)'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Occasion:</span>
                  <span className="font-medium text-[#23201D]">{occasion}</span>
                </div>
                <div className="flex justify-between">
                  <span>Crafting Lead Time:</span>
                  <span className="font-medium text-[#2C4A3E]">{selectedCraft.time}</span>
                </div>
              </div>

              <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#ECE3D6] text-[11px] text-[#6E655C] space-y-1">
                <div className="flex items-center gap-1.5 text-[#2C4A3E] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>The Shailreet Promise</span>
                </div>
                <p className="leading-relaxed">
                  Before final varnishing and packing, our artisan team shares photos/videos of your personalized piece on WhatsApp for your approval!
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-4 bg-[#244035] text-[#FAF7F2] rounded-2xl space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#D49B35] flex items-center justify-center text-[#23201D]">
                  <Phone className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold font-serif">Have a bespoke design in mind?</h4>
              </div>
              <p className="text-[11px] text-[#C8D9D0] leading-relaxed">
                Connect directly with our Kangra design team to share sketches or Pinterest inspirations.
              </p>
              <a
                href="https://wa.me/919816000000?text=Namaste%20Shailreet,%20I%20have%20a%20custom%20craft%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#FAF7F2] text-[#2C4A3E] hover:bg-[#FFFFFF] text-xs font-bold rounded-lg transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </form>
      )}

    </div>
  );
};

export default CustomOrderPage;
