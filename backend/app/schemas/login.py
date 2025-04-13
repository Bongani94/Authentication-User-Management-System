from pydantic import BaseModel, EmailStr, constr
from typing import Annotated


class LoginRequest(BaseModel):
    email: EmailStr
    password: Annotated[str, constr(min_length=8)]

    model_config = {
    "from_attributes": True
    }

        
class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    expires_in: int = 3600