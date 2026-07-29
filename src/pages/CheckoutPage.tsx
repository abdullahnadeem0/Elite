import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  Lock, 
  CreditCard, 
  Truck, 
  CheckCircle2, 
  ArrowLeft,
  ShieldCheck,
  Building,
  User,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const { cart, cartTotal, discountAmount, placeOrder, user, navigateTo } = useShop();

  const [formData, setFormData] = useState({
    fullName: user?.name || 'Alexander Sterling',
    email: user?.email || 'alexander@eliteshoes.com',
    phone: user?.phone || '+1 (555) 019-2831',
    street: user?.address.street || '740 Park Avenue, Apt 12B',
    city: user?.address.city || 'New York',
    state: user?.address.state || 'NY',
    zip: user?.address.zip || '10021',
    country: user?.address.country || 'United States'
  });

  const [shippingOption, setShippingOption] = useState<'express' | 'vip'>('express');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'applepay' | 'concierge'>('card');
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 8821');

  const discountVal = cartTotal * discountAmount;
  const shippingVal = shippingOption === 'vip' ? 50 : (cartTotal > 500 ? 0 : 25);
  const finalTotal = cartTotal - discountVal + shippingVal;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    placeOrder(formData, paymentMethod === 'applepay' ? 'Apple Pay VIP' : paymentMethod === 'concierge' ? 'Concierge Invoice' : 'Credit Card (**** 8821)');
  };

  return (
    <div className="py-12 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)]">
      <div className="luxury-container">
        
        <button
          onClick={() => navigateTo('cart')}
          className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-muted)] hover:text-[var(--text-primary)] mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Bag
        </button>

        <div className="mb-8 border-b border-[var(--border-color)] pb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-gold)] flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5" /> 256-Bit Encrypted Secure Checkout
          </span>
          <h1 className="text-3xl font-extrabold font-outfit mt-1">Complete Your Collector Order</h1>
        </div>

        <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Form Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Contact & Shipping Details */}
            <div className="p-6 rounded-3xl luxury-card border border-[var(--border-color)] space-y-4">
              <h3 className="font-extrabold text-base flex items-center gap-2">
                <User className="w-4 h-4 text-[var(--accent-gold)]" /> Shipping & Recipient Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="font-bold text-[var(--text-muted)] block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]"
                  />
                </div>

                <div>
                  <label className="font-bold text-[var(--text-muted)] block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="font-bold text-[var(--text-muted)] block mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={formData.street}
                    onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]"
                  />
                </div>

                <div>
                  <label className="font-bold text-[var(--text-muted)] block mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]"
                  />
                </div>

                <div>
                  <label className="font-bold text-[var(--text-muted)] block mb-1">State / Province</label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]"
                  />
                </div>

                <div>
                  <label className="font-bold text-[var(--text-muted)] block mb-1">Postal / ZIP Code</label>
                  <input
                    type="text"
                    required
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]"
                  />
                </div>

                <div>
                  <label className="font-bold text-[var(--text-muted)] block mb-1">Country</label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]"
                  />
                </div>
              </div>
            </div>

            {/* Courier Selection */}
            <div className="p-6 rounded-3xl luxury-card border border-[var(--border-color)] space-y-4">
              <h3 className="font-extrabold text-base flex items-center gap-2">
                <Truck className="w-4 h-4 text-[var(--accent-gold)]" /> Select Delivery Courier
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <label 
                  onClick={() => setShippingOption('express')}
                  className={`p-4 rounded-2xl border cursor-pointer flex flex-col justify-between space-y-2 transition-all ${
                    shippingOption === 'express' ? 'border-[var(--accent-gold)] bg-[var(--accent-light)]' : 'border-[var(--border-color)]'
                  }`}
                >
                  <div className="flex justify-between font-bold">
                    <span>Express Air Courier</span>
                    <span>{cartTotal > 500 ? 'FREE' : '$25'}</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)]">Delivered in 2-3 Business Days with tracking.</p>
                </label>

                <label 
                  onClick={() => setShippingOption('vip')}
                  className={`p-4 rounded-2xl border cursor-pointer flex flex-col justify-between space-y-2 transition-all ${
                    shippingOption === 'vip' ? 'border-[var(--accent-gold)] bg-[var(--accent-light)]' : 'border-[var(--border-color)]'
                  }`}
                >
                  <div className="flex justify-between font-bold">
                    <span>VIP Hand-Delivery Concierge</span>
                    <span>$50</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)]">White-glove scheduled room delivery & fitting.</p>
                </label>
              </div>
            </div>

            {/* Payment Method */}
            <div className="p-6 rounded-3xl luxury-card border border-[var(--border-color)] space-y-4">
              <h3 className="font-extrabold text-base flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[var(--accent-gold)]" /> VIP Payment Options
              </h3>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                    paymentMethod === 'card' ? 'bg-[var(--accent)] text-white' : 'border-[var(--border-color)]'
                  }`}
                >
                  Credit Card
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('applepay')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                    paymentMethod === 'applepay' ? 'bg-[var(--accent)] text-white' : 'border-[var(--border-color)]'
                  }`}
                >
                  Apple Pay
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('concierge')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                    paymentMethod === 'concierge' ? 'bg-[var(--accent)] text-white' : 'border-[var(--border-color)]'
                  }`}
                >
                  Concierge Invoice
                </button>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-3 pt-2 text-xs">
                  <div>
                    <label className="font-bold text-[var(--text-muted)] block mb-1">Card Number</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-[var(--text-muted)] block mb-1">Expiry</label>
                      <input type="text" defaultValue="09/28" className="w-full p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] font-mono" />
                    </div>
                    <div>
                      <label className="font-bold text-[var(--text-muted)] block mb-1">CVV</label>
                      <input type="text" defaultValue="882" className="w-full p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] font-mono" />
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Right Summary Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl luxury-card border border-[var(--border-color)] space-y-4">
              <h3 className="font-extrabold text-base border-b border-[var(--border-color)] pb-3">Items in Order ({cart.length})</h3>

              <div className="space-y-3 max-h-60 overflow-y-auto">
                {cart.map(item => (
                  <div key={item.product.id} className="flex items-center gap-3 text-xs">
                    <img src={item.product.image} alt={item.product.name} className="w-12 h-12 object-cover rounded-lg" />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold truncate">{item.product.name}</p>
                      <p className="text-[10px] text-[var(--text-muted)]">Qty: {item.quantity} &bull; EU {item.selectedSize}</p>
                    </div>
                    <span className="font-black">${(item.product.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-xs border-t border-[var(--border-color)] pt-3">
                <div className="flex justify-between">
                  <span className="text-[var(--text-muted)]">Subtotal</span>
                  <span className="font-bold">${cartTotal.toLocaleString()}</span>
                </div>
                {discountVal > 0 && (
                  <div className="flex justify-between text-emerald-600">
                    <span>VIP Discount</span>
                    <span className="font-bold">-${discountVal.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-[var(--text-muted)]">Shipping</span>
                  <span className="font-bold">${shippingVal}</span>
                </div>
                <div className="flex justify-between text-base font-black border-t border-[var(--border-color)] pt-2">
                  <span>Total Payable</span>
                  <span className="text-[var(--accent-gold)]">${finalTotal.toLocaleString()} USD</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[var(--accent)] text-white font-black text-xs rounded-2xl hover:bg-[var(--accent-hover)] transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Confirm & Authorize Order</span>
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
