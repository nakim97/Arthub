import "./UserProfile.css";
import Navbar from "../Navbar/Navbar";
import banner5 from "../../Assets/banner5.png";

export default function Explore() {
  return (
    <div className="user">
      <Navbar />

      <div className="banner">
        <img
          className="bannerImg"
          src={banner5}
          alt="people standing on a mountain"
        />
      </div>
    </div>
  );
}
