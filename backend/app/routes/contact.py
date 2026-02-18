from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from .. import models, schemas
from ..dependencies import get_db
import time
from collections import defaultdict

router = APIRouter(prefix="/contact", tags=["Contact"])

# ─── Simple in-memory rate limiter ───────────────────────────────────────────
# Allows max 3 submissions per IP per 10 minutes
_rate_store: dict[str, list[float]] = defaultdict(list)
RATE_LIMIT = 3
RATE_WINDOW = 600  # seconds

def _check_rate_limit(request: Request):
    ip = request.client.host if request.client else "unknown"
    now = time.time()
    timestamps = _rate_store[ip]
    # Remove timestamps outside the window
    _rate_store[ip] = [t for t in timestamps if now - t < RATE_WINDOW]
    if len(_rate_store[ip]) >= RATE_LIMIT:
        raise HTTPException(
            status_code=429,
            detail="Too many requests. Please wait before submitting again."
        )
    _rate_store[ip].append(now)

@router.post("/")
def submit_contact(
    contact: schemas.ContactCreate,
    request: Request,
    db: Session = Depends(get_db),
):
    _check_rate_limit(request)

    # Sanitise — strip whitespace, enforce length limits
    name = contact.name.strip()[:100]
    email = contact.email.strip()[:254]
    message = contact.message.strip()[:2000]

    if not name or not email or not message:
        raise HTTPException(status_code=422, detail="All fields are required.")

    db_contact = models.Contact(name=name, email=email, message=message)
    db.add(db_contact)
    db.commit()
    return {"message": "Message received. Thank you!"}
