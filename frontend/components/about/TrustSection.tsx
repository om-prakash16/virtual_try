"use client";

import { CheckCircle2 } from "lucide-react";

const benefits = [
    "Transparent pricing models",
    "Clear & consistent communication",
    "Revision-friendly workflow",
    "NDA available for custom projects",
    "Commercial rights included",
    "Global client support"
];

export function TrustSection() {
    return (
        <section className="py-20 bg-muted/50 border-t border-border">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Built on Trust</h2>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            Design is a partnership. We prioritize transparency and reliability so you can focus on growing your business while we handle the visuals.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center gap-3 bg-background p-3 rounded-lg border border-border">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                <span className="font-medium text-sm">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
