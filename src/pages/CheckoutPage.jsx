import React, { useState } from 'react';
import { useCraft } from '../context/CraftContext';
import { useNavigate, Link } from 'react-router-dom';
import MotifDivider from '../components/common/MotifDivider';
import {
  ShieldCheck,
  Truck,
  CreditCard,
  QrCode,
  Banknote,
  Sparkles,
  Lock,
  ArrowRight,
  Gift,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const CheckoutPage = () => {
  const {
    cart,
    cartSubtotal,
    discountAmount,
    giftWrapFee,
    isGiftWrap,
    shippingFee,
    cartTotal,
    appliedCoupon,
    placeOrder,
    showToast
  } = useCraft();

  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    address: '',
    city: '',
    state: 'Himachal Pradesh',
    pincode: '',
    customizationNote: '',
    giftMessage: '',
    paymentMethod: 'upi'
  });

  const indianStates = [
    'Himachal Pradesh',
    'Punjab',
    'Chandigarh',
    'Delhi NCR',
    'Haryana',
    'Uttarakhand',
    'Rajasthan',
    'Uttar Pradesh',
    'Maharashtra',
    'Karnataka',
    'Tamil Nadu',
    'Gujarat',
    'West Bengal',
    'Madhya Pradesh',
    'Kerala',
    'Telangana',
    'Other Indian State'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const activeCart = cart.length > 0 ? cart : (() => {
    try {
      const saved = localStorage.getItem('shailreet_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  })();

  const computedSubtotal = activeCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const computedDiscount = appliedCoupon ? Math.round((computedSubtotal * appliedCoupon.discountPercent) / 100) : discountAmount;
  const computedShipping = computedSubtotal === 0 ? 0 : (computedSubtotal >= 999 ? 0 : 99);
  const computedTotal = Math.max(0, computedSubtotal - computedDiscount + (isGiftWrap ? 99 : 0) + computedShipping);

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (activeCart.length === 0) {
      showToast('Your cart is empty. Please add crafts first.', 'error');
      navigate('/shop');
      return;
    }

    if (
      !formData.fullName.trim() ||
      !formData.mobileNumber.trim() ||
      !formData.address.trim() ||
      !formData.city.trim() ||
      !formData.pincode.trim()
    ) {
      showToast('Please fill all mandatory shipping address fields', 'error');
      return;
    }

    const order = placeOrder(formData);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch {
      // ignore
    }

    navigate(`/order-success/${order.orderId}`);
  };

  if (activeCart.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-serif text-2xl text-[#23201D]">Your basket is empty</h2>
        <p className="text-xs text-[#766D64]">Please add some crafts before proceeding to checkout.</p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#2C4A3E] text-[#FAF7F2] text-xs font-semibold rounded-lg"
        >
          Browse Crafts Collection <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Title */}
      <div className="text-center max-w-xl mx-auto">
        <span className="text-xs uppercase font-bold tracking-widest text-[#2C4A3E] bg-[#EAF1ED] px-3 py-1 rounded-full">
          Secure Frontend Checkout
        </span>
        <h1 className="font-serif text-2xl sm:text-4xl font-normal text-[#23201D] mt-2">
          Delivery Details & Order Placement
        </h1>
        <p className="text-xs text-[#766D64] mt-1 font-sans">
          Your handcrafted treasures will be carefully packaged and dispatched from Kangra Valley.
        </p>
      </div>

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Form: Address, Customization, Payment (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Step 1: Customer & Delivery Address */}
          <div className="bg-[#FFFFFF] border border-[#ECE3D6] p-6 rounded-2xl shadow-craft-sm space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-[#ECE3D6]">
              <span className="w-6 h-6 rounded-full bg-[#2C4A3E] text-[#FAF7F2] text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="font-serif text-base font-bold text-[#23201D]">
                Customer & Shipping Address
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#3A3530] mb-1">
                  Full Name <span className="text-[#852233]">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full text-xs p-3 bg-[#FAF7F2] border border-[#DDD1C0] rounded-xl text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3A3530] mb-1">
                  Mobile Number (For Courier Updates) <span className="text-[#852233]">*</span>
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  placeholder="10-digit mobile number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  className="w-full text-xs p-3 bg-[#FAF7F2] border border-[#DDD1C0] rounded-xl text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#3A3530] mb-1">
                  Email Address (For Order Receipt)
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full text-xs p-3 bg-[#FAF7F2] border border-[#DDD1C0] rounded-xl text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#3A3530] mb-1">
                  Delivery Street Address <span className="text-[#852233]">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="House/Flat No., Building Name, Street, Landmark"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full text-xs p-3 bg-[#FAF7F2] border border-[#DDD1C0] rounded-xl text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3A3530] mb-1">
                  City <span className="text-[#852233]">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full text-xs p-3 bg-[#FAF7F2] border border-[#DDD1C0] rounded-xl text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3A3530] mb-1">
                  State <span className="text-[#852233]">*</span>
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full text-xs p-3 bg-[#FAF7F2] border border-[#DDD1C0] rounded-xl text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
                >
                  {indianStates.map((st) => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3A3530] mb-1">
                  Pincode <span className="text-[#852233]">*</span>
                </label>
                <input
                  type="text"
                  name="pincode"
                  maxLength={6}
                  placeholder="6-digit Indian PIN"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  className="w-full text-xs p-3 bg-[#FAF7F2] border border-[#DDD1C0] rounded-xl text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Customization & Gift Note */}
          <div className="bg-[#FFFFFF] border border-[#ECE3D6] p-6 rounded-2xl shadow-craft-sm space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-[#ECE3D6]">
              <span className="w-6 h-6 rounded-full bg-[#2C4A3E] text-[#FAF7F2] text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="font-serif text-base font-bold text-[#23201D]">
                Customization Notes & Gift Message (Optional)
              </h3>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#3A3530] mb-1">
                  Special Inscription / Name Instructions
                </label>
                <input
                  type="text"
                  name="customizationNote"
                  placeholder="e.g. Please inscribe 'Ananya & Kabir' on the nameplate frame"
                  value={formData.customizationNote}
                  onChange={handleChange}
                  className="w-full text-xs p-3 bg-[#FAF7F2] border border-[#DDD1C0] rounded-xl text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3A3530] mb-1">
                  Gift Card Message (For Recipient)
                </label>
                <textarea
                  rows={2}
                  name="giftMessage"
                  placeholder="Enter a personalized handwritten greeting card message..."
                  value={formData.giftMessage}
                  onChange={handleChange}
                  className="w-full text-xs p-3 bg-[#FAF7F2] border border-[#DDD1C0] rounded-xl text-[#23201D] focus:outline-hidden focus:border-[#2C4A3E]"
                />
              </div>
            </div>
          </div>

          {/* Step 3: Payment Method Simulator */}
          <div className="bg-[#FFFFFF] border border-[#ECE3D6] p-6 rounded-2xl shadow-craft-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#ECE3D6]">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#2C4A3E] text-[#FAF7F2] text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <h3 className="font-serif text-base font-bold text-[#23201D]">
                  Payment Method (Frontend Simulation)
                </h3>
              </div>
              <span className="text-[11px] text-[#2C4A3E] bg-[#EAF1ED] px-2.5 py-0.5 rounded font-semibold flex items-center gap-1">
                <Lock className="w-3 h-3" /> Safe & Verified Demo
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* UPI */}
              <label
                className={`p-3.5 rounded-xl border flex flex-col justify-between cursor-pointer transition-all ${
                  formData.paymentMethod === 'upi'
                    ? 'border-[#2C4A3E] bg-[#EAF1ED] ring-1 ring-[#2C4A3E]'
                    : 'border-[#ECE3D6] hover:border-[#D49B35] bg-[#FAF7F2]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleChange}
                      className="text-[#2C4A3E]"
                    />
                    <span className="text-xs font-bold text-[#23201D]">UPI / QR Code</span>
                  </div>
                  <QrCode className="w-4 h-4 text-[#2C4A3E]" />
                </div>
                <p className="text-[11px] text-[#766D64]">GPay, PhonePe, Paytm, BHIM</p>
              </label>

              {/* Cards / NetBanking */}
              <label
                className={`p-3.5 rounded-xl border flex flex-col justify-between cursor-pointer transition-all ${
                  formData.paymentMethod === 'card'
                    ? 'border-[#2C4A3E] bg-[#EAF1ED] ring-1 ring-[#2C4A3E]'
                    : 'border-[#ECE3D6] hover:border-[#D49B35] bg-[#FAF7F2]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                      className="text-[#2C4A3E]"
                    />
                    <span className="text-xs font-bold text-[#23201D]">Card / NetBanking</span>
                  </div>
                  <CreditCard className="w-4 h-4 text-[#2C4A3E]" />
                </div>
                <p className="text-[11px] text-[#766D64]">Visa, Mastercard, RuPay, NetBanking</p>
              </label>

              {/* Cash On Delivery */}
              <label
                className={`p-3.5 rounded-xl border flex flex-col justify-between cursor-pointer transition-all ${
                  formData.paymentMethod === 'cod'
                    ? 'border-[#2C4A3E] bg-[#EAF1ED] ring-1 ring-[#2C4A3E]'
                    : 'border-[#ECE3D6] hover:border-[#D49B35] bg-[#FAF7F2]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                      className="text-[#2C4A3E]"
                    />
                    <span className="text-xs font-bold text-[#23201D]">Cash on Delivery</span>
                  </div>
                  <Banknote className="w-4 h-4 text-[#2C4A3E]" />
                </div>
                <p className="text-[11px] text-[#766D64]">Pay upon doorstep inspection</p>
              </label>
            </div>
          </div>

        </div>

        {/* Right Order Review & Place Order Button (4 Cols) */}
        <div className="lg:col-span-4 bg-[#FFFFFF] border border-[#ECE3D6] p-6 rounded-2xl shadow-craft-sm space-y-5 lg:sticky lg:top-24">
          <h3 className="font-serif text-lg font-bold text-[#23201D] pb-3 border-b border-[#ECE3D6]">
            Order Review ({activeCart.length} {activeCart.length === 1 ? 'craft' : 'crafts'})
          </h3>

          {/* Mini Items List */}
          <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
            {activeCart.map((item) => (
              <div key={item.cartItemId} className="flex items-center gap-3 text-xs">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-lg border border-[#E4DCD2] shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-[#23201D] truncate">{item.name}</p>
                  <p className="text-[11px] text-[#766D64]">
                    Qty: {item.quantity} × ₹{item.price.toLocaleString('en-IN')}
                  </p>
                  {item.customization && (
                    <p className="text-[10px] text-[#852233] truncate">"{item.customization}"</p>
                  )}
                </div>
                <strong className="text-[#23201D] font-bold">
                  ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                </strong>
              </div>
            ))}
          </div>

          {/* Pricing Breakdown */}
          <div className="space-y-2 text-xs text-[#766D64] pt-3 border-t border-[#ECE3D6]">
            <div className="flex justify-between">
              <span>Items Subtotal</span>
              <span className="font-semibold text-[#23201D]">₹{computedSubtotal.toLocaleString('en-IN')}</span>
            </div>
            {computedDiscount > 0 && (
              <div className="flex justify-between text-[#2C4A3E]">
                <span>Artisan Coupon ({appliedCoupon?.code})</span>
                <span>-₹{computedDiscount.toLocaleString('en-IN')}</span>
              </div>
            )}
            {isGiftWrap && (
              <div className="flex justify-between">
                <span>Gift Box Packaging</span>
                <span className="font-semibold text-[#23201D]">₹{giftWrapFee}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Pan-India Delivery</span>
              <span>
                {computedShipping === 0 ? (
                  <span className="text-[#2C4A3E] font-semibold">FREE</span>
                ) : (
                  `₹${computedShipping}`
                )}
              </span>
            </div>
            <div className="flex justify-between text-base font-serif font-bold text-[#23201D] pt-3 border-t border-[#ECE3D6]">
              <span>Grand Total</span>
              <span className="text-xl text-[#852233]">₹{computedTotal.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#2C4A3E] hover:bg-[#1E352C] text-[#FAF7F2] font-bold text-sm rounded-xl transition-all shadow-craft-md flex items-center justify-center gap-2"
          >
            <span>Place Order Now • ₹{computedTotal.toLocaleString('en-IN')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-[11px] text-center text-[#766D64]">
            By placing this order, you support rural Indian artisan livelihoods in Himachal Pradesh.
          </p>
        </div>

      </form>
    </div>
  );
};

export default CheckoutPage;
