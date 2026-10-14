import { useState } from "react"

function Contact() {
    let [Name, setName] = useState("")
    let [Age, setAge] = useState(18)
    let [Emailid, setEmailid] = useState("")
    let [clgname, setclgname] = useState("VFSTR")
    let RegisterForm = (Event) => {
        Event.preventDefault();
        console.log(Name);
    }
    return (
        <div>
            <h1> Contact Page </h1>
            <form onSubmit={RegisterForm}>
                <input type="text" value={Name} onChange={(Event) => setName(Event.target.value)} placeholder="Enter Your Name"></input><br />
                <input type="number" value={Age} onChange={(Event) => setAge(Event.target.value)} placeholder="Enter Your Age"></input><br />
                <input type="email" value={Emailid} onChange={(Event) => setEmailid(Event.target.value)} placeholder="Enter Your Emailid"></input><br />
                <input type="text" value={clgname} onChange={(Event) => setclgname(Event.target.value)} placeholder="Enter Your College Name"></input><br />

                <button type="submit">Register</button>
            </form>
            <p>{Name}</p>
            <p>{Age}</p>
            <p>{Emailid}</p>
            <p>{clgname}</p>

        </div>
    )

}
export default Contact