// components/AboutUsLayout.js
import React from 'react';

const AboutUsLayout = () => {
    return (
        <div className="about-us-layout">
            <h1 className="about-us-heading">About Us</h1>
            <div className="container">
                <div className="image-container">
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/028/534/342/small/doctor-and-his-team-smiling-generative-ai-photo.jpeg" // Replace with your image URL
                        alt="About Us Image"
                    />
                </div>
                <div className="text-container">
                    <h2>Our Story</h2>
                    <p>
                        <b>
                            We are a team of 3 professional dentists with extensive experience with the latest trends and technologies in the dental industry.
                        </b>
                    </p>
                    <p>
                        We are known for the most affordable and painless dental treatments that our clients have been loving for years. Whether it is cosmetic dental treatments, root canals, tooth extraction, or more, we assure the best help in a comfortable and friendly environment. We’ve built relationships with thousands of clients for simple consultations and surgeries too.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AboutUsLayout;
