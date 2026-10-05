from fastapi import FastAPI
from routes.student import stu_router
from routes.staff import staff_router
app = FastAPI()
app.include_router(stu_router)
app.include_router(staff_router)