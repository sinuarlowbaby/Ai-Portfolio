import projectsData from "../data/projects.json";
import skillsData from "../data/skills.json";

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
    [layer: string]: string[];
}

export interface ContactPayload {
    name: string;
    email: string;
    message: string;
}

// ─── Data Access ──────────────────────────────────────────────────────────────

export const getProjects = async (): Promise<Project[]> => {
    return projectsData as Project[];
};

export const getSkills = async (): Promise<SkillsResponse> => {
    return skillsData as unknown as SkillsResponse;
};

// ─── API Routes (Next.js Serverless) ──────────────────────────────────────────

async function internalFetch<T>(path: string, init?: RequestInit): Promise<T> {
    const res = await fetch(path, {
        headers: { "Content-Type": "application/json" },
        ...init,
    });
    if (!res.ok) throw new Error(`API error ${res.status}: ${path}`);
    return res.json() as Promise<T>;
}

export const createContact = (data: ContactPayload) =>
    internalFetch<{ message: string }>("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
    });

export const askAI = (question: string) =>
    internalFetch<{ answer: string }>("/api/ai/chat", {
        method: "POST",
        body: JSON.stringify({ question }),
    });
