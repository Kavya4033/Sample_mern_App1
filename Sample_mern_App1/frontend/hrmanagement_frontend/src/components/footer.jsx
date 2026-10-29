
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer text-center text-white">
            <div className="container py-4">
                <h4 className="footer-title">Kavya</h4>
                <p className="footer-text">
                    Thank you for visiting my website!
                </p>
                <div className="footer-links mb-3">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
                <hr className="footer-line" />
                <p className="mb-0 copyright">
                    &copy; 2026 Kavya. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
