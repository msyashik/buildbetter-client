import React from "react";

const UserOrderListShow = (props) => {
  const { service, date, currentStatus } = props.singleOrder;
  const { productImage, description, serviceTitle } = service;
  return (
    <div className="mb-3 col-lg-4 col-sm-6">
      <div className="card shadow-lg w-100 h-100 text-center rounded">
        <div className="d-flex justify-content-between align-items-center h-75 p-2">
          <img src={productImage} className="card-img-top w-25" alt="" />
          <p className="btn btn-primary">{currentStatus}</p>
        </div>
        <div className="card-body">
          <h5 className="card-title">{serviceTitle}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default UserOrderListShow;
