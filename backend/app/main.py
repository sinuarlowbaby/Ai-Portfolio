import os
from fastapi import FastAPI
from . import models
from .routes import projects, skills, contact, ai
from .database import engine, Base
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware

Base.metadata.create_all(bind=engine)

# ─── Environment ─────────────────────────────────────────────────────────────
ENV = os.getenv("ENV", "development")
IS_PROD = ENV == "production"

# ─── App ─────────────────────────────────────────────────────────────────────
app = FastAPI(
    title="AI Portfolio API",
    description="Backend API for Sinu Arlow Baby's AI portfolio.",
    version="1.0.0",
    # Disable interactive docs in production
    docs_url=None if IS_PROD else "/docs",
    redoc_url=None if IS_PROD else "/redoc",
    openapi_url=None if IS_PROD else "/openapi.json",
)

# ─── Trusted Hosts ───────────────────────────────────────────────────────────
# Prevents HTTP Host header attacks
if IS_PROD:
    allowed_hosts = os.getenv("ALLOWED_HOSTS", "localhost").split(",")
    app.add_middleware(TrustedHostMiddleware, allowed_hosts=allowed_hosts)

# ─── CORS ────────────────────────────────────────────────────────────────────
# In production, read from env; in dev, allow localhost
if IS_PROD:
    raw = os.getenv("ALLOWED_ORIGINS", "")
    origins = [o.strip() for o in raw.split(",") if o.strip()]
else:
    origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,          # No cookies/auth needed
    allow_methods=["GET", "POST"],    # Only what we actually use
    allow_headers=["Content-Type"],   # Only what we actually need
    max_age=600,                      # Cache preflight for 10 min
)

# ─── Routers ─────────────────────────────────────────────────────────────────
app.include_router(projects.router)
app.include_router(contact.router)
app.include_router(skills.router)
app.include_router(ai.router)

@app.get("/health", tags=["Health"])
def health_check():
    return {"status": "ok", "env": ENV}
