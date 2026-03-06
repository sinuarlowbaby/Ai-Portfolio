from fastapi import APIRouter
from ..data_store import load_skills

router = APIRouter(prefix="/skills", tags=["Skills"])


@router.get("/")
def get_skills():
    """Return skills grouped by layer from data/skills.json."""
    return load_skills()
