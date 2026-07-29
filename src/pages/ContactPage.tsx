import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { addToast } = useShop();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToast({
      type: 'success',
      title: 'Concierge Inquiry Dispatched',
      description: 'An Elite footwear advisor will contact you within 2 hours.'
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="py-12 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)]">
      <div className="luxury-container">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--accent-gold)] block mb-2">
            24/7 VIP Concierge Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit">
            Connect with Our Masters
          </h1>
          <p className="text-sm text-[var(--text-secondary)] mt-2">
            Whether inquiring about bespoke sizing, trunk show appointments, or private order status, our advisors are at your service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl luxury-card border border-[var(--border-color)] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent)] text-white flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[var(--text-muted)] uppercase">Direct Telephone</h4>
                  <p className="font-bold text-sm">+1 (800) 888-ELITE</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent)] text-white flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[var(--text-muted)] uppercase">Concierge Email</h4>
                  <p className="font-bold text-sm">concierge@eliteshoes.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent)] text-white flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[var(--text-muted)] uppercase">Flagship Showroom</h4>
                  <p className="font-bold text-sm">740 Park Avenue, New York, NY</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent)] text-white flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[var(--text-muted)] uppercase">Hours of Operation</h4>
                  <p className="font-bold text-sm">24 Hours / 7 Days a Week</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl luxury-card border border-[var(--border-color)] space-y-4">
              <h3 className="font-extrabold text-lg flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[var(--accent-gold)]" /> Dispatch a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="font-bold text-[var(--text-muted)] block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
              </div>

              <div className="text-xs">
                <label className="font-bold text-[var(--text-muted)] block mb-1">Inquiry Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]"
                />
              </div>

              <div className="text-xs">
                <label className="font-bold text-[var(--text-muted)] block mb-1">Message Details</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-4 bg-[var(--accent)] text-white font-bold text-xs rounded-2xl hover:bg-[var(--accent-hover)] transition-all shadow-xl flex items-center gap-2 cursor-pointer"
              >
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};
