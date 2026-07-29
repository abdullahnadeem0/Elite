export type ThemeOption = 
  | 'white'
  | 'black'
  | 'blue'
  | 'emerald'
  | 'purple'
  | 'orange'
  | 'rose'
  | 'navy'
  | 'luxury gold'
  | 'gray';

export type CategorySlug = 
  | 'all'
  | 'running'
  | 'sneakers'
  | 'sports'
  | 'casual'
  | 'formal'
  | 'boots'
  | 'high-tops'
  | 'limited-edition'
  | 'luxury-collection'
  | 'men'
  | 'women'
  | 'new-arrivals'
  | 'sale';

export interface ProductReview {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  country: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  gender: 'Men' | 'Women' | 'Unisex';
  category: CategorySlug;
  secondaryCategories?: CategorySlug[];
  image: string;
  secondaryImage: string;
  gallery: string[];
  description: string;
  specifications: {
    upperMaterial: string;
    soleMaterial: string;
    closure: string;
    weight: string;
    origin: string;
    styleCode: string;
  };
  availableSizes: number[]; // e.g. [39, 40, 41, 42, 43, 44, 45]
  availableColors: {
    name: string;
    hex: string;
  }[];
  isNew?: boolean;
  isBestSeller?: boolean;
  isTrending?: boolean;
  isLimited?: boolean;
  isLuxury?: boolean;
  isSale?: boolean;
  discountPercentage?: number;
  stockCount: number;
  inStock: boolean;
  tags: string[];
  reviews: ProductReview[];
}

export interface CartItem {
  product: Product;
  selectedSize: number;
  selectedColor: string;
  quantity: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  status: 'Processing' | 'Shipped' | 'Out for Delivery' | 'Delivered';
  shippingAddress: string;
  paymentMethod: string;
  trackingNumber: string;
  estimatedDelivery: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  description?: string;
  image?: string;
}
