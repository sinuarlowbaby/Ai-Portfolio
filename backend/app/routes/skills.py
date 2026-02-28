from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from collections import defaultdict
from .. import models
from ..dependencies import get_db

router = APIRouter(prefix="/skills", tags=["Skills"])

@router.get("/")
def get_skills(db: Session = Depends(get_db)):
    """Return skills grouped by layer from the database.
    Falls back to hardcoded defaults if the table is empty.
    """
    rows = db.query(models.Skill).all()

    if not rows:
        # Fallback so frontend always gets data even before seeding
        return {
            "ai":       ["LangChain", "RAG Pipelines", "OpenAI API", "HuggingFace", "Prompt Engineering"],
            "backend":  ["FastAPI", "Python", "Django", "REST API", "SQLAlchemy"],
            "database": ["PostgreSQL", "SQLite", "MySQL", "ChromaDB", "FAISS"],
            "tools":    ["Git", "Docker", "Linux", "GitHub Actions"],
        }

    grouped: dict[str, list[str]] = defaultdict(list)
    for row in rows:
        grouped[row.layer].append(row.name)

    return dict(grouped)
