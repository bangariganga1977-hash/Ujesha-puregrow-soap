export type TabType = 'report' | 'classifier' | 'checklist' | 'label-inspector' | 'claims' | 'ingredients';

export interface ReportSection {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  summary: string;
  content: string[];
  statutes?: { name: string; citation: string; note: string }[];
  keyTakeaways: string[];
}

export interface ChecklistItem {
  id: string;
  category: string;
  title: string;
  fdaRequirement: string;
  status: 'compliant' | 'in_progress' | 'action_needed';
  regulatoryReference: string;
  guidance: string;
  pureGlowAction: string;
}

export interface IngredientInfo {
  commonName: string;
  inciName: string;
  casNumber: string;
  origin: string;
  function: string;
  fdaStatus: string;
  cirRating: 'Safe as used' | 'Safe with qualifications';
  allergensNotes: string;
  labelPositionRecommendation: string;
}

export interface ClaimEvaluation {
  id: string;
  claimText: string;
  category: 'Cosmetic (Compliant)' | 'Unsubstantiated / High Risk' | 'Drug Claim (Violation)';
  status: 'allowed' | 'warning' | 'prohibited';
  fdaRationale: string;
  suggestedRevision?: string;
}
