from sqlalchemy import Column, Integer, String, Text
from .database import Base


class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    slug = Column(String, unique=True, index=True, nullable=False)
    title = Column(String, nullable=False)
    subtitle = Column(String)
    description = Column(Text)
    overview = Column(Text)
    tags = Column(String)           # comma-separated: "FastAPI,Python,SQLite"
    github_url = Column(String)
    demo_url = Column(String)
    banner_accent = Column(String)  # hex color e.g. "#4f8ef7"
    banner_gradient = Column(String)  # tailwind classes


class Skill(Base):
    __tablename__ = "skills"

    id = Column(Integer, primary_key=True, index=True)
    layer = Column(String, nullable=False)   # e.g. "AI / GenAI"
    name = Column(String, nullable=False)    # e.g. "LangChain"
    color = Column(String)                   # e.g. "#a855f7"


class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    message = Column(Text, nullable=False)