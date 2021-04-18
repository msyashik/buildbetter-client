import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../../../App";

const AddService = () => {
  const { logInUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = logInUser;
  const [imageURL, setImageURL] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const eventData = {
      serviceTitle: data.serviceTitle,
      servicePrice: data.price,
      description: data.description,
      productImage: imageURL,
    };
    console.log(eventData);
    const url = `http://localhost:5000/addService`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server side response"));
  };
  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "14be1ccd6d462335fd17232a0b3a89fd");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="text-center">
        <h3>Add Service</h3>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="serviceTitle">Service Title</label>
                <input
                  type="text"
                  name="serviceTitle"
                  className="form-control mt-2"
                  placeholder="title"
                  ref={register({
                    required: "*Service Title is required",
                  })}
                />
              </div>
              <div style={{ color: "red", fontSize: "15px" }}>
                {errors.serviceTitle && <p>{errors.serviceTitle.message}</p>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  name="price"
                  type="number"
                  className="form-control mt-2"
                  placeholder="100"
                  ref={register({
                    required: "*Price is required",
                  })}
                />
              </div>
              <div style={{ color: "red", fontSize: "15px" }}>
                {errors.price && <p>{errors.price.message}</p>}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="description" className="mt-2">
                  Description
                </label>
                <input
                  name="description"
                  type="text-area"
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
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="servicePhoto" className="mt-2">
                  Add Photo
                </label>
                <input
                  type="file"
                  name="servicePhoto"
                  className="form-control mt-2"
                  placeholder=""
                  ref={register({
                    required: "*Service Photo is required",
                  })}
                  onChange={handleImageUpload}
                />
              </div>
              <div style={{ color: "red", fontSize: "15px" }}>
                {errors.servicePhoto && <p>{errors.servicePhoto.message}</p>}
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

export default AddService;
