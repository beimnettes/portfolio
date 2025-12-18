import { NextResponse } from "next/server";

const GITHUB_API = "https://api.github.com";
const USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "beimnettes";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Calculate date 2 years ago
const twoYearsAgo = new Date();
twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);
const dateFilter = twoYearsAgo.toISOString().split("T")[0];

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type") || "created"; // 'created' or 'reviewed'

    try {
        const headers: HeadersInit = {
            Accept: "application/vnd.github+json",
        };

        if (GITHUB_TOKEN) {
            headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
        }

        // Build query based on type
        let query = "";
        if (type === "created") {
            query = `author:${USERNAME}+type:pr+created:>=${dateFilter}`;
        } else if (type === "reviewed") {
            query = `reviewed-by:${USERNAME}+type:pr+created:>=${dateFilter}`;
        } else {
            return NextResponse.json({ error: "Invalid type parameter" }, { status: 400 });
        }

        const url = `${GITHUB_API}/search/issues?q=${query}&sort=created&order=desc&per_page=100`;

        const response = await fetch(url, {
            headers,
            next: { revalidate: 3600 }, // Cache for 1 hour
        });

        if (!response.ok) {
            throw new Error(`GitHub API responded with status: ${response.status}`);
        }

        const data = await response.json();

        return NextResponse.json({
            prs: data.items || [],
            total: data.total_count || 0,
        });
    } catch (error) {
        console.error("GitHub API error:", error);
        return NextResponse.json(
            { error: "Failed to fetch pull requests" },
            { status: 500 }
        );
    }
}
