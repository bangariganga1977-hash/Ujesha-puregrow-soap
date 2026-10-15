import React, { useState } from 'react';
import { INSTAGRAM_POSTS } from '../data/storeData';
import { InstagramPost, Product } from '../types';
import { Heart, Instagram, ShoppingBag, ExternalLink, X } from 'lucide-react';

interface InstagramFeedProps {
  onSelectProductById: (productId: string) => void;
}

export const InstagramFeed: React.FC<InstagramFeedProps> = ({ onSelectProductById }) => {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  return (
    <section id="instagram-section" className="py-16 sm:py-20 bg-white border-b border-[#EBE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCE7EC] border border-[#F9D5DD] text-[#8C6547] text-xs font-semibold">
              <Instagram className="w-3.5 h-3.5" />
              <span>@pureglownaturals</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#4A3728] mt-1.5">
              Follow Our Artisanal Glow
            </h2>
            <p className="text-xs sm:text-sm text-[#8C6547]">
              Behind the scenes in our workshop, curing batches, and daily skin rituals. Tag #PureGlowArtisan to be featured!
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#FAF7F2] hover:bg-[#F5EFEB] border border-[#D8C7B8] text-[#4A3728] text-xs font-semibold rounded-full flex items-center gap-2 transition-colors"
          >
            <Instagram className="w-4 h-4 text-[#8C6547]" />
            <span>Follow on Instagram</span>
            <ExternalLink className="w-3 h-3 text-[#8C6547]" />
          </a>
        </div>

        {/* Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#EBE4DC] shadow-xs cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Scrim Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-4 text-white text-center">
                <div className="flex items-center gap-1 text-xs font-bold mb-2">
                  <Heart className="w-4 h-4 fill-white" />
                  <span>{post.likes}</span>
                </div>
                <span className="text-[11px] font-mono bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-full text-white line-clamp-1">
                  Tag: {post.productTag}
                </span>
                <span className="text-[10px] mt-2 underline">Click to view post</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Instagram Post Detail */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
            <div className="relative bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#EBE4DC] space-y-4 animate-in zoom-in-95">
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-3 right-3 z-10 p-1.5 bg-black/40 hover:bg-black/60 text-white rounded-full cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="aspect-square w-full overflow-hidden bg-[#FAF7F2]">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 sm:p-6 space-y-4 pt-0">
                <div className="flex items-center justify-between text-xs text-[#8C6547] border-b border-[#EBE4DC] pb-3">
                  <span className="font-bold text-[#4A3728]">{selectedPost.handle}</span>
                  <div className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                    <span>{selectedPost.likes} likes</span>
                  </div>
                </div>

                <p className="text-xs text-[#5A3E2B] leading-relaxed">
                  {selectedPost.caption}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      onSelectProductById(selectedPost.productId);
                      setSelectedPost(null);
                    }}
                    className="w-full py-2.5 px-4 bg-[#4A3728] hover:bg-[#362419] text-[#FAF7F2] text-xs font-semibold rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#FCE7EC]" />
                    <span>Shop Tagged Product: {selectedPost.productTag}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
