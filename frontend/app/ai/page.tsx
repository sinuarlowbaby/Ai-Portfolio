"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import { askAI } from "@/services/api";

interface Message {
  role: "user" | "ai";
  text: string;
}

const SUGGESTIONS = [
  "What projects have you built?",
  "What is your AI specialization?",
  "What backend technologies do you use?",
  "Tell me about your RAG chatbot project.",
];

export default function AIPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Hi! I'm Sinu's AI assistant. Ask me anything about his skills, projects, or experience.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text: string) => {
    const question = text.trim();
    if (!question || loading) return;

    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setInput("");
    setLoading(true);

    try {
      const res = await askAI(question);
      setMessages((prev) => [...prev, { role: "ai", text: res.answer }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Sorry, I couldn't connect to the server. Make sure the backend is running." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#030014] pt-20 flex flex-col">
        {/* Header */}
        <div className="max-w-3xl mx-auto w-full px-6 pt-10 pb-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            <span className="text-gradient">Ask AI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-sm"
          >
            Chat with an AI that knows Sinu's portfolio, skills, and projects.
          </motion.p>
        </div>

        {/* Suggestion chips — only shown before first user message */}
        {messages.length === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto w-full px-6 pb-4 flex flex-wrap gap-2 justify-center"
          >
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="text-xs px-4 py-2 rounded-full border border-white/10 bg-white/4 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all"
              >
                {s}
              </button>
            ))}
          </motion.div>
        )}

        {/* Chat window */}
        <div className="flex-1 max-w-3xl mx-auto w-full px-6 pb-4 overflow-y-auto space-y-4">
          <AnimatePresence initial={false}>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "ai" && (
                  <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs mr-2.5 mt-0.5 shrink-0">
                    AI
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === "user"
                      ? "bg-primary/15 border border-primary/30 text-white rounded-tr-sm"
                      : "bg-white/5 border border-white/10 text-gray-200 rounded-tl-sm"
                    }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing indicator */}
          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs mr-2.5 mt-0.5 shrink-0">
                AI
              </div>
              <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-white/5 border border-white/10 flex items-center gap-1.5">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: `${d * 0.15}s` }}
                  />
                ))}
              </div>
            </motion.div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input bar */}
        <div className="max-w-3xl mx-auto w-full px-6 pb-10">
          <div className="flex items-center gap-3 p-2 rounded-2xl bg-white/5 border border-white/10 focus-within:border-primary/40 transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask something about Sinu..."
              disabled={loading}
              className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder-gray-600 outline-none disabled:opacity-50"
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim() || loading}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30 hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              Send
            </button>
          </div>
          <p className="text-center text-gray-700 text-xs mt-3">
            Press <kbd className="px-1.5 py-0.5 rounded bg-white/8 border border-white/10 text-gray-500 font-mono text-[10px]">Enter</kbd> to send
          </p>
        </div>
      </main>
    </>
  );
}
