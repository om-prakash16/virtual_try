"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wand2, RefreshCw, Send, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AILabPreview() {
    const [prompt, setPrompt] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerate = () => {
        if (!prompt) return;
        setIsGenerating(true);
        // Simulate generation
        setTimeout(() => setIsGenerating(false), 2000);
    };

    return (
        <section className="py-24 bg-gradient-to-b from-background to-muted/20 overflow-hidden w-full max-w-full">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="flex flex-col gap-6 order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 text-indigo-500 font-semibold mb-2">
                            <Wand2 className="h-5 w-5" />
                            <span>AI Design Lab</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Visualize your ideas <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                                instantly.
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Don't wait days for a concept. Our AI-powered lab generates moodboards,
                            logos, and layouts in seconds. Use it to brainstorm or reach the final design faster.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Button size="lg" className="h-12 px-8 text-base bg-indigo-600 hover:bg-indigo-700">
                                Try AI Generator
                            </Button>
                            <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                                View Gallery
                            </Button>
                        </div>
                    </div>

                    {/* Prompt Interface Mockup */}
                    <div className="order-1 lg:order-2 perspective-1000">
                        <motion.div
                            initial={{ transform: "rotateY(-5deg) rotateX(5deg)" }}
                            whileHover={{ transform: "rotateY(0deg) rotateX(0deg)" }}
                            transition={{ duration: 0.5 }}
                            className="bg-background rounded-xl border border-border shadow-2xl p-6 relative z-10"
                        >
                            {/* Interface Header */}
                            <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
                                <div className="font-semibold flex items-center gap-2">
                                    <div className="h-3 w-3 rounded-full bg-green-500" />
                                    New Project
                                </div>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <RefreshCw className="h-4 w-4" />
                                </Button>
                            </div>

                            {/* Input Area */}
                            <div className="flex gap-2 mb-6">
                                <div className="relative flex-1">
                                    <Input
                                        placeholder="Minimalist logo for a coffee shop..."
                                        className="pr-10 h-12 bg-muted/50"
                                        value={prompt}
                                        onChange={(e) => setPrompt(e.target.value)}
                                    />
                                    <Wand2 className="absolute right-3 top-3.5 h-5 w-5 text-muted-foreground" />
                                </div>
                                <Button size="icon" className="h-12 w-12 shrink-0 bg-indigo-600" onClick={handleGenerate}>
                                    <Send className="h-5 w-5" />
                                </Button>
                            </div>

                            {/* Image Grid / Result Area */}
                            <div className="grid grid-cols-2 gap-4 aspect-square md:aspect-[4/3] bg-muted/30 rounded-lg p-2 border border-border/50 border-dashed relative">
                                {/* Placeholder Images - replaced with divs for now */}
                                <div className="rounded-md bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                                    <ImageIcon className="h-8 w-8 text-indigo-300 opacity-50" />
                                </div>
                                <div className="rounded-md bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                                    <ImageIcon className="h-8 w-8 text-blue-300 opacity-50" />
                                </div>
                                <div className="rounded-md bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                                    <ImageIcon className="h-8 w-8 text-green-300 opacity-50" />
                                </div>
                                <div className="rounded-md bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                                    <ImageIcon className="h-8 w-8 text-orange-300 opacity-50" />
                                </div>

                                {/* Generation Overlay */}
                                <AnimatePresence>
                                    {isGenerating && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center z-20"
                                        >
                                            <div className="h-12 w-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4" />
                                            <span className="font-medium text-indigo-500 animate-pulse">Generating...</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                        </motion.div>
                        {/* Background Blob - Strictly Clipped */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 rounded-xl">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/10 blur-[100px]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
