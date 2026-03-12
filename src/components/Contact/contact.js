import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section id="contactPage">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>

            <div className="contactLinks">
                <a href="mailto:dhumeshpriyad18@gmail.com" className="contactLink">
                    dhumeshpriyad18@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/dhumeshpriya05/" target="_blank" rel="noopener noreferrer" className="contactLink">
                    LinkedIn Profile
                </a>
            </div>
        </section>
    )
}

export default Contact;
