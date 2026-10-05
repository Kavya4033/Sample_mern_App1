from fastapi import APIRouter
from models import Student
from database import student_collection
from bson import ObjectId
def student_details(Student):
    return {
        "id": str(Student["_id"]),
        "name": Student["name"],
        "email": Student["email"],
        "age": Student["age"],
        "mark": Student["mark"]
    }

stu_router = APIRouter(prefix="/student",tags=["student"])
@stu_router.get("/getStudents")
def getStudents():
    students = student_collection.find()
    return [student_details(student) for student in students]
#localhost:8000/student/addstudent
@stu_router.post("/register_student")
def register_student(stu: Student): 
    student_dict = stu.model_dump() 
    result = student_collection.insert_one(student_dict)
    return {"message": "data inserted success"}
@stu_router.get("/getParticularstudent/{stuid}")
def getParticularstudent(stuid:str):
    student=student_collection.find_one({
        "_id":ObjectId(stuid)
    })
    return student_details(student)
@stu_router.delete("/deletestudent/{stuid}")
def deletestudent(stuid:str):
    result=student_collection.delete_one({"_id":ObjectId(stuid)})
    return "student deleted successfully"
@stu_router.put("/updatestudent/{stuid}")
def updatestudent(stuid:str,stu:Student):
    result=student_collection.update_one(
        {"_id":ObjectId(stuid)},
        {"$set":stu.model_dump()}

)
    return "student updated successfully"
