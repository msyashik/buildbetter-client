import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import "./ServiceInfo.css";

const ServiceInfo = (props) => {
  const history = useHistory();

  const {
    description,
    productImage,
    servicePrice,
    serviceTitle,
    _id,
  } = props.singleService;

  const handleBook = (id) => {
    history.push(`/book/${id}`);
  };

  return (
    <div className="col-md-4 serviceAnimation mt-3">
      <div className="card h-100">
        <img className="card-img-top h-50" src={productImage} alt="" />
        <div className="card-body">
          <h5 className="card-title">{serviceTitle}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between align-items-center">
            <h4>${servicePrice}</h4>
            <button
              onClick={() => handleBook(_id)}
              style={{ padding: "6px 30px" }}
              className="btn btn-primary"
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
