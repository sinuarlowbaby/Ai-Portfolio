"use client";
import { motion } from "framer-motion";

const principles = [
    {
        icon: "🔧",
        title: "Backend-First AI Design",
        description:
            "AI features are engineered as system components with proper APIs, error handling, and observability — not prototype scripts.",
        tag: "Architecture",
    },
    {
        icon: "🔍",
        title: "Retrieval Over Fine-Tuning",
        description:
            "When possible, RAG beats fine-tuning: cheaper, updatable, and explainable. I default to retrieval pipelines with vector search.",
        tag: "Strategy",
    },
    {
        icon: "🧩",
        title: "Modular LLM Pipelines",
        description:
            "Each pipeline stage (retrieval, reranking, generation, evaluation) is a swappable module — making systems testable and maintainable.",
        tag: "Engineering",
    },
];

const AIPhilosophySection = () => {
    return (
        <section className="py-24 px-6 max-w-6xl mx-auto">
            {/* Decorative line */}
            <div className="flex items-center gap-4 mb-14">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <span className="text-gradient">AI Architecture</span>{" "}
                        <span className="text-white">Philosophy</span>
                    </h2>
                </motion.div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {principles.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative group p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                    >
                        {/* Shimmer overlay on hover */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />

                        <div className="relative">
                            <div className="flex items-start justify-between mb-4">
                                <span className="text-3xl">{item.icon}</span>
                                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/25">
                                    {item.tag}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AIPhilosophySection;
