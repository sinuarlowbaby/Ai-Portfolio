"use client";

import { motion } from "framer-motion";

const experience = [
    {
        type: "Experience",
        year: "2025 – Present",
        title: "Generative AI Developer",
        org: "Self-directed / AICTE Internship",
        points: [
            "Completed a specialized AICTE internship focusing on Generative AI applications and modern AI development frameworks.",
            "Engineered a Custom RAG Chatbot prototype using Python, LangChain, and LLMs to answer queries based on custom datasets.",
            "Implemented efficient vector search mechanisms to accurately retrieve relevant context, optimizing response quality and contextual awareness.",
        ],
    },
    {
        type: "Experience",
        year: "2024 – 2025",
        title: "Backend Developer",
        org: "OneIDE Platform · UG Final Year Project",
        points: [
            "Architected OneIDE, a full-stack collaborative online compiler allowing users to write and execute code in real-time using Django, Python, MySQL, and HTML/CSS.",
            "Engineered secure backend systems with user authentication and session management leveraging Django's built-in auth system.",
            "Developed a seamless Guest Mode feature enabling immediate, frictionless code execution without mandatory user registration.",
        ],
    },
];

const education = [
    {
        type: "Education",
        year: "2025 – Present",
        title: "Full Stack AI with Python",
        org: "Udemy · Online Course",
        points: [
            "Currently enrolled in a comprehensive course covering LLMs, prompt engineering, and full-stack AI application development.",
            "Building real-world AI-powered apps integrating Python backends with modern LLM APIs.",
        ],
    },
    {
        type: "Education",
        year: "2025 – 2027",
        title: "Master of Computer Applications (MCA)",
        org: "SRM Institute of Science and Technology",
        points: [
            "Core Specialization: Generative AI.",
            "Currently pursuing advanced studies in modern software engineering, scalable backend systems (FastAPI), and AI-driven solutions.",
        ],
    },
    {
        type: "Education",
        year: "2022 – 2025",
        title: "Bachelor of Computer Applications (BCA)",
        org: "CM College of Arts and Science",
        points: [
            "Core Focus: Web Development and Project Management.",
            "Built a strong foundation in core computer science principles, database management, and full-stack web technologies.",
        ],
    },
];

const items = [...experience, ...education];

export default function ExperienceEducationSection() {
    return (
        <section className="py-24 px-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="text-gradient">Experience & Education</span>
                </h2>
                <p className="text-gray-400">The journey so far.</p>
            </motion.div>

            <div className="relative border-l border-white/10 pl-8 space-y-10">
                {items.map(({ type, year, title, org, points }, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Dot */}
                        <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${type === "Education" ? "bg-secondary/15 text-secondary" : "bg-primary/15 text-primary"}`}>
                            {type} · {year}
                        </span>

                        <h3 className="text-lg font-bold mt-2">{title}</h3>
                        <p className="text-gray-400 text-sm mb-3">{org}</p>

                        <ul className="space-y-1.5">
                            {points.map((pt, j) => (
                                <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                                    <span className="text-primary mt-0.5 shrink-0">›</span>
                                    {pt}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
