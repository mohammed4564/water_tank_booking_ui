import React, { useEffect, useState } from "react";

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Replace with your API later
        const data = [
          {
            id: 1,
            customer: "Rahul",
            address: "Bangalore",
            tankSize: "1000L",
            driver: "Not Assigned",
            date: "2026-03-24",
            status: "Pending",
            price: 500,
          },
          {
            id: 2,
            customer: "Amit",
            address: "Whitefield",
            tankSize: "500L",
            driver: "Ramesh",
            date: "2026-03-23",
            status: "Delivered",
            price: 300,
          },
        ];

        setOrders(data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchOrders();
  }, []);

  const updateStatus = (id, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  if (loading) return <p>Loading orders...</p>;

  return (
    <div>
      <h1>Water Tank Orders</h1>
      <p>Manage all tanker bookings</p>

      <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={th}>Customer</th>
            <th style={th}>Address</th>
            <th style={th}>Tank Size</th>
            <th style={th}>Driver</th>
            <th style={th}>Date</th>
            <th style={th}>Status</th>
            <th style={th}>Price</th>
            <th style={th}>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td style={td}>{o.customer}</td>
              <td style={td}>{o.address}</td>
              <td style={td}>{o.tankSize}</td>
              <td style={td}>{o.driver}</td>
              <td style={td}>{o.date}</td>
              <td style={td}>{o.status}</td>
              <td style={td}>₹{o.price}</td>
              <td style={td}>
                <button onClick={() => updateStatus(o.id, "Assigned")}>
                  Assign
                </button>{" "}
                <button onClick={() => updateStatus(o.id, "Delivered")}>
                  Deliver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = {
  border: "1px solid #ccc",
  padding: "8px",
  background: "#0077b6",
  color: "white",
};

const td = {
  border: "1px solid #ccc",
  padding: "8px",
};

export default AdminOrders;