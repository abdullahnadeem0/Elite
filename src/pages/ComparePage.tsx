import React from 'react';
import { useShop } from '../context/ShopContext';
import { SlidersHorizontal, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';

export const ComparePage: React.FC = () => {
  const { compareList, toggleCompare, clearCompare, addToCart, navigateTo } = useShop();

  return (
    <div className="py-12 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)]">
      <div className="luxury-container">
        
        <button
          onClick={() => navigateTo('shop')}
          className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-muted)] hover:text-[var(--text-primary)] mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Catalog
        </button>

        <div className="flex items-center justify-between mb-8 border-b border-[var(--border-color)] pb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-500 flex items-center justify-center">
              <SlidersHorizontal className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold font-outfit">Shoe Specification Compare</h1>
              <p className="text-xs text-[var(--text-muted)] mt-1">Comparing side-by-side materials, origin, weight, and price.</p>
            </div>
          </div>

          {compareList.length > 0 && (
            <button
              onClick={clearCompare}
              className="px-4 py-2 text-xs font-bold text-rose-500 hover:bg-rose-500/10 rounded-xl border border-rose-500/30 flex items-center gap-1.5"
            >
              <Trash2 className="w-4 h-4" /> Clear All
            </button>
          )}
        </div>

        {compareList.length === 0 ? (
          <div className="text-center py-20 luxury-card rounded-3xl space-y-4 max-w-md mx-auto">
            <SlidersHorizontal className="w-12 h-12 text-[var(--text-muted)] mx-auto" />
            <h3 className="text-lg font-bold">No Shoes Selected for Comparison</h3>
            <p className="text-xs text-[var(--text-muted)]">Click the compare icon on any shoe card in the catalog to add up to 4 models.</p>
            <button
              onClick={() => navigateTo('shop')}
              className="px-6 py-3 bg-[var(--accent)] text-white text-xs font-bold rounded-xl"
            >
              Browse Footwear Catalog
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse luxury-card rounded-2xl overflow-hidden border border-[var(--border-color)]">
              <thead>
                <tr className="bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
                  <th className="p-4 text-xs uppercase font-extrabold text-[var(--text-muted)] min-w-[150px]">Feature</th>
                  {compareList.map(p => (
                    <th key={p.id} className="p-4 min-w-[220px]">
                      <div className="relative group space-y-2">
                        <button
                          onClick={() => toggleCompare(p)}
                          className="absolute -top-1 -right-1 p-1 bg-rose-500 text-white rounded-full hover:scale-110"
                          title="Remove"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <img src={p.image} alt={p.name} className="w-32 h-32 object-cover rounded-xl mx-auto" />
                        <h4 className="font-bold text-sm text-center line-clamp-1">{p.name}</h4>
                        <p className="text-xs text-center font-extrabold text-[var(--accent-gold)]">${p.price}</p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)] text-xs">
                <tr>
                  <td className="p-4 font-bold text-[var(--text-muted)]">Brand</td>
                  {compareList.map(p => <td key={p.id} className="p-4 font-semibold">{p.brand}</td>)}
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[var(--text-muted)]">Category</td>
                  {compareList.map(p => <td key={p.id} className="p-4 capitalize">{p.category}</td>)}
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[var(--text-muted)]">Upper Material</td>
                  {compareList.map(p => <td key={p.id} className="p-4">{p.specifications.upperMaterial}</td>)}
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[var(--text-muted)]">Sole Material</td>
                  {compareList.map(p => <td key={p.id} className="p-4">{p.specifications.soleMaterial}</td>)}
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[var(--text-muted)]">Origin</td>
                  {compareList.map(p => <td key={p.id} className="p-4 font-semibold">{p.specifications.origin}</td>)}
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[var(--text-muted)]">Weight</td>
                  {compareList.map(p => <td key={p.id} className="p-4">{p.specifications.weight}</td>)}
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[var(--text-muted)]">Rating</td>
                  {compareList.map(p => <td key={p.id} className="p-4 font-bold text-amber-500">★ {p.rating}</td>)}
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[var(--text-muted)]">Action</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-4 text-center">
                      <button
                        onClick={() => addToCart(p)}
                        className="px-4 py-2 bg-[var(--accent)] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 w-full"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" /> Add to Bag
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
};
