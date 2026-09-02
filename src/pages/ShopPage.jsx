import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../data/craftData';
import ProductCard from '../components/shop/ProductCard';
import MotifDivider from '../components/common/MotifDivider';
import {
  SlidersHorizontal,
  Search,
  RotateCcw,
  Sparkles,
  Check
} from 'lucide-react';

export const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState(6000);
  const [sortBy, setSortBy] = useState('featured');
  const [onlyCustomizable, setOnlyCustomizable] = useState(false);
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchTerm('');
    setMaxPrice(6000);
    setSortBy('featured');
    setOnlyCustomizable(false);
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category check
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'new-arrivals') {
          if (!p.isNew) return false;
        } else if (p.category !== selectedCategory) {
          return false;
        }
      }

      // Search term
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        const matchTitle = p.name.toLowerCase().includes(term);
        const matchHindi = p.hindiName.toLowerCase().includes(term);
        const matchDesc = p.shortDesc.toLowerCase().includes(term);
        const matchCat = p.categoryLabel.toLowerCase().includes(term);
        if (!matchTitle && !matchHindi && !matchDesc && !matchCat) return false;
      }

      // Max price
      if (p.price > maxPrice) return false;

      // Customizable only
      if (onlyCustomizable && !p.isCustomizable) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0; // featured default
    });
  }, [selectedCategory, searchTerm, maxPrice, sortBy, onlyCustomizable]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <span className="text-xs uppercase font-bold tracking-widest text-[#2C4A3E] bg-[#EAF1ED] px-3 py-1 rounded-full border border-[#C8D9D0]">
          Himalayan Artisan Catalog
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#23201D] mt-3">
          Handcrafted Traditional Crafts
        </h1>
        <MotifDivider />
        <p className="text-xs sm:text-sm text-[#766D64] mt-1 font-sans">
          Discover hand-carved Dehra frames, customized milestone boards, festive torans, and Pahari miniature art pieces.
        </p>
      </div>

      {/* Main Container: Sidebar + Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Filter Sidebar (Desktop) */}
        <div className="hidden lg:block lg:col-span-3 bg-[#FFFFFF] border border-[#ECE3D6] p-5 rounded-2xl shadow-craft-sm space-y-6 sticky top-24">
          <div className="flex items-center justify-between pb-3 border-b border-[#ECE3D6]">
            <h3 className="font-serif text-base font-bold text-[#23201D] flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#2C4A3E]" />
              <span>Filters</span>
            </h3>
            <button
              onClick={handleResetFilters}
              className="text-xs text-[#852233] hover:underline flex items-center gap-1 font-medium"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          </div>

          {/* Categories Filter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#766D64] mb-2.5">
              Categories
            </h4>
            <div className="space-y-1.5">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors text-left ${
                      isSelected
                        ? 'bg-[#2C4A3E] text-[#FAF7F2] font-semibold'
                        : 'text-[#3A3530] hover:bg-[#F4EFE7]'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${isSelected ? 'bg-[#FAF7F2]/20 text-[#FAF7F2]' : 'bg-[#F4EFE7] text-[#766D64]'}`}>
                      {cat.id === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => cat.id === 'new-arrivals' ? p.isNew : p.category === cat.id).length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Max Price Range Slider */}
          <div className="pt-2 border-t border-[#ECE3D6]">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#766D64]">
                Max Price
              </h4>
              <span className="text-xs font-bold text-[#2C4A3E]">
                Up to ₹{maxPrice.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="6000"
              step="200"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#2C4A3E] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#9A9085] mt-1">
              <span>₹1,000</span>
              <span>₹6,000</span>
            </div>
          </div>

          {/* Customizable Toggle */}
          <div className="pt-2 border-t border-[#ECE3D6]">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={onlyCustomizable}
                onChange={(e) => setOnlyCustomizable(e.target.checked)}
                className="rounded text-[#2C4A3E] focus:ring-[#2C4A3E]"
              />
              <span className="text-xs font-medium text-[#23201D] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D49B35]" />
                Personalized / Custom Crafts
              </span>
            </label>
          </div>

          {/* Artisan Quality Guarantee */}
          <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#DDD1C0] text-xs text-[#766D64] space-y-1">
            <p className="font-semibold text-[#23201D] flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-[#2C4A3E]" /> 100% Traditional Himalayan Art
            </p>
            <p className="text-[11px] leading-relaxed">
              Every item is individually handcrafted with natural wood, organic pigments, and wool.
            </p>
          </div>
        </div>

        {/* Right Content Area (9 Cols) */}
        <div className="lg:col-span-9 space-y-6">
          
          {/* Top Bar: Search, Mobile Filter Toggle, Sort By */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 bg-[#FFFFFF] border border-[#ECE3D6] rounded-xl shadow-craft-sm">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#9A9085] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter by craft name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-xs pl-9 pr-3 py-2 bg-[#FAF7F2] border border-[#DDD1C0] rounded-lg text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
              />
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setShowFiltersMobile(!showFiltersMobile)}
                className="lg:hidden flex items-center gap-1.5 px-3 py-2 bg-[#FAF7F2] border border-[#DDD1C0] text-xs font-semibold text-[#23201D] rounded-lg"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filters</span>
              </button>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#766D64] hidden md:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-xs px-3 py-2 bg-[#FAF7F2] border border-[#DDD1C0] rounded-lg text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E] font-medium"
                >
                  <option value="featured">Featured Artisanal</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Customer Rated</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Mobile Filter Drawer Dropdown */}
          {showFiltersMobile && (
            <div className="lg:hidden p-4 bg-[#FFFFFF] border border-[#ECE3D6] rounded-xl shadow-craft-sm space-y-4 animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-2 border-b border-[#ECE3D6]">
                <span className="text-xs font-bold text-[#23201D]">Categories</span>
                <button
                  onClick={handleResetFilters}
                  className="text-xs text-[#852233] underline"
                >
                  Reset All
                </button>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      handleCategoryChange(cat.id);
                      setShowFiltersMobile(false);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                      selectedCategory === cat.id
                        ? 'bg-[#2C4A3E] text-[#FAF7F2]'
                        : 'bg-[#F4EFE7] text-[#23201D]'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results Count & Current Active Filters Summary */}
          <div className="flex items-center justify-between text-xs text-[#766D64] px-1">
            <span>
              Showing <strong className="text-[#23201D] font-bold">{filteredProducts.length}</strong> handcrafted {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </span>
            {(selectedCategory !== 'all' || searchTerm || onlyCustomizable || maxPrice < 6000) && (
              <button
                onClick={handleResetFilters}
                className="text-[#852233] hover:underline font-semibold"
              >
                Clear all active filters
              </button>
            )}
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center bg-[#FFFFFF] border border-[#ECE3D6] rounded-2xl p-8">
              <p className="font-serif text-xl text-[#23201D]">No crafts matched your filter</p>
              <p className="text-xs text-[#766D64] mt-1 max-w-sm mx-auto">
                Try widening your price range, searching for another keyword, or resetting your category filters.
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-5 px-5 py-2.5 bg-[#2C4A3E] text-[#FAF7F2] text-xs font-bold rounded-lg hover:bg-[#1E352C] transition-colors"
              >
                Show All Crafts
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ShopPage;
