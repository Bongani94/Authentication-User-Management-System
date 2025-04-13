from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import declarative_base, sessionmaker

import os
from dotenv import load_dotenv
from typing import AsyncGenerator


load_dotenv()

database_url = os.getenv("DATABASE_URL")
engine = create_async_engine(database_url, echo=True)

# Session factory
async_session = sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
)

Base = declarative_base()

        
async def get_db() -> AsyncGenerator[AsyncSession, None]:
    async with async_session() as session:
        yield session