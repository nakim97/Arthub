import "./Community.css";
import CommunityNavbar from "../CommunityNavbar/CommunityNavbar";
import Navbar from "../Navbar/Navbar";
import communityHero from "../../Assets/learningbanner.jpg";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { Link } from "react-router-dom";
import { useCommunity } from "../../hooks/useCommunity";

export default function Community({
  user,
  handleOnLogout,
  term,
  setTerm,
  forumTerm,
  setForumTerm,
}) {
  const { button, myPostsF } = useCommunity({ user });
  return (
    <div className="community">
      <Navbar
        user={user}
        handleOnLogout={handleOnLogout}
        term={term}
        setTerm={setTerm}
      />
      <CommunityNavbar forumTerm={forumTerm} setForumTerm={setForumTerm} />

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
        className="bannerBackground"
        style={{ backgroundImage: `url(${communityHero})`, height: "880px" }}
      >
        {" "}
      </div>
    </div>
  );
}
