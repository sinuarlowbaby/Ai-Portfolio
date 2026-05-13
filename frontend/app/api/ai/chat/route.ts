import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { question } = body;

        if (!question) {
            return NextResponse.json({ error: "Missing question field" }, { status: 400 });
        }

        // Placeholder response matching the old backend
        return NextResponse.json({
            answer: `You asked: ${question}. This is a placeholder AI response. Integrations with OpenAI/Groq will go here.`
        });
    } catch (error) {
        console.error("AI chat error:", error);
        return NextResponse.json({ error: "Failed to process chat request." }, { status: 500 });
    }
}
