from run import db
from os import path
from database.models import Demo


def create_db_if_not_exists():
    exists = path.exists("/backend/database/database.db")
    if not exists:
        print("No DB found, creating a new one in /backend/database.")
        db.create_all()
    else:
        print("DB already exists, skipping.")
