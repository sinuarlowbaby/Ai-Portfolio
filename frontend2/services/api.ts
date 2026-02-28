const BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Project {
    id: number;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    overview: string;
    tags: string;           // comma-separated
    github_url: string;
    demo_url: string;
    banner_accent: string;
    banner_gradient: string;
}

export interface SkillsResponse {
    backend: string[];
    ai: string[];
    database: string[];
    tools: string[];
}

export interface ContactPayload {
    name: string;
    email: string;
    message: string;
}

// ─── API Calls ────────────────────────────────────────────────────────────────

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
    const res = await fetch(`${BASE}${path}`, {
        headers: { "Content-Type": "application/json" },
        ...init,
    });
    if (!res.ok) throw new Error(`API error ${res.status}: ${path}`);
    return res.json() as Promise<T>;
}

export const getProjects = () => apiFetch<Project[]>("/projects/");

export const getSkills = () => apiFetch<SkillsResponse>("/skills/");

export const createContact = (data: ContactPayload) =>
    apiFetch<{ message: string }>("/contact/", {
        method: "POST",
        body: JSON.stringify(data),
    });

export const askAI = (question: string) =>
    apiFetch<{ answer: string }>("/ai/chat", {
        method: "POST",
        body: JSON.stringify({ question }),
    });
