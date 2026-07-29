import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { User, Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export const AuthPage: React.FC = () => {
  const { loginUser, navigateTo } = useShop();

  const [mode, setMode] = useState<'login' | 'register' | 'forgot'>('login');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'forgot') {
      alert(`Password reset link dispatched to ${email}`);
      setMode('login');
      return;
    }
    loginUser(email || 'collector@eliteshoes.com', name || 'Alexander Sterling');
    navigateTo('dashboard');
  };

  return (
    <div className="py-16 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] flex items-center justify-center">
      <div className="luxury-container max-w-md w-full">
        
        <div className="luxury-card p-8 sm:p-10 rounded-3xl border border-[var(--border-color)] shadow-2xl space-y-6">
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-[var(--accent)] text-white font-black text-2xl flex items-center justify-center mx-auto shadow-md">
              E
            </div>
            <h1 className="text-2xl font-extrabold font-outfit uppercase tracking-widest">
              {mode === 'login' ? 'VIP Collector Sign In' : mode === 'register' ? 'Join Elite Atelier' : 'Reset Password'}
            </h1>
            <p className="text-xs text-[var(--text-muted)]">
              {mode === 'login' ? 'Access your private orders and saved wishlist.' : mode === 'register' ? 'Create your private collector profile.' : 'Enter your email address.'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {mode === 'register' && (
              <div>
                <label className="font-bold text-[var(--text-muted)] block mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lord Sterling Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="font-bold text-[var(--text-muted)] block mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                <input
                  type="email"
                  required
                  placeholder="vip@eliteshoes.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]"
                />
              </div>
            </div>

            {mode !== 'forgot' && (
              <div>
                <label className="font-bold text-[var(--text-muted)] block mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]"
                  />
                </div>
              </div>
            )}

            {mode === 'login' && (
              <div className="text-right">
                <button
                  type="button"
                  onClick={() => setMode('forgot')}
                  className="text-[11px] text-[var(--accent-gold)] underline font-bold"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-[var(--accent)] text-white font-bold text-xs rounded-xl shadow-xl hover:bg-[var(--accent-hover)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{mode === 'login' ? 'Sign In to Account' : mode === 'register' ? 'Register Private Profile' : 'Send Reset Link'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="text-center pt-2 border-t border-[var(--border-color)] text-xs">
            {mode === 'login' ? (
              <p className="text-[var(--text-muted)]">
                Don't have an account?{' '}
                <button onClick={() => setMode('register')} className="font-bold text-[var(--accent-gold)] underline">
                  Register Here
                </button>
              </p>
            ) : (
              <p className="text-[var(--text-muted)]">
                Already registered?{' '}
                <button onClick={() => setMode('login')} className="font-bold text-[var(--accent-gold)] underline">
                  Sign In
                </button>
              </p>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
