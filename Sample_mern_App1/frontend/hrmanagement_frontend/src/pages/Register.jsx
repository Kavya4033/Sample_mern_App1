
import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleRegister = async (event) => {
        event.preventDefault();
        setMessage("");
        setLoading(true);

        try {
            const req = await fetch(
                "http://localhost:3000/api/emp/register",
                {
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
                }
            );

            const data = await req.json();

            if (req.ok) {
                setSuccess(true);
                setMessage(data.message || "Registration successful!");

                setName("");
                setEmail("");
                setPassword("");
                setRole("");
            } else {
                setSuccess(false);
                setMessage(data.message || "Registration failed. Please try again.");
            }
        } catch (error) {
            console.error("Registration Error:", error);
            setSuccess(false);
            setMessage("Unable to connect to the server. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-page">
            <div className="container py-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-8 col-sm-11">
                        <div className="register-card">
                            <div className="register-icon">👤</div>

                            <h1>Create Account</h1>
                            <p className="register-subtitle">
                                Join Kavya Portal and get started today.
                            </p>

                            {message && (
                                <div
                                    className={`alert ${
                                        success ? "alert-success" : "alert-danger"
                                    }`}
                                    role="alert"
                                >
                                    {message}
                                </div>
                            )}

                            <form onSubmit={handleRegister}>
                                <div className="mb-3 text-start">
                                    <label className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control register-input"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                        placeholder="Enter your name"
                                        autoComplete="name"
                                        required
                                    />
                                </div>

                                <div className="mb-3 text-start">
                                    <label className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control register-input"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        placeholder="Enter your email"
                                        autoComplete="email"
                                        required
                                    />
                                </div>

                                <div className="mb-3 text-start">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control register-input"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        placeholder="Create a password"
                                        autoComplete="new-password"
                                        minLength={6}
                                        required
                                    />
                                </div>

                                <div className="mb-4 text-start">
                                    <label className="form-label">Select Role</label>
                                    <select
                                        className="form-select register-input"
                                        value={role}
                                        onChange={(event) => setRole(event.target.value)}
                                        required
                                    >
                                        <option value="">Choose your role</option>
                                        <option value="HR">HR</option>
                                        <option value="EMPLOYEE">Employee</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="btn register-btn w-100"
                                    disabled={loading}
                                >
                                    {loading ? "Registering..." : "Create Account"}
                                </button>
                            </form>

                            <p className="register-login-text">
                                Already have an account?{" "}
                                <Link to="/login">Login here</Link>
                            </p>

                            <Link to="/" className="register-home-link">
                                ← Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
