import { Metadata } from "next";
import { Download, Mail, MapPin, GraduationCap, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Resume - Beimnet Tesfaye",
    description:
        "Download Beimnet Tesfaye's resume showcasing education, skills, projects, and experience in full-stack development.",
};

export default function ResumePage() {
    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                {/* Page Header with Download Button */}
                <div className="text-center mb-12">
                    <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                        Resume
                    </h1>
                    <p className="text-lg text-muted-foreground mb-6">
                        A comprehensive overview of my education, skills, and projects
                    </p>
                    <a href="/resume.pdf" download>
                        <Button size="lg">
                            <Download className="mr-2 h-5 w-5" />
                            Download PDF
                        </Button>
                    </a>
                </div>

                {/* Resume Content */}
                <div className="max-w-4xl mx-auto glass rounded-2xl p-8 md:p-12">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="font-playfair text-3xl font-bold mb-4">
                            Beimnet Tesfaye
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
                            <div className="flex items-center gap-2">
                                < Mail className="h-4 w-4" />
                                <span>bemnetfeleke96@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>Seattle, WA</span>
                            </div>
                        </div>
                    </div>

                    <Separator className="my-8" />

                    {/* Education */}
                    <section className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                            <GraduationCap className="h-6 w-6 text-primary" />
                            <h3 className="font-playfair text-2xl font-bold">Education</h3>
                        </div>
                        <div className="ml-8">
                            <h4 className="font-semibold text-lg">
                                Bachelor of Applied Science in Application Development
                            </h4>
                            <p className="text-muted-foreground">North Seattle College</p>
                            <p className="text-sm text-muted-foreground">2023 - Present</p>
                            <p className="mt-2 text-sm">
                                Focusing on full-stack web development, cloud technologies,
                                database management, and software engineering principles.
                            </p>
                        </div>
                    </section>

                    <Separator className="my-8" />

                    {/* Technical Skills */}
                    <section className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                            <Code2 className="h-6 w-6 text-primary" />
                            <h3 className="font-playfair text-2xl font-bold">
                                Technical Skills
                            </h3>
                        </div>
                        <div className="ml-8 space-y-3">
                            <div>
                                <span className="font-semibold">Frontend:</span> React, Next.js,
                                React Native (Expo), Tailwind CSS, TypeScript, JavaScript,
                                Framer Motion
                            </div>
                            <div>
                                <span className="font-semibold">Backend:</span> Node.js,
                                Express, NestJS, TypeScript, REST APIs, Java
                            </div>
                            <div>
                                <span className="font-semibold">Databases:</span> PostgreSQL,
                                MySQL, Prisma ORM, TypeORM
                            </div>
                            <div>
                                <span className="font-semibold">Cloud & DevOps:</span> AWS
                                (EC2, S3, RDS, Lambda, VPC, CloudFormation, CloudFront), Docker
                            </div>
                            <div>
                                <span className="font-semibold">Tools:</span> Git, GitHub,
                                VSCode, Postman, npm/yarn
                            </div>
                            <div>
                                <span className="font-semibold">Data:</span> Python, Pandas,
                                Matplotlib, Data Analysis
                            </div>
                        </div>
                    </section>

                    <Separator className="my-8" />

                    {/* Projects */}
                    <section className="mb-8">
                        <h3 className="font-playfair text-2xl font-bold mb-4">
                            Notable Projects
                        </h3>
                        <div className="ml-8 space-y-6">
                            <div>
                                <h4 className="font-semibold text-lg">
                                    E-Commerce Platform
                                </h4>
                                <p className="text-sm text-muted-foreground mb-2">
                                    Next.js, React, Node.js, PostgreSQL, Stripe
                                </p>
                                <p className="text-sm">
                                    Full-stack e-commerce application with user authentication,
                                    product catalog, shopping cart, and payment integration.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">
                                    Task Management Application
                                </h4>
                                <p className="text-sm text-muted-foreground mb-2">
                                    React, NestJS, TypeScript, PostgreSQL, Prisma
                                </p>
                                <p className="text-sm">
                                    Collaborative task management with real-time updates, team
                                    workspaces, and project tracking.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">
                                    AWS Infrastructure Setup
                                </h4>
                                <p className="text-sm text-muted-foreground mb-2">
                                    AWS CloudFormation, EC2, RDS, S3, Lambda, VPC
                                </p>
                                <p className="text-sm">
                                    Deployed scalable cloud infrastructure using AWS services and
                                    infrastructure as code practices.
                                </p>
                            </div>
                        </div>
                    </section>

                    <Separator className="my-8" />

                    {/* Summary */}
                    <section>
                        <h3 className="font-playfair text-2xl font-bold mb-4">
                            Professional Summary
                        </h3>
                        <div className="ml-8">
                            <p className="text-sm leading-relaxed mb-3">
                                Full-Stack Developer with 2+ years of
                                hands-on experience in modern web development. Proficient in
                                React, Next.js, Node.js, NestJS, and AWS with a strong foundation
                                in software engineering principles.
                            </p>
                            <p className="text-sm leading-relaxed">
                                Passionate about creating meaningful applications, solving
                                complex problems, and contributing to impactful projects.
                                Actively seeking software engineering internship and entry-level
                                opportunities.
                            </p>
                        </div>
                    </section>
                </div>

                {/* Print Note */}
                <div className="text-center mt-8 text-sm text-muted-foreground">
                    <p>For the best experience, download the PDF version above</p>
                </div>
            </div>
        </div>
    );
}
