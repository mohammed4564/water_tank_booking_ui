
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
    // STEP 1: Create Subscription
    const subRes = await API.post("/driver-subscription/add", {
      plan_id: selectedPlan.id,
    });

    const subscription_id = subRes?.data?.subscription_id;
    if (!subscription_id) throw new Error("Subscription creation failed");

    // STEP 2: Make Payment
    const payRes = await API.post("/subscription-payment/add-payment", {
      subscription_id,
      payment_method: "cash",
      transaction_id: "CASH_" + Date.now(),
    });

    const payment_id = payRes?.data?.payment_id;
    if (!payment_id) throw new Error("Payment failed");

    console.log("Payment Done:", payRes.data);

    // ✅ Optional: update formData if parent provided setFormData
    if (typeof setFormData === "function") {
      setFormData({ ...formData, subscription: selectedPlan });
    }

    // ✅ Show message instead of calling next()
    alert(
      "✅ Payment Successful!\nPlease wait for admin approval. Your account will be active within 24 hours."
    );

    setShowPaymentModal(false);

  } catch (err) {
    console.error("Error in subscription/payment:", err);
    const msg =
      err?.response?.data?.error || err.message || "Something went wrong ❌";
    alert(msg);
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