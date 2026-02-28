"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icons } from "./ui/Icons";
import { getProjects, type Project } from "@/services/api";

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const tags = project.tags?.split(",").map((t) => t.trim()).filter(Boolean) ?? [];
    const gradient = index % 2 === 0 ? "from-primary/20 to-secondary/10" : "from-accent/20 to-primary/10";

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col`}
        >
            <div className="p-8 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-5">
                    {tags.map((t) => <span key={t} className="tech-badge">{t}</span>)}
                </div>

                <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                {project.subtitle && <p className="text-gray-400 text-sm font-medium mb-4">{project.subtitle}</p>}
                <p className="text-gray-300 leading-relaxed text-sm mb-5 flex-1">{project.description}</p>

                <div className="flex gap-3 mt-auto">
                    {project.demo_url && project.demo_url !== "#" && (
                        <a href={project.demo_url} target="_blank" rel="noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all">
                            <Icons.Globe className="w-4 h-4" /> Live Demo
                        </a>
                    )}
                    {project.github_url && (
                        <a href={project.github_url} target="_blank" rel="noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-all">
                            <Icons.Github className="w-4 h-4" /> GitHub
                        </a>
                    )}
                </div>
            </div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/15 blur-[80px] rounded-full group-hover:bg-primary/25 transition-colors" />
        </motion.div>
    );
}

function SkeletonCard() {
    return (
        <div className="rounded-2xl border border-white/10 p-8">
            <div className="skeleton h-4 w-32 mb-5" />
            <div className="skeleton h-6 w-48 mb-2" />
            <div className="skeleton h-4 w-full mb-2" />
            <div className="skeleton h-4 w-3/4 mb-8" />
            <div className="flex gap-3">
                <div className="skeleton h-10 flex-1 rounded-xl" />
                <div className="skeleton h-10 flex-1 rounded-xl" />
            </div>
        </div>
    );
}

export default function ProjectsPreviewSection() {
    const [projects, setProjects] = useState<Project[] | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        getProjects().then((p) => setProjects(p.slice(0, 2))).catch(() => setError(true));
    }, []);

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

            {error && <p className="text-center text-red-400 text-sm mb-8">Could not load projects — is the backend running?</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {!projects
                    ? [0, 1].map((i) => <SkeletonCard key={i} />)
                    : projects.length === 0
                        ? <p className="col-span-2 text-center text-gray-500">No projects found. Add some via the backend API.</p>
                        : projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)
                }
            </div>

            <div className="mt-8 text-center md:hidden">
                <a href="/projects" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors">
                    View All Projects <Icons.ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </section>
    );
}
