"""
schemas.py — Pydantic request/response models.
No database ORM references.
"""

from pydantic import BaseModel
from typing import Optional

# ─── Projects ────────────────────────────────────────────────────────────────

class ProjectResponse(BaseModel):
    id: int
    slug: str
    title: str
    subtitle: Optional[str] = None
    description: Optional[str] = None
    overview: Optional[str] = None
    tags: Optional[str] = None           # comma-separated: "FastAPI,Python,SQLite"
    github_url: Optional[str] = None
    demo_url: Optional[str] = None
    banner_accent: Optional[str] = None  # hex color e.g. "#4f8ef7"
    banner_gradient: Optional[str] = None

# ─── Contact ─────────────────────────────────────────────────────────────────

class ContactCreate(BaseModel):
    name: str
    email: str
    message: str

# ─── AI ──────────────────────────────────────────────────────────────────────

class AIRequest(BaseModel):
    question: str