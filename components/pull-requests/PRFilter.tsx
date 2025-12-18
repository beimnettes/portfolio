"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ProcessedPR } from "@/lib/github";

interface PRFilterProps {
    prs: ProcessedPR[];
    searchQuery: string;
    onSearchChange: (query: string) => void;
    selectedType: "all" | "created" | "reviewed";
    onTypeChange: (type: "all" | "created" | "reviewed") => void;
    selectedStatus: "all" | "open" | "closed" | "merged";
    onStatusChange: (status: "all" | "open" | "closed" | "merged") => void;
}

export default function PRFilter({
    searchQuery,
    onSearchChange,
    selectedType,
    onTypeChange,
    selectedStatus,
    onStatusChange,
}: PRFilterProps) {
    return (
        <div className="space-y-4">
            {/* Search */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder="Search pull requests..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="pl-10"
                />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
                {/* Type Filter */}
                <div className="flex-1">
                    <label className="text-sm font-semibold mb-2 block">Type</label>
                    <div className="flex gap-2">
                        <Button
                            variant={selectedType === "all" ? "default" : "outline"}
                            size="sm"
                            onClick={() => onTypeChange("all")}
                        >
                            All
                        </Button>
                        <Button
                            variant={selectedType === "created" ? "default" : "outline"}
                            size="sm"
                            onClick={() => onTypeChange("created")}
                        >
                            Created
                        </Button>
                        <Button
                            variant={selectedType === "reviewed" ? "default" : "outline"}
                            size="sm"
                            onClick={() => onTypeChange("reviewed")}
                        >
                            Reviewed
                        </Button>
                    </div>
                </div>

                {/* Status Filter */}
                <div className="flex-1">
                    <label className="text-sm font-semibold mb-2 block">Status</label>
                    <div className="flex gap-2 flex-wrap">
                        <Button
                            variant={selectedStatus === "all" ? "default" : "outline"}
                            size="sm"
                            onClick={() => onStatusChange("all")}
                        >
                            All
                        </Button>
                        <Button
                            variant={selectedStatus === "open" ? "default" : "outline"}
                            size="sm"
                            onClick={() => onStatusChange("open")}
                        >
                            Open
                        </Button>
                        <Button
                            variant={selectedStatus === "merged" ? "default" : "outline"}
                            size="sm"
                            onClick={() => onStatusChange("merged")}
                        >
                            Merged
                        </Button>
                        <Button
                            variant={selectedStatus === "closed" ? "default" : "outline"}
                            size="sm"
                            onClick={() => onStatusChange("closed")}
                        >
                            Closed
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
