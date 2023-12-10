// components/ServicesLayout.js
import React from 'react';
import Link from 'next/link';

const ServicesLayout = () => {
    return (
        <div className="services-layout">
            <h1 className="services-heading">Services</h1>
            <h2 className="sub-heading">All Your Doctor Needs at One Place</h2>
            <div className="card-container">
                <div className="card">
                    <img
                        src="https://websitedemos.net/health-wellness-02/wp-content/uploads/sites/833/2021/05/service-1-1.jpg"
                        alt="Doctor 1"
                    />
                    <div className="info">
                        <p>
                            <b>
                                Cosmetic Dentistry
                            </b>
                        </p>
                        <p>
                            We offer affordable tooth bleaching and alignment treatments you may need.
                        </p>
                        <Link href="/appointment">
                            <h3 className="appointment-button">Book an Appointment</h3>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <img
                        src="https://websitedemos.net/health-wellness-02/wp-content/uploads/sites/833/2021/05/service-5.jpg"
                        alt="Doctor 2"
                    />
                    <div className="info">
                        <p>
                            <b>
                                Dental X-Rays
                            </b>
                        </p>
                        <p>
                            No treatment is started without an x-ray taken from our high-end x-ray machine.
                        </p>
                        <Link href="/appointment">
                            <h3 className="appointment-button">Book an Appointment</h3>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <img
                        src="https://websitedemos.net/health-wellness-02/wp-content/uploads/sites/833/2021/05/service-6.jpg"
                        alt="Doctor 3"
                    />
                    <div className="info">
                        <p>
                            <b>
                                Root Canals
                            </b>
                        </p>
                        <p>
                            With us you get the fastest and painless root canal treatments done quickly.
                        </p>
                        <Link href="/appointment">
                            <h3 className="appointment-button">Book an Appointment</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesLayout;
