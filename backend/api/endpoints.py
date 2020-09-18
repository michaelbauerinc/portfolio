from flask_restful import Resource
from run import db
from api.endpoint_methods.email_methods import EmailMethods
import json
from flask import request


class EndpointDataHandler(object):
    """
    It sets data as a class variable which is directly accessible in view methods classes
    Attributes:
        data: The request data sent from frontend.
    """

    def __init__(self):
        self.data = None
        self.get_data_or_query_params_from_request()

    # @log()
    def get_data_or_query_params_from_request(self):
        if request.args:
            self.data = self.get_query_parameters_from_request()
        else:
            self.data = self.get_data_from_request()

    def get_data_from_request(self):
        if request.data:
            return json.loads(request.data)
        else:
            return json.loads("{}")

    def get_query_parameters_from_request(self):
        data = request.args.to_dict()
        for key, value in data.items():
            try:
                data[key] = json.loads(value)
            except JSONDecodeError:
                logger.debug(
                    f"could not parse string as JSON, leaving as string: {value}"
                )
        return data


class Email(EmailMethods, EndpointDataHandler, Resource):
    """
    Handles sending email data from frontend
    """

    def post(self):
        return self.send_email()
