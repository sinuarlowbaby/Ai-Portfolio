"use client";
import { motion } from "framer-motion";

const highlights = [
    {
        icon: "🧠",
        title: "GenAI Focus",
        description: "LLM pipelines, RAG architectures, and intelligent retrieval systems built for production.",
        color: "from-primary/20 to-primary/5",
        border: "border-primary/20",
    },
    {
        icon: "⚙️",
        title: "Backend Engineering",
        description: "FastAPI-first design with async patterns, clean APIs, and scalable system architecture.",
        color: "from-secondary/20 to-secondary/5",
        border: "border-secondary/20",
    },
    {
        icon: "🏗️",
        title: "AI System Design",
        description: "Designing systems where AI is a core component — not a feature bolted on top.",
        color: "from-accent/20 to-accent/5",
        border: "border-accent/20",
    },
];

const AboutSection = () => {
    return (
        <section className="relative py-24 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gradient">About Me</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                        I design{" "}
                        <span className="text-white font-semibold">backend-first GenAI applications</span>{" "}
                        where AI is a system component, not a feature. While others call APIs, I engineer the{" "}
                        <span className="text-primary font-semibold">RAG pipelines</span> and{" "}
                        <span className="text-accent font-semibold">agentic workflows</span> that power them.
                    </p>
                </div>

                {/* 3 Highlight Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className={`highlight-card bg-gradient-to-br ${item.color} border ${item.border}`}
                        >
                            <div className="text-3xl mb-3">{item.icon}</div>
                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default AboutSection;

