import React, { useState } from 'react';
import { useCraft } from '../context/CraftContext';
import MotifDivider from '../components/common/MotifDivider';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Sparkles,
  MessageCircle
} from 'lucide-react';

export const ContactPage = () => {
  const { showToast } = useCraft();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      showToast('Please provide your name and inquiry message', 'error');
      return;
    }
    setSent(true);
    showToast('✨ Namaste! Your message has reached our artisan studio.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1ED] border border-[#C8D9D0] text-[#2C4A3E] text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#D49B35]" />
          <span>Artisan Studio & Connect</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#23201D]">
          Get in Touch With Shailreet
        </h1>
        <p className="font-hindi text-base text-[#852233] mt-1">
          हस्तशिल्प, विशेष ऑर्डर या स्टूडियो भ्रमण हेतु संपर्क करें
        </p>
        <MotifDivider />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Studio Information (5 Cols) */}
        <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#ECE3D6] p-6 sm:p-8 rounded-2xl shadow-craft-sm space-y-6">
          <h3 className="font-serif text-xl font-bold text-[#23201D] pb-3 border-b border-[#ECE3D6]">
            Himalayan Studio Details
          </h3>

          <div className="space-y-4 text-xs sm:text-sm text-[#59534C]">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#EAF1ED] text-[#2C4A3E] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-[#23201D] block font-serif text-sm">Main Craft Atelier</strong>
                <p className="leading-relaxed mt-0.5">
                  Kangra Crafts Hamlet, Dharamshala Road, Near Chamunda Sanctum, Himachal Pradesh 176057
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#EAF1ED] text-[#2C4A3E] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-[#23201D] block font-serif text-sm">Artisan Phone & WhatsApp</strong>
                <p className="mt-0.5">+91 98160 12345 / +91 88942 67890</p>
                <span className="text-[11px] text-[#766D64]">Mon - Sat: 9:30 AM to 7:00 PM IST</span>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#EAF1ED] text-[#2C4A3E] flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-[#23201D] block font-serif text-sm">Email Inquiries</strong>
                <p className="mt-0.5">contact@shailreetcrafts.in / orders@shailreet.in</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#EAF1ED] text-[#2C4A3E] flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-[#23201D] block font-serif text-sm">Studio Visits & Workshops</strong>
                <p className="mt-0.5">
                  Visitors and art connoisseurs are warmly welcomed by prior appointment.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#244035] text-[#FAF7F2] rounded-xl space-y-2">
            <h4 className="font-serif text-sm font-bold flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#D49B35]" /> Instant WhatsApp Support
            </h4>
            <p className="text-xs text-[#C8D9D0]">
              Need help choosing the right Dehra size or font for your name board? Chat with us instantly.
            </p>
            <a
              href="https://wa.me/919816000000?text=Namaste%20Shailreet,%20I%20would%20like%20to%20know%20more%20about%20your%20crafts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAF7F2] text-[#2C4A3E] text-xs font-bold rounded-lg hover:bg-[#FFFFFF] transition-colors mt-1"
            >
              Start WhatsApp Chat
            </a>
          </div>
        </div>

        {/* Right Contact Form (7 Cols) */}
        <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#ECE3D6] p-6 sm:p-8 rounded-2xl shadow-craft-sm space-y-6">
          <h3 className="font-serif text-xl font-bold text-[#23201D] pb-3 border-b border-[#ECE3D6]">
            Send an Inquiry
          </h3>

          {sent ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#EAF1ED] text-[#2C4A3E] flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#23201D]">Message Received!</h4>
              <p className="text-xs text-[#766D64] max-w-sm mx-auto">
                Thank you for reaching out. An artisan coordinator from our Kangra studio will get back to you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                }}
                className="mt-4 px-5 py-2 bg-[#FAF7F2] border border-[#DDD1C0] text-[#23201D] text-xs font-semibold rounded-lg"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3A3530] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs p-3 bg-[#FAF7F2] border border-[#DDD1C0] rounded-xl text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3A3530] mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs p-3 bg-[#FAF7F2] border border-[#DDD1C0] rounded-xl text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3A3530] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs p-3 bg-[#FAF7F2] border border-[#DDD1C0] rounded-xl text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3A3530] mb-1">
                    Inquiry Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full text-xs p-3 bg-[#FAF7F2] border border-[#DDD1C0] rounded-xl text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
                  >
                    <option value="General Inquiry">General Craft Inquiry</option>
                    <option value="Custom Order Request">Custom / Personalized Order</option>
                    <option value="Bulk & Corporate Gifting">Bulk & Corporate Gifting</option>
                    <option value="Studio Visit">Studio Visit & Workshop Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3A3530] mb-1">
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share details about your custom size, occasion, or any question..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-xs p-3 bg-[#FAF7F2] border border-[#DDD1C0] rounded-xl text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#2C4A3E] hover:bg-[#1E352C] text-[#FAF7F2] font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-craft-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Artisan Inquiry</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
