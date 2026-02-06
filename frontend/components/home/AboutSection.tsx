"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">

                    {/* Image Side */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted relative z-10">
                            {/* 
                   Replace with actual photo of Gurucraftpro.
                   Using a placeholder gradient for now.
                */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-purple-200" />
                            <div className="absolute inset-0 flex items-center justify-center text-indigo-900/20 font-bold text-4xl">
                                Gurucraftpro
                            </div>
                        </div>
                        {/* Decorative Background Element */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-border rounded-2xl -z-0" />
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            Design is intelligence made visible.
                        </h2>
                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Hi, I'm Gurucraftpro. I'm a multidisciplinary designer obsessed with the intersection of
                                art and technology.
                            </p>
                            <p>
                                My philosophy is simple: good design should be invisible. It should work so well
                                that you don't even notice it's there—you just feel it. Whether I'm crafting a
                                brand identity from scratch or using AI to rapidly iterate on concepts, my goal
                                is always the same: clarity, beauty, and impact.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/about">
                                    More About Me
                                </Link>
                            </Button>
                            <Button size="lg" variant="ghost" asChild>
                                <Link href="/portfolio">
                                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>

                        {/* Quick Stats/Tools */}
                        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border mt-4">
                            <div>
                                <div className="font-bold text-xl">5+</div>
                                <div className="text-xs text-muted-foreground uppercase">Years Exp.</div>
                            </div>
                            <div>
                                <div className="font-bold text-xl">PS/AI/Figma</div>
                                <div className="text-xs text-muted-foreground uppercase">Core Tools</div>
                            </div>
                            <div>
                                <div className="font-bold text-xl">Global</div>
                                <div className="text-xs text-muted-foreground uppercase">Client Base</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
