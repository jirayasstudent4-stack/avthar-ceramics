export const revalidate = 60;

import HeroSection from "@/components/website/home/hero";
import FeaturedProducts from "@/components/website/home/featured-products";
import BrandStory from "@/components/website/home/brand-story";
import ArchitecturalShowcase from "@/components/website/sections/architectural-showcase";
import LuxuryCollections from "@/components/website/sections/luxury-collections";
import ProjectShowcase from "@/components/website/sections/project-showcase";
import InspirationGallery from "@/components/website/sections/inspiration-gallery";
import DealerCTA from "@/components/website/sections/dealer-cta";
import Testimonials from "@/components/website/sections/testimonials";
import Newsletter from "@/components/website/sections/newsletter";

export default function HomePage() {
  return (
    <div>
      <HeroSection />

      <FeaturedProducts />

      <ArchitecturalShowcase />

      <LuxuryCollections />

      <BrandStory />

      <ProjectShowcase />

      <InspirationGallery />

      <Testimonials />

      <DealerCTA />

      <Newsletter />
    </div>
  );
}