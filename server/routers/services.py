from fastapi import APIRouter, Depends, Request, HTTPException
from fastapi.security import OAuth2PasswordBearer
from auth import get_current_user
from typing import List

router = APIRouter()

# Fake data for now
services = [
            {"id": 1, "name": 'Transcription', "status": 'up', "cpu": 23, "memory": 420},
            {"id": 2, 'name': 'TTS', 'status': 'up', "cpu": 35, "memory": 610},
            {"id": 3, 'name': 'Audio Synth Engine', 'status': 'down', 'cpu': 0, 'memory': 0},
            {"id": 4, 'name': 'Voice Enhancer', 'status': 'up', 'cpu': 48, 'memory': 750},
        ]

# Get list of services
@router.get("/services")
def list_services(request: Request, user: str=Depends(get_current_user)):
    return services

# # Get service status
# @router.get("/services/{name}/status")
# def get_service_status(request: Request,name: str, user=Depends(get_current_user)):
#     service = next((service for service in services if service["name"] == name), None)
#     if not service:
#         return {"detail": "Service not found"}
#     return service

# # Restart a service
# @router.post("/services/{name}/restart")
# def restart_service(request: Request, name: str, user=Depends(get_current_user)):
#     service = next((service for service in services if service["name"] == name), None)
#     if not service:
#         return {"detail": "Service not found"}
#     service["status"] = "Restarting" # simulate restart
#     return {"detail": f"Service {name} is restarting..."}