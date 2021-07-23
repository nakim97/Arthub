import "./PostDetail.css" ;
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";
/*
 - Fragment tags as return only returns one thing<> </>*/
export default function PostDetail({user}) {
  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchPostById = async () => {
      setIsLoading(true);
      try {
        const { data } = await apiClient.listPosts(user);
        console.log(data)
        setPost(data);
      } catch (err) {
        setError(err);
      }

      setIsLoading(false);
    };
    fetchPostById();
  }, [postId]);
  const renderProductContent = () => {
    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <p className="description">No post found</p>;

    return (
      <>
      <p className="name">{post?.name}</p>
      <img className="image" src={post?.image} alt={"Gif of " + post?.name}></img>
        <p className="description">{post?.description}</p>
        <div className="meta">
          <p className={`price`}>
            {"$"+post?.price}
          </p>
          {/* <p className="date">{formatDate(post?.postedAt)}</p> */}
        </div>
      </>
    );
  };

  return (
    <div className="ProductDetail">
      <div className="card">
        <div className="title">
          <h3>Product #{postId}</h3>
          <p className="category">{post?.category}</p>
        </div>

        {renderProductContent()}
      </div>
    </div>
  );
}
