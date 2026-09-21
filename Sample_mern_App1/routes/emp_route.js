const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
let { users } = require('../models/users');

// localhost:3000/api/emp/register
router.post("/register", async (req, res) => {
    try {
        console.log(req.body);

        req.body.password = await bcrypt.hash(req.body.password, 10);

        let newuser = new users(req.body); 
        let result = await newuser.save();

        result.password = undefined;

        res.status(201).send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Failed to register user", details: err.message });
    }
});

// localhost:3000/api/emp/login
router.post("/login", async (req, res) => {
    try {
        const result = await users.findOne({ email: req.body.email });

        if (result) {
            let matchpass = await bcrypt.compare(req.body.password, result.password);

            if (matchpass) {
                result.password = undefined; // Clear password hash only AFTER comparison
                res.send({ message: "Login successful", user: result });
            } else {
                res.status(401).send("Invalid password");
            }
        } else {
            res.status(404).send("User not found");
        }
    } catch (err) {
        res.status(500).send({ error: "Login error", details: err.message });
    }
});

router.get("/viewtask", (req, res) => {
    res.send("View task page called");
});

router.put("/updatestatus", (req, res) => {
    res.send("Update status page called");
});
router.patch("/updateprofile/:id",async(req,res)=>{
    let data=req.body;
    if(data.password){
        data.password=await bcrypt.hash(data.password,10);
    }
    let result = await users.findByIdAndUpdate(req.params.id,data,{new:true});
    res.send(result);
})
module.exports = router;
