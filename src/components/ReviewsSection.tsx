import React, { useState } from 'react';
import { CUSTOMER_REVIEWS } from '../data/storeData';
import { Review } from '../types';
import { Star, CheckCircle, MessageSquare, ThumbsUp, Plus, X, Sparkles } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(CUSTOMER_REVIEWS);
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);

  // New review form
  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newTitle, setNewTitle] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newSkinType, setNewSkinType] = useState('Sensitive & Dry Skin');
  const [newProduct, setNewProduct] = useState('Pure Glow Handmade Botanical Soap Bar');

  const filteredReviews = filterRating === 'all'
    ? reviews
    : reviews.filter(r => r.rating === filterRating);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const created: Review = {
      id: `rev-${Date.now()}`,
      author: newAuthor.trim(),
      location: newLocation.trim() || 'Verified Customer',
      rating: newRating,
      date: 'Just now',
      verifiedBuyer: true,
      productName: newProduct,
      title: newTitle.trim() || 'Wonderful natural formulation',
      comment: newComment.trim(),
      skinType: newSkinType,
      avatarBg: 'bg-[#F9D5DD]'
    };

    setReviews([created, ...reviews]);
    setIsWriteReviewOpen(false);
    // Reset form
    setNewAuthor('');
    setNewLocation('');
    setNewTitle('');
    setNewComment('');
  };

  return (
    <section id="reviews-section" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EBE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header & Rating Overview */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EBE4DC] pb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCE7EC] border border-[#F9D5DD] text-[#8C6547] text-xs font-semibold">
              <Star className="w-3.5 h-3.5 fill-[#8C6547] text-[#8C6547]" />
              <span>Customer Satisfaction</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A3728] mt-2">
              Loved by Skin Everywhere
            </h2>
            <p className="text-sm text-[#8C6547] mt-1 max-w-xl">
              Authentic experiences from customers with dry, sensitive, and eczema-prone skin across India, the US, and worldwide.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-[#EBE4DC] shadow-xs">
            <div className="text-center pr-4 border-r border-[#EBE4DC]">
              <div className="text-3xl font-serif font-bold text-[#4A3728]">4.95</div>
              <div className="flex text-amber-400 justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-[10px] text-[#8C6547] mt-0.5 font-mono">420+ Reviews</div>
            </div>

            <button
              id="open-write-review-button"
              onClick={() => setIsWriteReviewOpen(true)}
              className="px-4 py-2 bg-[#4A3728] hover:bg-[#362419] text-[#FAF7F2] text-xs font-semibold rounded-full flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <Plus className="w-3.5 h-3.5 text-[#FCE7EC]" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs">
          <span className="text-[#8C6547] font-medium mr-1">Filter:</span>
          <button
            onClick={() => setFilterRating('all')}
            className={`px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
              filterRating === 'all'
                ? 'bg-[#4A3728] text-white font-bold'
                : 'bg-white text-[#5A3E2B] border border-[#D8C7B8] hover:bg-[#FAF7F2]'
            }`}
          >
            All Reviews ({reviews.length})
          </button>
          <button
            onClick={() => setFilterRating(5)}
            className={`px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
              filterRating === 5
                ? 'bg-[#4A3728] text-white font-bold'
                : 'bg-white text-[#5A3E2B] border border-[#D8C7B8] hover:bg-[#FAF7F2]'
            }`}
          >
            ★ 5 Stars Only
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-[#EBE4DC] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#D8C7B8] transition-all"
            >
              <div className="space-y-3">
                {/* Author Info & Verified Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-full ${rev.avatarBg || 'bg-[#F9D5DD]'} flex items-center justify-center font-bold text-xs text-[#4A3728]`}>
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#4A3728] flex items-center gap-1">
                        <span>{rev.author}</span>
                        {rev.verifiedBuyer && (
                          <CheckCircle className="w-3.5 h-3.5 text-[#5F7F67]" title="Verified Artisan Buyer" />
                        )}
                      </div>
                      <div className="text-[10px] text-[#8C6547]">{rev.location}</div>
                    </div>
                  </div>

                  <span className="text-[10px] text-[#8C6547] font-mono">{rev.date}</span>
                </div>

                {/* Rating & Product Tag */}
                <div className="space-y-1">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h4 className="text-sm font-bold text-[#4A3728] font-serif">
                    "{rev.title}"
                  </h4>
                </div>

                {/* Comment */}
                <p className="text-xs text-[#5A3E2B] leading-relaxed">
                  {rev.comment}
                </p>
              </div>

              {/* Footer info: skin type & product name */}
              <div className="pt-3 border-t border-[#EBE4DC] flex flex-wrap items-center justify-between gap-2 text-[10px] text-[#8C6547]">
                <span className="bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#EBE4DC] font-medium text-[#4A3728]">
                  Skin: {rev.skinType}
                </span>
                <span className="truncate max-w-[160px] font-mono text-[10px]">
                  {rev.productName}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Write a Review Modal */}
        {isWriteReviewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
            <div className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#EBE4DC] space-y-4 animate-in zoom-in-95">
              <button
                onClick={() => setIsWriteReviewOpen(false)}
                className="absolute top-4 right-4 p-1.5 text-[#8C6547] hover:text-[#4A3728] rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <h3 className="text-xl font-serif font-bold text-[#4A3728]">
                  Share Your Pure Glow Experience
                </h3>
                <p className="text-xs text-[#8C6547] mt-0.5">
                  Help fellow skincare enthusiasts understand how our pure botanicals worked for you.
                </p>
              </div>

              <form onSubmit={handleSubmitReview} className="space-y-3.5 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#5A3E2B] font-medium mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      placeholder="e.g. Priya M."
                      className="w-full p-2.5 border border-[#D8C7B8] rounded-lg bg-[#FAF7F2] text-[#4A3728] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[#5A3E2B] font-medium mb-1">Location</label>
                    <input
                      type="text"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      placeholder="City, Country"
                      className="w-full p-2.5 border border-[#D8C7B8] rounded-lg bg-[#FAF7F2] text-[#4A3728] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#5A3E2B] font-medium mb-1">Product Reviewed</label>
                  <select
                    value={newProduct}
                    onChange={(e) => setNewProduct(e.target.value)}
                    className="w-full p-2.5 border border-[#D8C7B8] rounded-lg bg-[#FAF7F2] text-[#4A3728]"
                  >
                    <option value="Pure Glow Handmade Botanical Soap Bar">Pure Glow Handmade Botanical Soap Bar</option>
                    <option value="Golden Honey Conditioning Face Bar">Golden Honey Conditioning Face Bar</option>
                    <option value="Whipped Coconut & Honey Velvety Body Butter">Whipped Coconut & Honey Velvety Body Butter</option>
                    <option value="Fresh Aloe & Rose Dew Hydrating Elixir">Fresh Aloe & Rose Dew Hydrating Elixir</option>
                    <option value="Nourishing Coconut & Honey Solid Shampoo Bar">Nourishing Coconut & Honey Solid Shampoo Bar</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#5A3E2B] font-medium mb-1">Star Rating</label>
                    <div className="flex gap-1 pt-1 text-amber-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setNewRating(star)}
                          className="cursor-pointer"
                        >
                          <Star className={`w-5 h-5 ${star <= newRating ? 'fill-amber-400' : 'text-stone-300'}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#5A3E2B] font-medium mb-1">Skin Type</label>
                    <select
                      value={newSkinType}
                      onChange={(e) => setNewSkinType(e.target.value)}
                      className="w-full p-2.5 border border-[#D8C7B8] rounded-lg bg-[#FAF7F2] text-[#4A3728]"
                    >
                      <option value="Sensitive & Dry Skin">Sensitive & Dry Skin</option>
                      <option value="Combination / Acne-Prone">Combination / Acne-Prone</option>
                      <option value="Normal / Balanced">Normal / Balanced</option>
                      <option value="Eczema-Prone">Eczema-Prone</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#5A3E2B] font-medium mb-1">Review Headline</label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Incredibly soothing on my sensitive skin"
                    className="w-full p-2.5 border border-[#D8C7B8] rounded-lg bg-[#FAF7F2] text-[#4A3728] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[#5A3E2B] font-medium mb-1">Your Feedback & Ritual</label>
                  <textarea
                    rows={3}
                    required
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Tell us how the lather felt, moisture levels, aroma, etc."
                    className="w-full p-2.5 border border-[#D8C7B8] rounded-lg bg-[#FAF7F2] text-[#4A3728] focus:bg-white"
                  ></textarea>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsWriteReviewOpen(false)}
                    className="px-4 py-2 border border-[#D8C7B8] text-[#8C6547] rounded-full hover:bg-[#FAF7F2] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#4A3728] text-white font-semibold rounded-full hover:bg-[#362419] cursor-pointer shadow-xs"
                  >
                    Post Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
