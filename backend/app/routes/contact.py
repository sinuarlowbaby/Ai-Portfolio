from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import models, schemas
from ..dependencies import get_db

router = APIRouter(prefix="/contact", tags=["Contact"])

@router.post("/")
def submit_contact(contact: schemas.ContactCreate, db: Session = Depends(get_db)):
    db_contact = models.Contact(**contact.model_dump())
    db.add(db_contact)
    db.commit()
    return {"message": "Contact saved successfully"}
