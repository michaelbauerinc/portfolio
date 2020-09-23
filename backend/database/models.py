from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from run import db


class Demo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    message = db.Column(db.String(120), unique=False, nullable=False)

    def __repr__(self):
        return "<User %r>" % self.name

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

