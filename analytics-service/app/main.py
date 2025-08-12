from fastapi import FastAPI
from .clickhouse import insert_event
from .schemas import AnalyticsEvent
from datetime import datetime

app = FastAPI(
    title="Analytics Service",
    root_path="/api/track",          # For Ingress path
    openapi_url="/openapi.json",     # Do not prefix
    docs_url="/docs"
)

@app.get("/")
def root():
    return {"message": "Analytics service is live!"}

@app.post("/track")
async def track_event(event: AnalyticsEvent):
    insert_event(event)
    return {"message": "Event recorded"}
