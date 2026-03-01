import os
from dotenv import load_dotenv
from sqlalchemy import create_engine

load_dotenv()
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")
print(f"Connecting to: {SQLALCHEMY_DATABASE_URL}")

try:
    engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={'connect_timeout': 5})
    connection = engine.connect()
    print("Connection successful!")
    connection.close()
except Exception as e:
    print(f"Connection failed: {e}")
