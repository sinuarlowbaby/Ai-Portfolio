from fastapi import FastAPI
from .routes import projects, skills, contact, ai
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="AI Portfolio API", version="2.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:8000",
        "https://ai-portfolio-23ov.onrender.com",  # Render backend
        "https://sinuarlowbaby.vercel.app",         # Vercel main domain
    ],
    allow_origin_regex=r"(http://localhost:\d+|https://.*\.vercel\.app)",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(projects.router)
app.include_router(contact.router)
app.include_router(skills.router)
app.include_router(ai.router)


@app.get("/")
def read_root():
    return {"status": "ok", "message": "AI Portfolio API — database-less mode"}
