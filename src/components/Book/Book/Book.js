import React, { useState } from "react";
import NavHeader from "../../Home/Header/NavHeader/NavHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListAlt,
  faShoppingCart,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import Payment from "../Payment/Payment";
import UserOrdersList from "../UserOrdersList/UserOrdersList";
import UserReview from "../UserReview/UserReview";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
import "./Book.css";

const Book = (props) => {
  const [currentOption, setCurrentOption] = useState(1);

  const handleCurrentOption = (value) => {
    setCurrentOption(value);
  };

  return (
    <div className="container">
      <NavHeader></NavHeader>
      <div className="row">
        <div className="col-md-3" style={{ backgroundColor: "rgb(180,1,1)" }}>
          <div className="cardMobileView">
            <button
              style={{ borderStyle: "none", backgroundColor: "rgb(180,1,1)" }}
              onClick={() => handleCurrentOption(1)}
            >
              <p className="hover-style">
                <FontAwesomeIcon icon={faShoppingCart} /> Book
              </p>
            </button>
          </div>
          <div className="cardMobileView">
            <button
              style={{ borderStyle: "none", backgroundColor: "rgb(180,1,1)" }}
              onClick={() => handleCurrentOption(2)}
            >
              <p className="hover-style">
                <FontAwesomeIcon icon={faListAlt} /> Booking List
              </p>
            </button>
          </div>
          <div className="cardMobileView">
            <button
              style={{ borderStyle: "none", backgroundColor: "rgb(180,1,1)" }}
              onClick={() => handleCurrentOption(3)}
            >
              <p className="hover-style">
                <FontAwesomeIcon icon={faComment} /> Review
              </p>
            </button>
          </div>
        </div>
        <div className="col-md-9 bookMobileView">
          {currentOption === 1 && <ProcessPayment></ProcessPayment>}
          {currentOption === 2 && <UserOrdersList></UserOrdersList>}
          {currentOption === 3 && <UserReview></UserReview>}
        </div>
      </div>
    </div>
  );
};

export default Book;
