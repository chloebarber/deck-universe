from .db import db

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    game_id = db.Column(db.Integer, db.ForeignKey("decks.id"), nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    content = db.Column(db.Text)
    rating = db.Column(db.Integer)

    user = db.relationship("User", back_populates="reviews")
    deck = db.relationship("Deck", back_populates="reviews")

    def to_dict(self):
        return {
            'id': self.id,
            'game_id': self.game_id,
            'owner_id': self.owner_id,
            'content': self.content,
            'rating': self.rating,
        }