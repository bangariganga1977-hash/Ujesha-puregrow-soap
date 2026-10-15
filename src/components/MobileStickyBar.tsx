import React from 'react';
import { ShoppingBag, Grid, ShieldCheck, Home } from 'lucide-react';
import { TabType } from '../types';

interface MobileStickyBarProps {
  cartCount: number;
  onOpenCart: () => void;
  activeTab: TabType;
  onNavigateTab: (tab: TabType) => void;
  onScrollToProducts: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  cartCount,
  onOpenCart,
  activeTab,
  onNavigateTab,
  onScrollToProducts
}) => {
  return (
    <div
      id="mobile-sticky-action-bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#EBE4DC] px-4 py-2.5 shadow-lg flex items-center justify-around text-[10px] font-medium text-[#8C6547]"
    >
      <button
        onClick={() => {
          if (activeTab !== 'store') onNavigateTab('store');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
          activeTab === 'store' ? 'text-[#4A3728] font-bold' : ''
        }`}
      >
        <Home className="w-4 h-4" />
        <span>Home</span>
      </button>

      <button
        onClick={() => {
          if (activeTab !== 'store') onNavigateTab('store');
          onScrollToProducts();
        }}
        className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#4A3728]"
      >
        <Grid className="w-4 h-4" />
        <span>Apothecary</span>
      </button>

      <button
        onClick={onOpenCart}
        className="flex flex-col items-center gap-1 cursor-pointer text-[#4A3728] relative"
      >
        <div className="relative">
          <ShoppingBag className="w-5 h-5 text-[#4A3728]" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-[#E892A2] text-[#4A3728] font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
        <span className="font-bold">Cart ({cartCount})</span>
      </button>

      <button
        onClick={() => onNavigateTab(activeTab === 'store' ? 'report' : 'store')}
        className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
          activeTab !== 'store' ? 'text-[#5F7F67] font-bold' : 'text-[#8C6547]'
        }`}
      >
        <ShieldCheck className="w-4 h-4" />
        <span>{activeTab === 'store' ? 'FDA Dossier' : 'Store'}</span>
      </button>
    </div>
  );
};
