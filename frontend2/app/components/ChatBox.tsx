"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "./ui/Icons";
import { askAI } from "@/services/api";

interface Message { role: "user" | "ai"; text: string; }

export default function ChatBox() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const send = async () => {
        const q = input.trim();
        if (!q || loading) return;
        setInput("");
        setMessages((m) => [...m, { role: "user", text: q }]);
        setLoading(true);
        try {
            const { answer } = await askAI(q);
            setMessages((m) => [...m, { role: "ai", text: answer }]);
        } catch {
            setMessages((m) => [...m, { role: "ai", text: "⚠️ Backend error. Is the server running?" }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-[60vh] max-w-2xl mx-auto rounded-2xl border border-white/10 bg-white/3 overflow-hidden">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.length === 0 && (
                    <p className="text-center text-gray-600 text-sm mt-8">Ask me anything about GenAI, FastAPI, or my projects.</p>
                )}
                <AnimatePresence>
                    {messages.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${m.role === "user"
                                    ? "bg-primary/20 border border-primary/30 text-white"
                                    : "bg-white/5 border border-white/10 text-gray-300"
                                }`}>
                                {m.text}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {loading && (
                    <div className="flex justify-start">
                        <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl flex gap-1">
                            {[0, 0.2, 0.4].map((d, i) => (
                                <span key={i} className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: `${d}s` }} />
                            ))}
                        </div>
                    </div>
                )}
                <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 flex gap-3">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && send()}
                    placeholder="Ask a question..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-primary/50 transition-all"
                />
                <button
                    onClick={send}
                    disabled={loading || !input.trim()}
                    className="px-4 py-3 rounded-xl bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                    aria-label="Send"
                >
                    <Icons.Send className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
