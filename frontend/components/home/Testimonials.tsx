"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
    {
        id: 1,
        content: "Gurucraftpro completely reimagined our brand identity. The blend of AI efficiency and human creativity resulted in a logo that feels both futuristic and timeless.",
        author: "Sarah Jenkins",
        role: "Founder, Aura Tech",
        rating: 5,
    },
    {
        id: 2,
        content: "We needed a UI overhaul for our fintech app, and the results were effectively instant. The 'AI Design Lab' concepts gave us a starting point we hadn't even considered.",
        author: "Marcus Thorne",
        role: "CTO, FinStream",
        rating: 5,
    },
    {
        id: 3,
        content: "I've worked with many designers, but the communication here is next level. The process timeline was transparent, and the final deliverables were pixel-perfect.",
        author: "Elena Rodriguez",
        role: "Marketing Director, Solstice",
        rating: 5,
    },
    {
        id: 4,
        content: "The social media kit they created boosted our engagement by 40% in the first month. The designs are vibrant, consistent, and incredibly scroll-stopping.",
        author: "David Kim",
        role: "Influencer & Content Creator",
        rating: 5,
    },
    {
        id: 5,
        content: "Professional, fast, and wildly creative. Use the 'Request Custom Design' feature if you have a complex idea—they will nail it.",
        author: "Olivia Vance",
        role: "CEO, Vance Interiors",
        rating: 5,
    },
    {
        id: 6,
        content: "I was skeptical about AI in design, but Gurucraftpro's team knows exactly how to wield it. It feels human, emotional, but delivered at 10x the speed.",
        author: "James Howell",
        role: "VP of Product, NextGen",
        rating: 5,
    },
];

export function Testimonials() {
    const [emblaRef] = useEmblaCarousel({ align: "start", loop: true });

    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Trusted by creators worldwide.
                    </h2>
                </div>

                <div className="overflow-hidden cursor-grab active:cursor-grabbing px-1" ref={emblaRef}>
                    <div className="flex gap-6">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                            >
                                <div className="h-full bg-muted/30 border border-border rounded-2xl p-8 flex flex-col justify-between">
                                    <div>
                                        <Quote className="h-8 w-8 text-indigo-500/20 mb-4" />
                                        <p className="text-lg leading-relaxed mb-6 font-medium text-foreground/80">
                                            "{testimonial.content}"
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Avatar>
                                            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.author}`} />
                                            <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="font-bold">{testimonial.author}</div>
                                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                        </div>
                                        <div className="ml-auto flex gap-0.5">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
