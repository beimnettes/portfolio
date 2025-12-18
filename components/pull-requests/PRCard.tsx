"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GitPullRequest } from "lucide-react";
import { ProcessedPR, formatDate } from "@/lib/github";
import Link from "next/link";

interface PRCardProps {
    pr: ProcessedPR;
    index: number;
}

export default function PRCard({ pr, index }: PRCardProps) {
    const statusColors = {
        open: "bg-green-500/20 text-green-700 dark:text-green-300",
        closed: "bg-red-500/20 text-red-700 dark:text-red-300",
        merged: "bg-purple-500/20 text-purple-700 dark:text-purple-300",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
        >
            <Link href={pr.url} target="_blank" rel="noopener noreferrer">
                <Card className="glass hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                    <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <GitPullRequest className="h-5 w-5 text-primary" />
                                    <Badge className={statusColors[pr.status]}>
                                        {pr.status.toUpperCase()}
                                    </Badge>
                                    <Badge variant="outline">{pr.type}</Badge>
                                </div>
                                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
                                    {pr.title}
                                </h3>
                            </div>
                            <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                        </div>
                    </CardHeader>

                    <CardContent>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <p>
                                <span className="font-semibold">Repository:</span> {pr.repository}
                            </p>
                            <p>
                                <span className="font-semibold">Created:</span> {formatDate(pr.createdAt)}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </motion.div>
    );
}
