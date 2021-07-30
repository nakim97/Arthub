import "./About.css";
import banner2 from "../../Assets/banner2.jpg";
import team1 from "../../Assets/team1.jpeg";
import Brian from "../../Assets/brian_profile.png";
import Stella from "../../Assets/stella_profile.jpeg";
import team2 from "../../Assets/team2.jpeg";
import Navbar from "../Navbar/Navbar";

export default function About({ user, handleOnLogout }) {
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
        <img className="bannerImg" src={Brian} alt="team member 1 image" />
        <img className="bannerImg" src={Stella} alt="team member 2 image" />
        <img className="bannerImg" src={team2} alt="team member 3 image" />
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

      <div className="mission">
        <div className="missionDetail">
          <div className="missionTitle">
            <h2>Our Mission</h2>
          </div>
          <div className="text">
            <p>
              For years, art has served as an outlet for people around the world
              to express themselves. However, finding an online space that
              allows an artist to claim art as their own after upload can be
              time consuming and difficult task. We want to help!
            </p>

            <p>
              At Arthub, our mission is to help promote the growth of young
              artist by providing a safe and secure environment to upload,
              share, and engage with art from members of the Arthub community.
            </p>
          </div>

          <div className="missionTitle">
            <h2>How We Do This</h2>
          </div>
          <div className="text">
            <p>
              Explain any details of what our platform does, how is it different
              from other platforms
            </p>
          </div>
        </div>
        <div className="missionImgContainer">
          <img className="missionImg" src={team1} alt="An image of the team" />
        </div>
      </div>
    </div>
  );
}
