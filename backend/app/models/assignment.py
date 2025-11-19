from datetime import datetime
from sqlalchemy import (
    Column,
    String,
    DateTime,
    ForeignKey,
    Enum,
    Integer,
    Boolean,
    Float,
)
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
import uuid
import enum

from app.core.database import Base


class AssignmentStatus(str, enum.Enum):
    NOT_STARTED = "NOT_STARTED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    ARCHIVED = "ARCHIVED"


class Assignment(Base):
    __tablename__ = "assignments"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)

    title = Column(String, nullable=False)
    description = Column(String, nullable=True)
    due_at = Column(DateTime, nullable=True)
    estimated_minutes = Column(Integer, nullable=True)
    difficulty = Column(Integer, nullable=True)
    status = Column(
        Enum(AssignmentStatus),
        default=AssignmentStatus.NOT_STARTED,
        nullable=False,
    )
    is_group = Column(Boolean, default=False, nullable=False)
    ai_generated_plan = Column(Boolean, default=False, nullable=False)

    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    subtasks = relationship("Subtask", back_populates="assignment", cascade="all, delete-orphan")


class SubtaskStatus(str, enum.Enum):
    NOT_STARTED = "NOT_STARTED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"


class Subtask(Base):
    __tablename__ = "subtasks"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    assignment_id = Column(
        UUID(as_uuid=True),
        ForeignKey("assignments.id"),
        nullable=False,
    )

    title = Column(String, nullable=False)
    description = Column(String, nullable=True)
    estimated_minutes = Column(Integer, nullable=True)
    status = Column(
        Enum(SubtaskStatus),
        default=SubtaskStatus.NOT_STARTED,
        nullable=False,
    )
    order_index = Column(Integer, nullable=True)
    ai_generated = Column(Boolean, default=False, nullable=False)

    assignment = relationship("Assignment", back_populates="subtasks")
