import React, { useEffect, useState } from "react";

function DriverOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Later connect API
    const data = [
      {
        id: 1,
        customer: "Rahul",
        address: "Bangalore",
        tank: "1000L",
        status: "Assigned",
      },
      {
        id: 2,
        customer: "Amit",
        address: "Whitefield",
        tank: "500L",
        status: "Assigned",
      },
    ];

    setOrders(data);
  }, []);

  const markDelivered = (id) => {
    setOrders(
      orders.map((o) =>
        o.id === id ? { ...o, status: "Delivered" } : o
      )
    );
  };

  return (
    <div>
      <h1>My Orders</h1>

      <table style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Address</th>
            <th>Tank</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.customer}</td>
              <td>{o.address}</td>
              <td>{o.tank}</td>
              <td>{o.status}</td>
              <td>
                {o.status !== "Delivered" && (
                  <button onClick={() => markDelivered(o.id)}>
                    Mark Delivered
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DriverOrders;