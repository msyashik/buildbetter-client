import React, { useEffect, useState } from "react";
import ManageServicesInfo from "../ManageServicesInfo/ManageServicesInfo";

const ManageService = () => {
  const [architectureServices, setArchitectureServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setArchitectureServices(data);
      });
  }, []);

  return (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <h3>Manage Services</h3>
      </div>
      <div className="row">
        {architectureServices.map((singleService) => (
          <ManageServicesInfo
            key={singleService._id}
            singleService={singleService}
          ></ManageServicesInfo>
        ))}
      </div>
    </div>
  );
};

export default ManageService;
