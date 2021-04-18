import React from "react";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#1A202C", color: "white", marginTop: "8%" }}
    >
      <div className="container pt-5">
        <div className="row" style={{ borderBottom: "1px solid gray" }}>
          <div className="col-md-4">
            <h3>BuildBetter</h3>
            <div className="pt-2">
              <p>
                A good slogan can have a very strong impact on your targets. It
                improves your image, sets you apart from the competition and
                helps customers memorize your brand.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Services</h3>
            <div className="pt-2">
              <ul style={{ listStyleType: "none", padding: "0" }}>
                <li>Interior Design</li>
                <li>Architecture Design</li>
                <li>Design & Plan</li>
                <li>Engineering Consultants</li>
                <li>Exterior Design</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <div className="pt-2">
              <p style={{ margin: "0" }}>98459478</p>
              <p style={{ margin: "0" }}>build@buildbetter.co</p>
              <p style={{ margin: "0" }}>Chittagong-4100, Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="row mt-3 text-center" style={{ color: "gray" }}>
          <p>2021 &#169; BuildBetter. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
