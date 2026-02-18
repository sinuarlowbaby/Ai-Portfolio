"""
Run this once to seed the skills table:
  cd backend
  python seed.py
"""

import sys
import os

# Make sure the app package is importable
sys.path.insert(0, os.path.dirname(__file__))

from app.database import SessionLocal, engine, Base
from app.models import Skill

# Create tables if they don't exist yet
Base.metadata.create_all(bind=engine)

SKILLS = [
    # AI / GenAI Layer
    {"layer": "AI / GenAI", "name": "LangChain",          "color": "#a855f7"},
    {"layer": "AI / GenAI", "name": "LlamaIndex",         "color": "#a855f7"},
    {"layer": "AI / GenAI", "name": "OpenAI API",         "color": "#a855f7"},
    {"layer": "AI / GenAI", "name": "Gemini API",         "color": "#a855f7"},
    {"layer": "AI / GenAI", "name": "HuggingFace",        "color": "#a855f7"},
    {"layer": "AI / GenAI", "name": "RAG Pipelines",      "color": "#a855f7"},
    {"layer": "AI / GenAI", "name": "Prompt Engineering", "color": "#a855f7"},
    {"layer": "AI / GenAI", "name": "Vector Databases",   "color": "#a855f7"},

    # Backend
    {"layer": "Backend",    "name": "FastAPI",            "color": "#06b6d4"},
    {"layer": "Backend",    "name": "Python",             "color": "#06b6d4"},
    {"layer": "Backend",    "name": "SQLAlchemy",         "color": "#06b6d4"},
    {"layer": "Backend",    "name": "Pydantic",           "color": "#06b6d4"},
    {"layer": "Backend",    "name": "REST API",           "color": "#06b6d4"},
    {"layer": "Backend",    "name": "Django",             "color": "#06b6d4"},
    {"layer": "Backend",    "name": "WebSockets",         "color": "#06b6d4"},

    # Frontend
    {"layer": "Frontend",   "name": "Next.js",            "color": "#f59e0b"},
    {"layer": "Frontend",   "name": "React",              "color": "#f59e0b"},
    {"layer": "Frontend",   "name": "TypeScript",         "color": "#f59e0b"},
    {"layer": "Frontend",   "name": "Tailwind CSS",       "color": "#f59e0b"},
    {"layer": "Frontend",   "name": "Framer Motion",      "color": "#f59e0b"},

    # Database
    {"layer": "Database",   "name": "PostgreSQL",         "color": "#10b981"},
    {"layer": "Database",   "name": "SQLite",             "color": "#10b981"},
    {"layer": "Database",   "name": "MySQL",              "color": "#10b981"},
    {"layer": "Database",   "name": "ChromaDB",           "color": "#10b981"},
    {"layer": "Database",   "name": "FAISS",              "color": "#10b981"},

    # DevOps / Tools
    {"layer": "DevOps / Tools", "name": "Git",            "color": "#ef4444"},
    {"layer": "DevOps / Tools", "name": "Docker",         "color": "#ef4444"},
    {"layer": "DevOps / Tools", "name": "Linux",          "color": "#ef4444"},
    {"layer": "DevOps / Tools", "name": "GitHub Actions", "color": "#ef4444"},
]


def seed():
    db = SessionLocal()
    try:
        existing = db.query(Skill).count()
        if existing > 0:
            print(f"WARNING: Skills table already has {existing} rows. Clearing and re-seeding...")
            db.query(Skill).delete()
            db.commit()

        for s in SKILLS:
            db.add(Skill(**s))
        db.commit()
        print(f"OK: Seeded {len(SKILLS)} skills successfully.")
    finally:
        db.close()


if __name__ == "__main__":
    seed()
