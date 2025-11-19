from typing import List
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session

from app.api.deps import get_db, get_current_user
from app.models import ScheduleBlock, User
from app.schemas.schedule import ScheduleBlockCreate, ScheduleBlockRead

router = APIRouter(prefix="/schedule", tags=["schedule"])


@router.get("/", response_model=List[ScheduleBlockRead])
def list_schedule_blocks(
    from_ts: str | None = Query(None),
    to_ts: str | None = Query(None),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    q = db.query(ScheduleBlock).filter(ScheduleBlock.user_id == current_user.id)
    # You can later parse from_ts/to_ts to datetime range filters.
    return q.order_by(ScheduleBlock.start_at).all()


@router.post("/", response_model=ScheduleBlockRead)
def create_schedule_block(
    payload: ScheduleBlockCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    block = ScheduleBlock(
        user_id=current_user.id,
        **payload.dict(),
    )
    db.add(block)
    db.commit()
    db.refresh(block)
    return block
