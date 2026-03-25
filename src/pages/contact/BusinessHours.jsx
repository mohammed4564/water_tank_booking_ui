// src/components/BusinessHours.jsx
import React from "react";
import { FaClock } from "react-icons/fa";
import "./BusinessHours.css";

function BusinessHours() {
  const hours = [
    { day: "Monday", time: "9:00 AM – 6:00 PM" },
    { day: "Tuesday", time: "9:00 AM – 6:00 PM" },
    { day: "Wednesday", time: "9:00 AM – 6:00 PM" },
    { day: "Thursday", time: "9:00 AM – 6:00 PM" },
    { day: "Friday", time: "9:00 AM – 6:00 PM" },
    { day: "Saturday", time: "10:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <section className="business-hours py-5 bg-info">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side */}
          <div className="col-lg-6 col-md-12 left-side text-center text-lg-start mb-4 mb-lg-0">
            <div className="icon-wrapper mb-3">
              <FaClock />
            </div>
            <h2>Business Hours</h2>
            <p>
              We are open to serve you every week. Plan your visit accordingly 
              and feel free to contact us during office hours.
            </p>
          </div>

          {/* Right side */}
          <div className="col-lg-6 col-md-12 right-side">
            <div className="hours-table p-4 rounded shadow">
              {hours.map((hour, index) => (
                <div key={index} className="hour-row d-flex justify-content-between py-2 border-bottom">
                  <span className={hour.time === "Closed" ? "text-danger" : ""}>{hour.day}</span>
                  <span className={hour.time === "Closed" ? "text-danger" : ""}>{hour.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessHours;