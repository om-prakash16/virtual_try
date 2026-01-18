"use client";

import { useState } from "react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Download, Sparkles, Image as ImageIcon, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function RemoveBgPage() {
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [processedImage, setProcessedImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);
            setPreview(URL.createObjectURL(file));
            setProcessedImage(null);
            setError(null);
        }
    };

    const handleRemoveBackground = async () => {
        if (!image) return;

        setLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append("file", image);

        try {
            const response = await fetch("http://localhost:8000/api/remove-bg", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Failed to process image");
            }

            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            setProcessedImage(url);
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = () => {
        if (processedImage) {
            const link = document.createElement("a");
            link.href = processedImage;
            link.download = "annu-design-studio-nobs.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <DashboardShell>
            <div className="max-w-5xl mx-auto py-8">
                <div className="mb-8 text-center md:text-left">
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2 justify-center md:justify-start">
                        <Sparkles className="h-8 w-8 text-indigo-500" />
                        Background Remover
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        Upload an image to magically remove the background using AI.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Upload Section */}
                    <Card className="h-full">
                        <CardContent className="p-6 flex flex-col h-full justify-center items-center min-h-[400px] border-2 border-dashed rounded-xl relative overflow-hidden group hover:border-indigo-500/50 transition-colors">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                            />

                            {!preview ? (
                                <div className="text-center space-y-4 pointer-events-none z-10">
                                    <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                        <Upload className="h-10 w-10 text-muted-foreground group-hover:text-indigo-500" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-lg font-medium">Click or Drag & Drop</p>
                                        <p className="text-sm text-muted-foreground">Supports JPG, PNG, WEBP</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="relative w-full h-full min-h-[300px] flex items-center justify-center bg-gray-900/5 rounded-lg overflow-hidden">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={preview}
                                        alt="Original"
                                        className="max-w-full max-h-[400px] object-contain shadow-lg"
                                    />
                                    <div className="absolute top-2 right-2 z-30">
                                        <Button size="sm" variant="secondary" onClick={() => {
                                            setPreview(null);
                                            setImage(null);
                                            setProcessedImage(null);
                                        }}>
                                            Change Image
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Result Section */}
                    <Card className="h-full bg-muted/30">
                        <CardContent className="p-6 flex flex-col h-full justify-center items-center min-h-[400px]">
                            {loading ? (
                                <div className="text-center space-y-4">
                                    <Loader2 className="h-12 w-12 animate-spin text-indigo-500 mx-auto" />
                                    <p className="text-lg font-medium animate-pulse">Removing background...</p>
                                    <p className="text-sm text-muted-foreground">This uses a heavy AI model, please wait.</p>
                                </div>
                            ) : processedImage ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="space-y-6 text-center w-full"
                                >
                                    <div className="relative w-full min-h-[300px] flex items-center justify-center bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.E7x-kj0yvFqYkO_z52K2fAHaHa%26pid%3DApi&f=1&ipt=b8c8d234a4131df4a6136d4001c402170364964177d018b762503239e2621764&ipo=images')] bg-repeat rounded-lg overflow-hidden border border-border">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={processedImage}
                                            alt="Processed"
                                            className="max-w-full max-h-[400px] object-contain relative z-10"
                                        />
                                    </div>
                                    <div className="flex justify-center gap-4">
                                        <Button onClick={handleDownload} className="w-full max-w-xs bg-indigo-600 hover:bg-indigo-700">
                                            <Download className="mr-2 h-4 w-4" /> Download HD
                                        </Button>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="text-center space-y-4 opacity-50">
                                    <div className="w-20 h-20 bg-muted/50 rounded-full flex items-center justify-center mx-auto">
                                        <ImageIcon className="h-10 w-10 text-muted-foreground" />
                                    </div>
                                    <p className="text-lg font-medium">No Image Processed</p>
                                    <p className="text-sm text-muted-foreground">Upload an image to see the magic result here.</p>
                                </div>
                            )}

                            {/* Action Button (Centered if not processed) */}
                            {!loading && !processedImage && preview && (
                                <div className="mt-8">
                                    <Button size="lg" onClick={handleRemoveBackground} className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg transform hover:scale-105 transition-all">
                                        <Sparkles className="mr-2 h-5 w-5" />
                                        Remove Background
                                    </Button>
                                </div>
                            )}
                            {error && (
                                <div className="mt-4 p-4 text-sm text-red-500 bg-red-50 dark:bg-red-950/20 rounded-lg">
                                    {error}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </DashboardShell>
    );
}
