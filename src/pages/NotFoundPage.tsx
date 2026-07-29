import React from 'react';
import { useShop } from '../context/ShopContext';
import { Compass, Home, ShoppingBag } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <div className="py-20 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] flex items-center justify-center">
      <div className="luxury-container text-center max-w-md mx-auto space-y-6">
        
        <div className="w-20 h-20 rounded-3xl bg-amber-500/20 text-amber-500 mx-auto flex items-center justify-center">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>

        <h1 className="text-6xl font-black font-outfit text-[var(--accent-gold)]">404</h1>

        <div>
          <h2 className="text-xl font-bold font-outfit">Page Not Found</h2>
          <p className="text-xs text-[var(--text-muted)] mt-1">
            The page or footwear collection you are looking for has been moved or retired.
          </p>
        </div>

        <div className="flex justify-center gap-3 pt-2">
          <button
            onClick={() => navigateTo('home')}
            className="px-6 py-3 bg-[var(--accent)] text-white text-xs font-bold rounded-xl flex items-center gap-1.5"
          >
            <Home className="w-4 h-4" /> Return Home
          </button>

          <button
            onClick={() => navigateTo('shop')}
            className="px-6 py-3 border border-[var(--border-color)] text-xs font-bold rounded-xl flex items-center gap-1.5 hover:bg-[var(--accent-light)]"
          >
            <ShoppingBag className="w-4 h-4" /> Browse Shop
          </button>
        </div>

      </div>
    </div>
  );
};
