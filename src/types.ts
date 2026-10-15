export type TabType = 'store' | 'report' | 'classifier' | 'checklist' | 'label-inspector' | 'claims' | 'ingredients';

export type ProductCategory = 'all' | 'bestsellers' | 'face-care' | 'body-care' | 'hair-care';

export interface Product {
  id: string;
  name: string;
  category: 'face-care' | 'body-care' | 'hair-care';
  isBestseller?: boolean;
  isNew?: boolean;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  weightVolume: string; // e.g. "100g / 3.5 oz"
  tagline: string;
  image: string;
  ingredientsSnippet: string; // concise for card
  keyIngredients: {
    name: string;
    inci: string;
    benefit: string;
  }[];
  fullInci: string[];
  benefits: string[];
  skinType: string;
  scentProfile: string;
  howToUse: string;
  fdaNote?: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  verifiedBuyer: boolean;
  productName: string;
  title: string;
  comment: string;
  skinType: string;
  avatarBg?: string;
}

export interface SkincareTip {
  id: string;
  title: string;
  readTime: string;
  category: string;
  summary: string;
  image: string;
  content: string[];
  keyTakeaways: string[];
}

export interface InstagramPost {
  id: string;
  handle: string;
  image: string;
  caption: string;
  likes: number;
  productTag: string;
  productId: string;
}

export interface OrderDetails {
  orderId: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  shippingAddress: {
    fullName: string;
    email: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  shippingMethod: string;
  paymentMethod: string;
}

// Regulatory Types for the FDA Dossier
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
