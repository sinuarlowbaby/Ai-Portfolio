"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Icons } from "./ui/Icons";
import { createContact, type ContactPayload } from "@/services/api";

type Status = "idle" | "sending" | "success" | "error";

const EMPTY: ContactPayload = { name: "", email: "", message: "" };

const socials = [
    { href: "mailto:sinuarlowbaby.dev@gmail.com", Icon: Icons.Mail, label: "sinuarlowbaby.dev@gmail.com", style: "bg-primary/10 border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/60" },
    { href: "https://github.com/sinuarlowbaby", Icon: Icons.Github, label: "GitHub", style: "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20" },
    { href: "https://linkedin.com", Icon: Icons.Linkedin, label: "LinkedIn", style: "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20" },
];

export default function ContactSection() {
    const [form, setForm] = useState<ContactPayload>(EMPTY);
    const [status, setStatus] = useState<Status>("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        try {
            await createContact(form);
            setStatus("success");
            setForm(EMPTY);
        } catch {
            setStatus("error");
        }
    };

    const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-primary/50 focus:bg-primary/5 transition-all";

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
                        <span className="text-gradient">Let&apos;s Connect</span>
                    </h2>
                    <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
                        Open to discussing GenAI architectures, LLM systems, and backend engineering.
                    </p>
                </motion.div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {socials.map(({ href, Icon, label, style }) => (
                        <a key={href} href={href} target="_blank" rel="noreferrer"
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full border font-medium text-sm transition-all ${style}`}>
                            <Icon className="w-4 h-4" />
                            {label}
                        </a>
                    ))}
                </motion.div>

                {/* Form */}
                <motion.form
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="space-y-5 p-8 rounded-2xl bg-white/3 border border-white/8 max-w-2xl mx-auto"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Name</label>
                            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className={inputClass} />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required className={inputClass} />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                        <textarea name="message" value={form.message} onChange={handleChange} placeholder="What would you like to discuss?" required rows={4} className={`${inputClass} resize-none`} />
                    </div>

                    {status === "success" && (
                        <div className="px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/25 text-green-400 text-sm">
                            <strong>Sent!</strong> I&apos;ll get back to you soon.
                        </div>
                    )}
                    {status === "error" && (
                        <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 text-sm">
                            <strong>Failed.</strong> Make sure the backend is running.
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm bg-primary/15 border border-primary/30 text-primary hover:bg-primary/25 hover:border-primary/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        <Icons.Send className="w-4 h-4" />
                        {status === "sending" ? "Sending..." : "Send Message"}
                    </button>
                </motion.form>

                <div className="text-center text-gray-600 text-sm mt-12">
                    © <span suppressHydrationWarning>{new Date().getFullYear()}</span> SINU ARLOW BABY.{" "}
                    <span className="text-gray-500">Engineered with Next.js, FastAPI & GenAI.</span>
                </div>
            </div>
        </section>
    );
}
