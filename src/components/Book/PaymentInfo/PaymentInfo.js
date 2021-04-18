import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "16px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const PaymentInfo = ({
  displayName,
  email,
  currentService,
  handlePaymentConfirmation,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [payWithValue, setPayWithValue] = useState("Credit Card");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    if (error) {
      handlePaymentConfirmation(error.message, 1);
    } else {
      handlePaymentConfirmation("Payment Successful", 2);
      //console.log("[PaymentMethod]", paymentMethod.id);
      const userTotalServiceInfo = {
        name: displayName,
        email: email,
        service: currentService,
        payWith: payWithValue,
        paymentID: paymentMethod.id,
        date: new Date().toDateString(),
        currentStatus: "Pending",
      };
      console.log(userTotalServiceInfo);
      const url = "https://damp-fjord-88036.herokuapp.com/userOrder";
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userTotalServiceInfo),
      }).then((res) => console.log("server side response"));
    }
  };

  const handleRadioValue = (event) => {
    setPayWithValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br />
      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br />
      <label>
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br />
      <div className="row mt-3">
        <label style={{ color: "gray" }} htmlFor="payWith">
          Pay with
        </label>
        <div className="radio col-md-4 mt-2">
          <label>
            <input
              onChange={handleRadioValue}
              type="radio"
              name="paymentOption"
              value="Credit Card"
              defaultChecked={true}
            />
            Credit Card
          </label>
        </div>
        <div className="radio col-md-4 mt-2">
          <label>
            <input
              type="radio"
              name="paymentOption"
              value="Paypal"
              onChange={handleRadioValue}
            />
            Paypal
          </label>
        </div>
      </div>
      <button
        type="submit"
        disabled={!stripe}
        className="btn btn-primary mt-2"
        style={{ padding: "5px 25px" }}
      >
        Pay
      </button>
    </form>
  );
};

export default PaymentInfo;
