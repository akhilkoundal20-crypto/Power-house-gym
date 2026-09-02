import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCraft } from '../context/CraftContext';
import MotifDivider from '../components/common/MotifDivider';
import {
  CheckCircle2,
  Heart,
  Truck,
  Phone,
  Printer,
  Sparkles,
  ArrowRight,
  Gift,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const OrderSuccessPage = () => {
  const { orderId } = useParams();
  const { orders } = useCraft();

  const currentOrder = orders.find((o) => o.orderId === orderId) || orders[0] || {
    orderId: orderId || 'SR-842918',
    formattedDate: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    estimatedDelivery: 'Mon, 8 Sep',
    total: 3499,
    customer: {
      fullName: 'Valued Art Patron',
      mobileNumber: '+91 98765 43210',
      address: 'Himachal Crafts Residency',
      city: 'Shimla',
      state: 'Himachal Pradesh',
      pincode: '171001'
    },
    items: []
  };

  useEffect(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.4 }
      });
    } catch {
      // ignore
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      
      {/* Top Banner Card */}
      <div className="bg-[#FFFFFF] border-2 border-[#2C4A3E] rounded-3xl p-6 sm:p-10 shadow-craft-lg text-center space-y-5 relative overflow-hidden">
        {/* Background celebration glow */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#D49B35]/15 rounded-full blur-2xl pointer-events-none" />

        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#EAF1ED] text-[#2C4A3E] flex items-center justify-center mx-auto shadow-craft-sm">
          <CheckCircle2 className="w-9 h-9 sm:w-11 sm:h-11" />
        </div>

        <div>
          <span className="text-xs font-bold text-[#852233] uppercase tracking-widest px-3 py-1 bg-[#FAEEF1] rounded-full border border-[#E7BDC7]">
            Order Confirmed #{currentOrder.orderId}
          </span>

          <h1 className="font-serif text-2xl sm:text-4xl font-normal text-[#23201D] mt-3">
            Thank you for supporting handmade art ❤️
          </h1>
          <p className="font-hindi text-base sm:text-lg text-[#852233] mt-1 font-semibold">
            शैलरीत परिवार की ओर से आपका हार्दिक आभार
          </p>
        </div>

        <p className="text-xs sm:text-sm text-[#766D64] max-w-lg mx-auto leading-relaxed">
          Your order has been received by our Kangra Valley studio. Our artisans will soon begin shaping, carving, and preparing your handcrafted pieces.
        </p>

        {/* Dispatch Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-[#FAF7F2] rounded-2xl border border-[#ECE3D6] text-xs text-left max-w-xl mx-auto">
          <div>
            <span className="text-[#766D64] block">Order Date:</span>
            <strong className="text-[#23201D]">{currentOrder.formattedDate}</strong>
          </div>
          <div>
            <span className="text-[#766D64] block">Est. Delivery:</span>
            <strong className="text-[#2C4A3E]">{currentOrder.estimatedDelivery}</strong>
          </div>
          <div>
            <span className="text-[#766D64] block">Payment Status:</span>
            <span className="font-bold text-[#D49B35]">Verified (Demo Flow)</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <a
            href={`https://wa.me/919816000000?text=${encodeURIComponent(
              `Namaste Shailreet! I placed order #${currentOrder.orderId} for ₹${currentOrder.total}. Looking forward to my handmade pieces!`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2C4A3E] hover:bg-[#1E352C] text-[#FAF7F2] font-semibold text-xs rounded-xl transition-colors shadow-craft-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
          </a>

          <button
            onClick={handlePrint}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#FAF7F2] hover:bg-[#F4EFE7] text-[#23201D] border border-[#DDD1C0] font-semibold text-xs rounded-xl transition-colors"
          >
            <Printer className="w-4 h-4 text-[#766D64]" />
            <span>Print Invoice Receipt</span>
          </button>
        </div>
      </div>

      {/* Order Details & Summary Card */}
      <div className="bg-[#FFFFFF] border border-[#ECE3D6] rounded-2xl p-6 sm:p-8 shadow-craft-sm space-y-6">
        <h3 className="font-serif text-lg font-bold text-[#23201D] pb-3 border-b border-[#ECE3D6]">
          Order Summary & Delivery Destination
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          {/* Shipping Address */}
          <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#ECE3D6] space-y-1.5">
            <h4 className="font-bold text-[#23201D] uppercase tracking-wider mb-2">
              Delivery Address
            </h4>
            <p className="font-semibold text-[#23201D]">{currentOrder.customer?.fullName}</p>
            <p className="text-[#6E655C]">{currentOrder.customer?.address}</p>
            <p className="text-[#6E655C]">
              {currentOrder.customer?.city}, {currentOrder.customer?.state} - {currentOrder.customer?.pincode}
            </p>
            <p className="text-[#6E655C]">Mobile: {currentOrder.customer?.mobileNumber}</p>
          </div>

          {/* Delivery & Artisan Notes */}
          <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#ECE3D6] space-y-1.5">
            <h4 className="font-bold text-[#23201D] uppercase tracking-wider mb-2">
              Packaging & Tracking
            </h4>
            <p className="text-[#6E655C]">
              Courier: <strong>Bluedart / DTDC Express Insured</strong>
            </p>
            <p className="text-[#6E655C]">
              Packaging: <strong>Eco-Friendly Multi-Layer Bubble & Kraft Box</strong>
            </p>
            <p className="text-[#2C4A3E] font-medium pt-1">
              ✓ Tracking link will be sent via SMS upon dispatch.
            </p>
          </div>
        </div>

        {/* Ordered Items List */}
        {currentOrder.items && currentOrder.items.length > 0 && (
          <div className="pt-4 border-t border-[#ECE3D6]">
            <h4 className="font-bold text-xs text-[#23201D] uppercase tracking-wider mb-3">
              Craft Items in This Order
            </h4>
            <div className="divide-y divide-[#F4EFE7]">
              {currentOrder.items.map((item, idx) => (
                <div key={idx} className="py-3 flex items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover border border-[#E4DCD2]"
                    />
                    <div>
                      <p className="font-serif font-semibold text-[#23201D]">{item.name}</p>
                      <p className="text-[11px] text-[#766D64]">Qty: {item.quantity}</p>
                      {item.customization && (
                        <p className="text-[11px] text-[#852233]">Inscription: "{item.customization}"</p>
                      )}
                    </div>
                  </div>
                  <strong className="text-sm font-bold text-[#23201D]">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Total calculation */}
        <div className="pt-4 border-t border-[#ECE3D6] flex justify-between items-center text-sm font-bold text-[#23201D]">
          <span>Total Order Paid (Frontend Demo)</span>
          <span className="text-lg sm:text-xl text-[#852233]">
            ₹{currentOrder.total?.toLocaleString('en-IN')}
          </span>
        </div>
      </div>

      <div className="text-center pt-4">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2C4A3E] hover:bg-[#1E352C] text-[#FAF7F2] font-semibold text-xs sm:text-sm rounded-xl transition-colors shadow-craft-sm"
        >
          <span>Continue Exploring Shailreet Crafts</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};

export default OrderSuccessPage;
