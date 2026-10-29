
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminHome.css";

function AdminHome() {
    const currentuser = JSON.parse(localStorage.getItem("currentuser") || "null");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("currentuser");
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        navigate("/login");
    };

    return (
        <div className="admin-dashboard">
            <div className="admin-welcome">
                <h1>WELCOME {currentuser?.name || "ADMIN"}</h1>
                <p>Manage employees and tasks from your admin dashboard.</p>
                <button className="admin-logout" onClick={handleLogout}>
                    Logout
                </button>
            </div>

            <div className="container admin-content">
                <h2>Admin Dashboard</h2>
                <p className="admin-subtitle">Manage your portal efficiently</p>

                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="admin-card">
                            <div className="admin-icon">👥</div>
                            <h3>View Employees</h3>
                            <p>View and manage employee information.</p>
                            <Link to="#" className="admin-btn">View Employees</Link>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="admin-card">
                            <div className="admin-icon">📋</div>
                            <h3>View Tasks</h3>
                            <p>Check tasks assigned to employees.</p>
                            <Link to="#" className="admin-btn">View Tasks</Link>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="admin-card">
                            <div className="admin-icon">⚙️</div>
                            <h3>Manage Portal</h3>
                            <p>Access the main employee management features.</p>
                            <Link to="/" className="admin-btn">Go to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminHome;
