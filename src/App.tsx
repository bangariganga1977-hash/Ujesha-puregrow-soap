import React, { useState } from 'react';
import { TabType, ProductCategory, Product, CartItem, OrderDetails, ChecklistItem } from './types';
import { STORE_PRODUCTS, STORE_POLICIES } from './data/storeData';
import { CHECKLIST_DATA, REPORT_SECTIONS, REPORT_METADATA } from './data/reportData';

// Store Components
import { StoreHeader } from './components/StoreHeader';
import { StoreHero } from './components/StoreHero';
import { ProductCatalogSection } from './components/ProductCatalogSection';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { SkincareTipsSection } from './components/SkincareTipsSection';
import { PoliciesSection } from './components/PoliciesSection';
import { InstagramFeed } from './components/InstagramFeed';
import { NewsletterSection } from './components/NewsletterSection';
import { StoreFooter } from './components/StoreFooter';
import { MobileStickyBar } from './components/MobileStickyBar';

// Regulatory Dossier Components
import { Navbar } from './components/Navbar';
import { ReportViewer } from './components/ReportViewer';
import { ClassificationWizard } from './components/ClassificationWizard';
import { ChecklistTracker } from './components/ChecklistTracker';
import { LabelInspector } from './components/LabelInspector';
import { ClaimChecker } from './components/ClaimChecker';
import { IngredientDossier } from './components/IngredientDossier';
import { ExecutiveBriefModal } from './components/ExecutiveBriefModal';

import { Sparkles, Check, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';

export default function App() {
  // Main view state: default to 'store'
  const [activeTab, setActiveTab] = useState<TabType>('store');

  // E-Commerce Store State
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<CartItem[]>([
    { product: STORE_PRODUCTS[0], quantity: 1 } // Start with 1 flagship Pure Glow Soap bar
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [appliedPromo, setAppliedPromo] = useState('');
  const [isGiftWrap, setIsGiftWrap] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Regulatory Dossier State
  const [checklist, setChecklist] = useState<ChecklistItem[]>(CHECKLIST_DATA);
  const [isExecutiveBriefOpen, setIsExecutiveBriefOpen] = useState<boolean>(false);

  const completedChecklistCount = checklist.filter(i => i.status === 'compliant').length;
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Toast notifier
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2500);
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${quantity}x "${product.name}" to your bag`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter(item => item.product.id !== productId));
    showToast('Item removed from your bag');
  };

  const handleApplyPromo = (code: string): { success: boolean; message: string } => {
    if (code === 'GLOW15') {
      setAppliedPromo('GLOW15');
      return { success: true, message: 'Success! 15% discount applied.' };
    }
    if (code === 'FREESHIP') {
      setAppliedPromo('FREESHIP');
      return { success: true, message: 'Free carbon-neutral shipping unlocked!' };
    }
    if (code === 'WELCOME10') {
      setAppliedPromo('WELCOME10');
      return { success: true, message: 'Welcome perk! 10% discount applied.' };
    }
    return { success: false, message: 'Invalid coupon code. Try GLOW15' };
  };

  // Scroll helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cart financial calculations
  const rawSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  let discountAmount = 0;
  if (appliedPromo === 'GLOW15') discountAmount = rawSubtotal * 0.15;
  if (appliedPromo === 'WELCOME10') discountAmount = rawSubtotal * 0.10;
  const discountedSubtotal = Math.max(0, rawSubtotal - discountAmount);
  const isFreeShipping = discountedSubtotal >= STORE_POLICIES.shipping.freeThreshold || appliedPromo === 'FREESHIP';
  const shippingCost = cart.length === 0 ? 0 : isFreeShipping ? 0 : STORE_POLICIES.shipping.standardRate;
  const giftWrapCost = isGiftWrap ? 99.0 : 0.0;
  const cartTotal = discountedSubtotal + shippingCost + giftWrapCost;

  // Regulatory Dossier Print / Markdown Export
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
    <div className="min-h-screen bg-[#FAF7F2] text-[#332A24] flex flex-col font-sans selection:bg-[#FCE7EC] selection:text-[#4A3728]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 bg-[#4A3728] text-[#FAF7F2] text-xs font-semibold py-2.5 px-4 rounded-xl shadow-lg border border-[#8C6547] flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <Sparkles className="w-4 h-4 text-[#FCE7EC]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Switching based on View */}
      {activeTab === 'store' ? (
        <StoreHeader
          cartCount={totalCartCount}
          onOpenCart={() => setIsCartOpen(true)}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          searchQuery={searchQuery}
          onSearchChange={(q) => setSearchQuery(q)}
          activeTab={activeTab}
          onNavigateTab={(tab) => setActiveTab(tab)}
          onScrollToSection={scrollToSection}
        />
      ) : (
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onPrint={handlePrint}
          onExportMarkdown={handleExportMarkdown}
          onOpenQuickSummary={() => setIsExecutiveBriefOpen(true)}
          completedChecklistCount={completedChecklistCount}
          totalChecklistCount={checklist.length}
        />
      )}

      {/* Primary Main Canvas */}
      <main id="main-content-canvas" className="flex-1 pb-16 lg:pb-0">
        {/* STORE VIEW */}
        {activeTab === 'store' && (
          <div className="space-y-0">
            {/* 1. Hero Banner */}
            <StoreHero
              onShopNow={() => scrollToSection('products-section')}
              onExploreIngredients={() => {
                setActiveTab('ingredients');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 2. Products Section (Face Care, Body Care, Hair Care, Bestsellers) */}
            <ProductCatalogSection
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onAddToCart={handleAddToCart}
              onQuickView={(p) => setQuickViewProduct(p)}
            />

            {/* 3. About Us Section (Artisan Workshop, Honey, Aloe, Eco-Packaging) */}
            <AboutSection
              onExploreSafetyDossier={() => {
                setActiveTab('report');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 4. Customer Reviews Section */}
            <ReviewsSection />

            {/* 5. Skincare Tips & Rituals */}
            <SkincareTipsSection />

            {/* 6. Clear Delivery & Returns Policies */}
            <PoliciesSection />

            {/* 7. Instagram Community Feed */}
            <InstagramFeed
              onSelectProductById={(id) => {
                const prod = STORE_PRODUCTS.find(p => p.id === id);
                if (prod) {
                  setQuickViewProduct(prod);
                }
              }}
            />

            {/* 8. Newsletter Signup (15% Off) */}
            <NewsletterSection
              onCopyDiscount={(code) => {
                setAppliedPromo(code);
                showToast(`Promo ${code} copied and applied to your bag!`);
              }}
            />
          </div>
        )}

        {/* FDA REGULATORY DOSSIER VIEWS */}
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

      {/* Footer */}
      {activeTab === 'store' ? (
        <StoreFooter
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onNavigateTab={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onScrollToSection={scrollToSection}
        />
      ) : (
        <footer id="app-footer" className="bg-white border-t border-stone-200 py-8 px-4 sm:px-6 text-xs text-stone-500 print:hidden">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <span className="font-semibold text-stone-800">Pure Glow Naturals</span> — Regulatory Review & Safety Dossier.
              <span className="block sm:inline sm:ml-2 text-stone-400">Based on U.S. FDA 21 CFR § 701 and MoCRA 2022.</span>
            </div>
            <button
              onClick={() => {
                setActiveTab('store');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-stone-700 hover:text-stone-900 underline font-semibold cursor-pointer"
            >
              Return to Pure Glow Storefront →
            </button>
          </div>
        </footer>
      )}

      {/* Mobile Bottom Sticky Bar for Phones */}
      <MobileStickyBar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeTab={activeTab}
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onScrollToProducts={() => scrollToSection('products-section')}
      />

      {/* Cart Slide-out Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onExploreShop={() => {
          setIsCartOpen(false);
          scrollToSection('products-section');
        }}
        appliedPromo={appliedPromo}
        onApplyPromo={handleApplyPromo}
        isGiftWrap={isGiftWrap}
        onToggleGiftWrap={setIsGiftWrap}
      />

      {/* Simple Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        subtotal={rawSubtotal}
        discount={discountAmount}
        shipping={shippingCost}
        total={cartTotal}
        appliedPromo={appliedPromo}
        onOrderCompleted={() => {
          setCart([]);
          showToast('Order confirmed! A confirmation email has been dispatched.');
        }}
      />

      {/* Product Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p, q) => handleAddToCart(p, q)}
      />

      {/* Executive Brief Modal (Regulatory) */}
      <ExecutiveBriefModal
        isOpen={isExecutiveBriefOpen}
        onClose={() => setIsExecutiveBriefOpen(false)}
        completedChecklistCount={completedChecklistCount}
        totalChecklistCount={checklist.length}
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          setIsExecutiveBriefOpen(false);
        }}
      />
    </div>
  );
}
