"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import { Icons } from "@/app/components/ui/Icons";

const projects = [
    {
        id: 1,
        slug: "oneide",
        title: "OneIDE",
        subtitle: "Full Stack Online Compiler Platform",
        bannerGradient: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
        bannerAccent: "#4f8ef7",
        tags: ["Django", "Python", "MySQL", "REST API"],
        overview:
            "OneIDE is a secure, multi-language online compiler platform built with Django. It features full user authentication, session management, and a guest mode that allows code execution without sign-up. Designed with a backend-first architecture, it handles sandboxed code execution safely.",
        sections: [
            {
                type: "feature",
                subtitle: "How it's built",
                title: "Project overview and architecture",
                description:
                    "Built on Django's MVT architecture with a clean REST API layer. The execution engine runs user-submitted code in isolated subprocesses with timeout guards, preventing resource abuse. Session-based auth handles both registered users and anonymous guests seamlessly.",
                visual: "architecture",
            },
            {
                type: "feature",
                subtitle: "Core feature",
                title: "Multi-language execution engine",
                description:
                    "Supports Python, C, C++, and JavaScript. Each language runs through a dedicated subprocess handler with stdin piping, stdout capture, and stderr separation. Execution is time-limited to prevent infinite loops.",
                visual: "code",
            },
            {
                type: "takeaway",
                subtitle: "What this demonstrates",
                title: "Takeaway",
                description:
                    "OneIDE demonstrates backend-first thinking — secure execution, proper session handling, and clean API design. It shows how to build developer tools that are both functional and safe for public use.",
            },
        ],
        github: "https://github.com/sinuarlowbaby",
        demo: "#",
    },
    {
        id: 2,
        slug: "rag-chatbot",
        title: "Custom RAG Chatbot",
        subtitle: "AI Retrieval-Augmented Generation System",
        bannerGradient: "from-[#0d0d1a] via-[#1a0a2e] to-[#2d1b69]",
        bannerAccent: "#9d5cff",
        tags: ["LangChain", "FastAPI", "Vector DB", "LLMs", "Python"],
        overview:
            "A production-style RAG chatbot that answers questions from custom document datasets. Built with LangChain for the retrieval pipeline, a vector database for semantic search, and a FastAPI backend to expose the chat endpoint. Designed to be modular — each pipeline stage is independently swappable.",
        sections: [
            {
                type: "feature",
                subtitle: "How RAG works here",
                title: "Retrieval pipeline architecture",
                description:
                    "Documents are chunked, embedded using a sentence-transformer model, and stored in a vector database. At query time, the top-k most semantically similar chunks are retrieved and injected into the LLM prompt as context — grounding the response in real data.",
                visual: "pipeline",
            },
            {
                type: "feature",
                subtitle: "Engineering decision",
                title: "Modular LLM pipeline design",
                description:
                    "Each stage (chunking → embedding → retrieval → reranking → generation) is a separate module. This makes the system testable in isolation and allows swapping models or vector stores without rewriting the whole pipeline.",
                visual: "modules",
            },
            {
                type: "takeaway",
                subtitle: "What this demonstrates",
                title: "Takeaway",
                description:
                    "This project shows how to build grounded AI systems that don't hallucinate — by retrieving facts before generating answers. It demonstrates RAG pipeline design, vector search, and production-ready FastAPI backend architecture.",
            },
        ],
        github: "https://github.com/sinuarlowbaby",
        demo: "#",
    },
    {
        id: 3,
        slug: "portfolio-backend",
        title: "AI Portfolio Backend",
        subtitle: "FastAPI-Powered Portfolio API",
        bannerGradient: "from-[#0a1a0a] via-[#0d2b1a] to-[#1a4a2e]",
        bannerAccent: "#00e5a0",
        tags: ["FastAPI", "Python", "PostgreSQL", "REST API", "Pydantic"],
        overview:
            "The backend powering this portfolio — a clean FastAPI application with structured endpoints for projects, skills, contact form handling, and an AI chat endpoint. Built with async patterns, Pydantic validation, and a PostgreSQL database.",
        sections: [
            {
                type: "feature",
                subtitle: "API architecture",
                title: "FastAPI backend design",
                description:
                    "Organized into routers by domain (projects, skills, contact, AI). Each router uses Pydantic models for request/response validation. Async endpoints ensure non-blocking I/O for database queries and external API calls.",
                visual: "api",
            },
            {
                type: "feature",
                subtitle: "GenAI integration",
                title: "AI chat endpoint",
                description:
                    "A dedicated /ai/chat endpoint accepts natural language questions about the portfolio owner and returns contextual answers using an LLM. The endpoint is rate-limited and validated to prevent abuse.",
                visual: "chat",
            },
            {
                type: "takeaway",
                subtitle: "What this demonstrates",
                title: "Takeaway",
                description:
                    "Demonstrates production FastAPI patterns — clean routing, Pydantic validation, async design, and integrating LLM capabilities into a standard REST API. A real example of AI as a system component.",
            },
        ],
        github: "https://github.com/sinuarlowbaby",
        demo: "#",
    },
];

function VisualBlock({ type, accent }: { type: string; accent: string }) {
    const blocks: Record<string, React.ReactNode> = {
        architecture: (
            <div className="flex flex-col items-center gap-3 p-6">
                {["Client / Browser", "Django Backend", "MySQL Database"].map((label, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 w-full">
                        <div className="w-full max-w-xs py-3 rounded-xl text-center text-sm font-semibold"
                            style={{ background: `${accent}18`, border: `1px solid ${accent}40`, color: accent }}>
                            {label}
                        </div>
                        {i < 2 && <div className="w-0.5 h-5" style={{ background: `${accent}60` }} />}
                    </div>
                ))}
            </div>
        ),
        code: (
            <div className="p-5 rounded-xl bg-black/50 border border-white/10 font-mono text-xs text-gray-400 space-y-1.5">
                <div><span style={{ color: accent }}>def</span> execute(code, lang):</div>
                <div className="pl-4">result = subprocess.run(</div>
                <div className="pl-8">cmd[lang], input=code,</div>
                <div className="pl-8">timeout=5, capture_output=True</div>
                <div className="pl-4">)</div>
                <div className="pl-4"><span style={{ color: accent }}>return</span> result.stdout</div>
            </div>
        ),
        pipeline: (
            <div className="flex flex-col gap-2 p-5">
                {["📄 Documents", "✂️ Chunking", "🔢 Embedding", "🗄️ Vector Store", "🔍 Retrieval", "🤖 LLM Generation"].map((step, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                        <div className="w-full px-4 py-2 rounded-lg text-xs font-medium text-center text-white"
                            style={{ background: `${accent}18`, border: `1px solid ${accent}33` }}>
                            {step}
                        </div>
                        {i < 5 && <div className="text-gray-600 text-xs leading-none">↓</div>}
                    </div>
                ))}
            </div>
        ),
        modules: (
            <div className="grid grid-cols-2 gap-3 p-5">
                {["Chunker", "Embedder", "Retriever", "Generator"].map((mod, i) => (
                    <div key={i} className="p-4 rounded-xl text-center text-sm font-bold"
                        style={{ background: `${accent}15`, border: `1px solid ${accent}35`, color: accent }}>
                        {mod}
                    </div>
                ))}
            </div>
        ),
        api: (
            <div className="p-5 space-y-2 font-mono text-xs">
                {[
                    { method: "GET", path: "/projects/", color: "#4ade80" },
                    { method: "GET", path: "/skills/", color: "#4ade80" },
                    { method: "POST", path: "/contact/", color: "#facc15" },
                    { method: "POST", path: "/ai/chat", color: accent },
                ].map((ep, i) => (
                    <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-black/30 border border-white/8">
                        <span className="font-bold w-10 shrink-0" style={{ color: ep.color }}>{ep.method}</span>
                        <span className="text-gray-400">{ep.path}</span>
                    </div>
                ))}
            </div>
        ),
        chat: (
            <div className="p-5 space-y-3">
                <div className="flex justify-end">
                    <div className="bg-white/10 rounded-2xl rounded-tr-sm px-4 py-2.5 text-xs text-gray-300 max-w-[80%]">
                        What projects have you built?
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="rounded-2xl rounded-tl-sm px-4 py-2.5 text-xs text-white max-w-[80%]"
                        style={{ background: `${accent}25`, border: `1px solid ${accent}40` }}>
                        I've built OneIDE, a RAG chatbot, and this portfolio API — each with a distinct architecture...
                    </div>
                </div>
            </div>
        ),
    };
    return (
        <div className="rounded-2xl bg-white/3 border border-white/8 overflow-hidden">
            {blocks[type] ?? <div className="p-8 text-gray-600 text-sm text-center">Visual</div>}
        </div>
    );
}

export default function ProjectsPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const project = projects[activeIndex];

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#030014] pt-20">

                {/* Page header */}
                <div className="max-w-5xl mx-auto px-6 pt-12 pb-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-bold mb-2"
                    >
                        <span className="text-gradient">Design Projects</span>
                    </motion.h1>
                    <p className="text-gray-500 text-sm">Backend-first AI systems &amp; production APIs</p>
                </div>

                {/* Tab selector */}
                <div className="max-w-5xl mx-auto px-6 mb-8">
                    <div className="flex gap-2 p-1.5 rounded-2xl bg-white/4 border border-white/8 w-fit">
                        {projects.map((p, i) => (
                            <button
                                key={p.id}
                                onClick={() => setActiveIndex(i)}
                                className="relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                                style={
                                    activeIndex === i
                                        ? { background: p.bannerAccent + "22", color: p.bannerAccent, border: `1px solid ${p.bannerAccent}50` }
                                        : { color: "#6b7280", border: "1px solid transparent" }
                                }
                            >
                                {activeIndex === i && (
                                    <motion.div
                                        layoutId="active-tab"
                                        className="absolute inset-0 rounded-xl"
                                        style={{ background: p.bannerAccent + "15" }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                                    />
                                )}
                                <span className="relative z-10">{p.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project content — animated on switch */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                        {/* Hero banner */}
                        <div className={`relative bg-gradient-to-br ${project.bannerGradient} py-16 px-6 overflow-hidden`}>
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full blur-[120px] opacity-25"
                                style={{ background: project.bannerAccent }}
                            />
                            <div className="relative max-w-5xl mx-auto text-center">
                                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: project.bannerAccent }}>
                                    Project {String(project.id).padStart(2, "0")}
                                </p>
                                <h2 className="text-4xl md:text-6xl font-bold text-white mb-3">{project.title}</h2>
                                <p className="text-gray-300 text-lg mb-8">{project.subtitle}</p>

                                <div className="flex flex-wrap justify-center gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold border"
                                            style={{ background: `${project.bannerAccent}20`, borderColor: `${project.bannerAccent}50`, color: project.bannerAccent }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-center gap-4">
                                    <a href={project.github} target="_blank" rel="noreferrer"
                                        className="flex items-center gap-2 px-6 py-2.5 rounded-full border text-sm font-semibold hover:bg-white/10 transition-all"
                                        style={{ borderColor: `${project.bannerAccent}60`, color: project.bannerAccent }}>
                                        <Icons.Github className="w-4 h-4" /> GitHub
                                    </a>
                                    <a href={project.demo}
                                        className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-[#030014] hover:opacity-90 transition-all"
                                        style={{ background: project.bannerAccent }}>
                                        <Icons.Globe className="w-4 h-4" /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Overview */}
                        <div className="max-w-5xl mx-auto px-6 py-12">
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
                                <div className="md:col-span-3">
                                    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: project.bannerAccent }}>Overview</p>
                                    <p className="text-gray-300 leading-relaxed">{project.overview}</p>
                                </div>
                                <div className="md:col-span-2">
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Tech Stack</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sections */}
                        <div className="max-w-5xl mx-auto px-6 pb-20 space-y-16">
                            {project.sections.map((section, i) => {
                                if (section.type === "takeaway") {
                                    return (
                                        <div key={i} className="rounded-2xl p-8 border border-white/8"
                                            style={{ background: `${project.bannerAccent}0d` }}>
                                            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: project.bannerAccent }}>{section.subtitle}</p>
                                            <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                                            <p className="text-gray-300 leading-relaxed">{section.description}</p>
                                        </div>
                                    );
                                }
                                const flip = i % 2 !== 0;
                                return (
                                    <div key={i} className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${flip ? "md:[&>*:first-child]:order-2" : ""}`}>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: project.bannerAccent }}>{section.subtitle}</p>
                                            <h3 className="text-xl font-bold text-white mb-4 leading-snug">{section.title}</h3>
                                            <p className="text-gray-400 leading-relaxed text-sm">{section.description}</p>
                                        </div>
                                        <VisualBlock type={section.visual!} accent={project.bannerAccent} />
                                    </div>
                                );
                            })}
                        </div>

                        {/* Prev / Next navigation */}
                        <div className="max-w-5xl mx-auto px-6 pb-16 flex justify-between items-center border-t border-white/8 pt-8">
                            <button
                                onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
                                disabled={activeIndex === 0}
                                className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            >
                                ← Previous
                            </button>
                            <div className="flex gap-2">
                                {projects.map((_, i) => (
                                    <button key={i} onClick={() => setActiveIndex(i)}
                                        className="w-2 h-2 rounded-full transition-all"
                                        style={{ background: activeIndex === i ? project.bannerAccent : "#374151" }} />
                                ))}
                            </div>
                            <button
                                onClick={() => setActiveIndex((i) => Math.min(projects.length - 1, i + 1))}
                                disabled={activeIndex === projects.length - 1}
                                className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            >
                                Next →
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </main>
        </>
    );
}
