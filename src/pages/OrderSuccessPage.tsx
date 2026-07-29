import React from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle2, Truck, PackageCheck, Printer, ArrowRight } from 'lucide-react';

export const OrderSuccessPage: React.FC = () => {
  const { lastOrder, navigateTo } = useShop();

  const order = lastOrder || {
    id: 'ORD-2026-9912',
    date: '2026-07-28',
    total: 890,
    trackingNumber: 'ELS-TRK-98217311',
    estimatedDelivery: '2026-07-31',
    shippingAddress: '740 Park Avenue, Apt 12B, New York, NY 10021'
  };

  return (
    <div className="py-16 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)]">
      <div className="luxury-container max-w-2xl mx-auto">
        
        <div className="luxury-card p-8 sm:p-12 rounded-3xl border border-[var(--border-color)] text-center space-y-6 shadow-2xl">
          
          <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--accent-gold)] block">
              Order Confirmed & Authorized
            </span>
            <h1 className="text-3xl font-extrabold font-outfit mt-1">
              Thank You for Your Order!
            </h1>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Order reference: <strong className="font-mono text-[var(--text-primary)]">{order.id}</strong>
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-3 text-xs text-left">
            <div className="flex justify-between border-b border-[var(--border-color)] pb-2">
              <span className="text-[var(--text-muted)]">Estimated Delivery</span>
              <span className="font-bold text-emerald-600 flex items-center gap-1">
                <Truck className="w-3.5 h-3.5" /> {order.estimatedDelivery}
              </span>
            </div>
            <div className="flex justify-between border-b border-[var(--border-color)] pb-2">
              <span className="text-[var(--text-muted)]">Tracking Number</span>
              <span className="font-mono font-bold text-[var(--accent-gold)]">{order.trackingNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">Destination</span>
              <span className="font-semibold">{order.shippingAddress}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => window.print()}
              className="px-6 py-3 border border-[var(--border-color)] rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-[var(--accent-light)]"
            >
              <Printer className="w-4 h-4" /> Print Order Receipt
            </button>

            <button
              onClick={() => navigateTo('dashboard')}
              className="px-6 py-3 bg-[var(--accent)] text-white text-xs font-bold rounded-xl flex items-center gap-2"
            >
              <span>View Order Timeline</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
