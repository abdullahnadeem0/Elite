import React from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { CATEGORIES } from '../data/categories';
import { ArrowLeft, Sparkles } from 'lucide-react';

export const CategoryPage: React.FC = () => {
  const { selectedCategoryFilter, navigateTo } = useShop();

  const currentCat = CATEGORIES.find(c => c.id === selectedCategoryFilter);
  const catTitle = currentCat ? currentCat.name : (selectedCategoryFilter.toUpperCase().replace('-', ' ') + ' FOOTWEAR');
  const catTagline = currentCat ? currentCat.tagline : 'Explore luxury styles crafted by world-class ateliers.';

  const filtered = PRODUCTS.filter(p => {
    if (selectedCategoryFilter === 'men') return p.gender === 'Men' || p.gender === 'Unisex';
    if (selectedCategoryFilter === 'women') return p.gender === 'Women' || p.gender === 'Unisex';
    if (selectedCategoryFilter === 'new-arrivals') return p.isNew;
    if (selectedCategoryFilter === 'sale') return p.isSale;
    if (selectedCategoryFilter === 'luxury-collection') return p.isLuxury;
    if (selectedCategoryFilter === 'limited-edition') return p.isLimited;
    
    return p.category === selectedCategoryFilter || (p.secondaryCategories && p.secondaryCategories.includes(selectedCategoryFilter as any));
  });

  return (
    <div className="py-12 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)]">
      <div className="luxury-container">
        
        {/* Back Button */}
        <button
          onClick={() => navigateTo('shop')}
          className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-muted)] hover:text-[var(--text-primary)] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Full Catalog
        </button>

        {/* Hero Banner for Category */}
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 bg-[#2d1e18] text-white mb-10 shadow-2xl border border-[#8b5e3c]/30">
          <div className="max-w-2xl space-y-3 relative z-10">
            <span className="text-xs font-extrabold tracking-widest text-amber-300 uppercase flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Dedicated Collection
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit">
              {catTitle}
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              {catTagline}
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 luxury-card rounded-3xl">
            <p className="text-base font-bold">No products currently available in this specific category slice.</p>
            <button onClick={() => navigateTo('shop')} className="mt-4 px-6 py-3 bg-[var(--accent)] text-white font-bold text-xs rounded-xl">
              Browse All Shoes
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
