import React, { useState } from 'react';
import { Mail, Check, Copy, Sparkles, ArrowRight } from 'lucide-react';

interface NewsletterSectionProps {
  onCopyDiscount: (code: string) => void;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({ onCopyDiscount }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setIsSubscribed(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText('GLOW15');
    setIsCopied(true);
    onCopyDiscount('GLOW15');
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="newsletter-section" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#EBE4DC] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
        <div className="w-12 h-12 rounded-full bg-[#FCE7EC] mx-auto flex items-center justify-center text-[#8C6547]">
          <Mail className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A3728]">
            Join the Pure Glow Circle
          </h2>
          <p className="text-xs sm:text-sm text-[#8C6547] max-w-lg mx-auto leading-relaxed">
            Subscribe for <strong>15% off</strong> your first artisanal order, seasonal harvest alerts, and private batch releases. Zero spam, ever.
          </p>
        </div>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5">
            <input
              id="newsletter-email-input"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 text-xs sm:text-sm bg-white border border-[#D8C7B8] rounded-full text-[#4A3728] placeholder-[#8C6547]/60 focus:outline-hidden focus:ring-2 focus:ring-[#8C6547] shadow-xs"
            />
            <button
              id="newsletter-submit-button"
              type="submit"
              className="px-6 py-3 bg-[#4A3728] hover:bg-[#362419] text-[#FAF7F2] text-xs font-semibold rounded-full shadow-md transition-all cursor-pointer whitespace-nowrap active:scale-95"
            >
              Claim 15% Off
            </button>
          </form>
        ) : (
          <div className="max-w-md mx-auto bg-white border border-[#CADCCB] rounded-2xl p-5 shadow-xs space-y-3 animate-in zoom-in-95">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#3F5845]">
              <Sparkles className="w-4 h-4 text-[#5F7F67]" />
              <span>Welcome to the Pure Glow Circle!</span>
            </div>
            <p className="text-xs text-[#5A3E2B]">
              Here is your exclusive 15% welcome discount for your first handcrafted batch:
            </p>
            <div className="flex items-center justify-center gap-2 p-2.5 bg-[#FAF7F2] border border-[#EBE4DC] rounded-xl font-mono text-sm font-bold text-[#4A3728]">
              <span>GLOW15</span>
              <button
                type="button"
                onClick={handleCopyCode}
                className="p-1.5 hover:bg-white rounded-md text-[#8C6547] transition-colors cursor-pointer"
                title="Copy code"
              >
                {isCopied ? <Check className="w-4 h-4 text-[#5F7F67]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        )}

        <p className="text-[11px] text-[#8C6547]">
          By subscribing, you agree to receive handcrafted updates. Unsubscribe anytime in 1-click.
        </p>
      </div>
    </section>
  );
};
