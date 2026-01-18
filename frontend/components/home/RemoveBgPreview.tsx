"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Image as ImageIcon, Upload } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function RemoveBgPreview() {
    return (
        <section className="py-24 bg-gradient-to-b from-background to-muted/20 overflow-hidden relative">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-pink-500/10 text-pink-600 border-pink-200 dark:border-pink-800">
                            <Sparkles className="mr-2 h-4 w-4" />
                            New AI Tool
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Instant Background Removal
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Create professional product photos, marketing assets, and social media content in seconds.
                            Our AI automatically isolates the subject from any background with pixel-perfect precision.
                        </p>
                        <ul className="space-y-3 pt-2">
                            {[
                                "Automatic subject detection",
                                "Hair-fine edge precision",
                                "Transparent background export",
                                "Free to use for all projects"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-pink-500" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-4">
                            <Button asChild size="lg" className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 shadow-lg shadow-pink-500/25">
                                <Link href="/tools/remove-bg">
                                    Try Remove BG Free <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Visual Demo */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl border bg-background shadow-2xl overflow-hidden aspect-[4/3] group">
                            {/* Decorative Elements */}
                            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-slate-700/25" />

                            {/* "App" Interface Mockup */}
                            <div className="absolute inset-x-0 bottom-0 top-16 p-8 flex gap-4">
                                {/* Before Image Mockup */}
                                <div className="flex-1 rounded-lg bg-muted/50 border border-dashed border-muted-foreground/25 flex flex-col items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-slate-800 dark:to-slate-900 opacity-50" />
                                    <ImageIcon className="h-12 w-12 text-muted-foreground/50 mb-2 relative z-10" />
                                    <span className="text-sm font-medium text-muted-foreground relative z-10">Original</span>
                                </div>

                                {/* Arrow */}
                                <div className="flex items-center justify-center text-pink-500">
                                    <ArrowRight className="h-8 w-8 animate-pulse" />
                                </div>

                                {/* After Image Mockup */}
                                <div className="flex-1 rounded-lg bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.E7x-kj0yvFqYkO_z52K2fAHaHa%26pid%3DApi&f=1&ipt=b8c8d234a4131df4a6136d4001c402170364964177d018b762503239e2621764&ipo=images')] bg-repeat border border-pink-500/20 shadow-[0_0_30px_-5px_var(--color-pink-500)] shadow-pink-500/20 flex flex-col items-center justify-center relative overflow-hidden">
                                    <ImageIcon className="h-12 w-12 text-pink-500 mb-2 relative z-10" />
                                    <span className="text-sm font-bold text-foreground relative z-10">No Background</span>
                                </div>
                            </div>

                            {/* Floating "Upload" Badge */}
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-md border px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium animate-bounce duration-[2000ms]">
                                <Upload className="h-4 w-4 text-pink-500" />
                                Drop Image Here
                            </div>
                        </div>

                        {/* Background Splatter/Glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl -z-10 rounded-full opacity-50" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
