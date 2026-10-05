from pydantic import BaseModel, EmailStr

class Student(BaseModel):
    name: str
    email: EmailStr  
    age: int
    mark: float

class Staff(BaseModel):
    name: str
    email: EmailStr
    designation: str
