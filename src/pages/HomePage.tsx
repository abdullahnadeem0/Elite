import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { CategoriesSection } from '../components/CategoriesSection';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { OffersSection } from '../components/OffersSection';
import { BrandShowcase } from '../components/BrandShowcase';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { InstagramGallery } from '../components/InstagramGallery';
import { NewsletterSection } from '../components/NewsletterSection';

export const HomePage: React.FC = () => {
  return (
    <main className="space-y-0">
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <OffersSection />
      <BrandShowcase />
      <TestimonialsSection />
      <InstagramGallery />
      <NewsletterSection />
    </main>
  );
};
