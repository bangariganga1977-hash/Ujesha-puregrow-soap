import React, { useState } from 'react';
import { FileText, Eye, CheckCircle2, AlertTriangle, Info, Box, Leaf, ShieldAlert } from 'lucide-react';

export const LabelInspector: React.FC = () => {
  const [activeSide, setActiveSide] = useState<'front' | 'back'>('front');
  const [mode, setMode] = useState<'compliant' | 'non_compliant'>('compliant');
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>('pdp_identity');

  const hotspots = {
    pdp_identity: {
      title: "Statement of Identity (21 CFR § 701.11)",
      rule: "Must appear on the Principal Display Panel (PDP) in bold, prominent type, generally parallel to the base of the container. Must use the common or customary name (e.g., 'Handmade Soap Bar' or 'Cleansing Bar').",
      pureGlowImplementation: "Pure Glow uses 'Handmade Moisturizing Soap Bar', which immediately alerts FDA that cosmetic benefits (moisturizing) are provided.",
      status: "Compliant"
    },
    pdp_net_weight: {
      title: "Dual Net Quantity of Contents (FPLA § 4 & 21 CFR § 701.13)",
      rule: "Must appear in the bottom 30% of the PDP, separated from surrounding text, expressed in both U.S. Customary units (ounces) and Metric units (grams/kilograms). Font size must meet minimum height thresholds based on surface area.",
      pureGlowImplementation: "'Net Wt. 3.5 oz (100 g)' placed cleanly in lower quadrant, satisfying both domestic and metric customs requirements.",
      status: "Compliant"
    },
    info_ingredients: {
      title: "INCI Ingredient Declaration (21 CFR § 701.3)",
      rule: "Ingredients must be declared in descending order of predominance by weight using standardized INCI terminology. Botanical ingredients must be cited by genus and species or accepted INCI common names.",
      pureGlowImplementation: "'Ingredients: Glycerin, Cocos Nucifera (Coconut) Oil, Mel (Honey), Aloe Barbadensis Leaf Juice.' Discloses all components truthfully without colloquial fluff.",
      status: "Compliant"
    },
    info_responsible_entity: {
      title: "Responsible Entity & MoCRA Contact (FD&C Act § 607)",
      rule: "Must state the business name and address (city, state, zip) of the manufacturer, packer, or distributor. MoCRA requires a domestic U.S. address, phone number, or electronic contact for serious adverse event reporting.",
      pureGlowImplementation: "Lists Indian manufacturing entity 'Pure Glow Naturals' plus designated U.S. Domestic Agent and adverse event reporting portal.",
      status: "Compliant"
    },
    packaging_sustainability: {
      title: "Sustainable Packaging Integrity (FD&C Act § 601(d))",
      rule: "Primary container (butter paper) must be food/cosmetic contact safe, free of deleterious substances, and provide humidity barrier against glycerin hygroscopic sweating.",
      pureGlowImplementation: "Primary vegetable greaseproof parchment protects soap from moisture and contamination, wrapped in 100% recycled unbleached kraft cardboard sleeve.",
      status: "Compliant"
    }
  };

  return (
    <div id="label-inspector-container" className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Overview Card */}
      <div id="label-inspector-header-card" className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-stone-100 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold">
                Section 5 & 6 Interactive Review
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-stone-100 text-stone-700 border border-stone-200">
                21 CFR Part 701 & FPLA
              </span>
            </div>
            <h2 className="text-2xl font-bold text-stone-900 font-serif mt-1">
              Packaging & Label Compliance Inspector
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Inspect the physical label mockup of Pure Glow Handmade Soap. Toggle between compliant formatting and common FDA violation traps.
            </p>
          </div>

          <div id="label-mode-controls" className="flex items-center gap-2">
            <button
              id="label-mode-compliant-button"
              onClick={() => setMode('compliant')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                mode === 'compliant'
                  ? 'bg-emerald-700 text-white shadow-2xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              Compliant Label
            </button>
            <button
              id="label-mode-violations-button"
              onClick={() => setMode('non_compliant')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                mode === 'non_compliant'
                  ? 'bg-rose-700 text-white shadow-2xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              Violation Traps
            </button>
          </div>
        </div>

        {/* Packaging Architecture Badge */}
        <div id="packaging-architecture-overview" className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-3 text-xs flex items-center gap-3">
            <Leaf className="w-5 h-5 text-emerald-700 shrink-0" />
            <div>
              <span className="font-bold text-stone-900 block font-mono text-[11px] uppercase">Primary Wrap</span>
              <span className="text-stone-600 text-[11px]">Vegetable butter paper / biodegradable parchment</span>
            </div>
          </div>
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-3 text-xs flex items-center gap-3">
            <Box className="w-5 h-5 text-amber-800 shrink-0" />
            <div>
              <span className="font-bold text-stone-900 block font-mono text-[11px] uppercase">Secondary Sleeve</span>
              <span className="text-stone-600 text-[11px]">100% Recycled Kraft Cardboard Sleeve</span>
            </div>
          </div>
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-3 text-xs flex items-center gap-3">
            <FileText className="w-5 h-5 text-stone-700 shrink-0" />
            <div>
              <span className="font-bold text-stone-900 block font-mono text-[11px] uppercase">Bulk Shipping</span>
              <span className="text-stone-600 text-[11px]">Corrugated cardboard cartons with moisture barrier</span>
            </div>
          </div>
        </div>

        {/* Visual Mockup & Rule Explanation Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Packaging Sleeve Canvas */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-500 font-mono uppercase">
                Interactive Packaging Sleeve Preview
              </span>
              <div id="label-side-controls" className="flex rounded-md bg-stone-100 p-0.5 border border-stone-200 text-xs">
                <button
                  id="label-side-front-button"
                  onClick={() => setActiveSide('front')}
                  className={`px-3 py-1 rounded font-medium cursor-pointer transition-colors ${
                    activeSide === 'front' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-600'
                  }`}
                >
                  Front (PDP)
                </button>
                <button
                  id="label-side-back-button"
                  onClick={() => setActiveSide('back')}
                  className={`px-3 py-1 rounded font-medium cursor-pointer transition-colors ${
                    activeSide === 'back' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-600'
                  }`}
                >
                  Back (Info Panel)
                </button>
              </div>
            </div>

            {/* Soap Box Sleeve Graphic */}
            <div id="label-sleeve-mockup" className={`relative rounded-xl border-2 p-6 sm:p-8 min-h-[360px] flex flex-col justify-between transition-all font-sans shadow-md ${
              mode === 'compliant'
                ? 'bg-amber-50/70 border-amber-800/30 text-stone-900'
                : 'bg-rose-50/70 border-rose-400 text-stone-900'
            }`}>
              {/* Sleeve Kraft Texture Banner */}
              <div className="absolute top-2 right-2 text-[10px] font-mono px-2 py-0.5 rounded bg-stone-900/10 text-stone-700 uppercase tracking-wider font-semibold">
                {activeSide === 'front' ? 'Principal Display Panel' : 'Information Panel'}
              </div>

              {activeSide === 'front' ? (
                // FRONT SLEEVE (PDP)
                <div className="space-y-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono tracking-widest uppercase text-stone-500 font-semibold mb-1">
                      Pure Glow Naturals
                    </div>
                    <h3 className="text-2xl font-bold font-serif text-stone-900 tracking-tight">
                      Pure Glow Handmade Soap
                    </h3>
                    
                    {mode === 'compliant' ? (
                      <button
                        id="hotspot-pdp-identity"
                        onClick={() => setSelectedHotspot('pdp_identity')}
                        className="mt-2 text-left block w-full p-2 rounded bg-amber-200/50 border border-amber-300 hover:bg-amber-200 transition-colors cursor-pointer group"
                      >
                        <div className="text-xs font-bold text-amber-950 font-serif flex items-center justify-between">
                          <span>Statement of Identity:</span>
                          <span className="text-[10px] font-mono bg-emerald-600 text-white px-1.5 py-0.2 rounded">
                            21 CFR § 701.11
                          </span>
                        </div>
                        <div className="text-sm font-semibold text-stone-900">
                          Handmade Moisturizing Soap Bar
                        </div>
                        <div className="text-[10px] text-stone-600">
                          Coconut Oil • Pure Honey • Aloe Vera Gel
                        </div>
                      </button>
                    ) : (
                      <div id="violation-pdp-drug-claim" className="mt-2 p-2 rounded bg-rose-200/70 border border-rose-300 text-left">
                        <div className="text-xs font-bold text-rose-900 flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>VIOLATION: Unapproved Drug Claim on PDP</span>
                        </div>
                        <div className="text-sm font-semibold text-rose-950 line-through">
                          "Miracle Eczema & Acne Healing Soap Bar"
                        </div>
                        <div className="text-[10px] text-rose-800 mt-0.5">
                          Trigger: Claims to treat eczema/acne reclassify product as an unapproved drug.
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="text-center py-3 border-y border-stone-300/60">
                      <p className="text-xs italic text-stone-600 font-serif">
                        "Gentle botanical cleansing crafted by Indian artisans for soft, nourished skin."
                      </p>
                    </div>

                    {mode === 'compliant' ? (
                      <button
                        id="hotspot-pdp-net-weight"
                        onClick={() => setSelectedHotspot('pdp_net_weight')}
                        className="w-full text-left p-2 rounded bg-amber-200/50 border border-amber-300 hover:bg-amber-200 transition-colors cursor-pointer group"
                      >
                        <div className="text-xs font-bold text-amber-950 flex items-center justify-between font-mono">
                          <span>Net Quantity of Contents (Lower 30% PDP):</span>
                          <span className="text-[10px] bg-emerald-600 text-white px-1.5 py-0.2 rounded font-mono">
                            FPLA § 4
                          </span>
                        </div>
                        <div className="text-sm font-bold text-stone-900 tracking-wide font-mono mt-0.5">
                          Net Wt. 3.5 oz (100 g)
                        </div>
                      </button>
                    ) : (
                      <div id="violation-pdp-net-weight" className="p-2 rounded bg-rose-200/70 border border-rose-300 text-left">
                        <div className="text-xs font-bold text-rose-900 flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>VIOLATION: Missing Dual Units</span>
                        </div>
                        <div className="text-sm font-bold text-rose-950 line-through font-mono">
                          "Approx 100 grams"
                        </div>
                        <div className="text-[10px] text-rose-800 mt-0.5">
                          Trigger: FPLA strictly mandates both US Customary (oz) and metric (g) units. "Approx" is forbidden.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                // BACK SLEEVE (INFORMATION PANEL)
                <div className="space-y-4 flex-1 flex flex-col justify-between text-xs">
                  <div>
                    {mode === 'compliant' ? (
                      <button
                        id="hotspot-info-ingredients"
                        onClick={() => setSelectedHotspot('info_ingredients')}
                        className="w-full text-left p-2.5 rounded bg-amber-200/50 border border-amber-300 hover:bg-amber-200 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-amber-950 font-mono text-[11px] uppercase">
                            Ingredients (INCI Format):
                          </span>
                          <span className="text-[10px] font-mono bg-emerald-600 text-white px-1.5 py-0.2 rounded">
                            21 CFR § 701.3
                          </span>
                        </div>
                        <div className="text-xs text-stone-800 leading-snug">
                          <strong>INGREDIENTS:</strong> Glycerin, Cocos Nucifera (Coconut) Oil, Mel (Honey), Aloe Barbadensis Leaf Juice.
                        </div>
                        <div className="text-[10px] text-stone-500 mt-1 font-mono">
                          Declared in descending order of predominance by weight.
                        </div>
                      </button>
                    ) : (
                      <div id="violation-info-ingredients" className="p-2.5 rounded bg-rose-200/70 border border-rose-300 text-left">
                        <div className="text-xs font-bold text-rose-900 flex items-center gap-1 mb-1">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>VIOLATION: Non-INCI Informal Terminology</span>
                        </div>
                        <div className="text-xs text-rose-950 line-through">
                          "Ingredients: Soap base, Organic coconut butter, Wild Forest Honey, Fresh Aloe Gel, Love."
                        </div>
                        <div className="text-[10px] text-rose-800 mt-1">
                          Trigger: Must declare recognized INCI botanical Latin names; marketing words and whimsical terms ("Love") are illegal in the ingredient block.
                        </div>
                      </div>
                    )}

                    <div className="mt-3 p-2 bg-stone-100/70 rounded border border-stone-200 text-[11px] text-stone-700">
                      <strong>DIRECTIONS:</strong> Wet hands or body, lather bar gently with warm water, apply foam to skin, and rinse thoroughly. Store on a draining soap dish to prolong bar life.
                    </div>
                  </div>

                  <div className="space-y-2">
                    {mode === 'compliant' ? (
                      <button
                        id="hotspot-info-responsible-entity"
                        onClick={() => setSelectedHotspot('info_responsible_entity')}
                        className="w-full text-left p-2 rounded bg-amber-200/50 border border-amber-300 hover:bg-amber-200 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="font-bold text-amber-950 font-mono text-[10px] uppercase">
                            Manufacturer & MoCRA Contact:
                          </span>
                          <span className="text-[10px] font-mono bg-emerald-600 text-white px-1.5 py-0.2 rounded">
                            MoCRA § 607
                          </span>
                        </div>
                        <div className="text-[11px] text-stone-800">
                          Manufactured by: Pure Glow Naturals, Kerala, India.
                        </div>
                        <div className="text-[11px] text-stone-800">
                          U.S. Agent / Adverse Events: 1-800-555-GLOW | safety@pureglownaturals.com
                        </div>
                      </button>
                    ) : (
                      <div id="violation-info-responsible-entity" className="p-2 rounded bg-rose-200/70 border border-rose-300 text-left">
                        <div className="text-xs font-bold text-rose-900 flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>VIOLATION: Missing Domestic U.S. Contact</span>
                        </div>
                        <div className="text-[11px] text-rose-950 line-through">
                          "Pure Glow Naturals, India (No US contact provided)"
                        </div>
                        <div className="text-[10px] text-rose-800 mt-0.5">
                          Trigger: MoCRA mandates a domestic contact for adverse event intake on the label.
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-[10px] text-stone-500 font-mono pt-1">
                      <span>Batch: PGN-2024-01</span>
                      <span>PAO: 12M</span>
                      <span className="flex items-center gap-1 text-emerald-700">
                        <Leaf className="w-3 h-3" /> Biodegradable Packaging
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <p className="text-[11px] text-stone-400 text-center font-mono">
              Click elements on the sleeve or tabs above to inspect individual FDA statutory requirements.
            </p>
          </div>

          {/* Regulatory Guidance Hotspot Inspector */}
          <div id="label-hotspots-guide" className="lg:col-span-6 space-y-4">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-bold text-stone-500 font-mono uppercase">
                FDA Rulebook Deep Dive
              </span>
              <h3 className="text-lg font-bold text-stone-900 font-serif">
                Labeling & Material Standards
              </h3>
            </div>

            <div className="space-y-3">
              {(Object.keys(hotspots) as Array<keyof typeof hotspots>).map((key) => {
                const item = hotspots[key];
                const isSelected = selectedHotspot === key;

                return (
                  <div
                    key={key}
                    id={`hotspot-rule-${key.replace('_', '-')}`}
                    onClick={() => setSelectedHotspot(key)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-stone-900 text-white shadow-xs border-stone-900'
                        : 'bg-white border-stone-200 hover:border-stone-300 text-stone-800'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className={`text-xs font-bold font-serif ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                        {item.title}
                      </h4>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                          isSelected
                            ? 'bg-stone-800 text-stone-300'
                            : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <p className={`text-xs leading-relaxed ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
                      {item.rule}
                    </p>

                    <div
                      className={`mt-2.5 pt-2 border-t text-xs ${
                        isSelected
                          ? 'border-stone-800 text-amber-300'
                          : 'border-stone-100 text-amber-900 font-medium'
                      }`}
                    >
                      <strong>Pure Glow Protocol: </strong>
                      {item.pureGlowImplementation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
