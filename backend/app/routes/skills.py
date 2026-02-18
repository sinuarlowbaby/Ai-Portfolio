from fastapi import APIRouter

router = APIRouter(prefix="/skills", tags=["Skills"])

@router.get("/")
def get_skills():
    return {
        "backend": ["FastAPI", "Django", "REST APIs"],
        "ai": ["RAG", "LLMs", "LangChain"],
        "database": ["PostgreSQL", "MySQL", "SQLite"],
        "tools": ["Docker", "Git", "Postman"]
    }
