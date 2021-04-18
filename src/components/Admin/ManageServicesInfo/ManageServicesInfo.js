import React from "react";

const ManageServicesInfo = (props) => {
  const {
    description,
    productImage,
    servicePrice,
    serviceTitle,
    _id,
  } = props.singleService;
  const handleDelete = (id) => {
    fetch(`https://damp-fjord-88036.herokuapp.com/deleteService/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          console.log(res);
        }
      });
  };
  return (
    <div className="col-md-4 mt-3">
      <div className="card h-100">
        <img className="card-img-top h-50" src={productImage} alt="" />
        <div className="card-body">
          <h5 className="card-title">{serviceTitle}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <h4>${servicePrice}</h4>
            <button
              style={{ padding: "6px 30px" }}
              className="btn btn-danger"
              onClick={() => handleDelete(_id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageServicesInfo;
