from .. import db


class Person(db.Model):
    """
    Model pro ukládání jenotlivých jmeno, příjmení, osobní číslo
    """
    __tablename__ = "person"

    id = db.Column(db.Integer, primary_key=True, unique=True, autoincrement=True)
    first_name = db.Column(db.String(20), nullable=False)
    last_name = db.Column(db.String(64), nullable=False)
<<<<<<< HEAD
    military_ID_number = db.Column(db.Integer, unique=True, nullable=False)
    club_name = db. Column(db.String(40), nullable=True)

 
=======
    soldier_ID = db.Column(db.Integer, unique=True, nullable=False)
    club_name = db.Column(db.String(40), nullable=True)
>>>>>>> 1492dd349cb6b46f44551e5219a608518822e016

    # hodnost_id = db.Column(db.Integer, db.ForeignKey('hodnost.id'), nullable=False)
    # hodnost = db.relationship('Hodnost', backref=db.backref('osoby', lazy='dynamic'))

    # utvar_vu = db.Column(db.Integer, db.ForeignKey('utvar.cislo_vu'), nullable=False)
    # utvar = db.relationship('Utvar', backref=db.backref('utvary', lazy='dynamic'))

    # def __init__ (self, jmeno, prijmeni, osobni_cislo):
    #     self.jmeno=jmeno
    #     self.prijmeni=prijmeni
    #     self.osobni_cislo=osobni_cislo

    def __repr__(self):
        return f"jmeno: {self.first_name} prijmeni: {self.last_name} osobni_cislo: {self.military_ID_number}"
