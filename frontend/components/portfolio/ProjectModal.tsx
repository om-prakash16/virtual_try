"use client";

import { X, ExternalLink, Calendar, User, Tag } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectModalProps {
    project: any | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
    if (!project) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full max-h-[90vh] md:h-auto overflow-y-auto md:overflow-hidden">

                    {/* Image Section */}
                    <div className="relative h-[300px] md:h-full min-h-[400px] bg-muted">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                            {project.aiAssisted && (
                                <Badge variant="secondary" className="backdrop-blur-md bg-white/20 text-white border-0">
                                    AI Assisted
                                </Badge>
                            )}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8 flex flex-col h-full">
                        <DialogHeader>
                            <div className="flex justify-between items-start mb-2">
                                <Badge variant="outline" className="text-muted-foreground">
                                    {project.category}
                                </Badge>
                            </div>
                            <DialogTitle className="text-2xl font-bold mb-2">
                                {project.title}
                            </DialogTitle>
                        </DialogHeader>

                        <div className="space-y-6 mt-4 flex-1">
                            <p className="text-muted-foreground leading-relaxed">
                                This project showcases a modern approach to {project.category.toLowerCase()}.
                                Utilizing advanced design principles and creative direction, we achieved a unique visual identity
                                that stands out in the market.
                            </p>

                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <User className="h-4 w-4" />
                                    <span>Client: Confidential</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Calendar className="h-4 w-4" />
                                    <span>Year: 2024</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Tag className="h-4 w-4" />
                                    <span>Tools: Figma, Midjourney</span>
                                </div>
                            </div>

                            {/* Color Palette visualization */}
                            <div className="space-y-2">
                                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Color Palette</span>
                                <div className="flex gap-0 rounded-lg overflow-hidden h-8 w-fit border border-border">
                                    <div className="w-12 h-full bg-slate-900" />
                                    <div className="w-12 h-full bg-slate-600" />
                                    <div className="w-12 h-full bg-indigo-500" />
                                    <div className="w-12 h-full bg-indigo-200" />
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 mt-auto flex gap-3">
                            <Button className="flex-1 bg-foreground text-background hover:bg-foreground/90">
                                View Case Study
                            </Button>
                            <Button variant="outline" className="flex-1">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Preview
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
