from pydantic import BaseModel

class ProjectBase(BaseModel):
    title: str
    description: str
    image_url: str
    project_url: str
    tech_stack: str
    
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

class AIRequest(BaseModel):
    question: str

class ContactBase(BaseModel):
    name: str
    email: str
    message: str
    
class ContactCreate(ContactBase):
    pass

class ContactUpdate(ContactBase):
    pass

class Contact(ContactBase):
    id: int
    class Config:
        from_attributes = True