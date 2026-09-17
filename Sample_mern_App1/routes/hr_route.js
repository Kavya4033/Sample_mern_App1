let express=require('express');
let router= express.Router();
router.get("/viewemployees",(req,res)=>{
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
