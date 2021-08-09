import "./UserProfile.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useUserProfile } from "../../hooks/useUserProfile";
import { useUserHandles } from "../../hooks/useUserHandles";

export default function UserProfile({ user, handleOnLogout, term, setTerm }) {
  const { myName, username, posts, userInfo } = useUserProfile({ user });
  const {
    biography,
    instagram_url,
    facebook_url,
    twitter_url,
    banner_img,
    profile_img,
  } = useUserHandles({ userInfo });

  //Unauthenticated view
  if (!user.email) {
    return (
      <div className="total">
        <Navbar
          user={user}
          handleOnLogout={handleOnLogout}
          term={term}
          setTerm={setTerm}
        />
        <div className="title">
          <h2>You must be logged in to view your profile.</h2>
        </div>
      </div>
    );
  }
  return (
    <div className="user">
      <Navbar
        user={user}
        handleOnLogout={handleOnLogout}
        term={term}
        setTerm={setTerm}
      />

      <div className="banners">{banner_img}</div>

      <div className="userInfo">
        <div className="profile">
          <div className="profilePic">{profile_img}</div>
          <div className="profileNameUser">
            <div className="profileName">
              <p>{myName}</p>
            </div>
            <div className="profileUsername">
              <p>{username}</p>
            </div>
          </div>

          <div className="mediaLinks">
            <div className="socialMedia">
              <a target="_blank" rel="noreferrer" href={`${instagram_url}`}>
                <InstagramIcon />
              </a>
              <a target="_blank" rel="noreferrer" href={`${facebook_url}`}>
                <FacebookIcon />
              </a>
              <a target="_blank" rel="noreferrer" href={`${twitter_url}`}>
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="userBio">
        <div className="description">{biography}</div>
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
