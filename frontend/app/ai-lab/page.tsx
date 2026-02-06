import type { Metadata } from "next";
import { AIHero } from "@/components/ai/AIHero";

export const metadata: Metadata = {
    title: "AI Design Lab | Annu Design Studio",
    description: "Experience the future of design. Generate concepts instantly with our AI tools and refine them with professional expertise.",
};
import Link from "next/link";
import { ArrowRight, Shirt, Sparkles, PenTool, Sticker } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer/Footer";

const tools = [
    {
        title: "Virtual Dress Change Room",
        description: "Upload your photo and a dress to see how it fits instantly.",
        href: "/ai-lab/virtual-try-on",
        icon: Shirt,
        color: "text-rose-500",
        bg: "bg-rose-500/10",
        gradient: "from-rose-500/20 to-pink-500/20"
    },
    {
        title: "Outfit Generator",
        description: "Generate complete outfit ideas from simple text prompts.",
        href: "/ai-lab/outfit-generator",
        icon: Sparkles,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        gradient: "from-amber-500/20 to-orange-500/20"
    },
    {
        title: "Logo & Design Generator",
        description: "Create professional logos and brand assets in seconds.",
        href: "/ai-lab/logo-generator",
        icon: PenTool,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        gradient: "from-indigo-500/20 to-blue-500/20"
    },
    {
        title: "Sticker Generator",
        description: "Design fun, custom stickers for social media and messaging.",
        href: "/ai-lab/sticker-generator",
        icon: Sticker, // Using Sticker icon if available, else generic
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        gradient: "from-emerald-500/20 to-green-500/20"
    }
];

export default function AILabPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            {/* Hero Section */}
            <section className="relative py-24 px-4 md:px-6 overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10 blur-3xl -z-20" />

                <div className="container mx-auto max-w-4xl text-center space-y-6">
                    <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm text-indigo-800 backdrop-blur-sm">
                        <Sparkles className="mr-2 h-3 w-3" />
                        <span>AI Design Lab</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        Unleash Your Creativity with AI
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Explore our suite of AI-powered modeling and design tools. From virtual try-ons to instant branding, create professional assets in seconds.
                    </p>
                </div>
            </section>

            {/* Tools Grid */}
            <section className="container mx-auto px-4 md:px-6 pb-24">
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {tools.map((tool) => (
                        <Link key={tool.title} href={tool.href} className="group">
                            <div className="h-full relative overflow-hidden rounded-3xl border bg-card p-8 transition-all hover:shadow-lg hover:-translate-y-1">
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${tool.gradient}`} />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className={`h-12 w-12 rounded-2xl ${tool.bg} flex items-center justify-center mb-6`}>
                                        <tool.icon className={`h-6 w-6 ${tool.color}`} />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2">{tool.title}</h3>
                                    <p className="text-muted-foreground mb-6 flex-grow">{tool.description}</p>

                                    <div className="flex items-center font-medium text-sm text-foreground">
                                        Try it now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
