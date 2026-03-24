// src/components/OurStory.jsx
import React from "react";
import "./OurStory.css";

function OurStory() {
  return (
    <section className="our-story py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Text content */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <h2>Our Story</h2>
            <p>
              Founded with a passion for excellence, our journey began with a simple idea — 
              to provide the best services with integrity and innovation. Over the years, 
              we’ve grown into a team committed to making a difference in our industry.
            </p>
            <p>
              Our story is one of dedication, creativity, and hard work. Every step 
              forward has been fueled by our commitment to quality and customer satisfaction.
            </p>
          </div>

          {/* Image */}
          <div className="col-lg-6 col-md-12">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1470&q=80"
              alt="Our Story"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;