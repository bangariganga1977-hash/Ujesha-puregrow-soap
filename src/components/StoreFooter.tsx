import React from 'react';
import { ProductCategory, TabType } from '../types';
import { ShieldCheck, Instagram, Heart, ArrowUpRight, Leaf } from 'lucide-react';
import { PureGlowLogo } from './PureGlowLogo';

interface StoreFooterProps {
  onSelectCategory: (cat: ProductCategory) => void;
  onNavigateTab: (tab: TabType) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const StoreFooter: React.FC<StoreFooterProps> = ({
  onSelectCategory,
  onNavigateTab,
  onScrollToSection
}) => {
  return (
    <footer id="store-main-footer" className="bg-[#4A3728] text-[#FAF7F2] pt-16 pb-12 border-t border-[#362419]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <PureGlowLogo
              size="md"
              variant="light"
              onClick={() => {
                onNavigateTab('store');
                onSelectCategory('all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <p className="text-xs text-[#E8EFE9]/80 leading-relaxed max-w-sm">
              Home-based Indian artisanal venture crafting natural, botanical, and eco-friendly personal care. Enriched with cold-pressed coconut oil, raw wild honey, and fresh aloe vera.
            </p>
            <div className="pt-2 text-[11px] text-[#CADCCB] font-mono space-y-1">
              <div>Workshop: Karnataka & Kerala, India</div>
              <div>Primary Packaging: Biodegradable Butter Paper</div>
              <div>Regulatory Status: FDA Cosmetic Compliant (MoCRA § 608)</div>
            </div>
          </div>

          {/* Quick Shop Links */}
          <div className="space-y-3 text-xs">
            <div className="font-serif font-bold text-sm text-[#FCE7EC] uppercase tracking-wider">
              Apothecary
            </div>
            <ul className="space-y-2 text-[#FAF7F2]/80">
              <li>
                <button
                  onClick={() => {
                    onNavigateTab('store');
                    onSelectCategory('all');
                    onScrollToSection('products-section');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  All Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateTab('store');
                    onSelectCategory('bestsellers');
                    onScrollToSection('products-section');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Bestsellers
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateTab('store');
                    onSelectCategory('face-care');
                    onScrollToSection('products-section');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Face Care
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateTab('store');
                    onSelectCategory('body-care');
                    onScrollToSection('products-section');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Body Care
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateTab('store');
                    onSelectCategory('hair-care');
                    onScrollToSection('products-section');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Hair Care
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-3 text-xs">
            <div className="font-serif font-bold text-sm text-[#FCE7EC] uppercase tracking-wider">
              Customer Care
            </div>
            <ul className="space-y-2 text-[#FAF7F2]/80">
              <li>
                <button
                  onClick={() => {
                    onNavigateTab('store');
                    onScrollToSection('policies-section');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  30-Day Pure Glow Guarantee
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateTab('store');
                    onScrollToSection('policies-section');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Carbon-Neutral Shipping
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateTab('store');
                    onScrollToSection('about-section');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Artisan Packaging Pledge
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateTab('store');
                    onScrollToSection('skincare-tips-section');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Soap Care Rituals
                </button>
              </li>
            </ul>
          </div>

          {/* FDA Compliance & Transparency Hub */}
          <div className="space-y-3 text-xs">
            <div className="font-serif font-bold text-sm text-[#CADCCB] uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#CADCCB]" />
              <span>FDA Regulatory Hub</span>
            </div>
            <ul className="space-y-2 text-[#FAF7F2]/80">
              <li>
                <button
                  onClick={() => onNavigateTab('report')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Official FDA Report (9 Sec)</span>
                  <ArrowUpRight className="w-3 h-3 text-[#CADCCB]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('classifier')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>3-Prong Soap Classifier</span>
                  <ArrowUpRight className="w-3 h-3 text-[#CADCCB]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('checklist')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>MoCRA Launch Checklist</span>
                  <ArrowUpRight className="w-3 h-3 text-[#CADCCB]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('label-inspector')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Label Inspector (21 CFR)</span>
                  <ArrowUpRight className="w-3 h-3 text-[#CADCCB]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('claims')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Marketing Claim Checker</span>
                  <ArrowUpRight className="w-3 h-3 text-[#CADCCB]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('ingredients')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>INCI & Safety Dossier</span>
                  <ArrowUpRight className="w-3 h-3 text-[#CADCCB]" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 border-t border-[#362419] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#FAF7F2]/60">
          <div>
            © {new Date().getFullYear()} Pure Glow Naturals. All rights reserved. Handcrafted with Ayurvedic botanicals in India.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Leaf className="w-3.5 h-3.5 text-[#CADCCB]" />
              Cruelty-Free & 100% Plant & Honey Saponified
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
