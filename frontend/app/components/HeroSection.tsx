"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ResumeDownloadButton from "./ResumeDownloadButton";
import { Icons } from "./ui/Icons";
import { fadeIn as fade } from "@/app/lib/motion";

const stats = [
    { value: "5+",       label: "AI Projects"      },
    { value: "GPT-4o",   label: "LLM of choice"    },
    { value: "LangGraph",label: "Agent framework"  },
    { value: "MCA",      label: "AI Specialization" },
];

export default function HeroSection() {
    return (
        <section className="relative flex flex-col justify-center min-h-screen px-6 md:px-16 lg:px-24 overflow-hidden">

            {/* Single subtle top gradient — no blobs, no particles */}
            <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden
                style={{
                    background:
                        "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(103,232,249,0.07) 0%, transparent 60%)",
                }}
            />

            <div className="relative z-10 max-w-3xl pt-28 pb-20">

                {/* Eyebrow label */}
                <motion.p {...fade(0)} className="section-label mb-6">
                    AI Engineer
                </motion.p>

                {/* H1 — plain white, only ONE accent phrase */}
                <motion.h1
                    {...fade(0.08)}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white mb-6"
                >
                    Building{" "}
                    <span className="text-accent-word">production-grade</span>
                    <br />
                    AI systems.
                </motion.h1>

                {/* Descriptor */}
                <motion.p {...fade(0.16)} className="text-lg text-[#94A3B8] leading-relaxed max-w-xl mb-10">
                    LLM pipelines · multi-stage RAG · LangGraph agentic workflows ·
                    FastAPI backends — end to end.
                </motion.p>

                {/* CTAs — minimal */}
                <motion.div {...fade(0.22)} className="flex flex-wrap items-center gap-3 mb-14">
                    <Link href="/projects" className="btn-primary">
                        <Icons.Briefcase className="w-4 h-4" />
                        View Projects
                    </Link>
                    <ResumeDownloadButton
                        label="Resume"
                        className="btn-ghost"
                    />
                    <a
                        href="https://github.com/sinuarlowbaby"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-ghost"
                    >
                        <Icons.Github className="w-4 h-4" />
                        GitHub
                    </a>
                </motion.div>

                {/* Micro stats — understated */}
                <motion.div
                    {...fade(0.3)}
                    className="flex flex-wrap gap-8"
                >
                    {stats.map(({ value, label }) => (
                        <div key={label}>
                            <p className="text-white font-semibold text-sm">{value}</p>
                            <p className="text-[#475569] text-xs mt-0.5">{label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-6 md:left-16 lg:left-24 flex items-center gap-2.5 text-[#475569]"
            >
                <div className="w-6 h-px bg-[#1E293B]" />
                <span className="text-[10px] tracking-widest uppercase">Scroll</span>
            </motion.div>
        </section>
    );
}
