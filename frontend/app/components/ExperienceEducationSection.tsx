"use client";
import { motion } from "framer-motion";

const timelineData = [
    {
        type: "Education",
        icon: "🎓",
        title: "MCA — Generative AI Specialization",
        institution: "SRM Institute of Science and Technology",
        period: "2025 – 2027",
        details: "Specializing in LLM architectures, Prompt Engineering, and AI Product Development.",
        color: "text-primary",
        borderColor: "border-primary/30",
        dotColor: "bg-primary",
    },
    {
        type: "Internship",
        icon: "💼",
        title: "Generative AI Internship",
        institution: "AICTE",
        period: "2024",
        details: "Applied AI workflows, practical implementation of LLM systems, and industry-style experimentation with GenAI tools.",
        color: "text-accent",
        borderColor: "border-accent/30",
        dotColor: "bg-accent",
    },
    {
        type: "Education",
        icon: "🎓",
        title: "BCA — Computer Applications",
        institution: "CM College of Arts and Science",
        period: "2022 – 2025",
        details: "Foundation in Programming, Web Technologies, and Database Systems.",
        color: "text-secondary",
        borderColor: "border-secondary/30",
        dotColor: "bg-secondary",
    },
];

const ExperienceEducationSection = () => {
    return (
        <section className="py-24 px-6 max-w-4xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
                <span className="text-gradient">Journey</span>{" "}
                <span className="text-white">&amp; Experience</span>
            </motion.h2>

            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/60 before:via-accent/40 before:to-secondary/30">
                {timelineData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                    >
                        {/* Timeline dot with icon */}
                        <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/15 bg-black/80 shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <span className="text-lg">{item.icon}</span>
                        </div>

                        {/* Content Card */}
                        <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border ${item.borderColor} bg-white/4 backdrop-blur-sm hover:bg-white/7 transition-all duration-300 group-hover:shadow-lg`}>
                            <div className="flex items-center justify-between mb-3">
                                <span className={`text-xs font-bold uppercase tracking-widest ${item.color}`}>
                                    {item.type}
                                </span>
                                <span className={`text-sm font-semibold ${item.color} bg-white/5 px-3 py-1 rounded-full`}>
                                    {item.period}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-400 font-medium mb-3">{item.institution}</p>
                            <p className="text-sm text-gray-400 leading-relaxed">{item.details}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceEducationSection;
