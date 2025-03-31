from pydantic import BaseModel
from typing import Optional


class UserRegister(BaseModel):
    first_name: str
    last_name: str
    gender: str
    id_number: str
    phone_number: str
    country: str
    city: str
    profile_picture: Optional[str] = None
    role: str
    email: str
    password: str
    confirm_password: str
    terms_and_conditions: bool = False