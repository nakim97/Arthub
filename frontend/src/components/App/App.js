import "./App.css";
import { useState, useEffect } from "react";
import Home from "../Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import About from "../About/About";
import Explore from "../Explore/Explore";
import Learning from "../Learning/Learning";
import Market from "../Market/Market";
import Community from "../Community/Community";
import apiClient from "../../services/apiClient";
import UserProfile from "../UserProfile/UserProfile";
import EditPortfolio from "../EditPortfolio/EditPortfolio";
import CreateForumPost from "../CreateForumPost/CreateForumPost";
import CommunityPostEdit from "../CommunityPostEdit/CommunityPostEdit";
import Upload from "../Upload/Upload";
import EditProfile from "../EditProfile/EditProfile";
import PostDetail from "../PostDetail/PostDetail";
import PostSearch from "../PostSearch/PostSearch";

export default function App() {
  const [error, setError] = useState(null);
  // This is just in case for filtering
  const [filterInputValue, setInputValue] = useState(null);
  const [user, setUser] = useState({});
  const [term, setTerm] = useState(null);

  // Fetch users using the jwt token and save or retrieve from local storage
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken();
      if (data) setUser(data.user);
      if (error) setError(error);
    };
    const token = localStorage.getItem("rate_my_setup_token");
    if (token) {
      apiClient.setToken(token);
      fetchUser();
    }
  }, []);
  const handleOnLogout = async () => {
    await apiClient.logoutUser();
    setUser({});
    setError(null);
  };
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home user={user} handleOnLogout={handleOnLogout} term={term} setTerm={setTerm}   />}
          />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} term={term} setTerm={setTerm}   />}
          />
          <Route
            path="/register"
            element={<Register user={user} setUser={setUser} term={term} setTerm={setTerm}   />}
          />
          <Route
            path="/about"
            element={<About user={user} handleOnLogout={handleOnLogout} term={term} setTerm={setTerm}   />}
          />
          <Route
            path="/explore"
            element={<Explore user={user} handleOnLogout={handleOnLogout} term={term} setTerm={setTerm}  />}
          />
          <Route
            path="/learning"
            element={<Learning user={user} handleOnLogout={handleOnLogout} term={term} setTerm={setTerm}  />}
          />
          <Route
            path="/market"
            element={<Market user={user} handleOnLogout={handleOnLogout} term={term} setTerm={setTerm}  />}
          />
          <Route
            path="/community"
            element={<Community user={user} handleOnLogout={handleOnLogout} term={term} setTerm={setTerm}  />}
          />
          <Route
            path="/me"
            element={
              <UserProfile user={user} handleOnLogout={handleOnLogout} term={term} setTerm={setTerm}  />
            }
          />
          <Route
            path="/upload"
            element={<Upload user={user} handleOnLogout={handleOnLogout} term={term} setTerm={setTerm}  />}
          />
          <Route
            path="/search"
            element={<PostSearch user={user} handleOnLogout={handleOnLogout} term={term} setTerm={setTerm}  />}
          />
          <Route
            path="/edit"
            element={
              <EditProfile user={user} setUser={setUser} handleOnLogout={handleOnLogout} term={term} setTerm={setTerm}  />
            }
          />
          <Route
            path="/post/:postId"
            element={<PostDetail user={user} handleOnLogout={handleOnLogout} term={term} setTerm={setTerm}  />}
          />
          <Route
            path="/editportfolio"
            element={
              <EditPortfolio user={user} handleOnLogout={handleOnLogout} term={term} setTerm={setTerm}  />
            }
          />
          <Route
            path="/createforumpost"
            element={
              <CreateForumPost user={user} handleOnLogout={handleOnLogout} term={term} setTerm={setTerm}  />
            }
          />
          <Route
            path="/communitypostedit"
            element={
              <CommunityPostEdit user={user} handleOnLogout={handleOnLogout} term={term} setTerm={setTerm}  />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
