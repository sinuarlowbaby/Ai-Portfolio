"""
contact.py — Contact form endpoint.

Currently logs the message to stdout and returns a success response.
To add auto-mailing, set CONTACT_EMAIL in .env and integrate an SMTP
or email service (e.g. SendGrid, Resend) here later.
"""

import logging
from fastapi import APIRouter
from .. import schemas

router = APIRouter(prefix="/contact", tags=["Contact"])

logger = logging.getLogger(__name__)


@router.post("/")
def submit_contact(contact: schemas.ContactCreate):
    """
    Accept a contact form submission.
    Logs the message. Auto-email will be added in a future update.
    """
    logger.info(
        "New contact from %s <%s>: %s",
        contact.name,
        contact.email,
        contact.message,
    )
    # TODO: Add auto-mailing here when ready.
    # e.g. send_email(to=CONTACT_EMAIL, subject=..., body=...)
    return {
        "message": f"Thanks {contact.name}! Your message has been received. I'll reply to {contact.email} soon."
    }
