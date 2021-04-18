import React from "react";
import "./HeaderMain.css";
import backImg from "../../../../Images/ricardo-gomez-angel-opFPVxMRpP8-unsplash.jpg";
import { Link } from "react-router-dom";

const HeaderMain = () => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-5 col-xs-12 col-sm-12">
        <h1 style={{ color: "#3A4256" }}>
          Welcome to <span style={{ color: "rgb(180,1,1)" }}>BuildBetter</span>
          <br />{" "}
        </h1>
        <h6> Building with balance and care</h6>
        <p className="text-secondary">
          The activity starts with realizing what the customer needs. The right
          architecture slogans will definitely serve as an inspiration
        </p>
        <a href="#goToServices" className="btn btn-primary" alt="">
          Book Service
        </a>
      </div>
      <div className="col-md-5 col-sm-12 col-xs-12 imgHeader">
        <img src={backImg} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
