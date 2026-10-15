import { useState } from "react"

function AdminLogin() {

    let [Username, setUsername] = useState("")
    let [Password, SetPassword] = useState("")
    let login=(Event)=>{
        Event.preventDefault()
        if(Username=="admin" && Password=="admin"){
            console.log("Login Success")
        }
        else{
            console.log("Login Failed")
        }
    }
    return (
        <div>
            <form onSubmit={login}>
                <input type="text" value={Username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username"></input><br />
                <input type="password" value={Password} onChange={(e) => SetPassword(e.target.value)} placeholder="Enter Password"></input> <br />
                <button type="submit">Admin Login</button>

            </form>
        </div>
    )
}
export default AdminLogin