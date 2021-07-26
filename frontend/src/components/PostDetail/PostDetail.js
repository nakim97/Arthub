import "./PostDetail.css" ;
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";
import Navbar from "../Navbar/Navbar";
import userBanner from "../../Assets/userBanner.png";
import person2 from "../../Assets/person2.png";
/*
 - Fragment tags as return only returns one thing<> </>*/
export default function PostDetail({user, handleOnLogout}) {
  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchPostById = async () => {
      setIsLoading(true);
      try {
        const { data } = await apiClient.listPostWithId(postId);
        // console.log(data.posting)
        setPost(data.posting);
      } catch (err) {
        //console.log("hit")
        setError(err);
      }

      setIsLoading(false);
    };
    fetchPostById();
  }, [postId]);

  const renderPostContent = () => {
    if (isLoading) return <h1>Loading...</h1>;
    if (error || !post) return <p className="description">No post found</p>;

    return (
      <>
      <div className="userInfo">
        <div className="profilePic">
          <img
            className="profileImg"
            src={post.profile_img_url}
            alt="user profile picture"
          />
        </div>

        <div className="username">
          <p>{post.username}</p>
        </div>
      </div>

      <div className="banner">
        <img
          className="bannerImg"
          src={post.post_img_url}
          alt="people standing on a mountain"
        />
      </div>
      {/* <p className="name">{post?.name}</p>
      <img className="image" src={post?.image} alt={"Gif of " + post?.name}></img>
        <p className="description">{post?.description}</p>
        <div className="meta">
          <p className={`price`}>
            {"$"+post?.price}
          </p>
          {/* <p className="date">{formatDate(post?.postedAt)}</p>
        </div> */}
      </>
    );
  };

  return (
    <div className="user">
      <Navbar user={user} handleOnLogout={handleOnLogout} />
      {renderPostContent()}
      
      </div>
    // <div className="ProductDetail">
    //   <div className="card">
    //     <div className="title">
    //       <h3>Product #{postId}</h3>
    //       <p className="category">{post?.category}</p>
    //     </div>

    //     
    //   </div>
    // </div>
  );
}
