import React from 'react';
import { useShop } from '../context/ShopContext';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  ShieldCheck, 
  Truck, 
  RefreshCw, 
  PhoneCall, 
  Mail, 
  MapPin,
  Lock
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <footer className="bg-[var(--bg-card)] text-[var(--text-primary)] border-t border-[var(--border-color)] transition-colors duration-500">
      
      {/* Value Proposition Bar */}
      <div className="border-b border-[var(--border-color)]/60 py-8 bg-[var(--bg-secondary)]/30">
        <div className="luxury-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] text-[var(--accent-gold)] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-xs">Insured Express Courier</h5>
              <p className="text-[11px] text-[var(--text-muted)]">Complimentary over $500</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] text-[var(--accent-gold)] flex items-center justify-center shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-xs">30-Day Bespoke Returns</h5>
              <p className="text-[11px] text-[var(--text-muted)]">Hassle-free global exchange</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] text-[var(--accent-gold)] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-xs">Authenticity Certificate</h5>
              <p className="text-[11px] text-[var(--text-muted)]">100% Genuine Artisan Seal</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] text-[var(--accent-gold)] flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-xs">256-Bit Encrypted Checkout</h5>
              <p className="text-[11px] text-[var(--text-muted)]">Bank-Grade Protection</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="luxury-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent)] text-white font-black text-xl flex items-center justify-center">
                E
              </div>
              <div>
                <span className="font-extrabold tracking-widest text-lg font-outfit uppercase">
                  ELITE SHOES<span className="text-[var(--accent-gold)]">.</span>
                </span>
                <span className="text-[10px] tracking-widest font-medium text-[var(--text-muted)] uppercase block">
                  Walk with Confidence
                </span>
              </div>
            </div>

            <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-sm">
              Elite Shoes represents the pinnacle of international luxury footwear. Handcrafted in Italy, the UK, and Japan for those who refuse to compromise on style or comfort.
            </p>

            <div className="flex items-center gap-3 pt-2 text-[var(--text-secondary)]">
              <a href="#instagram" className="p-2 rounded-full hover:bg-[var(--accent-light)] hover:text-[var(--accent-gold)] transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#facebook" className="p-2 rounded-full hover:bg-[var(--accent-light)] hover:text-[var(--accent-gold)] transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#twitter" className="p-2 rounded-full hover:bg-[var(--accent-light)] hover:text-[var(--accent-gold)] transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#linkedin" className="p-2 rounded-full hover:bg-[var(--accent-light)] hover:text-[var(--accent-gold)] transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Categories Links */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-[var(--text-primary)]">Categories</h4>
            <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
              <li><button onClick={() => navigateTo('category', 'men')} className="hover:text-[var(--accent-gold)] transition-colors">Men's Collection</button></li>
              <li><button onClick={() => navigateTo('category', 'women')} className="hover:text-[var(--accent-gold)] transition-colors">Women's Collection</button></li>
              <li><button onClick={() => navigateTo('category', 'running')} className="hover:text-[var(--accent-gold)] transition-colors">Performance Running</button></li>
              <li><button onClick={() => navigateTo('category', 'sneakers')} className="hover:text-[var(--accent-gold)] transition-colors">Luxury Sneakers</button></li>
              <li><button onClick={() => navigateTo('category', 'casual')} className="hover:text-[var(--accent-gold)] transition-colors">Casual Loafers</button></li>
              <li><button onClick={() => navigateTo('category', 'formal')} className="hover:text-[var(--accent-gold)] transition-colors">Formal Oxfords</button></li>
              <li><button onClick={() => navigateTo('category', 'luxury-collection')} className="hover:text-[var(--accent-gold)] font-bold text-[var(--accent-gold)]">Luxury Collection</button></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-[var(--text-primary)]">Concierge</h4>
            <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
              <li><button onClick={() => navigateTo('contact')} className="hover:text-[var(--accent-gold)] transition-colors">Contact VIP Concierge</button></li>
              <li><button onClick={() => navigateTo('faqs')} className="hover:text-[var(--accent-gold)] transition-colors">Frequently Asked Questions</button></li>
              <li><button onClick={() => navigateTo('shipping-policy')} className="hover:text-[var(--accent-gold)] transition-colors">Shipping & Air Delivery</button></li>
              <li><button onClick={() => navigateTo('return-policy')} className="hover:text-[var(--accent-gold)] transition-colors">Returns & Guarantee</button></li>
              <li><button onClick={() => navigateTo('compare')} className="hover:text-[var(--accent-gold)] transition-colors">Shoe Specification Compare</button></li>
              <li><button onClick={() => navigateTo('wishlist')} className="hover:text-[var(--accent-gold)] transition-colors">Saved Wishlist</button></li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-[var(--text-primary)]">Legal & House</h4>
            <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
              <li><button onClick={() => navigateTo('about')} className="hover:text-[var(--accent-gold)] transition-colors">Our Italian Heritage</button></li>
              <li><button onClick={() => navigateTo('privacy-policy')} className="hover:text-[var(--accent-gold)] transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => navigateTo('terms')} className="hover:text-[var(--accent-gold)] transition-colors">Terms of Service</button></li>
              <li><button onClick={() => navigateTo('dashboard')} className="hover:text-[var(--accent-gold)] transition-colors">Collector Account</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Payments & Copyright */}
        <div className="pt-8 mt-12 border-t border-[var(--border-color)]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>&copy; 2026 Elite Shoes Inc. All Rights Reserved. Walk with Confidence.</p>
          
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase font-bold tracking-wider">Accepted VIP Payments:</span>
            <div className="flex items-center gap-2 font-mono font-bold text-[10px]">
              <span className="px-2 py-1 bg-[var(--accent-light)] rounded border border-[var(--border-color)]">VISA</span>
              <span className="px-2 py-1 bg-[var(--accent-light)] rounded border border-[var(--border-color)]">MC</span>
              <span className="px-2 py-1 bg-[var(--accent-light)] rounded border border-[var(--border-color)]">AMEX</span>
              <span className="px-2 py-1 bg-[var(--accent-light)] rounded border border-[var(--border-color)]">APPLE PAY</span>
              <span className="px-2 py-1 bg-[var(--accent-light)] rounded border border-[var(--border-color)]">CRYPTO</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
