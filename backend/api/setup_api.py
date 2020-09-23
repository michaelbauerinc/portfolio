from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from run import app, db
from api.endpoints import Email, Demo

api = Api(app)


def setup_api():
    api.add_resource(Email, "/email")
    api.add_resource(Demo, "/demo")
