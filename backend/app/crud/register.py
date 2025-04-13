from sqlalchemy.orm import Session
from ..models.register import UserRegister
from ..schemas.register import UserRegisterSchema
from ..core.security import get_password_hash
from fastapi import HTTPException, status

def create_user(db: Session, user_data: UserRegisterSchema):
    # Check if user already exists
    existing_user = db.query(UserRegister).filter(UserRegister.email == user_data.email).first()
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email is already registered"
        )

    # Hash the password
    hashed_password = get_password_hash(user_data.password)

    # Create new user instance
    new_user = UserRegister(
        first_name=user_data.first_name,
        last_name=user_data.last_name,
        email=user_data.email,
        phone_number=user_data.phone_number,
        profile_picture=user_data.profile_picture,
        role=user_data.role,
        country=user_data.country,
        hashed_password=hashed_password,
        confirm_password=user_data.confirm_password,
        terms_and_conditions=user_data.terms_and_conditions,
        is_active=False,  
        is_verified=False,
    )

    # Add user to DB and commit
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user
