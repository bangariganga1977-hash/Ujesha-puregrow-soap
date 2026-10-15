import React from 'react';
import { ASSET_IMAGES } from '../assets/images';
import { Sparkles, ArrowRight, ShieldCheck, Leaf, HeartHandshake, PackageCheck } from 'lucide-react';

interface StoreHeroProps {
  onShopNow: () => void;
  onExploreIngredients: () => void;
}

export const StoreHero: React.FC<StoreHeroProps> = ({ onShopNow, onExploreIngredients }) => {
  return (
    <section id="hero-section" className="relative overflow-hidden bg-[#FAF7F2] py-8 sm:py-14 border-b border-[#EBE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Soft pink / sage badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE7EC] border border-[#F9D5DD] text-[#8C6547] text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#E892A2] animate-pulse"></span>
              <span>Pure Glow Naturals · Artisanal Small Batch</span>
            </div>

            {/* Catchy Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#4A3728] tracking-tight leading-[1.15]">
              Natural Luxury Handcrafted for Radiant Skin.
            </h1>

            {/* Body Copy */}
            <p className="text-base sm:text-lg text-[#5A3E2B] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Formulated in small artisanal batches using cold-pressed coconut oil, raw wild Indian forest honey, and freshly cut soothing aloe vera. Truthful skincare with 100% documented MoCRA safety substantiation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                id="hero-shop-now-button"
                onClick={onShopNow}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#4A3728] hover:bg-[#362419] text-[#FAF7F2] text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
              >
                <span>Shop Best Sellers</span>
                <ArrowRight className="w-4 h-4 text-[#FCE7EC]" />
              </button>

              <button
                id="hero-explore-ingredients-button"
                onClick={onExploreIngredients}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-[#F5EFEB] text-[#4A3728] text-sm font-semibold rounded-full border border-[#D8C7B8] transition-all duration-200 cursor-pointer"
              >
                <Leaf className="w-4 h-4 text-[#5F7F67]" />
                <span>Explore Clean Ingredients</span>
              </button>
            </div>

            {/* Key Micro-Badges */}
            <div className="pt-4 border-t border-[#EBE4DC] flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-[#5A3E2B]">
              <div className="flex items-center gap-1.5">
                <span className="text-[#5F7F67]">✓</span>
                <span>Zero Synthetic Sulfates</span>
              </div>
              <span className="text-[#D8C7B8]">·</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[#5F7F67]">✓</span>
                <span>Eco Butter Paper Wrapped</span>
              </div>
              <span className="text-[#D8C7B8]">·</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[#5F7F67]">✓</span>
                <span>MoCRA § 608 Verified</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column: Generated Luxury Skincare Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background aura in soft pink and sage */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#FCE7EC] via-[#FAF7F2] to-[#E8EFE9] rounded-3xl blur-xl opacity-70"></div>
              
              <div className="relative rounded-2xl overflow-hidden border border-[#EBE4DC] shadow-xl bg-white">
                <img
                  src={ASSET_IMAGES.heroBanner}
                  alt="Pure Glow handmade botanical soap bars, raw honey, and fresh aloe vera in soft natural light"
                  referrerPolicy="no-referrer"
                  className="w-full h-[320px] sm:h-[420px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                />

                {/* Floating Artisan Purity Tag */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md border border-[#EBE4DC] rounded-xl p-3 sm:p-4 shadow-md flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#E8EFE9] border border-[#CADCCB] flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5 text-[#3F5845]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#4A3728] font-serif">
                        Pure Glow Botanical Soap Bar
                      </div>
                      <div className="text-[11px] text-[#8C6547] font-mono">
                        Glycerin · Coconut Oil · Honey · Aloe Vera
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={onShopNow}
                    className="px-3 py-1.5 rounded-lg bg-[#4A3728] text-white text-[11px] font-semibold hover:bg-[#362419] transition-colors shrink-0 cursor-pointer"
                  >
                    View Bar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Value Strip */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white/80 border border-[#EBE4DC] rounded-xl p-4 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#E8EFE9] text-[#3F5845] shrink-0">
              <Leaf className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#4A3728] font-serif">100% Plant & Honey Base</h3>
              <p className="text-[11px] text-[#8C6547] mt-0.5 leading-snug">Pure vegetable glycerin, wild honey, and zero tallow or synthetic fillers.</p>
            </div>
          </div>

          <div className="bg-white/80 border border-[#EBE4DC] rounded-xl p-4 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#FCE7EC] text-[#8C6547] shrink-0">
              <PackageCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#4A3728] font-serif">Biodegradable Packaging</h3>
              <p className="text-[11px] text-[#8C6547] mt-0.5 leading-snug">Butter paper wraps & recycled sleeves. 100% plastic-free shipping cartons.</p>
            </div>
          </div>

          <div className="bg-white/80 border border-[#EBE4DC] rounded-xl p-4 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#E8EFE9] text-[#3F5845] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#4A3728] font-serif">MoCRA § 608 Verified</h3>
              <p className="text-[11px] text-[#8C6547] mt-0.5 leading-snug">Every botanical substantiation and INCI declaration is legally audited.</p>
            </div>
          </div>

          <div className="bg-white/80 border border-[#EBE4DC] rounded-xl p-4 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#FCE7EC] text-[#8C6547] shrink-0">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#4A3728] font-serif">30-Day Pure Glow Guarantee</h3>
              <p className="text-[11px] text-[#8C6547] mt-0.5 leading-snug">Love your glowing skin or receive a full, hassle-free refund.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
