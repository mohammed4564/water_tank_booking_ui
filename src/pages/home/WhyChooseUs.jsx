import React from "react";
import "./WhyChooseUs.css"; 

function WhyChooseUs() {
  const features = [
    {
      icon: "✅",
      title: "Clean & Safe Drinking Water",
      desc: "We ensure pure, filtered water delivered to your doorstep.",
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      desc: "Get the best water supply at competitive rates.",
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      desc: "Quick and timely delivery ensures you never run out of water.",
    },
    {
      icon: "🤝",
      title: "Trusted Local Service",
      desc: "We are a reliable local supplier known for excellent service.",
    },
  ];

  return (
    <section className="section why-choose py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 text-primary">Why Choose Us?</h2>
        <div className="row g-4 justify-content-center">
          {features.map((feature, idx) => (
            <div className="col-md-6 col-lg-3" key={idx}>
              <div className="feature-card text-center p-4 h-100">
                <div className="feature-icon mb-3">{feature.icon}</div>
                <h5>{feature.title}</h5>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;