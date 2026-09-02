import React, { useState } from 'react';
import { useCraft } from '../../context/CraftContext';
import { X, Star, ShoppingBag, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const QuickViewModal = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCraft();
  const [selectedImage, setSelectedImage] = useState(0);
  const [customText, setCustomText] = useState('');
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  if (!quickViewProduct) return null;

  const product = quickViewProduct;

  const handleAddToCart = () => {
    addToCart(product, quantity, customText);
    setQuickViewProduct(null);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, customText, false);
    setQuickViewProduct(null);
    navigate('/checkout');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#FAF7F2] border border-[#DDD1C0] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 my-8">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-3.5 right-3.5 z-10 p-1.5 bg-[#FAF7F2]/90 hover:bg-[#FFFFFF] text-[#766D64] hover:text-[#23201D] rounded-full border border-[#DDD1C0] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Images Gallery */}
          <div className="p-6 bg-[#F4EFE7] flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#ECE3D6]">
            <div className="aspect-square rounded-xl overflow-hidden bg-[#FFFFFF] border border-[#E4DCD2] shadow-craft-sm">
              <img
                src={product.images[selectedImage] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {product.images.length > 1 && (
              <div className="flex gap-2 mt-4 justify-center">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? 'border-[#2C4A3E] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details & Actions */}
          <div className="p-6 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#2C4A3E] bg-[#EAF1ED] px-2.5 py-0.5 rounded">
                  {product.categoryLabel}
                </span>
                <span className="text-xs text-[#9A9085]">• {product.leadTimeDays}</span>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#23201D] leading-snug">
                {product.name}
              </h3>
              <p className="font-hindi text-sm text-[#852233] mt-0.5">
                {product.hindiName}
              </p>

              {/* Price & Rating */}
              <div className="flex items-baseline gap-3 my-3">
                <span className="text-2xl font-bold text-[#23201D]">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#9A9085] line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-xs font-semibold text-[#852233] bg-[#FAEEF1] px-2 py-0.5 rounded">
                  Save {product.discountPercent}%
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#766D64] mb-3 pb-3 border-b border-[#ECE3D6]">
                <Star className="w-4 h-4 fill-[#D49B35] text-[#D49B35]" />
                <strong className="text-[#23201D]">{product.rating}</strong>
                <span>({product.reviewsCount} customer reviews)</span>
              </div>

              <p className="text-xs text-[#766D64] leading-relaxed mb-4">
                {product.shortDesc}
              </p>

              {/* Customization Input */}
              {product.isCustomizable && (
                <div className="mb-4 p-3 bg-[#FFFFFF] border border-[#D49B35] rounded-lg">
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-[#23201D] mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#D49B35]" />
                    <span>{product.customFieldLabel || 'Personalized Text / Name'}</span>
                  </label>
                  <input
                    type="text"
                    placeholder={product.customFieldPlaceholder || 'Enter names, dates or text'}
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    className="w-full text-xs p-2 bg-[#FAF7F2] border border-[#DDD1C0] rounded text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
                  />
                  <p className="text-[10px] text-[#766D64] mt-1">
                    Hand-inscribed by our artist with non-toxic pigments.
                  </p>
                </div>
              )}

              {/* Quick Specs */}
              <div className="space-y-1.5 text-xs text-[#766D64] mb-5">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2C4A3E]" />
                  <span><strong>Dimensions:</strong> {product.dimensions || 'Handmade standard proportions'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2C4A3E]" />
                  <span><strong>Materials:</strong> {product.materials?.[0] || 'Handcrafted Himalayan Cedar & Brass'}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#ECE3D6] space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-[#DDD1C0] rounded-lg bg-[#FFFFFF]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 text-[#766D64] hover:text-[#23201D] text-sm"
                  >
                    -
                  </button>
                  <span className="px-2 text-xs font-bold text-[#23201D]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 text-[#766D64] hover:text-[#23201D] text-sm"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#FAF7F2] border-2 border-[#2C4A3E] text-[#2C4A3E] hover:bg-[#EAF1ED] text-xs font-bold rounded-lg transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Cart
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleBuyNow}
                  className="flex-1 py-2.5 bg-[#2C4A3E] hover:bg-[#1E352C] text-[#FAF7F2] text-xs font-bold rounded-lg transition-colors shadow-craft-sm"
                >
                  Buy Now Instantly
                </button>
                <Link
                  to={`/product/${product.slug}`}
                  onClick={() => setQuickViewProduct(null)}
                  className="px-3 py-2.5 text-xs text-[#2C4A3E] hover:underline flex items-center gap-1 font-medium"
                >
                  Full Page <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
