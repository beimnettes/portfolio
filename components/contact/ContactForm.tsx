"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Send, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setStatus("loading");

        try {
            // Call the API endpoint to send the email
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                // Handle API errors
                throw new Error(data.error || "Failed to send message");
            }

            // Success!
            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            console.error("Failed to send message:", error);
            setStatus("error");

            // Reset error message after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error for this field
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    return (
        <Card className="glass">
            <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                    <Mail className="h-6 w-6 text-primary" />
                    <h3 className="font-playfair text-2xl font-bold">Send a Message</h3>
                </div>

                {status === "success" ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-12"
                    >
                        <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                        <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                        <p className="text-muted-foreground text-center">
                            Thank you for reaching out. I'll get back to you soon.
                        </p>
                    </motion.div>
                ) : status === "error" ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-12"
                    >
                        <div className="h-16 w-16 text-destructive mb-4 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-16 w-16"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">Failed to Send</h4>
                        <p className="text-muted-foreground text-center">
                            There was an error sending your message. Please try again or email me directly.
                        </p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
                        <div>
                            <Input
                                type="text"
                                name="name"
                                placeholder="Your Name *"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? "border-destructive" : ""}
                            />
                            {errors.name && (
                                <p className="text-sm text-destructive mt-1">{errors.name}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <Input
                                type="email"
                                name="email"
                                placeholder="Your Email *"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? "border-destructive" : ""}
                            />
                            {errors.email && (
                                <p className="text-sm text-destructive mt-1">{errors.email}</p>
                            )}
                        </div>

                        {/* Subject */}
                        <div>
                            <Input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <Textarea
                                name="message"
                                placeholder="Your Message *"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                className={errors.message ? "border-destructive" : ""}
                            />
                            {errors.message && (
                                <p className="text-sm text-destructive mt-1">{errors.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={status === "loading"}
                        >
                            {status === "loading" ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="mr-2 h-5 w-5" />
                                    Send Message
                                </>
                            )}
                        </Button>
                    </form>
                )}
            </CardContent>
        </Card>
    );
}
