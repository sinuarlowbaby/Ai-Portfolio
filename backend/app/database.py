from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from supabase import Client, create_client
import os
from dotenv import load_dotenv

load_dotenv()

# 1. SQLAlchemy PostgreSQL Connection (This replaces SQLite)
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")

# Connect to Supabase Postgres (Make sure check_same_thread is removed, it's only for SQLite)
engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# 2. Supabase Python Client (Keep this if you use it for storage/auth)
supabase_url = os.getenv("SUPABASE_URL")
supabase_key = os.getenv("SUPABASE_KEY")

if supabase_url and supabase_key:
    supabase: Client = create_client(supabase_url, supabase_key)
else:
    supabase = None
