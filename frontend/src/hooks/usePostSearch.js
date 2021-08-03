import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

export const usePostSearch = ({ user, term }) => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setError] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      setFetching(true);
      try {
        const { data } = await apiClient.searchPosts(term);
        setPosts(data.searches);
      } catch (err) {
        setError(err);
      }

      setFetching(false);
    };
    fetchPosts();
  }, [user, posts]);

  return { posts };
};
