from fastapi import FastAPI
from . import models
from .routes import projects, skills, contact, ai
from .database import engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(projects.router)
app.include_router(contact.router)
app.include_router(skills.router)
app.include_router(ai.router)

@app.get("/")
def read_root():
    return {"Hello": "World"}