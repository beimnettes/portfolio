"use client";

import { useState, useEffect, useMemo } from "react";
import PRCard from "@/components/pull-requests/PRCard";
import PRFilter from "@/components/pull-requests/PRFilter";
import FeaturedContributionCard from "@/components/pull-requests/FeaturedContributionCard";
import { ProcessedPR, GitHubPR, processPR } from "@/lib/github";
import { featuredContributions } from "@/lib/constants";
import { Loader2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function PullRequestsPage() {
    const [prs, setPrs] = useState<ProcessedPR[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedType, setSelectedType] = useState<"all" | "created" | "reviewed">("all");
    const [selectedStatus, setSelectedStatus] = useState<"all" | "open" | "closed" | "merged">("all");

    useEffect(() => {
        async function fetchPRs() {
            try {
                setLoading(true);
                setError(null);

                // Fetch both created and reviewed PRs
                const [createdResponse, reviewedResponse] = await Promise.all([
                    fetch("/api/github?type=created"),
                    fetch("/api/github?type=reviewed"),
                ]);

                if (!createdResponse.ok || !reviewedResponse.ok) {
                    throw new Error("Failed to fetch pull requests");
                }

                const createdData = await createdResponse.json();
                const reviewedData = await reviewedResponse.json();

                const createdPRs = (createdData.prs || []).map((pr: GitHubPR) =>
                    processPR(pr, "created")
                );
                const reviewedPRs = (reviewedData.prs || []).map((pr: GitHubPR) =>
                    processPR(pr, "reviewed")
                );

                // Combine and sort by date
                const allPRs = [...createdPRs, ...reviewedPRs].sort(
                    (a, b) =>
                        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                );

                setPrs(allPRs);
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred");
            } finally {
                setLoading(false);
            }
        }

        fetchPRs();
    }, []);

    const filteredPRs = useMemo(() => {
        return prs.filter((pr) => {
            const matchesSearch =
                pr.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pr.repository.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesType = selectedType === "all" || pr.type === selectedType;
            const matchesStatus = selectedStatus === "all" || pr.status === selectedStatus;
            return matchesSearch && matchesType && matchesStatus;
        });
    }, [prs, searchQuery, selectedType, selectedStatus]);

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                        Pull Requests
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Open-source contributions and code reviews from the past 2 years
                    </p>
                </div>

                {/* Featured Contributions */}
                <div className="mb-16">
                    <h2 className="font-playfair text-3xl font-bold text-center mb-8">
                        Featured Contributions
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                        {featuredContributions.map((contribution, index) => (
                            <FeaturedContributionCard
                                key={contribution.id}
                                contribution={contribution}
                                index={index}
                            />
                        ))}
                    </div>
                    <Separator className="my-8" />
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex items-center justify-center py-20">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="text-center py-20">
                        <p className="text-destructive text-lg mb-4">Error: {error}</p>
                        <p className="text-muted-foreground">
                            Please try again later or check the console for more details.
                        </p>
                    </div>
                )}

                {/* Content */}
                {!loading && !error && (
                    <>
                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                            <div className="glass rounded-lg p-6 text-center">
                                <div className="text-3xl font-bold text-primary mb-2">{prs.length}</div>
                                <div className="text-sm text-muted-foreground">Total PRs</div>
                            </div>
                            <div className="glass rounded-lg p-6 text-center">
                                <div className="text-3xl font-bold text-primary mb-2">
                                    {prs.filter((pr) => pr.type === "created").length}
                                </div>
                                <div className="text-sm text-muted-foreground">Created</div>
                            </div>
                            <div className="glass rounded-lg p-6 text-center">
                                <div className="text-3xl font-bold text-primary mb-2">
                                    {prs.filter((pr) => pr.type === "reviewed").length}
                                </div>
                                <div className="text-sm text-muted-foreground">Reviewed</div>
                            </div>
                        </div>

                        {/* All Pull Requests Section */}
                        <h2 className="font-playfair text-3xl font-bold text-center mb-8">
                            All Pull Requests
                        </h2>

                        {/* Filters */}
                        <div className="mb-12">
                            <PRFilter
                                prs={prs}
                                searchQuery={searchQuery}
                                onSearchChange={setSearchQuery}
                                selectedType={selectedType}
                                onTypeChange={setSelectedType}
                                selectedStatus={selectedStatus}
                                onStatusChange={setSelectedStatus}
                            />
                        </div>

                        {/* PRs Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredPRs.map((pr, index) => (
                                <PRCard key={pr.id} pr={pr} index={index} />
                            ))}
                        </div>

                        {/* Empty State */}
                        {filteredPRs.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-muted-foreground text-lg">
                                    No pull requests found. Try adjusting your filters.
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
