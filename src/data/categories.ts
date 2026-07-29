import { CategorySlug } from '../types';

export interface CategoryItem {
  id: CategorySlug;
  name: string;
  tagline: string;
  image: string;
  count: number;
  featured?: boolean;
}

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'running',
    name: 'Running Shoes',
    tagline: 'Hyper-responsive carbon propulsion & ultra cushioning',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
    count: 24,
    featured: true
  },
  {
    id: 'sneakers',
    name: 'Luxury Sneakers',
    tagline: 'Iconic street architecture & Italian leather craftsmanship',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
    count: 38,
    featured: true
  },
  {
    id: 'sports',
    name: 'Sports Shoes',
    tagline: 'Multi-court agility & high-impact engineered stability',
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop',
    count: 19,
    featured: true
  },
  {
    id: 'casual',
    name: 'Casual Shoes',
    tagline: 'Refined weekend loafers & minimalist organic canvas trainers',
    image: 'https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=800&auto=format&fit=crop',
    count: 27,
    featured: true
  },
  {
    id: 'formal',
    name: 'Formal Dress Shoes',
    tagline: 'Hand-patinated Oxfords & Goodyear-welted Monk Straps',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop',
    count: 16,
    featured: true
  },
  {
    id: 'boots',
    name: 'Luxury Boots',
    tagline: 'Waterproof Tuscan suede Chelseas & extreme alpine hikers',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
    count: 14,
    featured: true
  },
  {
    id: 'high-tops',
    name: 'High Tops',
    tagline: 'Quilted leather high-collars & metallic accent zippers',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop',
    count: 12,
    featured: true
  },
  {
    id: 'limited-edition',
    name: 'Limited Edition',
    tagline: 'Numbered artisan batches with 24k gold accents',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop',
    count: 8,
    featured: true
  },
  {
    id: 'luxury-collection',
    name: 'Premium Collection',
    tagline: 'The pinnacle of global footwear luxury and heritage',
    image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=800&auto=format&fit=crop',
    count: 30,
    featured: true
  }
];
