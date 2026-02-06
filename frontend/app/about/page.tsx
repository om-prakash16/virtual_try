import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";

export const metadata: Metadata = {
    title: "About Us | Annu Design Studio",
    description: "Meet the team where technology meets thoughtful design. Learn about our philosophy and the founder, Annu.",
};
import { FounderIntro } from "@/components/about/FounderIntro";
import { Philosophy } from "@/components/about/Philosophy";
import { AIHumanSection } from "@/components/about/AIHumanSection";
import { ToolsWorkflow } from "@/components/about/ToolsWorkflow";
import { ServicesPreview } from "@/components/about/ServicesPreview";
import { TrustSection } from "@/components/about/TrustSection";
import { AboutCTA } from "@/components/about/AboutCTA";
import { Footer } from "@/components/footer/Footer";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <AboutHero />
            <FounderIntro />
            <Philosophy />
            <AIHumanSection />
            <ToolsWorkflow />
            <ServicesPreview />
            <TrustSection />
            <AboutCTA />
            <Footer />
        </main>
    );
}
