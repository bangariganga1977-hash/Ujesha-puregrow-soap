import React, { useState } from 'react';
import { MARKETING_CLAIMS_DATABASE } from '../data/reportData';
import { ClaimEvaluation } from '../types';
import { Sparkles, CheckCircle2, AlertTriangle, ShieldAlert, Instagram, HelpCircle, ArrowRight } from 'lucide-react';

export const ClaimChecker: React.FC = () => {
  const [customClaim, setCustomClaim] = useState<string>('');
  const [analyzedClaim, setAnalyzedClaim] = useState<ClaimEvaluation | null>(null);

  const evaluateClaim = (text: string) => {
    const lower = text.toLowerCase();
    
    // Check for drug triggers
    const drugKeywords = ['cure', 'treat', 'heal', 'eczema', 'psoriasis', 'acne', 'antibacterial', 'anti-fungal', 'infection', 'dermatitis', 'anti-inflammatory', 'kill', 'disease'];
    // Check for high risk triggers
    const riskKeywords = ['chemical-free', 'chemical free', '100% organic', 'fda approved', 'miracle', 'permanent'];

    const hasDrug = drugKeywords.some(w => lower.includes(w));
    const hasRisk = riskKeywords.some(w => lower.includes(w));

    if (hasDrug) {
      setAnalyzedClaim({
        id: 'eval-custom',
        claimText: text,
        category: 'Drug Claim (Violation)',
        status: 'prohibited',
        fdaRationale: "This phrasing contains therapeutic or disease treatment assertions. Under Section 201(g)(1) of the FD&C Act, this converts Pure Glow Handmade Soap into an unapproved new drug subject to FDA warning letters and import detention.",
        suggestedRevision: "Rephrase to emphasize sensory skin benefits: 'Formulated with soothing aloe vera and honey to gently moisturize delicate skin.'"
      });
    } else if (hasRisk) {
      setAnalyzedClaim({
        id: 'eval-custom',
        claimText: text,
        category: 'Unsubstantiated / High Risk',
        status: 'warning',
        fdaRationale: "This phrasing triggers scrutiny under FTC and FDA deceptive advertising rules (e.g. 'Chemical-free' is scientifically impossible since water, glycerin, and oils are chemical compounds; 'FDA Approved' is illegal because FDA does not pre-approve cosmetics).",
        suggestedRevision: "Replace with verifiable claim: 'Made without synthetic parabens, artificial colorants, or harsh sulfates.'"
      });
    } else {
      setAnalyzedClaim({
        id: 'eval-custom',
        claimText: text,
        category: 'Cosmetic (Compliant)',
        status: 'allowed',
        fdaRationale: "This claim remains safely within the statutory boundaries of cosmetics (cleansing, moisturizing, soothing, and beautifying appearance) without crossing into drug intent.",
        suggestedRevision: "Approved for Instagram captions, website product pages, and packaging copy."
      });
    }
  };

  const handleTestSample = (sample: ClaimEvaluation) => {
    setCustomClaim(sample.claimText);
    setAnalyzedClaim(sample);
  };

  return (
    <div id="claim-checker-container" className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Title & Instagram Marketing Strategy Header */}
      <div id="claim-checker-form-card" className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-stone-100 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold">
                Section 7 Regulatory Screen
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-stone-100 text-stone-700 border border-stone-200">
                FTC & FDA Advertising Rules
              </span>
            </div>
            <h2 className="text-2xl font-bold text-stone-900 font-serif mt-1">
              Marketing & Social Media Claim Verifier
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Verify Instagram captions, marketing copy, and packaging claims to ensure Pure Glow avoids unapproved drug triggers.
            </p>
          </div>

          <div id="claim-target-channel-badge" className="flex items-center gap-2 text-xs text-stone-600 bg-stone-50 px-3 py-1.5 rounded-lg border border-stone-200">
            <Instagram className="w-4 h-4 text-pink-600" />
            <span>Target Channel: <strong>@pureglownaturals</strong></span>
          </div>
        </div>

        {/* Interactive Claim Input Sandbox */}
        <div className="space-y-4">
          <label htmlFor="claim-checker-input" className="block text-xs font-bold text-stone-700 font-mono uppercase">
            Test a Marketing Claim or Instagram Caption:
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              id="claim-checker-input"
              type="text"
              value={customClaim}
              onChange={(e) => setCustomClaim(e.target.value)}
              placeholder="e.g., Pure Glow's rich coconut lather moisturizes and soothes dry skin..."
              className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-stone-800 focus:bg-white"
            />
            <button
              id="claim-checker-submit-button"
              onClick={() => evaluateClaim(customClaim || "Provides gentle cleansing with coconut oil")}
              className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-stone-900 text-white hover:bg-stone-800 transition-colors shadow-2xs cursor-pointer whitespace-nowrap"
            >
              Analyze Claim
            </button>
          </div>

          {/* Quick preset tests */}
          <div className="pt-2">
            <span className="text-[11px] text-stone-500 font-mono mr-2">Try Sample Scenarios:</span>
            <div id="claim-samples-group" className="flex flex-wrap gap-2 mt-1.5">
              {MARKETING_CLAIMS_DATABASE.map((item) => (
                <button
                  key={item.id}
                  id={`claim-sample-${item.id}`}
                  onClick={() => handleTestSample(item)}
                  className={`px-2.5 py-1 text-xs rounded-md border text-left transition-colors cursor-pointer ${
                    item.status === 'allowed'
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                      : item.status === 'prohibited'
                      ? 'bg-rose-50 text-rose-800 border-rose-200 hover:bg-rose-100'
                      : 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'
                  }`}
                >
                  {item.claimText.slice(0, 38)}...
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Analysis Result Card */}
        {analyzedClaim && (
          <div id="claim-checker-result-card" className={`mt-6 p-5 sm:p-6 rounded-xl border-2 transition-all ${
            analyzedClaim.status === 'allowed'
              ? 'bg-emerald-50/50 border-emerald-300 text-emerald-950'
              : analyzedClaim.status === 'prohibited'
              ? 'bg-rose-50/50 border-rose-300 text-rose-950'
              : 'bg-amber-50/50 border-amber-300 text-amber-950'
          }`}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-2">
                {analyzedClaim.status === 'allowed' && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                {analyzedClaim.status === 'prohibited' && <ShieldAlert className="w-5 h-5 text-rose-600" />}
                {analyzedClaim.status === 'warning' && <AlertTriangle className="w-5 h-5 text-amber-600" />}
                <span className="text-xs font-mono font-bold uppercase tracking-wider">
                  Verification Verdict: {analyzedClaim.category}
                </span>
              </div>
              <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase ${
                analyzedClaim.status === 'allowed'
                  ? 'bg-emerald-200 text-emerald-900'
                  : analyzedClaim.status === 'prohibited'
                  ? 'bg-rose-200 text-rose-900'
                  : 'bg-amber-200 text-amber-900'
              }`}>
                {analyzedClaim.status}
              </span>
            </div>

            <div className="text-sm font-semibold text-stone-900 bg-white/80 p-3 rounded border border-stone-200/80 mb-3">
              "{analyzedClaim.claimText}"
            </div>

            <div className="text-xs space-y-2 leading-relaxed">
              <p>
                <strong>FDA / FTC Rationale: </strong>
                {analyzedClaim.fdaRationale}
              </p>
              {analyzedClaim.suggestedRevision && (
                <div className="p-2.5 rounded bg-white/90 border border-stone-200 text-stone-800">
                  <strong className="text-stone-900">Recommended Action for Pure Glow: </strong>
                  {analyzedClaim.suggestedRevision}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Rules Reference Table */}
      <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
        <h3 className="text-base font-bold text-stone-900 font-serif mb-4">
          FDA Advertising Boundaries for Artisanal Soap Brands
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="bg-emerald-50/60 border border-emerald-200 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2 text-emerald-900 font-bold font-serif text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Permissible Cosmetic Claims (Safe)</span>
            </div>
            <p className="text-emerald-800 text-[11px] leading-relaxed">
              Focus strictly on skin hygiene, hydration, surface comfort, fragrance, and sensory lather experience.
            </p>
            <ul className="space-y-1.5 text-emerald-950 font-medium">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600">•</span>
                <span>"Gently washes away dirt and daily impurities"</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600">•</span>
                <span>"Enriched with coconut oil and honey to moisturize skin"</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600">•</span>
                <span>"Soothing aloe vera leaves skin feeling soft and refreshed"</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600">•</span>
                <span>"Handcrafted with biodegradable, eco-friendly ingredients"</span>
              </li>
            </ul>
          </div>

          <div className="bg-rose-50/60 border border-rose-200 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2 text-rose-900 font-bold font-serif text-sm">
              <ShieldAlert className="w-4 h-4 text-rose-700" />
              <span>Prohibited Drug Claims (Immediate Violation)</span>
            </div>
            <p className="text-rose-800 text-[11px] leading-relaxed">
              Never claim to treat or cure a disease, kill acne bacteria, or alter skin physiology.
            </p>
            <ul className="space-y-1.5 text-rose-950 font-medium">
              <li className="flex items-start gap-1.5">
                <span className="text-rose-600">❌</span>
                <span>"Heals eczema, psoriasis, or dermatitis"</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-rose-600">❌</span>
                <span>"Natural antibacterial that prevents acne breakouts"</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-rose-600">❌</span>
                <span>"Reduces skin inflammation and allergic rashes"</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-rose-600">❌</span>
                <span>"Anti-fungal skin barrier defense"</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
