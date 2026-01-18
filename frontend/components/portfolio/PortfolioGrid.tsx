"use client";

import { useState } from "react";
import { PortfolioCard } from "./PortfolioCard";
import { usePortfolioStore } from "@/lib/store/usePortfolioStore";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectModal } from "./ProjectModal";
import { Loader2 } from "lucide-react";

// Mock Data
const portfolioItems = [
    {
        id: "neon-drift",
        title: "Neon Drift Racing",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
        aiAssisted: true,
    },
    {
        id: "eco-haven",
        title: "Eco Haven Marketplace",
        category: "UI/UX",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2670&auto=format&fit=crop",
        aiAssisted: false,
    },
    {
        id: "lumina-smart-home",
        title: "Lumina Smart Home",
        category: "Product Design",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2673&auto=format&fit=crop",
        aiAssisted: true,
    },
    {
        id: "velvet-vine",
        title: "Velvet & Vine",
        category: "Packaging",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2670&auto=format&fit=crop",
        aiAssisted: false,
    },
    {
        id: "quantum-deck",
        title: "Quantum Financial Deck",
        category: "Presentation",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        aiAssisted: true,
    },
    {
        id: "abstract-3d-series",
        title: "Abstract 3D Series",
        category: "3D Art",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        aiAssisted: true,
    },
    {
        id: "nordic-furniture",
        title: "Nordic Furniture Co.",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2574&auto=format&fit=crop",
        aiAssisted: false,
    },
    {
        id: "solaris-energy",
        title: "Solaris Energy",
        category: "Logo Design",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop",
        aiAssisted: true,
    },
    {
        id: "vogue-editorial",
        title: "Vogue Editorial",
        category: "Print Media",
        image: "https://images.unsplash.com/photo-1548866380-60b1e4f483c6?q=80&w=2538&auto=format&fit=crop",
        aiAssisted: false,
    },
    // --- New Items ---
    {
        id: "cyber-punk-city",
        title: "Cyber City Concept",
        category: "3D Art",
        image: "https://images.unsplash.com/photo-1614728853970-3638d011666e?q=80&w=2671&auto=format&fit=crop",
        aiAssisted: true,
    },
    {
        id: "minimalist-skincare",
        title: "Aura Skincare",
        category: "Packaging",
        image: "https://images.unsplash.com/photo-1556228578-8d89482d92ae?q=80&w=2670&auto=format&fit=crop",
        aiAssisted: false,
    },
    {
        id: "tech-conference-2025",
        title: "TechFlow 2025",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2612&auto=format&fit=crop",
        aiAssisted: true,
    },
    {
        id: "crypto-wallet-app",
        title: "Vault Crypto App",
        category: "UI/UX",
        image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2670&auto=format&fit=crop",
        aiAssisted: false,
    },
    {
        id: "coffee-roasters",
        title: "Highland Roasters",
        category: "Logo Design",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2671&auto=format&fit=crop",
        aiAssisted: false,
    },
    {
        id: "arch-viz",
        title: "Modern Villa Viz",
        category: "3D Art",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop",
        aiAssisted: true,
    },
    {
        id: "azure-villa",
        title: "Azure Villa Estate",
        category: "Real Estate",
        image: "https://images.unsplash.com/photo-1600596542815-e32c0d540e2d?q=80&w=2600&auto=format&fit=crop",
        aiAssisted: true,
    },
];

export function PortfolioGrid() {
    const { activeCategory, searchQuery } = usePortfolioStore();
    const [selectedProject, setSelectedProject] = useState<any | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Pagination / Load More state
    const [displayCount, setDisplayCount] = useState(6);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const filteredItems = portfolioItems.filter(item => {
        const matchesCategory = activeCategory === "All" || item.category.includes(activeCategory) || (activeCategory === "UI/UX" && item.category === "UI / UX");
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const visibleItems = filteredItems.slice(0, displayCount);
    const hasMore = visibleItems.length < filteredItems.length;

    const handleLoadMore = () => {
        setIsLoadingMore(true);
        setTimeout(() => {
            setDisplayCount(prev => prev + 6);
            setIsLoadingMore(false);
        }, 800);
    };

    const handleProjectClick = (item: any) => {
        setSelectedProject(item);
        setIsModalOpen(true);
    };

    return (
        <section className="py-12 container mx-auto px-4 md:px-6">
            <motion.div
                layout
                className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
            >
                <AnimatePresence mode="popLayout">
                    {visibleItems.map((item) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            key={item.id}
                        >
                            <PortfolioCard
                                item={item}
                                onClick={() => handleProjectClick(item)}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredItems.length === 0 && (
                <div className="py-20 text-center text-muted-foreground">
                    <p className="text-lg">No projects found matching your criteria.</p>
                </div>
            )}

            {/* Load More Trigger */}
            {hasMore && (
                <div className="mt-16 text-center">
                    <button
                        onClick={handleLoadMore}
                        disabled={isLoadingMore}
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground/30 hover:border-foreground pb-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
                    >
                        {isLoadingMore ? (
                            <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Loading...
                            </>
                        ) : (
                            "Load More Projects"
                        )}
                    </button>
                </div>
            )}

            <ProjectModal
                project={selectedProject}
                open={isModalOpen}
                onOpenChange={setIsModalOpen}
            />
        </section>
    );
}
