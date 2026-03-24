// src/components/HowItWorks.jsx
import React from "react";
import "./HowItWorks.css"; // Optional: for custom styles

function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: "📝",
      title: "Book Your Tanker",
      desc: "Choose the quantity and time for delivery with our easy booking form.",
    },
    {
      number: 2,
      icon: "💧",
      title: "We Prepare Water",
      desc: "Clean and safe drinking water is prepared and loaded for delivery.",
    },
    {
      number: 3,
      icon: "🚚",
      title: "Fast Delivery",
      desc: "Our tanker delivers water quickly to your doorstep on the scheduled time.",
    },
    {
      number: 4,
      icon: "👍",
      title: "Enjoy Safe Water",
      desc: "Receive pure, safe water and enjoy hassle-free service every time.",
    },
  ];

  return (
    <section className="section how-it-works py-5">
      <div className="container">
        <h2 className="text-center mb-5 text-primary">How It Works</h2>
        <div className="row justify-content-center position-relative step-row">
          {steps.map((step) => (
            <div className="col-md-6 col-lg-3 step-item text-center" key={step.number}>
              <div className="step-card p-4">
                <div className="step-number">{step.number}</div>
                <div className="step-icon mb-2">{step.icon}</div>
                <h5>{step.title}</h5>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;