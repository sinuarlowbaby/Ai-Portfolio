"use client";

import { motion } from "framer-motion";
import { Icons } from "./ui/Icons";

const highlights = [
    { icon: Icons.Brain, color: "text-primary", bg: "bg-primary/10", label: "GenAI Systems", desc: "Building LLM pipelines, RAG architectures, and production AI backends from first principles." },
    { icon: Icons.Server, color: "text-secondary", bg: "bg-secondary/10", label: "Backend Engineering", desc: "FastAPI & Django services with clean architecture, auth systems, and REST APIs." },
    { icon: Icons.Zap, color: "text-accent", bg: "bg-accent/10", label: "Full-Stack", desc: "React / Next.js frontends integrated with AI-powered Python backends." },
];

export default function AboutSection() {
    return (
        <section className="py-24 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="text-gradient">About Me</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    I'm a GenAI Application Developer focused on building systems where AI isn't an afterthought — it's the architecture.
                    From embedding pipelines to production FastAPI services, I work end-to-end.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {highlights.map(({ icon: Icon, color, bg, label, desc }, i) => (
                    <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="layer-card p-6"
                    >
                        <div className={`inline-flex p-3 rounded-xl ${bg} mb-4`}>
                            <Icon className={`w-6 h-6 ${color}`} />
                        </div>
                        <h3 className={`font-bold text-sm uppercase tracking-wider ${color} mb-2`}>{label}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
