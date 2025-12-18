"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Biography() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl p-8 md:p-12"
        >
            <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Profile Photo */}
                <div className="md:col-span-1">
                    <div className="relative aspect-square rounded-xl overflow-hidden border-4 border-primary/30 shadow-xl">
                        <Image
                            src="/profile.jpg"
                            alt="Beimnet Tesfaye"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Bio text */}
                <div className="md:col-span-2 space-y-4">
                    <h2 className="font-playfair text-3xl font-bold mb-4">About Me</h2>

                    <p className="text-muted-foreground leading-relaxed">
                        I'm Beimnet Tesfaye, a Full-Stack Developer
                        specializing in React, Next.js, Expo, Node.js, NestJS,
                        TypeScript, PostgreSQL, and AWS. Over the past two years, I've built
                        a strong foundation in software engineering through hands-on
                        projects, open-source participation, team collaborations, and
                        real-world development experience.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                        I specialize in full-stack development using React, Next.js, Expo,
                        Node.js, NestJS, TypeScript, PostgreSQL, and AWS. My journey into
                        tech is shaped by resilience, personal growth, and a commitment to
                        building a better future.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                        I love solving problems, creating meaningful applications, and
                        continuously learning new technologies. My goal is to grow as a
                        software engineer and contribute to impactful projects within the
                        tech industry.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-4">
                        <div className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                            Full-Stack Developer
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
