// src/dashboards/customer/CustomerBooking.jsx
import React, { useState } from "react";
import "./CustomerBooking.css";

function CustomerBooking() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    // Here you can integrate API to save booking
    alert(`Order placed for ${quantity} tank(s) at ${address}!\nNotes: ${notes}`);
    
    // Clear form
    setAddress("");
    setQuantity(1);
    setNotes("");
  };

  return (
    <div className="customer-booking">
      <h2>Book Water Tank</h2>
      <p>Welcome, {user.name}! Fill out the form to place a new order.</p>

      <form className="booking-form" onSubmit={handleBooking}>
        <label>
          Delivery Address
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            required
          />
        </label>

        <label>
          Quantity (in tanks)
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            required
          />
        </label>

        <label>
          Notes / Instructions
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any special instructions?"
          />
        </label>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default CustomerBooking;