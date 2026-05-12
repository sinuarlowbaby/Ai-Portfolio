"use client";

import { motion } from "framer-motion";
import { Icons } from "./ui/Icons";

const stats = [
    { value: "5+", label: "AI Projects Built" },
    { value: "3+", label: "Years Coding" },
    { value: "10+", label: "Technologies" },
    { value: "MCA", label: "AI Specialization" },
];

const traits = [
    {
        icon: Icons.Brain,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20",
        label: "GenAI Developer",
        desc: "Building production-grade RAG pipelines, agentic AI systems with LangGraph, and LLM-powered APIs using FastAPI and LangChain.",
    },
    {
        icon: Icons.Server,
        color: "text-secondary",
        bg: "bg-secondary/10",
        border: "border-secondary/20",
        label: "Backend Engineer",
        desc: "Designing async REST APIs with FastAPI, Django MVT platforms, PostgreSQL/SQLite schemas, and OAuth + JWT authentication systems.",
    },
    {
        icon: Icons.Zap,
        color: "text-accent",
        bg: "bg-accent/10",
        border: "border-accent/20",
        label: "AI Systems Thinker",
        desc: "Architecting retrieval systems with Qdrant, ChromaDB, hybrid BM25+MMR search, cross-encoder reranking, and semantic caching.",
    },
];

const timeline = [
    { year: "2025 → Now", label: "MCA — AI Specialization", org: "SRM Institute of Science & Technology" },
    { year: "2025", label: "AICTE GenAI Internship", org: "Generative AI Developer Track" },
    { year: "2022 – 2025", label: "BCA — Computer Applications", org: "CM College of Arts and Science" },
];

export default function AboutSection() {
    return (
        <section className="py-24 px-6 max-w-6xl mx-auto">
            {/* Section header */}
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
                    A developer who treats AI as the core architecture — not a plugin.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* ── Left: Bio + stats ── */}
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Bio card */}
                    <div className="layer-card p-7 mb-6">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                <Icons.Brain className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-bold text-white">Sinu Arlow Baby</p>
                                <p className="text-xs text-gray-400">GenAI Application Developer</p>
                            </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                            I&apos;m a <span className="text-primary font-semibold">GenAI Application Developer</span> pursuing my MCA
                            with an AI specialization at SRM Institute. I build end-to-end intelligent systems — from
                            multi-stage RAG pipelines and agentic AI workflows to full-stack web platforms deployed in production.
                        </p>
                        <p className="text-gray-400 leading-relaxed text-sm mb-5">
                            My focus is on systems where AI is the architecture — not bolted on. I&apos;ve built a
                            5-stage retrieval chatbot with cross-encoder reranking, a{" "}
                            <span className="text-accent font-semibold">LangGraph agentic loop</span> with tool-use and
                            self-evaluation, an{" "}
                            <span className="text-secondary font-semibold">AI career coaching platform</span> with mock
                            interviews, and a full-stack online IDE deployed to production.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {["FastAPI", "LangChain", "LangGraph", "Qdrant", "ChromaDB", "GPT-4o", "Python"].map((t) => (
                                <span key={t} className="tech-badge">{t}</span>
                            ))}
                        </div>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-4 gap-3">
                        {stats.map(({ value, label }) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="layer-card p-4 text-center"
                            >
                                <p className="text-2xl font-extrabold text-gradient mb-1">{value}</p>
                                <p className="text-gray-500 text-xs leading-tight">{label}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mini timeline */}
                    <div className="mt-6 layer-card p-5">
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Journey</p>
                        <div className="space-y-4">
                            {timeline.map(({ year, label, org }, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -12 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-xs text-primary font-semibold mb-0.5">{year}</p>
                                        <p className="text-sm text-white font-medium">{label}</p>
                                        <p className="text-xs text-gray-500">{org}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* ── Right: Trait cards ── */}
                <div className="space-y-5">
                    {traits.map(({ icon: Icon, color, bg, border, label, desc }, i) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12 }}
                            className={`layer-card p-6 border ${border} hover:scale-[1.01] transition-transform`}
                        >
                            <div className="flex items-start gap-4">
                                <div className={`inline-flex p-3 rounded-xl ${bg} flex-shrink-0`}>
                                    <Icon className={`w-6 h-6 ${color}`} />
                                </div>
                                <div>
                                    <h3 className={`font-bold text-sm uppercase tracking-wider ${color} mb-2`}>{label}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Resume download card */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="layer-card p-6 border border-primary/20 bg-primary/5"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-semibold text-white mb-1">View Full Resume</p>
                                <p className="text-xs text-gray-400">GenAI Developer · FastAPI · LLM Systems</p>
                            </div>
                            <a
                                href="/SINU BABY AI-ENGINNER Professional Resume LaTex.pdf"
                                download="Sinu_Arlow_Baby_Resume.pdf"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all"
                            >
                                <Icons.Download className="w-4 h-4" />
                                Download
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
