"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code, Database, Cloud, GitPullRequest, Award, Briefcase } from "lucide-react";

const timelineData = [
    {
        year: "August 2022",
        title: "Started Application Development Program",
        subtitle: "North Seattle College",
        description:
            "Learned programming fundamentals and problem-solving. First exposure to Java and structured logic. Built foundational coding and debugging skills.",
        icon: GraduationCap,
        type: "education",
    },
    {
        year: "March 2023",
        title: "Java Programming & Object-Oriented Design",
        subtitle: "Object-Oriented Programming",
        description:
            "Built Java console applications. Applied encapsulation, inheritance, polymorphism, abstraction. Debugged logic and syntax issues independently. Strong understanding of OOP and structured programming.",
        icon: Code,
        type: "experience",
    },
    {
        year: "October 2023",
        title: "Web Development with JavaScript",
        subtitle: "Frontend Development",
        description:
            "Built interactive browser-based projects. Used DOM manipulation, events, and validation. Transitioned into frontend development.",
        icon: Code,
        type: "experience",
    },
    {
        year: "February 2024",
        title: "Data Analysis & Visualization Projects",
        subtitle: "Python & Data Science",
        description:
            "Worked with Python, Pandas, Matplotlib, Jupyter. Analyzed real datasets and produced reports. Learned data-driven thinking and visualization.",
        icon: Database,
        type: "experience",
    },
    {
        year: "June 2024",
        title: "Associate Degree Completed",
        subtitle: "North Seattle College",
        description:
            "Successfully completed Associate Degree in Application Development. Demonstrated consistent academic progress and technical growth. Established a strong base for advanced study.",
        icon: Award,
        type: "milestone",
    },
    {
        year: "July 2024",
        title: "AWS Cloud & Full-Stack Projects",
        subtitle: "Cloud Infrastructure",
        description:
            "Built and deployed cloud-based applications. Used EC2, RDS, S3, Lambda, Secrets Manager. Designed secure and scalable architectures. Practical cloud and deployment skills.",
        icon: Cloud,
        type: "experience",
    },
    {
        year: "September 2024",
        title: "NSC Practicum – Team-Based Software Development",
        subtitle: "Professional Collaboration",
        description:
            "Contributed to real team projects. Created and reviewed pull requests. Used GitHub, Notion, Slack, Figma. Participated in standups and sprint updates. Learned professional collaboration and workflows.",
        icon: Briefcase,
        type: "experience",
    },
    {
        year: "June–July 2025",
        title: "Open Source Contributor – TensorZero",
        subtitle: "Open Source Development",
        description:
            "Contributed Go tests for OpenAI-compatible endpoints. Implemented tensorzero::tags and episode_id handling. Followed existing Python and Node test patterns. Collaborated with maintainers. Real open-source and backend testing experience.",
        icon: GitPullRequest,
        type: "milestone",
    },
    {
        year: "Present",
        title: "Bachelor's Degree in Application Development",
        subtitle: "North Seattle College (In Progress)",
        description:
            "Continuing advanced coursework in application development. Focus on full-stack, cloud, and professional projects. Expected Completion: April 2026. Preparing for full-time software engineering roles.",
        icon: GraduationCap,
        type: "education",
    },
];

export default function Timeline() {
    return (
        <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />

            <div className="space-y-12">
                {timelineData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            } flex-row`}
                    >
                        {/* Timeline dot */}
                        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                            <div className="w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center">
                                <item.icon className="w-4 h-4 text-primary-foreground" />
                            </div>
                        </div>

                        {/* Content card */}
                        <div
                            className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                                }`}
                        >
                            <div className="glass rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                                <div className="text-sm font-semibold text-primary mb-2">
                                    {item.year}
                                </div>
                                <h3 className="font-playfair text-xl font-bold mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    {item.subtitle}
                                </p>
                                <p className="text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
