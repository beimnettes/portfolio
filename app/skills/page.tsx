import { Metadata } from "next";
import SkillCategory from "@/components/skills/SkillCategory";
import SkillCard from "@/components/skills/SkillCard";
import { skills } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Skills - Beimnet Tesfaye",
    description:
        "Technical skills and expertise in full-stack development, cloud technologies, databases, and tools.",
};

export default function SkillsPage() {
    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                {/* Page Header */}
                <div className="text-center mb-16">
                    <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                        Technical Skills
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise and tools I work
                        with
                    </p>
                </div>

                {/* Frontend Development */}
                <SkillCategory title="Frontend Development" delay={0}>
                    {skills.frontend.map((skill, index) => (
                        <SkillCard
                            key={skill.name}
                            name={skill.name}
                            icon={skill.icon}
                            index={index}
                        />
                    ))}
                </SkillCategory>

                {/* Backend Development */}
                <SkillCategory title="Backend Development" delay={0.1}>
                    {skills.backend.map((skill, index) => (
                        <SkillCard
                            key={skill.name}
                            name={skill.name}
                            icon={skill.icon}
                            index={index}
                        />
                    ))}
                </SkillCategory>

                {/* Databases */}
                <SkillCategory title="Databases" delay={0.2}>
                    {skills.databases.map((skill, index) => (
                        <SkillCard
                            key={skill.name}
                            name={skill.name}
                            icon={skill.icon}
                            index={index}
                        />
                    ))}
                </SkillCategory>

                {/* Cloud & DevOps */}
                <SkillCategory title="Cloud & DevOps" delay={0.3}>
                    {skills.cloud.map((skill, index) => (
                        <SkillCard
                            key={skill.name}
                            name={skill.name}
                            icon={skill.icon}
                            index={index}
                        />
                    ))}
                </SkillCategory>

                {/* Tools & Workflow */}
                <SkillCategory title="Tools & Workflow" delay={0.4}>
                    {skills.tools.map((skill, index) => (
                        <SkillCard
                            key={skill.name}
                            name={skill.name}
                            icon={skill.icon}
                            index={index}
                        />
                    ))}
                </SkillCategory>

                {/* Data & Analytics */}
                <SkillCategory title="Data & Analytics" delay={0.5}>
                    {skills.data.map((skill, index) => (
                        <SkillCard
                            key={skill.name}
                            name={skill.name}
                            icon={skill.icon}
                            index={index}
                        />
                    ))}
                </SkillCategory>
            </div>
        </div>
    );
}
