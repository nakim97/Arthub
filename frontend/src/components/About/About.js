import "./About.css";
import banner2 from "../../Assets/banner7.jpg";
import team1 from "../../Assets/team1.jpeg";
import Brian from "../../Assets/brian_profile.png";
import Stella from "../../Assets/stella_profile.jpeg";
import team2 from "../../Assets/team2.jpeg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Navbar from "../Navbar/Navbar";

export default function About({ user, handleOnLogout, term, setTerm }) {
  return (
    <div className="about">
      <Navbar
        user={user}
        handleOnLogout={handleOnLogout}
        term={term}
        setTerm={setTerm}
      />

      <div className="banner">
        <img
          className="bannerImg"
          src={banner2}
          alt="people standing on a mountain"
        />
        <div className="bannerText">
          <h4>WHERE OUR STORY BEGAN</h4>
        </div>
      </div>

      <h2>Meet The Team</h2>

      <div className="aboutImageContainer">
        <img className="bannerImg" src={Brian} alt="team member 1" />
        <img className="bannerImg" src={Stella} alt="team member 2" />
        <img className="bannerImg" src={team2} alt="team member 3" />
      </div>

      <div className="aboutInfo">
        <div className="Brian">
          <div className="socialMedia1">
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://www.linkedin.com/in/brian-balthazar/"}
            >
              <LinkedInIcon />
            </a>
          </div>

          <p className="aboutName" style={{ textAlign: "left" }}>
            {" "}
            Brian Balthazar
          </p>
        </div>
        <div className="Stella">
          <div className="socialMedia2">
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://www.linkedin.com/in/stellakim97/"}
            >
              <LinkedInIcon />
            </a>
          </div>

          <p className="aboutName" style={{ textAlign: "left" }}>
            {" "}
            Stella Kim
          </p>
        </div>
        <div className="Rodrigo">
          <div className="socialMedia3">
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://www.linkedin.com/in/rodrigo-martinez-2023/"}
            >
              <LinkedInIcon />
            </a>
          </div>

          <p className="aboutName" style={{ textAlign: "left" }}>
            {" "}
            Rodrigo Martinez
          </p>
        </div>
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
              allows an artist to claim art as their own after uploading can be
              time consuming and a difficult task. We want to help!
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
          <div className="text2">
            <p>
              At Arthub, we aim to provide reassurance and exposure to every
              artist in our community by showing them that:{" "}
            </p>

            <p>○ Your work continues to be YOUR work</p>
            <p>○ Art uploaded on our platform can be viewed by all members</p>
            <p>○ Practice is the key to becoming a better artist</p>
          </div>
        </div>
        <div className="missionImgContainer">
          <img className="missionImg" src={team1} alt="The team" />
        </div>
      </div>
    </div>
  );
}
