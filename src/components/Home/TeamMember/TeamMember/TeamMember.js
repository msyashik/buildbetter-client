import React from "react";
import TeamMemberInfo from "../TeamMemberInfo/TeamMemberInfo";

const architects = [
  {
    name: "Shahariar",
    id: 1,
  },
  {
    name: "Mohammad",
    id: 2,
  },
  {
    name: "Ashik",
    id: 3,
  },
];

const TeamMember = () => {
  return (
    <div className="container" style={{ marginTop: "8%" }}>
      <div className="text-center">
        <h1>
          <span style={{ color: "rgb(180, 1, 1)" }}>Team</span> Members
        </h1>
      </div>
      <div className="row mt-4">
        {architects.map((architect) => (
          <TeamMemberInfo
            key={architect.id}
            architect={architect}
          ></TeamMemberInfo>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
