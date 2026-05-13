"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import { Icons } from "@/app/components/ui/Icons";
import { getProjects, type Project } from "@/services/api";

function SkeletonCard() {
    return (
        <div className="layer-card p-6">
            <div className="skeleton h-3 w-28 mb-5" />
            <div className="skeleton h-5 w-44 mb-2" />
            <div className="skeleton h-3 w-full mb-2" />
            <div className="skeleton h-3 w-3/4 mb-8" />
            <div className="skeleton h-8 w-24 rounded-md" />
        </div>
    );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const tags = project.tags?.split(",").map(t => t.trim()).filter(Boolean).slice(0, 4) ?? [];

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07 }}
            className="layer-card p-6 flex flex-col group"
        >
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
                {tags.map(t => <span key={t} className="tech-badge">{t}</span>)}
            </div>

            {/* Title & subtitle */}
            <h2 className="text-lg font-semibold text-white group-hover:text-[#67E8F9] transition-colors mb-1">
                {project.title}
            </h2>
            {project.subtitle && (
                <p className="text-[#475569] text-xs font-medium mb-3">{project.subtitle}</p>
            )}
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 flex-1 line-clamp-4">
                {project.description}
            </p>

            {/* Links */}
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[rgba(255,255,255,0.05)]">
                <Link
                    href={`/projects/${project.slug}`}
                    className="text-xs font-semibold text-[#67E8F9] hover:text-white transition-colors flex items-center gap-1"
                >
                    Case study <Icons.ArrowRight className="w-3 h-3" />
                </Link>
                <div className="flex-1" />
                {project.github_url && (
                    <a href={project.github_url} target="_blank" rel="noreferrer"
                        className="text-[#475569] hover:text-white transition-colors">
                        <Icons.Github className="w-4 h-4" />
                    </a>
                )}
                {project.demo_url && project.demo_url !== "#" && (
                    <a href={project.demo_url} target="_blank" rel="noreferrer"
                        className="text-[#475569] hover:text-white transition-colors">
                        <Icons.Globe className="w-4 h-4" />
                    </a>
                )}
            </div>
        </motion.article>
    );
}

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[] | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        getProjects().then(setProjects).catch(() => setError(true));
    }, []);

    return (
        <>
            <Navbar />
            <main className="min-h-screen page-bg pt-28 pb-20 px-6 md:px-16 lg:px-24">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-16"
                    >
                        <p className="section-label">Work</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                            All <span className="text-accent-word">projects.</span>
                        </h1>
                        <p className="text-[#94A3B8] text-sm max-w-md">
                            Production AI systems, backend platforms, and full-stack apps —
                            each with a full technical breakdown.
                        </p>
                    </motion.div>

                    {error && (
                        <p className="text-[#475569] text-sm mb-8">
                            Could not load projects — make sure the API is running.
                        </p>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {!projects
                            ? [0, 1, 2].map(i => <SkeletonCard key={i} />)
                            : projects.length === 0
                                ? <p className="col-span-3 text-[#475569] text-sm py-16">No projects yet.</p>
                                : projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)
                        }
                    </div>
                </div>
            </main>
        </>
    );
}
