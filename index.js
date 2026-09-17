let express=require("express");
let app=express();
let hrroutes=require("./routes/hr_route")
let emproutes=require("")

app.use("/api/hr",hrroutes);
app.use("/api/emp",emproutes);


//open postman choose post method type localhost:3000/addStudent
app.listen(3000,()=>{
console.log("server listening on port 3000")
});