import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "../../../config/api";

function AdminRequests() {
  const [requests, setRequests] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      setLoading(true);
      const res = await API.get("/admin/full-driver-details");

      const formatted = res.data.map((item) => {
        const sub = item.subscriptions?.[0];
        const payment = sub?.payments?.[0];

        return {
          id: item.user?.user_id,
          name: item.user?.name || "-",
          email: item.user?.email || "-",
          phone: item.user?.phone || "-",

          // driver
          vehicle_number: item.driver?.vehicle_number || "-",
          vehicle_type: item.driver?.vehicle_type || "-",
          license_number: item.driver?.license_number || "-",
          driver_status: item.driver?.status || "-",

          // subscription
          plan_name: sub?.plan?.plan_name || "-",
          amount: sub?.plan?.price || "-",
          sub_status: sub?.status || "-",

          // payment
          payment_status: payment?.payment_status || "-",
          verify_status: payment?.verify_status || "-",
        };
      });

      setRequests(formatted);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredRequests = requests
    .filter((req) =>
      filter === "All" ? true : req.sub_status === filter
    )
    .filter((req) =>
      req.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const badge = (status) => {
    switch (status) {
      case "Approved":
      case "Active":
        return "badge bg-success";
      case "Rejected":
        return "badge bg-danger";
      case "Pending":
        return "badge bg-warning text-dark";
      default:
        return "badge bg-secondary";
    }
  };

  return (
    <div className="container my-4">
      <h3 className="mb-3">Driver Full Details</h3>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search..."
        className="form-control mb-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* 🔘 Radio Filter */}
      <div className="mb-3">
        {["All", "Pending", "Approved", "Rejected"].map((f) => (
          <label key={f} className="me-3">
            <input
              type="radio"
              value={f}
              checked={filter === f}
              onChange={(e) => setFilter(e.target.value)}
            />{" "}
            {f}
          </label>
        ))}
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Contact</th>
                <th>Driver</th>
                <th>Vehicle</th>
                <th>Plan</th>
                <th>Payment</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredRequests.map((r, i) => (
                <tr key={r.id}>
                  <td>{i + 1}</td>

                  {/* User */}
                  <td>
                    <b>{r.name}</b>
                    <br />
                    {r.email}
                  </td>

                  {/* Contact */}
                  <td>{r.phone}</td>

                  {/* Driver */}
                  <td>
                    License: {r.license_number}
                    <br />
                    <span className={badge(r.driver_status)}>
                      {r.driver_status}
                    </span>
                  </td>

                  {/* Vehicle */}
                  <td>
                    {r.vehicle_type}
                    <br />
                    {r.vehicle_number}
                  </td>

                  {/* Plan */}
                  <td>
                    {r.plan_name}
                    <br />₹ {r.amount}
                  </td>

                  {/* Payment */}
                  <td>
                    Pay: {r.payment_status}
                    <br />
                    Verify: {r.verify_status}
                  </td>

                  {/* Status */}
                  <td>
                    <span className={badge(r.sub_status)}>
                      {r.sub_status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminRequests;