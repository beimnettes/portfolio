"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface ProjectFilterProps {
    categories: string[];
    selectedCategory: string;
    searchQuery: string;
    onCategoryChange: (category: string) => void;
    onSearchChange: (query: string) => void;
}

export default function ProjectFilter({
    categories,
    selectedCategory,
    searchQuery,
    onCategoryChange,
    onSearchChange,
}: ProjectFilterProps) {
    return (
        <div className="space-y-4">
            {/* Search */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="pl-10"
                />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => onCategoryChange(category)}
                        className="transition-all"
                    >
                        {category}
                    </Button>
                ))}
            </div>
        </div>
    );
}
