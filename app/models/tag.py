from .db import db

class Tag(db.Model):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True)
    game_id = db.Column(db.Integer, db.ForeignKey("decks.id"), nullable=False)
    tag_genre = db.Column(db.String(255))

    deck = db.relationship("Deck", back_populates="tags")

    def to_dict(self):
        return {
            'id': self.id,
            'game_id': self.game_id,
            'tag_genre': self.tag_genre,
        }