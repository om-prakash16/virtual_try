import type { Metadata } from "next";
import { FAQHero } from "@/components/faq/FAQHero";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
    title: "FAQ | Gurucraftpro",
    description: "Got questions? find answers about our design process, pricing, AI tools, and more.",
};

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <FAQHero />
            <FAQAccordion />
            <Footer />
        </main>
    );
}
