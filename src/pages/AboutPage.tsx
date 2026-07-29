import React from 'react';
import { Award, ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)]">
      <div className="luxury-container">
        
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--accent-gold)]">
            Heritage Since 1988
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-outfit">
            The Legacy of Elite Shoes
          </h1>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            Founded in Florence, Italy, Elite Shoes was born from a singular passion: combining traditional European shoemaking art with cutting-edge ergonomic engineering.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-3xl luxury-card border border-[var(--border-color)] text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-500 mx-auto flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg">200+ Master Craftsmen</h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Every pair undergoes 180 meticulous hand steps executed by third-generation Italian and Japanese master artisans.
            </p>
          </div>

          <div className="p-8 rounded-3xl luxury-card border border-[var(--border-color)] text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-500 mx-auto flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg">Goodyear Welt Construction</h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Engineered to last decades. Resoleable, water-resistant, and contoured to adapt to your foot anatomy over time.
            </p>
          </div>

          <div className="p-8 rounded-3xl luxury-card border border-[var(--border-color)] text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-500 mx-auto flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg">Ethical Full-Grain Leather</h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Sourced exclusively from certified European tanneries maintaining gold-rated environmental standards.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
