import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { CATEGORIES } from '../data/categories';
import { Filter, Grid, List, Search, RotateCcw, SlidersHorizontal } from 'lucide-react';

export const ShopPage: React.FC = () => {
  const { selectedCategoryFilter, setSelectedCategoryFilter } = useShop();

  const [category, setCategory] = useState<string>(selectedCategoryFilter || 'all');
  const [genderFilter, setGenderFilter] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(1200);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [search, setSearch] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  // Filter logic
  let filtered = PRODUCTS.filter(p => {
    // category filter
    if (category !== 'all') {
      const matchesCat = p.category === category || (p.secondaryCategories && p.secondaryCategories.includes(category as any));
      if (!matchesCat) return false;
    }
    // gender
    if (genderFilter !== 'all' && p.gender !== genderFilter && p.gender !== 'Unisex') {
      return false;
    }
    // max price
    if (p.price > maxPrice) return false;
    // search
    if (search.trim()) {
      const q = search.toLowerCase();
      const matchesSearch = p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.tags.some(t => t.toLowerCase().includes(q));
      if (!matchesSearch) return false;
    }
    return true;
  });

  // Sorting logic
  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'newest') {
    filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  }

  const resetFilters = () => {
    setCategory('all');
    setGenderFilter('all');
    setMaxPrice(1200);
    setSortBy('featured');
    setSearch('');
    setSelectedCategoryFilter('all');
  };

  return (
    <div className="py-12 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)]">
      <div className="luxury-container">
        
        {/* Breadcrumb & Title */}
        <div className="mb-8 border-b border-[var(--border-color)] pb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-gold)]">
            Elite Luxury Footwear Catalog
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit mt-1">
            Explore All Footwear
          </h1>
          <p className="text-sm text-[var(--text-secondary)] mt-2">
            Showing {filtered.length} luxury shoe styles crafted by master artisans worldwide.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 glass-panel p-4 rounded-2xl border border-[var(--border-color)]">
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowMobileFilter(!showMobileFilter)}
              className="lg:hidden px-4 py-2 bg-[var(--accent)] text-white text-xs font-bold rounded-xl flex items-center gap-2"
            >
              <Filter className="w-4 h-4" /> Filter Catalog
            </button>

            {/* Quick Search inside Catalog */}
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                type="text"
                placeholder="Search catalog..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-[var(--bg-primary)] border border-[var(--border-color)] text-xs rounded-xl text-[var(--text-primary)] focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[var(--text-muted)] font-bold">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs rounded-xl px-3 py-2 focus:outline-none font-semibold"
              >
                <option value="featured">Featured Collection</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest Releases</option>
              </select>
            </div>

            {/* Grid / List View Toggle */}
            <div className="hidden sm:flex items-center gap-1 bg-[var(--bg-primary)] p-1 rounded-xl border border-[var(--border-color)]">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-[var(--accent)] text-white' : 'text-[var(--text-muted)]'}`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-[var(--accent)] text-white' : 'text-[var(--text-muted)]'}`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar Filters */}
          <aside className={`lg:col-span-3 space-y-6 ${showMobileFilter ? 'block' : 'hidden lg:block'}`}>
            <div className="luxury-card p-5 rounded-2xl border border-[var(--border-color)] space-y-6">
              
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
                <h3 className="font-extrabold text-sm uppercase tracking-wider flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[var(--accent-gold)]" /> Filters
                </h3>
                <button
                  onClick={resetFilters}
                  className="text-xs text-[var(--text-muted)] hover:text-[var(--accent-gold)] flex items-center gap-1 font-semibold"
                >
                  <RotateCcw className="w-3 h-3" /> Reset
                </button>
              </div>

              {/* Category Filter */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                  Category
                </label>
                <div className="space-y-1">
                  <button
                    onClick={() => setCategory('all')}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${category === 'all' ? 'bg-[var(--accent)] text-white' : 'hover:bg-[var(--accent-light)]'}`}
                  >
                    All Categories ({PRODUCTS.length})
                  </button>
                  {CATEGORIES.map(c => (
                    <button
                      key={c.id}
                      onClick={() => setCategory(c.id)}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex justify-between ${category === c.id ? 'bg-[var(--accent)] text-white' : 'hover:bg-[var(--accent-light)]'}`}
                    >
                      <span>{c.name}</span>
                      <span className="opacity-60 text-[10px]">({c.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Gender Filter */}
              <div className="space-y-2 border-t border-[var(--border-color)] pt-4">
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                  Gender
                </label>
                <div className="flex flex-wrap gap-2">
                  {['all', 'Men', 'Women'].map(g => (
                    <button
                      key={g}
                      onClick={() => setGenderFilter(g)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                        genderFilter === g
                          ? 'bg-[var(--accent)] text-white border-[var(--accent)]'
                          : 'border-[var(--border-color)] text-[var(--text-secondary)] hover:bg-[var(--accent-light)]'
                      }`}
                    >
                      {g === 'all' ? 'All Genders' : g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Max Price Slider */}
              <div className="space-y-2 border-t border-[var(--border-color)] pt-4">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold uppercase tracking-wider text-[var(--text-muted)]">Max Price</label>
                  <span className="font-extrabold text-[var(--text-primary)]">${maxPrice}</span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={1500}
                  step={50}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[var(--accent-gold)] cursor-pointer"
                />
              </div>

            </div>
          </aside>

          {/* Product Grid / List Content */}
          <main className="lg:col-span-9">
            {filtered.length === 0 ? (
              <div className="luxury-card p-12 rounded-3xl text-center space-y-4 border border-[var(--border-color)]">
                <p className="text-lg font-bold">No shoes match your selected filters.</p>
                <p className="text-xs text-[var(--text-muted)]">Try loosening your search terms or resetting the price filter.</p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-3 bg-[var(--accent)] text-white font-bold text-xs rounded-xl"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch" : "space-y-4"}>
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>

        </div>

      </div>
    </div>
  );
};
