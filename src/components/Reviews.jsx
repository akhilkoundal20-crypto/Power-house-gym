import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquare, X } from 'lucide-react';

const Reviews = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [reviewName, setReviewName] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [submittedReview, setSubmittedReview] = useState(false);

  const reviews = [
    {
      author: 'Aarav Sharma',
      badge: 'Local Guide',
      rating: 5,
      date: '2 weeks ago',
      text: 'Great gym with friendly trainers and clean equipment. The atmosphere is motivating and the equipment is really good. Open 24 hours is a huge plus!',
    },
    {
      author: 'Rahul Thapa',
      badge: 'Active Lifter',
      rating: 5,
      date: '1 month ago',
      text: 'The best gym in Yol area. Well-maintained machines, plenty of free weights, and very supportive environment. Highly recommended for heavy lifting.',
    },
    {
      author: 'Sneha Katoch',
      badge: 'Fitness Enthusiast',
      rating: 5,
      date: '3 weeks ago',
      text: 'Super clean, excellent environment, and the trainers are highly professional. The cardio machines work perfectly, and it is safe for women workouts too.',
    },
    {
      author: 'Amit Chaudhary',
      badge: 'Local Guide',
      rating: 5,
      date: '2 months ago',
      text: 'Highly professional atmosphere! Great equipment selection, proper spacing, and 24/7 access fits my shift timings perfectly. Absolutely value for money.',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reviewText || !reviewName) return;
    setSubmittedReview(true);
    setTimeout(() => {
      setShowDemoModal(false);
      setSubmittedReview(false);
      setReviewText('');
      setReviewName('');
      setReviewRating(5);
    }, 2000);
  };

  return (
    <section id="reviews" className="py-20 bg-gymDark border-b border-gymBorder/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Banner - Inspired by Google Business Profile header */}
        <div className="bg-gymCard border border-gymBorder rounded-3xl p-6 sm:p-10 mb-16 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Overall Summary stats */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="text-6xl sm:text-7xl font-display font-black text-white">
                5.0
              </div>
              <div>
                <div className="flex text-yellow-500 justify-center sm:justify-start mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-current" />
                  ))}
                </div>
                <h3 className="font-sans text-lg font-bold text-white uppercase tracking-wider mb-1">
                  126 Google Reviews
                </h3>
                <p className="font-sans text-xs text-gymTextMuted">
                  Verified customer reviews from Yol, Himachal Pradesh
                </p>
              </div>
            </div>

            {/* Leave a review button */}
            <div>
              <button
                onClick={() => setShowDemoModal(true)}
                className="bg-white hover:bg-gymAccent hover:text-white text-black px-8 py-3.5 rounded-xl font-sans uppercase tracking-wider text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Leave a Review</span>
              </button>
            </div>
            
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gymAccent font-sans text-sm font-bold tracking-widest uppercase mb-3 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight leading-none mb-4">
            What Members Say
          </h2>
          <div className="h-1.5 w-24 bg-gymAccent mx-auto rounded-full mb-6" />
        </div>

        {/* Reviews Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-gymCard border border-gymBorder/40 p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-md transition-all duration-300 hover:border-gymBorder hover:-translate-y-1"
            >
              <div>
                {/* Author Info */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-gymDark h-11 w-11 rounded-full flex items-center justify-center border border-gymBorder font-display font-black text-gymAccent uppercase text-lg">
                      {rev.author[0]}
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-bold text-white leading-tight">
                        {rev.author}
                      </h4>
                      <span className="font-sans text-[10px] font-semibold text-gymAccent tracking-wider uppercase block">
                        {rev.badge}
                      </span>
                    </div>
                  </div>
                  <span className="font-sans text-xs text-gymTextMuted">
                    {rev.date}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                {/* Text Review */}
                <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Dialog Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-55 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-gymCard border border-gymBorder max-w-md w-full rounded-2xl shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setShowDemoModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1"
              aria-label="Close review modal"
            >
              <X className="h-5 w-5" />
            </button>

            {submittedReview ? (
              <div className="text-center py-8">
                <div className="h-16 w-16 bg-gymAccent/10 text-gymAccent border border-gymAccent/35 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider mb-2">
                  Review Submitted!
                </h3>
                <p className="font-sans text-sm text-gymTextMuted">
                  Thank you for rating The Power House Gym Yol.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="text-center mb-2">
                  <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider mb-1">
                    Submit Google Review
                  </h3>
                  <p className="font-sans text-xs text-gymTextMuted">
                    Share your workout experience in Yol center.
                  </p>
                </div>

                {/* Rating Select */}
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs font-bold text-gray-300 uppercase tracking-widest">
                    Your Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((stars) => (
                      <button
                        type="button"
                        key={stars}
                        onClick={() => setReviewRating(stars)}
                        className="text-yellow-500 focus:outline-none"
                      >
                        <Star
                          className={`h-7 w-7 ${
                            stars <= reviewRating ? 'fill-current' : 'text-gray-600'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name Input */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs font-bold text-gray-300 uppercase tracking-widest">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={reviewName}
                    onChange={(e) => setReviewName(e.target.value)}
                    placeholder="Enter your full name"
                    className="bg-gymDark border border-gymBorder rounded-xl p-3 font-sans text-sm text-white focus:outline-none focus:border-gymAccent transition-colors"
                  />
                </div>

                {/* Review Text Area */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs font-bold text-gray-300 uppercase tracking-widest">
                    Review Description
                  </label>
                  <textarea
                    required
                    rows="3"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Tell us what you like about the equipment, schedule, and environment..."
                    className="bg-gymDark border border-gymBorder rounded-xl p-3 font-sans text-sm text-white focus:outline-none focus:border-gymAccent transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full bg-gymAccent hover:bg-gymAccentHover text-white py-3 rounded-xl font-sans uppercase tracking-wider font-bold transition-all duration-300 hover:shadow-lg hover:shadow-gymAccent/20"
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Reviews;
