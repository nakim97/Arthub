import "./ForumDetail.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";
import Navbar from "../Navbar/Navbar";
import ForumComments from "../ForumComments/ForumComments";
import person2 from "../../Assets/person2.png";
import { Link } from "react-router-dom";
/*
 - Fragment tags as return only returns one thing <> </> */
export default function ForumDetail({ user, handleOnLogout, term, setTerm }) {
  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchPostById = async () => {
      setIsLoading(true);
      try {
        const { data } = await apiClient.listForumPostWithId(postId);
        // console.log(data)
        setPost(data.posting);
      } catch (err) {
        setError(err);
      }

      setIsLoading(false);
    };
    fetchPostById();
  }, [postId]);

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

          <div className="username">
            <p>{post.username}</p>
          </div>
        </div>

        <div className="banner-">
          <img className="bannerImg" src={post.forum_img_url} alt="forum" />
        </div>
        <ForumComments user={user} post={post} />
      </>
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
