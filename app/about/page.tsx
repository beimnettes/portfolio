import Biography from "@/components/about/Biography";
import Timeline from "@/components/about/Timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me - Beimnet Tesfaye",
    description:
        "Learn about Beimnet Tesfaye's journey as a Full-Stack Developer, including education, experience, and technical growth.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                {/* Page Header */}
                <div className="text-center mb-16">
                    <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                        My Journey
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        My journey as a developer, shaped by resilience and driven by
                        passion for technology
                    </p>
                </div>

                {/* Biography Section */}
                <div className="mb-20">
                    <Biography />
                </div>

                {/* Timeline Section */}
                <div className="mb-12">
                    <h2 className="font-playfair text-3xl font-bold text-center mb-12">
                        Timeline
                    </h2>
                    <Timeline />
                </div>
            </div>
        </div>
    );
}
