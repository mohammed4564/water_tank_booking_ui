// import React, { useEffect, useState } from "react";
// import API from "../../../config/api";
// import "./SubscriptionForm.css";

// function SubscriptionForm({ back, formData, setFormData, next }) {
//   const [plans, setPlans] = useState([]);
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Fetch Plans from backend
//   useEffect(() => {
//     fetchPlans();
//   }, []);

//   const fetchPlans = async () => {
//     try {
//       setLoading(true);
//       setError("");
//       const res = await API.get("/plans/plans"); // backend endpoint

//       const formattedPlans = res.data.map((p) => ({
//         id: p.id,
//         name: p.plan_name,
//         price: p.price,
//         duration: `${p.duration_days} days`,
//         features: p.features || [],
//         recommended: p.recommended || false, // optional if backend has recommended field
//       }));

//       setPlans(formattedPlans);
//     } catch (err) {
//       console.error(err);
//       setError("Failed to load subscription plans.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = () => {
//     if (!selectedPlan) {
//       alert("Please select a subscription plan.");
//       return;
//     }

//     setFormData({
//       ...formData,
//       subscription: selectedPlan,
//     });

//     next();
//   };

//   return (
//     <div className="subscription-container">
//       <h2>💳 Choose Your Plan</h2>
//       <p className="subtitle">Select a subscription to start accepting orders</p>

//       {loading && <p className="loading">Loading plans...</p>}
//       {error && <p className="error-text">{error}</p>}

//       <div className="plans">
//         {plans.map((plan) => (
//           <div
//             key={plan.id}
//             className={`plan-card ${selectedPlan?.id === plan.id ? "active" : ""} ${
//               plan.recommended ? "recommended" : ""
//             }`}
//             onClick={() => setSelectedPlan(plan)}
//           >
//             {plan.recommended && <span className="badge">Recommended</span>}
//             <h3>{plan.name}</h3>
//             <h2>₹{plan.price}</h2>
//             <p>/ {plan.duration}</p>
//             <ul>
//               {plan.features.map((f, i) => (
//                 <li key={i}>✔ {f}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       <div className="btn-group">
//         <button className="back-btn" onClick={back}>← Back</button>
//         <button
//           className="submit-btn"
//           onClick={handleSubmit}
//           disabled={!selectedPlan}
//         >
//           Confirm & Continue →
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SubscriptionForm;
import React, { useEffect, useState, useRef } from "react";
import API from "../../../config/api";
import "./SubscriptionForm.css";

function SubscriptionForm({ back, formData, setFormData, next }) {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await API.get("/plans/plans");
      const formattedPlans = res.data.map((p) => ({
        id: p.id,
        name: p.plan_name,
        price: p.price,
        duration: `${p.duration_days} days`,
        features: p.features || [],
      }));
      setPlans(formattedPlans);
    } catch (err) {
      console.error(err);
      setError("Failed to load subscription plans.");
    } finally {
      setLoading(false);
    }
  };

  // Open Razorpay-like modal
  const handleOpenPaymentModal = (plan) => {
    setSelectedPlan(plan);
    setShowPaymentModal(true);
  };

  // Close modal if click outside
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowPaymentModal(false);
    }
  };

  // Cash Payment handler
  const handleCashPayment = async () => {
    try {
      setFormData({ ...formData, subscription: selectedPlan });
      await API.post("/payment/cash", {
        plan_id: selectedPlan.id,
        user_id: JSON.parse(localStorage.getItem("user"))?.id,
        amount: selectedPlan.price,
        payment_method: "cash",
      });
      alert("✅ Payment received. Account will be active in 24 hours!");
      setShowPaymentModal(false);
      next();
    } catch (err) {
      console.error(err);
      alert("Failed to record payment.");
    }
  };

  return (
    <div className="subscription-container">
      <h2>💳 Choose Your Plan</h2>
      <p className="subtitle">Select a subscription to start accepting orders</p>

      {loading && <p>Loading plans...</p>}
      {error && <p className="error-text">{error}</p>}

      <div className="plans">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`plan-card ${selectedPlan?.id === plan.id ? "active" : ""}`}
            onClick={() => handleOpenPaymentModal(plan)}
          >
            <h3>{plan.name}</h3>
            <h2>₹{plan.price}</h2>
            <p>/ {plan.duration}</p>
            <ul>
              {plan.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Razorpay-like Modal */}
      {showPaymentModal && (
        <div
          className="razorpay-modal-backdrop"
          onClick={handleClickOutside}
        >
          <div className="razorpay-modal" ref={modalRef}>
            <div className="razorpay-header">
              <h3>Pay ₹{selectedPlan.price}</h3>
              <button
                className="razorpay-close"
                onClick={() => setShowPaymentModal(false)}
              >
                ×
              </button>
            </div>

            <div className="razorpay-body">
              <p>Select Payment Method:</p>
              <div className="payment-methods">
                <div className="payment-option disabled">💳 Card (Coming Soon)</div>
                <div className="payment-option disabled">🪙 Wallet (Coming Soon)</div>
                <div className="payment-option disabled">📱 UPI (Coming Soon)</div>
                <div
                  className="payment-option active"
                  onClick={handleCashPayment}
                >
                  💵 Cash Payment
                </div>
              </div>
              <p className="modal-amount">
                Amount: <strong>₹{selectedPlan.price}</strong>
              </p>
            </div>

            <div className="razorpay-footer">
              <button
                className="back-btn"
                onClick={() => setShowPaymentModal(false)}
              >
                ← Back
              </button>
              <button className="submit-btn w-50" onClick={handleCashPayment}>
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubscriptionForm;