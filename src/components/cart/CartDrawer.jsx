import React, { useState } from 'react';
import { useCraft } from '../../context/CraftContext';
import { Link, useNavigate } from 'react-router-dom';
import {
  X,
  ShoppingBag,
  Trash2,
  Gift,
  ArrowRight,
  Sparkles,
  Tag,
  Truck
} from 'lucide-react';

export const CartDrawer = () => {
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
    updateQuantity,
    isCartOpen,
    setIsCartOpen
  } = useCraft();

  const [couponCode, setCouponCode] = useState('');
  const [couponMsg, setCouponMsg] = useState(null);
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponCode.trim()) return;
    const res = applyCoupon(couponCode);
    setCouponMsg(res);
  };

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const freeShippingProgress = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] border-l border-[#DDD1C0] shadow-2xl flex flex-col">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-[#ECE3D6] flex items-center justify-between bg-[#FFFFFF]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#EAF1ED] flex items-center justify-center text-[#2C4A3E]">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-serif font-bold text-[#23201D]">Craft Basket</h3>
                <p className="text-xs text-[#766D64]">{cartCount} handcrafted {cartCount === 1 ? 'item' : 'items'}</p>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-[#766D64] hover:text-[#23201D] rounded-md hover:bg-[#F4EFE7] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-5 py-3 bg-[#F4EFE7] border-b border-[#ECE3D6] text-xs">
            <div className="flex items-center justify-between font-medium text-[#23201D] mb-1.5">
              <div className="flex items-center gap-1.5 text-[#2C4A3E]">
                <Truck className="w-3.5 h-3.5" />
                <span>
                  {amountNeededForFreeShipping === 0
                    ? '🎉 You unlocked Free Pan-India Shipping!'
                    : `Add ₹${amountNeededForFreeShipping.toLocaleString('en-IN')} more for Free Shipping`}
                </span>
              </div>
              <span className="font-bold text-[#2C4A3E]">{freeShippingProgress}%</span>
            </div>
            <div className="w-full bg-[#DDD1C0] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#2C4A3E] h-full transition-all duration-300"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="py-20 text-center">
                <div className="w-16 h-16 rounded-full bg-[#F4EFE7] flex items-center justify-center mx-auto mb-4 text-[#766D64]">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h4 className="font-serif text-lg text-[#23201D]">Your Craft Basket is Empty</h4>
                <p className="text-xs text-[#766D64] mt-1 max-w-xs mx-auto">
                  Add some love and tradition to your cart from our authentic collection of Himalayan crafts.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/shop');
                  }}
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-[#2C4A3E] text-[#FAF7F2] text-xs font-semibold rounded-lg hover:bg-[#1E352C] transition-colors"
                >
                  Explore Collection <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.cartItemId}
                  className="flex gap-3.5 p-3 bg-[#FFFFFF] border border-[#ECE3D6] rounded-xl relative shadow-craft-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg border border-[#E4DCD2] shrink-0"
                  />
                  
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          to={`/product/${item.slug}`}
                          onClick={() => setIsCartOpen(false)}
                          className="text-xs sm:text-sm font-serif font-medium text-[#23201D] hover:text-[#2C4A3E] line-clamp-1"
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-[#9A9085] hover:text-[#852233] p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {item.customization && (
                        <div className="text-[11px] text-[#852233] bg-[#FAEEF1] px-2 py-0.5 rounded mt-1 inline-flex items-center gap-1 font-medium">
                          <Sparkles className="w-2.5 h-2.5 shrink-0" />
                          <span className="truncate max-w-[180px]">"{item.customization}"</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#F4EFE7]">
                      <div className="flex items-center border border-[#DDD1C0] rounded-md bg-[#FAF7F2]">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-[#766D64] hover:text-[#23201D]"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold text-[#23201D]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-[#766D64] hover:text-[#23201D]"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-xs sm:text-sm font-bold text-[#23201D]">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer Controls */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 bg-[#FFFFFF] border-t border-[#ECE3D6] space-y-3.5">
              
              {/* Gift Wrap Checkbox */}
              <label className="flex items-center gap-2.5 p-2.5 bg-[#FAF7F2] border border-[#ECE3D6] rounded-lg cursor-pointer hover:border-[#D49B35] transition-colors">
                <input
                  type="checkbox"
                  checked={isGiftWrap}
                  onChange={(e) => setIsGiftWrap(e.target.checked)}
                  className="rounded text-[#2C4A3E] focus:ring-[#2C4A3E]"
                />
                <Gift className="w-4 h-4 text-[#D49B35] shrink-0" />
                <div className="text-xs flex-1">
                  <span className="font-semibold text-[#23201D]">Artisan Gift Wrap (+₹99)</span>
                  <p className="text-[10px] text-[#766D64]">Kraft paper box, jute twine, dried flowers & handwritten note</p>
                </div>
              </label>

              {/* Coupon Code Input */}
              <div>
                {appliedCoupon ? (
                  <div className="flex items-center justify-between p-2 bg-[#EAF1ED] border border-[#2C4A3E] rounded-lg text-xs">
                    <div className="flex items-center gap-1.5 text-[#2C4A3E]">
                      <Tag className="w-3.5 h-3.5" />
                      <span>Coupon <strong>{appliedCoupon.code}</strong> applied (-₹{discountAmount.toLocaleString('en-IN')})</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-[11px] text-[#852233] underline font-semibold hover:text-[#6A1623]"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Coupon Code (e.g. HANDMADE10)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 text-xs px-3 py-1.5 bg-[#FAF7F2] border border-[#DDD1C0] rounded-md text-[#23201D] uppercase focus:outline-hidden focus:border-[#2C4A3E]"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-[#2C4A3E] text-[#FAF7F2] text-xs font-semibold rounded-md hover:bg-[#1E352C] transition-colors shrink-0"
                    >
                      Apply
                    </button>
                  </form>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#766D64] pt-2 border-t border-[#ECE3D6]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#23201D]">₹{cartSubtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#2C4A3E]">
                    <span>Discount ({appliedCoupon?.code})</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                {isGiftWrap && (
                  <div className="flex justify-between">
                    <span>Gift Packaging</span>
                    <span className="font-semibold text-[#23201D]">₹{giftWrapFee}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Pan-India Delivery</span>
                  <span>
                    {shippingFee === 0 ? (
                      <span className="text-[#2C4A3E] font-semibold">FREE</span>
                    ) : (
                      `₹${shippingFee}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#23201D] pt-2 border-t border-[#ECE3D6]">
                  <span>Total Amount</span>
                  <span className="text-base text-[#852233]">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout Action */}
              <button
                onClick={handleProceedCheckout}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#2C4A3E] hover:bg-[#1E352C] text-[#FAF7F2] text-xs sm:text-sm font-bold rounded-xl transition-all shadow-craft-md"
              >
                <span>Proceed to Order (₹{cartTotal.toLocaleString('en-IN')})</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center">
                <Link
                  to="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="text-xs text-[#766D64] hover:text-[#2C4A3E] underline font-medium"
                >
                  View Full Cart Page Details
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
