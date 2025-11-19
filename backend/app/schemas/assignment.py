from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel
from uuid import UUID

from app.models.assignment import AssignmentStatus, SubtaskStatus


class SubtaskBase(BaseModel):
    title: str
    description: Optional[str] = None
    estimated_minutes: Optional[int] = None
    status: SubtaskStatus = SubtaskStatus.NOT_STARTED
    order_index: Optional[int] = None
    ai_generated: bool = False


class SubtaskCreate(SubtaskBase):
    pass


class SubtaskRead(SubtaskBase):
    id: UUID

    class Config:
        orm_mode = True


class AssignmentBase(BaseModel):
    title: str
    description: Optional[str] = None
    due_at: Optional[datetime] = None
    estimated_minutes: Optional[int] = None
    difficulty: Optional[int] = None
    status: AssignmentStatus = AssignmentStatus.NOT_STARTED
    is_group: bool = False
    ai_generated_plan: bool = False


class AssignmentCreate(AssignmentBase):
    pass


class AssignmentRead(AssignmentBase):
    id: UUID
    created_at: datetime
    updated_at: Optional[datetime]
    subtasks: List[SubtaskRead] = []

    class Config:
        orm_mode = True
