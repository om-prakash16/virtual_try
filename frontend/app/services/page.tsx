import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";

export const metadata: Metadata = {
    title: "Services & Pricing | Annu Design Studio",
    description: "Choose the perfect design plan for your needs. From instant AI concepts to fully custom branding packages.",
};
import { ServiceCards } from "@/components/services/ServiceCards";
import { ServiceTiers } from "@/components/services/ServiceTiers";
import { ComparisonTable } from "@/components/services/ComparisonTable";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { Footer } from "@/components/footer/Footer";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <ServicesHero />
            <ServiceCards />
            <ServiceTiers />
            <ComparisonTable />
            <ProcessTimeline />
            <ServiceFAQ />
            <ServicesCTA />
            <Footer />
        </main>
    );
}
