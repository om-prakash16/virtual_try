import type { Metadata } from "next";
import { AIHero } from "@/components/ai/AIHero";

export const metadata: Metadata = {
    title: "AI Design Lab | Annu Design Studio",
    description: "Experience the future of design. Generate concepts instantly with our AI tools and refine them with professional expertise.",
};
import { AIPromptInput } from "@/components/ai/AIPromptInput";
import { DesignControls } from "@/components/ai/DesignControls";
import { AIGallery } from "@/components/ai/AIGallery";
import { WorkflowExplainer } from "@/components/ai/WorkflowExplainer";
import { UpgradeCTA } from "@/components/ai/UpgradeCTA";
import { VersionHistory } from "@/components/ai/VersionHistory";
import { Footer } from "@/components/footer/Footer";

export default function AILabPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <AIHero />

            <section className="container mx-auto px-4 md:px-6 pb-24">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left: Controls & History */}
                    <div className="w-full lg:w-1/3 space-y-6 lg:sticky lg:top-24">
                        <DesignControls />
                        <VersionHistory />
                    </div>

                    {/* Right: Input & Gallery */}
                    <div className="w-full lg:w-2/3 flex flex-col">
                        <AIPromptInput />
                        <AIGallery />
                    </div>
                </div>
            </section>

            <WorkflowExplainer />
            <UpgradeCTA />
            <Footer />
        </main>
    );
}
