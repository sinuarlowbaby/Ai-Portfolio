from fastapi import APIRouter
from ..schemas import AIRequest

router = APIRouter(prefix="/ai", tags=["AI"])

@router.post("/chat")
def chat_ai(request: AIRequest):
    # Replace this with real LLM later
    return {
        "answer": f"You asked: {request.question}. This is a placeholder AI response."
    }
