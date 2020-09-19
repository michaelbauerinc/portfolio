from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask("Bauer")
CORS(app, origins="http://localhost")
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////backend/database/database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)
