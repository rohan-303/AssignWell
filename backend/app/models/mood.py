from datetime import datetime
from sqlalchemy import Column, DateTime, Float, String, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
import uuid

from app.core.database import Base


class MoodCheckin(Base):
    __tablename__ = "mood_checkins"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)

    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    valence = Column(Float, nullable=True)  # -2 to +2, for example
    energy = Column(Float, nullable=True)   # low to high
    label = Column(String, nullable=True)   # "STRESSED", "CALM", etc.
    notes = Column(String, nullable=True)
    tags = Column(String, nullable=True)    # simple CSV for now

    user = relationship("User")
