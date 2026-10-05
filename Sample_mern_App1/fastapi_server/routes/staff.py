from fastapi import APIRouter
from models import Staff
from database import staff_collection 

def staff_details(Staff):
    return {
        "id": str(Staff["_id"]),
        "name": Staff["name"],
        "email": Staff["email"],
    }

staff_router = APIRouter(prefix="/staff",tags=["staff"])
@staff_router.post("/register_staff")
def register_staff(staff: Staff):
    staff_dict = staff.model_dump()
    result = staff_collection.insert_one(staff_dict)
    return {"message": "data inserted success"}

#localhost:8000/student/addstaff
@staff_router.post("/addstaff")
def addstaff():
    return "add staff method called"
