"use client";
import { motion } from "framer-motion";
import { Icons } from "./ui/Icons";

const techTags = ["FastAPI", "LLM Architectures", "RAG Systems", "Production APIs"];

const HeroSection = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px] animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />

            {/* Floating particles — static positions to avoid SSR hydration mismatch */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float" style={{ left: "15%", top: "20%", animationDelay: "0s", animationDuration: "3s" }} />
                <div className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float" style={{ left: "30%", top: "45%", animationDelay: "0.7s", animationDuration: "3.5s" }} />
                <div className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float" style={{ left: "45%", top: "70%", animationDelay: "1.4s", animationDuration: "4s" }} />
                <div className="absolute w-1 h-1 bg-accent/30 rounded-full animate-float" style={{ left: "60%", top: "20%", animationDelay: "2.1s", animationDuration: "4.5s" }} />
                <div className="absolute w-1 h-1 bg-accent/30 rounded-full animate-float" style={{ left: "75%", top: "45%", animationDelay: "2.8s", animationDuration: "5s" }} />
                <div className="absolute w-1 h-1 bg-secondary/30 rounded-full animate-float" style={{ left: "90%", top: "70%", animationDelay: "3.5s", animationDuration: "5.5s" }} />
            </div>

            <div className="z-10 max-w-4xl">
                {/* Technical credibility signal */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-2 mb-8"
                >
                    {techTags.map((tag) => (
                        <span key={tag} className="tech-badge">
                            {tag}
                        </span>
                    ))}
                </motion.div>

                {/* Greeting */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    <p className="text-lg md:text-xl font-medium text-accent mb-3 tracking-wide">
                        Hi, I am Sinu Arlow Baby
                    </p>
                </motion.div>

                {/* Main heading — h1 for SEO */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold leading-tight mb-4"
                >
                    <span className="text-gradient-animated">GenAI Application</span>
                    <br />
                    <span className="text-white">Developer</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-4 max-w-2xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed"
                >
                    Designing{" "}
                    <span className="text-primary font-semibold">production-ready GenAI systems</span>
                    {" "}—{" "}
                    <span className="text-accent font-semibold">LLM pipelines</span>,{" "}
                    <span className="text-secondary font-semibold">RAG architectures</span>, and intelligent backend APIs.
                </motion.p>

                {/* CTA Buttons — clear hierarchy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    {/* Primary CTA */}
                    <a
                        href="/projects"
                        className="animate-glow bg-primary text-white px-10 py-3.5 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/50 flex items-center gap-2 group text-base"
                    >
                        <Icons.Briefcase className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        View Projects
                    </a>

                    {/* Secondary Ghost CTA */}
                    <a
                        href="/resume.pdf"
                        download="Sinu_Arlow_Baby_Resume.pdf"
                        className="border border-primary/40 text-primary px-10 py-3.5 rounded-full font-semibold hover:bg-primary/10 hover:border-primary/70 transition-all flex items-center gap-2 group text-base"
                    >
                        <Icons.Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        Resume
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
};

export default HeroSection;
