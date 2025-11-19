from datetime import datetime
from typing import Optional
from pydantic import BaseModel
from uuid import UUID

from app.models.schedule import ScheduleBlockType, ScheduleBlockStatus


class ScheduleBlockBase(BaseModel):
    start_at: datetime
    end_at: datetime
    type: ScheduleBlockType
    source: str = "MANUAL"
    status: ScheduleBlockStatus = ScheduleBlockStatus.PLANNED
    assignment_id: Optional[UUID] = None
    subtask_id: Optional[UUID] = None


class ScheduleBlockCreate(ScheduleBlockBase):
    pass


class ScheduleBlockRead(ScheduleBlockBase):
    id: UUID

    class Config:
        orm_mode = True
