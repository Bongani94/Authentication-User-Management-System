from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from ..api.database import Base

class UserRegister(Base):
    __tablename__ = "Users"
    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    gender = Column(String, nullable=False)
    id_number = Column(String, nullable=False, unique=True)
    phone_number = Column(String, nullable=False, unique=True)
    country = Column(String, nullable=False)
    city = Column(String, nullable=False)
    profile_picture = Column(String, nullable=True)
    role = Column(String, nullable=False)
    email = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)
    confirm_password = Column(String, nullable=False)
    terms_and_conditions = Column(String, nullable=False)
    created_at = Column(String, server_default=func.now())
    updated_at = Column(String, server_default=func.now(), onupdate=func.now())
      