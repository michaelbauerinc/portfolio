from run import app
from api import setup_api
from database.create_db import create_db_if_not_exists

if __name__ == "__main__":
    create_db_if_not_exists()
    setup_api()
    app.run(debug=True, host="0.0.0.0", port=5000)
