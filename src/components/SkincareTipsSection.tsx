import React, { useState } from 'react';
import { SKINCARE_TIPS } from '../data/storeData';
import { SkincareTip } from '../types';
import { BookOpen, ArrowRight, X, Clock, CheckCircle2, Sparkles } from 'lucide-react';

export const SkincareTipsSection: React.FC = () => {
  const [selectedTip, setSelectedTip] = useState<SkincareTip | null>(null);

  return (
    <section id="skincare-tips-section" className="py-16 sm:py-24 bg-white border-b border-[#EBE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8EFE9] border border-[#CADCCB] text-[#3F5845] text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-[#5F7F67]" />
            <span>The Glow Journal & Rituals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A3728]">
            Botanical Skincare Wisdom
          </h2>
          <p className="text-sm text-[#8C6547]">
            Guidance from our artisanal workshop on soap preservation, barrier nutrition, and deciphering truthful cosmetic labeling.
          </p>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKINCARE_TIPS.map((tip) => (
            <article
              key={tip.id}
              onClick={() => setSelectedTip(tip)}
              className="group bg-[#FAF7F2] rounded-2xl border border-[#EBE4DC] overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-[#D8C7B8] transition-all cursor-pointer"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-white">
                <img
                  src={tip.image}
                  alt={tip.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#4A3728] shadow-2xs">
                  {tip.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#8C6547] font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{tip.readTime}</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#4A3728] group-hover:text-[#8C6547] transition-colors leading-snug">
                    {tip.title}
                  </h3>

                  <p className="text-xs text-[#5A3E2B] line-clamp-3 leading-relaxed">
                    {tip.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EBE4DC] flex items-center justify-between text-xs font-semibold text-[#8C6547] group-hover:text-[#4A3728]">
                  <span>Read Guide</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Full Article Reader Modal */}
        {selectedTip && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
            <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#EBE4DC] space-y-6 animate-in zoom-in-95">
              <button
                onClick={() => setSelectedTip(null)}
                className="absolute top-4 right-4 p-2 text-[#8C6547] hover:text-[#4A3728] hover:bg-[#FAF7F2] rounded-full transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 pr-8">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8C6547]">
                  <span className="uppercase font-bold">{selectedTip.category}</span>
                  <span>·</span>
                  <span>{selectedTip.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#4A3728]">
                  {selectedTip.title}
                </h2>
              </div>

              <div className="aspect-16/9 rounded-xl overflow-hidden">
                <img
                  src={selectedTip.image}
                  alt={selectedTip.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Paragraphs */}
              <div className="space-y-4 text-xs sm:text-sm text-[#5A3E2B] leading-relaxed">
                {selectedTip.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Key Takeaways Box */}
              <div className="p-4 bg-[#FAF7F2] border border-[#EBE4DC] rounded-xl space-y-2">
                <div className="text-xs font-serif font-bold text-[#4A3728] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#5F7F67]" />
                  <span>Key Ritual Takeaways</span>
                </div>
                <ul className="space-y-1.5 text-xs text-[#5A3E2B]">
                  {selectedTip.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#5F7F67] shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedTip(null)}
                  className="px-6 py-2.5 bg-[#4A3728] text-white text-xs font-semibold rounded-full hover:bg-[#362419] transition-colors cursor-pointer"
                >
                  Close Guide
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
