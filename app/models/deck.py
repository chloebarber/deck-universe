from .db import db

class Deck(db.Model):
    __tablename__ = 'decks'

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    game_name = db.Column(db.String(255), nullable=False)
    splash_image = db.Column(db.String(255))
    rules = db.Column(db.Text)
    description = db.Column(db.Text)

    cards = db.relationship("Card", back_populates="decks")