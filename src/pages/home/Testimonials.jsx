// src/components/Testimonials.jsx
import React from "react";
import "./Testimonials.css"; // optional for custom styling

function Testimonials() {
  const testimonialData = [
    {
      name: "Rahul Sharma",
      img: "data:image/jpeg;base64,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",
      quote: "Fast delivery and very clean water. Highly recommended!",
    },
    {
      name: "Priya Singh",
      img: "https://img.freepik.com/free-photo/young-beautiful-girl-posing-black-leather-jacket-park_1153-8104.jpg?semt=ais_hybrid&w=740&q=80",
      quote: "Easy booking and great service. Loved it!",
    },
    {
      name: "Arjun Kumar",
      img: "https://img.freepik.com/free-photo/young-beautiful-girl-posing-black-leather-jacket-park_1153-8104.jpg?semt=ais_hybrid&w=740&q=80",
      quote: "Best tanker service. On-time delivery!",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 text-primary">What Our Customers Say</h2>

        <div className="row g-4 justify-content-center">
          {testimonialData.map((t, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div className="card testimonial-card text-center p-4 h-100">
                <img
                  src={t.img}
                  alt={t.name}
                  className="rounded-circle mb-3 testimonial-img"
                />
                <p className="fst-italic mb-2">"{t.quote}"</p>
                <h6 className="text-primary">- {t.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;