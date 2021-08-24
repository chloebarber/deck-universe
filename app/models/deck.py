from .db import db

class Deck(db.Model):
    __tablename__ = 'decks'

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    game_name = db.Column(db.String(255), nullable=False)
    splash_image = db.Column(db.String(255))
    rules = db.Column(db.Text)
    description = db.Column(db.Text)

    cards = db.relationship("Card", back_populates="deck")
    user = db.relationship("User", back_populates="decks")
    reviews = db.relationship("Review", back_populates="deck")
    tags = db.relationship("Tag", back_populates="deck")
    tokens = db.relationship("Token", back_populates="deck")

    def to_dict(self):
        return {
            'id': self.id,
            'owner_id': self.owner_id,
            'game_name': self.game_name,
            'splash_image': self.splash_image,
            'rules': self.rules,
            'description': self.description,
        }