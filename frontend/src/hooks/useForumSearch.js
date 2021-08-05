import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

export const useForumSearch = ({ user, forumTerm }) => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setError] = useState({});

  useEffect(() => {
    const fetchForumPosts = async () => {
      setFetching(true);
      try {
        const { data } = await apiClient.searchForumPosts(forumTerm);
        // console.log(data)
        setPosts(data.searches);
      } catch (err) {
        setError(err);
      }

      setFetching(false);
    };
    fetchForumPosts();
  }, [user, posts]);

  return { posts };
};
