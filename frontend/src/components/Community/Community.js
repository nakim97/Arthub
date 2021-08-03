import "./Community.css";
import CommunityNavbar from "../CommunityNavbar/CommunityNavbar";
import Navbar from "../Navbar/Navbar";
import communityHero from "../../Assets/learningbanner.jpg";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

import homefeed1 from "../../Assets/homefeed1.jpg";
import homefeed7 from "../../Assets/homefeed7.jpg";
import homefeed4 from "../../Assets/homefeed4.jpg";
import homefeed5 from "../../Assets/homefeed5.jpg";
import homefeed6 from "../../Assets/homefeed6.jpg";

export default function Community({ user, handleOnLogout, term, setTerm}) {
  return (
    <div className="community">
      <Navbar user={user} handleOnLogout={handleOnLogout} term={term} setTerm={setTerm}   />
      <CommunityNavbar />

      <div className="trendingCommunity">
        <h4>
          {" "}
          Trending Today <WhatshotIcon />
        </h4>
        <div className="container">
          <div className="communityContainer">
            <div className="communityImageContainer">
              <li>
                <img
                  className="communityImg"
                  src={homefeed1}
                  alt=" home feed img 4"
                />
              </li>
            </div>

            <div className="communityTags">
              <p className="communityTag" style={{ textAlign: "left" }}>
                {" "}
                # Tutorial
                <span className="communityTime" style={{ float: "right" }}>
                  6 hours ago{" "}
                </span>
              </p>

              <p className="communityTitle" style={{ textAlign: "left" }}>
                {" "}
                I'm Stuck Please Help
              </p>
            </div>
            <p className="communityAuthor" style={{ textAlign: "left" }}>
              by Picasso
            </p>
            <div className="communityBlurb">
              <span className="communityBtn" style={{ float: "right" }}>
                <ThumbUpIcon style={{ fontSize: "15px" }} />{" "}
                <QuestionAnswerIcon style={{ fontSize: "15px" }} />{" "}
              </span>
            </div>
          </div>
          <div className="communityContainer">
            <div className="communityImageContainer">
              <li>
                <img
                  className="communityImg"
                  src={homefeed7}
                  alt=" home feed img 4"
                />
              </li>
            </div>

            <div className="communityTags">
              <p className="communityTag" style={{ textAlign: "left" }}>
                {" "}
                # Tutorial
                <span className="communityTime" style={{ float: "right" }}>
                  6 hours ago{" "}
                </span>
              </p>

              <p className="communityTitle" style={{ textAlign: "left" }}>
                {" "}
                I'm Stuck Please Help
              </p>
            </div>
            <p className="communityAuthor" style={{ textAlign: "left" }}>
              by Picasso
            </p>
            <div className="communityBlurb">
              <span className="communityBtn" style={{ float: "right" }}>
                <ThumbUpIcon style={{ fontSize: "15px" }} />{" "}
                <QuestionAnswerIcon style={{ fontSize: "15px" }} />{" "}
              </span>
            </div>
          </div>
          <div className="communityContainer">
            <div className="communityImageContainer">
              <li>
                <img
                  className="communityImg"
                  src={homefeed5}
                  alt=" home feed img 4"
                />
              </li>
            </div>

            <div className="communityTags">
              <p className="communityTag" style={{ textAlign: "left" }}>
                {" "}
                # Tutorial
                <span className="communityTime" style={{ float: "right" }}>
                  6 hours ago{" "}
                </span>
              </p>

              <p className="communityTitle" style={{ textAlign: "left" }}>
                {" "}
                I'm Stuck Please Help
              </p>
            </div>
            <p className="communityAuthor" style={{ textAlign: "left" }}>
              by Picasso
            </p>
            <div className="communityBlurb">
              <span className="communityBtn" style={{ float: "right" }}>
                <ThumbUpIcon style={{ fontSize: "15px" }} />{" "}
                <QuestionAnswerIcon style={{ fontSize: "15px" }} />{" "}
              </span>
            </div>
          </div>
          <div className="communityContainer">
            <div className="communityImageContainer">
              <li>
                <img
                  className="communityImg"
                  src={homefeed6}
                  alt=" home feed img 4"
                />
              </li>
            </div>

            <div className="communityTags">
              <p className="communityTag" style={{ textAlign: "left" }}>
                {" "}
                # Tutorial
                <span className="communityTime" style={{ float: "right" }}>
                  6 hours ago{" "}
                </span>
              </p>

              <p className="communityTitle" style={{ textAlign: "left" }}>
                {" "}
                I'm Stuck Please Help
              </p>
            </div>
            <p className="communityAuthor" style={{ textAlign: "left" }}>
              by Picasso
            </p>
            <div className="communityBlurb">
              <span className="communityBtn" style={{ float: "right" }}>
                <ThumbUpIcon style={{ fontSize: "15px" }} />{" "}
                <QuestionAnswerIcon style={{ fontSize: "15px" }} />{" "}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="banner"
        style={{ backgroundImage: `url(${communityHero})` }}
      >
        {" "}
        /
      </div>

      <div className="forumposts">
        <div className="postImg">
          <img
            className="communityImg"
            src={homefeed1}
            alt=" home feed img 4"
          />
        </div>

        <div className="post">
          <h4 className="postTitle"> Art Piece in Progress, any advice?</h4>
          <p className="postAuthor"> by Stella</p>
          <p className="likeComments" style={{ textAlign: "left" }}>
            {" "}
            <QuestionAnswerIcon
              style={{ fontSize: "15px", marginLeft: "10px" }}
            />{" "}
            23 comments <ThumbUpIcon style={{ fontSize: "15px" }} /> 44 likes{" "}
            <span
              className="communityTime"
              style={{
                float: "right",
                fontStyle: "italic",
                marginRight: "10px",
              }}
            >
              6 hours ago{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
