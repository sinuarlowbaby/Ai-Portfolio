import sys

try:
    import app.database
    print("Database imported successfully")
except Exception as e:
    print(f"Error importing database: {e}")

try:
    import app.main
    print("Main imported successfully")
except Exception as e:
    print(f"Error importing main: {e}")
