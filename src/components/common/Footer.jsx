import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCraft } from '../../context/CraftContext';
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
  Truck,
  Sparkles,
  Leaf
} from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useCraft();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    setSubscribed(true);
    showToast('✨ Thank you for subscribing! Your 10% welcome coupon is HANDMADE10');
  };

  return (
    <footer className="bg-[#1E352C] text-[#FAF7F2] relative overflow-hidden border-t-4 border-[#D49B35]">
      {/* Decorative Traditional Border Motif */}
      <div className="h-2 bg-[#D49B35] opacity-20 w-full" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        
        {/* Value Props Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 mb-12 border-b border-[#2C4A3E]/60 text-xs sm:text-sm">
          <div className="flex items-center gap-3.5 p-3 rounded-lg bg-[#244035]/60 border border-[#3B6152]/30">
            <div className="w-10 h-10 rounded-full bg-[#D49B35]/20 text-[#D49B35] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-semibold text-[#FAF7F2]">100% Authentic Handcraft</h5>
              <p className="text-[#C8D9D0] text-xs">Carved & painted by master artisans</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-lg bg-[#244035]/60 border border-[#3B6152]/30">
            <div className="w-10 h-10 rounded-full bg-[#D49B35]/20 text-[#D49B35] flex items-center justify-center shrink-0">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-semibold text-[#FAF7F2]">Sustainable Materials</h5>
              <p className="text-[#C8D9D0] text-xs">Pine wood, organic clay & wool</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-lg bg-[#244035]/60 border border-[#3B6152]/30">
            <div className="w-10 h-10 rounded-full bg-[#D49B35]/20 text-[#D49B35] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-semibold text-[#FAF7F2]">Pan-India Safe Transit</h5>
              <p className="text-[#C8D9D0] text-xs">Multi-layer shock-safe packaging</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-lg bg-[#244035]/60 border border-[#3B6152]/30">
            <div className="w-10 h-10 rounded-full bg-[#D49B35]/20 text-[#D49B35] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-semibold text-[#FAF7F2]">Bespoke Customization</h5>
              <p className="text-[#C8D9D0] text-xs">Personalized names & dates</p>
            </div>
          </div>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info (2 Cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] flex items-center justify-center p-1.5">
                <svg viewBox="0 0 48 48" className="w-full h-full text-[#852233] fill-current">
                  <path d="M24 4C14 4 10 14 10 22V42H38V22C38 14 34 4 24 4ZM24 9C30 9 33 16 33 22V37H15V22C15 16 18 9 24 9ZM24 14C21.8 14 20 16.8 20 20C20 23.2 21.8 26 24 26C26.2 26 28 23.2 28 20C28 16.8 26.2 14 24 14Z" />
                  <circle cx="24" cy="20" r="3" fill="#D49B35" />
                </svg>
              </div>
              <div>
                <span className="font-hindi text-2xl font-bold text-[#D49B35] block leading-none">
                  शैलरीत
                </span>
                <span className="font-display text-sm font-bold text-[#FAF7F2] tracking-wider uppercase">
                  Shailreet Crafts
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#C8D9D0] leading-relaxed max-w-sm">
              Shailreet celebrates the timeless heritage of Himachal Pradesh. We bring authentic handcrafted Dehra temple art, personalized milestone plaques, traditional wall hangings, and folk paintings straight from mountain artisan hands to your home.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#244035] border border-[#3B6152] flex items-center justify-center text-[#FAF7F2] hover:text-[#D49B35] hover:border-[#D49B35] transition-colors"
                title="Instagram @shailreet.crafts"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919816000000?text=Namaste%20Shailreet,%20I%20have%20an%20inquiry%20regarding%20handcrafted%20items"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#244035] border border-[#3B6152] flex items-center justify-center text-[#FAF7F2] hover:text-[#D49B35] hover:border-[#D49B35] transition-colors"
                title="WhatsApp Us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@shailreetcrafts.in"
                className="w-8 h-8 rounded-full bg-[#244035] border border-[#3B6152] flex items-center justify-center text-[#FAF7F2] hover:text-[#D49B35] hover:border-[#D49B35] transition-colors"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#D49B35] tracking-wider uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C8D9D0]">
              <li>
                <Link to="/" className="hover:text-[#FAF7F2] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#FAF7F2] transition-colors">All Craft Collections</Link>
              </li>
              <li>
                <Link to="/custom-orders" className="hover:text-[#FAF7F2] transition-colors">Custom Orders Studio</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FAF7F2] transition-colors">About Shailreet Story</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-[#FAF7F2] transition-colors">Customer Reviews</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#FAF7F2] transition-colors">Artisan Craft Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FAF7F2] transition-colors">Contact & Studio Visit</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#D49B35] tracking-wider uppercase mb-4">
              Craft Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C8D9D0]">
              <li>
                <Link to="/shop?category=dehra" className="hover:text-[#FAF7F2] transition-colors">
                  Himachali Dehra Frames
                </Link>
              </li>
              <li>
                <Link to="/shop?category=birthday-boards" className="hover:text-[#FAF7F2] transition-colors">
                  Birthday & Milestone Boards
                </Link>
              </li>
              <li>
                <Link to="/shop?category=customized-gifts" className="hover:text-[#FAF7F2] transition-colors">
                  Custom Wooden Nameplates
                </Link>
              </li>
              <li>
                <Link to="/shop?category=festive-decor" className="hover:text-[#FAF7F2] transition-colors">
                  Festive Torans & Latkans
                </Link>
              </li>
              <li>
                <Link to="/shop?category=traditional-art" className="hover:text-[#FAF7F2] transition-colors">
                  Kangra Miniature Paintings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=traditional-art" className="hover:text-[#FAF7F2] transition-colors">
                  Lippan Mud & Mirror Art
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold text-[#D49B35] tracking-wider uppercase mb-2">
              Artisan Studio
            </h4>
            
            <div className="space-y-2 text-xs text-[#C8D9D0]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D49B35] shrink-0 mt-0.5" />
                <span>Kangra Crafts Hamlet, Dharamshala Road, Himachal Pradesh 176057</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D49B35] shrink-0" />
                <span>contact@shailreetcrafts.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D49B35] shrink-0" />
                <span>+91 98160 12345 / 88942 67890</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <p className="text-xs text-[#FAF7F2] font-semibold mb-2">
                Get 10% Off Your First Craft
              </p>
              {subscribed ? (
                <div className="p-2.5 rounded bg-[#244035] border border-[#3B6152] text-xs text-[#D49B35]">
                  Coupon Code: <strong className="font-bold">HANDMADE10</strong> applied!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#172B23] border border-[#3B6152] text-xs px-3 py-2 rounded text-[#FAF7F2] placeholder:text-[#766D64] focus:outline-hidden focus:border-[#D49B35]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-[#D49B35] hover:bg-[#B57E22] text-[#23201D] text-xs font-bold rounded transition-colors shrink-0"
                    title="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Craft Pledge */}
        <div className="mt-12 pt-6 border-t border-[#2C4A3E]/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#C8D9D0]">
          <p>© {new Date().getFullYear()} Shailreet (शैलरीत) Crafts. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-xs text-[#FAF7F2]">
            <span>Handmade with love & tradition in Himachal Pradesh</span>
            <Heart className="w-3.5 h-3.5 text-[#852233] fill-[#852233]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
