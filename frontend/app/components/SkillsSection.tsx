"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp as fade } from "@/app/lib/motion";

type SkillsData = Record<string, string[]>;

const ACCENT_COLORS = [
    "text-[#67E8F9]",   // cyan
    "text-[#94A3B8]",   // slate — alternate to avoid repetition
    "text-[#67E8F9]",
    "text-[#94A3B8]",
    "text-[#67E8F9]",
    "text-[#94A3B8]",
];

function SkeletonCard() {
    return (
        <div className="layer-card p-5">
            <div className="skeleton h-2.5 w-24 mb-4" />
            <div className="flex flex-wrap gap-1.5">
                {[80, 60, 90, 70, 55].map((w, i) => (
                    <div key={i} className="skeleton h-5 rounded" style={{ width: w }} />
                ))}
            </div>
        </div>
    );
}



export default function SkillsSection() {
    const [skills, setSkills] = useState<SkillsData | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"}/skills/`)
            .then(r => { if (!r.ok) throw new Error(); return r.json(); })
            .then(setSkills)
            .catch(() => setError(true));
    }, []);

    const layers = skills ? Object.entries(skills) : [];

    return (
        <section className="py-28 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">

            <motion.div {...fade()} className="mb-12">
                <p className="section-label">Stack</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Engineering <span className="text-accent-word">stack.</span>
                </h2>
                <p className="text-[#94A3B8] text-sm mt-3 max-w-md">
                    Every layer — from LLM inference to deployment.
                </p>
            </motion.div>

            {error && (
                <p className="text-[#475569] text-sm mb-8">
                    Could not load skills — make sure the API is running.
                </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {!skills
                    ? [0, 1, 2, 3, 4, 5].map(i => <SkeletonCard key={i} />)
                    : layers.map(([layer, skillList], i) => (
                        <motion.div
                            key={layer}
                            {...fade(i * 0.06)}
                            className="layer-card p-5"
                        >
                            <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${ACCENT_COLORS[i % ACCENT_COLORS.length]}`}>
                                {layer}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {skillList.map(s => (
                                    <span key={s} className="tech-badge">{s}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
            </div>
        </section>
    );
}
