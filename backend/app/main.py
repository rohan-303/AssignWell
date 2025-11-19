# app/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.openapi.utils import get_openapi

from app.core.database import Base, engine
from app.api import (
    routes_auth,
    routes_users,
    routes_assignments,
    routes_mood,
    routes_schedule,
)


# ----- Create app first -----
app = FastAPI(
    title="AssignWell API",
    version="1.0.0",
    description="API backend for AssignWell",
)


# ----- Custom OpenAPI: add BearerAuth so Swagger shows a token box -----
def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema

    openapi_schema = get_openapi(
        title="AssignWell API",
        version="1.0.0",
        description="API backend for AssignWell",
        routes=app.routes,
    )

    # Make sure components/securitySchemes exist
    components = openapi_schema.get("components", {})
    security_schemes = components.get("securitySchemes", {})

    # Add manual BearerAuth scheme for JWT
    security_schemes["BearerAuth"] = {
        "type": "http",
        "scheme": "bearer",
        "bearerFormat": "JWT",
    }

    components["securitySchemes"] = security_schemes
    openapi_schema["components"] = components

    # Apply BearerAuth as global default security
    openapi_schema["security"] = [{"BearerAuth": []}]

    app.openapi_schema = openapi_schema
    return openapi_schema


app.openapi = custom_openapi


# ----- DB setup (for dev; later use Alembic) -----
Base.metadata.create_all(bind=engine)


# ----- CORS so frontend can talk to backend -----
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ----- Routes -----
app.include_router(routes_auth.router)
app.include_router(routes_users.router)
app.include_router(routes_assignments.router)
app.include_router(routes_mood.router)
app.include_router(routes_schedule.router)
