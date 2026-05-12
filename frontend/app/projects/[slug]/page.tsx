"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import { Icons } from "@/app/components/ui/Icons";
import { projectDetails } from "@/services/projectsData";

// ─── Icon helpers ─────────────────────────────────────────────────────────────
type IconProps = { className?: string; style?: React.CSSProperties };

function IconArrowLeft({ className, style }: IconProps) {
    return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l7 7m-7-7l7-7" />
        </svg>
    );
}

function IconCheck({ className, style }: IconProps) {
    return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    );
}

function IconStack({ className, style }: IconProps) {
    return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
    );
}

function IconBolt({ className, style }: IconProps) {
    return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
    );
}

function IconCode({ className, style }: IconProps) {
    return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    );
}

// ─── Section header ───────────────────────────────────────────────────────────
function SectionHeader({
    icon,
    title,
    accent,
}: {
    icon: React.ReactNode;
    title: string;
    accent: string;
}) {
    return (
        <div className="flex items-center gap-3 mb-6">
            <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${accent}22`, border: `1px solid ${accent}44` }}
            >
                {icon}
            </div>
            <h2 className="text-xl font-bold text-white">{title}</h2>
        </div>
    );
}

// ─── Not Found ────────────────────────────────────────────────────────────────
function NotFound() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#030014] pt-32 flex flex-col items-center justify-center px-6">
                <p className="text-5xl mb-4">🔍</p>
                <h1 className="text-2xl font-bold text-white mb-2">Project not found</h1>
                <p className="text-gray-400 mb-8">That project doesn&apos;t exist yet.</p>
                <Link
                    href="/projects"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-all"
                >
                    <IconArrowLeft className="w-4 h-4" /> Back to Projects
                </Link>
            </main>
        </>
    );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function ProjectDetailPage() {
    const params = useParams();
    const slug = typeof params?.slug === "string" ? params.slug : "";
    const project = projectDetails[slug];

    if (!project) return <NotFound />;

    const { accentColor, gradientFrom, gradientTo } = project;

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#030014] pb-24">
                {/* ── Hero Banner — full bleed with smooth bottom fade ─────── */}
                <div
                    className="relative overflow-hidden pt-24"
                    style={{
                        background: `linear-gradient(160deg, ${gradientFrom} 0%, ${gradientTo} 50%, #030014 100%)`,
                    }}
                >
                    {/* Ambient glow top-left */}
                    <div
                        className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full blur-[140px] opacity-25 pointer-events-none"
                        style={{ background: accentColor }}
                    />
                    {/* Secondary glow right */}
                    <div
                        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none"
                        style={{ background: accentColor }}
                    />
                    {/* Bottom fade overlay — blends hero into body seamlessly */}
                    <div
                        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
                        style={{
                            background: "linear-gradient(to bottom, transparent 0%, #030014 100%)",
                        }}
                    />

                    <div className="max-w-5xl mx-auto px-6 pb-28 pt-8 relative z-10">
                        {/* Back link */}
                        <motion.div
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm mb-10"
                            >
                                <IconArrowLeft className="w-4 h-4" /> All Projects
                            </Link>
                        </motion.div>

                        {/* Tags */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 }}
                            className="flex flex-wrap gap-2 mb-5"
                        >
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full text-xs font-semibold border"
                                    style={{
                                        background: `${accentColor}18`,
                                        borderColor: `${accentColor}40`,
                                        color: accentColor,
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight"
                        >
                            {project.title}
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="text-lg text-gray-300 font-medium mb-3"
                        >
                            {project.subtitle}
                        </motion.p>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 max-w-2xl mb-10 leading-relaxed"
                        >
                            {project.tagline}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            className="flex flex-wrap gap-3"
                        >
                            <a
                                href={project.github_url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white border border-white/20 hover:bg-white/10 transition-all"
                            >
                                <Icons.Github className="w-4 h-4" /> View on GitHub
                            </a>
                            {project.demo_url && project.demo_url !== "#" && (
                                <a
                                    href={project.demo_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all"
                                    style={{ background: accentColor }}
                                >
                                    <Icons.Globe className="w-4 h-4" /> Live Demo
                                </a>
                            )}
                        </motion.div>
                    </div>
                </div>

                {/* ── Body Content ────────────────────────────────────────── */}
                <div className="max-w-5xl mx-auto px-6 space-y-16">
                    {/* Overview */}
                    <motion.section
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <SectionHeader
                            icon={<IconCode className="w-4 h-4" style={{ color: accentColor }} />}
                            title="Overview"
                            accent={accentColor}
                        />
                        <div
                            className="rounded-2xl p-6 border border-white/5"
                            style={{ background: "rgba(255,255,255,0.02)" }}
                        >
                            <p className="text-gray-300 leading-relaxed text-base">{project.overview}</p>
                        </div>
                    </motion.section>

                    {/* Architecture */}
                    <motion.section
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <SectionHeader
                            icon={<IconStack className="w-4 h-4" style={{ color: accentColor }} />}
                            title="Architecture"
                            accent={accentColor}
                        />
                        <div
                            className="rounded-2xl p-5 border font-mono text-sm text-gray-300 leading-relaxed overflow-x-auto"
                            style={{
                                background: "rgba(0,0,0,0.4)",
                                borderColor: `${accentColor}30`,
                            }}
                        >
                            {project.architecture.split(" → ").map((part, i, arr) => (
                                <span key={i}>
                                    <span style={{ color: i === 0 ? accentColor : "inherit" }}>{part}</span>
                                    {i < arr.length - 1 && (
                                        <span className="text-gray-500 mx-2">→</span>
                                    )}
                                </span>
                            ))}
                        </div>
                    </motion.section>

                    {/* Key Highlights */}
                    <motion.section
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <SectionHeader
                            icon={<IconBolt className="w-4 h-4" style={{ color: accentColor }} />}
                            title="Key Highlights"
                            accent={accentColor}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {project.highlights.map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -12 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-start gap-3 rounded-xl p-4 border border-white/5"
                                    style={{ background: "rgba(255,255,255,0.02)" }}
                                >
                                    <div
                                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                        style={{ background: `${accentColor}22` }}
                                    >
                                        <IconCheck className="w-3 h-3" style={{ color: accentColor }} />
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">{h}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Features */}
                    <motion.section
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <SectionHeader
                            icon={<IconBolt className="w-4 h-4" style={{ color: accentColor }} />}
                            title="Core Features"
                            accent={accentColor}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {project.features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07 }}
                                    className="rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all"
                                    style={{ background: "rgba(255,255,255,0.02)" }}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div
                                            className="w-2 h-2 rounded-full flex-shrink-0"
                                            style={{ background: accentColor }}
                                        />
                                        <h3 className="font-semibold text-white text-sm">{f.title}</h3>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Tech Stack */}
                    <motion.section
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <SectionHeader
                            icon={<IconStack className="w-4 h-4" style={{ color: accentColor }} />}
                            title="Technology Stack"
                            accent={accentColor}
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {project.techStack.map((cat, i) => (
                                <motion.div
                                    key={cat.label}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06 }}
                                    className="rounded-2xl p-5 border border-white/5"
                                    style={{ background: "rgba(255,255,255,0.02)" }}
                                >
                                    <p
                                        className="text-xs font-bold uppercase tracking-widest mb-4"
                                        style={{ color: accentColor }}
                                    >
                                        {cat.label}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {cat.items.map((item) => (
                                            <span
                                                key={item}
                                                className="px-3 py-1 rounded-lg text-xs font-medium border text-gray-300"
                                                style={{
                                                    background: "rgba(255,255,255,0.04)",
                                                    borderColor: "rgba(255,255,255,0.08)",
                                                }}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* CTA Footer */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="rounded-2xl p-8 border border-white/5 text-center"
                        style={{
                            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                        }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-2">Explore the code</h2>
                        <p className="text-gray-400 mb-6 text-sm">
                            Check out the full implementation on GitHub.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <a
                                href={project.github_url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white border border-white/20 hover:bg-white/10 transition-all"
                            >
                                <Icons.Github className="w-4 h-4" /> View on GitHub
                            </a>
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all"
                                style={{ background: accentColor, color: "#fff" }}
                            >
                                <IconArrowLeft className="w-4 h-4" /> All Projects
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </main>
        </>
    );
}
