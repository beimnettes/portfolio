"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
    name: string;
    icon: string;
    index: number;
}

export default function SkillCard({ name, icon, index }: SkillCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="group"
        >
            <div className="glass rounded-lg p-4 h-full flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-all duration-300 hover:bg-primary/5">
                <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                    <img
                        src={icon}
                        alt={name}
                        className="h-8 w-8 object-contain"
                    />
                </div>
                <p className="text-sm font-semibold text-center group-hover:text-primary transition-colors">
                    {name}
                </p>
            </div>
        </motion.div>
    );
}
