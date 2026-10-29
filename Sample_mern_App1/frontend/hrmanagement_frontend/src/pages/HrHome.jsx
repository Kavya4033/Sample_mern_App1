
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HrHome.css";

function HrHome() {
    const currentuser = JSON.parse(
        localStorage.getItem("currentuser") || "null"
    );
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("currentuser");
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        navigate("/login");
    };

    return (
        <div className="hr-dashboard">
            <div className="container py-5">
                <div className="hr-welcome">
                    <div>
                        <span className="hr-tag">HR DASHBOARD</span>
                        <h1>
                            Welcome, {currentuser?.name || "HR"}!
                        </h1>
                        <p>
                            Manage employees, assign tasks, and organize
                            your team's activities.
                        </p>
                    </div>
                    <div className="hr-avatar">HR</div>
                </div>

                <div className="row g-4 mt-3">
                    <div className="col-md-6 col-lg-4">
                        <div className="hr-card">
                            <div className="hr-card-icon">👥</div>
                            <h4>View Employees</h4>
                            <p>
                                View employee details and manage your team.
                            </p>
                            <Link to="#" className="hr-card-link">
                                View Employees →
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="hr-card">
                            <div className="hr-card-icon">📋</div>
                            <h4>Assign Tasks</h4>
                            <p>
                                Assign tasks to employees and organize work.
                            </p>
                            <Link to="#" className="hr-card-link">
                                Assign Tasks →
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="hr-card">
                            <div className="hr-card-icon">📊</div>
                            <h4>Track Progress</h4>
                            <p>
                                Monitor employee tasks and track progress.
                            </p>
                            <Link to="#" className="hr-card-link">
                                View Progress →
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="hr-bottom">
                    <div>
                        <h3>Ready to manage your team?</h3>
                        <p>Choose an option above to get started.</p>
                    </div>
                    <button
                        className="btn hr-logout"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HrHome;
