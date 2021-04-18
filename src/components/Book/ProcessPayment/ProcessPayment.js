import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import Payment from "../Payment/Payment";
import { useParams } from "react-router-dom";

const ProcessPayment = () => {
  const { logInUser } = useContext(UserContext);
  const { register, errors, handleSubmit } = useForm();
  const [loggedIn, setLoggedIn] = logInUser;
  const { displayName, email } = loggedIn;
  const { id } = useParams();
  const [currentService, setCurrentService] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorMessageValue, setErrorMessageValue] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/singleService/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCurrentService(data[0]);
      });
  }, [id]);

  const handlePaymentConfirmation = (message, currentState) => {
    setErrorMessage(message);
    if (currentState === 1) {
      setErrorMessageValue(1);
    } else setErrorMessageValue(2);
  };

  return (
    <div>
      <div className="row d-flex ms-1">
        <input
          name="displayName"
          className="form-control "
          placeholder="User Name"
          defaultValue={displayName}
          ref={register}
          disabled
        />
        <input
          name="email"
          className="form-control "
          placeholder="email"
          defaultValue={email}
          ref={register}
          disabled
        />
        <input
          name="name"
          className="form-control "
          placeholder="Service Name"
          defaultValue={currentService.serviceTitle}
          ref={register}
          disabled
        />
      </div>
      <Payment
        displayName={displayName}
        email={email}
        currentService={currentService}
        handlePaymentConfirmation={handlePaymentConfirmation}
      ></Payment>
      <div className="mt-2" style={{ color: "red" }}>
        {errorMessageValue === 1 && <p>{errorMessage}</p>}
      </div>
      <div className="mt-2" style={{ color: "green" }}>
        {errorMessageValue === 2 && <p>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default ProcessPayment;
