import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

type TabOption = 'all' | 'bestsellers' | 'new' | 'trending' | 'luxury' | 'limited' | 'sale';

export const FeaturedProducts: React.FC = () => {
  const { navigateTo } = useShop();
  const [activeTab, setActiveTab] = useState<TabOption>('all');

  const filteredProducts = PRODUCTS.filter(p => {
    if (activeTab === 'bestsellers') return p.isBestSeller;
    if (activeTab === 'new') return p.isNew;
    if (activeTab === 'trending') return p.isTrending;
    if (activeTab === 'luxury') return p.isLuxury;
    if (activeTab === 'limited') return p.isLimited;
    if (activeTab === 'sale') return p.isSale;
    return true;
  });

  return (
    <section className="py-20 bg-[var(--bg-primary)] transition-colors duration-500">
      <div className="luxury-container">
        
        {/* Header & Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase font-extrabold tracking-widest text-[var(--accent-gold)] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Handpicked Masterpieces</span>
            </div>
            <h2 className="text-clamp-title font-extrabold font-outfit text-[var(--text-primary)]">
              Featured Luxury Footwear
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'all', label: 'All Catalog' },
              { id: 'bestsellers', label: 'Best Sellers' },
              { id: 'new', label: 'New Arrivals' },
              { id: 'trending', label: 'Trending' },
              { id: 'luxury', label: 'Luxury Collection' },
              { id: 'limited', label: 'Limited Edition' },
              { id: 'sale', label: 'On Sale' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabOption)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[var(--accent)] text-white shadow-lg scale-105'
                    : 'glass-panel border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid - Equal Height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigateTo('shop')}
            className="inline-flex items-center gap-3 px-8 py-4 glass-panel border border-[var(--border-color)] text-[var(--text-primary)] font-bold text-sm rounded-2xl hover:bg-[var(--accent-light)] transition-all cursor-pointer shadow-md"
          >
            <span>View Complete 2026 Footwear Catalog</span>
            <ArrowRight className="w-4 h-4 text-[var(--accent-gold)]" />
          </button>
        </div>

      </div>
    </section>
  );
};
