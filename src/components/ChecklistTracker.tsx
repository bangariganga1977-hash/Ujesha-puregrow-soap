import React, { useState } from 'react';
import { ChecklistItem } from '../types';
import { CHECKLIST_DATA } from '../data/reportData';
import { CheckCircle2, Clock, AlertTriangle, Filter, RotateCcw, Download, Check, Sparkles } from 'lucide-react';

interface ChecklistTrackerProps {
  checklist: ChecklistItem[];
  setChecklist: React.Dispatch<React.SetStateAction<ChecklistItem[]>>;
}

export const ChecklistTracker: React.FC<ChecklistTrackerProps> = ({
  checklist,
  setChecklist
}) => {
  const [filter, setFilter] = useState<'all' | 'compliant' | 'in_progress' | 'action_needed'>('all');

  const updateStatus = (id: string, newStatus: 'compliant' | 'in_progress' | 'action_needed') => {
    setChecklist(prev =>
      prev.map(item => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const resetToDefault = () => {
    setChecklist(CHECKLIST_DATA);
  };

  const markAllCompliant = () => {
    setChecklist(prev => prev.map(item => ({ ...item, status: 'compliant' })));
  };

  const compliantCount = checklist.filter(i => i.status === 'compliant').length;
  const inProgressCount = checklist.filter(i => i.status === 'in_progress').length;
  const actionNeededCount = checklist.filter(i => i.status === 'action_needed').length;
  const progressPercent = Math.round((compliantCount / checklist.length) * 100);

  const filteredItems = checklist.filter(item => {
    if (filter === 'all') return true;
    return item.status === filter;
  });

  return (
    <div id="checklist-tracker-container" className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header card with progress meter */}
      <div id="checklist-tracker-header-card" className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-stone-100 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold">
                Section 8 Audit Engine
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-stone-100 text-stone-700 border border-stone-200">
                U.S. Market Launch
              </span>
            </div>
            <h2 className="text-2xl font-bold text-stone-900 font-serif mt-1">
              FDA & MoCRA Compliance Checklist
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Mandatory statutory prerequisites for Pure Glow Naturals prior to exporting commercial soap shipments to the United States.
            </p>
          </div>

          {/* Progress gauge */}
          <div id="checklist-progress-gauge" className="bg-stone-50 border border-stone-200 rounded-lg p-4 sm:min-w-[280px]">
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-xs font-bold text-stone-700 font-mono uppercase">Readiness Score</span>
              <span className="text-lg font-bold text-stone-900 font-mono">{progressPercent}%</span>
            </div>
            <div className="w-full h-2.5 bg-stone-200 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  progressPercent === 100 ? 'bg-emerald-600' : progressPercent >= 50 ? 'bg-amber-500' : 'bg-stone-800'
                }`}
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-[11px] text-stone-500 mt-2 font-mono">
              <span className="text-emerald-700 font-semibold">{compliantCount} Compliant</span>
              <span className="text-amber-700 font-semibold">{inProgressCount} In Progress</span>
              <span className="text-rose-700 font-semibold">{actionNeededCount} Action Required</span>
            </div>
          </div>
        </div>

        {/* Filter and bulk action bar */}
        <div id="checklist-action-toolbar" className="flex flex-wrap items-center justify-between gap-3 pt-4">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-mono text-stone-400 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {(['all', 'compliant', 'in_progress', 'action_needed'] as const).map(f => (
              <button
                key={f}
                id={`checklist-filter-${f.replace('_', '-')}`}
                onClick={() => setFilter(f)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer capitalize ${
                  filter === f
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {f.replace('_', ' ')}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              id="checklist-mark-all-compliant-button"
              onClick={markAllCompliant}
              className="text-xs text-stone-600 hover:text-stone-900 font-medium px-2 py-1 rounded hover:bg-stone-100 transition-colors cursor-pointer inline-flex items-center gap-1"
            >
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              Mark All Ready
            </button>
            <button
              id="checklist-reset-audit-button"
              onClick={resetToDefault}
              className="text-xs text-stone-500 hover:text-stone-800 font-medium px-2 py-1 rounded hover:bg-stone-100 transition-colors cursor-pointer inline-flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              Reset Audit
            </button>
          </div>
        </div>
      </div>

      {/* Checklist items list */}
      <div id="checklist-items-list" className="space-y-4">
        {filteredItems.map((item, index) => {
          const isCompliant = item.status === 'compliant';
          const isInProgress = item.status === 'in_progress';
          const isActionNeeded = item.status === 'action_needed';

          return (
            <div
              key={item.id}
              id={`checklist-item-card-${item.id}`}
              className={`bg-white border rounded-xl p-5 sm:p-6 shadow-xs transition-all ${
                isCompliant
                  ? 'border-emerald-200 hover:border-emerald-300'
                  : isInProgress
                  ? 'border-amber-200 hover:border-amber-300'
                  : 'border-rose-200 hover:border-rose-300'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200">
                      Step {index + 1} • {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-stone-500 bg-stone-50 px-1.5 py-0.5 rounded border border-stone-200">
                      {item.regulatoryReference}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-stone-900 font-serif">
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-700 leading-relaxed">
                    <strong className="text-stone-900">FDA Requirement: </strong>
                    {item.fdaRequirement}
                  </p>
                </div>

                {/* Status Toggle buttons */}
                <div className="flex items-center gap-1 shrink-0 bg-stone-100/80 p-1 rounded-lg border border-stone-200/80">
                  <button
                    id={`checklist-btn-compliant-${item.id}`}
                    onClick={() => updateStatus(item.id, 'compliant')}
                    className={`px-2.5 py-1 rounded text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                      isCompliant
                        ? 'bg-emerald-600 text-white shadow-2xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Compliant</span>
                  </button>

                  <button
                    id={`checklist-btn-in-progress-${item.id}`}
                    onClick={() => updateStatus(item.id, 'in_progress')}
                    className={`px-2.5 py-1 rounded text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                      isInProgress
                        ? 'bg-amber-500 text-white shadow-2xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">In Progress</span>
                  </button>

                  <button
                    id={`checklist-btn-action-needed-${item.id}`}
                    onClick={() => updateStatus(item.id, 'action_needed')}
                    className={`px-2.5 py-1 rounded text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                      isActionNeeded
                        ? 'bg-rose-600 text-white shadow-2xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Action Needed</span>
                  </button>
                </div>
              </div>

              {/* Two-column operational breakdown */}
              <div className="mt-4 pt-4 border-t border-stone-100 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-stone-50 p-3 rounded-lg border border-stone-200/70 space-y-1">
                  <span className="font-bold text-stone-800 font-mono text-[11px] uppercase">
                    Statutory Guidance & Citations
                  </span>
                  <p className="text-stone-600 leading-relaxed">{item.guidance}</p>
                </div>

                <div className="bg-amber-50/50 p-3 rounded-lg border border-amber-200/70 space-y-1">
                  <span className="font-bold text-amber-900 font-mono text-[11px] uppercase">
                    Pure Glow Naturals Implementation Action
                  </span>
                  <p className="text-amber-900 leading-relaxed font-medium">{item.pureGlowAction}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
