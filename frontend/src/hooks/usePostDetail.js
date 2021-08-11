import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiClient from "../services/apiClient";
import person2 from "../Assets/person2.png";
import { useParams } from "react-router";
import Comments from "../components/Comments/Comments";

export const usePostDetail = ({ user }) => {
  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchPostById = async () => {
      setIsLoading(true);
      try {
        const { data } = await apiClient.listPostWithId(postId);

        setPost(data.posting);
      } catch (err) {
        setError(err);
      }

      setIsLoading(false);
    };
    fetchPostById();
  }, [postId]);

  /*
 - Fragment tags as return only returns one thing <> </> */
  const profile_url =
    post.profile_img_url == null || post.profile_img_url == "null";
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
        src={`${post.profile_img_url}`}
        alt="my profile"
      />
    </>
  );
  const renderPostContent = () => {
    if (isLoading) return <h1>Loading...</h1>;
    if (error || !post) return <p className="description">No post found</p>;

    return (
      <>
        <div className="userInfo">
          <div className="profilePic">
            <Link to={`/user/${post.user_id}`} className="link-">
              {profile_img}
            </Link>
          </div>
        </div>

        <div className="nameContainer" style={{ paddingLeft: "50px" }}>
          <div className="username">
            <p>{post.username}</p>
          </div>
        </div>

        <div className="uploadPostTitle">
          <p>{post.post_title}</p>
        </div>

        <div className="banner-">
          <img className="bannerImg" src={post.post_img_url} alt="post img" />
        </div>
        <Comments user={user} post={post} />
      </>
    );
  };

  return {
    renderPostContent,
  };
};
