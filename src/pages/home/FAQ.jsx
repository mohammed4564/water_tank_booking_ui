// src/components/FAQ.jsx
import React from "react";

function FAQ() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 text-primary">Frequently Asked Questions</h2>

        <div className="accordion" id="faqAccordion">

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#faq1">
                How long does delivery take?
              </button>
            </h2>
            <div id="faq1" className="accordion-collapse collapse show">
              <div className="accordion-body">
                Usually within 1-2 hours depending on your location.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq2">
                Is the water safe for drinking?
              </button>
            </h2>
            <div id="faq2" className="accordion-collapse collapse">
              <div className="accordion-body">
                Yes, we provide clean and tested drinking water.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq3">
                What payment methods are available?
              </button>
            </h2>
            <div id="faq3" className="accordion-collapse collapse">
              <div className="accordion-body">
                You can pay via cash, UPI, or online payment.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FAQ;