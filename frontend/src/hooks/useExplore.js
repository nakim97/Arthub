import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

export const useExplore = ({ user }) => {
  const [myPosts, setMyPosts] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const listAllPosts = async () => {
      setIsLoading(true);
      try {
        const { data } = await apiClient.listAllPosts();
        setMyPosts(data.posts);
      } catch (err) {
        setError(err);
      }
    };

    listAllPosts();
  }, []);

  return {
    myPosts,
  };
};
