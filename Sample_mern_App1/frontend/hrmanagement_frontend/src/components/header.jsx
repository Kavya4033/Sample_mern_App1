
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

function Header() {
    const [currentuser, setCurrentuser] = useState(
        JSON.parse(localStorage.getItem("currentuser") || "null")
    );
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setCurrentuser(
            JSON.parse(localStorage.getItem("currentuser") || "null")
        );
        setMenuOpen(false);
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem("currentuser");
        setCurrentuser(null);
        setMenuOpen(false);
        navigate("/login");
    };

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container">
                <Link className="navbar-brand" to="/" onClick={closeMenu}>
                    <span className="brand-icon">K</span> Kavya Portal
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-expanded={menuOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
                    <div className="navbar-nav ms-auto align-items-lg-center">
                        <Link className="nav-link" to="/" onClick={closeMenu}>
                            Home
                        </Link>
                        <Link className="nav-link" to="/About" onClick={closeMenu}>
                            About
                        </Link>
                        <Link className="nav-link" to="/Contact" onClick={closeMenu}>
                            Contact
                        </Link>

                        {!currentuser && (
                            <>
                                <Link className="nav-link" to="/login" onClick={closeMenu}>
                                    Login
                                </Link>
                                <Link className="btn btn-register ms-lg-3" to="/register" onClick={closeMenu}>
                                    Register
                                </Link>
                            </>
                        )}

                        {currentuser?.role === "HR" && (
                            <>
                                <Link className="nav-link" to="#" onClick={closeMenu}>
                                    Assign Task
                                </Link>
                                <Link className="nav-link" to="#" onClick={closeMenu}>
                                    View Employees
                                </Link>
                                <button className="btn btn-logout ms-lg-3" onClick={handleLogout}>
                                    Logout
                                </button>
                            </>
                        )}

                        {currentuser?.role === "admin" && (
                            <>
                                <Link className="nav-link" to="#" onClick={closeMenu}>
                                    View Employees
                                </Link>
                                <Link className="nav-link" to="#" onClick={closeMenu}>
                                    View Tasks
                                </Link>
                                <button className="btn btn-logout ms-lg-3" onClick={handleLogout}>
                                    Logout
                                </button>
                            </>
                        )}

                        {currentuser && !["HR", "admin"].includes(currentuser.role) && (
                            <button className="btn btn-logout ms-lg-3" onClick={handleLogout}>
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
