import re
from app.main import db
from app.main.model.person import Person
import datetime

# from app.main.model.hodnost import Hodnost
# from app.main.model.utvar import Utvar

def create_new_person(data):
    # pattern=r'^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'
    # print(re.search(pattern,data['email']))
    # if bool(re.search(pattern, data['email'])):
    if True:
        new_person = Person(
            first_name=data['first_name'],
            last_name=data['last_name'],
            club_name=data['club_name'],
            route = data['route'],
            food = data['food'],
            shirt = data['shirt'],
            birth_date=datetime.datetime.strptime(data['birth_date'], "%Y-%m-%d").date(),
            email=data['email']
        )

        
        save_changes(new_person)
        response_object = {
            'status': 'success',
            'message': 'Person added.'
        }
        return response_object, 200
    else:
        response_object = {
            'status': 'failure',
            'message': 'Email adress not valid'
        }
        return response_object, 400


def get_persons():
    return Person.query.all()

def get_person(id):
    return Person.query.filter_by(id=id).first()

def save_changes(data):
    db.session.add(data)
    db.session.commit()

def remove_object(data):
    db.session.delete(data)
    db.session.commit()