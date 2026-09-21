let express=require('express');
let router= express.Router();
let {users} = require('../models/users')
router.get("/viewemployees",async(req,res)=>{
    let result = await users.find();
    res.send(result);
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
router.delete("/deleteEmp/:id",async(req,res)=>{
    let result= await users.findByIdAndDelete(req.params.id)
    if (result){
        res.send("employee deleted successfully")
    }
    else{
        res.send("no user found")
    }
})
module.exports=router;
