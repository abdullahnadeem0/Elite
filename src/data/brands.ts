export interface Brand {
  id: string;
  name: string;
  country: string;
  founded: string;
  tagline: string;
  logoText: string;
}

export const BRANDS: Brand[] = [
  { id: 'elite-artisan', name: 'Elite Artisan', country: 'Florence, Italy', founded: '1984', tagline: 'Master Handcraftsmanship', logoText: 'ELITE ARTISAN' },
  { id: 'maison-luxe', name: 'Maison Luxe', country: 'Paris, France', founded: '1992', tagline: 'Haute Couture Footwear', logoText: 'MAISON LUXE' },
  { id: 'aeroperformance', name: 'AeroPerformance', country: 'Tokyo & Portland', founded: '2010', tagline: 'Supercritical Carbon Kinetics', logoText: 'AERO RUN' },
  { id: 'elite-atelier', name: 'Elite Atelier', country: 'Northamptonshire, UK', founded: '1968', tagline: 'Bespoke Goodyear Bespoke', logoText: 'ATELIER UK' },
  { id: 'elite-craft', name: 'Elite Craft', country: 'Porto, Portugal', founded: '2015', tagline: 'Sustainable Circular Luxury', logoText: 'CRAFT PT' }
];
