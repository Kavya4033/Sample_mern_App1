const express = require('express');
const app = express();
let mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/hrmanagement")
.then(() => {
    console.log("connected with mongodb ")
}).catch((err) => {
    console.log(err);
})

// 💡 ADD THESE TWO LINES TO PARSE INCOMING REQUEST BODIES
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

const hrroutes = require("./routes/hr_route");
const emproutes = require("./routes/emp_route");

app.use("/api/hr", hrroutes);
app.use("/api/emp", emproutes);

app.listen(3000, () => {
    console.log("server listening on port 3000");
});
