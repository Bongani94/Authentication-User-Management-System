from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.app.api.register import router as register_user
from backend.app.api.login import router as login_user


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    );


app.include_router(register_user, prefix="/auth", tags=["Authentication"])
app.include_router(login_user, prefix="/auth", tags=["Authentication"])


@app.get("/")
async def root():
    return {"message": "Welcome to Authentication USER"}
