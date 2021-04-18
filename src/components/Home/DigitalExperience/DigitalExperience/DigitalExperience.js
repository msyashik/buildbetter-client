import React from "react";

const DigitalExperience = () => {
  return (
    <div className="container" style={{ marginTop: "8%" }}>
      <div className="row">
        <div className="col-md-7">
          <img
            style={{ width: "100%" }}
            src="https://i.ibb.co/fkWYybB/digital-Experience.jpg"
            alt=""
          />
        </div>
        <div className="col-md-5 d-flex align-items-center">
          <div>
            <h1>
              Building{" "}
              <span style={{ color: "rgb(180, 1, 1)" }}>Excellence</span>{" "}
            </h1>
            <p style={{ color: "gray" }}>
              The activity starts with realizing what the customer needs. The
              right architecture slogans will definitely serve as an
              inspiration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalExperience;
