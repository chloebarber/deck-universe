from flask import Blueprint, request
from app.models import Deck, db
from app.forms.edit_deck_form import EditDeckForm

deck_routes = Blueprint('deck', __name__)


#----------- DECK LISTING ROUTES

@deck_routes.route('', methods=["GET"])
def deck_listing():
    decks = Deck.query.all()
    # print(games)
    return {'Decks': [deck.to_dict() for deck in decks]}

@deck_routes.route('', methods=["POST"])
def add_deck():
    form = EditDeckForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_Deck = Deck()

        form.populate_obj(new_Deck)

        db.session.add(new_Deck)
        db.session.commit()
        return {'Deck': new_Deck.to_dict()}

    return {'error': 'UH OH ERROR'}


@deck_routes.route('/filter/<filter>')
def filtered_deck_listing(filter):
    if (filter == "ME"):
        decks = Deck.query.get(3)
        return {'Decks': [decks.to_dict()]}
    else:
        decks = Deck.query.all()
    # print(games)
    return {'Decks': [deck.to_dict() for deck in decks]}


#------------DECK BY ID ROUTES

@deck_routes.route('/<int:id>', methods=["GET"])
def deck_info(id):
    deck = Deck.query.get(id)
    return {'Deck': deck.to_dict(), 'Cards': [card.to_dict() for card in deck.cards]}

@deck_routes.route('/<int:id>', methods=['PUT'])
def edit_deck(id):
    form = EditDeckForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        oldDeck = Deck.query.get(id)

        form.populate_obj(oldDeck)
        
        db.session.commit()
        return oldDeck.to_dict()

    return {'error': 'UH OH ERROR'}

@deck_routes.route('/<int:id>', methods=['DELETE'])
def delete_deck(id):

    oldDeck = Deck.query.get(id)
    db.session.delete(oldDeck)
    db.session.commit()

    return oldDeck.to_dict()