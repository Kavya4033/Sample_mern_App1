
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function Home() {
    return (
        <div className="home-page">
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 text-center text-lg-start">
                            <p className="hero-tag">WELCOME TO KAVYA PORTAL</p>
                            <h1>
                                Manage Your Work <br />
                                <span>Smarter & Better</span>
                            </h1>
                            <p className="hero-description">
                                A simple and efficient platform to manage
                                employees, assign tasks, and track work in
                                one place.
                            </p>
                            <div className="hero-buttons">
                                <Link to="/login" className="btn btn-home-primary">
                                    Get Started
                                </Link>
                                <Link to="/About" className="btn btn-home-secondary">
                                    Learn More
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-5 text-center mt-5 mt-lg-0">
                            <div className="hero-card">
                                <div className="hero-icon">📊</div>
                                <h3>Work Management</h3>
                                <p>Organize tasks and manage your team easily.</p>
                                <div className="progress-item">
                                    <div className="d-flex justify-content-between">
                                        <span>Task Management</span>
                                        <span>Easy</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: "85%" }}></div>
                                    </div>
                                </div>
                                <div className="progress-item">
                                    <div className="d-flex justify-content-between">
                                        <span>Team Organization</span>
                                        <span>Simple</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar second-bar" style={{ width: "70%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2>What You Can Do</h2>
                        <p className="section-description">
                            Everything you need to organize your work efficiently.
                        </p>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="feature-card">
                                <div className="feature-icon">👥</div>
                                <h4>Employee Management</h4>
                                <p>View and manage employee information in one place.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="feature-card">
                                <div className="feature-icon">📋</div>
                                <h4>Task Assignment</h4>
                                <p>Assign tasks and help your team stay organized.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="feature-card">
                                <div className="feature-icon">📈</div>
                                <h4>Track Progress</h4>
                                <p>Keep track of work and improve team productivity.</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center home-bottom">
                        <h3>Ready to get started?</h3>
                        <p>Log in to access your workspace.</p>
                        <Link to="/login" className="btn btn-home-primary">
                            Login Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
