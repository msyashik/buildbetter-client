import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const UserReview = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const reviewData = {
      userName: data.userName,
      company: data.company,
      designation: data.designation,
      description: data.description,
    };
    console.log(reviewData);
    const url = `https://damp-fjord-88036.herokuapp.com/addReview`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    }).then((res) => console.log("server side response"));
  };
  return (
    <div>
      <div className="text-center">
        <h3>Review</h3>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="userName">Name</label>
                <input
                  type="text"
                  name="userName"
                  className="form-control mt-2"
                  placeholder="Mr. X"
                  ref={register({
                    required: "*Name is required",
                  })}
                />
              </div>
              <div style={{ color: "red", fontSize: "15px" }}>
                {errors.userName && <p>{errors.userName.message}</p>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  name="company"
                  type="text"
                  className="form-control mt-2"
                  placeholder="Apple"
                  ref={register({
                    required: "*Company is required",
                  })}
                />
              </div>
              <div style={{ color: "red", fontSize: "15px" }}>
                {errors.company && <p>{errors.company.message}</p>}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="designation" className="mt-2">
                  Designation
                </label>
                <input
                  name="designation"
                  type="text"
                  className="form-control mt-2"
                  placeholder="CEO"
                  ref={register({
                    required: "*Designation is required",
                  })}
                />
              </div>
              <div style={{ color: "red", fontSize: "15px" }}>
                {errors.designation && <p>{errors.designation.message}</p>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="description" className="mt-2">
                  Description
                </label>
                <input
                  name="description"
                  type="text"
                  className="form-control mt-2"
                  placeholder=""
                  ref={register({
                    required: "*Description is required",
                  })}
                />
              </div>
              <div style={{ color: "red", fontSize: "15px" }}>
                {errors.description && <p>{errors.description.message}</p>}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Button type="Submit" className="btn btn-success mt-2 w-50">
                Add
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserReview;
