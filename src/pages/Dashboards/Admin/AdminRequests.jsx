import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";
import API from "../../../config/api";

function AdminRequests() {
  const [requests, setRequests] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Toast state
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "success" }), 3000);
  };

  // ✅ Fetch real data
  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      setLoading(true);

      const res = await API.get("/admin/full-driver-details");

      // 🔥 Transform backend data → UI format
      const formatted = res.data
        .filter((user) => user.driver && user.driver.subscriptions.length > 0)
        .map((user) => {
          const latestSub =
            user.driver.subscriptions[user.driver.subscriptions.length - 1];

          return {
            id: latestSub.subscription_id,
            driver_name: user.name,
            plan_name: latestSub.plan?.plan_name || "N/A",
            amount: latestSub.plan?.price || 0,
            status: latestSub.status || "Pending",
          };
        });

      setRequests(formatted);

    } catch (err) {
      console.error("Failed to fetch:", err);
      showToast("Failed to load requests ❌", "danger");
    } finally {
      setLoading(false);
    }
  };

  // Approve (UI only for now)
  const handleApprove = (id) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: "Approved" } : req))
    );
    showToast("✅ Driver approved successfully!");
  };

  // Reject (UI only for now)
  const handleReject = (id) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: "Rejected" } : req))
    );
    showToast("❌ Driver rejected successfully!", "danger");
  };

  // Filter + Search
  const filteredRequests = requests
    .filter((req) => (filter === "All" ? true : req.status === filter))
    .filter((req) =>
      req.driver_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const getBadgeClass = (status) => {
    switch (status) {
      case "Active":
      case "Approved":
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
      <h2 className="mb-4">📬 Driver Subscription Requests</h2>

      {/* Filter + Search */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
        <div className="d-flex flex-wrap gap-2">
          {["All", "Approved", "Pending", "Rejected"].map((status) => (
            <button
              key={status}
              className={`btn btn-outline-primary ${filter === status ? "active" : ""}`}
              onClick={() => setFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="d-flex align-items-center gap-2">
          <div className="input-group" style={{ minWidth: "350px" }}>
            <span className="input-group-text bg-white">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search driver..."
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <span className="badge bg-info text-dark">
            Total: {filteredRequests.length}
          </span>
        </div>
      </div>

      {/* Loading */}
      {loading && <p>Loading requests...</p>}

      {!loading && filteredRequests.length === 0 ? (
        <p>No requests found for "{filter}".</p>
      ) : (
        !loading && (
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Driver Name</th>
                  <th>Plan</th>
                  <th>Amount (₹)</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((req, index) => (
                  <tr key={req.id}>
                    <td>{index + 1}</td>
                    <td>{req.driver_name}</td>
                    <td>{req.plan_name}</td>
                    <td>{req.amount}</td>
                    <td>
                      <span className={getBadgeClass(req.status)}>
                        {req.status}
                      </span>
                    </td>
                    <td>
                      {req.status === "Pending" ? (
                        <>
                          <button
                            className="btn btn-success btn-sm me-2"
                            onClick={() => handleApprove(req.id)}
                          >
                            Approve ✅
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleReject(req.id)}
                          >
                            Reject ❌
                          </button>
                        </>
                      ) : (
                        <span className="text-muted">No actions</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      )}

      {/* Toast */}
      {toast.show && (
        <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1050 }}>
          <div className={`toast show text-bg-${toast.type} border-0`}>
            <div className="d-flex">
              <div className="toast-body">{toast.message}</div>
              <button
                className="btn-close btn-close-white me-2 m-auto"
                onClick={() => setToast({ ...toast, show: false })}
              ></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminRequests;