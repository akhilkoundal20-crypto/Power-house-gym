import React, { useState, useEffect } from 'react';
import { useCraft } from '../../context/CraftContext';
import { PRODUCTS } from '../../data/craftData';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SearchModal = () => {
  const { isSearchOpen, setIsSearchOpen, addToCart } = useCraft();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredProducts = searchTerm.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.hindiName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : PRODUCTS.slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#FAF7F2] border border-[#DDD1C0] rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#ECE3D6] flex items-center gap-3 bg-[#FFFFFF]">
          <Search className="w-5 h-5 text-[#D49B35] shrink-0" />
          <input
            type="text"
            placeholder="Search handcrafted Dehra, birthday boards, wall hangings, torans..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
            className="w-full bg-transparent border-none outline-none text-[#23201D] text-base placeholder:text-[#9A9085]"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 text-[#766D64] hover:text-[#23201D] rounded-md hover:bg-[#F4EFE7] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestions / Filter Results */}
        <div className="p-4 max-h-[60vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-3 text-xs text-[#766D64] font-medium tracking-wide uppercase">
            <span>{searchTerm ? `Results (${filteredProducts.length})` : 'Popular Handcrafted Collections'}</span>
            <span className="text-[11px] text-[#9A9085]">Press ESC to close</span>
          </div>

          <div className="space-y-2.5">
            {filteredProducts.length === 0 ? (
              <div className="py-8 text-center text-[#766D64]">
                <p className="text-base font-serif">No handcrafted items found for "{searchTerm}"</p>
                <p className="text-xs mt-1 text-[#9A9085]">Try searching "Dehra", "Toran", "Milestone", or "Painting"</p>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-2.5 rounded-lg border border-[#ECE3D6] hover:border-[#D49B35] bg-[#FFFFFF] hover:bg-[#FDFBF7] transition-all group"
                >
                  <Link
                    to={`/product/${product.slug}`}
                    onClick={() => setIsSearchOpen(false)}
                    className="flex items-center gap-3.5 flex-1 min-w-0"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-14 h-14 object-cover rounded-md border border-[#E4DCD2] shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 bg-[#EAF1ED] text-[#2C4A3E] rounded">
                          {product.categoryLabel}
                        </span>
                        {product.isCustomizable && (
                          <span className="text-[10px] text-[#852233] font-medium flex items-center gap-0.5">
                            <Sparkles className="w-2.5 h-2.5" /> Customizable
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-medium text-[#23201D] truncate group-hover:text-[#2C4A3E] transition-colors mt-0.5">
                        {product.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#852233]">
                        ₹{product.price.toLocaleString('en-IN')}{' '}
                        <span className="text-[11px] text-[#9A9085] line-through font-normal">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                      </p>
                    </div>
                  </Link>

                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    <button
                      onClick={() => {
                        addToCart(product, 1);
                        setIsSearchOpen(false);
                      }}
                      className="text-xs font-medium px-3 py-1.5 bg-[#2C4A3E] hover:bg-[#1E352C] text-[#FAF7F2] rounded transition-colors"
                    >
                      + Cart
                    </button>
                    <Link
                      to={`/product/${product.slug}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="p-1.5 text-[#766D64] hover:text-[#23201D]"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer Quick Tags */}
        <div className="p-3 bg-[#F4EFE7] border-t border-[#ECE3D6] flex items-center justify-between text-xs text-[#766D64]">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-medium text-[#23201D]">Tags:</span>
            {['Dehra Art', 'Birthday Board', 'Wall Hanging', 'Kangra Painting', 'Toran'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchTerm(tag)}
                className="px-2 py-0.5 bg-[#FFFFFF] border border-[#DDD1C0] rounded hover:border-[#D49B35] transition-colors text-[11px]"
              >
                {tag}
              </button>
            ))}
          </div>
          <Link
            to="/shop"
            onClick={() => setIsSearchOpen(false)}
            className="text-xs font-medium text-[#2C4A3E] hover:underline flex items-center gap-1 shrink-0"
          >
            View All Crafts →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
