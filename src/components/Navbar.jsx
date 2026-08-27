import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md py-3 border-b border-gymBorder shadow-lg'
            : 'bg-gradient-to-b from-black/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <a href="#home" className="flex items-center gap-2 group">
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

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-sm uppercase tracking-wider text-gray-300 hover:text-gymAccent transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="bg-gymAccent hover:bg-gymAccentHover text-white px-6 py-2.5 rounded-full font-sans uppercase tracking-wider text-sm font-semibold transition-all duration-300 shadow-md shadow-gymAccent/20 hover:shadow-gymAccent/40 hover:-translate-y-0.5 inline-block"
              >
                Join Now
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-80 bg-gymDark border-l border-gymBorder z-45 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between p-6 pt-24 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-display text-xl uppercase tracking-wider text-gray-300 hover:text-gymAccent transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full bg-gymAccent hover:bg-gymAccentHover text-white text-center py-3 rounded-xl font-sans uppercase tracking-wider font-semibold transition-all duration-300"
          >
            Join Now
          </a>
          <p className="text-center text-xs text-gymTextMuted">
            Open 24 Hours · Yol, Himachal Pradesh
          </p>
        </div>
      </div>

      {/* Backdrop for Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
        />
      )}
    </>
  );
};

export default Navbar;
