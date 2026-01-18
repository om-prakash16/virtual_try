"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Designs Delivered", value: "150+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "AI Turnaround", value: "24h" },
];

const companies = [
    { name: "Adobe", logo: "https://cdn.simpleicons.org/adobe" },
    { name: "Figma", logo: "https://cdn.simpleicons.org/figma" },
    { name: "Notion", logo: "https://cdn.simpleicons.org/notion" },
    { name: "Webflow", logo: "https://cdn.simpleicons.org/webflow" },
    { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel" },
    { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe" }
];

export function TrustStrip() {
    return (
        <section className="border-y border-white/5 bg-black/5 backdrop-blur-sm py-12 relative overflow-hidden w-full max-w-full">
            {/* Subtle shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 opacity-50" />

            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-10 md:gap-20 relative z-10">

                {/* Stats - Clean and Bold */}
                <div className="flex gap-12 md:gap-16 shrink-0 divide-x divide-white/10">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center pl-6 first:pl-0">
                            <div className="text-3xl md:text-4xl font-bold tracking-tighter tabular-nums bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
                                {stat.value}
                            </div>
                            <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-semibold mt-1">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Vertical Divider (Desktop) */}
                <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent shrink-0 opacity-50" />

                {/* Scrolling Logos */}
                <div className="relative flex-1 w-full max-w-full overflow-hidden">
                    <div className="relative w-full max-w-full overflow-hidden"
                        style={{ maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)" }}>
                        <motion.div
                            className="flex gap-16 items-center whitespace-nowrap"
                            animate={{ x: [0, -1000] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 40,
                            }}
                        >
                            {[...companies, ...companies, ...companies].map((company, index) => (
                                <div
                                    key={`${company.name}-${index}`}
                                    className="relative h-8 w-28 opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0 cursor-pointer"
                                >
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
