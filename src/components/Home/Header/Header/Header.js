import React from "react";
import HeaderMain from "../HeaderMain/HeaderMain";
import NavHeader from "../NavHeader/NavHeader";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <NavHeader></NavHeader>
      <div className="headerContainer container">
        <HeaderMain></HeaderMain>
      </div>
    </div>
  );
};

export default Header;
