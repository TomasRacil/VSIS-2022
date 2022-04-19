from app.main import db
from app.main.model.person import Person
# from app.main.model.hodnost import Hodnost
# from app.main.model.utvar import Utvar

def create_new_person(data):
    person = Person.query.filter_by(military_ID_number=data['soldier_ID']).first()
    if not person:
        new_person = Person(
            first_name=data['first_name'],
            last_name=data['last_name'],
            soldier_ID=data['soldier_ID'],
            club_name=data['club_name']
            # hodnost=Hodnost.query.filter_by(nazev=data['hodnost']).first(),
            # utvar=Utvar.query.filter_by(cislo_vu=data['utvar']).first() 
        )

        
        save_changes(new_person)
        response_object = {
            'status': 'success',
            'message': 'Person added.'
        }
        return response_object, 200
        #return generate_token(new_user)


def get_persons():
    return Person.query.with_entities(Person.id, Person.first_name, Person.last_name, Person.soldier_ID, Person.club_name).all()

def get_person(id):
    return Person.query.filter_by(id=id).first()

def save_changes(data):
    db.session.add(data)
    db.session.commit()

def remove_object(data):
    db.session.delete(data)
    db.session.commit()