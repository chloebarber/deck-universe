from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, ValidationError

class EditDeckForm(FlaskForm):
    v = [DataRequired()]

    owner_id = IntegerField("game_id", v)

    game_name = StringField("game_name")
    splash_image = StringField("splash_image")
    rules = StringField("rules")
    description = StringField("description")