import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  X, 
  Star, 
  ShoppingBag, 
  Heart, 
  SlidersHorizontal, 
  Truck, 
  ShieldCheck, 
  Check, 
  Minus, 
  Plus,
  Ruler
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ProductDetailsModal: React.FC = () => {
  const { 
    quickViewProduct, 
    setQuickViewProduct, 
    addToCart, 
    toggleWishlist, 
    isInWishlist,
    toggleCompare,
    isInCompare,
    navigateTo
  } = useShop();

  const product = quickViewProduct;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number>(product?.availableSizes[0] || 42);
  const [selectedColor, setSelectedColor] = useState<string>(product?.availableColors[0]?.name || 'Standard');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'reviews'>('desc');

  if (!product) return null;

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image, product.secondaryImage];
  const isSaved = isInWishlist(product.id);
  const isCompared = isInCompare(product.id);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl glass-panel bg-[var(--bg-card)] text-[var(--text-primary)] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[var(--border-color)] max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-[var(--bg-primary)] hover:bg-[var(--accent-light)] text-[var(--text-primary)] transition-colors border border-[var(--border-color)] z-20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Image Gallery */}
            <div className="md:col-span-6 space-y-4">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
                <img
                  src={images[activeImageIndex] || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      activeImageIndex === idx ? 'border-[var(--accent-gold)] scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`thumb ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Product Details */}
            <div className="md:col-span-6 flex flex-col justify-between space-y-5">
              
              <div>
                <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-1">
                  <span className="font-bold uppercase tracking-wider">{product.brand}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 font-bold text-[10px]">
                    {product.inStock ? 'In Stock (Ready to Ship)' : 'Out of Stock'}
                  </span>
                </div>

                <h2 className="text-2xl font-extrabold font-outfit text-[var(--text-primary)] leading-tight">
                  {product.name}
                </h2>

                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span className="font-bold text-sm text-[var(--text-primary)]">{product.rating}</span>
                  </div>
                  <span className="text-xs text-[var(--text-muted)]">({product.reviewCount} Reviews)</span>
                </div>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-2xl font-black text-[var(--text-primary)]">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-[var(--text-muted)] line-through">${product.originalPrice}</span>
                  )}
                </div>
              </div>

              {/* Color Swatches */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                  Color: <span className="text-[var(--text-primary)]">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-2">
                  {product.availableColors.map(c => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-7 h-7 rounded-full border border-black/30 flex items-center justify-center transition-transform ${
                        selectedColor === c.name ? 'ring-2 ring-[var(--accent-gold)] ring-offset-2 scale-110' : ''
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {selectedColor === c.name && <Check className="w-3.5 h-3.5 text-white mix-blend-difference" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-bold uppercase tracking-wider text-[var(--text-muted)]">Select Shoe Size (EU)</label>
                  <button className="text-[10px] text-[var(--accent-gold)] underline font-semibold flex items-center gap-1">
                    <Ruler className="w-3 h-3" /> Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.availableSizes.map(sz => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                        selectedSize === sz
                          ? 'bg-[var(--accent)] text-white border-[var(--accent)] shadow-md'
                          : 'border-[var(--border-color)] hover:bg-[var(--accent-light)] text-[var(--text-secondary)]'
                      }`}
                    >
                      EU {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Picker & Add to Cart */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center rounded-xl border border-[var(--border-color)] p-1 bg-[var(--bg-primary)]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1.5 rounded-lg hover:bg-[var(--accent-light)] text-[var(--text-primary)]"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-xs font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1.5 rounded-lg hover:bg-[var(--accent-light)] text-[var(--text-primary)]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={() => {
                    addToCart(product, selectedSize, selectedColor, quantity);
                    setQuickViewProduct(null);
                  }}
                  className="flex-1 py-3.5 px-6 rounded-2xl bg-[var(--accent)] text-white font-bold text-xs hover:bg-[var(--accent-hover)] transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag &bull; ${(product.price * quantity).toLocaleString()}</span>
                </button>
              </div>

              {/* Wishlist / Compare Row */}
              <div className="flex items-center gap-4 text-xs pt-1">
                <button
                  onClick={() => toggleWishlist(product)}
                  className="flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  <Heart className={`w-4 h-4 ${isSaved ? 'text-rose-500 fill-current' : ''}`} />
                  <span>{isSaved ? 'In Wishlist' : 'Add to Wishlist'}</span>
                </button>

                <button
                  onClick={() => toggleCompare(product)}
                  className="flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>{isCompared ? 'In Comparison' : 'Compare Specification'}</span>
                </button>

                <button
                  onClick={() => {
                    setQuickViewProduct(null);
                    navigateTo('product-details', product.id);
                  }}
                  className="ml-auto font-bold text-[var(--accent-gold)] underline"
                >
                  Full Page Details &rarr;
                </button>
              </div>

            </div>

          </div>

          {/* Bottom Tabs: Description / Specs / Reviews */}
          <div className="mt-8 border-t border-[var(--border-color)] pt-6">
            <div className="flex gap-6 border-b border-[var(--border-color)] pb-2 text-xs font-bold">
              <button
                onClick={() => setActiveTab('desc')}
                className={`pb-2 ${activeTab === 'desc' ? 'border-b-2 border-[var(--accent-gold)] text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`pb-2 ${activeTab === 'specs' ? 'border-b-2 border-[var(--accent-gold)] text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`pb-2 ${activeTab === 'reviews' ? 'border-b-2 border-[var(--accent-gold)] text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}`}
              >
                Reviews ({product.reviews.length})
              </button>
            </div>

            <div className="py-4 text-xs text-[var(--text-secondary)] leading-relaxed">
              {activeTab === 'desc' && <p>{product.description}</p>}
              
              {activeTab === 'specs' && (
                <div className="grid grid-cols-2 gap-4">
                  <div><strong className="text-[var(--text-primary)]">Upper:</strong> {product.specifications.upperMaterial}</div>
                  <div><strong className="text-[var(--text-primary)]">Sole:</strong> {product.specifications.soleMaterial}</div>
                  <div><strong className="text-[var(--text-primary)]">Closure:</strong> {product.specifications.closure}</div>
                  <div><strong className="text-[var(--text-primary)]">Origin:</strong> {product.specifications.origin}</div>
                  <div><strong className="text-[var(--text-primary)]">Weight:</strong> {product.specifications.weight}</div>
                  <div><strong className="text-[var(--text-primary)]">Style Code:</strong> {product.specifications.styleCode}</div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-3">
                  {product.reviews.length > 0 ? (
                    product.reviews.map(r => (
                      <div key={r.id} className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-[var(--text-primary)]">{r.userName}</span>
                          <span className="text-[10px] text-[var(--text-muted)]">{r.date}</span>
                        </div>
                        <p className="text-xs font-semibold">{r.title}</p>
                        <p className="text-[11px] text-[var(--text-muted)] mt-1">{r.comment}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-[var(--text-muted)]">No customer reviews yet. Be the first collector to review!</p>
                  )}
                </div>
              )}
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
