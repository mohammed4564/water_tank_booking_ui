import React, { useEffect, useState } from "react";
import "./DriverHistory.css";

function DriverHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Dummy data (replace with API later)
    const data = [
      {
        id: 1,
        customer: "Rahul",
        address: "Bangalore",
        tank: "1000L",
        date: "2026-03-23",
        earnings: 500,
        status: "Delivered",
      },
      {
        id: 2,
        customer: "Amit",
        address: "Whitefield",
        tank: "500L",
        date: "2026-03-22",
        earnings: 300,
        status: "Delivered",
      },
    ];

    setHistory(data);
  }, []);

  return (
    <div className="driver-history">
      <h1>📜 Delivery History</h1>
      <p>View all your completed deliveries</p>

      <div className="history-container">
        {history.map((item) => (
          <div className="history-card" key={item.id}>
            <h3>{item.customer}</h3>
            <p><strong>📍 Address:</strong> {item.address}</p>
            <p><strong>💧 Tank:</strong> {item.tank}</p>
            <p><strong>📅 Date:</strong> {item.date}</p>
            <p><strong>💰 Earnings:</strong> ₹{item.earnings}</p>

            <span className="status delivered">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DriverHistory;