from pydantic import BaseModel, Field


class LoginRequest(BaseModel):
    email: str = Field(..., min_length=5, max_length=50)
    password: str = Field(..., min_length=8, max_length=50)

    model_config = {
    "from_attributes": True
    }

        
class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    expires_in: int = 3600