
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./EmpHome.css";

function EmpHome() {
    const currentuser = JSON.parse(localStorage.getItem("currentuser") || "null");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("currentuser");
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        navigate("/login");
    };

    return (
        <div className="emp-dashboard">
            <div className="emp-welcome">
                <h1>WELCOME {currentuser?.name || "EMPLOYEE"}</h1>
                <p>Welcome to your employee dashboard.</p>
                <button className="emp-logout" onClick={handleLogout}>
                    Logout
                </button>
            </div>

            <div className="container emp-content">
                <h2>Employee Dashboard</h2>
                <p className="emp-subtitle">Manage your work and stay updated.</p>

                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="emp-card">
                            <div className="emp-icon">📋</div>
                            <h3>My Tasks</h3>
                            <p>View the tasks assigned to you.</p>
                            <Link to="#" className="emp-btn">View Tasks</Link>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="emp-card">
                            <div className="emp-icon">📊</div>
                            <h3>My Progress</h3>
                            <p>Keep track of your work progress.</p>
                            <Link to="#" className="emp-btn">View Progress</Link>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="emp-card">
                            <div className="emp-icon">🏠</div>
                            <h3>Home</h3>
                            <p>Return to the main portal homepage.</p>
                            <Link to="/" className="emp-btn">Go to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmpHome;
