"""
Run this once to seed the database with sample projects and skills:
  cd backend
  python seed.py
"""

import sys, os
sys.path.insert(0, os.path.dirname(__file__))

from app.database import SessionLocal, engine, Base
from app.models import Skill, Project

Base.metadata.create_all(bind=engine)

SKILLS = [
    {"layer": "AI / GenAI",    "name": "LangChain",          "color": "#a855f7"},
    {"layer": "AI / GenAI",    "name": "LlamaIndex",         "color": "#a855f7"},
    {"layer": "AI / GenAI",    "name": "OpenAI API",         "color": "#a855f7"},
    {"layer": "AI / GenAI",    "name": "Gemini API",         "color": "#a855f7"},
    {"layer": "AI / GenAI",    "name": "HuggingFace",        "color": "#a855f7"},
    {"layer": "AI / GenAI",    "name": "RAG Pipelines",      "color": "#a855f7"},
    {"layer": "AI / GenAI",    "name": "Prompt Engineering", "color": "#a855f7"},
    {"layer": "AI / GenAI",    "name": "Vector Databases",   "color": "#a855f7"},

    {"layer": "Backend",       "name": "FastAPI",            "color": "#06b6d4"},
    {"layer": "Backend",       "name": "Python",             "color": "#06b6d4"},
    {"layer": "Backend",       "name": "SQLAlchemy",         "color": "#06b6d4"},
    {"layer": "Backend",       "name": "Django",             "color": "#06b6d4"},
    {"layer": "Backend",       "name": "REST API",           "color": "#06b6d4"},

    {"layer": "Frontend",      "name": "Next.js",            "color": "#f59e0b"},
    {"layer": "Frontend",      "name": "React",              "color": "#f59e0b"},

    {"layer": "Database",      "name": "PostgreSQL",         "color": "#10b981"},
    {"layer": "Database",      "name": "SQLite",             "color": "#10b981"},
    {"layer": "Database",      "name": "MySQL",              "color": "#10b981"},
    {"layer": "Database",      "name": "ChromaDB",           "color": "#10b981"},
    {"layer": "Database",      "name": "FAISS",              "color": "#10b981"},

    {"layer": "DevOps / Tools","name": "Git",                "color": "#ef4444"},
    {"layer": "DevOps / Tools","name": "Docker",             "color": "#ef4444"},
    {"layer": "DevOps / Tools","name": "GitHub Actions",     "color": "#ef4444"},
]

PROJECTS = [
    {
        "slug": "rag-chatbot",
        "title": "Custom RAG Chatbot",
        "subtitle": "AI Retrieval System",
        "description": "Context-aware chatbot that queries custom datasets using retrieval pipelines and vector search.",
        "overview": "Built with LangChain, FAISS, and FastAPI. Supports document ingestion, chunking, embedding, and real-time retrieval-augmented generation.",
        "tags": "LangChain,LLMs,Vector DB,FastAPI,Python",
        "github_url": "https://github.com/sinuarlowbaby",
        "demo_url": "#",
        "banner_accent": "#a855f7",
        "banner_gradient": "from-primary/20 to-secondary/10",
    },
    {
        "slug": "oneide",
        "title": "OneIDE",
        "subtitle": "Full Stack Online Compiler",
        "description": "A secure online compiler platform with authentication, session management, and guest mode execution.",
        "overview": "Supports multiple programming languages with real-time output. Built with Django, Python, and MySQL.",
        "tags": "Django,Python,MySQL,REST API",
        "github_url": "https://github.com/sinuarlowbaby/OneIDE---Online_Compiler-",
        "demo_url": "#",
        "banner_accent": "#3b82f6",
        "banner_gradient": "from-secondary/20 to-primary/10",
    }
]

from app.database import supabase

def seed():
    try:
        # ── Skills ──────────────────────────────────────────────────────────
        print("Clearing existing skills (if any)...")
        # Supabase requires a filter for deletes. We'll delete where id > 0
        supabase.table("skills").delete().gt("id", 0).execute()
        
        print(f"Inserting {len(SKILLS)} skills...")
        supabase.table("skills").insert(SKILLS).execute()
        print("✓ Seeded skills")

        # ── Projects ─────────────────────────────────────────────────────────
        print("Clearing existing projects (if any)...")
        supabase.table("projects").delete().gt("id", 0).execute()

        print(f"Inserting {len(PROJECTS)} projects...")
        supabase.table("projects").insert(PROJECTS).execute()
        print("✓ Seeded projects")

        print("\nDone! Refresh your frontend to see the data.")
    except Exception as e:
        print(f"\nError seeding database: {e}")
        print("Note: Before you can seed the data, you must manually create the 'projects' and 'skills' tables in your Supabase UI.")


if __name__ == "__main__":
    seed()
