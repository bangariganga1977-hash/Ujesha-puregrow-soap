import React, { useState, useMemo } from 'react';
import { Product, ProductCategory } from '../types';
import { STORE_PRODUCTS } from '../data/storeData';
import { ProductCard } from './ProductCard';
import { Search, SlidersHorizontal, Sparkles, IndianRupee } from 'lucide-react';

interface ProductCatalogSectionProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onAddToCart: (product: Product, quantity?: number) => void;
  onQuickView: (product: Product) => void;
}

type PriceTier = 'all' | 'tier-500-699' | 'tier-700-999' | 'tier-1000-1200';

export const ProductCatalogSection: React.FC<ProductCatalogSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onAddToCart,
  onQuickView
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [selectedPriceTier, setSelectedPriceTier] = useState<PriceTier>('all');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...STORE_PRODUCTS];

    // Category filter
    if (selectedCategory === 'bestsellers') {
      result = result.filter(p => p.isBestseller);
    } else if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Price Tier filter (range 500 to 1200 rs)
    if (selectedPriceTier === 'tier-500-699') {
      result = result.filter(p => p.price >= 500 && p.price <= 699);
    } else if (selectedPriceTier === 'tier-700-999') {
      result = result.filter(p => p.price >= 700 && p.price <= 999);
    } else if (selectedPriceTier === 'tier-1000-1200') {
      result = result.filter(p => p.price >= 1000 && p.price <= 1200);
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.ingredientsSnippet.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.benefits.some(b => b.toLowerCase().includes(q))
      );
    }

    // Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, selectedPriceTier, searchQuery, sortBy]);

  const categories: { id: ProductCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Pure Glow Soaps', count: STORE_PRODUCTS.length },
    { id: 'bestsellers', label: '★ Bestseller Bars', count: STORE_PRODUCTS.filter(p => p.isBestseller).length },
    { id: 'face-care', label: 'Facial Soap Bars', count: STORE_PRODUCTS.filter(p => p.category === 'face-care').length },
    { id: 'body-care', label: 'Body Soap Bars', count: STORE_PRODUCTS.filter(p => p.category === 'body-care').length },
    { id: 'hair-care', label: 'Scalp & Herbal Bars', count: STORE_PRODUCTS.filter(p => p.category === 'hair-care').length },
  ];

  const priceTiers: { id: PriceTier; label: string }[] = [
    { id: 'all', label: 'All Prices (₹500 - ₹1,200)' },
    { id: 'tier-500-699', label: '₹500 - ₹699' },
    { id: 'tier-700-999', label: '₹700 - ₹999' },
    { id: 'tier-1000-1200', label: '₹1,000 - ₹1,200' },
  ];

  return (
    <section id="products-section" className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#EBE4DC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Title & Subheading */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8EFE9] border border-[#CADCCB] text-[#3F5845] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#5F7F67]" />
            <span>The Pure Glow Soap Workshop</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A3728]">
            Handcrafted Pure Glow Soaps
          </h2>
          <p className="text-xs sm:text-sm text-[#8C6547]">
            Each cold-pressed soap bar is cured for 4 to 6 weeks, rich in natural plant glycerin, raw wild forest honey, and certified botanicals. Poured, cut, and wrapped by hand.
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D8C7B8] text-[11px] font-mono text-[#5A3E2B] font-medium mt-1">
            <IndianRupee className="w-3.5 h-3.5 text-[#8C6547]" />
            <span>Curated Artisanal Range: ₹500 to ₹1,200</span>
          </div>
        </div>

        {/* Category Filter Tabs & Sort Controls */}
        <div className="space-y-3 border-b border-[#EBE4DC] pb-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    id={`category-tab-${cat.id}`}
                    onClick={() => onSelectCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#4A3728] text-[#FAF7F2] shadow-xs'
                        : 'bg-white text-[#5A3E2B] border border-[#D8C7B8] hover:bg-[#F5EFEB]'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`ml-1.5 font-mono text-[10px] ${isActive ? 'text-[#FCE7EC]' : 'text-[#8C6547]'}`}>
                      ({cat.count})
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Indicator & Sort Dropdown */}
            <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end text-xs">
              {searchQuery && (
                <div className="inline-flex items-center gap-1.5 text-[#4A3728] bg-white px-3 py-1.5 rounded-full border border-[#D8C7B8]">
                  <span>Search: <strong>"{searchQuery}"</strong></span>
                  <button
                    onClick={() => onSearchChange('')}
                    className="text-[#8C6547] hover:text-red-700 font-bold cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              )}

              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-[#D8C7B8] shadow-2xs">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#8C6547]" />
                <span className="text-[#8C6547] font-medium hidden sm:inline">Sort by:</span>
                <select
                  id="product-sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-[#4A3728] font-semibold focus:outline-hidden cursor-pointer"
                >
                  <option value="featured">Featured Artisanal</option>
                  <option value="rating">Top Customer Rated</option>
                  <option value="price-low">Price: Low to High (₹500 → ₹1,200)</option>
                  <option value="price-high">Price: High to Low (₹1,200 → ₹500)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Price Range Filter Row */}
          <div className="flex items-center gap-2 overflow-x-auto pt-1 pb-1 text-xs">
            <span className="text-[#8C6547] font-medium text-[11px] whitespace-nowrap flex items-center gap-1">
              <IndianRupee className="w-3 h-3 text-[#8C6547]" />
              Price Range:
            </span>
            {priceTiers.map((tier) => {
              const isSelected = selectedPriceTier === tier.id;
              return (
                <button
                  key={tier.id}
                  id={`price-tier-${tier.id}`}
                  onClick={() => setSelectedPriceTier(tier.id)}
                  className={`px-3 py-1 rounded-full text-[11px] font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#5A3E2B] text-white shadow-2xs'
                      : 'bg-white/80 text-[#5A3E2B] border border-[#EBE4DC] hover:bg-white'
                  }`}
                >
                  {tier.label}
                </button>
              );
            })}
            {selectedPriceTier !== 'all' && (
              <button
                onClick={() => setSelectedPriceTier('all')}
                className="text-[11px] text-[#8C6547] hover:text-[#4A3728] underline cursor-pointer ml-1"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#EBE4DC] p-8 space-y-4">
            <p className="text-sm text-[#8C6547]">
              No products found matching your active filters.
            </p>
            <button
              onClick={() => {
                onSearchChange('');
                onSelectCategory('all');
                setSelectedPriceTier('all');
              }}
              className="px-6 py-2.5 bg-[#4A3728] text-[#FAF7F2] text-xs font-semibold rounded-full hover:bg-[#362419] cursor-pointer"
            >
              Reset Filters & Show All (₹500 - ₹1,200)
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
