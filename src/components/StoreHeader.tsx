import React, { useState } from 'react';
import { ProductCategory, TabType } from '../types';
import { Search, ShoppingBag, Menu, X, ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { PureGlowLogo } from './PureGlowLogo';

interface StoreHeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeTab: TabType;
  onNavigateTab: (tab: TabType) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const StoreHeader: React.FC<StoreHeaderProps> = ({
  cartCount,
  onOpenCart,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  activeTab,
  onNavigateTab,
  onScrollToSection
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleNavClick = (category: ProductCategory, sectionId: string = 'products-section') => {
    if (activeTab !== 'store') {
      onNavigateTab('store');
    }
    onSelectCategory(category);
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      onScrollToSection(sectionId);
    }, 50);
  };

  const handleSectionJump = (sectionId: string) => {
    if (activeTab !== 'store') {
      onNavigateTab('store');
    }
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      onScrollToSection(sectionId);
    }, 50);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EBE4DC] transition-all">
      {/* Top Announcement Bar */}
      <div id="announcement-banner" className="bg-[#4A3728] text-[#FAF7F2] text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2 font-medium tracking-wide">
            <span className="hidden sm:inline">✨</span>
            <span>Free Carbon-Neutral Delivery on Orders ₹999+</span>
            <span className="hidden md:inline text-white/40">·</span>
            <span className="hidden md:inline text-[#E8EFE9]">Handcrafted in Small Batches with Raw Forest Honey</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="top-bar-fda-link"
              onClick={() => onNavigateTab('report')}
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#FCE7EC] hover:text-white transition-colors underline underline-offset-2 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#CADCCB]" />
              <span>Official FDA & MoCRA Safety Dossier</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo Zone */}
          <div className="flex items-center gap-3 shrink-0">
            <PureGlowLogo
              size="md"
              onClick={() => {
                onNavigateTab('store');
                onSelectCategory('all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>

          {/* Desktop Category Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A3728]">
            <button
              id="nav-shop-all"
              onClick={() => handleNavClick('all')}
              className={`hover:text-[#8C6547] transition-colors cursor-pointer py-1 border-b-2 ${
                selectedCategory === 'all' && activeTab === 'store'
                  ? 'border-[#4A3728] text-[#4A3728] font-semibold'
                  : 'border-transparent text-[#5A3E2B]'
              }`}
            >
              Shop All
            </button>

            <button
              id="nav-bestsellers"
              onClick={() => handleNavClick('bestsellers')}
              className={`hover:text-[#8C6547] transition-colors cursor-pointer py-1 border-b-2 ${
                selectedCategory === 'bestsellers' && activeTab === 'store'
                  ? 'border-[#4A3728] text-[#4A3728] font-semibold'
                  : 'border-transparent text-[#5A3E2B]'
              }`}
            >
              Bestsellers
            </button>

            <button
              id="nav-face-care"
              onClick={() => handleNavClick('face-care')}
              className={`hover:text-[#8C6547] transition-colors cursor-pointer py-1 border-b-2 ${
                selectedCategory === 'face-care' && activeTab === 'store'
                  ? 'border-[#4A3728] text-[#4A3728] font-semibold'
                  : 'border-transparent text-[#5A3E2B]'
              }`}
            >
              Face Care
            </button>

            <button
              id="nav-body-care"
              onClick={() => handleNavClick('body-care')}
              className={`hover:text-[#8C6547] transition-colors cursor-pointer py-1 border-b-2 ${
                selectedCategory === 'body-care' && activeTab === 'store'
                  ? 'border-[#4A3728] text-[#4A3728] font-semibold'
                  : 'border-transparent text-[#5A3E2B]'
              }`}
            >
              Body Care
            </button>

            <button
              id="nav-hair-care"
              onClick={() => handleNavClick('hair-care')}
              className={`hover:text-[#8C6547] transition-colors cursor-pointer py-1 border-b-2 ${
                selectedCategory === 'hair-care' && activeTab === 'store'
                  ? 'border-[#4A3728] text-[#4A3728] font-semibold'
                  : 'border-transparent text-[#5A3E2B]'
              }`}
            >
              Hair Care
            </button>

            <button
              id="nav-skincare-tips"
              onClick={() => handleSectionJump('skincare-tips-section')}
              className="hover:text-[#8C6547] transition-colors cursor-pointer py-1 border-b-2 border-transparent text-[#5A3E2B]"
            >
              Skincare Tips
            </button>

            <button
              id="nav-about-us"
              onClick={() => handleSectionJump('about-section')}
              className="hover:text-[#8C6547] transition-colors cursor-pointer py-1 border-b-2 border-transparent text-[#5A3E2B]"
            >
              About Us
            </button>

            <button
              id="nav-reviews"
              onClick={() => handleSectionJump('reviews-section')}
              className="hover:text-[#8C6547] transition-colors cursor-pointer py-1 border-b-2 border-transparent text-[#5A3E2B]"
            >
              Reviews
            </button>
          </nav>

          {/* Action Zone: Search, FDA Hub Button, Cart, Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search Trigger */}
            <button
              id="search-toggle-button"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2.5 text-[#4A3728] hover:text-[#8C6547] hover:bg-[#F5EFEB] rounded-full transition-colors cursor-pointer"
              title="Search products and ingredients"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* FDA Regulatory Hub Switcher */}
            <button
              id="nav-fda-dossier-pill"
              onClick={() => onNavigateTab(activeTab === 'store' ? 'report' : 'store')}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer border ${
                activeTab !== 'store'
                  ? 'bg-[#5F7F67] text-white border-[#5F7F67] shadow-xs'
                  : 'bg-[#E8EFE9] text-[#3F5845] border-[#CADCCB] hover:bg-[#CADCCB]'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{activeTab === 'store' ? 'FDA Dossier' : 'Return to Shop'}</span>
            </button>

            {/* Cart Button */}
            <button
              id="header-cart-button"
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3 py-2 bg-[#4A3728] hover:bg-[#362419] text-[#FAF7F2] rounded-full transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-4 h-4 text-[#FCE7EC]" />
              <span className="hidden sm:inline text-xs font-semibold">Cart</span>
              <span
                id="header-cart-count-badge"
                className="inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold rounded-full bg-[#E892A2] text-[#4A3728]"
              >
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-[#4A3728] hover:bg-[#F5EFEB] rounded-full lg:hidden transition-colors cursor-pointer"
              aria-label="Toggle mobile navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Live Search Drawer */}
        {isSearchOpen && (
          <div id="header-search-bar" className="py-4 border-t border-[#EBE4DC] animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="relative max-w-2xl mx-auto">
              <Search className="w-4 h-4 text-[#8C6547] absolute left-3.5 top-3.5" />
              <input
                id="store-header-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  onSearchChange(e.target.value);
                  if (activeTab !== 'store') onNavigateTab('store');
                }}
                placeholder="Search botanical soaps, raw honey, aloe vera, hair care..."
                className="w-full pl-10 pr-10 py-2.5 text-sm bg-white border border-[#D8C7B8] rounded-full text-[#4A3728] placeholder-[#8C6547]/60 focus:outline-hidden focus:ring-2 focus:ring-[#8C6547] focus:border-transparent shadow-xs"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3.5 top-3 text-[#8C6547] hover:text-[#4A3728] text-xs font-medium cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="flex items-center justify-center gap-2 mt-2 text-[11px] text-[#8C6547]">
              <span>Popular searches:</span>
              <button
                onClick={() => {
                  onSearchChange('honey');
                  handleSectionJump('products-section');
                }}
                className="underline hover:text-[#4A3728] cursor-pointer"
              >
                Raw Honey
              </button>
              <span>·</span>
              <button
                onClick={() => {
                  onSearchChange('soap');
                  handleSectionJump('products-section');
                }}
                className="underline hover:text-[#4A3728] cursor-pointer"
              >
                Handmade Soap
              </button>
              <span>·</span>
              <button
                onClick={() => {
                  onSearchChange('aloe');
                  handleSectionJump('products-section');
                }}
                className="underline hover:text-[#4A3728] cursor-pointer"
              >
                Fresh Aloe
              </button>
              <span>·</span>
              <button
                onClick={() => {
                  onSearchChange('shampoo');
                  handleSectionJump('products-section');
                }}
                className="underline hover:text-[#4A3728] cursor-pointer"
              >
                Solid Shampoo
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden bg-[#FAF7F2] border-b border-[#EBE4DC] px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#EBE4DC]">
            <button
              onClick={() => handleNavClick('all')}
              className={`p-3 rounded-lg text-left text-sm font-medium transition-colors ${
                selectedCategory === 'all' ? 'bg-[#FCE7EC] text-[#4A3728] font-bold' : 'bg-white text-[#5A3E2B]'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => handleNavClick('bestsellers')}
              className={`p-3 rounded-lg text-left text-sm font-medium transition-colors ${
                selectedCategory === 'bestsellers' ? 'bg-[#FCE7EC] text-[#4A3728] font-bold' : 'bg-white text-[#5A3E2B]'
              }`}
            >
              ⭐ Bestsellers
            </button>
            <button
              onClick={() => handleNavClick('face-care')}
              className={`p-3 rounded-lg text-left text-sm font-medium transition-colors ${
                selectedCategory === 'face-care' ? 'bg-[#FCE7EC] text-[#4A3728] font-bold' : 'bg-white text-[#5A3E2B]'
              }`}
            >
              Face Care
            </button>
            <button
              onClick={() => handleNavClick('body-care')}
              className={`p-3 rounded-lg text-left text-sm font-medium transition-colors ${
                selectedCategory === 'body-care' ? 'bg-[#FCE7EC] text-[#4A3728] font-bold' : 'bg-white text-[#5A3E2B]'
              }`}
            >
              Body Care
            </button>
            <button
              onClick={() => handleNavClick('hair-care')}
              className={`p-3 rounded-lg text-left text-sm font-medium transition-colors ${
                selectedCategory === 'hair-care' ? 'bg-[#FCE7EC] text-[#4A3728] font-bold' : 'bg-white text-[#5A3E2B]'
              }`}
            >
              Hair Care
            </button>
            <button
              onClick={() => handleSectionJump('skincare-tips-section')}
              className="p-3 rounded-lg text-left text-sm font-medium bg-white text-[#5A3E2B]"
            >
              📖 Skincare Tips
            </button>
          </div>

          <div className="space-y-2 pt-1">
            <button
              onClick={() => handleSectionJump('about-section')}
              className="w-full text-left py-2 px-3 text-sm font-medium text-[#4A3728] hover:bg-[#F5EFEB] rounded-md"
            >
              Our Story & Artisanal Workshop
            </button>
            <button
              onClick={() => handleSectionJump('reviews-section')}
              className="w-full text-left py-2 px-3 text-sm font-medium text-[#4A3728] hover:bg-[#F5EFEB] rounded-md"
            >
              Verified Customer Reviews (4.9★)
            </button>
            <button
              onClick={() => handleSectionJump('policies-section')}
              className="w-full text-left py-2 px-3 text-sm font-medium text-[#4A3728] hover:bg-[#F5EFEB] rounded-md"
            >
              Delivery & 30-Day Guarantee
            </button>
          </div>

          <div className="pt-3 border-t border-[#EBE4DC]">
            <button
              onClick={() => {
                onNavigateTab('report');
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 bg-[#E8EFE9] border border-[#CADCCB] text-[#3F5845] rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#5F7F67]" />
              <span>Inspect Official FDA Regulatory Report & MoCRA Hub</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
