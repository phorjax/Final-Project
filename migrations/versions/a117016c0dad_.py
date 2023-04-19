"""empty message

Revision ID: a117016c0dad
Revises: 274ac8ede1e2
Create Date: 2023-04-19 00:23:02.410906

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a117016c0dad'
down_revision = '274ac8ede1e2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('venue', schema=None) as batch_op:
        batch_op.add_column(sa.Column('city', sa.String(length=120), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('venue', schema=None) as batch_op:
        batch_op.drop_column('city')

    # ### end Alembic commands ###