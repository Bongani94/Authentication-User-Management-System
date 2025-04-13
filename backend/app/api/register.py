from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from ..crud.register import create_user
from ..schemas.register import UserRegisterSchema
from backend.app.api.database import get_db


router = APIRouter()

@router.post("/register/")
async def register_user(user: UserRegisterSchema, db: AsyncSession = Depends(get_db)):
    db_user = await create_user(db, user)
    return {"message": "User registered successfully", "user": db_user}

