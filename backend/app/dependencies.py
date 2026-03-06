"""
dependencies.py — Dependency stubs (kept for future use).
No database session needed in the database-less architecture.
"""

# Contact email config (add CONTACT_EMAIL to .env when ready for auto-mailing)
import os
from dotenv import load_dotenv

load_dotenv()

CONTACT_EMAIL = os.getenv("CONTACT_EMAIL", "")
