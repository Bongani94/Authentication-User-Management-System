from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from ..api.database import Base

class UserRegister(Base):
    __tablename__ = "Users"
    
    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    phone_number = Column(String, nullable=False, unique=True)
    country = Column(String, nullable=False)
    email = Column(String, nullable=False, index=True, unique=True)
    hashed_password = Column(String, nullable=False)
