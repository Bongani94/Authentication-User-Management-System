# backend/app/api/database.py
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker, declarative_base
from dotenv import load_dotenv
import os
from typing import AsyncGenerator

# Load environment variables
load_dotenv()

Base = declarative_base()

# Database engine configuration
database_url = os.getenv("DATABASE_URL")
engine = create_async_engine(database_url, echo=True)

# Session factory setup
async_session = sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
)

# Function to create tables
async def create_tables():
    from ..models.register import UserRegister
    async with engine.begin() as conn:
        await conn.run_sync(UserRegister.metadata.create_all)

# Dependency for getting the database session
async def get_db() -> AsyncGenerator[AsyncSession, None]:
    async with async_session() as session:
        yield session
