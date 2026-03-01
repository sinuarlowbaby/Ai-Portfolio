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
    skills_query = db.query(models.Skill).all()

    if not skills_query:
        # Fallback so frontend always gets data even before seeding
        return {
            "ai":       ["LangChain", "RAG Pipelines", "OpenAI API", "HuggingFace", "Prompt Engineering"],
            "backend":  ["FastAPI", "Python", "Django", "REST API", "SQLAlchemy"],
            "database": ["PostgreSQL", "SQLite", "MySQL", "ChromaDB", "FAISS"],
            "tools":    ["Git", "Docker", "Linux", "GitHub Actions"],
        }

    grouped: dict[str, list[str]] = defaultdict(list)
    for skill in skills_query:
        grouped[skill.layer].append(skill.name)

    return dict(grouped)
