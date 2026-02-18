from fastapi import APIRouter, HTTPException, Request
from ..schemas import AIRequest
import time
from collections import defaultdict

router = APIRouter(prefix="/ai", tags=["AI"])

# ─── Rate limiter: 10 requests per minute per IP ──────────────────────────────
_rate_store: dict[str, list[float]] = defaultdict(list)
RATE_LIMIT = 10
RATE_WINDOW = 60

def _check_rate_limit(request: Request):
    ip = request.client.host if request.client else "unknown"
    now = time.time()
    _rate_store[ip] = [t for t in _rate_store[ip] if now - t < RATE_WINDOW]
    if len(_rate_store[ip]) >= RATE_LIMIT:
        raise HTTPException(status_code=429, detail="Rate limit exceeded. Try again in a minute.")
    _rate_store[ip].append(now)

@router.post("/chat")
def chat_ai(request_body: AIRequest, request: Request):
    _check_rate_limit(request)

    question = request_body.question.strip()[:500]  # Cap question length
    if not question:
        raise HTTPException(status_code=422, detail="Question cannot be empty.")

    # TODO: Replace with real LLM integration
    return {
        "answer": (
            "I'm Sinu Arlow Baby's AI assistant. I can answer questions about "
            "his GenAI projects, FastAPI backends, and RAG architectures. "
            "Full LLM integration coming soon!"
        )
    }
