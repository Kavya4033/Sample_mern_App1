
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        setErrorMessage("");
        setLoading(true);

        // Admin Login
        if (email === "admin@gmail.com" && password === "admin") {
            const admin = { name: "admin", role: "admin" };

            localStorage.setItem("currentuser", JSON.stringify(admin));
            setLoading(false);
            navigate("/adminHome");
            return;
        }

        // Backend API Login
        try {
            const response = await fetch(
                "http://localhost:3000/api/emp/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password })
                }
            );

            const data = await response.json();

            if (response.ok && data.user) {
                localStorage.setItem("token", data.token || "");
                localStorage.setItem("userRole", data.user.role);

                // Save user details for the Header component
                localStorage.setItem(
                    "currentuser",
                    JSON.stringify({
                        ...data.user,
                        role: data.user.role
                    })
                );

                if (data.user.role === "HR") {
                    navigate("/hrHome");
                } else {
                    navigate("/empHome");
                }
            } else {
                setErrorMessage(
                    data.message || "Invalid email or password"
                );
            }
        } catch (error) {
            console.error("Login Error:", error);
            setErrorMessage("Unable to connect to the server. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="container">
                <div className="row justify-content-center align-items-center login-row">
                    <div className="col-lg-5 col-md-7 col-sm-10">
                        <div className="login-card">
                            <div className="login-icon">🔐</div>

                            <h1>Welcome Back!</h1>
                            <p className="login-subtitle">
                                Login to access your Kavya Portal account.
                            </p>

                            {errorMessage && (
                                <div className="alert alert-danger" role="alert">
                                    {errorMessage}
                                </div>
                            )}

                            <form onSubmit={handleLogin}>
                                <div className="mb-4 text-start">
                                    <label className="form-label">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control login-input"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        autoComplete="username"
                                        required
                                    />
                                </div>

                                <div className="mb-4 text-start">
                                    <label className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control login-input"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        autoComplete="current-password"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn login-btn w-100"
                                    disabled={loading}
                                >
                                    {loading ? "Logging in..." : "Login"}
                                </button>
                            </form>

                            <p className="register-text">
                                Don't have an account?{" "}
                                <Link to="/register">Register here</Link>
                            </p>

                            <Link to="/" className="back-home">
                                ← Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
