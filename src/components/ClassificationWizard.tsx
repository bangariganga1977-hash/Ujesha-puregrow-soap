import React, { useState } from 'react';
import { Layers, CheckCircle2, AlertTriangle, ShieldAlert, Sparkles, ArrowRight, RotateCcw, Info, Scale } from 'lucide-react';

export const ClassificationWizard: React.FC = () => {
  // Configurable options
  const [baseType, setBaseType] = useState<'saponified' | 'glycerin_synthetic'>('glycerin_synthetic');
  const [cleansingAction, setCleansingAction] = useState<'soap_only' | 'mixed_detergents'>('mixed_detergents');
  const [claimsType, setClaimsType] = useState<'cleansing_only' | 'cosmetic_benefits' | 'therapeutic_disease'>('cosmetic_benefits');

  const loadPureGlowPreset = () => {
    setBaseType('glycerin_synthetic');
    setCleansingAction('mixed_detergents');
    setClaimsType('cosmetic_benefits');
  };

  const loadTraditionalSoapPreset = () => {
    setBaseType('saponified');
    setCleansingAction('soap_only');
    setClaimsType('cleansing_only');
  };

  const loadDrugPreset = () => {
    setBaseType('saponified');
    setCleansingAction('soap_only');
    setClaimsType('therapeutic_disease');
  };

  // Determine classification
  let classification: {
    category: string;
    agency: string;
    badgeColor: string;
    status: 'soap' | 'cosmetic' | 'drug';
    governingStatute: string;
    summary: string;
    pureGlowMatches: boolean;
    obligations: string[];
  };

  if (claimsType === 'therapeutic_disease') {
    classification = {
      category: "Over-the-Counter (OTC) Drug",
      agency: "U.S. FDA - Center for Drug Evaluation and Research (CDER)",
      badgeColor: "bg-rose-100 text-rose-900 border-rose-300",
      status: 'drug',
      governingStatute: "FD&C Act § 201(g)(1) (21 U.S.C. § 321(g)(1))",
      summary: "Because therapeutic or disease claims are made (such as eczema relief or antibacterial disease prevention), the product is regulated as an unapproved new drug regardless of its chemical soap composition.",
      pureGlowMatches: false,
      obligations: [
        "Drug establishment registration with FDA",
        "National Drug Code (NDC) assignment and drug listing",
        "Compliance with applicable OTC Drug Monographs or New Drug Application (NDA)",
        "Strict Drug Facts labeling panel (active ingredients, uses, warnings)"
      ]
    };
  } else if (baseType === 'saponified' && cleansingAction === 'soap_only' && claimsType === 'cleansing_only') {
    classification = {
      category: "Traditional Soap (Exempt from FDA)",
      agency: "U.S. Consumer Product Safety Commission (CPSC)",
      badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
      status: 'soap',
      governingStatute: "21 CFR § 701.20 & Consumer Product Safety Act (15 U.S.C. § 2051)",
      summary: "Meets all 3 prongs of 21 CFR § 701.20: nonvolatile matter is alkali salt of fatty acids, detergent action comes only from soap, and it is marketed exclusively for cleansing.",
      pureGlowMatches: false,
      obligations: [
        "Exempt from FDA cosmetic registration, MoCRA, and FDA ingredient listing",
        "Regulated under CPSC Federal Hazardous Substances Act (FHSA)",
        "Truthful consumer labeling under CPSC jurisdiction",
        "Safety under customary consumer use"
      ]
    };
  } else {
    // Cosmetic (default for Pure Glow)
    classification = {
      category: "Cosmetic Product (FDA Regulated)",
      agency: "U.S. FDA - Office of Cosmetics and Colors / MoCRA",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      status: 'cosmetic',
      governingStatute: "FD&C Act § 201(i) (21 U.S.C. § 321(i)) & MoCRA 2022",
      summary: "Fails the soap exemption because it uses a glycerin/surfactant base and/or is promoted with cosmetic representations ('moisturizing and soothing the skin'). This is Pure Glow Handmade Soap's official classification.",
      pureGlowMatches: true,
      obligations: [
        "Compliance with MoCRA Safety Substantiation (§ 608)",
        "Cosmetic labeling under 21 CFR Part 701 (INCI descending ingredients, dual net weight)",
        "Domestic U.S. contact for Serious Adverse Event Reporting (§ 607)",
        "Compliance with adulteration and Good Manufacturing Practices"
      ]
    };
  }

  return (
    <div id="classification-wizard-container" className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Title block */}
      <div id="classification-config-card" className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-stone-100 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold">
                Interactive Decision Engine
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-stone-100 text-stone-700 border border-stone-200">
                21 CFR § 701.20
              </span>
            </div>
            <h2 className="text-2xl font-bold text-stone-900 font-serif mt-1">
              FDA 3-Prong Soap vs. Cosmetic vs. Drug Classifier
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Test how formulation chemistry and marketing claims alter federal jurisdiction under U.S. law.
            </p>
          </div>

          <div id="classification-presets-group" className="flex flex-wrap items-center gap-2">
            <button
              id="preset-pure-glow-button"
              onClick={loadPureGlowPreset}
              className="px-3 py-1.5 text-xs font-medium rounded-md bg-stone-900 text-white hover:bg-stone-800 transition-colors cursor-pointer shadow-2xs"
            >
              ★ Pure Glow Scenario
            </button>
            <button
              id="preset-traditional-soap-button"
              onClick={loadTraditionalSoapPreset}
              className="px-3 py-1.5 text-xs font-medium rounded-md bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors cursor-pointer border border-stone-300"
            >
              Traditional CPSC Soap
            </button>
            <button
              id="preset-drug-preset-button"
              onClick={loadDrugPreset}
              className="px-3 py-1.5 text-xs font-medium rounded-md bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors cursor-pointer border border-stone-300"
            >
              Drug Claims Example
            </button>
          </div>
        </div>

        {/* 3 Step Interactive Configuration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Prong 1 */}
          <div id="prong-1-container" className="bg-stone-50 border border-stone-200 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stone-800 text-white flex items-center justify-center text-xs font-bold font-mono">
                1
              </span>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-800 font-mono">
                Prong 1: Base Chemistry
              </h3>
            </div>
            <p className="text-xs text-stone-500">
              What constitutes the bulk of the nonvolatile cleansing matter?
            </p>
            <div className="space-y-2 pt-1">
              <label htmlFor="radio-base-saponified" className={`block p-3 rounded-md border text-xs cursor-pointer transition-all ${
                baseType === 'saponified' ? 'border-stone-800 bg-white shadow-2xs' : 'border-stone-200 bg-stone-100/50 hover:bg-white text-stone-600'
              }`}>
                <input
                  id="radio-base-saponified"
                  type="radio"
                  name="baseType"
                  checked={baseType === 'saponified'}
                  onChange={() => setBaseType('saponified')}
                  className="sr-only"
                />
                <div className="font-semibold text-stone-900">Alkali Salts of Fatty Acids</div>
                <div className="text-[11px] text-stone-500 mt-0.5">True lye + vegetable/animal oils saponification only.</div>
              </label>

              <label htmlFor="radio-base-glycerin" className={`block p-3 rounded-md border text-xs cursor-pointer transition-all ${
                baseType === 'glycerin_synthetic' ? 'border-stone-800 bg-white shadow-2xs' : 'border-stone-200 bg-stone-100/50 hover:bg-white text-stone-600'
              }`}>
                <input
                  id="radio-base-glycerin"
                  type="radio"
                  name="baseType"
                  checked={baseType === 'glycerin_synthetic'}
                  onChange={() => setBaseType('glycerin_synthetic')}
                  className="sr-only"
                />
                <div className="font-semibold text-stone-900 flex items-center justify-between">
                  <span>Glycerin Base / Surfactant Blend</span>
                  <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-mono">Pure Glow</span>
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5">Melt-and-pour base, botanical oils, or synthetic detergents.</div>
              </label>
            </div>
          </div>

          {/* Prong 2 */}
          <div id="prong-2-container" className="bg-stone-50 border border-stone-200 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stone-800 text-white flex items-center justify-center text-xs font-bold font-mono">
                2
              </span>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-800 font-mono">
                Prong 2: Cleaning Mechanism
              </h3>
            </div>
            <p className="text-xs text-stone-500">
              Where does the detergent/cleansing action originate?
            </p>
            <div className="space-y-2 pt-1">
              <label htmlFor="radio-cleansing-soap-only" className={`block p-3 rounded-md border text-xs cursor-pointer transition-all ${
                cleansingAction === 'soap_only' ? 'border-stone-800 bg-white shadow-2xs' : 'border-stone-200 bg-stone-100/50 hover:bg-white text-stone-600'
              }`}>
                <input
                  id="radio-cleansing-soap-only"
                  type="radio"
                  name="cleansingAction"
                  checked={cleansingAction === 'soap_only'}
                  onChange={() => setCleansingAction('soap_only')}
                  className="sr-only"
                />
                <div className="font-semibold text-stone-900">Exclusively Soap Compounds</div>
                <div className="text-[11px] text-stone-500 mt-0.5">No synthetic detergents or extraneous cleansing aids.</div>
              </label>

              <label htmlFor="radio-cleansing-mixed" className={`block p-3 rounded-md border text-xs cursor-pointer transition-all ${
                cleansingAction === 'mixed_detergents' ? 'border-stone-800 bg-white shadow-2xs' : 'border-stone-200 bg-stone-100/50 hover:bg-white text-stone-600'
              }`}>
                <input
                  id="radio-cleansing-mixed"
                  type="radio"
                  name="cleansingAction"
                  checked={cleansingAction === 'mixed_detergents'}
                  onChange={() => setCleansingAction('mixed_detergents')}
                  className="sr-only"
                />
                <div className="font-semibold text-stone-900 flex items-center justify-between">
                  <span>Botanical Additives & Humectants</span>
                  <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-mono">Pure Glow</span>
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5">Coconut oil, honey humectants, aloe vera gel.</div>
              </label>
            </div>
          </div>

          {/* Prong 3 */}
          <div id="prong-3-container" className="bg-stone-50 border border-stone-200 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stone-800 text-white flex items-center justify-center text-xs font-bold font-mono">
                3
              </span>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-800 font-mono">
                Prong 3: Labeling & Claims
              </h3>
            </div>
            <p className="text-xs text-stone-500">
              How is the product marketed, advertised, and labeled?
            </p>
            <div className="space-y-2 pt-1">
              <label htmlFor="radio-claims-cleansing" className={`block p-2.5 rounded-md border text-xs cursor-pointer transition-all ${
                claimsType === 'cleansing_only' ? 'border-stone-800 bg-white shadow-2xs' : 'border-stone-200 bg-stone-100/50 hover:bg-white text-stone-600'
              }`}>
                <input
                  id="radio-claims-cleansing"
                  type="radio"
                  name="claimsType"
                  checked={claimsType === 'cleansing_only'}
                  onChange={() => setClaimsType('cleansing_only')}
                  className="sr-only"
                />
                <div className="font-semibold text-stone-900">Cleansing Only</div>
                <div className="text-[11px] text-stone-500 mt-0.5">Labeled solely as soap for washing.</div>
              </label>

              <label htmlFor="radio-claims-cosmetic" className={`block p-2.5 rounded-md border text-xs cursor-pointer transition-all ${
                claimsType === 'cosmetic_benefits' ? 'border-stone-800 bg-white shadow-2xs' : 'border-stone-200 bg-stone-100/50 hover:bg-white text-stone-600'
              }`}>
                <input
                  id="radio-claims-cosmetic"
                  type="radio"
                  name="claimsType"
                  checked={claimsType === 'cosmetic_benefits'}
                  onChange={() => setClaimsType('cosmetic_benefits')}
                  className="sr-only"
                />
                <div className="font-semibold text-stone-900 flex items-center justify-between">
                  <span>Moisturizing & Soothing</span>
                  <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-mono">Pure Glow</span>
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5">Skin softening, beautifying, hydration.</div>
              </label>

              <label htmlFor="radio-claims-drug" className={`block p-2.5 rounded-md border text-xs cursor-pointer transition-all ${
                claimsType === 'therapeutic_disease' ? 'border-stone-800 bg-white shadow-2xs' : 'border-stone-200 bg-stone-100/50 hover:bg-white text-stone-600'
              }`}>
                <input
                  id="radio-claims-drug"
                  type="radio"
                  name="claimsType"
                  checked={claimsType === 'therapeutic_disease'}
                  onChange={() => setClaimsType('therapeutic_disease')}
                  className="sr-only"
                />
                <div className="font-semibold text-stone-900 text-rose-800">Therapeutic / Disease Claims</div>
                <div className="text-[11px] text-stone-500 mt-0.5">Eczema cure, antibacterial, psoriasis.</div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Classification Verdict Card */}
      <div id="classification-verdict-card" className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <Scale className="w-6 h-6 text-stone-700" />
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
                Statutory Determination
              </span>
              <h3 className="text-xl font-bold text-stone-900 font-serif">
                Legal Classification Result
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${classification.badgeColor}`}>
              {classification.category}
            </span>
            {classification.pureGlowMatches && (
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300">
                Official Pure Glow Status
              </span>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-stone-50 p-3.5 rounded-lg border border-stone-200 space-y-1">
              <span className="text-stone-500 font-mono">Regulating Federal Agency:</span>
              <div className="text-sm font-bold text-stone-900">{classification.agency}</div>
            </div>
            <div className="bg-stone-50 p-3.5 rounded-lg border border-stone-200 space-y-1">
              <span className="text-stone-500 font-mono">Governing Statutory Citation:</span>
              <div className="text-sm font-bold text-stone-900 font-mono">{classification.governingStatute}</div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-stone-50 border-l-4 border-stone-800 text-xs sm:text-sm text-stone-800 leading-relaxed">
            <span className="font-bold text-stone-950">Statutory Rationale: </span>
            {classification.summary}
          </div>

          <div className="pt-4 border-t border-stone-100 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 font-mono">
              Mandatory Compliance Obligations Under this Category:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {classification.obligations.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-stone-50 p-2.5 rounded border border-stone-200 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Statutory Comparison Matrix */}
      <div id="statutory-comparison-matrix-card" className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
        <h3 className="text-base font-bold text-stone-900 font-serif mb-4">
          Federal Jurisdictional Comparison: Soap vs. Cosmetic vs. Drug
        </h3>
        <div className="overflow-x-auto">
          <table id="statutory-comparison-table" className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-600 font-mono uppercase">
                <th className="p-3">Attribute</th>
                <th className="p-3">Traditional Soap (CPSC)</th>
                <th className="p-3 bg-emerald-50 text-emerald-900 font-bold">Cosmetic (FDA / MoCRA)</th>
                <th className="p-3">OTC Drug (FDA CDER)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700">
              <tr>
                <td className="p-3 font-semibold text-stone-900">Regulatory Agency</td>
                <td className="p-3">Consumer Product Safety Commission (CPSC)</td>
                <td className="p-3 bg-emerald-50/50 font-semibold text-emerald-950">FDA (Center for Food Safety & Applied Nutrition)</td>
                <td className="p-3">FDA (Center for Drug Evaluation & Research)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Primary Statute</td>
                <td className="p-3">Consumer Product Safety Act (15 U.S.C. § 2051)</td>
                <td className="p-3 bg-emerald-50/50 font-semibold text-emerald-950">FD&C Act § 201(i) & MoCRA 2022</td>
                <td className="p-3">FD&C Act § 201(g) (21 U.S.C. § 321(g))</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Allowed Claims</td>
                <td className="p-3">Cleansing and washing only</td>
                <td className="p-3 bg-emerald-50/50 font-semibold text-emerald-950">Cleansing, moisturizing, soothing, scenting, beautifying</td>
                <td className="p-3">Treating, curing, preventing disease; altering bodily structure</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Ingredient Listing</td>
                <td className="p-3">Voluntary under CPSC (unless hazardous)</td>
                <td className="p-3 bg-emerald-50/50 font-semibold text-emerald-950">Mandatory descending INCI order (21 CFR § 701.3)</td>
                <td className="p-3">Mandatory Drug Facts panel with active/inactive lists</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">MoCRA Adverse Events</td>
                <td className="p-3">Exempt</td>
                <td className="p-3 bg-emerald-50/50 font-semibold text-emerald-950">Mandatory domestic contact for serious adverse events</td>
                <td className="p-3">Mandatory MedWatch FDA 3500A reporting</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Applicability to Pure Glow</td>
                <td className="p-3 text-stone-400">Not Applicable (Has moisturizing claims & glycerin base)</td>
                <td className="p-3 bg-emerald-100 font-bold text-emerald-900">★ EXACT MATCH (Pure Glow Handmade Soap)</td>
                <td className="p-3 text-stone-400">Avoid (Do not make medical/disease claims)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
