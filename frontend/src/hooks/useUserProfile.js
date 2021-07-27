import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

export const useUserProfile = ({ user }) => {
  // console.log(user)
  const [isFetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  function joinName(fName, lName) {
    return fName + " " + lName;
  }
  const [posts, setPosts] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const myName = joinName(user.first_name, user.last_name);
  const username = user.username;
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
  }, [user]);

  useEffect(() => {
    const fetchUsers = async () => {
      setFetching(true);
      try {
        const { data } = await apiClient.listUserByEmail(user.email);

        setUserInfo(data.user);
        // console.log("user", userInfo);
      } catch (err) {
        setError(err);
      }

      setFetching(false);
    };
    fetchUsers();
  }, [user]);

  return {
    myName,
    username,
    posts,
    userInfo,
  };
};
