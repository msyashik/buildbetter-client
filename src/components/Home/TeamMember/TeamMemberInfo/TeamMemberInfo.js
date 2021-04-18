import React from "react";

const TeamMemberInfo = ({ architect }) => {
  return (
    <div className="col-md-4 mt-3">
      <div className="card">
        <img
          style={{ height: "300px" }}
          className="card-img-top"
          src="https://i.ibb.co/J5f0LFG/IMG-20210218-145124-prev-ui.png"
          alt=""
        />
        <div className="card-body text-center">
          <h5 className="card-title">{architect.name}</h5>
          <small className="card-text">Architect</small>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberInfo;
