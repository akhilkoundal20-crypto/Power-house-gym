import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCraft } from '../../context/CraftContext';
import {
  Search,
  ShoppingBag,
  Heart,
  Menu,
  X,
  Sparkles,
  Phone,
  ArrowRight
} from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, wishlistCount, setIsCartOpen, setIsWishlistOpen, setIsSearchOpen } = useCraft();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer upon route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Custom Orders', path: '/custom-orders', badge: 'Personalized' },
    { name: 'About Us', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#2C4A3E] text-[#FAF7F2] text-[11px] sm:text-xs py-1.5 px-4 font-sans tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D49B35] animate-pulse" />
            <span className="hidden sm:inline">Authentic Traditional Crafts from Himachal Pradesh •</span>
            <span className="font-medium text-[#FAF7F2]">
              Use code <strong className="text-[#D49B35] underline tracking-wider font-semibold">HANDMADE10</strong> for 10% Off
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#C8D9D0]">
            <span className="hidden md:inline">Free Shipping across India on Orders ₹999+</span>
            <a
              href="https://wa.me/919816000000?text=Hello%20Shailreet,%20I%20am%20interested%20in%20handmade%20crafts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#FAF7F2] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#D49B35]" />
              <span className="text-[11px]">Artisan Helpline</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-craft-md py-2.5 border-b border-[#ECE3D6]'
            : 'bg-[#FAF7F2] py-3.5 border-b border-[#EFE8DE]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo Identity */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              {/* Artisanal Arch Motif Icon */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#FAF7F2] border border-[#D49B35] flex items-center justify-center p-1.5 shadow-craft-sm group-hover:border-[#852233] transition-colors">
                <svg viewBox="0 0 48 48" className="w-full h-full text-[#852233] fill-current">
                  <path d="M24 4C14 4 10 14 10 22V42H38V22C38 14 34 4 24 4ZM24 9C30 9 33 16 33 22V37H15V22C15 16 18 9 24 9ZM24 14C21.8 14 20 16.8 20 20C20 23.2 21.8 26 24 26C26.2 26 28 23.2 28 20C28 16.8 26.2 14 24 14Z" />
                  <circle cx="24" cy="20" r="3" fill="#D49B35" />
                </svg>
              </div>

              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-hindi text-xl sm:text-2xl font-bold text-[#852233] tracking-normal">
                    शैलरीत
                  </span>
                  <span className="font-display text-sm sm:text-base font-bold text-[#23201D] tracking-wider uppercase">
                    Shailreet
                  </span>
                </div>
                <p className="text-[9px] sm:text-[10px] text-[#766D64] tracking-widest uppercase font-medium">
                  Handcrafted Himalayan Art
                </p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-3 py-1.5 text-xs xl:text-sm font-medium transition-all rounded-md flex items-center gap-1.5 ${
                      isActive
                        ? 'text-[#2C4A3E] font-semibold bg-[#EAF1ED]'
                        : 'text-[#3A3530] hover:text-[#2C4A3E] hover:bg-[#F4EFE7]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-[9px] px-1.5 py-0.2 bg-[#FAEEF1] text-[#852233] font-semibold rounded-full border border-[#E7BDC7]">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons: Search, Wishlist, Cart, Mobile Menu */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 p-2 sm:px-3 sm:py-1.5 text-[#3A3530] hover:text-[#2C4A3E] hover:bg-[#F4EFE7] rounded-lg transition-colors border border-transparent hover:border-[#ECE3D6]"
                title="Search Crafts (Ctrl + K)"
              >
                <Search className="w-4 h-4 text-[#766D64]" />
                <span className="hidden md:inline text-xs text-[#766D64]">Search crafts...</span>
                <kbd className="hidden xl:inline text-[10px] bg-[#ECE3D6] text-[#766D64] px-1.5 py-0.5 rounded">⌘K</kbd>
              </button>

              {/* Wishlist Icon */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2 text-[#3A3530] hover:text-[#852233] hover:bg-[#FAEEF1] rounded-lg transition-colors"
                title="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#852233] text-[#FAF7F2] text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 bg-[#2C4A3E] hover:bg-[#1E352C] text-[#FAF7F2] rounded-lg transition-all shadow-craft-sm"
                title="Shopping Cart"
              >
                <ShoppingBag className="w-4 h-4 text-[#FAF7F2]" />
                <span className="text-xs font-semibold hidden sm:inline">Cart</span>
                <span className="w-4 h-4 bg-[#D49B35] text-[#23201D] text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#3A3530] hover:text-[#2C4A3E] hover:bg-[#F4EFE7] rounded-lg transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#ECE3D6] bg-[#FAF7F2] px-4 pt-3 pb-6 shadow-craft-lg animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-1 mb-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center justify-between px-3.5 py-2.5 text-sm font-medium rounded-lg ${
                      isActive
                        ? 'text-[#2C4A3E] bg-[#EAF1ED] font-semibold'
                        : 'text-[#3A3530] hover:bg-[#F4EFE7]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-[10px] px-2 py-0.5 bg-[#FAEEF1] text-[#852233] font-semibold rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#ECE3D6] flex flex-col gap-2">
              <Link
                to="/custom-orders"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#D49B35] text-[#23201D] text-xs font-bold rounded-lg shadow-craft-sm hover:bg-[#B57E22] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" /> Request Bespoke Custom Craft
              </Link>
              <div className="flex items-center justify-between text-xs text-[#766D64] pt-2 px-1">
                <span>Kangra Valley, Himachal Pradesh</span>
                <span className="text-[#2C4A3E] font-medium">Pan-India Delivery</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
