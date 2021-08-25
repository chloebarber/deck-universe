from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, ValidationError

class EditCardForm(FlaskForm):
    game_id = IntegerField("game_id")
    
    card_name = StringField("card_name", DataRequired())
    art = StringField("art")
    card_text_slot_1 = StringField("Slot 1: ")
    card_text_slot_2 = StringField("Slot 2: ")
    card_text_slot_3 = StringField("Slot 3: ")
    card_text_slot_4 = StringField("Slot 4: ")
    card_text_slot_5 = StringField("Slot 5: ")
    submit = SubmitField("Submit")