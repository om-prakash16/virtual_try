"use client";

import { motion } from "framer-motion";

export function PortfolioHero() {
    return (
        <section className="pt-32 pb-16 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Crafting visuals that <span className="text-indigo-500">speak</span>, <span className="text-purple-500">sell</span>, and <span className="text-pink-500">scale</span>.
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                        A curated collection of AI-assisted and handcrafted design projects by Annu.
                        Exploring the intersection of human creativity and machine intelligence.
                    </p>
                </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-500/5 to-transparent -z-10 blur-3xl" />
        </section>
    );
}
