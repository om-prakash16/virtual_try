"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, Send, Loader2 } from "lucide-react";

export function ContactForm() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate generic submission
        setTimeout(() => {
            setLoading(false);
            alert("Thanks for reaching out! Your message has been received.");
        }, 2000);
    };

    return (
        <section id="contact-form" className="py-12 container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input id="name" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input id="email" type="email" placeholder="john@example.com" required />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="company">Company / Brand</Label>
                            <Input id="company" placeholder="Optional" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="inquiry-type">Inquiry Type</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select intent" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="custom">Custom Design Project</SelectItem>
                                    <SelectItem value="ai">AI Design Assistance</SelectItem>
                                    <SelectItem value="collab">Collaboration</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Project Brief / Message</Label>
                        <Textarea
                            id="message"
                            placeholder="Tell us about your project, goals, and any specific requirements..."
                            className="min-h-[150px]"
                        />
                        <p className="text-xs text-muted-foreground text-right">The more details, the better.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="budget">Budget Range</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select range" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="small">&lt; ₹40,000</SelectItem>
                                    <SelectItem value="medium">₹40,000 - ₹1,50,000</SelectItem>
                                    <SelectItem value="large">₹1,50,000+</SelectItem>
                                    <SelectItem value="custom">Custom / Not sure</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="deadline">Deadline (Optional)</Label>
                            <Input id="deadline" placeholder="e.g. End of Month" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Attachments (Optional)</Label>
                        <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                            <Upload className="h-6 w-6 mx-auto text-muted-foreground mb-2" />
                            <p className="text-sm font-medium">Click to upload or drag & drop</p>
                            <p className="text-xs text-muted-foreground">PDF, JPG, PNG (Max 10MB)</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Checkbox id="consent" required />
                        <Label htmlFor="consent" className="text-sm font-normal text-muted-foreground">
                            I agree to the <span className="underline cursor-pointer hover:text-foreground">Privacy Policy</span> and consent to processing this data.
                        </Label>
                    </div>

                    <Button type="submit" className="w-full h-12 text-base font-medium bg-indigo-600 hover:bg-indigo-700 text-white" disabled={loading}>
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                Send Message <Send className="ml-2 h-4 w-4" />
                            </>
                        )}
                    </Button>
                </form>
            </div>
        </section>
    );
}
