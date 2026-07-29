import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'elite-monarch-gold',
    name: 'Monarch Gold Edition Leather Low-Top',
    brand: 'Elite Artisan',
    price: 890,
    originalPrice: 1050,
    rating: 4.9,
    reviewCount: 128,
    gender: 'Men',
    category: 'luxury-collection',
    secondaryCategories: ['sneakers', 'men', 'limited-edition'],
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Handcrafted in Florence, Italy using full-grain Italian calfskin leather with 24k gold-plated eyelets and a lightweight rubber cupsole. Engineered for unmatched prestige and all-day comfort.',
    specifications: {
      upperMaterial: '100% Italian Full-Grain Calfskin',
      soleMaterial: 'Hand-buffed Vibram Luxury Rubber',
      closure: 'Waxed Organic Cotton Laces',
      weight: '410g (Single Shoe, Size 42)',
      origin: 'Florence, Italy',
      styleCode: 'ELS-2026-MNG'
    },
    availableSizes: [39, 40, 41, 42, 43, 44, 45],
    availableColors: [
      { name: 'Onyx Gold', hex: '#111827' },
      { name: 'Ivory Cream', hex: '#fdfbf7' },
      { name: 'Saddle Tan', hex: '#8b5cf6' }
    ],
    isNew: true,
    isBestSeller: true,
    isTrending: true,
    isLimited: true,
    isLuxury: true,
    isSale: true,
    discountPercentage: 15,
    stockCount: 8,
    inStock: true,
    tags: ['Luxury', 'Handcrafted', 'Leather', 'Gold Trim', 'Florence'],
    reviews: [
      {
        id: 'rev-1',
        userName: 'Lord Sterling Vance',
        userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
        rating: 5,
        date: 'July 18, 2026',
        title: 'Exquisite craftsmanship',
        comment: 'The leather aroma upon opening the magnetic box was unbelievable. Supple leather, zero break-in time, and stunning in person.',
        verified: true,
        country: 'United Kingdom'
      },
      {
        id: 'rev-2',
        userName: 'Elena Rostova',
        userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
        rating: 5,
        date: 'July 22, 2026',
        title: 'Worth every dollar',
        comment: 'Purchased for my partner for our gala evening. The subtle gold eyelets elevate evening attire effortlessly.',
        verified: true,
        country: 'Monaco'
      }
    ]
  },
  {
    id: 'elite-phantom-runner-x',
    name: 'Phantom HyperLight Carbon Running Shoe',
    brand: 'AeroPerformance',
    price: 340,
    originalPrice: 380,
    rating: 4.8,
    reviewCount: 94,
    gender: 'Unisex',
    category: 'running',
    secondaryCategories: ['sports', 'men', 'women', 'new-arrivals'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Propelled by a full-length curved carbon fiber plate and supercritical nitrogen-infused foam. Designed to optimize energy return and shatter marathon personal records.',
    specifications: {
      upperMaterial: 'VaporWeave Engineered Matrix Mesh',
      soleMaterial: 'AeroFoam Pro + Carbon FlyPlate',
      closure: 'Asymmetrical Speed Lacing',
      weight: '185g (Ultra Light)',
      origin: 'Tokyo, Japan',
      styleCode: 'ELS-2026-PX'
    },
    availableSizes: [38, 39, 40, 41, 42, 43, 44, 45, 46],
    availableColors: [
      { name: 'Crimson Surge', hex: '#ef4444' },
      { name: 'Electric Cyan', hex: '#06b6d4' },
      { name: 'Stealth Black', hex: '#18181b' }
    ],
    isNew: true,
    isBestSeller: true,
    isTrending: true,
    isLimited: false,
    isLuxury: false,
    isSale: true,
    discountPercentage: 10,
    stockCount: 15,
    inStock: true,
    tags: ['Running', 'Carbon Plate', 'Lightweight', 'Marathon', 'High Speed'],
    reviews: [
      {
        id: 'rev-3',
        userName: 'Marcus Chen',
        userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
        rating: 5,
        date: 'July 10, 2026',
        title: 'Shaved 4 minutes off my 10k!',
        comment: 'The energy return on toe-off is addictive. Extremely breathable upper.',
        verified: true,
        country: 'Singapore'
      }
    ]
  },
  {
    id: 'elite-sovereign-oxford',
    name: 'Sovereign Bespoke Wholecut Oxford',
    brand: 'Elite Atelier',
    price: 1120,
    rating: 5.0,
    reviewCount: 43,
    gender: 'Men',
    category: 'formal',
    secondaryCategories: ['men', 'luxury-collection', 'limited-edition'],
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Cut from a single seamless piece of museum calfskin leather. Hand-patinated by master artisans in Northamptonshire, featuring a Goodyear-welted leather waist and brass nails.',
    specifications: {
      upperMaterial: 'Hand-Patinated Aniline Museum Calfskin',
      soleMaterial: 'Oak-Bark Tanned Leather Sole',
      closure: '5-Eyelet Closed Lacing',
      weight: '480g',
      origin: 'Northamptonshire, UK',
      styleCode: 'ELS-2026-SBO'
    },
    availableSizes: [40, 41, 42, 43, 44, 45],
    availableColors: [
      { name: 'Cognac Patina', hex: '#78350f' },
      { name: 'Midnight Espresso', hex: '#271c19' },
      { name: 'Burgundy Reserve', hex: '#881337' }
    ],
    isNew: false,
    isBestSeller: true,
    isTrending: false,
    isLimited: true,
    isLuxury: true,
    isSale: false,
    stockCount: 4,
    inStock: true,
    tags: ['Formal', 'Wholecut', 'Oxford', 'Goodyear Welt', 'Gentleman'],
    reviews: [
      {
        id: 'rev-4',
        userName: 'Julian Vance-Moreau',
        userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
        rating: 5,
        date: 'June 29, 2026',
        title: 'Masterpiece of shoemaking',
        comment: 'Pure luxury. The patination catches the light beautifully during evening events.',
        verified: true,
        country: 'France'
      }
    ]
  },
  {
    id: 'elite-celestial-high-top',
    name: 'Celestial Diamond-Quilted Leather High-Top',
    brand: 'Maison Luxe',
    price: 760,
    originalPrice: 850,
    rating: 4.9,
    reviewCount: 77,
    gender: 'Unisex',
    category: 'high-tops',
    secondaryCategories: ['sneakers', 'luxury-collection', 'women', 'men'],
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Iconic high-top silhouette with hand-stitched diamond quilting, padded collar, side zip entry for effortless wear, and embossed crest badge on the ankle.',
    specifications: {
      upperMaterial: 'Soft Nappa Leather & Suede Trim',
      soleMaterial: 'Sculpted Vulcanized Rubber',
      closure: 'Lace-up + Side YKK Metallic Zipper',
      weight: '495g',
      origin: 'Milan, Italy',
      styleCode: 'ELS-2026-CHT'
    },
    availableSizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    availableColors: [
      { name: 'Monochrome Black', hex: '#0f172a' },
      { name: 'Pure Platinum', hex: '#e2e8f0' },
      { name: 'Rose Gold Accent', hex: '#f43f5e' }
    ],
    isNew: true,
    isBestSeller: false,
    isTrending: true,
    isLimited: false,
    isLuxury: true,
    isSale: true,
    discountPercentage: 11,
    stockCount: 12,
    inStock: true,
    tags: ['High-Top', 'Quilted', 'Streetwear', 'Italian Leather', 'Zipper'],
    reviews: [
      {
        id: 'rev-5',
        userName: 'Aria Montgomery',
        userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
        rating: 5,
        date: 'July 05, 2026',
        title: 'Unbelievably stylish',
        comment: 'Gets compliments everywhere I step. The side zip is so convenient!',
        verified: true,
        country: 'United States'
      }
    ]
  },
  {
    id: 'elite-aurora-velvet-boot',
    name: 'Aurora Suede Chelsea Ankle Boot',
    brand: 'Elite Craft',
    price: 520,
    rating: 4.7,
    reviewCount: 62,
    gender: 'Women',
    category: 'boots',
    secondaryCategories: ['women', 'casual', 'luxury-collection'],
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Timeless Chelsea silhouette crafted from water-resistant Tuscan suede with elasticized side gussets and a sculpted wooden stack heel.',
    specifications: {
      upperMaterial: 'Water-Repellent Tuscan Suede',
      soleMaterial: 'Leather Sole with Anti-slip Rubber Inset',
      closure: 'Slip-on with Dual Elastic Panels',
      weight: '430g',
      origin: 'Tuscany, Italy',
      styleCode: 'ELS-2026-AVB'
    },
    availableSizes: [36, 37, 38, 39, 40, 41],
    availableColors: [
      { name: 'Mocha Suede', hex: '#451a03' },
      { name: 'Onyx Suede', hex: '#18181b' },
      { name: 'Camel Tan', hex: '#d97706' }
    ],
    isNew: false,
    isBestSeller: true,
    isTrending: false,
    isLimited: false,
    isLuxury: true,
    isSale: false,
    stockCount: 9,
    inStock: true,
    tags: ['Chelsea', 'Suede', 'Boots', 'Water Resistant', 'Tuscany'],
    reviews: [
      {
        id: 'rev-6',
        userName: 'Sophia Martinez',
        userAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
        rating: 5,
        date: 'June 14, 2026',
        title: 'Perfect fit & chic tone',
        comment: 'So versatile for autumn layering. The suede texture is buttery smooth.',
        verified: true,
        country: 'Spain'
      }
    ]
  },
  {
    id: 'elite-hyper-court-pro',
    name: 'HyperCourt Pro Indoor & Court Sneaker',
    brand: 'AeroPerformance',
    price: 260,
    originalPrice: 300,
    rating: 4.8,
    reviewCount: 110,
    gender: 'Men',
    category: 'sports',
    secondaryCategories: ['sneakers', 'men', 'running'],
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Designed for lateral agility, multi-directional court traction, and explosive jump cushioning. Features TPU midfoot shank and reinforced toe box.',
    specifications: {
      upperMaterial: 'Knit Mesh + Microfiber Overlays',
      soleMaterial: 'Non-Marking High Grip Gum Rubber',
      closure: 'Dynamic Midfoot Fly-Straps',
      weight: '360g',
      origin: 'Portland, USA',
      styleCode: 'ELS-2026-HCP'
    },
    availableSizes: [39, 40, 41, 42, 43, 44, 45, 46],
    availableColors: [
      { name: 'Royal Blue', hex: '#1d4ed8' },
      { name: 'Triple White', hex: '#ffffff' },
      { name: 'Neon Lime', hex: '#84cc16' }
    ],
    isNew: true,
    isBestSeller: true,
    isTrending: true,
    isLimited: false,
    isLuxury: false,
    isSale: true,
    discountPercentage: 13,
    stockCount: 18,
    inStock: true,
    tags: ['Tennis', 'Basketball', 'Court', 'High Traction', 'Agility'],
    reviews: []
  },
  {
    id: 'elite-riviera-loafer',
    name: 'Riviera Venetian Suede Driving Loafer',
    brand: 'Elite Artisan',
    price: 480,
    rating: 4.9,
    reviewCount: 88,
    gender: 'Men',
    category: 'casual',
    secondaryCategories: ['men', 'luxury-collection', 'formal'],
    image: 'https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Relaxed elegance inspired by the Amalfi coast. Hand-stitched toe box with pebble-rubber driver sole for supreme pedal grip and barefoot comfort.',
    specifications: {
      upperMaterial: 'Velvety Italian Calf Suede',
      soleMaterial: 'Segmented Pebble Rubber Sole',
      closure: 'Slip-on',
      weight: '320g',
      origin: 'Naples, Italy',
      styleCode: 'ELS-2026-RVL'
    },
    availableSizes: [39, 40, 41, 42, 43, 44, 45],
    availableColors: [
      { name: 'Mediterranean Blue', hex: '#0369a1' },
      { name: 'Sand Beige', hex: '#fef3c7' },
      { name: 'Olive Drab', hex: '#3f6212' }
    ],
    isNew: false,
    isBestSeller: true,
    isTrending: true,
    isLimited: false,
    isLuxury: true,
    isSale: false,
    stockCount: 10,
    inStock: true,
    tags: ['Loafer', 'Driving Shoe', 'Suede', 'Amalfi', 'Slip-on'],
    reviews: []
  },
  {
    id: 'elite-lumina-chunky-runner',
    name: 'Lumina Holographic Platform Trainer',
    brand: 'Maison Luxe',
    price: 640,
    originalPrice: 720,
    rating: 4.7,
    reviewCount: 51,
    gender: 'Women',
    category: 'sneakers',
    secondaryCategories: ['women', 'casual', 'new-arrivals', 'luxury-collection'],
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Statement chunky sneaker featuring multi-textured leather panels, holographic accent piping, and a lightweight 55mm sculpted platform wedge.',
    specifications: {
      upperMaterial: 'Calfskin, Suede & Metallic Mesh',
      soleMaterial: 'Phylon Lightweight Chunky Outsole',
      closure: 'Tonal Braided Laces',
      weight: '440g',
      origin: 'Paris, France',
      styleCode: 'ELS-2026-LPT'
    },
    availableSizes: [35, 36, 37, 38, 39, 40, 41],
    availableColors: [
      { name: 'Holo Pink', hex: '#f43f5e' },
      { name: 'Chalk White', hex: '#f8fafc' },
      { name: 'Lavender Mist', hex: '#c084fc' }
    ],
    isNew: true,
    isBestSeller: false,
    isTrending: true,
    isLimited: false,
    isLuxury: true,
    isSale: true,
    discountPercentage: 11,
    stockCount: 7,
    inStock: true,
    tags: ['Chunky Sneaker', 'Platform', 'Holographic', 'Fashion', 'Paris'],
    reviews: []
  },
  {
    id: 'elite-apex-trail-boot',
    name: 'Apex Waterproof All-Terrain Hike Boot',
    brand: 'AeroPerformance',
    price: 390,
    rating: 4.9,
    reviewCount: 82,
    gender: 'Unisex',
    category: 'boots',
    secondaryCategories: ['sports', 'men', 'women', 'limited-edition'],
    image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Engineered for extreme wilderness expeditions. Gore-Tex seam-sealed lining, Megagrip Vibram lugged tread, and quick-lace speed hooks.',
    specifications: {
      upperMaterial: 'Nubuck Leather & Ballistic Cordura',
      soleMaterial: 'Vibram Megagrip Arctic Lug',
      closure: 'Speed Lace Zinc Alloy Eyelets',
      weight: '520g',
      origin: 'Munich, Germany',
      styleCode: 'ELS-2026-ATB'
    },
    availableSizes: [38, 39, 40, 41, 42, 43, 44, 45, 46],
    availableColors: [
      { name: 'Granite Gray', hex: '#475569' },
      { name: 'Forest Moss', hex: '#14532d' },
      { name: 'Desert Camo', hex: '#d97706' }
    ],
    isNew: false,
    isBestSeller: true,
    isTrending: true,
    isLimited: true,
    isLuxury: false,
    isSale: false,
    stockCount: 11,
    inStock: true,
    tags: ['Waterproof', 'Hiking', 'Vibram', 'Gore-Tex', 'Outdoors'],
    reviews: []
  },
  {
    id: 'elite-valkyrie-heeled-mule',
    name: 'Valkyrie Sculpted Heel Leather Mule',
    brand: 'Maison Luxe',
    price: 820,
    originalPrice: 950,
    rating: 4.8,
    reviewCount: 39,
    gender: 'Women',
    category: 'luxury-collection',
    secondaryCategories: ['women', 'formal', 'limited-edition', 'new-arrivals'],
    image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'High fashion architectural silhouette with a hand-cast metallic gold column heel, square toe bed, and ultra-padded lambskin memory footbed.',
    specifications: {
      upperMaterial: '100% Italian Lambskin Leather',
      soleMaterial: 'Smooth Italian Leather Sole with Gold Foil Logo',
      closure: 'Slip-on Mule',
      weight: '290g',
      origin: 'Milan, Italy',
      styleCode: 'ELS-2026-VHM'
    },
    availableSizes: [35, 36, 37, 38, 39, 40],
    availableColors: [
      { name: 'Gold Column', hex: '#d4af37' },
      { name: 'Obsidian Jet', hex: '#090a0f' },
      { name: 'Nude Silk', hex: '#fde68a' }
    ],
    isNew: true,
    isBestSeller: false,
    isTrending: true,
    isLimited: true,
    isLuxury: true,
    isSale: true,
    discountPercentage: 13,
    stockCount: 5,
    inStock: true,
    tags: ['Mule', 'Architectural Heel', 'Lambskin', 'Milan', 'High Fashion'],
    reviews: []
  },
  {
    id: 'elite-zenith-minimalist-canvas',
    name: 'Zenith Organic Cotton Minimalist Trainer',
    brand: 'Elite Craft',
    price: 210,
    rating: 4.6,
    reviewCount: 95,
    gender: 'Unisex',
    category: 'casual',
    secondaryCategories: ['sneakers', 'men', 'women'],
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Sustainably crafted using GOTS-certified organic heavy canvas, natural wild rubber from the Amazon rainforest, and cork cushioned insoles.',
    specifications: {
      upperMaterial: '100% GOTS Organic Canvas',
      soleMaterial: 'Wild Rubber Outsole',
      closure: 'Organic Cotton Flat Laces',
      weight: '310g',
      origin: 'Porto, Portugal',
      styleCode: 'ELS-2026-ZMC'
    },
    availableSizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    availableColors: [
      { name: 'Natural Off-White', hex: '#fdfbf7' },
      { name: 'Charcoal Wash', hex: '#334155' },
      { name: 'Sage Green', hex: '#84cc16' }
    ],
    isNew: false,
    isBestSeller: true,
    isTrending: false,
    isLimited: false,
    isLuxury: false,
    isSale: false,
    stockCount: 22,
    inStock: true,
    tags: ['Sustainable', 'Organic', 'Canvas', 'Eco Friendly', 'Minimalist'],
    reviews: []
  },
  {
    id: 'elite-vanguard-monk-strap',
    name: 'Vanguard Double Monk Strap Calfskin Shoe',
    brand: 'Elite Atelier',
    price: 940,
    originalPrice: 1100,
    rating: 4.9,
    reviewCount: 67,
    gender: 'Men',
    category: 'formal',
    secondaryCategories: ['men', 'luxury-collection', 'limited-edition'],
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Distinctive double monk strap featuring hand-carved silver buckles, cap-toe stitching, and rich hand-painted burnishing.',
    specifications: {
      upperMaterial: 'Burnished French Calfskin',
      soleMaterial: 'Hand-sewn Leather Sole',
      closure: 'Solid Nickel Double Buckle',
      weight: '460g',
      origin: 'Florence, Italy',
      styleCode: 'ELS-2026-VDM'
    },
    availableSizes: [40, 41, 42, 43, 44, 45],
    availableColors: [
      { name: 'Burnished Chestnut', hex: '#7c2d12' },
      { name: 'Nero Black', hex: '#0f172a' }
    ],
    isNew: true,
    isBestSeller: false,
    isTrending: true,
    isLimited: true,
    isLuxury: true,
    isSale: true,
    discountPercentage: 14,
    stockCount: 6,
    inStock: true,
    tags: ['Monk Strap', 'Formal', 'Buckle', 'Burnished', 'Executive'],
    reviews: []
  }
];
