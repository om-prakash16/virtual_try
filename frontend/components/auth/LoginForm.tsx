"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, ArrowRight, Github } from "lucide-react";

export function LoginForm() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate login
        setTimeout(() => {
            setLoading(false);
            alert("Login simulation successful!");
        }, 2000);
    };

    return (
        <div className="w-full max-w-md mx-auto p-6">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                <p className="text-muted-foreground">Enter your credentials to access your account.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="name@example.com" required />
                </div>
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link href="/forgot-password" className="text-xs text-indigo-500 hover:text-indigo-600 hover:underline">
                            Forgot password?
                        </Link>
                    </div>
                    <Input id="password" type="password" required />
                </div>

                <Button type="submit" className="w-full h-11 bg-indigo-600 hover:bg-indigo-700 text-white" disabled={loading}>
                    {loading ? <Loader2 className="animate-spin h-5 w-5" /> : "Sign In"}
                </Button>
            </form>

            <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-muted/50" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
            </div>

            <Button variant="outline" className="w-full h-11" type="button">
                <Github className="mr-2 h-4 w-4" /> Github
            </Button>

            <p className="mt-8 text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link href="/signup" className="text-indigo-500 hover:text-indigo-600 font-medium hover:underline">
                    Sign up
                </Link>
            </p>
        </div>
    );
}
