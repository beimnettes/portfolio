"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Code } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Hero3D from "@/components/home/Hero3D";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden gradient-pink-lavender">
        {/* 3D Background */}
        <Suspense fallback={null}>
          <Hero3D />
        </Suspense>

        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-playfair text-5xl md:text-7xl font-bold mb-4 text-foreground"
            >
              Beimnet Tesfaye
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/90"
            >
              Full-Stack Developer
            </motion.h2>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/projects">
                <Button size="lg" className="group">
                  <Code className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  View Projects
                </Button>
              </Link>
              <Link href="/pull-requests">
                <Button size="lg" variant="secondary" className="group">
                  View Pull Requests
                </Button>
              </Link>
              <a href="/resume.pdf" download>
                <Button size="lg" variant="outline" className="group">
                  <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Welcome to My Portfolio
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm a Full-Stack Developer specializing in React, Next.js, Node.js,
              NestJS, and AWS. Over the past two years, I've built a strong
              foundation through hands-on projects, open-source contributions,
              and real-world development experience.
            </p>
            <Link href="/about">
              <Button variant="default">Learn More About Me</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
