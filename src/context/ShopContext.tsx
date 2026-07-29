import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  ThemeOption, 
  Product, 
  CartItem, 
  UserProfile, 
  Order, 
  ToastMessage 
} from '../types';
import { PRODUCTS } from '../data/products';
import confetti from 'canvas-confetti';

interface ShopContextType {
  theme: ThemeOption;
  setTheme: (theme: ThemeOption) => void;
  currentPage: string;
  navigateTo: (page: string, param?: string) => void;
  selectedProductId: string | null;
  selectedCategoryFilter: string;
  setSelectedCategoryFilter: (cat: string) => void;
  
  cart: CartItem[];
  addToCart: (product: Product, size?: number, color?: string, quantity?: number) => void;
  removeFromCart: (productId: string, size: number, color: string) => void;
  updateCartQty: (productId: string, size: number, color: string, qty: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  discountCode: string;
  discountAmount: number;
  applyDiscount: (code: string) => boolean;

  wishlist: Product[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;

  compareList: Product[];
  toggleCompare: (product: Product) => void;
  isInCompare: (productId: string) => boolean;
  clearCompare: () => void;

  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;

  searchQuery: string;
  setSearchQuery: (query: string) => void;

  user: UserProfile | null;
  loginUser: (email: string, name: string) => void;
  logoutUser: () => void;

  orders: Order[];
  lastOrder: Order | null;
  placeOrder: (shippingDetails: any, paymentMethod: string) => Order;

  toasts: ToastMessage[];
  addToast: (toast: Omit<ToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeOption>('white');
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('elite_shoes_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState<Product[]>(() => {
    const saved = localStorage.getItem('elite_shoes_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [compareList, setCompareList] = useState<Product[]>(() => {
    const saved = localStorage.getItem('elite_shoes_compare');
    return saved ? JSON.parse(saved) : [];
  });

  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [discountCode, setDiscountCode] = useState<string>('');
  const [discountAmount, setDiscountAmount] = useState<number>(0);

  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('elite_shoes_user');
    return saved ? JSON.parse(saved) : {
      id: 'user-vip-1',
      name: 'Alexander Sterling',
      email: 'alexander@eliteshoes.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      phone: '+1 (555) 019-2831',
      address: {
        street: '740 Park Avenue, Apt 12B',
        city: 'New York',
        state: 'NY',
        zip: '10021',
        country: 'United States'
      }
    };
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('elite_shoes_orders');
    return saved ? JSON.parse(saved) : [
      {
        id: 'ORD-2026-8821',
        date: '2026-07-20',
        items: [
          {
            product: PRODUCTS[0],
            selectedSize: 42,
            selectedColor: PRODUCTS[0].availableColors[0].name,
            quantity: 1
          }
        ],
        subtotal: 890,
        discount: 0,
        shipping: 0,
        total: 890,
        status: 'Delivered',
        shippingAddress: '740 Park Avenue, Apt 12B, New York, NY 10021',
        paymentMethod: 'Apple Pay (VIP Platinum)',
        trackingNumber: 'ELS-TRK-992183201',
        estimatedDelivery: '2026-07-22'
      }
    ];
  });

  const [lastOrder, setLastOrder] = useState<Order | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Apply HTML Theme Attribute smoothly
  const setTheme = (newTheme: ThemeOption) => {
    setThemeState(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    addToast({
      type: 'info',
      title: `Theme Changed: ${newTheme.toUpperCase()}`,
      description: 'The layout theme has updated smoothly.'
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Persist Cart
  useEffect(() => {
    localStorage.setItem('elite_shoes_cart', JSON.stringify(cart));
  }, [cart]);

  // Persist Wishlist
  useEffect(() => {
    localStorage.setItem('elite_shoes_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Persist Compare
  useEffect(() => {
    localStorage.setItem('elite_shoes_compare', JSON.stringify(compareList));
  }, [compareList]);

  // Persist Orders
  useEffect(() => {
    localStorage.setItem('elite_shoes_orders', JSON.stringify(orders));
  }, [orders]);

  // Toast Handler
  const addToast = (toast: Omit<ToastMessage, 'id'>) => {
    const id = 'toast-' + Date.now() + '-' + Math.random().toString(36).substring(2, 5);
    setToasts(prev => [...prev, { ...toast, id }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Navigation Handler
  const navigateTo = (page: string, param?: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (param && (page === 'product-details' || page === 'shop' || page === 'category')) {
      if (page === 'product-details') {
        setSelectedProductId(param);
      } else {
        setSelectedCategoryFilter(param);
      }
    }
    setCurrentPage(page);
  };

  // Cart Operations
  const addToCart = (product: Product, size?: number, color?: string, quantity: number = 1) => {
    const chosenSize = size || product.availableSizes[0] || 42;
    const chosenColor = color || product.availableColors[0]?.name || 'Standard';

    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(
        item => item.product.id === product.id && item.selectedSize === chosenSize && item.selectedColor === chosenColor
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { product, selectedSize: chosenSize, selectedColor: chosenColor, quantity }];
      }
    });

    addToast({
      type: 'success',
      title: 'Added to Cart',
      description: `${product.name} (Size ${chosenSize}) added to bag.`,
      image: product.image
    });
  };

  const removeFromCart = (productId: string, size: number, color: string) => {
    setCart(prev => prev.filter(item => !(item.product.id === productId && item.selectedSize === size && item.selectedColor === color)));
    addToast({
      type: 'info',
      title: 'Item Removed',
      description: 'Product removed from your shopping bag.'
    });
  };

  const updateCartQty = (productId: string, size: number, color: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(productId, size, color);
      return;
    }
    setCart(prev => prev.map(item => {
      if (item.product.id === productId && item.selectedSize === size && item.selectedColor === color) {
        return { ...item, quantity: qty };
      }
      return item;
    }));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const applyDiscount = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === 'ELITE10') {
      setDiscountCode('ELITE10');
      setDiscountAmount(0.10); // 10%
      addToast({
        type: 'success',
        title: 'Promo Applied!',
        description: 'Enjoy 10% VIP Luxury Discount on your order.'
      });
      return true;
    } else if (clean === 'LUXURY20') {
      setDiscountCode('LUXURY20');
      setDiscountAmount(0.20); // 20%
      addToast({
        type: 'success',
        title: 'VIP Promo Applied!',
        description: 'Enjoy 20% Exclusive Member Discount.'
      });
      return true;
    } else {
      addToast({
        type: 'error',
        title: 'Invalid Promo Code',
        description: 'Try "ELITE10" or "LUXURY20"'
      });
      return false;
    }
  };

  // Wishlist Operations
  const toggleWishlist = (product: Product) => {
    setWishlist(prev => {
      const exists = prev.some(p => p.id === product.id);
      if (exists) {
        addToast({
          type: 'info',
          title: 'Removed from Wishlist',
          description: `${product.name} removed from saved list.`
        });
        return prev.filter(p => p.id !== product.id);
      } else {
        addToast({
          type: 'success',
          title: 'Saved to Wishlist',
          description: `${product.name} added to saved list.`,
          image: product.image
        });
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.some(p => p.id === productId);

  // Compare List Operations
  const toggleCompare = (product: Product) => {
    setCompareList(prev => {
      const exists = prev.some(p => p.id === product.id);
      if (exists) {
        addToast({
          type: 'info',
          title: 'Removed from Compare',
          description: `${product.name} removed from compare tray.`
        });
        return prev.filter(p => p.id !== product.id);
      } else {
        if (prev.length >= 4) {
          addToast({
            type: 'warning',
            title: 'Compare Limit Reached',
            description: 'You can compare up to 4 luxury shoes simultaneously.'
          });
          return prev;
        }
        addToast({
          type: 'success',
          title: 'Added to Compare',
          description: `${product.name} added to comparison.`,
          image: product.image
        });
        return [...prev, product];
      }
    });
  };

  const isInCompare = (productId: string) => compareList.some(p => p.id === productId);

  const clearCompare = () => {
    setCompareList([]);
  };

  // User Authentication
  const loginUser = (email: string, name: string) => {
    const newUser: UserProfile = {
      id: 'user-' + Date.now(),
      name: name || 'Valued Collector',
      email,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      phone: '+1 (555) 012-9988',
      address: {
        street: '88 Fifth Avenue, Suite 14',
        city: 'New York',
        state: 'NY',
        zip: '10003',
        country: 'United States'
      }
    };
    setUser(newUser);
    localStorage.setItem('elite_shoes_user', JSON.stringify(newUser));
    addToast({
      type: 'success',
      title: 'Welcome Back!',
      description: `Logged in as ${newUser.name}`
    });
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('elite_shoes_user');
    addToast({
      type: 'info',
      title: 'Signed Out',
      description: 'You have been safely signed out.'
    });
  };

  // Order Placement
  const placeOrder = (shippingDetails: any, paymentMethod: string): Order => {
    const subtotal = cartTotal;
    const discount = subtotal * discountAmount;
    const shipping = subtotal > 500 ? 0 : 25;
    const finalTotal = subtotal - discount + shipping;

    const newOrder: Order = {
      id: 'ORD-2026-' + Math.floor(1000 + Math.random() * 9000),
      date: new Date().toISOString().split('T')[0],
      items: [...cart],
      subtotal,
      discount,
      shipping,
      total: finalTotal,
      status: 'Processing',
      shippingAddress: `${shippingDetails.street}, ${shippingDetails.city}, ${shippingDetails.state} ${shippingDetails.zip}`,
      paymentMethod: paymentMethod || 'Luxury Credit Card',
      trackingNumber: 'ELS-TRK-' + Math.floor(100000000 + Math.random() * 900000000),
      estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    };

    setOrders(prev => [newOrder, ...prev]);
    setLastOrder(newOrder);
    clearCart();

    // Trigger Confetti Celebration
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // Ignore if confetti blocked
    }

    addToast({
      type: 'success',
      title: 'Order Placed Successfully!',
      description: `Order #${newOrder.id} confirmed. Thank you for choosing Elite Shoes.`
    });

    navigateTo('order-success');
    return newOrder;
  };

  return (
    <ShopContext.Provider value={{
      theme,
      setTheme,
      currentPage,
      navigateTo,
      selectedProductId,
      selectedCategoryFilter,
      setSelectedCategoryFilter,
      cart,
      addToCart,
      removeFromCart,
      updateCartQty,
      clearCart,
      cartTotal,
      cartCount,
      discountCode,
      discountAmount,
      applyDiscount,
      wishlist,
      toggleWishlist,
      isInWishlist,
      compareList,
      toggleCompare,
      isInCompare,
      clearCompare,
      quickViewProduct,
      setQuickViewProduct,
      searchQuery,
      setSearchQuery,
      user,
      loginUser,
      logoutUser,
      orders,
      lastOrder,
      placeOrder,
      toasts,
      addToast,
      removeToast
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
