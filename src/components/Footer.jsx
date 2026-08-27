import React, { useState } from 'react';
import { Dumbbell, MapPin, Clock, Phone, Send, CheckCircle } from 'lucide-react';

const Footer = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setPhone('');
      setMsg('');
    }, 2500);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="contact" className="bg-black border-t border-gymBorder/60 pt-20 pb-8 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Section Overlay Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-gymBorder/40">
          
          {/* Column 1: Info and Branding */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <a href="#home" className="flex items-center gap-2 group mb-6">
                <div className="bg-gymAccent text-white p-2 rounded-lg transition-transform group-hover:scale-110 duration-300">
                  <Dumbbell className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">
                    The Power House <span className="text-gymAccent">Gym</span>
                  </span>
                  <span className="text-[10px] text-gymTextMuted tracking-widest uppercase font-sans -mt-1 block">
                    थे पावर हाउस जिम योल
                  </span>
                </div>
              </a>

              <p className="font-sans text-sm sm:text-base text-gray-400 leading-relaxed tracking-wide mb-6">
                "Train hard. Stay consistent. Become stronger." Power House Gym provides the motivating atmosphere, premium weights, and 24/7 accessibility you need to achieve real athletic gains in Yol.
              </p>

              {/* Physical details list */}
              <div className="flex flex-col gap-4 font-sans text-sm text-gray-400">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gymAccent flex-shrink-0" />
                  <span>Yol Cantonment, Himachal Pradesh, 176052</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gymAccent flex-shrink-0" />
                  <span className="text-emerald-500 font-semibold">Open 24 Hours / 7 Days</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gymAccent flex-shrink-0" />
                  <span>+91 88941 78550</span>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-8">
              <h4 className="font-display text-xs font-black text-white uppercase tracking-wider mb-4">
                Follow the Grind
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gymCard hover:bg-gymAccent hover:text-white p-3 rounded-full border border-gymBorder/60 text-gray-400 transition-all duration-300 hover:-translate-y-1"
                  aria-label="Instagram Profile"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gymCard hover:bg-gymAccent hover:text-white p-3 rounded-full border border-gymBorder/60 text-gray-400 transition-all duration-300 hover:-translate-y-1"
                  aria-label="Facebook Page"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/918894178550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gymCard hover:bg-gymAccent hover:text-white p-3 rounded-full border border-gymBorder/60 text-gray-400 transition-all duration-300 hover:-translate-y-1"
                  aria-label="WhatsApp Chat"
                >
                  <Send className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Message Form */}
          <div className="lg:col-span-7 bg-gymCard border border-gymBorder p-6 sm:p-8 rounded-2xl shadow-xl">
            <h3 className="font-display text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-2">
              Send Membership Query
            </h3>
            <p className="font-sans text-xs sm:text-sm text-gymTextMuted mb-6">
              Enter your details below and a trainer will contact you shortly about memberships.
            </p>

            {submitted ? (
              <div className="text-center py-10">
                <div className="h-14 w-14 bg-gymAccent/10 text-gymAccent border border-gymAccent/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 animate-pulse" />
                </div>
                <h4 className="font-display font-bold text-lg text-white uppercase tracking-wider mb-2">
                  Message Dispatched!
                </h4>
                <p className="font-sans text-xs text-gymTextMuted">
                  Thank you. We will call you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-sans text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Amit Kumar"
                      className="bg-gymDark border border-gymBorder rounded-xl p-3 text-white focus:outline-none focus:border-gymAccent transition-colors"
                    />
                  </div>
                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="bg-gymDark border border-gymBorder rounded-xl p-3 text-white focus:outline-none focus:border-gymAccent transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    How can we help you?
                  </label>
                  <textarea
                    rows="3"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="I would like to inquire about monthly membership fees and trainer support..."
                    className="bg-gymDark border border-gymBorder rounded-xl p-3 text-white focus:outline-none focus:border-gymAccent transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-gymAccent hover:bg-gymAccentHover text-white py-3 rounded-xl uppercase tracking-wider font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gymAccent/20 hover:-translate-y-0.5"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
          
        </div>

        {/* Directory Links and Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Quick Directory */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-xs uppercase tracking-widest text-gray-400 hover:text-gymAccent transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright notice */}
          <p className="font-sans text-[11px] text-gymTextMuted text-center md:text-right">
            &copy; 2026 The Power House Gym Yol. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
