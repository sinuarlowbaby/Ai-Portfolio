"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icons } from "./ui/Icons";
import { getProjects, type Project } from "@/services/api";
import { fadeUp as fade } from "@/app/lib/motion";

const _unused = (delay = 0) => ({
    initial:    { opacity: 0, y: 16 },
    whileInView:{ opacity: 1, y: 0  },
    viewport:   { once: true        },
    transition: { duration: 0.5, delay },
});
void _unused;

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const tags = project.tags?.split(",").map(t => t.trim()).filter(Boolean).slice(0, 3) ?? [];

    return (
        <motion.article
            {...fade(index * 0.1)}
            className="layer-card p-6 flex flex-col group"
        >
            {/* Tags row — muted, no colour */}
            <div className="flex flex-wrap gap-1.5 mb-5">
                {tags.map(t => <span key={t} className="tech-badge">{t}</span>)}
            </div>

            {/* Title */}
            <Link href={`/projects/${project.slug}`}>
                <h3 className="text-lg font-semibold text-white group-hover:text-[#67E8F9] transition-colors mb-1 cursor-pointer">
                    {project.title}
                </h3>
            </Link>

            {project.subtitle && (
                <p className="text-[#475569] text-xs font-medium mb-3">{project.subtitle}</p>
            )}
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                {project.description}
            </p>

            {/* Links — minimal */}
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

export default function ProjectsPreviewSection() {
    const [projects, setProjects] = useState<Project[] | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        getProjects().then(p => setProjects(p.slice(0, 2))).catch(() => setError(true));
    }, []);

    return (
        <section className="py-28 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">

            <div className="flex items-end justify-between mb-12">
                <motion.div {...fade()}>
                    <p className="section-label">Projects</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Featured <span className="text-accent-word">work.</span>
                    </h2>
                </motion.div>
                <motion.div {...fade(0.05)}>
                    <Link
                        href="/projects"
                        className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-[#475569] hover:text-white transition-colors"
                    >
                        All projects <Icons.ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </motion.div>
            </div>

            {error && (
                <p className="text-[#475569] text-sm mb-8">
                    Could not load projects — make sure the API is running.
                </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {!projects
                    ? [0, 1].map(i => <SkeletonCard key={i} />)
                    : projects.length === 0
                        ? <p className="col-span-2 text-[#475569] text-sm">No projects yet.</p>
                        : projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)
                }
            </div>

            <div className="mt-6 md:hidden">
                <Link href="/projects" className="text-xs font-semibold text-[#67E8F9] hover:text-white transition-colors flex items-center gap-1">
                    All projects <Icons.ArrowRight className="w-3 h-3" />
                </Link>
            </div>
        </section>
    );
}
