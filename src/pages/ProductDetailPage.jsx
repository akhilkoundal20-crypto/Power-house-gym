import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCraft } from '../context/CraftContext';
import { PRODUCTS, REVIEWS } from '../data/craftData';
import ProductCard from '../components/shop/ProductCard';
import MotifDivider from '../components/common/MotifDivider';
import {
  Star,
  ShoppingBag,
  Heart,
  Truck,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Gift,
  ArrowRight,
  MapPin
} from 'lucide-react';

export const ProductDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart, isInWishlist, toggleWishlist, showToast } = useCraft();

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [customText, setCustomText] = useState('');
  const [pincode, setPincode] = useState('');
  const [pincodeResult, setPincodeResult] = useState(null);

  const isFavorited = isInWishlist(product.id);

  // Related products
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.isBestseller)
  ).slice(0, 3);

  const handleCheckPincode = (e) => {
    e.preventDefault();
    if (!pincode || pincode.length !== 6 || isNaN(pincode)) {
      showToast('Please enter a valid 6-digit Indian Pincode', 'error');
      return;
    }
    const deliveryDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
    setPincodeResult({
      valid: true,
      date: deliveryDate,
      freeShipping: product.price >= 999
    });
    showToast(`Delivery available to pincode ${pincode}! 🚚`);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, customText);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, customText, false);
    navigate('/checkout');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
      
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-[#766D64] flex-wrap">
        <Link to="/" className="hover:text-[#2C4A3E]">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-[#2C4A3E]">Shop</Link>
        <span>/</span>
        <Link to={`/shop?category=${product.category}`} className="hover:text-[#2C4A3E]">
          {product.categoryLabel}
        </Link>
        <span>/</span>
        <span className="text-[#23201D] font-medium truncate max-w-[200px] sm:max-w-none">
          {product.name}
        </span>
      </nav>

      {/* Main Product Stage: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left: Image Showcase (6 Cols) */}
        <div className="lg:col-span-6 space-y-4 lg:sticky lg:top-24">
          {/* Main Large Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#ECE3D6] shadow-craft-md">
            <img
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-all duration-300"
            />

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
              {product.isBestseller && (
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-[#852233] text-[#FAF7F2] rounded-md shadow-xs">
                  Artisan Bestseller
                </span>
              )}
              {product.discountPercent > 0 && (
                <span className="text-xs font-bold px-2.5 py-0.5 bg-[#D49B35] text-[#23201D] rounded-md shadow-xs">
                  {product.discountPercent}% OFF
                </span>
              )}
            </div>

            {/* Wishlist Button */}
            <button
              onClick={() => toggleWishlist(product.id)}
              className={`absolute top-3 right-3 p-2.5 rounded-full transition-all shadow-md ${
                isFavorited
                  ? 'bg-[#FAEEF1] text-[#852233]'
                  : 'bg-[#FAF7F2]/90 hover:bg-[#FFFFFF] text-[#766D64] hover:text-[#852233]'
              }`}
              title={isFavorited ? 'Remove from Wishlist' : 'Add to Wishlist'}
            >
              <Heart className={`w-5 h-5 ${isFavorited ? 'fill-[#852233]' : ''}`} />
            </button>
          </div>

          {/* Thumbnail Gallery */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    activeImageIndex === index
                      ? 'border-[#2C4A3E] ring-2 ring-[#2C4A3E]/30 scale-102'
                      : 'border-[#ECE3D6] opacity-75 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Authentic Craftsmanship Note */}
          <div className="p-4 bg-[#FAF7F2] border border-[#DDD1C0] rounded-xl text-xs text-[#766D64] space-y-1.5">
            <div className="flex items-center gap-2 text-[#2C4A3E] font-bold">
              <Sparkles className="w-4 h-4 text-[#D49B35]" />
              <span>Artisan Heritage Guarantee</span>
            </div>
            <p className="leading-relaxed">
              Every Shailreet creation is individually handmade. Subtle nuances in natural wood grain, carving depth, and paint strokes celebrate authentic Indian craft heritage.
            </p>
          </div>
        </div>

        {/* Right: Product Details & Order Options (6 Cols) */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Title & Category */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase font-bold tracking-wider text-[#2C4A3E] bg-[#EAF1ED] px-3 py-0.5 rounded">
                {product.categoryLabel}
              </span>
              <span className="text-xs text-[#9A9085]">• {product.leadTimeDays}</span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#23201D] leading-snug">
              {product.name}
            </h1>
            <p className="font-hindi text-lg text-[#852233] mt-1 font-semibold">
              {product.hindiName}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 text-xs">
            <div className="flex items-center text-[#D49B35]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D49B35]" />
              ))}
            </div>
            <span className="font-bold text-[#23201D]">{product.rating}</span>
            <span className="text-[#766D64]">({product.reviewsCount} customer reviews)</span>
          </div>

          {/* Pricing */}
          <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#ECE3D6] flex items-baseline gap-3">
            <span className="font-serif text-3xl font-bold text-[#23201D]">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-base text-[#9A9085] line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
            <span className="text-xs font-bold text-[#852233] bg-[#FAEEF1] px-2.5 py-1 rounded">
              Save {product.discountPercent}% (₹{(product.originalPrice - product.price).toLocaleString('en-IN')} off)
            </span>
            <span className="text-[11px] text-[#766D64] ml-auto hidden sm:inline">
              Inclusive of all taxes
            </span>
          </div>

          {/* Short Summary */}
          <p className="text-xs sm:text-sm text-[#59534C] leading-relaxed">
            {product.fullDesc}
          </p>

          {/* Customization Input Box */}
          {product.isCustomizable && (
            <div className="p-4 bg-[#FFFFFF] border-2 border-[#D49B35] rounded-xl shadow-craft-sm space-y-2">
              <label className="flex items-center justify-between text-xs font-bold text-[#23201D]">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#D49B35]" />
                  <span>{product.customFieldLabel || 'Personalize Your Craft'}</span>
                </span>
                <span className="text-[11px] text-[#852233] font-normal">Complimentary Inscription</span>
              </label>
              <input
                type="text"
                placeholder={product.customFieldPlaceholder || 'Enter your custom name / date / text'}
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full text-xs sm:text-sm p-3 bg-[#FAF7F2] border border-[#DDD1C0] rounded-lg text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
              />
              <p className="text-[11px] text-[#766D64]">
                Our artist will hand-paint/inscribe your text in traditional calligraphy on the craft.
              </p>
            </div>
          )}

          {/* Quantity & Add to Cart Controls */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              {/* Quantity Selector */}
              <div className="flex items-center border border-[#DDD1C0] rounded-xl bg-[#FFFFFF] shadow-xs">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-[#766D64] hover:text-[#23201D] font-bold text-sm"
                >
                  -
                </button>
                <span className="px-3 text-sm font-bold text-[#23201D]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-[#766D64] hover:text-[#23201D] font-bold text-sm"
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 bg-[#FAF7F2] hover:bg-[#F4EFE7] border-2 border-[#2C4A3E] text-[#2C4A3E] font-bold text-xs sm:text-sm rounded-xl transition-all shadow-craft-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Craft Basket</span>
              </button>
            </div>

            {/* Buy Now Button */}
            <button
              onClick={handleBuyNow}
              className="w-full py-3.5 bg-[#2C4A3E] hover:bg-[#1E352C] text-[#FAF7F2] font-bold text-xs sm:text-sm rounded-xl transition-all shadow-craft-md flex items-center justify-center gap-2"
            >
              <span>Instant Buy Now • ₹{(product.price * quantity).toLocaleString('en-IN')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Delivery Pincode Checker */}
          <div className="p-4 bg-[#FFFFFF] border border-[#ECE3D6] rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#23201D]">
              <MapPin className="w-4 h-4 text-[#D49B35]" />
              <span>Check Delivery Timeline in Your City</span>
            </div>
            <form onSubmit={handleCheckPincode} className="flex gap-2">
              <input
                type="text"
                maxLength={6}
                placeholder="Enter 6-digit Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                className="flex-1 text-xs px-3 py-2 bg-[#FAF7F2] border border-[#DDD1C0] rounded-lg text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#2C4A3E] text-[#FAF7F2] text-xs font-semibold rounded-lg hover:bg-[#1E352C] transition-colors shrink-0"
              >
                Check
              </button>
            </form>

            {pincodeResult && (
              <div className="text-xs p-2.5 rounded-lg bg-[#EAF1ED] border border-[#C8D9D0] text-[#2C4A3E] space-y-0.5">
                <p className="font-semibold flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Estimated Delivery by <strong>{pincodeResult.date}</strong></span>
                </p>
                <p className="text-[11px] text-[#766D64]">
                  {pincodeResult.freeShipping ? 'Free insured pan-India courier' : 'Standard courier: ₹99'}
                </p>
              </div>
            )}
          </div>

          {/* Material & Craft Specifications Accordion */}
          <div className="border-t border-[#ECE3D6] pt-6 space-y-4 text-xs">
            <div>
              <h4 className="font-bold text-[#23201D] uppercase tracking-wider mb-2">
                Materials & Specifications
              </h4>
              <ul className="space-y-1.5 text-[#6E655C]">
                {product.materials?.map((mat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D49B35] mt-1 shrink-0" />
                    <span>{mat}</span>
                  </li>
                )) || (
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D49B35] mt-1 shrink-0" />
                    <span>Handcrafted Himalayan Wood & Natural Pigments</span>
                  </li>
                )}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3 bg-[#FAF7F2] border border-[#ECE3D6] rounded-lg">
                <span className="text-[11px] text-[#766D64] block">Dimensions</span>
                <strong className="text-[#23201D]">{product.dimensions || 'Handmade standard proportions'}</strong>
              </div>
              <div className="p-3 bg-[#FAF7F2] border border-[#ECE3D6] rounded-lg">
                <span className="text-[11px] text-[#766D64] block">Weight</span>
                <strong className="text-[#23201D]">{product.weight || 'Approx 600g'}</strong>
              </div>
            </div>

            <div className="p-3.5 bg-[#F4EFE7] border border-[#ECE3D6] rounded-xl text-[#3A3530]">
              <p className="font-semibold text-[#852233] mb-1">Artisan Origin</p>
              <p className="leading-relaxed text-[11px]">{product.artisanNote || 'Handcrafted by master artisans in Kangra Valley, Himachal Pradesh.'}</p>
            </div>
          </div>

        </div>
      </div>

      {/* Customer Reviews for this Product */}
      <section className="pt-12 border-t border-[#ECE3D6]">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#23201D]">
            Craft Enthusiast Reviews
          </h2>
          <MotifDivider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.slice(0, 2).map((rev) => (
            <div
              key={rev.id}
              className="p-5 rounded-xl bg-[#FFFFFF] border border-[#ECE3D6] shadow-craft-sm space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center text-[#D49B35]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D49B35]" />
                  ))}
                </div>
                <span className="text-xs text-[#9A9085]">{rev.date}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#3A3530] italic leading-relaxed">
                "{rev.comment}"
              </p>
              <div className="pt-2 border-t border-[#F4EFE7] flex items-center justify-between text-xs">
                <span className="font-bold text-[#23201D]">{rev.author}</span>
                <span className="text-[#2C4A3E] font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Verified Buyer
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Products */}
      <section className="pt-8 border-t border-[#ECE3D6]">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#23201D]">
            You May Also Love
          </h2>
          <Link to="/shop" className="text-xs font-semibold text-[#2C4A3E] hover:underline">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default ProductDetailPage;
