import "./Community.css";
import CommunityNavbar from "../CommunityNavbar/CommunityNavbar";
import Navbar from "../Navbar/Navbar";
import communityHero from "../../Assets/learningbanner.jpg";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { Link } from "react-router-dom";
import apiClient from "../../services/apiClient";
import { useState, useEffect } from "react";

export default function Community({ user, handleOnLogout, term, setTerm }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [myPostsF, setMyPostsF] = useState([]);
  // Gets posts to display on the page
  useEffect(() => {
    const listAllPostsF = async () => {
      setIsLoading(true);
      try {
        const { data } = await apiClient.listAllPostsD();
        console.log(data);
        setMyPostsF(data.posts);
      } catch (err) {
        setError(err);
      }
    };
    listAllPostsF();
  }, []);
  const button = Boolean(user.email) ? (
    <>
      <div className="forumBtn">
        <div className="forumCreate">
          <Link to="/createforumpost">Create Post</Link>
        </div>
        
      </div>
      <div className="forumBtn">
      <div className="forumList">
          <Link to="/editforumpost">See Your Posts</Link>
        </div>
        </div>
    </>
  ) : (
    <>
      <div className="forumBtn">
        <p>You must be logged in to create a forum post.</p>
      </div>
    </>
  );
  return (
    <div className="community">
      <Navbar
        user={user}
        handleOnLogout={handleOnLogout}
        term={term}
        setTerm={setTerm}
      />
      <CommunityNavbar />

      <div className="trendingCommunity">
        <h4>
          {" "}
          Trending Today <WhatshotIcon />
        </h4>
        <div className="forumposts">{button}</div>

        <div className="container">
          {myPostsF.map((post) => {
            var dateNew = new Date(post.forumCreatedAt);
            var options = {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: false,
              timeZone: "America/Los_Angeles",
            };
            var date = new Intl.DateTimeFormat("default", options).format(
              dateNew
            );
            return (
              <div className="communityContainer" key={post.forumPostId}>
                <div className="communityImageContainer">
                  <li>
                    <Link to={`/forum/${post.forumPostId}`}>
                      <img
                        className="communityImg"
                        src={`${post.imgPostUrl}`}
                        alt={`homecarousel ${post.forumPostId}`}
                      />
                    </Link>
                  </li>
                </div>

                <div className="communityTags">
                  <p className="communityTag" style={{ textAlign: "left" }}>
                    {" "}
                    <span className="communityTime" style={{ float: "right" }}>
                      {date}
                    </span>
                  </p>

                  <p className="communityTitle" style={{ textAlign: "left" }}>
                    {" "}
                    {post.forumTitle}
                  </p>
                </div>
                <p className="communityAuthor" style={{ textAlign: "left" }}>
                  by {post.username}
                </p>
                <div className="communityBlurb">
                  <span className="communityBtn" style={{ float: "right" }}>
                    <ThumbUpIcon style={{ fontSize: "15px" }} />{" "}
                    <QuestionAnswerIcon style={{ fontSize: "15px" }} />{" "}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="banner"
        style={{ backgroundImage: `url(${communityHero})` }}
      >
        {" "}
      </div>
    </div>
  );
}
