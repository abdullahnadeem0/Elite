import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles, Timer, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const OffersSection: React.FC = () => {
  const { navigateTo } = useShop();

  // Animated countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 42,
    seconds: 18
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-[var(--bg-primary)] transition-colors duration-500 overflow-hidden">
      <div className="luxury-container">
        
        <div className="relative rounded-3xl overflow-hidden bg-[#2d1e18] text-white p-8 lg:p-14 border border-[#8b5e3c]/30 shadow-2xl">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Offer Details */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Exclusive Collector Flash Offer</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit leading-tight text-white">
                Save 20% On Monarch Gold & Sovereign Collections
              </h2>

              <p className="text-sm text-slate-300 max-w-lg leading-relaxed">
                Claim your complimentary VIP discount with code <span className="font-mono text-amber-300 font-bold underline">LUXURY20</span>. Includes insured express air courier and luxury wooden box packaging.
              </p>

              {/* Countdown Timer Boxes */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold mr-2">
                  <Timer className="w-4 h-4 animate-spin" style={{ animationDuration: '8s' }} />
                  <span>Ends In:</span>
                </div>

                <div className="flex gap-2">
                  <div className="bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl text-center border border-white/10">
                    <span className="font-extrabold text-lg text-amber-300 block leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="text-[9px] uppercase tracking-wider text-slate-400">Hours</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl text-center border border-white/10">
                    <span className="font-extrabold text-lg text-amber-300 block leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="text-[9px] uppercase tracking-wider text-slate-400">Mins</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl text-center border border-white/10">
                    <span className="font-extrabold text-lg text-amber-300 block leading-none">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="text-[9px] uppercase tracking-wider text-slate-400">Secs</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  onClick={() => navigateTo('category', 'luxury-collection')}
                  className="px-8 py-4 bg-amber-400 text-slate-950 font-black text-sm rounded-2xl hover:bg-amber-300 transition-all shadow-xl hover:shadow-2xl flex items-center gap-3 cursor-pointer"
                >
                  <span>Claim VIP Offer Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Offer Feature Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop"
                  alt="Monarch Gold Offer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 font-black text-xs px-3 py-1.5 rounded-full shadow-lg">
                  20% VIP DISCOUNT
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
