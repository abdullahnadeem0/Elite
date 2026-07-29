import React from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import { Heart, ShoppingBag, ArrowLeft } from 'lucide-react';

export const WishlistPage: React.FC = () => {
  const { wishlist, navigateTo } = useShop();

  return (
    <div className="py-12 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)]">
      <div className="luxury-container">
        
        <button
          onClick={() => navigateTo('shop')}
          className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-muted)] hover:text-[var(--text-primary)] mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Continue Shopping
        </button>

        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-6">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-500 flex items-center justify-center">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold font-outfit">Your Saved Wishlist</h1>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              You have {wishlist.length} luxury shoe styles saved in your collector list.
            </p>
          </div>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-20 luxury-card rounded-3xl space-y-4 max-w-md mx-auto">
            <Heart className="w-12 h-12 text-[var(--text-muted)] mx-auto" />
            <h3 className="text-lg font-bold">Your Wishlist is Currently Empty</h3>
            <p className="text-xs text-[var(--text-muted)]">Save your favorite footwear designs while exploring our global collection.</p>
            <button
              onClick={() => navigateTo('shop')}
              className="px-6 py-3 bg-[var(--accent)] text-white text-xs font-bold rounded-xl"
            >
              Explore Shoes Catalog
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlist.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
