/**
 * Home Page Component
 * 
 * This is the main landing page for the Annu Design Studio application.
 * It serves as the entry point for users, showcasing the premium value proposition
 * and offering navigation to key areas: Portfolio and Design Request.
 * 
 * Design Philosophy:
 * - Minimalist and premium aesthetic
 * - Focus on typography and whitespace
 * - Subtle animations and gradients for depth
 */
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServiceCategoryRail } from "@/components/portfolio/ServiceCategoryRail";
import { VirtualDressingRoom } from "@/components/home/VirtualDressingRoom";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { AILabPreview } from "@/components/home/AILabPreview";

import { HowItWorks } from "@/components/home/HowItWorks";
import { ServicesSnapshot } from "@/components/home/ServicesSnapshot";
import { Testimonials } from "@/components/home/Testimonials";
import { AboutSection } from "@/components/home/AboutSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background overflow-x-hidden w-full">
      <Hero />
      <TrustStrip />
      <ServiceCategoryRail />
      <VirtualDressingRoom />
      <PortfolioPreview />
      <AILabPreview />

      <HowItWorks />
      <ServicesSnapshot />
      <Testimonials />
      <AboutSection />
      <BlogPreview />
      <FinalCTA />
      <Footer />
    </main>
  );
}
