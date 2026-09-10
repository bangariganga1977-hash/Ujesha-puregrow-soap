import React, { useState } from 'react';
import { TabType, ChecklistItem } from './types';
import { CHECKLIST_DATA, REPORT_SECTIONS, REPORT_METADATA } from './data/reportData';
import { Navbar } from './components/Navbar';
import { ReportViewer } from './components/ReportViewer';
import { ClassificationWizard } from './components/ClassificationWizard';
import { ChecklistTracker } from './components/ChecklistTracker';
import { LabelInspector } from './components/LabelInspector';
import { ClaimChecker } from './components/ClaimChecker';
import { IngredientDossier } from './components/IngredientDossier';
import { ExecutiveBriefModal } from './components/ExecutiveBriefModal';
import { ShieldCheck, Printer, Download, BookOpen, Layers, CheckSquare, Sparkles, FileText, Award } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('report');
  const [checklist, setChecklist] = useState<ChecklistItem[]>(CHECKLIST_DATA);
  const [isExecutiveBriefOpen, setIsExecutiveBriefOpen] = useState<boolean>(false);

  const completedChecklistCount = checklist.filter(i => i.status === 'compliant').length;

  const handlePrint = () => {
    window.print();
  };

  const handleExportMarkdown = () => {
    let md = `# FDA REGULATORY REPORT: PURE GLOW HANDMADE SOAP\n`;
    md += `**Manufacturer:** ${REPORT_METADATA.manufacturer} (Indian Artisan Startup)\n`;
    md += `**Target Market:** ${REPORT_METADATA.targetMarket}\n`;
    md += `**Regulatory Status:** ${REPORT_METADATA.leadRegulatoryStatus}\n`;
    md += `**Document ID:** ${REPORT_METADATA.dossierId}\n\n`;
    md += `---\n\n`;

    REPORT_SECTIONS.forEach(sec => {
      md += `## ${sec.number}. ${sec.title}\n`;
      md += `*${sec.subtitle}*\n\n`;
      md += `> **Summary:** ${sec.summary}\n\n`;
      sec.content.forEach(p => {
        md += `${p}\n\n`;
      });
      if (sec.statutes && sec.statutes.length > 0) {
        md += `### Statutory Citations:\n`;
        sec.statutes.forEach(st => {
          md += `- **${st.name}** (${st.citation}): ${st.note}\n`;
        });
        md += `\n`;
      }
      md += `### Key Takeaways:\n`;
      sec.keyTakeaways.forEach(k => {
        md += `- ${k}\n`;
      });
      md += `\n---\n\n`;
    });

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'FDA_Report_Pure_Glow_Handmade_Soap.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-stone-100/60 text-stone-900 flex flex-col font-sans selection:bg-stone-800 selection:text-white">
      {/* Top Navigation & Action Controls */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onPrint={handlePrint}
        onExportMarkdown={handleExportMarkdown}
        onOpenQuickSummary={() => setIsExecutiveBriefOpen(true)}
        completedChecklistCount={completedChecklistCount}
        totalChecklistCount={checklist.length}
      />

      {/* Main Tab View Canvas */}
      <main id="main-content-canvas" className="flex-1 pb-16">
        {activeTab === 'report' && (
          <ReportViewer
            onNavigateToClassifier={() => setActiveTab('classifier')}
            onNavigateToChecklist={() => setActiveTab('checklist')}
          />
        )}

        {activeTab === 'classifier' && <ClassificationWizard />}

        {activeTab === 'checklist' && (
          <ChecklistTracker checklist={checklist} setChecklist={setChecklist} />
        )}

        {activeTab === 'label-inspector' && <LabelInspector />}

        {activeTab === 'claims' && <ClaimChecker />}

        {activeTab === 'ingredients' && <IngredientDossier />}
      </main>

      {/* Footer & Institutional Disclaimers */}
      <footer id="app-footer" className="bg-white border-t border-stone-200 py-8 px-4 sm:px-6 text-xs text-stone-500 print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-stone-800 font-serif font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Pure Glow Naturals • U.S. FDA Compliance Memorandum</span>
            </div>
            <p className="text-[11px] text-stone-400">
              Prepared pursuant to 21 CFR § 701, Modernization of Cosmetics Regulation Act of 2022 (MoCRA), and Fair Packaging and Labeling Act.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-mono text-stone-500">
            <span>Doc: FDA-PGN-2024</span>
            <span>•</span>
            <span>Origin: India</span>
            <span>•</span>
            <span>Jurisdiction: U.S. FDA & CPSC</span>
            <span>•</span>
            <button
              id="footer-print-button"
              onClick={handlePrint}
              className="hover:text-stone-900 underline underline-offset-2 cursor-pointer"
            >
              Print Version
            </button>
          </div>
        </div>
      </footer>

      {/* Executive Brief Quick Modal */}
      <ExecutiveBriefModal
        isOpen={isExecutiveBriefOpen}
        onClose={() => setIsExecutiveBriefOpen(false)}
        onPrint={handlePrint}
        onOpenChecklist={() => setActiveTab('checklist')}
      />
    </div>
  );
}
