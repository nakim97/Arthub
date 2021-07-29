import "./UserProfile.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import userBanner from "../../Assets/userBanner.png";
import person2 from "../../Assets/person2.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useUserProfile } from "../../hooks/useUserProfile";

export default function UserProfile({ user, handleOnLogout }) {
  const { myName, username, posts, userInfo } = useUserProfile({ user });
  const banner_url = userInfo.banner_img_url == null;
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
  );
  const profile_url = userInfo.profile_img_url == null;
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
  );
  const bio = userInfo.biography == null;
  const biography = bio ? (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare
        turpis at libero ultricies ullamcorper. Curabitur finibus libero eu urna
        finibus aliquet. Vivamus ut bibendum quam. Aliquam erat volutpat. Aenean
        eu ligula et dui scelerisque maximus nec ut sapien.{" "}
      </p>
    </>
  ) : (
    <>
      <p>{`${userInfo.biography}`}</p>
    </>
  );
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
  return (
    <div className="user">
      <Navbar user={user} handleOnLogout={handleOnLogout} />

      <div className="banners">{banner_img}</div>

      <div className="userInfo">
        <div className="profilePic">{profile_img}</div>

        <div className="name">
          <p>{myName}</p>
          <div className="username">
            <p>{username}</p>
          </div>
        </div>
        <div className="socialMedia">
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
        </div>
      </div>

      <div className="description">{biography}</div>

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
          <div className="uploadProfile">
            <Link to="/upload">Create Post</Link>
          </div>
        </div>
      </div>

      <div className="pictureArea">
        {posts.map((post) => (
          <div className="image" key={post.photoPostId}>
            <Link to={`/post/${post.photoPostId}`}>
              <img
                src={`${post.imgPostUrl}`}
                alt={`Portfolio ${post.photoPostId}`}
              ></img>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
