import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles,
  ShieldCheck,
  Tag
} from 'lucide-react';

export const CartPage: React.FC = () => {
  const { 
    cart, 
    updateCartQty, 
    removeFromCart, 
    clearCart, 
    cartTotal, 
    discountCode, 
    discountAmount, 
    applyDiscount, 
    navigateTo 
  } = useShop();

  const [promoInput, setPromoInput] = useState('');

  const discountVal = cartTotal * discountAmount;
  const shippingVal = cartTotal > 500 || cartTotal === 0 ? 0 : 25;
  const finalTotal = cartTotal - discountVal + shippingVal;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput) {
      applyDiscount(promoInput);
      setPromoInput('');
    }
  };

  return (
    <div className="py-12 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)]">
      <div className="luxury-container">
        
        <button
          onClick={() => navigateTo('shop')}
          className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-muted)] hover:text-[var(--text-primary)] mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Continue Shopping
        </button>

        <div className="flex items-center justify-between mb-8 border-b border-[var(--border-color)] pb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[var(--accent)] text-white flex items-center justify-center">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold font-outfit">Shopping Bag</h1>
              <p className="text-xs text-[var(--text-muted)] mt-1">Review your selected luxury footwear before checkout.</p>
            </div>
          </div>

          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="text-xs font-bold text-rose-500 hover:underline flex items-center gap-1"
            >
              <Trash2 className="w-4 h-4" /> Empty Bag
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20 luxury-card rounded-3xl space-y-4 max-w-md mx-auto">
            <ShoppingBag className="w-12 h-12 text-[var(--text-muted)] mx-auto" />
            <h3 className="text-lg font-bold">Your Bag is Empty</h3>
            <p className="text-xs text-[var(--text-muted)]">Discover our handcrafted 2026 collection and add your pair.</p>
            <button
              onClick={() => navigateTo('shop')}
              className="px-6 py-3 bg-[var(--accent)] text-white text-xs font-bold rounded-xl"
            >
              Explore Collection
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Cart Items List */}
            <div className="lg:col-span-8 space-y-4">
              {cart.map((item, idx) => (
                <div 
                  key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                  className="p-4 rounded-2xl luxury-card border border-[var(--border-color)] flex flex-col sm:flex-row items-center gap-4"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-xl border border-[var(--border-color)] shrink-0"
                  />

                  <div className="flex-1 min-w-0 space-y-1 text-center sm:text-left">
                    <span className="text-[10px] font-extrabold uppercase text-[var(--accent-gold)]">{item.product.brand}</span>
                    <h3 className="font-bold text-sm text-[var(--text-primary)] truncate">{item.product.name}</h3>
                    <div className="text-xs text-[var(--text-muted)] flex flex-wrap justify-center sm:justify-start gap-3 pt-0.5">
                      <span>Size: <strong>EU {item.selectedSize}</strong></span>
                      <span>Color: <strong>{item.selectedColor}</strong></span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center rounded-xl border border-[var(--border-color)] p-1 bg-[var(--bg-primary)]">
                      <button
                        onClick={() => updateCartQty(item.product.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                        className="p-1 rounded-lg hover:bg-[var(--accent-light)]"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateCartQty(item.product.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                        className="p-1 rounded-lg hover:bg-[var(--accent-light)]"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-right min-w-[80px]">
                      <span className="font-black text-sm block">${(item.product.price * item.quantity).toLocaleString()}</span>
                      <span className="text-[10px] text-[var(--text-muted)]">${item.product.price} each</span>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id, item.selectedSize, item.selectedColor)}
                      className="p-2 text-[var(--text-muted)] hover:text-rose-500 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-2xl luxury-card border border-[var(--border-color)] space-y-4">
                <h3 className="font-extrabold text-base border-b border-[var(--border-color)] pb-3">Order Summary</h3>

                {/* Promo Input */}
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                    <input
                      type="text"
                      placeholder="Promo code (Try ELITE10)"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl text-xs"
                    />
                  </div>
                  <button type="submit" className="px-4 py-2 bg-[var(--accent)] text-white text-xs font-bold rounded-xl shrink-0">
                    Apply
                  </button>
                </form>

                {discountCode && (
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-xs font-bold flex items-center justify-between">
                    <span className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5" /> Code: {discountCode}</span>
                    <span>-{discountAmount * 100}%</span>
                  </div>
                )}

                <div className="space-y-2 text-xs pt-2">
                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">Subtotal</span>
                    <span className="font-bold">${cartTotal.toLocaleString()}</span>
                  </div>
                  {discountVal > 0 && (
                    <div className="flex justify-between text-emerald-600">
                      <span>VIP Promo Discount</span>
                      <span className="font-bold">-${discountVal.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">Insured Express Courier</span>
                    <span className="font-bold">{shippingVal === 0 ? 'FREE (Orders > $500)' : `$${shippingVal}`}</span>
                  </div>
                  <div className="border-t border-[var(--border-color)] pt-3 flex justify-between text-base font-black text-[var(--text-primary)]">
                    <span>Total Amount</span>
                    <span>${finalTotal.toLocaleString()} USD</span>
                  </div>
                </div>

                <button
                  onClick={() => navigateTo('checkout')}
                  className="w-full py-4 bg-[var(--accent)] text-white font-bold text-xs rounded-2xl hover:bg-[var(--accent-hover)] transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-[10px] text-[var(--text-muted)] text-center flex items-center justify-center gap-1.5 pt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>256-Bit Encrypted Secure Checkout</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
