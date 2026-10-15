import React from 'react';
import { ASSET_IMAGES } from '../assets/images';
import { ShieldCheck, Heart, Leaf, Sparkles, Award } from 'lucide-react';

interface AboutSectionProps {
  onExploreSafetyDossier: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreSafetyDossier }) => {
  return (
    <section id="about-section" className="py-16 sm:py-24 bg-white border-b border-[#EBE4DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Workshop Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#CADCCB] via-[#FAF7F2] to-[#FCE7EC] rounded-3xl blur-md opacity-60"></div>
              
              <div className="relative rounded-2xl overflow-hidden border border-[#EBE4DC] shadow-lg">
                <img
                  src={ASSET_IMAGES.soapHero}
                  alt="Pure Glow handcrafted organic cold-process soap bars with natural herbs, raw honey, and rich lather"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[460px] object-cover object-center"
                />

                {/* Artisan Badge Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-[#EBE4DC] p-3.5 rounded-xl shadow-md flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#E8EFE9] flex items-center justify-center shrink-0">
                    <Leaf className="w-5 h-5 text-[#5F7F67]" />
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-[#4A3728] block font-serif">Hand-Poured & Cured 4 Weeks</span>
                    <span className="text-[#8C6547] text-[11px]">Small-batch Indian startup · 100% Biodegradable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story & Integrity Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EFE9] border border-[#CADCCB] text-[#3F5845] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#5F7F67]" />
              <span>Our Artisanal Origin & Story</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A3728] leading-tight">
              Rooted in Nature. <br />
              <span className="italic font-normal text-[#8C6547]">Validated by Science.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#5A3E2B] leading-relaxed">
              Pure Glow Naturals began as a small, home-based Indian artisanal venture with a singular purpose: to replace harsh commercial syndet bars filled with synthetic hardeners, sulfates, and fake perfumes with genuine, skin-soothing botanical care.
            </p>

            <p className="text-sm sm:text-base text-[#5A3E2B] leading-relaxed">
              Our flagship <strong>Pure Glow Handmade Soap</strong> unites pure vegetable glycerin, virgin cold-pressed coconut oil, wild forest honey from sustainable tribal beekeepers, and freshly harvested soothing aloe vera. Every batch is poured into wooden molds, cured slowly, and wrapped by hand in unbleached butter paper and recycled cardboard sleeves.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EBE4DC] space-y-1">
                <div className="flex items-center gap-2 font-serif font-bold text-xs text-[#4A3728]">
                  <span className="w-2 h-2 rounded-full bg-[#5F7F67]"></span>
                  <span>Pure Plant Glycerin</span>
                </div>
                <p className="text-[11px] text-[#8C6547] leading-relaxed">
                  Never stripped. Retains natural humectants that draw moisture to the skin during warm baths.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EBE4DC] space-y-1">
                <div className="flex items-center gap-2 font-serif font-bold text-xs text-[#4A3728]">
                  <span className="w-2 h-2 rounded-full bg-[#E892A2]"></span>
                  <span>Zero Single-Use Plastic</span>
                </div>
                <p className="text-[11px] text-[#8C6547] leading-relaxed">
                  Wrapped in unbleached butter paper & recycled paper sleeves for 100% backyard compostability.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EBE4DC] space-y-1">
                <div className="flex items-center gap-2 font-serif font-bold text-xs text-[#4A3728]">
                  <span className="w-2 h-2 rounded-full bg-[#8C6547]"></span>
                  <span>Raw Wild Honey</span>
                </div>
                <p className="text-[11px] text-[#8C6547] leading-relaxed">
                  Direct-trade forest honey rich in active enzymes, nourishing fatty acids, and natural antioxidants.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EBE4DC] space-y-1">
                <div className="flex items-center gap-2 font-serif font-bold text-xs text-[#4A3728]">
                  <span className="w-2 h-2 rounded-full bg-[#5F7F67]"></span>
                  <span>MoCRA § 608 Verified</span>
                </div>
                <p className="text-[11px] text-[#8C6547] leading-relaxed">
                  Full safety substantiation, CIR ingredient evaluations, and INCI transparency published openly.
                </p>
              </div>
            </div>

            {/* Link to Regulatory Report */}
            <div className="pt-2">
              <button
                id="about-view-dossier-button"
                onClick={onExploreSafetyDossier}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#4A3728] hover:text-[#8C6547] bg-[#FAF7F2] hover:bg-[#F5EFEB] border border-[#D8C7B8] px-4 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-[#5F7F67]" />
                <span>Read Our Full FDA Regulatory Dossier & MoCRA Safety Review →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
