from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import auth, task

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to your frontend's URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth")
app.include_router(task.router, prefix="/tasks")  # Ensure this line is correct

@app.get("/")
def read_root():
    return {"message": "Welcome to the House Manager API"}
