const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
let { users } = require('../models/users');

// 💡 1. FIX: Removed the duplicate, empty "/register" route that was blocking your database logic.
// localhost:3000/api/emp/register
router.post("/register", async (req, res) => {
    try {
        console.log(req.body);

        // Hash the incoming password
        req.body.password = await bcrypt.hash(req.body.password, 10);

        // Create and save the new user to MongoDB
        let newuser = new users(req.body); // Added 'new' keyword just in case it's a Mongoose model
        let result = await newuser.save();

        // Hide password hash before sending the user object back to Postman
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
            // 💡 2. FIX: You were setting result.password to undefined BEFORE passing it to bcrypt.compare().
            // This would cause password comparisons to always fail.
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

module.exports = router;
