"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Wand2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-start pt-32 pb-0 md:pt-48 overflow-hidden">

            {/* Background Layer - Clipped to avoid scrollbars */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/20 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center mx-auto">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 backdrop-blur-md px-3 py-1.5 text-xs md:text-sm font-medium text-primary mb-8 ring-1 ring-primary/20"
                >
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>The Future of Design Workflow</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1] md:leading-[1.1]"
                >
                    Design at the speed of{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        imagination
                    </span>
                    .
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
                >
                    Combine AI-powered generation with expert human refinement.
                    Create stunning brand identities, UI, and marketing assets in minutes, not weeks.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-20"
                >
                    <Button size="lg" className="rounded-full text-lg h-14 px-8 shadow-xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
                        <Link href="/request">
                            Start a Project <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full text-lg h-14 px-8 border-foreground/10 hover:bg-foreground/5" asChild>
                        <Link href="/ai-lab">
                            <Wand2 className="mr-2 h-5 w-5" /> Try AI Generator
                        </Link>
                    </Button>
                </motion.div>

                {/* Hero Visual - High Quality Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 100, rotateX: 20 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 40 }}
                    style={{ perspective: "1000px" }}
                    className="relative w-full max-w-6xl z-20"
                >
                    <div className="relative rounded-xl border border-white/20 bg-black/5 backdrop-blur-2xl shadow-2xl overflow-hidden aspect-[16/10] md:aspect-[21/9]">
                        {/* Mockup Top Bar */}
                        <div className="absolute top-0 left-0 right-0 h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>

                        {/* Realistic UI Image */}
                        <div className="absolute inset-x-0 bottom-0 top-10 bg-background/50">
                            <img
                                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2674&auto=format&fit=crop"
                                alt="Dashboard Interface"
                                className="w-full h-full object-cover opacity-90"
                            />
                            {/* Floating Elements for Depth */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute top-10 right-10 w-64 h-40 bg-background/80 backdrop-blur-xl border border-white/20 rounded-lg shadow-2xl p-4 hidden md:block"
                            >
                                <div className="h-2 w-20 bg-primary/20 rounded mb-2" />
                                <div className="h-20 w-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-md" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Glow Effect behind mockup */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-3xl -z-10 rounded-[3rem]" />
                </motion.div>
            </div>

            {/* Fade to next section */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-30" />
        </section>
    );
}
