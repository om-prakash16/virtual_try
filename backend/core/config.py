import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Annu Design Studio API"
    API_V1_STR: str = "/api/v1"
    CORS_ORIGINS: list = ["http://localhost:3000"]
    
    # Placeholder for future env vars
    # DATABASE_URL: str
    # OPENAI_API_KEY: str

    class Config:
        env_file = ".env"

settings = Settings()
