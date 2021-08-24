from flask import Blueprint
from app.models import Deck

deck_routes = Blueprint('deck', __name__)


@deck_routes.route('/')
def deck_listing():
    decks = Deck.query.all()
    # print(games)
    return {'Decks': [deck.to_dict() for deck in decks]}


@deck_routes.route('/<int:id>')
def deck_info(id):
    deck = Deck.query.get(id)
    return {'Deck': deck.to_dict(), 'Cards': [card.to_dict() for card in deck.cards]}