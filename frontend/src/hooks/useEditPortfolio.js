import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/apiClient";

export const useEditPortfolio = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});

  const handleDelete = async (postId) => {
    setIsProcessing(true);

    const { data, error } = await apiClient.deletePost({
      postId: postId,
    });
    setIsProcessing(false);
  };

  return { handleDelete };
};
