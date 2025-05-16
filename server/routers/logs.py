from fastapi import APIRouter, Depends, HTTPException
from auth import get_current_user

router = APIRouter()

logs = {
    "Transcription": ["Started...", "Running health check", "CPU usage: 24%", "Memory stable"],
    "TTS": ["Started...", "Running health check", "CPU usage: 54%", "Memory stable"],
    "Audio Synth Engine": ["Started...", "Running health check", "CPU usage: 0%", "Down service"],
    "Voice Enhancer": ["Started...", "Running health check", "CPU usage: 44%", "Memory stable"],
}

# Get logs for a specific service
@router.get("/logs/{service_name}")
def get_logs(service_name: str, user=Depends(get_current_user)):
    if service_name not in logs:
        raise HTTPException(status_code=404,detail="No logs found for this service")
    return logs[service_name]