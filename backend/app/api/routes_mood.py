from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.deps import get_db, get_current_user
from app.models import MoodCheckin, User
from app.schemas.mood import MoodCheckinCreate, MoodCheckinRead

router = APIRouter(prefix="/mood", tags=["mood"])


@router.get("/", response_model=List[MoodCheckinRead])
def list_mood_checkins(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    q = (
        db.query(MoodCheckin)
        .filter(MoodCheckin.user_id == current_user.id)
        .order_by(MoodCheckin.created_at.desc())
    )
    return q.all()


@router.post("/", response_model=MoodCheckinRead)
def create_mood_checkin(
    payload: MoodCheckinCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    checkin = MoodCheckin(
        user_id=current_user.id,
        **payload.dict(),
    )
    db.add(checkin)
    db.commit()
    db.refresh(checkin)
    return checkin
