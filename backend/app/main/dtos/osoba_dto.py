<<<<<<< HEAD:backend/app/main/dtos/osoba_dto.py
from dataclasses import field
from doctest import Example
from pydoc import describe
import re
from tokenize import String
from typing_extensions import Required
=======
from email.policy import default
from pydoc import describe
>>>>>>> 348f722d43e33c1d8ff862712d90cddc3ee5a6a3:backend/app/main/dtos/person.py
from flask_restx import Namespace, fields, cors

class PersonDto:
    api = Namespace('person', description='endpoint for managing persons', decorators=[
                    cors.crossdomain(origin="http://localhost:3000")])
    post = api.model('post_person', {
        'first_name': fields.String(required=True, description='first name', example='Josef'),
<<<<<<< HEAD:backend/app/main/dtos/osoba_dto.py
        'last_name': fields.String(required=True, description='last_name', example='Omáčka'),
        'soldier_ID': fields.Integer(required=True, description='soldier personal number', example=123456789)
        'club_name': fields.String(required=False, describe='sport club',example='Tesla')
=======
        'last_name': fields.String(required=True, description='last name', example='Omáčka'),
        'soldier_ID': fields.Integer(required=True, description='soldier personal number', example=123456789),
        'club_name': fields.String(required=False, describe='sport club', example='Tesla', default=None),
>>>>>>> 348f722d43e33c1d8ff862712d90cddc3ee5a6a3:backend/app/main/dtos/person.py
    })
    get = api.model('get_person', {
        'id': fields.Integer(description='unique identifier', example=1),
        'first_name': fields.String(required=True, description='first name', example='Josef'),
        'last_name': fields.String(required=True, description='last name', example='Omáčka'),
        'soldier_ID': fields.Integer(required=True, description='soldier personal number', example=123456789),
        'club_name': fields.String(required=False, describe='sport club', example='Tesla'),
    })