import React from "react";
import DigitalExperience from "../DigitalExperience/DigitalExperience/DigitalExperience";
import Footer from "../Footer/Footer";
import Header from "../Header/Header/Header";
import References from "../References/References/References";
import Services from "../Services/Services/Services";
import TeamMember from "../TeamMember/TeamMember/TeamMember";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <DigitalExperience></DigitalExperience>
      <TeamMember></TeamMember>
      <References></References>
      <Footer></Footer>
    </div>
  );
};

export default Home;
