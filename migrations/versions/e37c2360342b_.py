"""empty message

Revision ID: e37c2360342b
Revises: 
Create Date: 2021-08-31 21:48:44.209956

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e37c2360342b'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('decks',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('owner_id', sa.Integer(), nullable=False),
    sa.Column('game_name', sa.String(length=255), nullable=False),
    sa.Column('splash_image', sa.String(length=255), nullable=True),
    sa.Column('rules', sa.Text(), nullable=True),
    sa.Column('description', sa.Text(), nullable=True),
    sa.ForeignKeyConstraint(['owner_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('cards',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('game_id', sa.Integer(), nullable=False),
    sa.Column('card_name', sa.String(length=255), nullable=False),
    sa.Column('art', sa.String(length=255), nullable=True),
    sa.Column('card_text_slot_1', sa.String(length=255), nullable=True),
    sa.Column('card_text_slot_2', sa.String(length=255), nullable=True),
    sa.Column('card_text_slot_3', sa.String(length=255), nullable=True),
    sa.Column('card_text_slot_4', sa.String(length=255), nullable=True),
    sa.Column('card_text_slot_5', sa.String(length=255), nullable=True),
    sa.Column('template', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['game_id'], ['decks.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('game_id', sa.Integer(), nullable=False),
    sa.Column('owner_id', sa.Integer(), nullable=False),
    sa.Column('content', sa.Text(), nullable=True),
    sa.Column('rating', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['game_id'], ['decks.id'], ),
    sa.ForeignKeyConstraint(['owner_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('tags',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('game_id', sa.Integer(), nullable=False),
    sa.Column('tag_genre', sa.String(length=255), nullable=True),
    sa.ForeignKeyConstraint(['game_id'], ['decks.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('tokens',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('game_id', sa.Integer(), nullable=False),
    sa.Column('token_name', sa.String(length=255), nullable=True),
    sa.Column('description', sa.String(length=255), nullable=True),
    sa.Column('shape', sa.Integer(), nullable=True),
    sa.Column('color', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['game_id'], ['decks.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('tokens')
    op.drop_table('tags')
    op.drop_table('reviews')
    op.drop_table('cards')
    op.drop_table('decks')
    op.drop_table('users')
    # ### end Alembic commands ###