from .. import db


class Person(db.Model):
    """
    Model pro ukládání jenotlivých jmeno, příjmení, osobní číslo
    """
    __tablename__ = "person"

    id = db.Column(db.Integer, primary_key=True, unique=True, autoincrement=True)
    first_name = db.Column(db.String(20), nullable=False)
    last_name = db.Column(db.String(64), nullable=False)
    club_name = db.Column(db.String(40), nullable=True)
    route = db.Column(db.Boolean, nullable=False)
    food = db.Column(db.Boolean, nullable=False)
    shirt = db.Column(db.SmallInteger, nullable=False)
    birth_date = db.Column(db.Date, nullable=False)
    email = db.Column(db.String(256), nullable=False)

    # hodnost_id = db.Column(db.Integer, db.ForeignKey('hodnost.id'), nullable=False)
    # hodnost = db.relationship('Hodnost', backref=db.backref('osoby', lazy='dynamic'))

    # utvar_vu = db.Column(db.Integer, db.ForeignKey('utvar.cislo_vu'), nullable=False)
    # utvar = db.relationship('Utvar', backref=db.backref('utvary', lazy='dynamic'))

    # def __init__ (self, jmeno, prijmeni, osobni_cislo):
    #     self.jmeno=jmeno
    #     self.prijmeni=prijmeni
    #     self.osobni_cislo=osobni_cislo

    def __repr__(self):
        return f"jmeno: {self.first_name} prijmeni: {self.last_name}"
