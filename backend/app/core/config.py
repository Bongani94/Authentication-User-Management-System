import os
from pydantic_settings import BaseSettings
import os
from dotenv import load_dotenv


load_dotenv()


class Settings(BaseSettings):
    PROJECT_NAME: str = "AUTHENTICATION USER MANAGEMENT SYSTEM"
    SECRET_KEY: str = os.getenv("SECRET_KEY", "fallback_secret_key")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    
    # Database settings
    DATABASE_URL: str = os.getenv("DATABASE_URL")
    if not DATABASE_URL:
        raise ValueError("DATABASE_URL environment variable not set.")
    
    # Redis settings
    REDIS_URL: str = os.getenv("REDIS_URL", "redis://localhost:6379")
    if not REDIS_URL:
        raise ValueError("Redis URL environment variable not set.")

    class Config:
        case_sensitive = True

settings = Settings()
