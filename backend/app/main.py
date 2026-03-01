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
        "https://your-app.vercel.app",  # ← replace with your real Vercel URL after deploying
    ],
    allow_origin_regex=r"http://localhost:\d+",
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

