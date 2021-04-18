import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReferenceInfo = (props) => {
  const { userName, designation, description, company } = props.review;
  return (
    <div className="col-md-4">
      <div className="card h-100">
        <div className="card-body text-center">
          <p className="card-title">{userName}</p>
          <small>{designation}</small>, <small>{company}</small>
        </div>
        <div className="card-body">
          <p>{description}</p>
        </div>
        <div className="card-body text-center">
          <FontAwesomeIcon icon={faStar} style={{ color: "#fff000" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#fff000" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#fff000" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#fff000" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#fff000" }} />
        </div>
      </div>
    </div>
  );
};

export default ReferenceInfo;
