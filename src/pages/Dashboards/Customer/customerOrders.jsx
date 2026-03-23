// src/dashboards/customer/CustomerOrders.jsx
import React from "react";
import "./CustomerOrders.css";

function CustomerOrders() {
  // Dummy order data
  const orders = [
    { id: 1, product: "Water Tanker 1000L", date: "2026-03-20", status: "Delivered" },
    { id: 2, product: "Water Tanker 500L", date: "2026-03-21", status: "Pending" },
    { id: 3, product: "Water Tanker 2000L", date: "2026-03-22", status: "In Progress" },
  ];

  return (
    <div className="customer-orders">
      <h1>My Orders</h1>
      <p>Here you can see your order history and current requests.</p>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.product}</td>
              <td>{order.date}</td>
              <td className={`status ${order.status.replace(" ", "-").toLowerCase()}`}>
                {order.status}
              </td>
              <td>
                <button onClick={() => alert(`Viewing order ${order.id}`)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerOrders;