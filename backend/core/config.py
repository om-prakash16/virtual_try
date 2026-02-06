import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Annu Design Studio API"
    API_V1_STR: str = "/api/v1"
    CORS_ORIGINS: list = ["http://localhost:3000"]
    
    # API Keys
    NANO_BANANA_API_KEY: str = ""
    NANO_BANANA_API_URL: str = "https://api.banana.dev/v1/models/try-on/predict" # Placeholder, user must update
    OPENAI_API_KEY: str = ""

    class Config:
        env_file = ".env"

settings = Settings()
