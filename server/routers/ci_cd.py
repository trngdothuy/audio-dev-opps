from fastapi import APIRouter, Depends, Request
from auth import get_current_user

router = APIRouter()

deployments = [
        {
            'service': 'Transcription',
            'branch': 'main',
            'lastDeployed': '2025-04-18 11:03:00',
            'status': 'success'
        },
        {
            'service': 'TTS',
            'branch': 'stage',
            'lastDeployed': '2025-04-18 11:05:00',
            'status': 'success'
        },
        {
            'service': 'Audio Synth Engine',
            'branch': 'stage',
            'lastDeployed': '2025-04-19 11:05:00',
            'status': 'failed'
        },
        {
            'service': 'Voice Enhancer',
            'branch': 'develop',
            'lastDeployed': '2025-04-19 13:05:08',
            'status': 'success'
        },
    ]

# Get CI/CD deployment status
@router.get("/ci-cd")
def get_deployments(request: Request,user=Depends(get_current_user)):
    print("user", user)
    return deployments