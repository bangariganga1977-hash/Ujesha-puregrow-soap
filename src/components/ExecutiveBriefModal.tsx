import React from 'react';
import { X, CheckCircle2, ShieldAlert, Award, FileText, Printer, ArrowRight } from 'lucide-react';
import { REPORT_METADATA } from '../data/reportData';

interface ExecutiveBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPrint: () => void;
  onOpenChecklist: () => void;
}

export const ExecutiveBriefModal: React.FC<ExecutiveBriefModalProps> = ({
  isOpen,
  onClose,
  onPrint,
  onOpenChecklist
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white border border-stone-200 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-md transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 font-bold">
              C-Level Regulatory Advisory
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300">
              EXECUTIVE BRIEF
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif mt-1">
            U.S. Market Entry Strategy: Pure Glow Handmade Soap
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Prepared for Pure Glow Naturals leadership regarding federal compliance under FDA, MoCRA, and CPSC.
          </p>
        </div>

        {/* Regulatory Ruling Banner */}
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 space-y-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider">
              Legal Classification Result
            </span>
          </div>
          <p className="text-sm font-semibold">
            {REPORT_METADATA.leadRegulatoryStatus}
          </p>
          <p className="text-xs text-emerald-900/90 leading-relaxed">
            {REPORT_METADATA.regulatoryReasoning}
          </p>
        </div>

        {/* 5 Critical Action Steps */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 font-mono">
            Top 5 Mandatory Action Items for U.S. Distribution:
          </h4>

          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 flex items-start gap-2.5">
              <span className="font-mono font-bold text-stone-800 shrink-0">1.</span>
              <div>
                <strong className="text-stone-900">Dual Metric/Ounce Net Quantity: </strong>
                Ensure the front cardboard sleeve includes "Net Wt. 3.5 oz (100 g)" in the lower 30% of the front panel.
              </div>
            </div>

            <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 flex items-start gap-2.5">
              <span className="font-mono font-bold text-stone-800 shrink-0">2.</span>
              <div>
                <strong className="text-stone-900">Standardized INCI Ingredient List: </strong>
                List ingredients in descending order by weight: <em>Glycerin, Cocos Nucifera (Coconut) Oil, Mel (Honey), Aloe Barbadensis Leaf Juice</em>.
              </div>
            </div>

            <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 flex items-start gap-2.5">
              <span className="font-mono font-bold text-stone-800 shrink-0">3.</span>
              <div>
                <strong className="text-stone-900">Sanitize Instagram & Website Copy: </strong>
                Emphasize gentle cleansing and moisturizing. Avoid referencing eczema relief, acne eradication, or antibacterial claims.
              </div>
            </div>

            <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 flex items-start gap-2.5">
              <span className="font-mono font-bold text-stone-800 shrink-0">4.</span>
              <div>
                <strong className="text-stone-900">Designate Domestic U.S. Contact: </strong>
                Provide a U.S. address, phone, or website on the label to receive consumer adverse event reports under MoCRA Section 607.
              </div>
            </div>

            <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 flex items-start gap-2.5">
              <span className="font-mono font-bold text-stone-800 shrink-0">5.</span>
              <div>
                <strong className="text-stone-900">Safety & Sanitation Substantiation File: </strong>
                Retain batch records, supplier CoAs, and microbial test results for honey and aloe vera for at least 3 years.
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenChecklist();
            }}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-stone-900 text-white hover:bg-stone-800 transition-colors cursor-pointer inline-flex items-center gap-1.5"
          >
            <span>Open MoCRA Checklist</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onPrint}
              className="px-3.5 py-2 text-xs font-medium rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-50 transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5 text-stone-600" />
              <span>Print Official Dossier</span>
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-medium rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
