from .db import db

class Card(db.Model):
    __tablename__ = 'cards'

    id = db.Column(db.Integer, primary_key=True)
    game_id = db.Column(db.Integer, db.ForeignKey("decks.id"), nullable=False)
    card_name = db.Column(db.String(255), nullable=False)
    art = db.Column(db.String(255))
    card_text_slot_1 = db.Column(db.String(255))
    card_text_slot_2 = db.Column(db.String(255))
    card_text_slot_3 = db.Column(db.String(255))
    card_text_slot_4 = db.Column(db.String(255))
    card_text_slot_5 = db.Column(db.String(255))
    template = db.Column(db.Integer)

    deck = db.relationship("Deck", back_populates="cards")

    def to_dict(self):
        return {
            'id': self.id,
            'game_id': self.game_id,
            'card_name': self.card_name,
            'art': self.art,
            'card_text_slot_1': self.card_text_slot_1,
            'card_text_slot_2': self.card_text_slot_2,
            'card_text_slot_3': self.card_text_slot_3,
            'card_text_slot_4': self.card_text_slot_4,
            'card_text_slot_5': self.card_text_slot_5,
            'template': self.template,
        }
    
