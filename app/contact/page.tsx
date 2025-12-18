import { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contact - Beimnet Tesfaye",
    description:
        "Get in touch with Beimnet Tesfaye for collaboration, opportunities, or questions about full-stack development.",
};

const socialLinks = [
    {
        href: "https://github.com/beimnettes",
        label: "GitHub",
        icon: Github,
        username: "@beimnettes",
    },
    {
        href: "https://www.linkedin.com/in/beimnet-tesfaye-220418291/",
        label: "LinkedIn",
        icon: Linkedin,
        username: "Beimnet Tesfaye",
    },
    {
        href: "mailto:bemnetfeleke96@gmail.com",
        label: "Email",
        icon: Mail,
        username: "bemnetfeleke96@gmail.com",
    },
];

export default function ContactPage() {
    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        I'm always open to new opportunities, collaborations, and
                        conversations. Feel free to reach out!
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div>
                        <ContactForm />
                    </div>

                    {/* Social Links */}
                    <div className="space-y-6">
                        <div className="glass rounded-lg p-6">
                            <h3 className="font-playfair text-2xl font-bold mb-6">
                                Connect With Me
                            </h3>
                            <div className="space-y-4">
                                {socialLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group block"
                                    >
                                        <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                                            <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                                                <link.icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <div className="font-semibold group-hover:text-primary transition-colors">
                                                    {link.label}
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    {link.username}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="glass rounded-lg p-6">
                            <h3 className="font-playfair text-xl font-bold mb-4">
                                Looking For
                            </h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                                    Software Engineering Internships
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                                    Entry-Level Development Positions
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                                    Open Source Collaborations
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                                    Freelance Projects
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
