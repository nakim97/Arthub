import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

export const useEditPortfolio = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setError] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      setFetching(true);
      try {
        const { data } = await apiClient.listPosts(user);

        setPosts(data.postsByMe);
      } catch (err) {
        setError(err);
      }

      setFetching(false);
    };
    fetchPosts();
  }, [user, posts]);

  const handleDelete = async (postId) => {
    setIsProcessing(true);
    try {
      const { data } = await apiClient.deletePost(postId);
    } catch (err) {
      setError(err);
    }
    setIsProcessing(false);
  };

  return { handleDelete, posts };
};
