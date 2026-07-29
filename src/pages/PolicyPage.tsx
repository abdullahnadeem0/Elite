import React from 'react';
import { useShop } from '../context/ShopContext';
import { ShieldCheck, Truck, RefreshCw, FileText } from 'lucide-react';

export const PolicyPage: React.FC = () => {
  const { currentPage } = useShop();

  let title = 'Privacy & Security Policy';
  let icon = <ShieldCheck className="w-8 h-8 text-[var(--accent-gold)]" />;
  let content = (
    <div className="space-y-4 text-xs text-[var(--text-secondary)] leading-relaxed">
      <p>At Elite Shoes, we treat your personal information with absolute confidentiality. All transaction data is encrypted using 256-bit SSL technology.</p>
      <h4 className="font-bold text-sm text-[var(--text-primary)]">Information Collection</h4>
      <p>We collect essential order information solely to process shipping, fulfill custom monogramming requests, and deliver VIP tracking notifications.</p>
      <h4 className="font-bold text-sm text-[var(--text-primary)]">Data Protection</h4>
      <p>We never sell or distribute your private contact details to third-party advertisers under any circumstances.</p>
    </div>
  );

  if (currentPage === 'terms') {
    title = 'Terms of Service';
    icon = <FileText className="w-8 h-8 text-[var(--accent-gold)]" />;
    content = (
      <div className="space-y-4 text-xs text-[var(--text-secondary)] leading-relaxed">
        <p>Welcome to Elite Shoes. By accessing or purchasing from our online store, you agree to comply with our international retail terms.</p>
        <h4 className="font-bold text-sm text-[var(--text-primary)]">Product Availability</h4>
        <p>All limited-edition drops are subject to stock availability and assigned strictly on a first-confirmed basis.</p>
      </div>
    );
  } else if (currentPage === 'shipping-policy') {
    title = 'Global Express Shipping Policy';
    icon = <Truck className="w-8 h-8 text-[var(--accent-gold)]" />;
    content = (
      <div className="space-y-4 text-xs text-[var(--text-secondary)] leading-relaxed">
        <p>Elite Shoes provides insured express courier delivery across North America, Europe, Asia, and Australia.</p>
        <h4 className="font-bold text-sm text-[var(--text-primary)]">Delivery Times</h4>
        <p>Orders processed before 2 PM EST are dispatched same day. Delivery window is 2-3 business days.</p>
      </div>
    );
  } else if (currentPage === 'return-policy') {
    title = '30-Day Return & Exchange Guarantee';
    icon = <RefreshCw className="w-8 h-8 text-[var(--accent-gold)]" />;
    content = (
      <div className="space-y-4 text-xs text-[var(--text-secondary)] leading-relaxed">
        <p>If your shoes do not fit perfectly, you may return or exchange them within 30 days of receipt.</p>
        <h4 className="font-bold text-sm text-[var(--text-primary)]">Return Conditions</h4>
        <p>Shoes must be unworn with original box, dust bags, and authentication tags attached.</p>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)]">
      <div className="luxury-container max-w-3xl mx-auto">
        
        <div className="luxury-card p-8 sm:p-12 rounded-3xl border border-[var(--border-color)] space-y-6">
          <div className="flex items-center gap-4 border-b border-[var(--border-color)] pb-6">
            {icon}
            <h1 className="text-2xl sm:text-4xl font-extrabold font-outfit">{title}</h1>
          </div>

          {content}
        </div>

      </div>
    </div>
  );
};
