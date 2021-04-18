import React from "react";
import { CardElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentInfo from "../PaymentInfo/PaymentInfo";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Payment = ({
  displayName,
  email,
  currentService,
  handlePaymentConfirmation,
}) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentInfo
        displayName={displayName}
        email={email}
        currentService={currentService}
        handlePaymentConfirmation={handlePaymentConfirmation}
      ></PaymentInfo>
    </Elements>
  );
};

export default Payment;
