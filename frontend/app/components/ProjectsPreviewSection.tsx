"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Icons } from "./ui/Icons";

const projects = [
    {
        title: "OneIDE",
        subtitle: "Full Stack Online Compiler",
        tech: ["Django", "Python", "MySQL"],
        description: "A secure online compiler platform with authentication, session management, and guest mode execution.",
        architecture: [
            "Multi-language execution engine with sandboxed runtime",
            "Session-based auth with guest mode fallback",
            "REST API design with Django backend",
        ],
        impact: "Supports multiple programming languages with real-time output",
        github: "https://github.com/sinuarlowbaby",
        demo: "#",
        gradient: "from-primary/20 to-secondary/10",
    },
    {
        title: "Custom RAG Chatbot",
        subtitle: "AI Retrieval System",
        tech: ["LangChain", "LLMs", "Vector DB", "FastAPI"],
        description: "Context-aware chatbot that queries custom datasets using retrieval pipelines and vector search.",
        architecture: [
            "Document chunking + embedding pipeline",
            "Vector similarity search for retrieval",
            "LLM generation with retrieved context injection",
        ],
        impact: "Accurate, grounded responses from custom knowledge bases",
        github: "https://github.com/sinuarlowbaby",
        demo: "#",
        gradient: "from-accent/20 to-primary/10",
    },
];

const ProjectsPreviewSection = () => {
    const router = useRouter();

    return (
        <section className="py-24 px-6 max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-12">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold"
                >
                    <span className="text-gradient">Featured Projects</span>
                </motion.h2>

                <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    href="/projects"
                    className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-medium"
                >
                    View All <Icons.ArrowRight className="w-4 h-4" />
                </motion.a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                        onClick={() => router.push("/projects")}
                        className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer h-full`}
                    >
                        <div className="p-8 h-full flex flex-col">
                            {/* Tech badges */}
                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="tech-badge">{t}</span>
                                ))}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm font-medium mb-4">{project.subtitle}</p>
                            <p className="text-gray-300 leading-relaxed mb-5 text-sm">{project.description}</p>

                            {/* Architecture bullets */}
                            <div className="mb-5 space-y-1.5">
                                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Architecture</p>
                                {project.architecture.map((bullet, i) => (
                                    <div key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                        <span className="text-primary mt-0.5 shrink-0">›</span>
                                        <span>{bullet}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Impact */}
                            <div className="mb-6 p-3 rounded-lg bg-white/5 border border-white/5">
                                <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1">Impact</p>
                                <p className="text-sm text-gray-300">{project.impact}</p>
                            </div>

                            {/* Buttons — stop propagation so card click doesn't fire too */}
                            <div className="flex gap-3 mt-auto" onClick={(e) => e.stopPropagation()}>
                                <a
                                    href="/projects"
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all"
                                >
                                    <Icons.Globe className="w-4 h-4" />
                                    View Details
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-all"
                                >
                                    <Icons.Github className="w-4 h-4" />
                                    GitHub
                                </a>
                            </div>
                        </div>

                        {/* Decorative Gradient Blob */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/15 blur-[80px] rounded-full group-hover:bg-primary/25 transition-colors" />
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 text-center md:hidden">
                <a href="/projects" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors">
                    View All Projects <Icons.ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </section>
    );
};

export default ProjectsPreviewSection;
