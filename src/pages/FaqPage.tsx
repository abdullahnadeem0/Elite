import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQS = [
  {
    q: 'How do I choose the right size for my Elite Shoes?',
    a: 'Our shoes fit true to standard EU sizing. We recommend checking our detailed Size Guide or contacting our VIP Concierge for personalized foot fitting advice.'
  },
  {
    q: 'What is the estimated delivery timeframe?',
    a: 'All orders include complimentary Express Air Courier delivery (2-3 business days globally). Orders above $500 automatically qualify for insured priority handling.'
  },
  {
    q: 'What is your return and exchange policy?',
    a: 'We offer a 30-day complimentary return or size exchange guarantee on all unworn items in original box condition with intact security tags.'
  },
  {
    q: 'Are Elite Shoes resoleable?',
    a: 'Yes, all our Goodyear welted oxfords, boots, and leather loafers feature resoleable Goodyear welt soles that can be refurbished by any master cobbler.'
  },
  {
    q: 'How do I care for full-grain calfskin leather?',
    a: 'We recommend applying high-grade beeswax polish every 3-4 weeks and storing your shoes with cedar shoe trees to maintain original shape and moisture balance.'
  }
];

export const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="py-12 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)]">
      <div className="luxury-container max-w-3xl mx-auto">
        
        <div className="text-center mb-12 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--accent-gold)] flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" /> FAQ Center
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit">
            Frequently Asked Questions
          </h1>
          <p className="text-xs text-[var(--text-muted)]">
            Everything you need to know about purchasing, fitting, and caring for your footwear.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="luxury-card rounded-2xl border border-[var(--border-color)] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-5 text-left font-bold text-sm flex justify-between items-center"
              >
                <span>{faq.q}</span>
                {openIndex === idx ? <ChevronUp className="w-4 h-4 text-[var(--accent-gold)]" /> : <ChevronDown className="w-4 h-4 text-[var(--text-muted)]" />}
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 text-xs text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-color)]/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
