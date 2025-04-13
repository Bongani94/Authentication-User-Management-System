from sqlalchemy.ext.asyncio import AsyncSession
from ..models.register import UserRegister
from ..schemas.register import UserRegisterSchema
from fastapi import HTTPException
from sqlalchemy.future import select
from sqlalchemy.exc import NoResultFound

async def create_user(db: AsyncSession, user_data: UserRegisterSchema):
    # Check if user already exists
    result = await db.execute(select(UserRegister).where(UserRegister.email == user_data.email))
    existing_user = result.scalar_one_or_none()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    new_user = UserRegister(**user_data.dict())
    db.add(new_user)
    await db.commit()
    await db.refresh(new_user)
    return new_user
