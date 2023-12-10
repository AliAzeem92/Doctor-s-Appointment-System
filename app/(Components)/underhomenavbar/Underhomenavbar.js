// components/DualContainerLayout.js
import React from 'react';
import Link from 'next/link';

const DualContainerLayout = () => {
  return (
    <div className="dual-container">
      <div className="text-container">
        <h1 className='undernav-h1'>Best Docter Services You Can Trust.</h1>
        <p className='undernav-p'>If you are looking for a reliable doctors in town, we are here to help. We are known for the best, affordable, and painless treatments with quick appointments and timely solutions.</p>
        <Link href="/appointment">
          <h3 className="appointment-button">Book an Appointment</h3>
        </Link>
      </div>
      <div className="image-container">
        <img
          src="https://static.vecteezy.com/system/resources/previews/028/529/891/non_2x/docter-handsome-man-n-hospital-meeting-for-medical-planning-life-insurance-medicine-or-treatment-training-team-generative-ai-free-photo.jpeg" // Replace with your image URL
          alt="Image"
        />
      </div>
    </div>
  );
};

export default DualContainerLayout;
