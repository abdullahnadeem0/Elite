import React from 'react';
import { BRANDS } from '../data/brands';
import { motion } from 'motion/react';
import { Shield, Award, Sparkles } from 'lucide-react';

export const BrandShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-[var(--bg-secondary)] border-y border-[var(--border-color)]/60 transition-colors duration-500">
      <div className="luxury-container">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--accent-gold)] flex items-center justify-center gap-1.5 mb-2">
            <Award className="w-4 h-4" /> Global Footwear Houses
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-outfit text-[var(--text-primary)]">
            World-Renowned Craft & Ateliers
          </h2>
        </div>

        {/* Brand Logo Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {BRANDS.map((brand, idx) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="luxury-card p-5 rounded-2xl flex flex-col items-center justify-center text-center border border-[var(--border-color)] hover:border-[var(--accent-gold)] transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--accent)] text-white font-black text-xs flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {brand.logoText.slice(0, 2)}
              </div>
              <h4 className="font-extrabold text-sm font-outfit text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors">
                {brand.name}
              </h4>
              <p className="text-[10px] text-[var(--text-muted)] mt-0.5">{brand.country}</p>
              <span className="mt-2 text-[9px] uppercase tracking-wider px-2 py-0.5 bg-[var(--accent-light)] rounded-md font-semibold text-[var(--text-secondary)]">
                Est. {brand.founded}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
