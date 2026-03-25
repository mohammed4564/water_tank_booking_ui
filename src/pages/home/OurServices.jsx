import React from "react";
import "./OurServices.css"; 

function OurServices() {
  const services = [
    { icon: "💧", title: "Drinking Water Supply", desc: "Pure and hygienic drinking water for homes and offices." },
    { icon: "🚚", title: "Tanker Delivery", desc: "Quick and reliable delivery to your location." },
    { icon: "📱", title: "Easy Booking", desc: "Book water tankers online anytime with a few clicks." },
    { icon: "📍", title: "Live Tracking", desc: "Track your tanker in real-time from dispatch to delivery." },
    { icon: "📝", title: "Drinking Water Orders", desc: "Schedule regular orders for homes, offices, and institutions." },
    { icon: "♻", title: "Use & Throw Water", desc: "Disposable water containers for events or emergency needs." },
    { icon: "🚰", title: "Daily Use Water", desc: "Fresh water supply for daily household or office use." },
    { icon: "🌾", title: "Farmers & Agriculture", desc: "Water tankers for irrigation, livestock, and farm use." },
  ];

  return (
    <section className="section services">
      <h2>Our Services</h2>
      <div className="grid">
        {services.map((service, idx) => (
          <div className="card" key={idx}>
            <h3>{service.icon} {service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurServices;