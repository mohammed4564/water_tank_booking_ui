import React, { useState } from "react";
import AddressForm from "./AddressForm";
import DriverDetailsForm from "./DriverDetailsForm";
import SubscriptionForm from "./SubscriptionForm";


function BecomeDriver() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  return (
    <div>
      <h2>🚚 Become Driver</h2>

      {step === 1 && (
        <AddressForm
          next={() => setStep(2)}
          setFormData={setFormData}
          formData={formData}
        />
      )}

      {step === 2 && (
        <DriverDetailsForm
          next={() => setStep(3)}
          back={() => setStep(1)}
          setFormData={setFormData}
          formData={formData}
        />
      )}

      {step === 3 && (
        <SubscriptionForm
          back={() => setStep(2)}
          formData={formData}
        />
      )}
    </div>
  );
}

export default BecomeDriver;