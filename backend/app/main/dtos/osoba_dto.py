from dataclasses import field
from doctest import Example
from pydoc import describe
import re
from tokenize import String
from typing_extensions import Required
from flask_restx import Namespace, fields, cors

class OsobaDto:
    api = Namespace('person', description='enpoint for managing perons', decorators=[
                    cors.crossdomain(origin="http://localhost:3000")])
    post = api.model('post_person', {
        'first_name': fields.String(required=True, description='first name', example='Josef'),
        'last_name': fields.String(required=True, description='last_name', example='Omáčka'),
        'soldier_ID': fields.Integer(required=True, description='soldier personal number', example=123456789)
        'club_name': fields.String(required=False, describe='sport club',example='Tesla')
    })
    get = api.model('get_person', {
        'id': fields.Integer(description='unique identifier', example=1),
        'first_name': fields.String(required=True, description='first name', example='Josef'),
        'last_name': fields.String(required=True, description='last_name', example='Omáčka'),
        'soldier_ID': fields.Integer(required=True, description='soldier personal number', example=123456789)
    })