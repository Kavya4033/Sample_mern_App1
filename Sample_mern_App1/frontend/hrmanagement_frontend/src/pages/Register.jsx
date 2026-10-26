
import { useState } from "react";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const handleRegister = async (event) => {
        event.preventDefault();

        try {
            const req = await fetch("http://localhost:5000/Register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    role
                })
            });

            const data = await req.json();

            if (req.ok) {
                console.log("Data inserted successfully");
                console.log(data);

                setName("");
                setEmail("");
                setPassword("");
                setRole("");
            } else {
                console.log("Data insertion failed");
                console.log(data);
            }
        } catch (error) {
            console.error("Error connecting to backend:", error);
        }
    };

    return (
        <div>
            <h1>Register</h1>

            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
                <br />

                <input
                    type="email"
                    placeholder="Enter email ID"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
                <br />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
                <br />

                <select
                    value={role}
                    onChange={(event) => setRole(event.target.value)}
                    required
                >
                    <option value="">Choose role</option>
                    <option value="HR">HR</option>
                    <option value="EMPLOYEE">EMPLOYEE</option>
                </select>
                <br />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
