from pydantic import BaseModel, EmailStr, constr, model_validator
from typing import Annotated


class UserRegisterSchema(BaseModel):
    first_name: str
    last_name: str
    phone_number: str
    country: str
    email: EmailStr
    password: Annotated[str, constr(min_length=8)]
    confirm_password: Annotated[str, constr(min_length=8)]
    
    model_config = {
    "from_attributes": True
    }
    
    @model_validator(mode="after")
    def check_passwords_match(self):
        if self.password != self.confirm_password:
            raise ValueError("Passwords do not match")
        return self