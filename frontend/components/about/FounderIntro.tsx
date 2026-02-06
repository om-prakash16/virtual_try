"use client";

import { motion } from "framer-motion";
import { User, Sparkles } from "lucide-react";

export function FounderIntro() {
    return (
        <section className="py-24 container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted relative z-10 box-shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                            alt="Gurucraftpro - Founder & Designer"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-indigo-500/20 rounded-3xl -z-10" />
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
                </div>

                <div>
                    <div className="inline-flex items-center gap-2 text-indigo-500 font-medium mb-4">
                        <Sparkles className="h-4 w-4" />
                        Meet Gurucraftpro
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Designing with intent, <br />powered by innovation.</h2>

                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            Gurucraftpro is a graphic designer focused on creating clear, impactful, and modern visual identities.
                            With a strong understanding of branding, digital design, and emerging AI tools,
                            she helps individuals and businesses turn ideas into visuals that feel intentional and professional.
                        </p>
                        <p>
                            Her approach combines creative thinking, strategic design principles, and the responsible use of AI
                            as a productivity and ideation tool. This unique blend ensures that every project is not only
                            efficiently delivered but also deeply rooted in human creativity and emotion.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
