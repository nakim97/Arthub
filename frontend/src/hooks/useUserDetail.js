import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

export const useUserProfile = ({ myUser }) => {
  const [isFetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  function joinName(fName, lName) {
    return fName + " " + lName;
  }
  const [posts, setPosts] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const myName = joinName(myUser.first_name, myUser.last_name);
  const username = myUser.username;
  useEffect(() => {
    const fetchPosts = async () => {
      setFetching(true);
      try {
        const { data } = await apiClient.listPosts(myUser);
        setPosts(data.postsByMe);
      } catch (err) {
        setError(err);
      }

      setFetching(false);
    };
    fetchPosts();
  }, [myUser, posts]);

  useEffect(() => {
    const fetchUsers = async () => {
      setFetching(true);
      try {
        const { data } = await apiClient.listUserByEmail(myUser.email);

        setUserInfo(data.user);
      } catch (err) {
        setError(err);
      }

      setFetching(false);
    };
    fetchUsers();
  }, [myUser]);

  return {
    myName,
    username,
    posts,
    userInfo,
  };
};
