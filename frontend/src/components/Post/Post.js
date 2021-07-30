import * as React from "react";
import "./Post.css";
import Navbar from "../Navbar/Navbar";
import userBanner from "../../Assets/userBanner.png";
import person2 from "../../Assets/person2.png";

export default function Post({ user, handleOnLogout }) {
  // (user.id)
  // We need the user id, and there would be a button to add or remove a link
  return (
    <div className="user">
      <Navbar user={user} handleOnLogout={handleOnLogout} />

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
    </div>
  );
}
