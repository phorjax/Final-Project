"""empty message

Revision ID: 10c1fed97170
Revises: 
Create Date: 2023-04-25 20:13:22.829191

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '10c1fed97170'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('messages',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('content', sa.String(length=120), nullable=False),
    sa.Column('id_sender', sa.Integer(), nullable=False),
    sa.Column('id_receiver', sa.Integer(), nullable=False),
    sa.Column('sent_date', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=120), nullable=False),
    sa.Column('last_name', sa.String(length=120), nullable=False),
    sa.Column('username', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('artist',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('artist_name', sa.String(length=120), nullable=False),
    sa.Column('genre', sa.String(length=120), nullable=False),
    sa.Column('performance_type', sa.String(length=120), nullable=False),
    sa.Column('about_info', sa.TEXT(), nullable=True),
    sa.Column('instagram', sa.String(length=120), nullable=True),
    sa.Column('facebook', sa.String(length=120), nullable=True),
    sa.Column('twitter', sa.String(length=120), nullable=True),
    sa.Column('tiktok', sa.String(length=120), nullable=True),
    sa.Column('soundcloud', sa.String(length=120), nullable=True),
    sa.Column('spotify', sa.String(length=120), nullable=True),
    sa.Column('images', sa.TEXT(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('venue',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('venue_name', sa.String(length=120), nullable=False),
    sa.Column('address', sa.String(length=120), nullable=False),
    sa.Column('city', sa.String(length=120), nullable=False),
    sa.Column('state', sa.String(length=120), nullable=False),
    sa.Column('zip_code', sa.Integer(), nullable=False),
    sa.Column('phone_number', sa.String(length=120), nullable=False),
    sa.Column('venue_capacity', sa.String(length=120), nullable=False),
    sa.Column('music_type', sa.String(length=120), nullable=False),
    sa.Column('in_out', sa.String(length=120), nullable=False),
    sa.Column('hiring', sa.String(length=120), nullable=False),
    sa.Column('pay_rate', sa.String(length=120), nullable=False),
    sa.Column('fees', sa.String(length=120), nullable=False),
    sa.Column('equipment', sa.TEXT(), nullable=False),
    sa.Column('about_info', sa.TEXT(), nullable=True),
    sa.Column('instagram', sa.String(length=120), nullable=True),
    sa.Column('facebook', sa.String(length=120), nullable=True),
    sa.Column('twitter', sa.String(length=120), nullable=True),
    sa.Column('tiktok', sa.String(length=120), nullable=True),
    sa.Column('soundcloud', sa.String(length=120), nullable=True),
    sa.Column('spotify', sa.String(length=120), nullable=True),
    sa.Column('images', sa.TEXT(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('venue')
    op.drop_table('artist')
    op.drop_table('user')
    op.drop_table('messages')
    # ### end Alembic commands ###