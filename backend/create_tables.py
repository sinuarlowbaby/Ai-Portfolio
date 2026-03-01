from app.database import engine, Base
from app import models

print("Creating tables on Supabase instance...")
try:
    Base.metadata.create_all(bind=engine)
    print("Tables created successfully!")
except Exception as e:
    print(f"Failed to create tables: {e}")
