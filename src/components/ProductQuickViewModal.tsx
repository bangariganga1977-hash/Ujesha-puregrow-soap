import React, { useState } from 'react';
import { Product } from '../types';
import { X, Star, ShoppingBag, ShieldCheck, Check, Sparkles, Droplets, Heart } from 'lucide-react';
import { formatINR } from '../utils/currency';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'ingredients' | 'howToUse'>('details');

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        id="product-quick-view-dialog"
        className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#EBE4DC] animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          id="close-quick-view-button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#4A3728] hover:bg-[#FAF7F2] rounded-full transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image Column */}
          <div className="relative aspect-square md:aspect-auto bg-[#FAF7F2] overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {product.isBestseller && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase bg-[#FCE7EC] text-[#8C6547] border border-[#F9D5DD] shadow-xs">
                ★ Artisanal Bestseller
              </span>
            )}
          </div>

          {/* Product Info Column */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category & Weight */}
              <div className="flex items-center justify-between text-xs font-mono text-[#8C6547]">
                <span className="uppercase tracking-wider font-semibold">
                  {product.category.replace('-', ' ')}
                </span>
                <span>{product.weightVolume}</span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-[#4A3728]">
                  {product.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#8C6547] mt-1">
                  {product.tagline}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 text-xs">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-[#4A3728]">{product.rating.toFixed(2)}</span>
                <span className="text-[#8C6547]">({product.reviewCount} verified reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold font-serif text-[#4A3728]">
                  {formatINR(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#8C6547] line-through">
                    {formatINR(product.originalPrice)}
                  </span>
                )}
                <span className="text-xs text-[#5F7F67] font-semibold bg-[#E8EFE9] px-2 py-0.5 rounded">
                  In Stock & Ready to Dispatch
                </span>
              </div>

              {/* Tab Navigation for Deep Info */}
              <div className="flex items-center gap-1 border-b border-[#EBE4DC] pt-2 text-xs font-medium">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`pb-2 px-1 border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'details'
                      ? 'border-[#4A3728] text-[#4A3728] font-bold'
                      : 'border-transparent text-[#8C6547] hover:text-[#4A3728]'
                  }`}
                >
                  Benefits & Skin Type
                </button>
                <button
                  onClick={() => setActiveTab('ingredients')}
                  className={`pb-2 px-1 border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'ingredients'
                      ? 'border-[#4A3728] text-[#4A3728] font-bold'
                      : 'border-transparent text-[#8C6547] hover:text-[#4A3728]'
                  }`}
                >
                  INCI Botanicals
                </button>
                <button
                  onClick={() => setActiveTab('howToUse')}
                  className={`pb-2 px-1 border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'howToUse'
                      ? 'border-[#4A3728] text-[#4A3728] font-bold'
                      : 'border-transparent text-[#8C6547] hover:text-[#4A3728]'
                  }`}
                >
                  Ritual Guide
                </button>
              </div>

              {/* Tab Contents */}
              <div className="text-xs text-[#5A3E2B] leading-relaxed max-h-48 overflow-y-auto pr-2">
                {activeTab === 'details' && (
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <span className="font-bold text-[#4A3728] block">Skin Type Compatibility:</span>
                      <p>{product.skinType}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-bold text-[#4A3728] block">Aroma & Scent:</span>
                      <p>{product.scentProfile}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-bold text-[#4A3728] block">Key Benefits:</span>
                      <ul className="list-disc list-inside space-y-0.5 text-[#3F5845]">
                        {product.benefits.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'ingredients' && (
                  <div className="space-y-3">
                    <p className="text-[11px] text-[#8C6547]">
                      Disclosed under FDA 21 CFR § 701 in descending order of predominance:
                    </p>
                    <div className="p-2.5 bg-[#FAF7F2] rounded-lg border border-[#EBE4DC] font-mono text-[11px] text-[#4A3728]">
                      {product.fullInci.join(' · ')}
                    </div>
                    <div className="space-y-1 pt-1">
                      <span className="font-bold text-[#4A3728]">Featured Botanical Actives:</span>
                      {product.keyIngredients.map((k, idx) => (
                        <div key={idx} className="text-[11px]">
                          <strong>{k.name}</strong> ({k.inci}): {k.benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'howToUse' && (
                  <div className="space-y-2">
                    <span className="font-bold text-[#4A3728] block">Application Ritual:</span>
                    <p>{product.howToUse}</p>
                    <div className="p-2.5 bg-[#E8EFE9] rounded-lg border border-[#CADCCB] text-[#3F5845] text-[11px] flex items-start gap-2">
                      <Droplets className="w-4 h-4 shrink-0 mt-0.5 text-[#5F7F67]" />
                      <span>
                        <strong>Eco Tip:</strong> Pair with our slatted wooden draining soap dish to allow natural plant glycerin to dry firm between uses.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Actions: Quantity & Add to Cart */}
            <div className="pt-4 border-t border-[#EBE4DC] space-y-3">
              <div className="flex items-center gap-3">
                {/* Quantity Controls */}
                <div className="flex items-center border border-[#D8C7B8] rounded-full bg-[#FAF7F2]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center text-[#4A3728] hover:bg-white rounded-full transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-[#4A3728] font-mono">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center text-[#4A3728] hover:bg-white rounded-full transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart CTA */}
                <button
                  id="quick-view-add-to-cart-button"
                  onClick={handleAddToCart}
                  className={`flex-1 py-3 px-6 rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-md active:scale-95 ${
                    isAdded
                      ? 'bg-[#5F7F67] text-white'
                      : 'bg-[#4A3728] hover:bg-[#362419] text-[#FAF7F2]'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-[#FCE7EC]" />
                      <span>Add to Bag — {formatINR(product.price * quantity)}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Subtle Trust Line */}
              <div className="flex items-center justify-center gap-3 text-[11px] text-[#8C6547]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#5F7F67]" />
                  MoCRA § 608 Verified Safe
                </span>
                <span>·</span>
                <span>Biodegradable Butter Paper Wrap</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
