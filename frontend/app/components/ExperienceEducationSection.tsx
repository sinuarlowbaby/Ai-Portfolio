"use client";

import { motion } from "framer-motion";

const experience = [
    {
        type: "Experience",
        year: "2024 – Present",
        title: "GenAI Application Developer",
        org: "Freelance / Self-directed",
        points: [
            "Built RAG chatbots using LangChain, FAISS, and Ollama with FastAPI backends",
            "Architected LLM pipelines with custom embedding + retrieval layers",
            "Deployed production APIs with Docker and REST standards",
        ],
    },
    {
        type: "Experience",
        year: "2023",
        title: "Backend Developer",
        org: "Personal Projects",
        points: [
            "Developed OneIDE — a multi-language online compiler with Django",
            "Implemented session-based auth and sandboxed code execution",
        ],
    },
];

const education = [
    {
        type: "Education",
        year: "2021 – 2025",
        title: "B.Tech Computer Science",
        org: "University (Kerala, India)",
        points: [
            "Core focus: algorithms, data structures, software engineering",
            "Final year project: AI-integrated portfolio system with FastAPI",
        ],
    },
];

const items = [...experience, ...education];

export default function ExperienceEducationSection() {
    return (
        <section className="py-24 px-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="text-gradient">Experience & Education</span>
                </h2>
                <p className="text-gray-400">The journey so far.</p>
            </motion.div>

            <div className="relative border-l border-white/10 pl-8 space-y-10">
                {items.map(({ type, year, title, org, points }, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Dot */}
                        <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${type === "Education" ? "bg-secondary/15 text-secondary" : "bg-primary/15 text-primary"}`}>
                            {type} · {year}
                        </span>

                        <h3 className="text-lg font-bold mt-2">{title}</h3>
                        <p className="text-gray-400 text-sm mb-3">{org}</p>

                        <ul className="space-y-1.5">
                            {points.map((pt, j) => (
                                <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                                    <span className="text-primary mt-0.5 shrink-0">›</span>
                                    {pt}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
