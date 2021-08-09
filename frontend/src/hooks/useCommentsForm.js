import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import apiClient from "../services/apiClient";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

export const useCommentsForm = ({ user, post }) => {
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

  const handleShare = () => {
    let link = window.location.href;
    alert("Share this link: " + link);
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

  // Determine if the user liked the current post based on the array of likes
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
  // Display the correct message for number of comments
  let commentsNum = ``;
  if (comments.length == 1) {
    commentsNum = `${comments.length} Comment`;
  } else {
    commentsNum = `${comments.length} Comments`;
  }

  // Display the correct message for number of likes
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
            onSubmit={handleSubmit(async (data) => {
              await apiClient.createComment(postId, {
                comment: data["Comments"],
              });
            })}
          >
            <div className="commentSecCont">
              <div className="typeComment">
                <input
                  type="text"
                  name="Comments"
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

  return {
    renderLike,
    handleShare,
    commentsNum,
    likesNum,
    commentsForm,
    comments,
  };
};
