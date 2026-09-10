import React, { useState } from 'react';
import { REPORT_SECTIONS, REPORT_METADATA } from '../data/reportData';
import { Search, ChevronRight, Bookmark, Scale, AlertCircle, CheckCircle2, FileText, ArrowUpRight, Share2, Copy, Check } from 'lucide-react';

interface ReportViewerProps {
  onNavigateToClassifier: () => void;
  onNavigateToChecklist: () => void;
}

export const ReportViewer: React.FC<ReportViewerProps> = ({
  onNavigateToClassifier,
  onNavigateToChecklist
}) => {
  const [activeSectionId, setActiveSectionId] = useState<string>('sec-1');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const filteredSections = REPORT_SECTIONS.filter(section => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      section.title.toLowerCase().includes(q) ||
      section.subtitle.toLowerCase().includes(q) ||
      section.summary.toLowerCase().includes(q) ||
      section.content.some(p => p.toLowerCase().includes(q)) ||
      section.keyTakeaways.some(t => t.toLowerCase().includes(q))
    );
  });

  const handleCopySection = (sectionId: string, title: string, content: string[]) => {
    const textToCopy = `Section: ${title}\n\n${content.join('\n\n')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div id="report-viewer-container" className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Formal Header Block */}
      <div id="report-header-card" className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs mb-8 print:border-none print:shadow-none print:p-0">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 border-b border-stone-200 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 font-semibold">
                U.S. Regulatory Compliance Memorandum
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-stone-100 text-stone-700 border border-stone-200">
                OFFICIAL REPORT
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif tracking-tight">
              FDA Regulatory Report: Pure Glow Handmade Soap
            </h1>
            <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
              Legal review under the Federal Food, Drug, and Cosmetic Act (FD&C Act), 21 CFR § 701, and the Modernization of Cosmetics Regulation Act of 2022 (MoCRA) for Pure Glow Naturals.
            </p>
          </div>

          <div id="report-meta-box" className="bg-stone-50 border border-stone-200 rounded-lg p-3.5 sm:min-w-[260px] text-xs space-y-1.5 font-mono">
            <div className="flex justify-between text-stone-500">
              <span>Entity:</span>
              <span className="font-semibold text-stone-800">{REPORT_METADATA.manufacturer}</span>
            </div>
            <div className="flex justify-between text-stone-500">
              <span>Origin:</span>
              <span className="text-stone-800">{REPORT_METADATA.originCountry} (Artisanal Startup)</span>
            </div>
            <div className="flex justify-between text-stone-500">
              <span>Destination:</span>
              <span className="text-stone-800">{REPORT_METADATA.targetMarket}</span>
            </div>
            <div className="flex justify-between text-stone-500">
              <span>Classification:</span>
              <span className="font-semibold text-emerald-700">Cosmetic Product</span>
            </div>
            <div className="flex justify-between text-stone-500 pt-1 border-t border-stone-200">
              <span>Document ID:</span>
              <span className="text-stone-600">{REPORT_METADATA.dossierId}</span>
            </div>
          </div>
        </div>

        {/* Executive Summary Callout */}
        <div className="mt-6 bg-amber-50/70 border border-amber-200 rounded-lg p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <Scale className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-amber-950 font-serif">
                Key Regulatory Ruling for Pure Glow Naturals
              </h3>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                Under 21 CFR § 701.20, traditional soap is strictly limited to alkali salts of fatty acids sold solely for cleansing. Because Pure Glow Handmade Soap incorporates botanical extracts (coconut oil, raw honey, aloe vera) and is actively marketed for skin moisturizing and soothing, <strong>it is legally classified as an FDA-regulated cosmetic</strong>. It is subject to MoCRA safety substantiation, mandatory INCI labeling in descending weight order, dual metric/ounce net weight declarations, and strict prohibition of disease-related claims.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  id="report-nav-to-classifier-button"
                  onClick={onNavigateToClassifier}
                  className="text-xs font-semibold text-amber-800 hover:text-amber-950 underline underline-offset-2 inline-flex items-center gap-1 cursor-pointer"
                >
                  View 3-Prong Soap Classifier <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-amber-300">•</span>
                <button
                  id="report-nav-to-checklist-button"
                  onClick={onNavigateToChecklist}
                  className="text-xs font-semibold text-amber-800 hover:text-amber-950 underline underline-offset-2 inline-flex items-center gap-1 cursor-pointer"
                >
                  Go to 6-Step Launch Checklist <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout with Sticky Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Sidebar (TOC) */}
        <aside id="report-toc-sidebar" className="lg:col-span-4 sticky top-28 bg-white border border-stone-200 rounded-xl p-4 shadow-xs print:hidden space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
              Table of Contents
            </span>
            <span className="text-[11px] text-stone-400 font-mono">9 Sections</span>
          </div>

          {/* Quick Search */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5" />
            <input
              id="report-search-input"
              type="text"
              placeholder="Search report text, laws, terms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-md text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-1 focus:ring-stone-500 focus:bg-white"
            />
          </div>

          {/* Section Links */}
          <nav id="report-toc-nav" className="space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
            {filteredSections.map((sec) => {
              const isActive = activeSectionId === sec.id;
              return (
                <a
                  key={sec.id}
                  id={`toc-link-${sec.id}`}
                  href={`#${sec.id}`}
                  onClick={() => setActiveSectionId(sec.id)}
                  className={`group flex items-start gap-2.5 p-2 rounded-lg text-xs transition-all ${
                    isActive
                      ? 'bg-stone-900 text-white font-medium shadow-2xs'
                      : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                  }`}
                >
                  <span
                    className={`shrink-0 w-5 h-5 rounded flex items-center justify-center font-mono text-[10px] font-bold ${
                      isActive ? 'bg-stone-800 text-stone-200' : 'bg-stone-200 text-stone-700'
                    }`}
                  >
                    {sec.number}
                  </span>
                  <div className="truncate">
                    <div className="truncate">{sec.title}</div>
                    <div
                      className={`text-[10px] truncate ${
                        isActive ? 'text-stone-300' : 'text-stone-400'
                      }`}
                    >
                      {sec.subtitle}
                    </div>
                  </div>
                </a>
              );
            })}
            {filteredSections.length === 0 && (
              <p className="text-xs text-stone-400 text-center py-4">No sections match "{searchQuery}"</p>
            )}
          </nav>

          <div className="pt-2 border-t border-stone-100 text-[11px] text-stone-500 space-y-1">
            <div className="flex items-center gap-1 text-emerald-700 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Full text verified against FDA CFR Title 21</span>
            </div>
          </div>
        </aside>

        {/* Primary Sections Body */}
        <main id="report-sections-main" className="lg:col-span-8 space-y-10">
          {filteredSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs scroll-mt-24 print:border-none print:shadow-none print:p-0 print:mb-8"
            >
              {/* Section Header */}
              <div className="flex items-start justify-between gap-4 border-b border-stone-100 pb-4 mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-mono text-xs font-bold border border-stone-200">
                      Section {section.number}
                    </span>
                    <span className="text-xs font-mono text-stone-400 uppercase tracking-wider">
                      FDA Report
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif mt-1">
                    {section.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                    {section.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-1 shrink-0 print:hidden">
                  <button
                    id={`copy-section-button-${section.id}`}
                    onClick={() => handleCopySection(section.id, section.title, section.content)}
                    title="Copy section text"
                    className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-md transition-colors cursor-pointer"
                  >
                    {copiedSection === section.id ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Section Executive Summary Box */}
              <div className="mb-6 bg-stone-50 border-l-3 border-stone-700 p-3.5 rounded-r-md text-xs text-stone-700 leading-relaxed font-sans">
                <span className="font-semibold text-stone-900">Summary: </span>
                {section.summary}
              </div>

              {/* Section Content Paragraphs */}
              <div className="space-y-4 text-sm text-stone-800 leading-relaxed font-sans">
                {section.content.map((paragraph, idx) => {
                  // Style lists or key headings inside paragraph text
                  const isNumbered = /^[0-9]\./.test(paragraph);
                  const isLettered = /^[A-C]\./.test(paragraph);
                  const isBullet = paragraph.startsWith('•') || paragraph.startsWith('❌');

                  if (isNumbered || isLettered) {
                    return (
                      <div key={idx} className="pl-3 py-1 font-medium text-stone-900 bg-stone-50/50 rounded border-l-2 border-stone-300">
                        {paragraph}
                      </div>
                    );
                  }

                  if (isBullet) {
                    return (
                      <div
                        key={idx}
                        className={`pl-4 py-1 text-xs sm:text-sm ${
                          paragraph.includes('❌') ? 'text-rose-700 font-medium' : 'text-stone-700'
                        }`}
                      >
                        {paragraph}
                      </div>
                    );
                  }

                  return (
                    <p key={idx} className="text-stone-700">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Statutory Citations & Legal References */}
              {section.statutes && section.statutes.length > 0 && (
                <div className="mt-6 pt-5 border-t border-stone-100 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-600 uppercase tracking-wider font-mono">
                    <Scale className="w-3.5 h-3.5 text-stone-500" />
                    <span>Statutory Authority & Precedents</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {section.statutes.map((statute, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-stone-50 border border-stone-200/80 rounded-md p-2.5 text-xs space-y-0.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-stone-900">{statute.name}</span>
                          <span className="font-mono text-[10px] text-stone-500 bg-stone-200/60 px-1.5 py-0.2 rounded">
                            {statute.citation}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-600 leading-snug">{statute.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Section Key Takeaways */}
              <div className="mt-6 bg-stone-100/70 rounded-lg p-4 text-xs space-y-2">
                <div className="font-semibold text-stone-900 flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5 text-stone-600" />
                  <span>Compliance Takeaways for Pure Glow Naturals</span>
                </div>
                <ul className="space-y-1.5 text-stone-700">
                  {section.keyTakeaways.map((takeaway, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-600 mt-1.5 shrink-0"></span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};
