import os

from flask_migrate import Migrate

from app import blueprint
from app.main import create_app, db

app = create_app(os.getenv('BOILERPLATE_ENV') or 'dev')
app.register_blueprint(blueprint)
app.app_context().push()
migrate = Migrate(app, db)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)