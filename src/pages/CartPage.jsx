import React, { useState } from 'react';
import { useCraft } from '../context/CraftContext';
import { Link, useNavigate } from 'react-router-dom';
import MotifDivider from '../components/common/MotifDivider';
import {
  ShoppingBag,
  Trash2,
  Gift,
  ArrowRight,
  Sparkles,
  Tag,
  Truck,
  ShieldCheck,
  Check
} from 'lucide-react';

export const CartPage = () => {
  const {
    cart,
    cartCount,
    cartSubtotal,
    discountAmount,
    giftWrapFee,
    isGiftWrap,
    setIsGiftWrap,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    shippingFee,
    freeShippingThreshold,
    cartTotal,
    removeFromCart,
    updateQuantity
  } = useCraft();

  const [couponCode, setCouponCode] = useState('');
  const navigate = useNavigate();

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponCode.trim()) return;
    applyCoupon(couponCode);
  };

  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const freeShippingProgress = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-[#FAEEF1] flex items-center justify-center mx-auto text-[#852233]">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h1 className="font-serif text-3xl font-normal text-[#23201D]">
          Your Craft Basket is Empty
        </h1>
        <p className="text-xs sm:text-sm text-[#766D64] max-w-md mx-auto">
          Explore our authentic handcrafted Dehra temple frames, personalized milestone boards, and festive door torans.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2C4A3E] text-[#FAF7F2] font-semibold text-xs sm:text-sm rounded-xl hover:bg-[#1E352C] transition-colors shadow-craft-sm"
        >
          Explore Crafts Collection <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Title */}
      <div>
        <h1 className="font-serif text-2xl sm:text-4xl font-normal text-[#23201D]">
          Shopping Basket ({cartCount} {cartCount === 1 ? 'item' : 'items'})
        </h1>
        <p className="text-xs text-[#766D64] mt-1">
          Review your handcrafted treasures and proceed to secure checkout.
        </p>
      </div>

      {/* Free Shipping Bar */}
      <div className="p-4 bg-[#FFFFFF] border border-[#ECE3D6] rounded-xl shadow-craft-sm">
        <div className="flex items-center justify-between text-xs font-semibold text-[#2C4A3E] mb-2">
          <span className="flex items-center gap-1.5">
            <Truck className="w-4 h-4" />
            {amountNeededForFreeShipping === 0
              ? '🎉 Free Pan-India Insured Shipping Unlocked!'
              : `Add ₹${amountNeededForFreeShipping.toLocaleString('en-IN')} more to unlock FREE Pan-India Shipping`}
          </span>
          <span>{freeShippingProgress}%</span>
        </div>
        <div className="w-full bg-[#EAF1ED] h-2 rounded-full overflow-hidden">
          <div
            className="bg-[#2C4A3E] h-full transition-all duration-300"
            style={{ width: `${freeShippingProgress}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Items Table (8 Cols) */}
        <div className="lg:col-span-8 bg-[#FFFFFF] border border-[#ECE3D6] rounded-2xl shadow-craft-sm overflow-hidden divide-y divide-[#ECE3D6]">
          {cart.map((item) => (
            <div key={item.cartItemId} className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl border border-[#E4DCD2] shrink-0"
                />
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#2C4A3E] bg-[#EAF1ED] px-2 py-0.5 rounded">
                    {item.categoryLabel}
                  </span>
                  <Link
                    to={`/product/${item.slug}`}
                    className="block font-serif text-sm sm:text-base font-semibold text-[#23201D] hover:text-[#2C4A3E]"
                  >
                    {item.name}
                  </Link>
                  {item.customization && (
                    <p className="text-xs text-[#852233] bg-[#FAEEF1] px-2 py-0.5 rounded inline-flex items-center gap-1 font-medium">
                      <Sparkles className="w-3 h-3" /> Inscription: "{item.customization}"
                    </p>
                  )}
                  <p className="text-xs font-bold text-[#23201D] sm:hidden">
                    ₹{item.price.toLocaleString('en-IN')} each
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-[#F4EFE7]">
                {/* Quantity Controls */}
                <div className="flex items-center border border-[#DDD1C0] rounded-lg bg-[#FAF7F2]">
                  <button
                    onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                    className="px-3 py-1.5 text-xs text-[#766D64] hover:text-[#23201D] font-bold"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-bold text-[#23201D]">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                    className="px-3 py-1.5 text-xs text-[#766D64] hover:text-[#23201D] font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Subtotal for Item */}
                <div className="text-right">
                  <span className="font-serif text-base font-bold text-[#23201D] block">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.cartItemId)}
                    className="text-xs text-[#852233] hover:underline flex items-center gap-1 mt-1 ml-auto"
                  >
                    <Trash2 className="w-3 h-3" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Summary Box (4 Cols) */}
        <div className="lg:col-span-4 bg-[#FFFFFF] border border-[#ECE3D6] p-6 rounded-2xl shadow-craft-sm space-y-5 lg:sticky lg:top-24">
          <h3 className="font-serif text-lg font-bold text-[#23201D] pb-3 border-b border-[#ECE3D6]">
            Order Summary
          </h3>

          {/* Gift Wrap Checkbox */}
          <label className="flex items-center gap-2.5 p-3 bg-[#FAF7F2] border border-[#ECE3D6] rounded-xl cursor-pointer hover:border-[#D49B35] transition-colors">
            <input
              type="checkbox"
              checked={isGiftWrap}
              onChange={(e) => setIsGiftWrap(e.target.checked)}
              className="rounded text-[#2C4A3E] focus:ring-[#2C4A3E]"
            />
            <Gift className="w-4 h-4 text-[#D49B35] shrink-0" />
            <div className="text-xs flex-1">
              <span className="font-semibold text-[#23201D]">Add Artisan Gift Packaging (+₹99)</span>
              <p className="text-[10px] text-[#766D64]">Kraft box, twine, dried botanicals & handwritten card</p>
            </div>
          </label>

          {/* Promo Coupon */}
          <div>
            {appliedCoupon ? (
              <div className="flex items-center justify-between p-2.5 bg-[#EAF1ED] border border-[#2C4A3E] rounded-xl text-xs">
                <div className="flex items-center gap-1.5 text-[#2C4A3E]">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Coupon <strong>{appliedCoupon.code}</strong> applied (-₹{discountAmount.toLocaleString('en-IN')})</span>
                </div>
                <button
                  onClick={removeCoupon}
                  className="text-xs text-[#852233] underline font-semibold"
                >
                  Remove
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon (e.g. HANDMADE10)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 text-xs px-3 py-2 bg-[#FAF7F2] border border-[#DDD1C0] rounded-lg text-[#23201D] uppercase focus:outline-hidden focus:border-[#2C4A3E]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#2C4A3E] text-[#FAF7F2] text-xs font-semibold rounded-lg hover:bg-[#1E352C] transition-colors"
                >
                  Apply
                </button>
              </form>
            )}
          </div>

          {/* Breakdown */}
          <div className="space-y-2 text-xs text-[#766D64] pt-2 border-t border-[#ECE3D6]">
            <div className="flex justify-between">
              <span>Items Subtotal</span>
              <span className="font-semibold text-[#23201D]">₹{cartSubtotal.toLocaleString('en-IN')}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between text-[#2C4A3E]">
                <span>Artisan Promo ({appliedCoupon?.code})</span>
                <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
              </div>
            )}
            {isGiftWrap && (
              <div className="flex justify-between">
                <span>Artisan Gift Wrap</span>
                <span className="font-semibold text-[#23201D]">₹{giftWrapFee}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Pan-India Shipping</span>
              <span>
                {shippingFee === 0 ? (
                  <span className="text-[#2C4A3E] font-semibold">FREE</span>
                ) : (
                  `₹${shippingFee}`
                )}
              </span>
            </div>
            <div className="flex justify-between text-base font-serif font-bold text-[#23201D] pt-3 border-t border-[#ECE3D6]">
              <span>Total Payable</span>
              <span className="text-xl text-[#852233]">₹{cartTotal.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <button
            onClick={() => navigate('/checkout')}
            className="w-full py-4 bg-[#2C4A3E] hover:bg-[#1E352C] text-[#FAF7F2] font-bold text-xs sm:text-sm rounded-xl transition-all shadow-craft-md flex items-center justify-center gap-2"
          >
            <span>Proceed to Order (₹{cartTotal.toLocaleString('en-IN')})</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-[#766D64]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2C4A3E]" />
            <span>100% Secure Checkout & Money-back Guarantee</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartPage;
