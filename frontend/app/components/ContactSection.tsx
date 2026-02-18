"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Icons } from "./ui/Icons";
import { createContact } from "@/services/api";

type Status = "idle" | "sending" | "success" | "error";

const ContactSection = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<Status>("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;
        setStatus("sending");
        try {
            await createContact(form);
            setStatus("success");
            setForm({ name: "", email: "", message: "" });
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-24 px-6 border-t border-white/10 bg-black/20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gradient">Let's Connect</span>
                    </h2>
                    <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
                        Always open to discussing GenAI architectures, LLM systems, and backend engineering.
                        Let's build something intelligent together.
                    </p>
                </motion.div>

                {/* Quick social links */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    <a
                        href="mailto:sinuarlowbaby.dev@gmail.com"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/60 transition-all font-medium text-sm"
                    >
                        <Icons.Mail className="w-4 h-4" />
                        <span>sinuarlowbaby.dev@gmail.com</span>
                    </a>
                    <a
                        href="https://github.com/sinuarlowbaby"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all font-medium text-sm"
                    >
                        <Icons.Github className="w-4 h-4" />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all font-medium text-sm"
                    >
                        <Icons.Linkedin className="w-4 h-4" />
                        <span>LinkedIn</span>
                    </a>
                </motion.div>

                {/* Contact form */}
                <motion.form
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    onSubmit={handleSubmit}
                    className="space-y-5 p-8 rounded-2xl bg-white/3 border border-white/8 max-w-2xl mx-auto"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-primary/50 focus:bg-primary/5 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-primary/50 focus:bg-primary/5 transition-all"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What would you like to discuss?"
                            required
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-primary/50 focus:bg-primary/5 transition-all resize-none"
                        />
                    </div>

                    {status === "success" && (
                        <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/25 text-green-400 text-sm"
                        >
                            <span className="font-semibold">Message sent!</span>{" "}
                            <span className="text-green-500/70">I'll get back to you soon.</span>
                        </motion.div>
                    )}
                    {status === "error" && (
                        <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 text-sm"
                        >
                            <span className="font-semibold">Failed to send.</span>{" "}
                            <span className="text-red-500/70">Make sure the backend is running.</span>
                        </motion.div>
                    )}

                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full py-3.5 rounded-xl font-semibold text-sm bg-primary/15 border border-primary/30 text-primary hover:bg-primary/25 hover:border-primary/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        {status === "sending" ? "Sending..." : "Send Message"}
                    </button>
                </motion.form>

                {/* Footer */}
                <div className="text-center text-gray-600 text-sm mt-12">
                    © <span suppressHydrationWarning>{new Date().getFullYear()}</span> SINU ARLOW BABY.{" "}
                    <span className="text-gray-500">Engineered with Next.js, FastAPI &amp; GenAI.</span>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
