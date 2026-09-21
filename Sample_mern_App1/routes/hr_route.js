let express=require('express');
let router= express.Router();
let {users} = require('../models/users')
router.get("/viewemployees",async(req,res)=>{
    let result = await users.find();
    res.send("View Employees Route");
})
router.get("/assign-task",(req,res)=>{
    res.send("Assign Tasks Route");
})
router.post("/assign-task",(req,res)=>{
    res.send("Assign Tasks Route");
})
router.get("/viewtasks",(req,res)=>{
    res.send("View Tasks Route");
})
router.delete("/deleteEmp",(req,res)=>{
    res.send("Delete Employees Route");
})
module.exports=router;
