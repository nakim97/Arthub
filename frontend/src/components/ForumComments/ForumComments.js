import * as React from "react";
import ShareIcon from "@material-ui/icons/Share";
import ChatIcon from "@material-ui/icons/Chat";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import person2 from "../../Assets/person2.png";
import { Link } from "react-router-dom";
import "./ForumComments.css";
import { useForumCommentsForm } from "../../hooks/useForumCommentsForm";

export default function ForumComments({ user, post }) {
  const {
    renderLike,
    handleShare,
    commentsNum,
    likesNum,
    commentsForm,
    comments,
  } = useForumCommentsForm({ user, post });

  return (
    <div className="comments">
      <div className="likesAndShare">
        {renderLike}
        <button className="clears" onClick={handleShare}>
          <ShareIcon className="icons" />
        </button>
      </div>

      <div className="description">
        <p>{post.forum_description}</p>
      </div>

      <div className="likeCommentCount">
        <div className="commentCount">
          <div className="numCount">
            <ChatIcon />
            <div className="numCommentsCount">
              <p>{commentsNum}</p>
            </div>
          </div>
        </div>
        <div className="likeCount">
          <div className="numCount">
            <FavoriteIcon />
            <p className="numLikesCount">{likesNum}</p>
          </div>
        </div>
      </div>

      <div className="title">
        <h2>Comments</h2>
      </div>

      {commentsForm}

      {comments.map((comment, i) => {
        var dateNew = new Date(comment.comment_created_at);
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
        var date = new Intl.DateTimeFormat("default", options).format(dateNew);

        // Return a profile img in the comments
        const comment_profile_url =
          comment.profile_img_url == null || comment.profile_img_url == "null";
        const comment_profile_img = comment_profile_url ? (
          <>
            {/* Return default image */}
            <img className="profilePic" src={person2} alt="user profile" />
          </>
        ) : (
          <>
            {/* Use our own image */}
            <img
              className="profilePic"
              src={`${comment.profile_img_url}`}
              alt="my profile"
            />
          </>
        );
        return (
          <div className="commentSection" key={i}>
            <div className="profilePic">
              <Link to={`/user/${comment.userId}`}>{comment_profile_img}</Link>
            </div>

            <div className="userInfo">
              <div className="subUserInfo">
                <div className="commentUsername">
                  <p>{comment.username}</p>
                </div>
                <div className="commentDescription">
                  <p>{comment.comment_description}</p>
                </div>
                <div className="commentTimestamp">
                  <p>{date}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
