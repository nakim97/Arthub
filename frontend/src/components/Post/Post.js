import "./Post.css";
import Navbar from "../Navbar/Navbar";
import userBanner from "../../Assets/userBanner.png";
import person2 from "../../Assets/person2.png";
import homefeed1 from "../../Assets/homefeed1.jpg";
import homefeed2 from "../../Assets/homefeed2.jpg";
import homefeed3 from "../../Assets/homefeed3.jpg";
import homefeed4 from "../../Assets/homefeed4.jpg";
import homefeed5 from "../../Assets/homefeed5.jpg";
import homefeed6 from "../../Assets/homefeed6.jpg";

export default function Explore() {
  return (
    <div className="user">
      <Navbar />

      <div className="userInfo">
        <div className="profilePic">
          <img
            className="profileImg"
            src={person2}
            alt="user profile picture"
          />
        </div>

        <div className="username">
          <p>John_S23</p>
        </div>
      </div>

      <div className="banner">
        <img
          className="bannerImg"
          src={userBanner}
          alt="people standing on a mountain"
        />
      </div>
      <div className="comments">
        <div className="title">
          <h2>Comments</h2>
        </div>

        <div className="commentsUserInfo">
          <div className="profilePic">
            <img
              className="profileImg"
              src={person2}
              alt="user profile picture"
            />
          </div>

          <div className="name">
            <p>Mike</p>
            <div className="commentDes">
              <p>This is really cool!</p>
            </div>
          </div>
        </div>

        <div className="commentsUserInfo">
          <div className="profilePic">
            <img
              className="profileImg"
              src={person2}
              alt="user profile picture"
            />
          </div>

          <div className="name">
            <p>Frank</p>
            <div className="commentDes">
              <p>This needs to be in a museum! It really great!</p>
            </div>
          </div>
        </div>

        <div className="commentsUserInfo">
          <div className="profilePic">
            <img
              className="profileImg"
              src={person2}
              alt="user profile picture"
            />
          </div>

          <div className="name">
            <p>Jessica</p>
            <div className="commentDes">
              <p>Love the attention to detail!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
