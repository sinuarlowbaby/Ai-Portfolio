"""
models.py — Data schema definitions (no database ORM).

These TypedDicts document the shape of the data in backend/data/*.json.
To modify the schema, update the JSON files and these definitions together.
"""

from typing import Optional
from typing_extensions import TypedDict


class Project(TypedDict, total=False):
    id: int
    slug: str
    title: str
    subtitle: Optional[str]
    description: Optional[str]
    overview: Optional[str]
    tags: Optional[str]          # comma-separated: "FastAPI,Python"
    github_url: Optional[str]
    demo_url: Optional[str]
    banner_accent: Optional[str]  # hex color e.g. "#4f8ef7"
    banner_gradient: Optional[str]


class Skill(TypedDict):
    layer: str    # e.g. "AI / GenAI"
    name: str     # e.g. "LangChain"


class ContactMessage(TypedDict):
    name: str
    email: str
    message: str