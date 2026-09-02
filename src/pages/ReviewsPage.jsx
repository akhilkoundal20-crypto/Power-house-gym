import React, { useState } from 'react';
import { useCraft } from '../context/CraftContext';
import { PRODUCTS } from '../data/craftData';
import MotifDivider from '../components/common/MotifDivider';
import {
  Star,
  CheckCircle2,
  ThumbsUp,
  MessageSquare,
  Sparkles,
  X,
  Heart
} from 'lucide-react';

export const ReviewsPage = () => {
  const { reviews, addReview, showToast } = useCraft();

  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [selectedProductId, setSelectedProductId] = useState(PRODUCTS[0].id);
  const [comment, setComment] = useState('');

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) {
      showToast('Please provide your name and review', 'error');
      return;
    }

    const prod = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

    const newReview = {
      author,
      location: location.trim() || 'India',
      rating,
      productName: prod.name,
      productImage: prod.images[0],
      comment
    };

    addReview(newReview);
    setIsWriteReviewOpen(false);
    setAuthor('');
    setLocation('');
    setComment('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAEEF1] border border-[#E7BDC7] text-[#852233] text-xs font-bold uppercase tracking-wider mb-2">
          <Heart className="w-3.5 h-3.5 fill-[#852233]" />
          <span>Real Patron Love</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#23201D]">
          Voices of Our Craft Patrons
        </h1>
        <p className="font-hindi text-base text-[#852233] mt-1">
          हस्तनिर्मित कला को अपने घर में सजाने वाले ग्राहकों के सच्चे अनुभव
        </p>
        <MotifDivider />
      </div>

      {/* Ratings Metric Overview Card */}
      <div className="bg-[#FFFFFF] border border-[#ECE3D6] rounded-2xl p-6 sm:p-8 shadow-craft-sm max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left Big Score (4 Cols) */}
        <div className="md:col-span-4 text-center md:border-r border-[#ECE3D6] md:pr-6 space-y-1">
          <h2 className="font-serif text-5xl font-bold text-[#2C4A3E]">4.95</h2>
          <div className="flex items-center justify-center text-[#D49B35] gap-1 py-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#D49B35]" />
            ))}
          </div>
          <p className="text-xs text-[#766D64]">Based on 1,200+ authentic orders across India</p>
        </div>

        {/* Center Rating Bars (5 Cols) */}
        <div className="md:col-span-5 space-y-1.5 text-xs text-[#766D64]">
          <div className="flex items-center gap-2">
            <span className="w-10">5 Star</span>
            <div className="flex-1 bg-[#F4EFE7] h-2 rounded-full overflow-hidden">
              <div className="bg-[#2C4A3E] h-full w-[96%]" />
            </div>
            <span className="w-8 text-right font-medium">96%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-10">4 Star</span>
            <div className="flex-1 bg-[#F4EFE7] h-2 rounded-full overflow-hidden">
              <div className="bg-[#2C4A3E] h-full w-[4%]" />
            </div>
            <span className="w-8 text-right font-medium">4%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-10">3 Star</span>
            <div className="flex-1 bg-[#F4EFE7] h-2 rounded-full overflow-hidden">
              <div className="bg-[#DDD1C0] h-full w-[0%]" />
            </div>
            <span className="w-8 text-right font-medium">0%</span>
          </div>
        </div>

        {/* Right CTA (3 Cols) */}
        <div className="md:col-span-3 text-center">
          <button
            onClick={() => setIsWriteReviewOpen(true)}
            className="w-full py-3 px-4 bg-[#2C4A3E] hover:bg-[#1E352C] text-[#FAF7F2] font-semibold text-xs rounded-xl transition-colors shadow-craft-sm"
          >
            Write a Review
          </button>
          <span className="text-[11px] text-[#766D64] mt-2 block">
            Share photos of your craft setup
          </span>
        </div>
      </div>

      {/* Review Cards Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="p-5 sm:p-6 bg-[#FFFFFF] border border-[#ECE3D6] rounded-2xl shadow-craft-sm flex flex-col justify-between space-y-4 hover:border-[#D49B35] transition-all group"
          >
            <div>
              {/* Rating & Date */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center text-[#D49B35]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D49B35]" />
                  ))}
                </div>
                <span className="text-[11px] text-[#9A9085]">{rev.date}</span>
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-[#3A3530] leading-relaxed italic">
                "{rev.comment}"
              </p>
            </div>

            {/* Product Tag & Customer */}
            <div className="pt-3 border-t border-[#F4EFE7] flex items-center gap-3">
              <img
                src={rev.productImage}
                alt={rev.productName}
                className="w-12 h-12 rounded-lg object-cover border border-[#E4DCD2] shrink-0"
              />
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-[#23201D] truncate">
                  {rev.author}
                </h4>
                <p className="text-[11px] text-[#766D64]">{rev.location}</p>
                <span className="text-[10px] text-[#2C4A3E] font-semibold flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="w-2.5 h-2.5" /> Verified Purchase
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Write a Review Modal */}
      {isWriteReviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FAF7F2] border border-[#DDD1C0] rounded-2xl max-w-lg w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsWriteReviewOpen(false)}
              className="absolute top-4 right-4 p-1 text-[#766D64] hover:text-[#23201D]"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-xl font-bold text-[#23201D] mb-1">
              Share Your Handcrafted Experience
            </h3>
            <p className="text-xs text-[#766D64] mb-4">
              Your kind words support traditional Himalayan artisans.
            </p>

            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#23201D] mb-1">
                  Rating:
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setRating(s)}
                      className="p-1"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          s <= rating ? 'fill-[#D49B35] text-[#D49B35]' : 'text-[#DDD1C0]'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#23201D] mb-1">
                  Which craft did you purchase?
                </label>
                <select
                  value={selectedProductId}
                  onChange={(e) => setSelectedProductId(e.target.value)}
                  className="w-full text-xs p-2.5 bg-[#FFFFFF] border border-[#DDD1C0] rounded-lg text-[#23201D]"
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#23201D] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Shalini Roy"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full text-xs p-2.5 bg-[#FFFFFF] border border-[#DDD1C0] rounded-lg text-[#23201D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#23201D] mb-1">
                    City / State
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Jaipur"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full text-xs p-2.5 bg-[#FFFFFF] border border-[#DDD1C0] rounded-lg text-[#23201D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#23201D] mb-1">
                  Your Review & Unboxing Experience *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us about the wood carving, finish, bells, or packaging..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full text-xs p-2.5 bg-[#FFFFFF] border border-[#DDD1C0] rounded-lg text-[#23201D]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#2C4A3E] text-[#FAF7F2] font-semibold text-xs rounded-xl hover:bg-[#1E352C] transition-colors"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default ReviewsPage;
