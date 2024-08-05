import React from 'react';
import '../AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="text-section">
                <h1>About Us</h1>
                <p>
                    We are a team of dedicated professionals committed to delivering high-quality software solutions.
                    Our goal is to create innovative products that solve real-world problems and make life easier for our users.
                </p>
            </div>
            <div className="image-section">
                <img
                    src="https://via.placeholder.com/500"
                    alt="About Us"
                    className="about-us-image"
                />
            </div>
        </div>
    );
};

export default AboutUs;
