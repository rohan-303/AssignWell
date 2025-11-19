from datetime import datetime
from sqlalchemy import (
    Column,
    DateTime,
    Enum,
    ForeignKey,
    String,
)
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
import uuid
import enum

from app.core.database import Base


class ScheduleBlockType(str, enum.Enum):
    STUDY = "STUDY"
    BREAK = "BREAK"
    EXAM = "EXAM"
    EVENT = "EVENT"
    PEER_SESSION = "PEER_SESSION"


class ScheduleBlockStatus(str, enum.Enum):
    PLANNED = "PLANNED"
    COMPLETED = "COMPLETED"
    SKIPPED = "SKIPPED"
    CANCELED = "CANCELED"


class ScheduleBlock(Base):
    __tablename__ = "schedule_blocks"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    assignment_id = Column(UUID(as_uuid=True), ForeignKey("assignments.id"), nullable=True)
    subtask_id = Column(UUID(as_uuid=True), ForeignKey("subtasks.id"), nullable=True)

    start_at = Column(DateTime, nullable=False)
    end_at = Column(DateTime, nullable=False)

    type = Column(Enum(ScheduleBlockType), nullable=False)
    source = Column(String, nullable=False, default="MANUAL")
    status = Column(
        Enum(ScheduleBlockStatus),
        nullable=False,
        default=ScheduleBlockStatus.PLANNED,
    )

    user = relationship("User")
    assignment = relationship("Assignment")
    subtask = relationship("Subtask")
