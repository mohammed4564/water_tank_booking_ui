// src/components/CounterSection.jsx
import React, { useEffect, useState } from "react";
import "./CounterSection.css";

function CounterSection() {
  const countersData = [
    { id: 1, number: 500, label: "Clients" },
    { id: 2, number: 1200, label: "Projects Completed" },
    { id: 3, number: 15, label: "Years of Experience" },
    { id: 4, number: 50, label: "Awards Won" },
  ];

  const [counters, setCounters] = useState(
    countersData.map((counter) => ({ ...counter, count: 0 }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) =>
        prev.map((counter, index) => {
          const increment = Math.ceil(counter.number / 100); // smooth increment
          if (counter.count < counter.number) {
            return { ...counter, count: Math.min(counter.count + increment, counter.number) };
          } else {
            return counter;
          }
        })
      );
    }, 20); // update every 20ms

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="counter-section py-5 text-white">
      <div className="container">
        <div className="row text-center">
          {counters.map((counter) => (
            <div key={counter.id} className="col-lg-3 col-md-6 mb-4">
              <div className="counter-card p-4 rounded shadow">
                <h2 className="counter-number">{counter.count}+</h2>
                <p className="counter-label">{counter.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CounterSection;