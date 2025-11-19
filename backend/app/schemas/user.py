from datetime import datetime
from pydantic import BaseModel, EmailStr
from uuid import UUID


class UserBase(BaseModel):
    email: EmailStr
    name: str


class UserCreate(UserBase):
    password: str


class UserRead(UserBase):
    id: UUID
    created_at: datetime
    updated_at: datetime
    is_active: bool

    class Config:
        orm_mode = True
