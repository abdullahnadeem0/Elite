import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  User, 
  Package, 
  MapPin, 
  CreditCard, 
  LogOut, 
  Clock, 
  Truck, 
  CheckCircle2, 
  ShieldCheck,
  Edit2
} from 'lucide-react';

export const UserDashboardPage: React.FC = () => {
  const { user, orders, logoutUser, navigateTo } = useShop();
  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'addresses'>('orders');

  if (!user) {
    return (
      <div className="py-20 text-center text-[var(--text-primary)]">
        <p className="text-base font-bold">Please sign in to access your collector dashboard.</p>
        <button onClick={() => navigateTo('login')} className="mt-4 px-6 py-3 bg-[var(--accent)] text-white text-xs font-bold rounded-xl">
          Sign In Now
        </button>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)]">
      <div className="luxury-container">
        
        {/* Header Profile Summary */}
        <div className="luxury-card p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full object-cover border-2 border-[var(--accent-gold)] shadow-md" />
            <div>
              <span className="text-[10px] uppercase font-black tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-600">
                VIP Platinum Member
              </span>
              <h1 className="text-2xl font-extrabold font-outfit mt-1">{user.name}</h1>
              <p className="text-xs text-[var(--text-muted)]">{user.email} &bull; {user.phone}</p>
            </div>
          </div>

          <button
            onClick={() => {
              logoutUser();
              navigateTo('home');
            }}
            className="px-5 py-2.5 rounded-xl border border-rose-500/30 text-rose-500 font-bold text-xs hover:bg-rose-500/10 flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <aside className="lg:col-span-3 space-y-2">
            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full text-left px-4 py-3 rounded-2xl text-xs font-bold transition-all flex items-center gap-3 ${
                activeTab === 'orders' ? 'bg-[var(--accent)] text-white shadow-lg' : 'glass-panel text-[var(--text-secondary)] hover:bg-[var(--accent-light)]'
              }`}
            >
              <Package className="w-4 h-4" /> Order History ({orders.length})
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full text-left px-4 py-3 rounded-2xl text-xs font-bold transition-all flex items-center gap-3 ${
                activeTab === 'profile' ? 'bg-[var(--accent)] text-white shadow-lg' : 'glass-panel text-[var(--text-secondary)] hover:bg-[var(--accent-light)]'
              }`}
            >
              <User className="w-4 h-4" /> Personal Profile
            </button>

            <button
              onClick={() => setActiveTab('addresses')}
              className={`w-full text-left px-4 py-3 rounded-2xl text-xs font-bold transition-all flex items-center gap-3 ${
                activeTab === 'addresses' ? 'bg-[var(--accent)] text-white shadow-lg' : 'glass-panel text-[var(--text-secondary)] hover:bg-[var(--accent-light)]'
              }`}
            >
              <MapPin className="w-4 h-4" /> Saved Addresses
            </button>
          </aside>

          {/* Main Panel Content */}
          <main className="lg:col-span-9">
            
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <h3 className="text-xl font-extrabold font-outfit">Your Collector Order Timeline</h3>
                
                {orders.length === 0 ? (
                  <div className="p-8 luxury-card rounded-2xl text-center space-y-2">
                    <p className="text-sm font-bold">No previous orders found.</p>
                  </div>
                ) : (
                  orders.map(order => (
                    <div key={order.id} className="p-6 rounded-3xl luxury-card border border-[var(--border-color)] space-y-4">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-color)] pb-3 text-xs">
                        <div>
                          <span className="text-[var(--text-muted)] block">Order Reference</span>
                          <span className="font-mono font-extrabold text-[var(--text-primary)]">{order.id}</span>
                        </div>
                        <div>
                          <span className="text-[var(--text-muted)] block">Order Date</span>
                          <span className="font-semibold">{order.date}</span>
                        </div>
                        <div>
                          <span className="text-[var(--text-muted)] block">Status</span>
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 font-bold text-[11px] inline-flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> {order.status}
                          </span>
                        </div>
                        <div>
                          <span className="text-[var(--text-muted)] block">Total Paid</span>
                          <span className="font-black text-sm text-[var(--accent-gold)]">${order.total.toLocaleString()}</span>
                        </div>
                      </div>

                      {/* Items */}
                      <div className="space-y-3">
                        {order.items.map((it, idx) => (
                          <div key={idx} className="flex items-center gap-4 text-xs">
                            <img src={it.product.image} alt={it.product.name} className="w-12 h-12 object-cover rounded-xl border border-[var(--border-color)]" />
                            <div className="flex-1 min-w-0">
                              <p className="font-bold truncate">{it.product.name}</p>
                              <p className="text-[10px] text-[var(--text-muted)]">EU {it.selectedSize} &bull; {it.selectedColor} &bull; Qty: {it.quantity}</p>
                            </div>
                            <span className="font-bold">${(it.product.price * it.quantity).toLocaleString()}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-[var(--border-color)] text-xs flex justify-between items-center text-[var(--text-muted)]">
                        <span>Tracking: <strong className="font-mono text-[var(--text-primary)]">{order.trackingNumber}</strong></span>
                        <span>Estimated: <strong className="text-[var(--text-primary)]">{order.estimatedDelivery}</strong></span>
                      </div>

                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="p-8 rounded-3xl luxury-card border border-[var(--border-color)] space-y-6">
                <h3 className="text-xl font-extrabold font-outfit">Personal Information</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                    <span className="text-[var(--text-muted)] block">Full Name</span>
                    <span className="font-bold text-sm">{user.name}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                    <span className="text-[var(--text-muted)] block">Email</span>
                    <span className="font-bold text-sm">{user.email}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                    <span className="text-[var(--text-muted)] block">Phone</span>
                    <span className="font-bold text-sm">{user.phone}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                    <span className="text-[var(--text-muted)] block">Collector ID</span>
                    <span className="font-bold font-mono text-xs">{user.id}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="p-8 rounded-3xl luxury-card border border-[var(--border-color)] space-y-4">
                <h3 className="text-xl font-extrabold font-outfit">Default Shipping Destination</h3>
                <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-xs space-y-1">
                  <span className="font-bold block text-sm">{user.name}</span>
                  <p>{user.address.street}</p>
                  <p>{user.address.city}, {user.address.state} {user.address.zip}</p>
                  <p className="font-semibold text-[var(--accent-gold)]">{user.address.country}</p>
                </div>
              </div>
            )}

          </main>

        </div>

      </div>
    </div>
  );
};
