import * as React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import ChatIcon from "@material-ui/icons/Chat";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import "./Comments.css";

export default function Comments({user}) {
  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);

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

  const { register, handleSubmit } = useForm();
  let commentsForm;
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
    )
  }
  return (
    <div className="comments">
      <div className="likesAndShare">
        <FavoriteBorderIcon />
        <ShareIcon />
      </div>

      <div className="description">
        <p>This is an amazing piece of work. Real amazing!!</p>
      </div>

      <div className="likeCommentCount">
        <div className="commentCount">
          <div className="numCount">
            <ChatIcon />
            <div className="numCommentsCount">
              <p>23 Comments</p>
            </div>
          </div>
        </div>
        <div className="likeCount">
          <div className="numCount">
            <ThumbUpIcon />
            <p className="numLikesCount">983 Likes</p>
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

        return (
          <div className="commentSection" key={i}>
            <div className="profilePic">
              <img
                className="profileImg"
                src={comment.profile_img_url}
                alt="user profile picture"
              />
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
