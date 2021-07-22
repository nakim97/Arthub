import "./About.css";
import banner2 from "../../Assets/banner2.jpg";
import team1 from "../../Assets/team1.jpeg";
import team2 from "../../Assets/team2.jpeg";
import team3 from "../../Assets/team3.jpeg";
import Navbar from "../Navbar/Navbar";

export default function About({user, handleOnLogout}) {
  return (
    <div className="about">
      <Navbar user={user} handleOnLogout={handleOnLogout} />

      <div className="banner">
        <img
          className="bannerImg"
          src={banner2}
          alt="people standing on a mountain"
        />
        <div className="bannerText">
          <h4> TOGETHER WE GROW</h4>
        </div>
      </div>

      <h2>Meet The Team</h2>

      <div className="aboutImageContainer">
        <img className="bannerImg" src={team1} alt="team member 1 image" />
        <img className="bannerImg" src={team2} alt="team member 2 image" />
        <img className="bannerImg" src={team3} alt="team member 3 image" />
      </div>

      <div className="aboutInfo">
        <p className="aboutName" style={{ textAlign: "left" }}>
          {" "}
          Brian Balthazar
        </p>
        <p className="aboutName" style={{ textAlign: "left" }}>
          {" "}
          Stella Kim
        </p>
        <p className="aboutName" style={{ textAlign: "left" }}>
          {" "}
          Rodrigo Martinez
        </p>
      </div>

      <h2>Our Mission</h2>

      <div className="mission">
        <div className="text">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className="missionImgContainer">
          <img className="missionImg" src={team1} alt="An image of the team" />
        </div>
      </div>
    </div>
  );
}
