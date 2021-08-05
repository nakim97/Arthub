import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

export const useEditForum = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setError] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      setFetching(true);
      try {
        const { data } = await apiClient.listForumPosts(user);
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
      const { data } = await apiClient.deleteForumPost(postId);
    } catch (err) {
      setError(err);
    }
    setIsProcessing(false);
  };

  return { handleDelete, posts };
};
