import React, { useEffect, useState } from "react";
import ServiceInfo from "../ServiceInfo/ServiceInfo";

const Services = () => {
  const [architectureServices, setArchitectureServices] = useState([]);
  useEffect(() => {
    fetch("https://damp-fjord-88036.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setArchitectureServices(data);
      });
  }, []);

  return (
    <div className="container" id="goToServices" style={{ marginTop: "8%" }}>
      <div style={{ textAlign: "center" }}>
        <h1>
          <span style={{ color: "rgb(180, 1, 1)" }}>Services</span> We Provide
        </h1>
      </div>
      <div className="row mt-4">
        {console.log(architectureServices)}
        {architectureServices.map((singleService) => (
          <ServiceInfo
            key={singleService._id}
            singleService={singleService}
          ></ServiceInfo>
        ))}
      </div>
    </div>
  );
};

export default Services;
