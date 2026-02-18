"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import { Icons } from "@/app/components/ui/Icons";
import { createContact } from "@/services/api";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
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
    <>
      <Navbar />
      <main className="min-h-screen bg-[#030014] pt-20">
        <div className="max-w-2xl mx-auto px-6 pt-12 pb-24">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-gradient">Get In Touch</span>
            </h1>
            <p className="text-gray-500 text-sm max-w-sm mx-auto">
              Open to GenAI projects, backend roles, and interesting collaborations.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            <a
              href="mailto:sinuarlowbaby.dev@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all text-sm font-medium"
            >
              <Icons.Mail className="w-4 h-4" />
              sinuarlowbaby.dev@gmail.com
            </a>
            <a
              href="https://github.com/sinuarlowbaby"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-medium text-gray-300"
            >
              <Icons.Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-medium text-gray-300"
            >
              <Icons.Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            onSubmit={handleSubmit}
            className="space-y-5 p-8 rounded-2xl bg-white/3 border border-white/8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Name
                </label>
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
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Email
                </label>
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
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-primary/50 focus:bg-primary/5 transition-all resize-none"
              />
            </div>

            {/* Success / Error feedback */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/25 text-green-400 text-sm"
              >
                <span className="font-semibold">Message sent!</span>
                <span className="text-green-500/70">I'll get back to you soon.</span>
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 text-sm"
              >
                <span className="font-semibold">Failed to send.</span>
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
        </div>
      </main>
    </>
  );
}
