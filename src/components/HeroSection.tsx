import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Sparkles, ShieldCheck, Award, Star } from 'lucide-react';
import { motion } from 'motion/react';

export const HeroSection: React.FC = () => {
  const { navigateTo } = useShop();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    setMousePos({ x, y });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden py-12 lg:py-24 bg-[var(--bg-primary)] transition-colors duration-500"
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-gold)]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="luxury-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[var(--border-color)] text-xs font-semibold tracking-wider uppercase text-[var(--accent-gold)]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>2026 Sovereign Luxury Edition</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-clamp-hero font-extrabold font-outfit text-[var(--text-primary)] tracking-tight"
            >
              Walk with <br />
              <span className="text-[var(--accent-gold)]">
                Unrivaled Confidence.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[var(--text-secondary)] font-normal max-w-xl leading-relaxed"
            >
              Precision-crafted in Italy & Northamptonshire using full-grain calfskin, supercritical carbon soles, and 24k gold accents. Luxury engineered for royalty.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => navigateTo('shop')}
                className="px-8 py-4 bg-[var(--accent)] text-white font-bold text-sm rounded-2xl hover:bg-[var(--accent-hover)] transition-all shadow-xl hover:shadow-2xl flex items-center gap-3 group cursor-pointer"
              >
                <span>Shop New Arrival</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigateTo('category', 'luxury-collection')}
                className="px-8 py-4 glass-panel border border-[var(--border-color)] text-[var(--text-primary)] font-bold text-sm rounded-2xl hover:bg-[var(--accent-light)] transition-all cursor-pointer"
              >
                Explore Luxury Collection
              </button>
            </motion.div>

            {/* Stats / Trust Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-[var(--border-color)]/60 grid grid-cols-3 gap-4"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm font-extrabold text-[var(--text-primary)]">4.9 / 5 Rating</p>
                <p className="text-[11px] text-[var(--text-muted)]">Verified VIP Collectors</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[var(--text-primary)] mb-1">
                  <ShieldCheck className="w-4 h-4 text-[var(--accent-gold)]" />
                  <span className="text-sm font-extrabold">100% Genuine</span>
                </div>
                <p className="text-[11px] text-[var(--text-muted)]">Hand-inspected Proof</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[var(--text-primary)] mb-1">
                  <Award className="w-4 h-4 text-[var(--accent-gold)]" />
                  <span className="text-sm font-extrabold">Express Courier</span>
                </div>
                <p className="text-[11px] text-[var(--text-muted)]">Global Insured Air</p>
              </div>
            </motion.div>

          </div>

          {/* Right Image Showcase with 3D Tilt */}
          <div className="lg:col-span-6 relative perspective-1000 flex justify-center">
            
            <motion.div 
              style={{
                transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden luxury-card border border-[var(--border-color)] shadow-2xl group cursor-pointer"
              onClick={() => navigateTo('product-details', 'elite-monarch-gold')}
            >
              {/* Product Hero Image */}
              <img 
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop" 
                alt="Elite Monarch Gold Edition"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay Solid Backdrop */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Shoe Info Banner at Bottom */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs uppercase tracking-widest font-bold text-amber-300">Limited Edition Batch #01</span>
                <h3 className="text-xl font-bold font-outfit">Monarch Gold Leather Low-Top</h3>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-lg font-extrabold">$890 USD</span>
                  <span className="text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-full font-medium">Italian Calfskin</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge 1 */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute top-6 left-2 sm:-left-6 glass-panel bg-[var(--bg-card)] text-[var(--text-primary)] p-3.5 rounded-2xl shadow-2xl border border-[var(--border-color)] flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold">
                24k
              </div>
              <div>
                <p className="text-xs font-bold">Gold-Plated Eyelets</p>
                <p className="text-[10px] text-[var(--text-muted)]">Custom Florence Cast</p>
              </div>
            </motion.div>

            {/* Floating Badge 2 */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-10 right-2 sm:-right-6 glass-panel bg-[var(--bg-card)] text-[var(--text-primary)] p-3.5 rounded-2xl shadow-2xl border border-[var(--border-color)] flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <p className="text-xs font-bold">Handcrafted Guarantee</p>
                <p className="text-[10px] text-[var(--text-muted)]">Numbered Certificate</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
