import React, { useState } from 'react';
import { Product } from '../types';
import { Star, Eye, Plus, Check, ShoppingBag, Sparkles } from 'lucide-react';
import { formatINR } from '../utils/currency';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity?: number) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onQuickView
}) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1400);
  };

  return (
    <div
      id={`product-card-${product.id}`}
      className="group bg-white rounded-2xl border border-[#EBE4DC] overflow-hidden flex flex-col hover:shadow-md transition-all duration-300 hover:border-[#D8C7B8]"
    >
      {/* Product Image Area */}
      <div className="relative aspect-4/3 sm:aspect-square bg-[#FAF7F2] overflow-hidden cursor-pointer" onClick={() => onQuickView(product)}>
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 items-start z-10">
          {product.isBestseller && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#FCE7EC] text-[#8C6547] border border-[#F9D5DD] shadow-2xs">
              ★ Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#E8EFE9] text-[#3F5845] border border-[#CADCCB] shadow-2xs">
              New Harvest
            </span>
          )}
        </div>

        {/* Quick View Button on Hover */}
        <button
          id={`quick-view-btn-${product.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 px-4 py-2 bg-white/95 backdrop-blur-xs text-[#4A3728] hover:bg-[#FAF7F2] text-xs font-semibold rounded-full shadow-md flex items-center gap-1.5 cursor-pointer whitespace-nowrap z-10"
        >
          <Eye className="w-3.5 h-3.5 text-[#8C6547]" />
          <span>Quick View</span>
        </button>
      </div>

      {/* Card Content Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5">
        <div className="space-y-2">
          {/* Category & Weight */}
          <div className="flex items-center justify-between text-xs text-[#8C6547] font-mono">
            <span className="capitalize">{product.category.replace('-', ' ')}</span>
            <span className="text-[#8C6547]/80">{product.weightVolume}</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onQuickView(product)}
            className="text-base sm:text-lg font-serif font-bold text-[#4A3728] group-hover:text-[#8C6547] transition-colors cursor-pointer line-clamp-1"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Star Rating */}
          <div className="flex items-center gap-1.5 text-xs">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
            <span className="font-semibold text-[#4A3728]">{product.rating.toFixed(2)}</span>
            <span className="text-[#8C6547] font-mono">({product.reviewCount})</span>
          </div>

          {/* Key Natural Ingredients */}
          <div className="bg-[#FAF7F2] rounded-lg p-2.5 border border-[#EBE4DC] text-xs space-y-1">
            <div className="text-[10px] uppercase font-bold tracking-wider text-[#8C6547]">
              Key Botanicals:
            </div>
            <p className="text-[11px] text-[#5A3E2B] line-clamp-2 leading-relaxed">
              {product.ingredientsSnippet}
            </p>
          </div>

          {/* Primary Benefit */}
          <div className="flex items-start gap-1.5 text-xs text-[#3F5845]">
            <Sparkles className="w-3.5 h-3.5 text-[#5F7F67] shrink-0 mt-0.5" />
            <span className="line-clamp-1 text-[11px] font-medium">
              {product.benefits[0]}
            </span>
          </div>
        </div>

        {/* Pricing & Add to Cart Zone */}
        <div className="pt-2 border-t border-[#EBE4DC] flex items-center justify-between gap-3">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-[#4A3728] font-serif">
              {formatINR(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#8C6547]/70 line-through">
                {formatINR(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Easy-to-find Add to Cart Button */}
          <button
            id={`add-to-cart-${product.id}`}
            onClick={handleAdd}
            className={`px-4 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer shadow-xs active:scale-95 ${
              isAdded
                ? 'bg-[#5F7F67] text-white'
                : 'bg-[#4A3728] hover:bg-[#362419] text-[#FAF7F2]'
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-[#FCE7EC]" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
