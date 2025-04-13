from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..crud.register import create_user
from ..schemas.register import UserRegisterSchema
from backend.app.api.database import get_db


router = APIRouter()

@router.post("/register/")
def register_user(user: UserRegisterSchema, db: Session = Depends(get_db)):
    db_user = create_user(db, user)
    return {"message": "User registered successfully", "user": db_user}

