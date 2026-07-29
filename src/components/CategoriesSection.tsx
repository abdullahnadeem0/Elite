import React from 'react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES } from '../data/categories';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export const CategoriesSection: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <section className="py-16 bg-[var(--bg-secondary)]/50 border-y border-[var(--border-color)]/60 transition-colors duration-500">
      <div className="luxury-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-[var(--accent-gold)] block mb-1">
              Curated Craftsmanship
            </span>
            <h2 className="text-clamp-title font-extrabold font-outfit text-[var(--text-primary)]">
              Explore by Category
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] max-w-md">
            From hyper-responsive marathon carbon soles to hand-patinated Italian wholecut Oxfords, explore bespoke footwear categories.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => navigateTo('category', cat.id)}
              className="group relative h-64 rounded-2xl overflow-hidden luxury-card border border-[var(--border-color)] cursor-pointer"
            >
              {/* Image Background with Zoom Effect */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Solid Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-300" />

              {/* Top Tagline / Count */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 font-medium">
                  {cat.count} Styles
                </span>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[var(--accent-gold)] group-hover:text-black transition-colors duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold font-outfit group-hover:text-amber-300 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-1 opacity-90">
                  {cat.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
