import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Login() {
    let handleLogin=async(event)=>{
        event.preventDefault()
        if (email=="admin@gmail.com" && password=="admin"){
            navigate("/adminHome")
        }else{
            let req=await fetch("http://localhost:3000/api/emp/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email,password})});
            let data=await req.json()
            console.log(data)
            if(data.user.role=="HR"){

            }
            if(data.user){
                
            }
        }
    }
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let navigate=useNavigate()
    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleLogin}>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter Emailid"></input><br></br>
                <input type="password"  onChange={(e)=>setPassword(e.target.value)} value={password}  placeholder="Enter Password"></input><br></br>
                <button type="submit">Login</button>

            </form>
        </div>
    )
}
export default Login