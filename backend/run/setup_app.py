from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask("Bauer")
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////backend/database/database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)
