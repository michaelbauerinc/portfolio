from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)


class HelloWorld(Resource):
    def get(self):
        return {"hello": "world"}


class Test(Resource):
    def get(self):
        return {"test": "test"}


api.add_resource(HelloWorld, "/")
api.add_resource(Test, "/test")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
