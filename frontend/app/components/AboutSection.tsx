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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
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

                {/* Bottom "Why Me" card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl"
                >
                    <div className="absolute -inset-px bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded-2xl opacity-50 blur-sm" />
                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-3">Why Me?</h3>
                            <p className="text-gray-400 leading-relaxed">
                                I bridge robust backend engineering with cutting-edge AI research. Currently pursuing{" "}
                                <span className="text-white font-medium">MCA in Generative AI</span> at SRM Institute,
                                building systems that are production-ready from day one.
                            </p>
                            <p className="text-gray-400 mt-3 italic border-l-4 border-primary pl-4 text-sm">
                                "Building systems where AI is a core component, not just an add-on."
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: "3+", label: "Years Coding", color: "text-primary" },
                                { value: "10+", label: "Projects Built", color: "text-accent" },
                                { value: "GenAI", label: "Specialization", color: "text-secondary" },
                                { value: "100%", label: "Commitment", color: "text-green-400" },
                            ].map((stat, i) => (
                                <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5 text-center hover:bg-white/10 transition-colors">
                                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                                    <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutSection;
