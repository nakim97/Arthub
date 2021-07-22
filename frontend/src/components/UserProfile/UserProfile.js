import "./UserProfile.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import userBanner from "../../Assets/userBanner.png";
import person2 from "../../Assets/person2.png";
import { useState, useEffect } from "react";
import apiClient from "../../services/apiClient";
import { useUserProfile } from "../../hooks/useUserProfile";

export default function UserProfile({ user, handleOnLogout }) {
  // console.log(user)
  const [isFetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  function joinName(fName, lName) {
    return fName + " " + lName;
  }
  const [posts, setPosts] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const myName = joinName(user.first_name, user.last_name)
  const username = user.username
  useEffect(() => {
    const fetchPosts = async () => {
      setFetching(true);
      try {
        const { data } = await apiClient.listPosts(user);

        setPosts(data.postsByMe);
      } catch (err) {
        setError(err);
      }

      setFetching(false);
    };
    fetchPosts();
  }, [user]);

  useEffect(() => {
    const fetchUsers = async () => {
      setFetching(true);
      try {
        const { data } = await apiClient.listUserByEmail(user.email);
        
        setUserInfo(data.user);
        // console.log("user",userInfo)
      } catch (err) {
        setError(err);
      }

      setFetching(false);
    };
    fetchUsers();
  }, [user]);
  //Unauthenticated view
  if (!user.email) {
    return (
      <div className="total">
        <Navbar user={user} handleOnLogout={handleOnLogout} />
        <div className="title">
          <h2>You must be logged in to view your profile.</h2>
        </div>
      </div>
    );
  }
  const banner_url = userInfo.banner_img_url == null
  const banner_img = banner_url ? (
    <>
    <img
          className="bannerImg"
          src={userBanner}
          alt="people standing on a mountain"
        />
    </>
  ) : (
    <>
    <img
          className="bannerImg"
          src={`${userInfo.banner_img_url}`}
          alt="my banner"
        />
    </>
  )
  const profile_url = userInfo.profile_img_url == null
  const profile_img = profile_url ? (
    <>
    <img className="bannerImg" src={person2} alt="user profile picture" />
    </>
  ) : (
    <>
    <img
          className="bannerImg"
          src={`${userInfo.profile_img_url}`}
          alt="my profile"
        />
    </>
  )
  return (
    <div className="user">
      <Navbar user={user} handleOnLogout={handleOnLogout}/>

      <div className="banner">
        {banner_img}
      </div>

      <div className="userInfo">
        <div className="profilePic">
        {profile_img}
        </div>

        <div className="name">
          <p>{myName}</p>
          <div className="username">
            <p>{username}</p>
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
      {posts.map((post) => (
        <div className="image" key={post.photoPostId}>
          <img src={`${post.imgPostUrl}`} alt="Portfolio"></img>
        </div>
      ))}
      </div>
    </div>
  );
}
