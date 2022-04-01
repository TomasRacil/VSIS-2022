from flask import request
from flask_restx import Resource

from ..dtos.osoba import OsobaDto
from ..service.person import create_new_person, get_persons, get_person, remove_object

api = OsobaDto.api
_post = OsobaDto.post
_get = OsobaDto.get



@api.route('/')
class PersonList(Resource):
    @api.doc('list_of_registered_persons')
    @api.marshal_list_with(_get, envelope='data')
    def get(self):
        """List all registered persons ..."""
        osoby=get_persons()
        print(osoby)
        return osoby

    @api.response(200, 'Osoba successfully created.')
    @api.doc('create a new person')
    @api.expect(_post, validate=True)
    def post(self):
        """Creates a new Osoba """
        data = request.json
        return create_new_person(data=data)

@api.route('/<id>')
@api.param('id', 'Person identifier')
class Person(Resource):
    @api.doc('delete person')
    def delete(self, id):
        person = get_person(id)
        if not person:
            api.abort(404)
        else:
            return remove_object(person), 200