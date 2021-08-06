import "./UserDetail.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import userBanner from "../../Assets/userBanner.png";
import person2 from "../../Assets/person2.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";

export default function UserDetail({ user, handleOnLogout, term, setTerm }) {
  const { Id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [myUser, setMyUser] = useState([]);
  const [error, setError] = useState(false);
  const [isFetching, setFetching] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUserById = async () => {
      setIsLoading(true);
      try {
        const { data } = await apiClient.listUserWithId(Id);
        setMyUser(data.using);
      } catch (err) {
        setError(err);
      }

      setIsLoading(false);
    };
    fetchUserById();
  }, [Id]);

  useEffect(() => {
    const fetchPosts = async () => {
      setFetching(true);
      try {
        const { data } = await apiClient.listPosts(myUser);
        setPosts(data.postsByMe);
      } catch (err) {
        setError(err);
      }

      setFetching(false);
    };
    fetchPosts();
  }, [myUser, posts]);

  const renderPostContent = () => {
    if (isLoading) return <h1>Loading...</h1>;
    if (error || !myUser) return <p className="description">No user found</p>;
    function joinName(fName, lName) {
      return fName + " " + lName;
    }
    const username = myUser.username;
    const myName = joinName(myUser.first_name, myUser.last_name);
    let instagram_url = "",
      facebook_url = "",
      twitter_url = "";
    const instagram =
      myUser.instagram_url == null || myUser.instagram_url == "null";
    // We have a link to use
    if (!instagram) {
      instagram_url = "http://" + myUser.instagram_url;
    }
    const facebook =
      myUser.facebook_url == null || myUser.facebook_url == "null";
    // We have a link to use
    if (!facebook) {
      facebook_url = "http://" + myUser.facebook_url;
    }
    const twitter = myUser.twitter_url == null || myUser.twitter_url == "null";
    // We have a link to use
    if (!twitter) {
      twitter_url = "http://" + myUser.twitter_url;
    }
    const banner_url =
      myUser.banner_img_url == null || myUser.banner_img_url == "null";
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
          src={`${myUser.banner_img_url}`}
          alt="my banner"
        />
      </>
    );
    const profile_url =
      myUser.profile_img_url == null || myUser.profile_img_url == "null";
    const profile_img = profile_url ? (
      <>
        {/* Return default image */}
        <img className="profilePic" src={person2} alt="user profile picture" />
      </>
    ) : (
      <>
        {/* Use our own image */}
        <img
          className="profilePic"
          src={`${myUser.profile_img_url}`}
          alt="my profile"
        />
      </>
    );
    const bio = myUser.biography == null || myUser.biography == "null";
    const biography = bio ? (
      <>
        <div className="description">
          <p>No biography</p>
        </div>
      </>
    ) : (
      <>
        <div className="description">
          <p>{`${myUser.biography}`}</p>
        </div>
      </>
    );
    return (
      <div className="user">
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
                <a target="_blank" href={`${instagram_url}`}>
                  <InstagramIcon />
                </a>
                <a target="_blank" href={`${facebook_url}`}>
                  <FacebookIcon />
                </a>
                <a target="_blank" href={`${twitter_url}`}>
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
  };

  return (
    <div className="user">
      <Navbar
        user={user}
        handleOnLogout={handleOnLogout}
        term={term}
        setTerm={setTerm}
      />
      {renderPostContent()}
    </div>
  );
}
