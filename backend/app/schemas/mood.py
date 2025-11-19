from datetime import datetime
from typing import Optional
from pydantic import BaseModel
from uuid import UUID


class MoodCheckinBase(BaseModel):
    valence: Optional[float] = None
    energy: Optional[float] = None
    label: Optional[str] = None
    notes: Optional[str] = None
    tags: Optional[str] = None  # later you can change to List[str]


class MoodCheckinCreate(MoodCheckinBase):
    pass


class MoodCheckinRead(MoodCheckinBase):
    id: UUID
    created_at: datetime

    class Config:
        orm_mode = True
