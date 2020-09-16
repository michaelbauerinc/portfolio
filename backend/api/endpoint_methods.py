from run import db
from database.models import User


class TestViewMethods:
    def test_endpoint(self):
        test = db.session.query(User).first()
        return test.id
