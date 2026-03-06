from fastapi import APIRouter
from .. import schemas
from ..data_store import load_projects

router = APIRouter(prefix="/projects", tags=["Projects"])


@router.get("/", response_model=list[schemas.ProjectResponse])
def get_projects():
    """Return all projects from data/projects.json."""
    return load_projects()
