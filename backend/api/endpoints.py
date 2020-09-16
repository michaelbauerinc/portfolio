from flask_restful import Resource
from run import db
from api.endpoint_methods import TestViewMethods


class Test(TestViewMethods, Resource):
    def get(self):
        return self.test_endpoint()
