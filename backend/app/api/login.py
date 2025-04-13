from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..schemas.login import LoginRequest, TokenResponse
from ..crud.login import authenticate_user
from backend.app.api.database import get_db
from ..core.security import create_access_token

router = APIRouter()

@router.post("/login", response_model=TokenResponse)
def login_user(login_data: LoginRequest, db: Session = Depends(get_db)):
    user = authenticate_user(db, login_data)
    
    access_token = create_access_token(data={"sub": user.email, "user_id": user.id, "role": user.role})
    
    return {"access_token": access_token, "token_type": "bearer"}
