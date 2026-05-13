"use client";

import { motion } from "framer-motion";
import { fadeUp as fade } from "@/app/lib/motion";

/* ── Education — newest first ────────────────────────────────────────────── */
const education = [
    {
        year:    "2025 → Now",
        title:   "Master of Computer Applications (MCA)",
        org:     "SRM Institute of Science and Technology",
        note:    "Specialization: Generative AI",
        current: true,
    },
    {
        year:    "2022 – 2025",
        title:   "Bachelor of Computer Applications (BCA)",
        org:     "CM College of Arts and Science",
        note:    "Core: Web Development & Project Management",
        current: false,
    },
];

/* ── Experience — newest first ───────────────────────────────────────────── */
const experience = [
    {
        year:   "2025",
        title:  "GenAI Developer",
        org:    "Generative AI Developer Track",
        note:   "Built RAG systems, LangChain pipelines, LLM integrations",
        current: false,
    },
    {
        year:   "2025",
        title:  "AICTE GenAI Internship",
        org:    "AICTE — Government of India",
        note:   "Govt-certified internship in Generative AI applications",
        current: false,
    },
    {
        year:   "2024",
        title:  "Full Stack Python Developer",
        org:    "Internship — Python & Django",
        note:   "OneIDE platform: Django backend, auth, real-time code execution",
        current: false,
    },
];

/* ── Shared card component ───────────────────────────────────────────────── */
function TimelineItem({
    year, title, org, note, current, delay,
}: {
    year: string; title: string; org: string; note: string; current?: boolean; delay: number;
}) {
    return (
        <motion.div {...fade(delay)} className="flex gap-4">
            {/* Spine dot */}
            <div className="flex flex-col items-center pt-1 shrink-0">
                <div
                    className={`w-2 h-2 rounded-full ${
                        current
                            ? "bg-[#67E8F9] ring-[3px] ring-[rgba(103,232,249,0.15)]"
                            : "bg-[#1E293B] border border-[#334155]"
                    }`}
                />
                <div className="flex-1 w-px bg-[rgba(255,255,255,0.05)] mt-2" />
            </div>

            {/* Content */}
            <div className="pb-8">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`text-[10px] font-semibold uppercase tracking-widest ${current ? "text-[#67E8F9]" : "text-[#475569]"}`}>
                        {year}
                    </span>
                    {current && (
                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#67E8F9] bg-[rgba(103,232,249,0.08)] border border-[rgba(103,232,249,0.18)] px-1.5 py-0.5 rounded-full leading-none">
                            Current
                        </span>
                    )}
                </div>
                <p className={`text-sm font-semibold leading-snug mb-0.5 ${current ? "text-white" : "text-[#E2E8F0]"}`}>
                    {title}
                </p>
                <p className="text-[#475569] text-xs mb-1.5">{org}</p>
                <p className="text-[#64748B] text-xs leading-relaxed">{note}</p>
            </div>
        </motion.div>
    );
}

/* ── Section ─────────────────────────────────────────────────────────────── */
export default function ExperienceEducationSection() {
    return (
        <section className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">

            {/* Header */}
            <motion.div {...fade()} className="mb-16">
                <p className="section-label">Background</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
                    Education &amp; <span className="text-accent-word">Experience.</span>
                </h2>
            </motion.div>

            {/* Two-column grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                {/* ── Education ── */}
                <div>
                    <motion.p {...fade(0.04)} className="text-[10px] font-bold uppercase tracking-widest text-[#475569] mb-8">
                        Education
                    </motion.p>
                    <div>
                        {education.map((item, i) => (
                            <TimelineItem key={i} {...item} delay={0.06 + i * 0.07} />
                        ))}
                    </div>
                </div>

                {/* ── Experience ── */}
                <div>
                    <motion.p {...fade(0.04)} className="text-[10px] font-bold uppercase tracking-widest text-[#475569] mb-8">
                        Experience
                    </motion.p>
                    <div>
                        {experience.map((item, i) => (
                            <TimelineItem key={i} {...item} delay={0.06 + i * 0.07} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
