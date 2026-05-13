"""
contact.py — Contact form endpoint.

Sends an email using SMTP (e.g. Gmail) when the form is submitted.
Requires SMTP_EMAIL and SMTP_PASSWORD to be set in the environment.
"""

import os
import logging
import smtplib
from email.message import EmailMessage
from fastapi import APIRouter, HTTPException
from .. import schemas
from dotenv import load_dotenv

# Ensure env vars are loaded
load_dotenv()

router = APIRouter(prefix="/contact", tags=["Contact"])
logger = logging.getLogger(__name__)

# Replace this with your actual receiver email if you want to receive emails at a different address than the sender
RECEIVER_EMAIL = os.getenv("CONTACT_EMAIL", "sinuarlowbaby.dev@gmail.com")

@router.post("/")
def submit_contact(contact: schemas.ContactCreate):
    """
    Accept a contact form submission and send an email via SMTP.
    """
    logger.info("New contact from %s <%s>", contact.name, contact.email)

    smtp_email = os.getenv("SMTP_EMAIL")
    smtp_password = os.getenv("SMTP_PASSWORD")

    if not smtp_email or not smtp_password:
        logger.warning("SMTP credentials not configured. Contact form submission logged only.")
        return {
            "message": f"Thanks {contact.name}! (Simulated success - email system not configured yet)"
        }

    try:
        # Construct the email
        msg = EmailMessage()
        msg.set_content(
            f"New message from your portfolio website!\n\n"
            f"Name: {contact.name}\n"
            f"Email: {contact.email}\n\n"
            f"Message:\n{contact.message}"
        )
        msg["Subject"] = f"Portfolio Contact: {contact.name}"
        msg["From"] = smtp_email
        msg["To"] = RECEIVER_EMAIL
        msg["Reply-To"] = contact.email

        # Connect to Gmail SMTP server and send
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(smtp_email, smtp_password)
            server.send_message(msg)

        logger.info("Email sent successfully to %s", RECEIVER_EMAIL)

        return {
            "message": f"Thanks {contact.name}! Your message has been received. I'll reply to {contact.email} soon."
        }

    except Exception as e:
        logger.error("Failed to send email: %s", e)
        # Even if email fails, we might want to return 500 so the frontend knows
        raise HTTPException(status_code=500, detail="Failed to send message. Please try emailing directly.")

