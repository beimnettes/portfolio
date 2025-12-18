export interface GitHubPR {
    id: number;
    title: string;
    html_url: string;
    state: "open" | "closed";
    created_at: string;
    repository_url: string;
    user: {
        login: string;
    };
    pull_request?: {
        merged_at: string | null;
    };
}

export interface ProcessedPR {
    id: number;
    title: string;
    url: string;
    status: "open" | "closed" | "merged";
    createdAt: string;
    repository: string;
    type: "created" | "reviewed";
}

export function processPR(pr: GitHubPR, type: "created" | "reviewed"): ProcessedPR {
    const repoName = pr.repository_url.split("/").slice(-2).join("/");
    const isMerged = pr.pull_request?.merged_at !== null && pr.pull_request?.merged_at !== undefined;
    const status = isMerged ? "merged" : pr.state;

    return {
        id: pr.id,
        title: pr.title,
        url: pr.html_url,
        status: status as "open" | "closed" | "merged",
        createdAt: pr.created_at,
        repository: repoName,
        type,
    };
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

export function getYearFromDate(dateString: string): number {
    return new Date(dateString).getFullYear();
}
