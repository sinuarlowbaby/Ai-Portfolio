"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Icons } from "./ui/Icons";
import { createContact, type ContactPayload } from "@/services/api";
import { fadeUp as fade } from "@/app/lib/motion";

type Status = "idle" | "sending" | "success" | "error";
const EMPTY: ContactPayload = { name: "", email: "", message: "" };

const socials = [
    { href: "mailto:sinuarlowbaby.dev@gmail.com", Icon: Icons.Mail,     label: "sinuarlowbaby.dev@gmail.com" },
    { href: "https://github.com/sinuarlowbaby",   Icon: Icons.Github,   label: "GitHub"                      },
    { href: "https://linkedin.com",                Icon: Icons.Linkedin, label: "LinkedIn"                    },
];



export default function ContactSection() {
    const [form, setForm] = useState<ContactPayload>(EMPTY);
    const [status, setStatus] = useState<Status>("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        try { await createContact(form); setStatus("success"); setForm(EMPTY); }
        catch { setStatus("error"); }
    };

    const inputClass =
        "w-full bg-[#0B1120] border border-[rgba(255,255,255,0.07)] rounded-lg px-4 py-3 text-sm text-white placeholder-[#334155] outline-none focus:border-[rgba(103,232,249,0.3)] transition-colors";

    return (
        <section id="contact" className="py-28 px-6 md:px-16 lg:px-24 border-t border-[rgba(255,255,255,0.06)]">
            <div className="max-w-4xl mx-auto">

                <motion.div {...fade()} className="mb-12">
                    <p className="section-label">Contact</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Let&apos;s <span className="text-accent-word">connect.</span>
                    </h2>
                    <p className="text-[#94A3B8] text-sm mt-3 max-w-md">
                        Open to discussing AI architectures, LLM systems, and backend engineering.
                    </p>
                </motion.div>

                {/* Socials */}
                <motion.div {...fade(0.06)} className="flex flex-wrap gap-3 mb-12">
                    {socials.map(({ href, Icon, label }) => (
                        <a key={href} href={href} target="_blank" rel="noreferrer"
                            className="btn-ghost text-sm text-[#94A3B8] hover:text-white">
                            <Icon className="w-4 h-4" />
                            {label}
                        </a>
                    ))}
                </motion.div>

                {/* Form */}
                <motion.form
                    {...fade(0.1)}
                    onSubmit={handleSubmit}
                    className="space-y-4 max-w-xl"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#475569] mb-2">Name</label>
                            <input type="text" name="name" value={form.name} onChange={handleChange}
                                placeholder="Your name" required className={inputClass} />
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#475569] mb-2">Email</label>
                            <input type="email" name="email" value={form.email} onChange={handleChange}
                                placeholder="you@example.com" required className={inputClass} />
                        </div>
                    </div>
                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#475569] mb-2">Message</label>
                        <textarea name="message" value={form.message} onChange={handleChange}
                            placeholder="What would you like to discuss?" required rows={5}
                            className={`${inputClass} resize-none`} />
                    </div>

                    {status === "success" && (
                        <p className="text-xs text-green-400 py-2">Sent — I&apos;ll get back to you soon.</p>
                    )}
                    {status === "error" && (
                        <p className="text-xs text-red-400 py-2">Something went wrong — try emailing me directly.</p>
                    )}

                    <button type="submit" disabled={status === "sending"}
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                        <Icons.Send className="w-4 h-4" />
                        {status === "sending" ? "Sending…" : "Send Message"}
                    </button>
                </motion.form>

                <div className="mt-20 text-[#334155] text-xs">
                    © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Sinu Arlow Baby.
                    Built with Next.js, FastAPI &amp; purpose.
                </div>
            </div>
        </section>
    );
}
