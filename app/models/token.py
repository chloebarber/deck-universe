from .db import db

class Token(db.Model):
    __tablename__ = 'tokens'

    id = db.Column(db.Integer, primary_key=True)
    game_id = db.Column(db.Integer, db.ForeignKey("decks.id"), nullable=False)
    token_name = db.Column(db.String(255))
    description = db.Column(db.String(255))
    shape = db.Column(db.Integer)
    color = db.Column(db.Integer)

    deck = db.relationship("Deck", back_populates="tokens")

    def to_dict(self):
        return {
            'id': self.id,
            'game_id': self.game_id,
            'token_name': self.token_name,
            'description': self.description,
            'shape': self.shape,
            'color': self.color,
        }