from run import db
import os
from database.models import Demo
import random

EMAIL_ADDRESS = os.environ.get("EMAIL_ADDRESS")
EMAIL_USER = os.environ.get("EMAIL_USER")
EMAIL_PASSWORD = os.environ.get("EMAIL_PASSWORD")


class DemoMethods:
    def get_demo_item(self):
        try:
            get_random = self.data["random"]
        except KeyError:
            get_random = None
            entry_id = self.data["id"]
            name = self.data["name"].title()
        rows = []
        if get_random:
            rows = db.session.query(Demo).all()
            rows = [random.choice(rows)]
        elif entry_id and name:
            rows = (
                db.session.query(Demo)
                .filter(Demo.id == entry_id, Demo.name == name)
                .all()
            )
        elif name:
            rows = db.session.query(Demo).filter(Demo.name == name).all()
        elif entry_id:
            rows = db.session.query(Demo).filter(Demo.id == entry_id).all()
        json = [row.as_dict() for row in rows]

        return json

    def add_demo_item(self):
        name = self.data["name"].title()
        message = self.data["message"]
        new_entry = Demo(name=name, message=message)
        db.session.add(new_entry)
        db.session.commit()

        json = [new_entry.as_dict()]

        return json

    def modify_demo_item(self):
        entry_id = self.data["id"]
        name = self.data["name"].title()
        message = self.data["message"]
        json = []
        row = db.session.query(Demo).filter(Demo.id == entry_id).first()
        if row:
            row.name = name
            row.message = message
            db.session.commit()
            json = [row.as_dict()]

        return json
