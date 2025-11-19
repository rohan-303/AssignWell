import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    APP_NAME: str = os.getenv("APP_NAME", "AssignWell API")
    ENVIRONMENT: str = os.getenv("ENVIRONMENT", "development")

    SECRET_KEY: str = os.getenv("SECRET_KEY", "change-me")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = int(
        os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "60")
    )
    ALGORITHM: str = "HS256"

    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./assignwell.db")


settings = Settings()
