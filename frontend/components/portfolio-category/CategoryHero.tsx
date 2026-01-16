"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface CategoryHeroProps {
    title: string;
    description: string;
    tags?: string[];
}

export function CategoryHero({ title, description, tags }: CategoryHeroProps) {
    return (
        <section className="pt-32 pb-16 bg-background relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] -z-10" />
            <div className="container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    {tags && (
                        <div className="flex justify-center gap-2 mb-6">
                            {tags.map(tag => (
                                <Badge key={tag} variant="outline" className="text-xs uppercase tracking-wider">{tag}</Badge>
                            ))}
                        </div>
                    )}
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
                        {title}
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        {description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
