from email.policy import default
from pydoc import describe
from flask_restx import Namespace, fields, cors

class PersonDto:
    api = Namespace('person', description='endpoint for managing persons', decorators=[
                    cors.crossdomain(origin="http://localhost:3000")])
    post = api.model('post_person', {
        'first_name': fields.String(required=True, description='first name', example='Josef'),
        'last_name': fields.String(required=True, description='last name', example='Omáčka'),
        'soldier_ID': fields.Integer(required=True, description='soldier personal number', example=123456789),
        'club_name': fields.String(required=False, describe='sport club', example='Tesla', default=None),
    })
    get = api.model('get_person', {
        'id': fields.Integer(description='unique identifier', example=1),
        'first_name': fields.String(required=True, description='first name', example='Josef'),
        'last_name': fields.String(required=True, description='last name', example='Omáčka'),
        'soldier_ID': fields.Integer(required=True, description='soldier personal number', example=123456789),
        'club_name': fields.String(required=False, describe='sport club', example='Tesla'),
    })