import "./UserProfile.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import userBanner from "../../Assets/userBanner.png";
import person2 from "../../Assets/person2.png";
import homefeed1 from "../../Assets/homefeed1.jpg";
import homefeed2 from "../../Assets/homefeed2.jpg";
import homefeed3 from "../../Assets/homefeed3.jpg";
import homefeed4 from "../../Assets/homefeed4.jpg";
import homefeed5 from "../../Assets/homefeed5.jpg";
import homefeed6 from "../../Assets/homefeed6.jpg";

export default function UserProfile({ user, handleOnLogout }) {
  return (
    <div className="user">
      <Navbar user={user} handleOnLogout={handleOnLogout}/>

      <div className="banner">
        <img
          className="bannerImg"
          src={userBanner}
          alt="people standing on a mountain"
        />
      </div>

      <div className="userInfo">
        <div className="profilePic">
          <img className="bannerImg" src={person2} alt="user profile picture" />
        </div>

        <div className="name">
          <p>John Smith</p>
          <div className="username">
            <p>John_S23</p>
          </div>
        </div>
      </div>

      <div className="description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare
          turpis at libero ultricies ullamcorper. Curabitur finibus libero eu
          urna finibus aliquet. Vivamus ut bibendum quam. Aliquam erat volutpat.
          Aenean eu ligula et dui scelerisque maximus nec ut sapien.{" "}
        </p>
      </div>

      <div className="portfolioArea">
        <div className="Portfolio">
          <h2>Portfolio</h2>
        </div>

        <div className="editPageButns">
          <div className="editPortfolio">
            <Link to="/editportfolio">Edit Portfolio</Link>
          </div>

          <div className="editProfile">
            <Link to="/edit">Edit Profile</Link>
          </div>
        </div>
      </div>

      <div className="pictureArea">
        <div className="image">
          <img src={homefeed1} alt="user portfolio image 1" />
        </div>
        <div className="image">
          <img src={homefeed2} alt="user portfolio image 2" />
        </div>
        <div className="image">
          <img src={homefeed3} alt="user portfolio image 3" />
        </div>
        <div className="image">
          <img src={homefeed4} alt="user portfolio image 4" />
        </div>
        <div className="image">
          <img src={homefeed5} alt="user portfolio image 5" />
        </div>
        <div className="image">
          <img src={homefeed6} alt="user portfolio image 6" />
        </div>
        <div className="image">
          <img src={homefeed1} alt="user portfolio image 1" />
        </div>
        <div className="image">
          <img src={homefeed2} alt="user portfolio image 2" />
        </div>
        <div className="image">
          <img src={homefeed3} alt="user portfolio image 3" />
        </div>
        <div className="image">
          <img src={homefeed4} alt="user portfolio image 4" />
        </div>
      </div>
    </div>
  );
}
