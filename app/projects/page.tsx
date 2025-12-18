"use client";

import { useState, useMemo } from "react";
import { Metadata } from "next";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectFilter from "@/components/projects/ProjectFilter";
import { projects, categories } from "@/lib/constants";

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchesCategory =
                selectedCategory === "All" || project.category === selectedCategory;
            const matchesSearch =
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.techStack.some((tech) =>
                    tech.toLowerCase().includes(searchQuery.toLowerCase())
                );
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                        My Projects
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A collection of projects showcasing my skills in full-stack
                        development, cloud infrastructure, and data analysis
                    </p>
                </div>

                {/* Filters */}
                <div className="mb-12">
                    <ProjectFilter
                        categories={categories}
                        selectedCategory={selectedCategory}
                        searchQuery={searchQuery}
                        onCategoryChange={setSelectedCategory}
                        onSearchChange={setSearchQuery}
                    />
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground text-lg">
                            No projects found. Try adjusting your filters.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
