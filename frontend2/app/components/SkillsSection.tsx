"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// The /skills/ endpoint returns { [layerName]: string[] }
// Layer names come from the DB (e.g. "AI / GenAI", "Backend", "Frontend", etc.)
type SkillsData = Record<string, string[]>;

// Color palette cycled per layer
const COLORS = [
    { color: "text-primary", border: "border-primary/30", bg: "bg-primary/10" },
    { color: "text-secondary", border: "border-secondary/30", bg: "bg-secondary/10" },
    { color: "text-accent", border: "border-accent/30", bg: "bg-accent/10" },
    { color: "text-yellow-400", border: "border-yellow-400/30", bg: "bg-yellow-400/10" },
    { color: "text-green-400", border: "border-green-400/30", bg: "bg-green-400/10" },
    { color: "text-orange-400", border: "border-orange-400/30", bg: "bg-orange-400/10" },
];

function SkeletonCard() {
    return (
        <div className="layer-card p-6">
            <div className="skeleton h-3 w-24 mb-5" />
            <div className="flex flex-wrap gap-2">
                {[80, 60, 90, 70, 55].map((w, i) => (
                    <div key={i} className="skeleton h-6 rounded-full" style={{ width: w }} />
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
            .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
            .then(setSkills)
            .catch(() => setError(true));
    }, []);

    const layers = skills ? Object.entries(skills) : [];

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

            {error && (
                <p className="text-center text-red-400 text-sm mb-8">
                    Could not load skills — is the backend running at <code>localhost:8000</code>?
                </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {!skills
                    ? [0, 1, 2, 3, 4, 5].map((i) => <SkeletonCard key={i} />)
                    : layers.map(([layer, skillList], i) => {
                        const { color, border, bg } = COLORS[i % COLORS.length];
                        return (
                            <motion.div
                                key={layer}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                viewport={{ once: true }}
                                className={`layer-card p-6 border ${border}`}
                            >
                                <h3 className={`text-xs font-bold uppercase tracking-wider ${color} mb-5`}>
                                    {layer}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillList.map((s) => (
                                        <span
                                            key={s}
                                            className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
            </div>
        </section>
    );
}
