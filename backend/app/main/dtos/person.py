from email.policy import default
from pydoc import describe
from flask_restx import Namespace, fields, cors

class PersonDto:
    api = Namespace('person', description='endpoint for managing persons', decorators=[
                    cors.crossdomain(origin="http://localhost:3000")])
    post = api.model('post_person', {
        'first_name': fields.String(required=True, description='first name', example='Josef'),
        'last_name': fields.String(required=True, description='last name', example='Omáčka'),
        'club_name': fields.String(required=False, describe='sport club', example='Tesla', default=None),
        'email': fields.String(required=False, describe='email', example='josef.omacka@seznam.cz'),
        'route': fields.String(required=False, describe='selected route', example=True),
        'food': fields.String(required=False, describe='selected food', example=True),
        'birth_date': fields.String(required=False, describe='date of birth', example=''),
        'shirt': fields.String(required=False, describe='selected shirt', example=True),

    })
    get = api.model('get_person', {
        'id': fields.Integer(description='unique identifier', example=1),
        'first_name': fields.String(required=True, description='first name', example='Josef'),
        'last_name': fields.String(required=True, description='last name', example='Omáčka'),
        'club_name': fields.String(required=False, describe='sport club', example='Tesla'),
    })