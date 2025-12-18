"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SkillCategoryProps {
    title: string;
    children: ReactNode;
    delay?: number;
}

export default function SkillCategory({
    title,
    children,
    delay = 0,
}: SkillCategoryProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6 }}
            className="mb-12"
        >
            <h3 className="font-playfair text-2xl font-bold mb-6 text-center">
                {title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {children}
            </div>
        </motion.div>
    );
}
