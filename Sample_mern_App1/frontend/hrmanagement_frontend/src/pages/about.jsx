
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

function About() {
    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="container text-center">
                    <span className="about-tag">ABOUT US</span>
                    <h1>About <span>Kavya Portal</span></h1>
                    <p>
                        A smarter way to manage employees, organize tasks,
                        and improve teamwork.
                    </p>
                </div>
            </section>

            <section className="about-content">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <div className="about-symbol">K</div>
                                <h3>Work Smarter</h3>
                                <p>Organize. Manage. Achieve.</p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <h2>Who We Are</h2>
                            <p className="about-description">
                                Kavya Portal is an employee and task management
                                platform designed to make workplace activities
                                simple, organized, and efficient.
                            </p>
                            <p className="about-description">
                                It provides separate access for HR and Admin
                                users to manage employees, assign tasks, and
                                keep track of work activities.
                            </p>
                            <Link to="/" className="btn about-btn">
                                Back to Home
                            </Link>
                        </div>
                    </div>

                    <div className="row g-4 about-features">
                        <div className="col-md-4">
                            <div className="about-card">
                                <div className="about-icon">👥</div>
                                <h4>Employee Management</h4>
                                <p>
                                    Keep employee details organized and
                                    accessible.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="about-card">
                                <div className="about-icon">📋</div>
                                <h4>Task Management</h4>
                                <p>
                                    Make task assignment and work organization
                                    easier.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="about-card">
                                <div className="about-icon">🔐</div>
                                <h4>Role-Based Access</h4>
                                <p>
                                    Provide different features according to
                                    user roles.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
