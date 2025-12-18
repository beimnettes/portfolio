"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, GitPullRequest } from "lucide-react";
import { FeaturedContribution } from "@/lib/constants";
import { getTechIcon } from "@/lib/tech-icons";
import Link from "next/link";

interface FeaturedContributionCardProps {
    contribution: FeaturedContribution;
    index: number;
}

export default function FeaturedContributionCard({
    contribution,
    index,
}: FeaturedContributionCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
        >
            <Card className="glass hover:shadow-xl transition-all duration-300 h-full border-primary/20">
                <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-2">
                            <Star className="h-5 w-5 text-primary fill-primary" />
                            <Badge
                                variant={
                                    contribution.type === "contribution"
                                        ? "default"
                                        : "secondary"
                                }
                            >
                                {contribution.type === "contribution"
                                    ? "Contributed"
                                    : "Reviewed"}
                            </Badge>
                        </div>
                    </div>

                    <h3 className="font-playfair text-xl font-bold mb-2">
                        {contribution.title}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <GitPullRequest className="h-4 w-4" />
                        <span className="font-mono">{contribution.repository}</span>
                    </div>
                </CardHeader>

                <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {contribution.description}
                    </p>

                    {/* Highlights */}
                    <div>
                        <h4 className="text-sm font-semibold mb-2">Highlights:</h4>
                        <ul className="space-y-1">
                            {contribution.highlights.map((highlight, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                        {contribution.techStack.map((tech) => {
                            const icon = getTechIcon(tech);
                            return (
                                <Badge
                                    key={tech}
                                    variant="outline"
                                    className="text-xs flex items-center gap-1.5"
                                >
                                    {icon && (
                                        <img
                                            src={icon}
                                            alt={tech}
                                            className="h-3.5 w-3.5 object-contain"
                                        />
                                    )}
                                    {tech}
                                </Badge>
                            );
                        })}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2 pt-2">
                        <Link
                            href={contribution.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                        >
                            <button className="w-full text-sm px-3 py-2 rounded-md bg-muted hover:bg-muted/80 transition-colors flex items-center justify-center gap-2">
                                <ExternalLink className="h-4 w-4" />
                                Repository
                            </button>
                        </Link>
                        {contribution.prUrl && (
                            <Link
                                href={contribution.prUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1"
                            >
                                <button className="w-full text-sm px-3 py-2 rounded-md bg-primary/10 hover:bg-primary/20 text-primary transition-colors flex items-center justify-center gap-2">
                                    <GitPullRequest className="h-4 w-4" />
                                    View PR
                                </button>
                            </Link>
                        )}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
