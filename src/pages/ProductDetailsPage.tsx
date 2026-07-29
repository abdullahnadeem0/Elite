import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { 
  Star, 
  ShoppingBag, 
  Heart, 
  SlidersHorizontal, 
  Truck, 
  ShieldCheck, 
  Check, 
  Minus, 
  Plus,
  ArrowLeft,
  Ruler,
  MessageSquare
} from 'lucide-react';
import { motion } from 'motion/react';

export const ProductDetailsPage: React.FC = () => {
  const { 
    selectedProductId, 
    navigateTo, 
    addToCart, 
    toggleWishlist, 
    isInWishlist,
    toggleCompare,
    isInCompare,
    addToast
  } = useShop();

  const product = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number>(product.availableSizes[0] || 42);
  const [selectedColor, setSelectedColor] = useState<string>(product.availableColors[0]?.name || 'Standard');
  const [quantity, setQuantity] = useState(1);

  // Review Form state
  const [newReviewTitle, setNewReviewTitle] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image, product.secondaryImage];
  const isSaved = isInWishlist(product.id);
  const isCompared = isInCompare(product.id);

  // Related products from same category or brand
  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id && (p.category === product.category || p.brand === product.brand)).slice(0, 4);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewTitle || !newReviewComment) {
      addToast({ type: 'error', title: 'Review Incomplete', description: 'Please fill in both title and comment.' });
      return;
    }
    addToast({
      type: 'success',
      title: 'Review Submitted',
      description: 'Thank you for submitting your verified feedback!'
    });
    setNewReviewTitle('');
    setNewReviewComment('');
  };

  return (
    <div className="py-12 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)]">
      <div className="luxury-container">
        
        {/* Back Link */}
        <button
          onClick={() => navigateTo('shop')}
          className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-muted)] hover:text-[var(--text-primary)] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </button>

        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden luxury-card border border-[var(--border-color)] bg-[var(--bg-secondary)]">
              <img
                src={images[activeImageIndex] || product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            {/* Gallery Thumbnails */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    activeImageIndex === idx ? 'border-[var(--accent-gold)] scale-105 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`thumb ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Product Buy Box */}
          <div className="lg:col-span-5 space-y-6">
            
            <div>
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-1">
                <span className="font-extrabold uppercase tracking-wider">{product.brand}</span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-600 font-bold text-xs">
                  {product.inStock ? 'In Stock (Ready for Dispatch)' : 'Out of Stock'}
                </span>
              </div>

              <h1 className="text-3xl font-extrabold font-outfit text-[var(--text-primary)]">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="font-bold text-sm text-[var(--text-primary)]">{product.rating}</span>
                </div>
                <span className="text-xs text-[var(--text-muted)]">({product.reviewCount} Verified Reviews)</span>
              </div>

              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-3xl font-black text-[var(--text-primary)]">${product.price} USD</span>
                {product.originalPrice && (
                  <span className="text-base text-[var(--text-muted)] line-through">${product.originalPrice}</span>
                )}
              </div>
            </div>

            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {product.description}
            </p>

            {/* Color Swatches */}
            <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                Selected Colorway: <span className="text-[var(--text-primary)]">{selectedColor}</span>
              </label>
              <div className="flex items-center gap-2">
                {product.availableColors.map(c => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-8 h-8 rounded-full border border-black/30 flex items-center justify-center transition-transform ${
                      selectedColor === c.name ? 'ring-2 ring-[var(--accent-gold)] ring-offset-2 scale-110' : ''
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  >
                    {selectedColor === c.name && <Check className="w-4 h-4 text-white mix-blend-difference" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label className="font-bold uppercase tracking-wider text-[var(--text-muted)]">Select Shoe Size (EU)</label>
                <button className="text-xs text-[var(--accent-gold)] underline font-semibold flex items-center gap-1">
                  <Ruler className="w-3.5 h-3.5" /> Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.availableSizes.map(sz => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
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
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center rounded-2xl border border-[var(--border-color)] p-1 bg-[var(--bg-card)] shadow-inner">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 rounded-xl hover:bg-[var(--accent-light)] text-[var(--text-primary)]"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-xs font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 rounded-xl hover:bg-[var(--accent-light)] text-[var(--text-primary)]"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => addToCart(product, selectedSize, selectedColor, quantity)}
                className="flex-1 py-4 px-6 rounded-2xl bg-[var(--accent)] text-white font-bold text-xs hover:bg-[var(--accent-hover)] transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag &bull; ${(product.price * quantity).toLocaleString()}</span>
              </button>
            </div>

            {/* Wishlist & Compare Buttons */}
            <div className="flex items-center justify-between text-xs pt-2">
              <button
                onClick={() => toggleWishlist(product)}
                className="flex items-center gap-2 font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'text-rose-500 fill-current' : ''}`} />
                <span>{isSaved ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
              </button>

              <button
                onClick={() => toggleCompare(product)}
                className="flex items-center gap-2 font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>{isCompared ? 'In Compare List' : 'Compare Specification'}</span>
              </button>
            </div>

            {/* Value Highlights */}
            <div className="p-4 rounded-2xl bg-[var(--bg-secondary)]/60 border border-[var(--border-color)] space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[var(--accent-gold)]" />
                <span>Complimentary Express Air Courier (2-3 Days)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[var(--accent-gold)]" />
                <span>Includes Original Box & Numbered Certificate</span>
              </div>
            </div>

          </div>

        </div>

        {/* Specifications & Reviews Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-extrabold text-xl font-outfit">Artisan Specifications</h3>
            <div className="p-6 rounded-2xl luxury-card border border-[var(--border-color)] space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-[var(--border-color)]">
                <span className="text-[var(--text-muted)] font-bold">Upper Material</span>
                <span className="font-semibold">{product.specifications.upperMaterial}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[var(--border-color)]">
                <span className="text-[var(--text-muted)] font-bold">Sole Construction</span>
                <span className="font-semibold">{product.specifications.soleMaterial}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[var(--border-color)]">
                <span className="text-[var(--text-muted)] font-bold">Closure Type</span>
                <span className="font-semibold">{product.specifications.closure}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[var(--border-color)]">
                <span className="text-[var(--text-muted)] font-bold">Country of Origin</span>
                <span className="font-semibold">{product.specifications.origin}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[var(--border-color)]">
                <span className="text-[var(--text-muted)] font-bold">Single Shoe Weight</span>
                <span className="font-semibold">{product.specifications.weight}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-[var(--text-muted)] font-bold">Style Code</span>
                <span className="font-semibold font-mono">{product.specifications.styleCode}</span>
              </div>
            </div>
          </div>

          {/* Customer Reviews Form */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-extrabold text-xl font-outfit">Verified Collector Feedback</h3>
            
            <div className="space-y-3">
              {product.reviews.map(r => (
                <div key={r.id} className="p-4 rounded-2xl luxury-card border border-[var(--border-color)]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-[var(--text-primary)]">{r.userName}</span>
                    <span className="text-[10px] text-[var(--text-muted)]">{r.date}</span>
                  </div>
                  <p className="text-xs font-semibold text-[var(--accent-gold)]">{r.title}</p>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">{r.comment}</p>
                </div>
              ))}
            </div>

            {/* Write Review Form */}
            <form onSubmit={handleReviewSubmit} className="p-6 rounded-2xl glass-panel border border-[var(--border-color)] space-y-3">
              <h4 className="font-bold text-sm flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[var(--accent-gold)]" /> Write a Review
              </h4>
              <input
                type="text"
                placeholder="Review Headline (e.g. Unbelievable Italian Leather)"
                value={newReviewTitle}
                onChange={(e) => setNewReviewTitle(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-xs text-[var(--text-primary)]"
              />
              <textarea
                placeholder="Describe your fit, comfort, and craftsmanship experience..."
                rows={3}
                value={newReviewComment}
                onChange={(e) => setNewReviewComment(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-xs text-[var(--text-primary)]"
              />
              <button type="submit" className="px-6 py-2.5 bg-[var(--accent)] text-white text-xs font-bold rounded-xl">
                Submit Verified Feedback
              </button>
            </form>
          </div>

        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[var(--border-color)] space-y-6">
            <h3 className="text-2xl font-extrabold font-outfit">Recommended Recommendations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(rel => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
