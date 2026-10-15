import React from 'react';
import { ShieldAlert, FileText, CheckSquare, Sparkles, Layers, Award, Printer, Download, BookOpen, HelpCircle } from 'lucide-react';
import { TabType } from '../types';
import { PureGlowLogo } from './PureGlowLogo';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onPrint: () => void;
  onExportMarkdown: () => void;
  onOpenQuickSummary: () => void;
  completedChecklistCount: number;
  totalChecklistCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onPrint,
  onExportMarkdown,
  onOpenQuickSummary,
  completedChecklistCount,
  totalChecklistCount
}) => {
  const tabs: { id: TabType; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'report', label: 'Formal Report (Sec 1–9)', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'classifier', label: 'Soap vs Cosmetic Classifier', icon: <Layers className="w-4 h-4" /> },
    { 
      id: 'checklist', 
      label: 'MoCRA Checklist', 
      icon: <CheckSquare className="w-4 h-4" />,
      badge: `${completedChecklistCount}/${totalChecklistCount}`
    },
    { id: 'label-inspector', label: 'Label & Packaging Review', icon: <FileText className="w-4 h-4" /> },
    { id: 'claims', label: 'Marketing Claim Verifier', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'ingredients', label: 'Ingredient Safety Dossier', icon: <Award className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs print:hidden">
      {/* Top Banner with Authority Metadata */}
      <div id="navbar-authority-banner" className="bg-stone-900 text-stone-300 text-xs px-4 py-2 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[11px] font-semibold border border-amber-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            REGULATORY DOSSIER: FDA-PGN-2024
          </span>
          <span className="hidden sm:inline text-stone-400 font-mono">|</span>
          <span className="text-stone-300 font-medium">Pure Glow Naturals • India to U.S. Import Compliance</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <span className="text-stone-400">
            Jurisdiction: <strong className="text-stone-200">U.S. FDA (21 CFR) / CPSC</strong>
          </span>
          <span className="hidden md:inline text-stone-400">
            Governing Statute: <strong className="text-stone-200">FD&C Act & MoCRA 2022</strong>
          </span>
          <button
            id="navbar-executive-brief-button"
            onClick={onOpenQuickSummary}
            className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-medium underline underline-offset-2 transition-colors cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            Executive Brief
          </button>
        </div>
      </div>

      {/* Main Title & Action Bar */}
      <div id="navbar-action-bar" className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <PureGlowLogo size="sm" showSubtitle={false} onClick={() => setActiveTab('store')} />
            <span id="badge-regulatory-status" className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
              Cosmetic Under MoCRA
            </span>
          </div>
          <p className="text-xs text-stone-500 mt-1">
            Official FDA Dossier, Ingredient Purity Audits & MoCRA Compliance for Pure Glow Soaps
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            id="navbar-return-to-store-button"
            onClick={() => setActiveTab('store')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-[#4A3728] text-white hover:bg-[#362419] transition-colors shadow-2xs cursor-pointer"
          >
            <span>Back to Store</span>
          </button>
          <button
            id="navbar-print-dossier-button"
            onClick={onPrint}
            title="Print or Save official PDF dossier"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-stone-300 text-stone-700 bg-white hover:bg-stone-50 hover:text-stone-900 transition-colors shadow-2xs cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-stone-600" />
            <span>Print Dossier</span>
          </button>
          <button
            id="navbar-export-text-button"
            onClick={onExportMarkdown}
            title="Export full report as structured markdown"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-stone-300 text-stone-700 bg-white hover:bg-stone-50 hover:text-stone-900 transition-colors shadow-2xs cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-stone-600" />
            <span>Export Text</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div id="navbar-tabs-container" className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav id="navbar-tabs" className="flex space-x-1 overflow-x-auto scrollbar-none py-1 border-t border-stone-100" aria-label="Tabs">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`nav-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-md whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    id={`nav-tab-badge-${tab.id}`}
                    className={`ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-mono font-semibold ${
                      isActive ? 'bg-stone-700 text-stone-200' : 'bg-stone-200 text-stone-700'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
