"""empty message

Revision ID: 23dc5018767f
Revises: ffdc0a98111c
Create Date: 2021-08-24 17:22:51.279045

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '23dc5018767f'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
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
    # ### end Alembic commands ###
