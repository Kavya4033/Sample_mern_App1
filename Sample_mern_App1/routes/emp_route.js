let express=require('express');
let router= express.Router();
router.post("/register",(req,res)=>{
    res.send("Register page called");
})
router.post("/login",(req,res)=>{
    res.send("login page called");
})
router.get("/viewtask",(req,res)=>{
    res.send("view task page called");
})

router.put("/updatestatus",(req,res)=>{
    res.send("update status page called");
})
module.exports=router;
app.listen(3000,()=>{
console.log("server listening on port 3000")
});