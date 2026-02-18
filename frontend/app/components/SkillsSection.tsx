"use client";
import { motion } from "framer-motion";
import { Icons } from "./ui/Icons";

const skillLayers = [
    {
        layer: "AI Layer",
        icon: Icons.Brain,
        color: "text-primary",
        borderColor: "border-primary/30",
        bgColor: "bg-primary/10",
        skills: ["LLM Pipelines", "RAG Systems", "LangChain", "Prompt Engineering", "Embeddings"],
    },
    {
        layer: "Backend Layer",
        icon: Icons.Server,
        color: "text-secondary",
        borderColor: "border-secondary/30",
        bgColor: "bg-secondary/10",
        skills: ["FastAPI", "Django", "Python", "REST APIs", "Auth Systems"],
    },
    {
        layer: "Data Layer",
        icon: Icons.Database,
        color: "text-accent",
        borderColor: "border-accent/30",
        bgColor: "bg-accent/10",
        skills: ["PostgreSQL", "Vector DB", "MySQL", "Redis"],
    },
    {
        layer: "Frontend Layer",
        icon: Icons.React,
        color: "text-green-400",
        borderColor: "border-green-400/30",
        bgColor: "bg-green-400/10",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
        layer: "Infra Layer",
        icon: Icons.Docker,
        color: "text-orange-400",
        borderColor: "border-orange-400/30",
        bgColor: "bg-orange-400/10",
        skills: ["Docker", "Git", "CI/CD", "Linux"],
    },
    {
        layer: "Model Hubs & Tools",
        icon: Icons.Terminal,
        color: "text-yellow-400",
        borderColor: "border-yellow-400/30",
        bgColor: "bg-yellow-400/10",
        skills: ["HuggingFace", "Ollama", "OpenAI API", "Groq API"],
    },
];

const SkillsSection = () => {
    return (
        <section className="py-24 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="text-gradient">Architecture Stack</span>
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Skills organized by system layers — the way an architect thinks.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillLayers.map((layer, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08 }}
                        viewport={{ once: true }}
                        className={`layer-card p-6 border ${layer.borderColor}`}
                    >
                        {/* Layer Header */}
                        <div className="flex items-center gap-3 mb-5">
                            <div className={`p-2.5 rounded-lg ${layer.bgColor}`}>
                                <layer.icon className={`w-5 h-5 ${layer.color}`} />
                            </div>
                            <h3 className={`text-sm font-bold uppercase tracking-wider ${layer.color}`}>
                                {layer.layer}
                            </h3>
                        </div>

                        {/* Skills as inline tags */}
                        <div className="flex flex-wrap gap-2">
                            {layer.skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
