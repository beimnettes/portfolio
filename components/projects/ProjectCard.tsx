"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/constants";
import { getTechIcon } from "@/lib/tech-icons";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            <Card className="h-full glass hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                    {/* Project Image placeholder */}
                    <div className="w-full h-48 rounded-lg bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 mb-4 flex items-center justify-center overflow-hidden">
                        <div className="text-6xl opacity-50">📁</div>
                    </div>
                    <h3 className="font-playfair text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                </CardHeader>

                <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => {
                            const icon = getTechIcon(tech);
                            return (
                                <Badge
                                    key={tech}
                                    variant="secondary"
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
                </CardContent>

                <CardFooter className="flex gap-2">
                    {project.githubUrl && (
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="flex-1">
                                <Github className="mr-2 h-4 w-4" />
                                Code
                            </Button>
                        </Link>
                    )}
                    {project.liveUrl && (
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="default" size="sm" className="flex-1">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Demo
                            </Button>
                        </Link>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    );
}
