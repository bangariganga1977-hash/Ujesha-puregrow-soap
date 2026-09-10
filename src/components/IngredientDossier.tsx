import React, { useState } from 'react';
import { INGREDIENT_DOSSIER } from '../data/reportData';
import { IngredientInfo } from '../types';
import { Award, ShieldCheck, AlertCircle, FileCheck, Info, Sparkles, TestTube } from 'lucide-react';

export const IngredientDossier: React.FC = () => {
  const [selectedIngredient, setSelectedIngredient] = useState<IngredientInfo>(INGREDIENT_DOSSIER[0]);

  return (
    <div id="ingredient-dossier-container" className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Header card */}
      <div id="ingredient-dossier-header-card" className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-stone-100 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold">
                Section 4 & MoCRA Section 608
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-stone-100 text-stone-700 border border-stone-200">
                Safety Substantiation
              </span>
            </div>
            <h2 className="text-2xl font-bold text-stone-900 font-serif mt-1">
              Ingredient Safety & INCI Regulatory Dossier
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Comprehensive toxicology, INCI nomenclature, CIR safety classifications, and microbiological requirements for Pure Glow formulation components.
            </p>
          </div>

          <div id="ingredient-formulation-count-badge" className="flex items-center gap-2 text-xs font-mono bg-stone-50 border border-stone-200 px-3 py-1.5 rounded-lg text-stone-700">
            <TestTube className="w-4 h-4 text-emerald-600" />
            <span>Formulation: <strong>4 Core Components</strong></span>
          </div>
        </div>

        {/* Ingredient Navigation Cards */}
        <div id="ingredient-selector-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {INGREDIENT_DOSSIER.map((item) => {
            const isSelected = selectedIngredient.commonName === item.commonName;
            const slug = item.commonName.toLowerCase().replace(/[^a-z0-9]/g, '-');
            return (
              <button
                key={item.commonName}
                id={`ingredient-tab-${slug}`}
                onClick={() => setSelectedIngredient(item)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-stone-900 text-white shadow-xs border-stone-900'
                    : 'bg-stone-50 border-stone-200 hover:bg-white text-stone-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-mono uppercase font-bold ${isSelected ? 'text-amber-300' : 'text-stone-500'}`}>
                    CAS {item.casNumber.split(' ')[0]}
                  </span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                    isSelected ? 'bg-stone-800 text-stone-300' : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {item.cirRating}
                  </span>
                </div>
                <div className="font-bold text-sm font-serif truncate">{item.commonName}</div>
                <div className={`text-[11px] truncate mt-0.5 font-mono ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                  {item.inciName}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detailed Technical Profile Card */}
      <div id="ingredient-technical-profile-card" className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
        <div className="border-b border-stone-100 pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
              Selected Toxicological & INCI Record
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif mt-0.5">
              {selectedIngredient.commonName}
            </h3>
            <p className="text-xs font-mono text-stone-600 mt-0.5">
              Standardized INCI: <strong>{selectedIngredient.inciName}</strong>
            </p>
          </div>

          <span id="ingredient-cir-badge" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-900 border border-emerald-300 self-start sm:self-auto">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            CIR: {selectedIngredient.cirRating}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
          {/* Left Column: Chemistry & Origin */}
          <div className="space-y-4">
            <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 space-y-2">
              <h4 className="font-bold text-stone-900 font-mono text-[11px] uppercase">
                Chemical Identification & Natural Origin
              </h4>
              <div className="grid grid-cols-2 gap-2 text-stone-700">
                <div>
                  <span className="text-stone-400 text-[10px] block">CAS Number:</span>
                  <span className="font-mono font-semibold text-stone-900">{selectedIngredient.casNumber}</span>
                </div>
                <div>
                  <span className="text-stone-400 text-[10px] block">Botanical / Source:</span>
                  <span className="font-semibold text-stone-900">{selectedIngredient.origin}</span>
                </div>
              </div>
              <div className="pt-2 border-t border-stone-200/60">
                <span className="text-stone-400 text-[10px] block">Function in Formulation:</span>
                <span className="font-medium text-stone-800">{selectedIngredient.function}</span>
              </div>
            </div>

            <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 space-y-1.5">
              <h4 className="font-bold text-stone-900 font-mono text-[11px] uppercase">
                FDA Regulatory & CIR Safety Status
              </h4>
              <p className="text-stone-700">{selectedIngredient.fdaStatus}</p>
            </div>
          </div>

          {/* Right Column: Artisan Adulteration & Microbiological Controls */}
          <div className="space-y-4">
            <div className="bg-amber-50/60 border border-amber-200 rounded-lg p-4 space-y-2">
              <h4 className="font-bold text-amber-950 font-mono text-[11px] uppercase flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-800" />
                <span>Microbial Risk & Artisan Quality Control</span>
              </h4>
              <p className="text-amber-900 text-xs">{selectedIngredient.allergensNotes}</p>
              <div className="text-[11px] text-amber-800 pt-1 font-sans">
                <strong>MoCRA Directive: </strong> Home-based startups must retain supplier Certificates of Analysis (CoAs) verifying low bioburden and absence of heavy metals/pesticides.
              </div>
            </div>

            <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 space-y-1.5">
              <h4 className="font-bold text-stone-900 font-mono text-[11px] uppercase">
                Labeling Hierarchy Recommendation
              </h4>
              <div className="text-stone-800 font-mono font-semibold">
                {selectedIngredient.labelPositionRecommendation}
              </div>
              <p className="text-stone-500 text-[11px]">
                Under 21 CFR § 701.3, ingredients above 1% must appear in strict descending weight order.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Substantiation File Blueprint for MoCRA */}
      <div id="mocra-safety-dossier-card" className="bg-stone-900 text-white rounded-xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <FileCheck className="w-5 h-5 text-amber-400" />
          <h3 className="text-lg font-bold font-serif">
            Pure Glow Safety Dossier Requirements (MoCRA § 608 Checklist)
          </h3>
        </div>
        <p className="text-xs text-stone-300 leading-relaxed max-w-4xl">
          To satisfy the federal mandate for "adequate substantiation of safety," Pure Glow Naturals must compile and archive the following documentation for at least three (3) years prior to distribution:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2">
          <div className="bg-stone-800/80 p-3.5 rounded-lg border border-stone-700 space-y-1">
            <span className="font-mono text-amber-400 font-bold block text-[11px]">1. Raw Material CoAs</span>
            <p className="text-stone-300 text-[11px]">Supplier certificates confirming purity, origin, and absence of lead, arsenic, and mercury.</p>
          </div>
          <div className="bg-stone-800/80 p-3.5 rounded-lg border border-stone-700 space-y-1">
            <span className="font-mono text-amber-400 font-bold block text-[11px]">2. Microbial & Stability Logs</span>
            <p className="text-stone-300 text-[11px]">Testing verifying raw honey and aloe vera water-activity do not promote mold or bacterial growth during storage.</p>
          </div>
          <div className="bg-stone-800/80 p-3.5 rounded-lg border border-stone-700 space-y-1">
            <span className="font-mono text-amber-400 font-bold block text-[11px]">3. Standard Operating Procedures</span>
            <p className="text-stone-300 text-[11px]">Documented batch records and kitchen/workshop sanitation logs proving product is not adulterated under § 601.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
