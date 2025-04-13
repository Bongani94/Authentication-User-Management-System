from pydantic import BaseModel, Field
from typing import Optional


class UserRegisterSchema(BaseModel):
    first_name: str = Field(..., min_length=3, max_length=50)
    last_name: str = Field(..., min_length=3, max_length=50)
    phone_number: str = Field(..., min_length=10, max_length=15)
    country: str = Field(..., min_length=3, max_length=50)
    profile_picture: Optional[str] = None
    role: str = Field(..., min_length=3, max_length=50)
    email: str = Field(..., min_length=5, max_length=50)
    password: str = Field(..., min_length=8, max_length=50)
    confirm_password: str = Field(..., min_length=8, max_length=50)
    terms_and_conditions: bool = Field(..., description="Accept terms and conditions")
    created_at: Optional[str] = None
    updated_at: Optional[str] = None
    
    model_config = {
    "from_attributes": True
    }
