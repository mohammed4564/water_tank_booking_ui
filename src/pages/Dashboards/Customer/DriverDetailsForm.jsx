import React, { useEffect, useState } from "react";
import Select from "react-select";
import API from "../../../config/api";
import "./DriverDetailsForm.css";

function DriverDetailsForm({ next, back, setFormData, formData }) {

  const [details, setDetails] = useState({
    license: "",
    vehicle: "",
    type: null,
  });

  const [driverId, setDriverId] = useState(null);
  const [editMode, setEditMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const vehicleOptions = [
    { value: "Mini Tanker", label: "Mini Tanker (Small Capacity)" },
    { value: "Medium Tanker", label: "Medium Tanker (Medium Capacity)" },
    { value: "Large Tanker", label: "Large Tanker (High Capacity)" },
    { value: "Tractor Tanker", label: "Tractor Tanker (Rural Supply)" },
  ];

  useEffect(() => {
    fetchDriver();
  }, []);

  // ✅ FETCH DRIVER using JWT token only
  const fetchDriver = async () => {
    try {
      const res = await API.get("/driver/my-driver"); // backend uses token
      const d = res.data;

      if (!d) {
        setEditMode(true); // first time
        return;
      }

      setDriverId(d.id);

      setDetails({
        license: d.license_number,
        vehicle: d.vehicle_number,
        type: d.vehicle_type
          ? { value: d.vehicle_type, label: d.vehicle_type }
          : null,
      });

      setEditMode(false); // view mode
    } catch (err) {
      if (err.response?.status === 404) {
        setEditMode(true);
      } else {
        console.error("Error fetching driver:", err);
        setError("Unable to fetch driver details.");
      }
    }
  };

  const isValid =
    details.license && details.vehicle && details.type;

  // ✅ SAVE / UPDATE using JWT token only
  const handleSave = async () => {
    if (!isValid) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      setError("");

      if (driverId) {
        // UPDATE driver
        await API.put(`/driver/update-driver/${driverId}`, {
          license_number: details.license,
          vehicle_number: details.vehicle,
          vehicle_type: details.type.value,
        });
      } else {
        // ADD driver
        const res = await API.post("/driver/add-driver", {
          license_number: details.license,
          vehicle_number: details.vehicle,
          vehicle_type: details.type.value,
        });

        setDriverId(res.data.driver_id);
      }

      // save in parent state
      setFormData({
        ...formData,
        license: details.license,
        vehicle: details.vehicle,
        type: details.type.value,
      });

      setEditMode(false);
      next();
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="driver-wrapper">
      <div className="driver-card">
        <h3>🚚 Driver & Vehicle Details</h3>

        {error && <p className="error-text">{error}</p>}

        {/* VIEW MODE */}
        {!editMode && driverId && (
          <>
            <p><strong>License:</strong> {details.license}</p>
            <p><strong>Vehicle:</strong> {details.vehicle}</p>
            <p><strong>Type:</strong> {details.type?.label}</p>

            <div className="btn-group center">
              <button onClick={back}>← Back</button>
              <button onClick={() => setEditMode(true)}>✏️ Edit</button>
              <button onClick={next}>Next →</button>
            </div>
          </>
        )}

        {/* EDIT MODE */}
        {editMode && (
          <>
            <div className="form-group">
              <label>Driving License</label>
              <input
                value={details.license}
                onChange={(e) =>
                  setDetails({ ...details, license: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Vehicle Number</label>
              <input
                value={details.vehicle}
                onChange={(e) =>
                  setDetails({ ...details, vehicle: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Vehicle Type</label>
              <Select
                options={vehicleOptions}
                value={details.type}
                onChange={(selected) =>
                  setDetails({ ...details, type: selected })
                }
              />
            </div>

            <div className="btn-group center">
              <button onClick={back}>← Back</button>

              <button
                disabled={!isValid || loading}
                onClick={handleSave}
              >
                {loading ? "Saving..." : "Save & Next →"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DriverDetailsForm;