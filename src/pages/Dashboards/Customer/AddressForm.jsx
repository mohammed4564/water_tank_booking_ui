import React, { useEffect, useState } from "react";
import "./AddressForm.css";
import API from "../../../config/api";

function AddressForm({ next, setFormData, formData }) {
  const [address, setAddress] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  // ✅ Fetch existing address
  useEffect(() => {
    fetchAddress();
  }, []);

  const fetchAddress = async () => {
    try {
      const res = await API.get("/address/my-addresses");

      if (res.data.length > 0) {
        const a = res.data[0];

        setAddress(a);
        setForm({
          address: a.address,
          city: a.city,
          state: a.state,
          pincode: a.pincode,
        });

        setEditMode(false);
      } else {
        setEditMode(true); // no address → show form
      }
    } catch (err) {
      console.error(err);

      // 🔥 IMPORTANT: fallback UI
      setEditMode(true);
      setError("Unable to fetch address. Please enter manually.");
    } finally {
      setInitialLoading(false);
    }
  };

  // ➕ Add / Update
  const handleSubmit = async () => {
    if (!form.address || !form.city) {
      alert("Fill required fields");
      return;
    }

    try {
      setLoading(true);
      setError("");

      let res;

      if (address) {
        // ✏️ UPDATE
        await API.put(`/address/update-address/${address.id}`, {
          address_line: form.address,
          city: form.city,
          state: form.state,
          pincode: form.pincode,
        });

        res = { data: { address_id: address.id } };
      } else {
        // ➕ ADD
        res = await API.post("/address/add-address", {
          address_line: form.address,
          city: form.city,
          state: form.state,
          pincode: form.pincode,
        });
      }

      const savedAddress = {
        id: res.data.address_id,
        ...form,
      };

      setAddress(savedAddress);
      setFormData({ ...formData, address: savedAddress });
      setEditMode(false);

      next(); // move next

    } catch (err) {
      console.error(err);
      setError("Failed to save address. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Loading UI
  if (initialLoading) {
    return (
      <div className="address-container border p-4">
        <p>Loading address...</p>
      </div>
    );
  }

  return (
    <div className="address-container border p-4">
      <h3>📍 Address Details</h3>

      {/* ❌ Error Message */}
      {error && <p className="error-text">{error}</p>}

      {/* ✅ VIEW MODE */}
      {!editMode && address && (
        <div className="address-card selected">
          <p><strong>{address.address}</strong></p>
          <p>{address.city}, {address.state} - {address.pincode}</p>

          <div className="address-actions">
            <button onClick={() => setEditMode(true)}>✏️ Edit</button>

            <button
              className="next-btn"
              onClick={() => {
                setFormData({ ...formData, address });
                next();
              }}
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {/* ✏️ FORM MODE (ALWAYS SHOWN IF ERROR / FIRST TIME) */}
      {editMode && (
        <div className="address-form">
          <input
            placeholder="Address"
            value={form.address}
            onChange={(e) =>
              setForm({ ...form, address: e.target.value })
            }
          />
          <input
            placeholder="City"
            value={form.city}
            onChange={(e) =>
              setForm({ ...form, city: e.target.value })
            }
          />
          <input
            placeholder="State"
            value={form.state}
            onChange={(e) =>
              setForm({ ...form, state: e.target.value })
            }
          />
          <input
            placeholder="Pincode"
            value={form.pincode}
            onChange={(e) =>
              setForm({ ...form, pincode: e.target.value })
            }
          />

          <button onClick={handleSubmit} disabled={loading}>
            {loading
              ? "Saving..."
              : address
              ? "Update & Continue"
              : "Add & Continue"}
          </button>
        </div>
      )}
    </div>
  );
}

export default AddressForm;