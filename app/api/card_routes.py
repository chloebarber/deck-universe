from flask import Blueprint, request
from app.models import Card, db
from app.forms.edit_card_form import EditCardForm

card_routes = Blueprint('card', __name__)


@card_routes.route('/', methods=["POST"])
def add_card():
    form = EditCardForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_card = Card()

        form.populate_obj(new_card)

        db.session.add(new_card)
        db.session.commit()
        return new_card.to_dict()

    return {'error': 'UH OH ERROR'}

@card_routes.route('/<int:id>/', methods=['PUT'])
def edit_card(id):
    form = EditCardForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        oldCard = Card.query.get(id)

        form.populate_obj(oldCard)
        
        db.session.commit()
        return oldCard.to_dict()

    return {'error': 'UH OH ERROR'}