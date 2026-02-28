from pydantic import BaseModel
from typing import Optional

# ─── Projects ─────────────────────────────────────────────────────────────────

class ProjectBase(BaseModel):
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

class ProjectCreate(ProjectBase):
    pass

class ProjectResponse(ProjectBase):
    id: int
    class Config:
        from_attributes = True

# ─── Skills ───────────────────────────────────────────────────────────────────

class SkillBase(BaseModel):
    layer: str
    name: str
    color: Optional[str] = None

class SkillCreate(SkillBase):
    pass

class SkillResponse(SkillBase):
    id: int
    class Config:
        from_attributes = True

# ─── Contact ──────────────────────────────────────────────────────────────────

class ContactCreate(BaseModel):
    name: str
    email: str
    message: str

class ContactResponse(ContactCreate):
    id: int
    class Config:
        from_attributes = True

# ─── AI ───────────────────────────────────────────────────────────────────────

class AIRequest(BaseModel):
    question: str