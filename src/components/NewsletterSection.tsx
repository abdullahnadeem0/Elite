import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Mail, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const NewsletterSection: React.FC = () => {
  const { addToast } = useShop();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      addToast({
        type: 'error',
        title: 'Valid Email Required',
        description: 'Please enter a valid email address to join the VIP Concierge.'
      });
      return;
    }

    setSubscribed(true);
    addToast({
      type: 'success',
      title: 'Welcome to Elite Private Circle',
      description: 'Your 15% Welcome Pass code: "ELITE10" has been sent to your inbox.'
    });
  };

  return (
    <section className="py-20 bg-[var(--bg-secondary)] border-t border-[var(--border-color)]/60 transition-colors duration-500">
      <div className="luxury-container">
        
        <div className="max-w-3xl mx-auto luxury-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden bg-[var(--bg-card)] border border-[var(--border-color)] shadow-2xl">
          
          <div className="w-12 h-12 rounded-2xl bg-[var(--accent)] text-white mx-auto flex items-center justify-center mb-6 shadow-lg">
            <Mail className="w-6 h-6" />
          </div>

          <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--accent-gold)] block mb-2">
            The Private Concierge Circle
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-outfit text-[var(--text-primary)]">
            Receive Private Collector Invitations & Secret Drops
          </h2>

          <p className="text-sm text-[var(--text-secondary)] mt-3 max-w-lg mx-auto leading-relaxed">
            Subscribe to receive private access to limited-run artisan releases, bespoke Trunk Show dates, and custom monogramming privileges.
          </p>

          {subscribed ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mt-8 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 font-bold text-sm inline-flex items-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>You are officially registered. Check your email for your welcome pass!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                <input
                  type="email"
                  placeholder="Enter your VIP email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-4 rounded-2xl bg-[var(--bg-primary)] text-xs text-[var(--text-primary)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-gold)] shadow-inner transition-all"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-4 bg-[var(--accent)] text-white font-bold text-xs rounded-2xl hover:bg-[var(--accent-hover)] transition-all shadow-xl flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <span>Join VIP Circle</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <p className="text-[10px] text-[var(--text-muted)] mt-4">
            We value your privacy. Zero spam. Unsubscribe at any time with a single click.
          </p>

        </div>

      </div>
    </section>
  );
};
