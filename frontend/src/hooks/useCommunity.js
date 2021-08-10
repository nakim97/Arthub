import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiClient from "../services/apiClient";

export const useCommunity = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [myPostsF, setMyPostsF] = useState([]);

  // Gets posts to display on the page
  useEffect(() => {
    const listAllPostsF = async () => {
      setIsLoading(true);
      try {
        const { data } = await apiClient.listAllPostsD();
        setMyPostsF(data.posts);
      } catch (err) {
        setError(err);
      }
    };
    listAllPostsF();
  }, []);

  const button = Boolean(user?.email) ? (
    <>
      <div className="forumBtnContainer">
        <div className="forumBtn1">
          <div className="forumCreate">
            <Link to="/createforumpost">Create Post</Link>
          </div>
        </div>
        <div className="forumBtn2">
          <div className="forumList">
            <Link to="/editforumpost">See Your Posts</Link>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="forumBtn">
        <p>You must be logged in to create a forum post.</p>
      </div>
    </>
  );

 



  return {
    button,
    myPostsF,
  };
};
