import type { Metadata } from "next";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";

export const metadata: Metadata = {
    title: "Portfolio | Annu Design Studio",
    description: "Explore our collection of AI-generated and custom-crafted design projects. From branding to UI/UX, see what's possible.",
};
import { PortfolioFilters } from "@/components/portfolio/PortfolioFilters";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { PortfolioCTA } from "@/components/portfolio/PortfolioCTA";
import { Footer } from "@/components/footer/Footer";

import { ServiceCategoryRail } from "@/components/portfolio/ServiceCategoryRail";

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <PortfolioHero />
            <ServiceCategoryRail />
            <PortfolioFilters />
            <PortfolioGrid />
            <PortfolioCTA />
            <Footer />
        </main>
    );
}
