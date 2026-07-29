import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Baroness Vivienne Dupont',
    country: 'Paris, France',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    title: 'The Italian calfskin aroma and finish is unmatched',
    review: 'Elite Shoes has elevated my evening wardrobe completely. The Monarch Gold edition feels like wearing tailored jewelry. The express air courier arrived in Paris within 36 hours.',
    verified: true,
    shoeBought: 'Monarch Gold Edition'
  },
  {
    id: 't2',
    name: 'Sir Arthur Pendelton',
    country: 'London, United Kingdom',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    title: 'Goodyear welt craftsmanship at its finest',
    review: 'As someone who has worn bespoke shoes from Savile Row for 25 years, the Sovereign Wholecut Oxford stands toe-to-toe with $2,000 custom pairs. Remarkable leather structure.',
    verified: true,
    shoeBought: 'Sovereign Wholecut Oxford'
  },
  {
    id: 't3',
    name: 'Kenji Takahashi',
    country: 'Tokyo, Japan',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    title: 'Phantom HyperLight shaved minutes off my marathon time',
    review: 'The carbon fiber plate push-off on the Phantom HyperLight is extraordinary. Unbelievably lightweight and comfortable through all 42 kilometers.',
    verified: true,
    shoeBought: 'Phantom HyperLight Carbon'
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--bg-secondary)]/40 border-y border-[var(--border-color)]/60 transition-colors duration-500">
      <div className="luxury-container">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--accent-gold)] block mb-2">
            VIP Collector Praise
          </span>
          <h2 className="text-clamp-title font-extrabold font-outfit text-[var(--text-primary)]">
            Trusted by Global Connoisseurs
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mt-2">
            Read authentic reviews from diplomats, marathon runners, and fashion icons worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="luxury-card p-6 rounded-2xl flex flex-col justify-between space-y-4 border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] relative"
            >
              <Quote className="w-8 h-8 text-[var(--accent-gold)]/20 absolute top-4 right-4" />

              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <h4 className="font-bold text-base text-[var(--text-primary)] leading-snug">
                  "{t.title}"
                </h4>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-[var(--border-color)]" />
                  <div>
                    <h5 className="font-bold text-xs text-[var(--text-primary)] flex items-center gap-1">
                      {t.name}
                      {t.verified && (
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 inline" title="Verified Collector Purchase" />
                      )}
                    </h5>
                    <p className="text-[10px] text-[var(--text-muted)]">{t.country}</p>
                  </div>
                </div>

                <span className="text-[9px] px-2 py-0.5 rounded-full bg-[var(--accent-light)] text-[var(--text-secondary)] font-semibold truncate max-w-[100px]">
                  {t.shoeBought}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
