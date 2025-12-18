import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
    {
        href: "https://github.com/beimnettes",
        label: "GitHub",
        icon: Github,
    },
    {
        href: "https://www.linkedin.com/in/beimnet-tesfaye-220418291/",
        label: "LinkedIn",
        icon: Linkedin,
    },
    {
        href: "mailto:bemnetfeleke96@gmail.com",
        label: "Email",
        icon: Mail,
    },
];

const quickLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
];

export default function Footer() {
    return (
        <footer className="w-full border-t border-border/40 bg-background/50 backdrop-blur-sm mt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="font-playfair text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-2">
                            Beimnet Tesfaye
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            Full-Stack Developer
                        </p>
                        <p className="text-muted-foreground text-sm mt-2">
                            Building meaningful applications with resilience and creativity.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group"
                                    aria-label={link.label}
                                >
                                    <div className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                                        <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <Separator className="mb-6" />

                {/* Copyright */}
                <div className="text-center text-sm text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} Beimnet Tesfaye. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
