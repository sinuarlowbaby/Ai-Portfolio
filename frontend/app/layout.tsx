import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GenAI Developer | FastAPI | LLM Architectures | Sinu Arlow Baby",
  description: "Portfolio of Sinu Arlow Baby — GenAI Application Developer specializing in LLM pipelines, RAG architectures, and production FastAPI backends.",
  keywords: ["GenAI", "LLM", "RAG", "FastAPI", "AI Engineer", "Sinu Arlow Baby", "LangChain", "Vector DB"],
  authors: [{ name: "Sinu Arlow Baby" }],
  openGraph: {
    title: "Sinu Arlow Baby | GenAI Application Developer",
    description: "Designing production-ready GenAI systems — LLM pipelines, RAG architectures, and intelligent backend APIs.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen antialiased selection:bg-primary/30 selection:text-white">
        {children}
      </body>
    </html>
  )
}
