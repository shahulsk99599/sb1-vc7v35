import React from 'react';
import { PromotionBanner } from '../components/PromotionBanner';
import { ServiceCategories } from '../components/ServiceCategories';
import { BlogSection } from '../components/BlogSection';
import { ReviewsSection } from '../components/ReviewsSection';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <PromotionBanner />
      <ServiceCategories />
      <BlogSection />
      <ReviewsSection />
    </div>
  );
}