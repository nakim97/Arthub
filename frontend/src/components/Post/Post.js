import * as React from "react";
import { useForm } from "react-hook-form";
import "./Post.css";
import Navbar from "../Navbar/Navbar";
import userBanner from "../../Assets/userBanner.png";
import person2 from "../../Assets/person2.png";

import Comments from "../Comments/Comments";

export default function Post({ user, handleOnLogout }) {
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

      <Comments />

      {/* <div className="comments">
        <div className="title">
          <h2>Comments</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Comments"
            {...register("Comments", {})}
          />

          <input type="submit" />
        </form>
      </div> */}

      {/* <div className="comments">
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
      </div> */}
    </div>
  );
}
