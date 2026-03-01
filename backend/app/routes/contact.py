from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import models, schemas
from ..dependencies import get_db

router = APIRouter(prefix="/contact", tags=["Contact"])

@router.post("/")
def submit_contact(contact: schemas.ContactCreate, db: Session = Depends(get_db)):
    new_contact = models.Contact(**contact.model_dump())
    db.add(new_contact)
    db.commit()
    db.refresh(new_contact)
    return {"message": "Contact saved successfully"}
