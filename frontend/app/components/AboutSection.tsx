"use client";

import { motion } from "framer-motion";
import ResumeDownloadButton from "./ResumeDownloadButton";
import { fadeUp as fade } from "@/app/lib/motion";

const traits = [
    {
        label: "LLM & RAG Engineering",
        desc: "Multi-stage retrieval pipelines — multi-query expansion, hybrid BM25+MMR search, cross-encoder reranking, semantic caching with Qdrant and ChromaDB.",
    },
    {
        label: "Agentic AI Systems",
        desc: "LangGraph StateGraph agents with Plan-Execute-Evaluate loops, tool-use (Tavily web search), Pydantic-validated structured outputs, and conditional graph routing.",
    },
    {
        label: "Backend & API Design",
        desc: "Async FastAPI and Django backends — SQLAlchemy ORM, OAuth 2.0 + JWT, Server-Sent Events streaming, Docker Compose, Alembic migrations.",
    },
];

const timeline = [
    { year: "2025 → Now", label: "MCA — AI Specialization",         org: "SRM Institute of Science & Technology", current: true  },
    { year: "2025",       label: "GenAI Developer",                  org: "Generative AI Developer Track",         current: false },
    { year: "2025",       label: "AICTE GenAI Internship",           org: "AICTE — Government of India",           current: false },
    { year: "2024",       label: "Full Stack Python Developer",       org: "Internship — Python & Django",          current: false },
    { year: "2022 – 2025",label: "BCA — Computer Applications",      org: "CM College of Arts and Science",        current: false },
];

const stats = [
    { value: "5+",  label: "AI Projects"      },
    { value: "10+", label: "Technologies"      },
    { value: "MCA", label: "AI Specialization" },
];



export default function AboutSection() {
    return (
        <section className="py-28 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">

            {/* Header */}
            <motion.div {...fade()} className="mb-16">
                <p className="section-label">About</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
                    I build AI systems from the<br />
                    <span className="text-accent-word">ground up.</span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* ── Left: bio + timeline + stats ── */}
                <div className="space-y-6">

                    {/* Bio */}
                    <motion.div {...fade(0.05)} className="layer-card p-6">
                        <p className="text-white font-semibold mb-1">Sinu Arlow Baby</p>
                        <p className="text-[#475569] text-xs mb-5">AI Engineer · LLM · RAG · Agentic Systems</p>

                        <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                            I design and ship end-to-end AI systems — production RAG pipelines,
                            LangGraph agentic workflows, and full-stack AI-powered platforms.
                            Pursuing my MCA with AI specialization at SRM Institute.
                        </p>
                        <p className="text-[#94A3B8] text-sm leading-relaxed">
                            My focus: systems where AI is the core architecture, not an add-on.
                            5-stage RAG chatbot · LangGraph Plan-Execute-Evaluate agent ·
                            AI career coaching platform with ATS scoring · multi-language online IDE.
                        </p>

                        <div className="flex flex-wrap gap-1.5 mt-5">
                            {["FastAPI", "LangChain", "LangGraph", "Qdrant", "GPT-4o", "Python"].map(t => (
                                <span key={t} className="tech-badge">{t}</span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div {...fade(0.1)} className="grid grid-cols-3 gap-3">
                        {stats.map(({ value, label }) => (
                            <div key={label} className="layer-card p-4 text-center">
                                <p className="text-[#67E8F9] font-bold text-xl mb-0.5">{value}</p>
                                <p className="text-[#475569] text-xs">{label}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Timeline */}
                    <motion.div {...fade(0.15)} className="layer-card p-5">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#475569] mb-4">Journey</p>
                        <div className="space-y-4">
                            {timeline.map(({ year, label, org, current }, i) => (
                                <div key={i} className="flex gap-3">
                                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${current ? "bg-[#67E8F9] ring-2 ring-[#67E8F9]/20" : "bg-[#334155]"}`} />
                                    <div>
                                        <div className="flex items-center gap-2 mb-0.5">
                                            <p className={`text-xs font-semibold ${current ? "text-[#67E8F9]" : "text-[#475569]"}`}>{year}</p>
                                            {current && (
                                                <span className="text-[9px] font-bold uppercase tracking-wider text-[#67E8F9] bg-[rgba(103,232,249,0.08)] border border-[rgba(103,232,249,0.18)] px-1.5 py-0.5 rounded-full leading-none">
                                                    Now
                                                </span>
                                            )}
                                        </div>
                                        <p className={`text-sm font-medium ${current ? "text-white" : "text-[#94A3B8]"}`}>{label}</p>
                                        <p className="text-[#475569] text-xs">{org}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* ── Right: trait list + resume ── */}
                <div className="space-y-4">
                    {traits.map(({ label, desc }, i) => (
                        <motion.div key={label} {...fade(0.06 * (i + 1))} className="layer-card p-5">
                            <p className="text-white text-sm font-semibold mb-2">{label}</p>
                            <p className="text-[#94A3B8] text-sm leading-relaxed">{desc}</p>
                        </motion.div>
                    ))}

                    {/* Resume card */}
                    <motion.div {...fade(0.24)} className="layer-card p-5 flex items-center justify-between border-[rgba(103,232,249,0.15)]">
                        <div>
                            <p className="text-white text-sm font-semibold">Full Resume</p>
                            <p className="text-[#475569] text-xs mt-0.5">AI Engineer · FastAPI · LLM · RAG</p>
                        </div>
                        <ResumeDownloadButton
                            label="Download"
                            className="btn-primary text-xs py-2 px-4"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
