from fastapi import FastAPI
from routers import auth, services, logs, ci_cd
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    # allow_origins=["http://localhost:5173"],
    allow_origins='*',
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Include the routers
app.include_router(auth.router, prefix="/auth")
app.include_router(services.router, prefix="/api")
app.include_router(logs.router, prefix="/api")
app.include_router(ci_cd.router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Hello from back end"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)