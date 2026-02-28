"""
Full database reset + seed. Run this when the schema has changed:

    cd d:\\PROJECT\\Python\\FastAPI\\ai-portfolio\\backend
    venv\\Scripts\\activate
    python reset_db.py
"""

import sys, os
sys.path.insert(0, os.path.dirname(__file__))

from app.database import engine, Base, SessionLocal
from app.models import Skill, Project, Contact   # import all models so Base knows them

# ── 1. Drop ALL tables and recreate with current schema ───────────────────────
print("Dropping all tables...")
Base.metadata.drop_all(bind=engine)

print("Recreating tables with current schema...")
Base.metadata.create_all(bind=engine)

# ── 2. Seed skills ────────────────────────────────────────────────────────────
SKILLS = [
    {"layer": "AI / GenAI",     "name": "LangChain",          "color": "#a855f7"},
    {"layer": "AI / GenAI",     "name": "LlamaIndex",         "color": "#a855f7"},
    {"layer": "AI / GenAI",     "name": "OpenAI API",         "color": "#a855f7"},
    {"layer": "AI / GenAI",     "name": "Gemini API",         "color": "#a855f7"},
    {"layer": "AI / GenAI",     "name": "HuggingFace",        "color": "#a855f7"},
    {"layer": "AI / GenAI",     "name": "RAG Pipelines",      "color": "#a855f7"},
    {"layer": "AI / GenAI",     "name": "Prompt Engineering", "color": "#a855f7"},
    {"layer": "AI / GenAI",     "name": "Vector Databases",   "color": "#a855f7"},
    {"layer": "Backend",        "name": "FastAPI",            "color": "#06b6d4"},
    {"layer": "Backend",        "name": "Python",             "color": "#06b6d4"},
    {"layer": "Backend",        "name": "SQLAlchemy",         "color": "#06b6d4"},
    {"layer": "Backend",        "name": "Django",             "color": "#06b6d4"},
    {"layer": "Backend",        "name": "REST API",           "color": "#06b6d4"},
    {"layer": "Frontend",       "name": "Next.js",            "color": "#f59e0b"},
    {"layer": "Frontend",       "name": "React",              "color": "#f59e0b"},
    {"layer": "Frontend",       "name": "TypeScript",         "color": "#f59e0b"},
    {"layer": "Frontend",       "name": "Tailwind CSS",       "color": "#f59e0b"},
    {"layer": "Frontend",       "name": "Framer Motion",      "color": "#f59e0b"},
    {"layer": "Database",       "name": "PostgreSQL",         "color": "#10b981"},
    {"layer": "Database",       "name": "SQLite",             "color": "#10b981"},
    {"layer": "Database",       "name": "MySQL",              "color": "#10b981"},
    {"layer": "Database",       "name": "ChromaDB",           "color": "#10b981"},
    {"layer": "Database",       "name": "FAISS",              "color": "#10b981"},
    {"layer": "DevOps / Tools", "name": "Git",                "color": "#ef4444"},
    {"layer": "DevOps / Tools", "name": "Docker",             "color": "#ef4444"},
    {"layer": "DevOps / Tools", "name": "Linux",              "color": "#ef4444"},
    {"layer": "DevOps / Tools", "name": "GitHub Actions",     "color": "#ef4444"},
]

# ── 3. Seed projects ──────────────────────────────────────────────────────────
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
        "description": "A secure online compiler platform with authentication, session management, and multi-language code execution.",
        "overview": "Supports Python, JavaScript, C++ and more with real-time output. Built with Django and MySQL.",
        "tags": "Django,Python,MySQL,REST API",
        "github_url": "https://github.com/sinuarlowbaby",
        "demo_url": "#",
        "banner_accent": "#3b82f6",
        "banner_gradient": "from-secondary/20 to-primary/10",
    },
    {
        "slug": "ai-portfolio",
        "title": "AI Portfolio",
        "subtitle": "This Portfolio — GenAI + FastAPI",
        "description": "Full-stack portfolio with FastAPI backend, SQLite DB, and Next.js frontend with Tailwind v4.",
        "overview": "Live projects/skills from DB, contact form, and an AI chat endpoint powered by FastAPI.",
        "tags": "FastAPI,Next.js,SQLAlchemy,Tailwind CSS,TypeScript",
        "github_url": "https://github.com/sinuarlowbaby",
        "demo_url": "#",
        "banner_accent": "#00e5ff",
        "banner_gradient": "from-accent/20 to-primary/10",
    },
]

db = SessionLocal()
try:
    for s in SKILLS:
        db.add(Skill(**s))
    db.commit()
    print(f"✓ Seeded {len(SKILLS)} skills")

    for p in PROJECTS:
        db.add(Project(**p))
    db.commit()
    print(f"✓ Seeded {len(PROJECTS)} projects")

    print("\n✅ Done! Now restart uvicorn:  uvicorn app.main:app --reload")
finally:
    db.close()
