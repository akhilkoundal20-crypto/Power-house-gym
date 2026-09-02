import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCraft } from '../../context/CraftContext';
import { Heart, Star, ShoppingBag, Eye, Sparkles } from 'lucide-react';

export const ProductCard = ({ product }) => {
  const { addToCart, isInWishlist, toggleWishlist, setQuickViewProduct } = useCraft();
  const navigate = useNavigate();

  const isFavorited = isInWishlist(product.id);

  const handleBuyNow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, '', false);
    navigate('/checkout');
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div className="craft-card rounded-xl overflow-hidden flex flex-col group relative bg-[#FFFFFF]">
      {/* Top Image Box */}
      <div className="relative aspect-square overflow-hidden bg-[#F4EFE7]">
        <Link to={`/product/${product.slug}`} className="block w-full h-full">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </Link>

        {/* Floating Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 items-start pointer-events-none">
          {product.isBestseller && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-[#852233] text-[#FAF7F2] rounded shadow-xs">
              Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-[#2C4A3E] text-[#FAF7F2] rounded shadow-xs">
              New Craft
            </span>
          )}
          {product.discountPercent > 0 && (
            <span className="text-[10px] font-bold px-2 py-0.5 bg-[#D49B35] text-[#23201D] rounded shadow-xs">
              {product.discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          onClick={handleToggleWishlist}
          className={`absolute top-2.5 right-2.5 p-2 rounded-full transition-all duration-200 shadow-sm ${
            isFavorited
              ? 'bg-[#FAEEF1] text-[#852233]'
              : 'bg-[#FAF7F2]/90 hover:bg-[#FFFFFF] text-[#766D64] hover:text-[#852233]'
          }`}
          title={isFavorited ? 'Remove from Wishlist' : 'Add to Wishlist'}
          aria-label="Wishlist button"
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-[#852233]' : ''}`} />
        </button>

        {/* Quick View Button (Desktop Hover Only) */}
        <button
          onClick={handleQuickView}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden sm:flex opacity-0 group-hover:opacity-100 transition-opacity duration-200 items-center gap-1.5 px-3 py-1.5 bg-[#FAF7F2]/95 hover:bg-[#FFFFFF] text-[#23201D] text-xs font-semibold rounded-full shadow-craft-md border border-[#DDD1C0]"
          title="Quick preview details"
        >
          <Eye className="w-3.5 h-3.5 text-[#2C4A3E]" />
          <span>Quick View</span>
        </button>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 flex flex-col flex-1">
        {/* Category & Customization Indicator */}
        <div className="flex items-center justify-between gap-1.5 mb-1">
          <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-[#2C4A3E] bg-[#EAF1ED] px-2 py-0.5 rounded truncate">
            {product.categoryLabel}
          </span>
          {product.isCustomizable && (
            <span className="text-[9px] sm:text-[10px] text-[#852233] font-medium flex items-center gap-0.5 shrink-0">
              <Sparkles className="w-2.5 h-2.5" /> Custom
            </span>
          )}
        </div>

        {/* Title */}
        <Link to={`/product/${product.slug}`} className="group-hover:text-[#2C4A3E] transition-colors block">
          <h3 className="font-serif text-xs sm:text-base font-semibold text-[#23201D] leading-snug line-clamp-1">
            {product.name}
          </h3>
          <p className="font-hindi text-[10px] sm:text-xs text-[#852233] opacity-85 mt-0.5 truncate">
            {product.hindiName}
          </p>
        </Link>

        {/* Short Description (Hidden on compact mobile grid for clean look) */}
        <p className="hidden sm:block text-xs text-[#766D64] line-clamp-2 mt-1.5 leading-relaxed">
          {product.shortDesc}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mt-2">
          <div className="flex items-center text-[#D49B35]">
            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#D49B35]" />
          </div>
          <span className="text-[11px] sm:text-xs font-bold text-[#23201D]">{product.rating}</span>
          <span className="text-[10px] sm:text-[11px] text-[#9A9085]">({product.reviewsCount})</span>
        </div>

        {/* Price & Action Buttons */}
        <div className="mt-auto pt-2.5 border-t border-[#ECE3D6]">
          <div className="flex items-baseline gap-1.5 mb-2.5">
            <span className="text-sm sm:text-lg font-bold text-[#23201D]">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-[10px] sm:text-xs text-[#9A9085] line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center gap-1 py-1.5 sm:py-2 px-1.5 sm:px-2.5 bg-[#FAF7F2] hover:bg-[#F4EFE7] text-[#2C4A3E] border border-[#2C4A3E] text-[11px] sm:text-xs font-semibold rounded-lg transition-colors"
            >
              <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Cart</span>
            </button>
            <button
              onClick={handleBuyNow}
              className="flex items-center justify-center py-1.5 sm:py-2 px-1.5 sm:px-2.5 bg-[#2C4A3E] hover:bg-[#1E352C] text-[#FAF7F2] text-[11px] sm:text-xs font-semibold rounded-lg transition-colors shadow-craft-sm"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
