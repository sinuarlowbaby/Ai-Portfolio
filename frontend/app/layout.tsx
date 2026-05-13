import "./globals.css";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
    title: "AI Engineer | LLM · RAG · Agentic AI | Sinu Arlow Baby",
    description: "Portfolio of Sinu Arlow Baby — AI Engineer specializing in LLM systems, multi-stage RAG pipelines, LangGraph agentic AI, and production FastAPI backends.",
    keywords: ["AI Engineer", "LLM", "RAG", "LangGraph", "FastAPI", "Agentic AI", "Sinu Arlow Baby", "GenAI"],
    authors: [{ name: "Sinu Arlow Baby" }],
    openGraph: {
        title: "Sinu Arlow Baby | AI Engineer — LLM · RAG · Agentic Systems",
        description: "Building production-grade AI systems — multi-stage RAG pipelines, LangGraph agentic workflows, and intelligent FastAPI backends.",
        type: "website",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </head>
            <body className="min-h-screen antialiased">
                {children}
                <SpeedInsights />
            </body>
        </html>
    );
}
