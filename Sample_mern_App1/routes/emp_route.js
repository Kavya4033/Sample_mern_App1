const express = require("express");
const router = express.Router();
let {users}=require('../models/users');
router.post("/register", (req, res) => {
    res.send("Register page called");
});
//localhost:3000/api/emp/register
router.post("/register",async(req,res)=>{
    console.log(req.body);
    let newuser=users(req.body);
    let result=await newuser.save();
    res.send(result);

})

router.post("/login", (req, res) => {
    res.send("Login page called");
});

router.get("/viewtask", (req, res) => {
    res.send("View task page called");
});

router.put("/updatestatus", (req, res) => {
    res.send("Update status page called");
});

module.exports = router;
