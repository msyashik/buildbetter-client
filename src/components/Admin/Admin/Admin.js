import React, { useState } from "react";
import NavHeader from "../../Home/Header/NavHeader/NavHeader";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListAlt,
  faPlus,
  faUserShield,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import "./Admin.css";
import OrderList from "../OrderList/OrderList";
import AddService from "../AddService/AddService";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageService from "../ManageService/ManageService";

const Admin = () => {
  const [currentOption, setCurrentOption] = useState(1);

  const handleCurrentOption = (value) => {
    setCurrentOption(value);
  };

  return (
    <div className="container">
      <NavHeader></NavHeader>
      <div className="row">
        <div
          className="col-md-3 cardMobileView"
          style={{ backgroundColor: "rgb(180,1,1)" }}
        >
          <div>
            <button
              style={{ borderStyle: "none", backgroundColor: "rgb(180,1,1)" }}
              onClick={() => handleCurrentOption(1)}
            >
              <p className="hover-style">
                <FontAwesomeIcon icon={faListAlt} /> Order List
              </p>
            </button>
          </div>
          <div>
            <button
              style={{ borderStyle: "none", backgroundColor: "rgb(180,1,1)" }}
              onClick={() => handleCurrentOption(2)}
            >
              <p className="hover-style">
                <FontAwesomeIcon icon={faPlus} /> Add Service
              </p>
            </button>
          </div>
          <div>
            <button
              style={{ borderStyle: "none", backgroundColor: "rgb(180,1,1)" }}
              onClick={() => handleCurrentOption(3)}
            >
              <p className="hover-style">
                <FontAwesomeIcon icon={faUserShield} /> Make Admin
              </p>
            </button>
          </div>
          <div>
            <button
              style={{ borderStyle: "none", backgroundColor: "rgb(180,1,1)" }}
              onClick={() => handleCurrentOption(4)}
            >
              <p className="hover-style">
                <FontAwesomeIcon icon={faTasks} /> Manage Services
              </p>
            </button>
          </div>
        </div>
        <div className="col-md-9">
          {currentOption === 1 && <OrderList></OrderList>}
          {currentOption === 2 && <AddService></AddService>}
          {currentOption === 3 && <MakeAdmin></MakeAdmin>}
          {currentOption === 4 && <ManageService></ManageService>}
        </div>
      </div>
    </div>
  );
};

export default Admin;
