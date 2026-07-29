import React, { useState } from 'react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';
import { Heart, Eye, SlidersHorizontal, ShoppingBag, Star, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { 
    navigateTo, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    toggleCompare, 
    isInCompare,
    setQuickViewProduct
  } = useShop();

  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState<number>(product.availableSizes[0] || 42);
  const [selectedColor, setSelectedColor] = useState<string>(product.availableColors[0]?.name || 'Standard');
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const isSaved = isInWishlist(product.id);
  const isCompared = isInCompare(product.id);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setMouseOffset({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="perspective-1000 h-full flex flex-col"
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setMouseOffset({ x: 0, y: 0 });
        }}
        onMouseMove={handleMouseMove}
        style={{
          transform: isHovered 
            ? `rotateX(${mouseOffset.y}deg) rotateY(${mouseOffset.x}deg) translateY(-6px)` 
            : 'none',
          transition: 'transform 0.25s ease-out'
        }}
        className="luxury-card rounded-2xl overflow-hidden flex flex-col h-full relative group border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] shadow-md hover:shadow-2xl"
      >
        {/* Top Badges */}
        <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5 pointer-events-none">
          {product.isNew && (
            <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-[var(--accent)] text-white shadow-md">
              New Arrival
            </span>
          )}
          {product.isBestSeller && (
            <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-amber-500 text-black shadow-md">
              Best Seller
            </span>
          )}
          {product.isSale && product.discountPercentage && (
            <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-rose-600 text-white shadow-md">
              -{product.discountPercentage}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Heart Top Right */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-3 right-3 z-20 p-2 rounded-full glass-panel shadow-md transition-all duration-300 ${
            isSaved ? 'bg-rose-500 text-white' : 'text-[var(--text-primary)] hover:bg-[var(--accent-light)]'
          }`}
          title={isSaved ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
        </button>

        {/* Product Image Area with Hover Reveal */}
        <div 
          onClick={() => navigateTo('product-details', product.id)}
          className="relative w-full aspect-square bg-[var(--bg-secondary)] overflow-hidden cursor-pointer"
        >
          {/* Primary Image */}
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
            }`}
            loading="lazy"
          />

          {/* Secondary Hover Image */}
          <img
            src={product.secondaryImage || product.image}
            alt={`${product.name} secondary`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'scale-105 opacity-100' : 'scale-100 opacity-0'
            }`}
            loading="lazy"
          />

          {/* Subtle Hover Dark Overlay */}
          <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

          {/* Quick Action Overlay Buttons */}
          <div className={`absolute inset-x-3 bottom-3 z-20 flex items-center justify-center gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setQuickViewProduct(product);
              }}
              className="p-2.5 rounded-xl bg-white text-black font-semibold text-xs shadow-xl hover:bg-amber-400 transition-colors flex items-center gap-1.5"
              title="Quick View Modal"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Quick View</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleCompare(product);
              }}
              className={`p-2.5 rounded-xl shadow-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                isCompared ? 'bg-amber-500 text-black' : 'bg-black text-white hover:bg-slate-800'
              }`}
              title="Compare Shoe"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isCompared ? 'Comparing' : 'Compare'}</span>
            </button>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
          
          <div>
            <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-1">
              <span className="font-semibold uppercase tracking-wider">{product.brand}</span>
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold text-[var(--text-primary)]">{product.rating}</span>
                <span>({product.reviewCount})</span>
              </div>
            </div>

            <h3 
              onClick={() => navigateTo('product-details', product.id)}
              className="font-bold text-sm text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors cursor-pointer line-clamp-1"
            >
              {product.name}
            </h3>
          </div>

          {/* Size Selector Strip */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider block">Available Sizes</span>
            <div className="flex flex-wrap gap-1">
              {product.availableSizes.slice(0, 5).map(sz => (
                <button
                  key={sz}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSize(sz);
                  }}
                  className={`text-[10px] px-2 py-0.5 rounded-md font-semibold border transition-colors ${
                    selectedSize === sz
                      ? 'bg-[var(--accent)] text-white border-[var(--accent)]'
                      : 'border-[var(--border-color)] hover:bg-[var(--accent-light)] text-[var(--text-secondary)]'
                  }`}
                >
                  {sz}
                </button>
              ))}
              {product.availableSizes.length > 5 && (
                <span className="text-[10px] text-[var(--text-muted)] py-0.5">+{product.availableSizes.length - 5}</span>
              )}
            </div>
          </div>

          {/* Color Swatches */}
          <div className="flex items-center gap-1.5">
            {product.availableColors.map(c => (
              <button
                key={c.name}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColor(c.name);
                }}
                className={`w-4 h-4 rounded-full border border-black/30 flex items-center justify-center ${
                  selectedColor === c.name ? 'ring-2 ring-[var(--accent-gold)] ring-offset-1' : ''
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              >
                {selectedColor === c.name && <Check className="w-2.5 h-2.5 text-white mix-blend-difference" />}
              </button>
            ))}
          </div>

          {/* Price & Add to Cart */}
          <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between">
            <div>
              <span className="text-base font-extrabold text-[var(--text-primary)]">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xs text-[var(--text-muted)] line-through ml-1.5">${product.originalPrice}</span>
              )}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product, selectedSize, selectedColor, 1);
              }}
              className="px-3.5 py-2 rounded-xl bg-[var(--accent)] text-white text-xs font-bold hover:bg-[var(--accent-hover)] transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Quick Add</span>
            </button>
          </div>

        </div>

      </div>
    </motion.div>
  );
};
