import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { ThemeOption } from '../types';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  User, 
  Palette, 
  Menu, 
  X, 
  ChevronDown, 
  SlidersHorizontal,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../data/products';

const THEMES: { id: ThemeOption; name: string; colorHex: string }[] = [
  { id: 'white', name: 'Luxury White', colorHex: '#ffffff' },
  { id: 'black', name: 'Obsidian Black', colorHex: '#090a0f' },
  { id: 'blue', name: 'Royal Blue', colorHex: '#2563eb' },
  { id: 'emerald', name: 'Emerald Isle', colorHex: '#059669' },
  { id: 'purple', name: 'Imperial Violet', colorHex: '#9333ea' },
  { id: 'orange', name: 'Sunset Copper', colorHex: '#ea580c' },
  { id: 'rose', name: 'Rose Gold', colorHex: '#e11d48' },
  { id: 'navy', name: 'Midnight Navy', colorHex: '#0a1120' },
  { id: 'luxury gold', name: 'Monarch Gold', colorHex: '#d4af37' },
  { id: 'gray', name: 'Platinum Gray', colorHex: '#475569' }
];

export const Navbar: React.FC = () => {
  const { 
    theme, 
    setTheme, 
    currentPage, 
    navigateTo, 
    cartCount, 
    wishlist, 
    compareList,
    searchQuery,
    setSearchQuery,
    user
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [categoriesMenuOpen, setCategoriesMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter products for quick search popup
  const searchResults = searchQuery.trim() 
    ? PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 5)
    : [];

  const handleNavClick = (page: string, categoryParam?: string) => {
    navigateTo(page, categoryParam);
    setMobileMenuOpen(false);
    setCategoriesMenuOpen(false);
    setSearchOpen(false);
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[var(--accent)] text-white py-1.5 text-xs text-center font-medium tracking-wider uppercase transition-colors duration-300">
        <div className="luxury-container flex justify-between items-center">
          <span className="hidden md:inline">Complimentary Worldwide Express Courier on orders over $500</span>
          <span className="mx-auto md:mx-0 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            Use Code <span className="underline font-bold text-amber-300">ELITE10</span> for 10% VIP Discount
          </span>
          <span className="hidden md:inline font-mono">Concierge: +1 (800) 888-ELITE</span>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'glass-panel shadow-lg py-3 backdrop-blur-md bg-[var(--bg-glass)] border-b border-[var(--border-color)]' 
          : 'bg-[var(--bg-primary)] py-5 border-b border-[var(--border-color)]/50'
      }`}>
        <div className="luxury-container flex items-center justify-between gap-4">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--accent)] flex items-center justify-center text-white font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform duration-300">
              E
            </div>
            <div>
              <span className="font-extrabold tracking-widest text-xl font-outfit uppercase text-[var(--text-primary)] block leading-none">
                ELITE<span className="text-[var(--accent-gold)]">.</span>
              </span>
              <span className="text-[10px] tracking-widest font-medium text-[var(--text-muted)] uppercase block mt-0.5">
                Walk with Confidence
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <button 
              onClick={() => handleNavClick('home')}
              className={`hover:text-[var(--accent-gold)] transition-colors py-1 ${currentPage === 'home' ? 'text-[var(--accent-gold)] font-semibold border-b-2 border-[var(--accent-gold)]' : 'text-[var(--text-primary)]'}`}
            >
              Home
            </button>

            {/* Collections Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => handleNavClick('shop')}
                onMouseEnter={() => setCategoriesMenuOpen(true)}
                className={`flex items-center gap-1 hover:text-[var(--accent-gold)] transition-colors py-1 ${currentPage === 'shop' ? 'text-[var(--accent-gold)] font-semibold' : 'text-[var(--text-primary)]'}`}
              >
                Collections
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              <AnimatePresence>
                {categoriesMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseLeave={() => setCategoriesMenuOpen(false)}
                    className="absolute top-full left-0 w-64 glass-panel bg-[var(--bg-card)] rounded-xl shadow-2xl p-2 border border-[var(--border-color)] grid grid-cols-1 gap-1"
                  >
                    <button onClick={() => handleNavClick('category', 'men')} className="w-full text-left px-3 py-2 text-xs font-semibold rounded-lg hover:bg-[var(--accent-light)] transition-colors flex justify-between items-center text-[var(--text-primary)]">
                      Men's Footwear <ArrowRight className="w-3 h-3 text-[var(--text-muted)]" />
                    </button>
                    <button onClick={() => handleNavClick('category', 'women')} className="w-full text-left px-3 py-2 text-xs font-semibold rounded-lg hover:bg-[var(--accent-light)] transition-colors flex justify-between items-center text-[var(--text-primary)]">
                      Women's Footwear <ArrowRight className="w-3 h-3 text-[var(--text-muted)]" />
                    </button>
                    <button onClick={() => handleNavClick('category', 'sneakers')} className="w-full text-left px-3 py-2 text-xs font-semibold rounded-lg hover:bg-[var(--accent-light)] transition-colors flex justify-between items-center text-[var(--text-primary)]">
                      Luxury Sneakers <ArrowRight className="w-3 h-3 text-[var(--text-muted)]" />
                    </button>
                    <button onClick={() => handleNavClick('category', 'running')} className="w-full text-left px-3 py-2 text-xs font-semibold rounded-lg hover:bg-[var(--accent-light)] transition-colors flex justify-between items-center text-[var(--text-primary)]">
                      Performance Running <ArrowRight className="w-3 h-3 text-[var(--text-muted)]" />
                    </button>
                    <button onClick={() => handleNavClick('category', 'sports')} className="w-full text-left px-3 py-2 text-xs font-semibold rounded-lg hover:bg-[var(--accent-light)] transition-colors flex justify-between items-center text-[var(--text-primary)]">
                      Sports & Court <ArrowRight className="w-3 h-3 text-[var(--text-muted)]" />
                    </button>
                    <button onClick={() => handleNavClick('category', 'casual')} className="w-full text-left px-3 py-2 text-xs font-semibold rounded-lg hover:bg-[var(--accent-light)] transition-colors flex justify-between items-center text-[var(--text-primary)]">
                      Casual & Loafers <ArrowRight className="w-3 h-3 text-[var(--text-muted)]" />
                    </button>
                    <button onClick={() => handleNavClick('category', 'formal')} className="w-full text-left px-3 py-2 text-xs font-semibold rounded-lg hover:bg-[var(--accent-light)] transition-colors flex justify-between items-center text-[var(--text-primary)]">
                      Formal Oxfords <ArrowRight className="w-3 h-3 text-[var(--text-muted)]" />
                    </button>
                    <button onClick={() => handleNavClick('category', 'boots')} className="w-full text-left px-3 py-2 text-xs font-semibold rounded-lg hover:bg-[var(--accent-light)] transition-colors flex justify-between items-center text-[var(--text-primary)]">
                      Boots & Hikers <ArrowRight className="w-3 h-3 text-[var(--text-muted)]" />
                    </button>
                    <button onClick={() => handleNavClick('category', 'high-tops')} className="w-full text-left px-3 py-2 text-xs font-semibold rounded-lg hover:bg-[var(--accent-light)] transition-colors flex justify-between items-center text-[var(--text-primary)]">
                      High-Tops <ArrowRight className="w-3 h-3 text-[var(--text-muted)]" />
                    </button>
                    <button onClick={() => handleNavClick('category', 'luxury-collection')} className="w-full text-left px-3 py-2 text-xs font-bold text-[var(--accent-gold)] rounded-lg hover:bg-[var(--accent-light)] transition-colors flex justify-between items-center">
                      Luxury Collection <Sparkles className="w-3 h-3 text-[var(--accent-gold)]" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button 
              onClick={() => handleNavClick('category', 'men')}
              className="hover:text-[var(--accent-gold)] transition-colors text-[var(--text-primary)]"
            >
              Men
            </button>
            <button 
              onClick={() => handleNavClick('category', 'women')}
              className="hover:text-[var(--accent-gold)] transition-colors text-[var(--text-primary)]"
            >
              Women
            </button>
            <button 
              onClick={() => handleNavClick('category', 'new-arrivals')}
              className="hover:text-[var(--accent-gold)] transition-colors text-[var(--text-primary)]"
            >
              New Arrivals
            </button>
            <button 
              onClick={() => handleNavClick('category', 'sale')}
              className="text-rose-500 font-semibold hover:text-rose-600 transition-colors flex items-center gap-1"
            >
              Sale
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="hover:text-[var(--accent-gold)] transition-colors text-[var(--text-primary)]"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="hover:text-[var(--accent-gold)] transition-colors text-[var(--text-primary)]"
            >
              Contact
            </button>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-4">

            {/* Quick Search Trigger */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2.5 rounded-full hover:bg-[var(--accent-light)] transition-colors text-[var(--text-primary)] relative"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Search Popup Input */}
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-80 sm:w-96 glass-panel bg-[var(--bg-card)] rounded-2xl shadow-2xl p-4 border border-[var(--border-color)] z-50"
                  >
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                      <input
                        type="text"
                        placeholder="Search luxury shoes, running, gold edition..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus
                        className="w-full pl-9 pr-8 py-2.5 bg-[var(--bg-primary)] text-xs rounded-xl border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-gold)]"
                      />
                      {searchQuery && (
                        <button 
                          onClick={() => setSearchQuery('')}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {searchResults.length > 0 && (
                      <div className="mt-3 divide-y divide-[var(--border-color)] max-h-64 overflow-y-auto">
                        {searchResults.map(p => (
                          <div
                            key={p.id}
                            onClick={() => {
                              handleNavClick('product-details', p.id);
                            }}
                            className="py-2 flex items-center gap-3 hover:bg-[var(--accent-light)] p-2 rounded-lg cursor-pointer transition-colors"
                          >
                            <img src={p.image} alt={p.name} className="w-10 h-10 object-cover rounded-md" />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-[var(--text-primary)] truncate">{p.name}</p>
                              <p className="text-[10px] text-[var(--text-muted)]">${p.price} &bull; {p.brand}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {searchQuery.trim() && searchResults.length === 0 && (
                      <p className="text-xs text-[var(--text-muted)] text-center py-4">No matching shoes found.</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Selector */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="p-2.5 rounded-full hover:bg-[var(--accent-light)] transition-colors text-[var(--text-primary)] flex items-center gap-1"
                title="Change Layout Theme"
              >
                <Palette className="w-5 h-5" />
              </button>

              <AnimatePresence>
                {themeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-60 glass-panel bg-[var(--bg-card)] rounded-2xl shadow-2xl p-3 border border-[var(--border-color)] z-50"
                  >
                    <p className="text-[11px] font-bold text-[var(--text-muted)] tracking-wider uppercase px-2 mb-2">Select Luxury Theme</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {THEMES.map(t => (
                        <button
                          key={t.id}
                          onClick={() => {
                            setTheme(t.id);
                            setThemeDropdownOpen(false);
                          }}
                          className={`flex items-center gap-2 px-2.5 py-2 rounded-xl text-xs font-medium transition-all text-left ${
                            theme === t.id 
                              ? 'bg-[var(--accent)] text-white font-bold shadow-md' 
                              : 'hover:bg-[var(--accent-light)] text-[var(--text-primary)]'
                          }`}
                        >
                          <span 
                            className="w-3.5 h-3.5 rounded-full border border-black/20 shrink-0" 
                            style={{ backgroundColor: t.colorHex }}
                          />
                          <span className="truncate">{t.name}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Compare Badge */}
            <button
              onClick={() => handleNavClick('compare')}
              className="p-2.5 rounded-full hover:bg-[var(--accent-light)] transition-colors text-[var(--text-primary)] relative hidden sm:block"
              title="Compare Shoes"
            >
              <SlidersHorizontal className="w-5 h-5" />
              {compareList.length > 0 && (
                <span className="absolute top-1 right-1 bg-amber-500 text-black text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  {compareList.length}
                </span>
              )}
            </button>

            {/* Wishlist Badge */}
            <button
              onClick={() => handleNavClick('wishlist')}
              className="p-2.5 rounded-full hover:bg-[var(--accent-light)] transition-colors text-[var(--text-primary)] relative"
              title="Saved Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 bg-rose-500 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Cart Bag */}
            <button
              onClick={() => handleNavClick('cart')}
              className="p-2.5 rounded-full bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all shadow-md relative"
              title="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[var(--accent-gold)] text-black font-extrabold text-[11px] w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-[var(--bg-card)]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Account */}
            <button
              onClick={() => handleNavClick(user ? 'dashboard' : 'login')}
              className="p-2.5 rounded-full hover:bg-[var(--accent-light)] transition-colors text-[var(--text-primary)] hidden md:block"
              title={user ? user.name : 'Sign In'}
            >
              {user ? (
                <img src={user.avatar} alt={user.name} className="w-6 h-6 rounded-full object-cover border border-[var(--accent-gold)]" />
              ) : (
                <User className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Hamburger Menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full hover:bg-[var(--accent-light)] transition-colors text-[var(--text-primary)] lg:hidden"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 bg-[var(--bg-card)] text-[var(--text-primary)] p-6 overflow-y-auto lg:hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent)] text-white font-extrabold text-xl flex items-center justify-center">E</div>
                  <div>
                    <span className="font-extrabold tracking-widest text-lg">ELITE SHOES</span>
                    <span className="text-[10px] text-[var(--text-muted)] block uppercase">Luxury Footwear</span>
                  </div>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-full hover:bg-[var(--accent-light)]">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-4 font-semibold text-base">
                <button onClick={() => handleNavClick('home')} className="text-left py-2 border-b border-[var(--border-color)]/30">Home</button>
                <button onClick={() => handleNavClick('shop')} className="text-left py-2 border-b border-[var(--border-color)]/30">Shop All Shoes</button>
                <button onClick={() => handleNavClick('category', 'men')} className="text-left py-2 border-b border-[var(--border-color)]/30">Men's Collection</button>
                <button onClick={() => handleNavClick('category', 'women')} className="text-left py-2 border-b border-[var(--border-color)]/30">Women's Collection</button>
                <button onClick={() => handleNavClick('category', 'sneakers')} className="text-left py-2 border-b border-[var(--border-color)]/30">Sneakers</button>
                <button onClick={() => handleNavClick('category', 'running')} className="text-left py-2 border-b border-[var(--border-color)]/30">Running Shoes</button>
                <button onClick={() => handleNavClick('category', 'sports')} className="text-left py-2 border-b border-[var(--border-color)]/30">Sports Shoes</button>
                <button onClick={() => handleNavClick('category', 'casual')} className="text-left py-2 border-b border-[var(--border-color)]/30">Casual & Loafers</button>
                <button onClick={() => handleNavClick('category', 'formal')} className="text-left py-2 border-b border-[var(--border-color)]/30">Formal Oxfords</button>
                <button onClick={() => handleNavClick('category', 'boots')} className="text-left py-2 border-b border-[var(--border-color)]/30">Boots & Hikers</button>
                <button onClick={() => handleNavClick('category', 'luxury-collection')} className="text-left py-2 text-[var(--accent-gold)] font-bold border-b border-[var(--border-color)]/30">Luxury Collection</button>
                <button onClick={() => handleNavClick('about')} className="text-left py-2 border-b border-[var(--border-color)]/30">About Brand</button>
                <button onClick={() => handleNavClick('contact')} className="text-left py-2 border-b border-[var(--border-color)]/30">Concierge Contact</button>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border-color)] flex flex-col gap-3">
              <button
                onClick={() => handleNavClick(user ? 'dashboard' : 'login')}
                className="w-full py-3 bg-[var(--accent)] text-white font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4" />
                {user ? `Account: ${user.name}` : 'Sign In / Register'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
