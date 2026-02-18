"use client";
import { motion } from "framer-motion";
import { Icons } from "./ui/Icons";

const stats = [
    { value: "10+", label: "Projects" },
    { value: "GenAI", label: "Specialization" },
    { value: "FastAPI", label: "Backend Core" },
];

const ContactSection = () => {
    return (
        <section className="py-24 px-6 border-t border-white/10 bg-black/20">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gradient">Let's Connect</span>
                    </h2>
                    <p className="text-gray-400 mb-10 max-w-lg mx-auto leading-relaxed">
                        Always open to discussing GenAI architectures, LLM systems, and backend engineering.
                        Let's build something intelligent together.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <a
                            href="mailto:sinuarlowbaby.dev@gmail.com"
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/60 transition-all font-medium"
                        >
                            <Icons.Mail className="w-5 h-5" />
                            <span>sinuarlowbaby.dev@gmail.com</span>
                        </a>

                        <a
                            href="https://github.com/sinuarlowbaby"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all font-medium"
                        >
                            <Icons.Github className="w-5 h-5" />
                            <span>GitHub</span>
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all font-medium"
                        >
                            <Icons.Linkedin className="w-5 h-5" />
                            <span>LinkedIn</span>
                        </a>
                    </div>

                    {/* GitHub stats mini-strip */}
                    <div className="flex flex-wrap justify-center gap-6 mb-12 py-5 px-8 rounded-2xl bg-white/3 border border-white/8 max-w-lg mx-auto">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-xl font-bold text-primary">{stat.value}</div>
                                <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="text-gray-600 text-sm">
                        © <span suppressHydrationWarning>{new Date().getFullYear()}</span> SINU ARLOW BABY.{" "}
                        <span className="text-gray-500">Engineered with Next.js, FastAPI &amp; GenAI.</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
