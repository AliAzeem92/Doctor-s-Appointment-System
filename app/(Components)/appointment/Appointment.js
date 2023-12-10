// components/AppointmentLayout.js
import React from 'react';
import Link from 'next/link';

const AppointmentLayout = () => {
  return (
    <div className="appointment-layout">
      <h1 className="appointment-heading">Appointment</h1>
      <div className="container">
        <div className="left-container">
          <img src="https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg" alt="Doctor" />
        </div>
        <div className="right-container">
          <h4>Dr. John Doe</h4>
          <h4 className="specialization">Cardiologist</h4>
          <h4>Email: <strong>contact@example.com</strong></h4>
          <div className="day-heading">
            <h4>Day</h4>
            <button>Tomorrow</button>
          </div>
          <h4 className="timing-heading">Timing</h4>
          <div className="timing-buttons">
            <button>10:00am to 10:30am</button>
            <button>10:30am to 11:00am</button>
            <button>11:00am to 11:30am</button>
          </div>
          <Link href="/congratulations">
            <h3 className="confirm-button">Confirm</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppointmentLayout;
