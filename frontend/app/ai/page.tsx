"use client";

import Navbar from "@/app/components/Navbar";
import ChatBox from "@/app/components/ChatBox";
import { Icons } from "@/app/components/ui/Icons";

export default function AIPage() {
    return (
        <>
            <Navbar />
            <main className="relative min-h-screen bg-[#030014] pt-24 pb-16 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-2xl mx-auto relative">
                    <div className="text-center mb-12">
                        <div className="inline-flex p-3 rounded-2xl bg-primary/10 border border-primary/20 mb-5">
                            <Icons.Sparkles className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-gradient">AI Demo</span>
                        </h1>
                        <p className="text-gray-400 leading-relaxed">
                            Powered by a FastAPI backend. Ask anything about GenAI, my projects, or tech stacks.
                        </p>
                    </div>

                    <ChatBox />

                    <p className="text-center text-gray-600 text-xs mt-6">
                        Backend endpoint: <code className="text-primary/70">POST /ai/chat</code>
                    </p>
                </div>
            </main>
        </>
    );
}
