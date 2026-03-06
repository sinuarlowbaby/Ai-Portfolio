"""
data_store.py — Database-less data layer.

Data lives in backend/data/projects.json and backend/data/skills.json.
To add/edit/remove projects or skills, just edit those files — no migrations needed.
"""

import json
import os
from typing import Any

# Resolve path to the data/ directory relative to this file's location
_DATA_DIR = os.path.join(os.path.dirname(__file__), "..", "data")


def _load(filename: str) -> Any:
    path = os.path.join(_DATA_DIR, filename)
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def load_projects() -> list[dict]:
    """Return all projects from projects.json."""
    return _load("projects.json")


def load_skills() -> dict[str, list[str]]:
    """Return skills grouped by layer from skills.json."""
    return _load("skills.json")
