import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, ArrowRight, ShoppingBag, ShieldCheck, Tag, Gift, Sparkles } from 'lucide-react';
import { STORE_POLICIES } from '../data/storeData';
import { formatINR } from '../utils/currency';
import { PureGlowLogo } from './PureGlowLogo';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
  onExploreShop: () => void;
  appliedPromo: string;
  onApplyPromo: (code: string) => { success: boolean; message: string };
  isGiftWrap: boolean;
  onToggleGiftWrap: (enabled: boolean) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onExploreShop,
  appliedPromo,
  onApplyPromo,
  isGiftWrap,
  onToggleGiftWrap
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError: boolean } | null>(null);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const giftWrapCost = isGiftWrap ? 99.0 : 0.0;

  // Calculate discount
  let discountAmount = 0;
  if (appliedPromo === 'GLOW15') {
    discountAmount = rawSubtotal * 0.15;
  } else if (appliedPromo === 'WELCOME10') {
    discountAmount = rawSubtotal * 0.10;
  }

  const discountedSubtotal = Math.max(0, rawSubtotal - discountAmount);

  // Free shipping check
  const freeThreshold = STORE_POLICIES.shipping.freeThreshold;
  const isFreeShipping = discountedSubtotal >= freeThreshold || appliedPromo === 'FREESHIP';
  const shippingCost = items.length === 0 ? 0 : isFreeShipping ? 0 : STORE_POLICIES.shipping.standardRate;
  const total = discountedSubtotal + shippingCost + giftWrapCost;

  const progressPercent = Math.min(100, (discountedSubtotal / freeThreshold) * 100);
  const amountToFreeShipping = Math.max(0, freeThreshold - discountedSubtotal);

  const handlePromoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const result = onApplyPromo(promoInput.trim().toUpperCase());
    setPromoMessage({ text: result.message, isError: !result.success });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div
          id="cart-slide-drawer"
          className="w-screen max-w-md bg-[#FAF7F2] border-l border-[#EBE4DC] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300"
        >
          {/* Cart Header */}
          <div className="p-4 sm:p-5 border-b border-[#EBE4DC] bg-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <PureGlowLogo size="sm" showSubtitle={false} />
              <span className="text-[#8C6547] text-xs font-mono">|</span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-[#FCE7EC] text-[#8C6547]">
                {items.reduce((sum, item) => sum + item.quantity, 0)} {items.reduce((sum, item) => sum + item.quantity, 0) === 1 ? 'bar' : 'bars'}
              </span>
            </div>

            <button
              id="close-cart-drawer-button"
              onClick={onClose}
              className="p-1.5 text-[#8C6547] hover:text-[#4A3728] hover:bg-[#FAF7F2] rounded-full transition-colors cursor-pointer"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#FAF7F2] px-6 py-3 border-b border-[#EBE4DC] space-y-1.5">
            <div className="flex items-center justify-between text-xs text-[#5A3E2B]">
              {isFreeShipping ? (
                <span className="text-[#3F5845] font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#5F7F67]" />
                  You have unlocked Free Carbon-Neutral Delivery!
                </span>
              ) : (
                <span>
                  Add <strong className="text-[#4A3728]">{formatINR(amountToFreeShipping)}</strong> more for FREE shipping
                </span>
              )}
              <span className="font-mono text-[11px] text-[#8C6547]">
                {formatINR(discountedSubtotal)} / {formatINR(freeThreshold, false)}
              </span>
            </div>

            <div className="w-full bg-[#EBE4DC] rounded-full h-1.5 overflow-hidden">
              <div
                className={`h-full transition-all duration-500 rounded-full ${
                  isFreeShipping ? 'bg-[#5F7F67]' : 'bg-[#E892A2]'
                }`}
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FCE7EC] mx-auto flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-[#8C6547]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-base text-[#4A3728]">
                    Your bag is completely empty
                  </h3>
                  <p className="text-xs text-[#8C6547] max-w-xs mx-auto">
                    Experience handcrafted artisanal purity with our wild honey soap bars and whipped body botanicals.
                  </p>
                </div>
                <button
                  id="cart-empty-explore-button"
                  onClick={() => {
                    onClose();
                    onExploreShop();
                  }}
                  className="px-6 py-2.5 bg-[#4A3728] text-[#FAF7F2] text-xs font-semibold rounded-full hover:bg-[#362419] transition-all cursor-pointer"
                >
                  Explore Bestsellers
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  id={`cart-item-${item.product.id}`}
                  className="bg-white p-3.5 rounded-xl border border-[#EBE4DC] flex gap-3.5 shadow-2xs items-start"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-lg object-cover bg-[#FAF7F2] shrink-0 border border-[#EBE4DC]"
                  />

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-[#4A3728] font-serif truncate">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-[#8C6547] hover:text-red-700 p-1 rounded transition-colors cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[11px] text-[#8C6547] font-mono">
                      {item.product.weightVolume}
                    </p>

                    <div className="flex items-center justify-between pt-1">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#D8C7B8] rounded-full bg-[#FAF7F2] h-7">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="w-6 h-full flex items-center justify-center text-xs text-[#4A3728] hover:bg-white rounded-l-full cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-[#4A3728] font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="w-6 h-full flex items-center justify-center text-xs text-[#4A3728] hover:bg-white rounded-r-full cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-xs font-bold text-[#4A3728] font-mono">
                        {formatINR(item.product.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer: Promo, Gift Wrap, Totals & Checkout */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 bg-white border-t border-[#EBE4DC] space-y-4">
              {/* Eco Gift Box Toggle */}
              <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#EBE4DC] flex items-center justify-between">
                <label className="flex items-center gap-2.5 cursor-pointer text-xs text-[#4A3728]">
                  <input
                    type="checkbox"
                    checked={isGiftWrap}
                    onChange={(e) => onToggleGiftWrap(e.target.checked)}
                    className="rounded text-[#4A3728] focus:ring-[#8C6547] cursor-pointer"
                  />
                  <span className="flex items-center gap-1.5 font-medium">
                    <Gift className="w-3.5 h-3.5 text-[#8C6547]" />
                    Eco-Friendly Recycled Gift Box & Ribbon
                  </span>
                </label>
                <span className="text-xs font-mono font-bold text-[#8C6547]">+{formatINR(99, false)}</span>
              </div>

              {/* Promo Code Input */}
              <form onSubmit={handlePromoSubmit} className="space-y-1">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-[#8C6547] absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      placeholder="Promo code (e.g. GLOW15)"
                      className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#FAF7F2] border border-[#D8C7B8] rounded-lg text-[#4A3728] uppercase placeholder-[#8C6547]/50 focus:outline-hidden focus:ring-1 focus:ring-[#8C6547]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3.5 py-1.5 bg-[#5A3E2B] text-white text-xs font-semibold rounded-lg hover:bg-[#4A3728] transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {promoMessage && (
                  <p className={`text-[11px] ${promoMessage.isError ? 'text-rose-700' : 'text-[#3F5845] font-semibold'}`}>
                    {promoMessage.text}
                  </p>
                )}
                {appliedPromo && (
                  <div className="inline-flex items-center gap-1 text-[11px] text-[#3F5845] bg-[#E8EFE9] px-2 py-0.5 rounded">
                    <span>Applied: <strong>{appliedPromo}</strong></span>
                  </div>
                )}
              </form>

              {/* Subtotal Breakdown */}
              <div className="space-y-1.5 text-xs text-[#5A3E2B] pt-2 border-t border-[#EBE4DC]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono">{formatINR(rawSubtotal)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#3F5845] font-medium">
                    <span>Artisan Discount ({appliedPromo})</span>
                    <span className="font-mono">-{formatINR(discountAmount)}</span>
                  </div>
                )}

                {isGiftWrap && (
                  <div className="flex justify-between">
                    <span>Eco Gift Packaging</span>
                    <span className="font-mono">+{formatINR(99, false)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Carbon-Neutral Shipping</span>
                  <span className="font-mono">
                    {shippingCost === 0 ? (
                      <strong className="text-[#3F5845]">FREE</strong>
                    ) : (
                      formatINR(shippingCost)
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-sm font-bold text-[#4A3728] pt-2 border-t border-[#EBE4DC]">
                  <span className="font-serif">Estimated Total</span>
                  <span className="font-mono">{formatINR(total)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                id="cart-proceed-to-checkout-button"
                onClick={onProceedToCheckout}
                className="w-full py-3.5 px-6 bg-[#4A3728] hover:bg-[#362419] text-[#FAF7F2] text-xs font-bold rounded-full shadow-md flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer active:scale-95"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 text-[#FCE7EC]" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#8C6547]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5F7F67]" />
                <span>256-Bit SSL Encrypted · 30-Day Pure Glow Guarantee</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
