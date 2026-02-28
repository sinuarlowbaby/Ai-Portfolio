from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# Use SQLite for local development by default
# For PostgreSQL: "postgresql://user:password@host:port/database"
SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
