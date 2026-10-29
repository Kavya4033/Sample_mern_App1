
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

function Contact() {
    const [Name, setName] = useState("");
    const [Age, setAge] = useState(18);
    const [Emailid, setEmailid] = useState("");
    const [clgname, setclgname] = useState("VFSTR");
    const [submitted, setSubmitted] = useState(false);

    const RegisterForm = (Event) => {
        Event.preventDefault();
        setSubmitted(true);
        console.log(Name, Age, Emailid, clgname);
    };

    return (
        <div className="contact-page">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="contact-card">
                            <div className="contact-heading text-center">
                                <div className="contact-icon">✉</div>
                                <h1>Contact Us</h1>
                                <p>
                                    Fill in your details to register your information.
                                </p>
                            </div>

                            <form onSubmit={RegisterForm}>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={Name}
                                        onChange={(Event) => {
                                            setName(Event.target.value);
                                            setSubmitted(false);
                                        }}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Age</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={Age}
                                        onChange={(Event) => {
                                            setAge(Event.target.value);
                                            setSubmitted(false);
                                        }}
                                        min="1"
                                        max="120"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={Emailid}
                                        onChange={(Event) => {
                                            setEmailid(Event.target.value);
                                            setSubmitted(false);
                                        }}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">College Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={clgname}
                                        onChange={(Event) => {
                                            setclgname(Event.target.value);
                                            setSubmitted(false);
                                        }}
                                        placeholder="Enter your college name"
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn contact-btn w-100">
                                    Register
                                </button>
                            </form>

                            {submitted && (
                                <div className="submitted-details mt-4">
                                    <h4>Registration Details</h4>
                                    <p><strong>Name:</strong> {Name}</p>
                                    <p><strong>Age:</strong> {Age}</p>
                                    <p><strong>Email:</strong> {Emailid}</p>
                                    <p><strong>College:</strong> {clgname}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
