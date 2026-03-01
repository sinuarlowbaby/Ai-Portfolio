from fastapi import FastAPI
from . import models
from .routes import projects, skills, contact, ai
from .database import supabase
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:8000",
        "https://ai-portfolio-23ov.onrender.com",  # Render backend
        "https://sinuarlowbaby.vercel.app",  # Vercel main domain
    ],
    allow_origin_regex=r"(http://localhost:\d+|https://.*\.vercel\.app)",  # all Vercel preview URLs
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
    return {"Hello": "World"}

