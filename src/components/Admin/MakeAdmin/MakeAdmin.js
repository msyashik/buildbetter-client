import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const adminData = {
      email: data.newAdmin,
    };
    const url = `https://damp-fjord-88036.herokuapp.com/makeAdmin`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(adminData),
    }).then((res) => console.log("server side response"));
  };

  return (
    <div>
      <div className="text-center">
        <h3>Make Admin</h3>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="newAdmin">Email</label>
                <input
                  type="text"
                  name="newAdmin"
                  className="form-control"
                  placeholder="xyz@abc.com"
                  ref={register({
                    required: "*Email is required",
                  })}
                />
              </div>
              <div style={{ color: "red", fontSize: "15px" }}>
                {errors.newAdmin && <p>{errors.newAdmin.message}</p>}
              </div>
            </div>
            <div className="col-md-6">
              <Button type="Submit" className="btn btn-success mt-4 w-50">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
