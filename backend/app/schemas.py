from pydantic import BaseModel, EmailStr, Field, field_validator
import re

# ─── Projects ─────────────────────────────────────────────────────────────────
class ProjectBase(BaseModel):
    title: str = Field(..., max_length=200)
    description: str = Field(..., max_length=2000)
    image_url: str = Field("", max_length=500)
    project_url: str = Field("", max_length=500)
    tech_stack: str = Field("", max_length=500)

class ProjectCreate(ProjectBase):
    pass

class ProjectUpdate(ProjectBase):
    pass

class Project(ProjectBase):
    id: int
    class Config:
        from_attributes = True

class ProjectResponse(Project):
    pass

# ─── AI ───────────────────────────────────────────────────────────────────────
class AIRequest(BaseModel):
    question: str = Field(..., min_length=1, max_length=500, strip_whitespace=True)

# ─── Contact ──────────────────────────────────────────────────────────────────
class ContactBase(BaseModel):
    name: str = Field(..., min_length=1, max_length=100, strip_whitespace=True)
    email: EmailStr                         # Validates real email format
    message: str = Field(..., min_length=10, max_length=2000, strip_whitespace=True)

    @field_validator("name")
    @classmethod
    def name_no_html(cls, v: str) -> str:
        # Reject anything that looks like an HTML/script tag
        if re.search(r"<[^>]+>", v):
            raise ValueError("Name must not contain HTML tags.")
        return v

    @field_validator("message")
    @classmethod
    def message_no_scripts(cls, v: str) -> str:
        if re.search(r"<script", v, re.IGNORECASE):
            raise ValueError("Message must not contain script tags.")
        return v

class ContactCreate(ContactBase):
    pass

class ContactUpdate(ContactBase):
    pass

class Contact(ContactBase):
    id: int
    class Config:
        from_attributes = True