"use client";

import { Check, Sparkles, User, PenTool, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function ServiceTiers() {
    return (
        <div className="space-y-24 py-24 container mx-auto px-4 md:px-6">

            {/* 1. AI Design Services */}
            <section id="ai" className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <Badge variant="outline" className="mb-4 text-indigo-500 border-indigo-200 bg-indigo-50">Fast & Efficient</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Design Services</h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Ideal for early-stage startups and budget-conscious users who need fast ideas.
                        Get instant visual concepts to kickstart your branding.
                    </p>

                    <ul className="space-y-3 mb-8">
                        {["Text prompt → AI-generated designs", "Multiple variations instantly", "Style & color controls", "Low-res downloads (free)"].map((item) => (
                            <li key={item} className="flex items-center gap-3 text-muted-foreground">
                                <Check className="h-5 w-5 text-indigo-500 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <Button className="rounded-full bg-indigo-600 hover:bg-indigo-700" asChild>
                        <Link href="/ai-lab">
                            Try AI Design <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
                <div className="order-1 md:order-2 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl p-8 aspect-square flex items-center justify-center">
                    <Sparkles className="h-32 w-32 text-indigo-500/20" />
                </div>
            </section>

            {/* 2. Hybrid (AI + Manual) */}
            <section id="hybrid" className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 aspect-square flex items-center justify-center text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4">
                        <Badge className="bg-white text-indigo-600 hover:bg-white/90">Most Popular</Badge>
                    </div>
                    <User className="h-32 w-32 text-white/20" />
                </div>
                <div>
                    <Badge variant="outline" className="mb-4 text-purple-500 border-purple-200 bg-purple-50">Professional Polish</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">AI + Manual Refinement</h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        For businesses that want the speed of AI but the quality assurance of a human designer.
                        We take the best AI concepts and refine them to professional standards.
                    </p>

                    <ul className="space-y-3 mb-8">
                        {["AI-generated base concepts", "Manual refinement by Gurucraftpro", "Typography & color correction", "Commercial-use source files"].map((item) => (
                            <li key={item} className="flex items-center gap-3 text-muted-foreground">
                                <Check className="h-5 w-5 text-purple-500 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <Button size="lg" className="rounded-full bg-foreground text-background" asChild>
                        <Link href="/request?type=hybrid">
                            Upgrade & Customize
                        </Link>
                    </Button>
                </div>
            </section>

            {/* 3. Fully Custom */}
            <section id="custom" className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <Badge variant="outline" className="mb-4 text-pink-500 border-pink-200 bg-pink-50">Premium</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Fully Custom Design</h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        For established brands and high-impact needs. Complete creative direction,
                        from discovery to final delivery, tailored exactly to your vision.
                    </p>

                    <ul className="space-y-3 mb-8">
                        {["Deep discovery & strategy", "Fully manual concept ideation", "Unlimited revisions (scope-based)", "Full brand guidelines & kits"].map((item) => (
                            <li key={item} className="flex items-center gap-3 text-muted-foreground">
                                <Check className="h-5 w-5 text-pink-500 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <Button variant="outline" className="rounded-full" asChild>
                        <Link href="/request?type=custom">
                            Request Custom Design
                        </Link>
                    </Button>
                </div>
                <div className="order-1 md:order-2 bg-muted rounded-3xl p-8 aspect-square flex items-center justify-center">
                    <PenTool className="h-32 w-32 text-muted-foreground/20" />
                </div>
            </section>

        </div>
    );
}
