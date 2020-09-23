from run import db
import os
from database.models import Demo

EMAIL_ADDRESS = os.environ.get("EMAIL_ADDRESS")
EMAIL_USER = os.environ.get("EMAIL_USER")
EMAIL_PASSWORD = os.environ.get("EMAIL_PASSWORD")


class DemoMethods:
    def get_demo_item(self):
        entry_id = self.data["id"]
        name = self.data["name"]
        if entry_id and name:
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
        new_entry = Demo(name=self.data["name"], message=self.data["message"])
        db.session.add(new_entry)
        db.session.commit()

        return "success"
