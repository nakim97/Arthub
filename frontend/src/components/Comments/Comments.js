import * as React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import ChatIcon from "@material-ui/icons/Chat";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import person2 from "../../Assets/person2.png";
import { Link } from "react-router-dom";
import "./Comments.css";

export default function Comments({ user, post }) {
  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingL, setIsLoadingL] = useState(false);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [error, setError] = useState(false);
  // Get comments
  useEffect(() => {
    const fetchCommentsById = async () => {
      setIsLoading(true);
      try {
        const { data } = await apiClient.listCommentsWithPostId(postId);
        setComments(data.comments);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };

    fetchCommentsById();
  }, [postId, comments]);
  // Get likes
  useEffect(() => {
    const fetchLikesById = async () => {
      setIsLoadingL(true);
      try {
        const { data } = await apiClient.listLikesWithPostId(postId);
        setLikes(data.likes.likes);
      } catch (err) {
        setError(err);
      }
      setIsLoadingL(false);
    };

    fetchLikesById();
  }, [postId, likes]);

  const handleAddLike = async () => {
    setIsLoading(true);
    try {
      const { data } = await apiClient.createLike(postId);
      setLikes(data.like.likes);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };

  const handleDeleteLike = async () => {
    setIsLoading(true);
    try {
      const { data } = await apiClient.deleteLike(postId);
      setLikes(data.liked.likes);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };

  let isLiked = false;
  for (let i in likes) {
    if (likes[i][0] == user.id) {
      isLiked = true;
      break;
    }
  }
  const likeButton = isLiked ? (
    <>
      {/* We did like this, so show a full icon */}
      <button className="clears" onClick={handleDeleteLike}>
        <FavoriteIcon className="icons" />
      </button>
    </>
  ) : (
    <>
      {/* We did not like this, so show an empty icon */}
      <button className="clears" onClick={handleAddLike}>
        <FavoriteBorderIcon className="icons" />
      </button>
    </>
  );

  const handleShare = () => {
    let link = window.location.href;
    alert("Share this link: " + link);
  };

  const isAuthenticated = Boolean(user.email);
  const renderLike = isAuthenticated ? (
    <>{likeButton}</>
  ) : (
    <>
      <p>Sign in to like</p>
    </>
  );
  const { register, handleSubmit } = useForm();

  let commentsForm;
  // Display the message for comments
  let commentsNum = ``;
  if (comments.length == 1) {
    commentsNum = `${comments.length} Comment`;
  } else {
    commentsNum = `${comments.length} Comments`;
  }

  // Display the message for likes
  let likesNum = ``;
  if (likes.length == 1) {
    likesNum = `${likes.length} Like`;
  } else {
    likesNum = `${likes.length} Likes`;
  }

  if (user.email) {
    commentsForm = (
      <>
        <div className="searchForm">
          <form
            onSubmit={handleSubmit(
              async (data) =>
                await apiClient.createComment(postId, {
                  comment: data["Comments"],
                })
            )}
          >
            <div className="commentSecCont">
              <div className="typeComment">
                <input
                  type="text"
                  placeholder="Comments"
                  {...register("Comments", {})}
                />
              </div>

              <div className="submitComment">
                <input type="submit" />
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
  return (
    <div className="comments">
      <div className="likesAndShare">
        {renderLike}
        <button className="clears" onClick={handleShare}>
          <ShareIcon className="icons" />
        </button>
      </div>

      <div className="description">
        <p>{post.post_description}</p>
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
            <ThumbUpIcon />
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
        // console.log(comment)
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
