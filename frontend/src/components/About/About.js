import "./About.css";
import banner2 from "../../assets/banner2.jpg";
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
    </div>
  );
}
