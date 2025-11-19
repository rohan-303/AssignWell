from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.api.deps import get_db, get_current_user
from app.models import Assignment, Subtask, AssignmentStatus, SubtaskStatus, User
from app.schemas.assignment import (
    AssignmentCreate,
    AssignmentRead,
    SubtaskCreate,
    SubtaskRead,
)

router = APIRouter(prefix="/assignments", tags=["assignments"])


@router.get("/", response_model=List[AssignmentRead])
def list_assignments(
    status_filter: Optional[AssignmentStatus] = Query(None),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    q = db.query(Assignment).filter(Assignment.user_id == current_user.id)
    if status_filter:
        q = q.filter(Assignment.status == status_filter)
    assignments = q.order_by(Assignment.due_at).all()
    return assignments


@router.post("/", response_model=AssignmentRead, status_code=status.HTTP_201_CREATED)
def create_assignment(
    payload: AssignmentCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    assignment = Assignment(
        user_id=current_user.id,
        **payload.dict(),
    )
    db.add(assignment)
    db.commit()
    db.refresh(assignment)
    return assignment


@router.get("/{assignment_id}", response_model=AssignmentRead)
def get_assignment(
    assignment_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    assignment = (
        db.query(Assignment)
        .filter(Assignment.id == assignment_id, Assignment.user_id == current_user.id)
        .first()
    )
    if not assignment:
        raise HTTPException(status_code=404, detail="Assignment not found")
    return assignment


@router.post("/{assignment_id}/subtasks", response_model=SubtaskRead, status_code=201)
def add_subtask(
    assignment_id: str,
    payload: SubtaskCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    assignment = (
        db.query(Assignment)
        .filter(Assignment.id == assignment_id, Assignment.user_id == current_user.id)
        .first()
    )
    if not assignment:
        raise HTTPException(status_code=404, detail="Assignment not found")

    subtask = Subtask(
        assignment_id=assignment.id,
        **payload.dict(),
    )
    db.add(subtask)
    db.commit()
    db.refresh(subtask)
    return subtask
