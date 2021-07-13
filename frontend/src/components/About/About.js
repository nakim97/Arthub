import "./About.css";
import banner2 from "../../Assets/banner2.jpg";
import Navbar from "../Navbar/Navbar";

export default function About() {
  return (
    <div className="about">
      <Navbar />

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

      <div className="team">
        <img className="pictures" src={team1} alt="team member picture 1" />
        <img className="pictures" src={team2} alt="team member picture 2" />
        <img className="pictures" src={team3} alt="team member picture 3" />
      </div>

      <div className="teamInfo">
        <p className="memberName">
          Member Name
          <span className="description">Small Description for team member</span>
        </p>
      </div>
    </div>
  );
}
