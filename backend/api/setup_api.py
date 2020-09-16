from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from run import app, db
from api.endpoints import Test

api = Api(app)


def setup_api():
    api.add_resource(Test, "/test")
