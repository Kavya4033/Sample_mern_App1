import { useState } from "react"
import { useNavigate } from "react-router-dom"
function AdminLogin() {

    let [Username, setUsername] = useState("")
    let [Password, SetPassword] = useState("")
    let [error,seterror]=useState("")
    let navigate =useNavigate()
    
    let login=(Event)=>{
        Event.preventDefault()
        if(Username=="admin" && Password=="admin"){
            console.log("Login Success")
            navigate("/AdminHome")
        }
        else{
            console.log("Login Failed")
            seterror("Invalid Credentials")
        }
    }
    return (
        <div>
            <form onSubmit={login}>
                <input type="text" value={Username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username"></input><br />
                <input type="password" value={Password} onChange={(e) => SetPassword(e.target.value)} placeholder="Enter Password"></input> <br />
                <button type="submit">Admin Login</button>

            </form>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}
export default AdminLogin