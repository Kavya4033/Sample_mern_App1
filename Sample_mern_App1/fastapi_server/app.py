from fastapi import FastAPI
from models import Student, Staff 
from database import student_collection, staff_collection 

app = FastAPI()

def student_details(Student):
    return {
        "id": str(Student["_id"]),
        "name": Student["name"],
        "email": Student["email"],
        "age": Student["age"],
        "mark": Student["mark"]
    }

def staff_details(Staff):
    return {
        "id": str(Staff["_id"]),
        "name": Staff["name"],
        "email": Staff["email"],
    }

@app.get("/getStudents")
def getStudents():
    students = student_collection.find()
    return [student_details(student) for student in students]

@app.post("/register_student")
def register_student(stu: Student): 
    student_dict = stu.model_dump() 
    result = student_collection.insert_one(student_dict)
    return {"message": "data inserted success"}

@app.post("/register_staff")
def register_staff(staff: Staff):
    staff_dict = staff.model_dump()
    result = staff_collection.insert_one(staff_dict)
    return {"message": "data inserted success"}

@app.put("/updateprofile")
def updateprofile():
    return "update profile called "

@app.delete("/deleteprofile")
def deleteprofile():
    return "delete profile called"

@app.get("/getStudentDet/{userid}")
def getStudentDet(userid: int):
    return {"user_id": userid}

@app.get("/getstudentdetails")
def getstudentdetails(page: int = 1, limit: int = 10):
    return {"page": page, "limit": limit}
